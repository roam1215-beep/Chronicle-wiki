import { useState } from "react";

// ───────────────────────────────────────────────────────────
// 스토아 팩토리 — 서사(Narrative) 초안 생성기 v0.1 · 문체 탐침
// 출력 = 완성품이 아니라 "인격 문체 샘플". 돌려보며 행동문법·톤을 교정한다.
// 캐논·인격 함수·챕터1 척추 = 위키 스냅샷(미검증 가안 포함).
// ───────────────────────────────────────────────────────────

const SYSTEM = `당신은 게임 「크로니클(Chronicle)」의 서사 초안 생성기다. 사용자가 준 스테이지·인격·키워드로, 아래 캐논·인격 함수·척추를 반드시 지키는 서사 초안(로그라인 + 짧은 전개)을 만든다. 서사는 카드가 아니라 흐름이다. 출력은 한국어.

[세계관 캐논 — 불변]
- 이오니아: 바다·섬의 패권국. 기만적 식민주의(자칭 '황금의 도시'). 원주민에게 거주세를 물려 옥죔. 아테네 결.
- 도리아: 분지의 억압 세력. 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 라키아: 이오니아·도리아 사이 경계 소국, 테오도라의 고향. 이오니아엔 적국, 도리아엔 억압받는 백성(이중 소외). 발드의 약탈 대상.
- 발드: 전쟁이 끝난 줄 모르는 이오니아 낙오병. 자기를 이긴 도리아 정규군은 못 건드리고 만만한 라키아만 약탈. 해방군 자처하나 실은 약탈자 = 위선. 회차 인격에 따라 테오도라의 거울상으로 나타남(무모↔용기·교활↔지혜·위선↔정의).
- 무리(선주민): 이 땅의 원래 주인, 인간(정복자)에게 땅을 빼앗긴 자들. / 인간: 나중에 온 정복자·정착민(가해를 인지 못 함). 테오도라조차 인간 측 시점의 맹점을 안고 있다.
- 테오도라: 라키아인, 인간, 황혼 태생. 4주덕(용기·지혜·정의·절제) 중 절제가 빠짐 = "절제 없는 자"(신념대로 맹목적으로 나아가며 행동이 앞서는 자).
- 오더1 큰 줄기: 라키아의 테오도라가 발드 약탈에 맞섬 → 도리아 패권에 저항 → 미궁 반격의 효시. 끝에 별이 됨(카타스테리스모스). '미궁'은 시선의 은유지 물리 실체 아님.

[인격 함수 — 인격 = 동기범위 × 행동문법]
- 용기: 동기=가족(범위2). 행동문법=정면돌파·맞서 결단·물러서지 않음. 어머니 생존(두 자매 안고 탈출), 키레네아=전사, 입양 사실 모름. 결: 정면적 신념.
- 지혜: 동기=자기(범위1). 행동문법=최단·최적·치명·손실 최소·분석적. 어머니 생존(키레네아만 데리고 도망, 재회), 키레네아=궁수, 입양 사실 앎. 결: 날카로운 분석·세계관 모순 포착·자기 중심의 셈.
- 정의: 동기=마을(범위3). 행동문법=동행·구원·함께. 어머니 사망(마을 이끌고 후미에서 죽음), 키레네아=사제, 마을 손에 자람. 결: 공동체·타인을 향함.
→ 같은 스테이지라도 인격마다 다른 흐름이 된다. 인격 함수가 서사의 결을 가른다.

[척추 — 챕터1 "버려진 아이" (현재 박힌 부분)]
- 1스테이지 "라키아의 들개": 고향 라키아 재침공. 손에 쥔 검을 처음 휘두름. 도입 회상(5세 기원)→현재 접합. 스테이지 보스=성급한 프리키온(황금에 눈먼·성급한 도적 두목).
- 2스테이지 "라키아의 사자": [서사 미정 — 챕터1 중반, 발드의 그림자가 다가옴]
- 3스테이지 "골짜기는 더 이상 울지 않는다": 챕터1 매듭. 발드 대면. 약탈자의 위선이 드러남. 테오도라가 자기 인격의 거울상과 맞섬. 챕터 보스=발드.

[톤 — 크로니클 공용]
판타지 플루타르크 영웅전체. 고전적·간결·무게 있게. 과장·현대어·이모지 금지. 영웅전 서술자의 시점.

[출력 — 반드시 JSON만. 마크다운 펜스·설명·서두 금지]
{"flows":[{"persona":"용기","logline":"한 문장 로그라인","beat":"짧은 전개 1~2문장"}]}
선택된 인격마다 하나씩. logline=그 스테이지를 그 인격으로 압축한 한 문장. beat=흐름의 짧은 전개. 인격마다 반드시 달라야 한다(인격 함수가 묻어나야 함).`;

const PERSONAS = [
  { key: "용기", line: "#b8463a", glyph: "Ⅰ", motto: "가족 · 정면돌파" },
  { key: "지혜", line: "#5c83a0", glyph: "Ⅱ", motto: "자기 · 최적·치명" },
  { key: "정의", line: "#6f9a86", glyph: "Ⅲ", motto: "마을 · 동행·구원" },
];

const STAGES = [
  { id: "1-1", label: "챕터1 · 1 — 라키아의 들개", ready: true },
  { id: "1-2", label: "챕터1 · 2 — 라키아의 사자", ready: true, note: "서사 미정" },
  { id: "1-3", label: "챕터1 · 3 — 골짜기는 더 이상 울지 않는다", ready: true },
  { id: "2-x", label: "챕터2 · 단말마와 메아리 — 척추 미정", ready: false },
  { id: "3-x", label: "챕터3 · 신탁 — 척추 미정", ready: false },
];

const ACCENT = "#c2a35c";

export default function NarrativeFactory() {
  const [stage, setStage] = useState("1-1");
  const [selected, setSelected] = useState(["용기", "지혜", "정의"]);
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [flows, setFlows] = useState([]);
  const [raw, setRaw] = useState("");

  const toggle = (k) =>
    setSelected((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));

  const orderP = (arr) => {
    const o = { 용기: 0, 지혜: 1, 정의: 2 };
    return [...arr].sort((a, b) => (o[a.persona] ?? 9) - (o[b.persona] ?? 9));
  };

  const generate = async () => {
    if (selected.length === 0) { setError("인격을 하나 이상 선택해주세요."); return; }
    const st = STAGES.find((s) => s.id === stage);
    setLoading(true); setError(""); setFlows([]); setRaw("");

    const userMsg =
      `스테이지: ${st.label}\n` +
      `인격: ${selected.join(", ")}\n` +
      (keywords.trim() ? `키워드/방향: ${keywords.trim()}\n` : "") +
      `\n위 스테이지를 각 인격의 서사 흐름으로 펼쳐라. 같은 스테이지라도 인격마다 다른 흐름이어야 한다. JSON만 출력.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM,
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
      const clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      try {
        const parsed = JSON.parse(clean);
        if (parsed && Array.isArray(parsed.flows) && parsed.flows.length) setFlows(orderP(parsed.flows));
        else setRaw(text);
      } catch { setRaw(text); }
    } catch { setError("생성 중 오류가 났습니다. 다시 시도해주세요."); }
    finally { setLoading(false); }
  };

  const meta = (k) => PERSONAS.find((p) => p.key === k) || PERSONAS[0];

  return (
    <div className="sf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nanum+Myeongjo:wght@400;700;800&display=swap');
        .sf-root{ --bg:#0c0d12; --panel:#15161d; --panel2:#1b1c25; --bone:#e9e3d4; --mute:#928c7d;
          --faint:#5d5849; --gold:${ACCENT}; --line:rgba(194,163,92,.22);
          min-height:100%;
          background:radial-gradient(1200px 600px at 80% -10%, rgba(194,163,92,.06), transparent 60%),
            radial-gradient(900px 500px at -5% 110%, rgba(90,110,130,.06), transparent 55%), var(--bg);
          color:var(--bone); font-family:'Nanum Myeongjo',serif; padding:42px 30px 64px; box-sizing:border-box; }
        .sf-root *{ box-sizing:border-box; }
        .wrap{ max-width:1000px; margin:0 auto; }
        .mast{ border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:30px;
          display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; }
        .brand{ display:flex; flex-direction:column; gap:4px; }
        .eyebrow{ font-family:'Cormorant Garamond',serif; letter-spacing:.42em; text-transform:uppercase; font-size:12px; color:var(--gold); font-weight:600; }
        .brand h1{ margin:0; font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic; font-size:44px; line-height:1; }
        .brand .kr{ font-size:15px; color:var(--mute); margin-top:7px; letter-spacing:.04em; }
        .ver{ font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--faint); border:1px solid var(--line); padding:6px 12px; border-radius:2px; letter-spacing:.1em; white-space:nowrap; }
        .grid{ display:grid; grid-template-columns:330px 1fr; gap:30px; align-items:start; }
        @media (max-width:820px){ .grid{ grid-template-columns:1fr; } }
        .panel{ background:linear-gradient(180deg,var(--panel),var(--panel2)); border:1px solid var(--line); border-radius:4px; padding:24px; position:sticky; top:20px; }
        @media (max-width:820px){ .panel{ position:static; } }
        .label{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.28em; font-size:11px; color:var(--gold); font-weight:600; margin:0 0 9px; display:block; }
        .field{ margin-bottom:20px; }
        select.in, input.in{ width:100%; background:#0c0d12; border:1px solid var(--line); color:var(--bone); font-family:'Nanum Myeongjo',serif; font-size:14px; padding:11px 12px; border-radius:3px; outline:none; }
        select.in:focus, input.in:focus{ border-color:var(--gold); }
        select.in option:disabled{ color:#4a4639; }
        .chips{ display:flex; gap:8px; }
        .chip{ flex:1; cursor:pointer; border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:11px 6px 9px; text-align:center; transition:all .18s; user-select:none; }
        .chip .g{ font-family:'Cormorant Garamond',serif; font-size:15px; color:var(--faint); line-height:1; }
        .chip .n{ font-weight:700; font-size:14px; margin-top:3px; color:var(--mute); }
        .btn{ width:100%; margin-top:4px; cursor:pointer; border:1px solid var(--gold);
          background:linear-gradient(180deg, rgba(194,163,92,.16), rgba(194,163,92,.06));
          color:var(--bone); font-family:'Cormorant Garamond',serif; font-weight:600; letter-spacing:.22em; text-transform:uppercase; font-size:14px; padding:13px; border-radius:3px; transition:all .2s; }
        .btn:hover:not(:disabled){ background:rgba(194,163,92,.22); }
        .btn:disabled{ opacity:.5; cursor:wait; }
        .note{ font-size:11.5px; color:var(--faint); line-height:1.6; margin-top:18px; border-top:1px solid var(--line); padding-top:14px; }
        .stage{ min-height:300px; }
        .empty,.loading{ height:100%; min-height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; }
        .empty{ border:1px dashed var(--line); border-radius:4px; color:var(--faint); text-align:center; padding:30px; }
        .empty .lab{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:26px; color:var(--mute); }
        .pulse{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:22px; color:var(--gold); animation:breathe 1.6s ease-in-out infinite; }
        @keyframes breathe{ 0%,100%{opacity:.35;} 50%{opacity:1;} }
        .err{ border:1px solid #7a3b34; background:rgba(140,60,52,.12); color:#d99; padding:14px 16px; border-radius:3px; font-size:14px; }
        .flows{ display:flex; flex-direction:column; gap:18px; }
        .flow{ border:1px solid var(--line); border-left-width:2px; border-radius:4px; padding:20px 22px; background:#101119; opacity:0; transform:translateY(8px); animation:rise .5s ease forwards; }
        @keyframes rise{ to{ opacity:1; transform:none; } }
        .fhead{ display:flex; align-items:center; gap:10px; margin-bottom:13px; }
        .badge{ font-family:'Cormorant Garamond',serif; font-size:15px; width:25px; height:25px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid currentColor; }
        .pname{ font-weight:700; font-size:14px; }
        .pmotto{ font-size:11px; color:var(--faint); margin-left:auto; letter-spacing:.04em; }
        .logline{ font-size:18px; line-height:1.5; color:var(--bone); font-weight:700; margin-bottom:10px; letter-spacing:.01em; }
        .beat{ font-size:14.5px; line-height:1.65; color:#b9b3a4; }
        .rawbox{ white-space:pre-wrap; font-family:'Nanum Myeongjo',serif; font-size:14px; line-height:1.6; color:#cfc9ba; border:1px solid var(--line); border-radius:4px; padding:18px; background:#101119; }
      `}</style>

      <div className="wrap">
        <header className="mast">
          <div className="brand">
            <span className="eyebrow">Stoa Factory</span>
            <h1>Narrative</h1>
            <span className="kr">크로니클 · 서사 초안 생성기 — 문체 탐침 (출력 = 샘플)</span>
          </div>
          <span className="ver">v0.1 · 흐름</span>
        </header>

        <div className="grid">
          <aside className="panel">
            <div className="field">
              <label className="label">스테이지</label>
              <select className="in" value={stage} onChange={(e) => setStage(e.target.value)}>
                {STAGES.map((s) => (
                  <option key={s.id} value={s.id} disabled={!s.ready}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="label">인격 (복수 = 동시 출력)</label>
              <div className="chips">
                {PERSONAS.map((p) => {
                  const on = selected.includes(p.key);
                  return (
                    <div key={p.key} className="chip" onClick={() => toggle(p.key)}
                      style={on ? { borderColor: p.line, boxShadow: `inset 0 2px 0 ${p.line}`, background: "#16171f" } : {}}>
                      <div className="g" style={on ? { color: p.line } : {}}>{p.glyph}</div>
                      <div className="n" style={on ? { color: "var(--bone)" } : {}}>{p.key}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="field">
              <label className="label">키워드 · 방향 (선택)</label>
              <input className="in" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="예: 첫 출진, 어머니의 검…" />
            </div>

            <button className="btn" onClick={generate} disabled={loading}>
              {loading ? "엮는 중…" : "흐름 생성"}
            </button>

            <p className="note">
              출력은 <b style={{ color: "var(--mute)" }}>완성품이 아니라 인격 문체 샘플</b>입니다. 세 인격의 흐름이
              실제로 갈리는지(용기=정면 / 지혜=분석 / 정의=공동체) 보며 행동문법을 교정하세요.
              <br /><br />
              챕터2·3은 척추가 비어 비활성입니다. 행동문법·캐논은 미검증 가안.
            </p>
          </aside>

          <section className="stage">
            {error && <div className="err">{error}</div>}
            {loading && <div className="loading"><div className="pulse">아직 쓰이지 않은 이야기를 부른다…</div></div>}
            {!loading && !error && flows.length === 0 && !raw && (
              <div className="empty"><div className="lab">tabula rasa</div><div>스테이지·인격을 고르고 흐름 생성을 누르세요.</div></div>
            )}
            {!loading && raw && <div className="rawbox">{raw}</div>}
            {!loading && flows.length > 0 && (
              <div className="flows">
                {flows.map((f, i) => {
                  const m = meta(f.persona);
                  return (
                    <article key={i} className="flow" style={{ borderLeftColor: m.line, animationDelay: `${i * 0.12}s` }}>
                      <div className="fhead">
                        <span className="badge" style={{ color: m.line }}>{m.glyph}</span>
                        <span className="pname" style={{ color: m.line }}>{f.persona}</span>
                        <span className="pmotto">{m.motto}</span>
                      </div>
                      <div className="logline">{f.logline}</div>
                      <div className="beat">{f.beat}</div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
