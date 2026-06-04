import { useState } from "react";

// ───────────────────────────────────────────────────────────
// 스토아 팩토리 — 서사 흐름 제조기 v2
// 핵심: 출력이 곧 phase_matrix(기록 생성기)의 입력이 된다.
//   인격별 × 페이즈 단위(기원/1/2/3/운명) → 각 페이즈의 국면 문장 + 키워드 후보.
//   국면 문장 → phase_matrix 페이즈 국면 칸 / 키워드 → phase_matrix keywords 칸.
//   기원은 체크박스 토글. 키워드는 생성기가 제안(사람은 큐레이션만).
// ───────────────────────────────────────────────────────────

const SYSTEM = `당신은 게임 「크로니클(Chronicle)」의 서사 흐름 제조기다. 너의 출력은 그 자체로 완성품이 아니라, 기록 카드 생성기에 그대로 입력될 "페이즈별 국면 + 키워드" 세트다. 한 스테이지를, 선택된 인격마다, 페이즈 단위(기원/1/2/3/운명)로 분해해 각 페이즈의 국면(situation)과 그 페이즈에서 카드 소재가 될 키워드를 만든다. 출력은 한국어.

[세계관 캐논 — 불변]
- 이오니아: 바다·섬의 패권국. 기만적 식민(자칭 '황금의 도시'). 원주민에게 거주세를 물려 옥죔. 아테네 결.
- 도리아: 분지의 억압 세력. 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 라키아: 이오니아·도리아 사이 경계 소국, 테오도라의 고향. 이오니아엔 적국, 도리아엔 억압받는 백성(이중 소외). 발드의 약탈 대상. (모레아 산맥·산골짜기.)
- 발드: 전쟁이 끝난 줄 모르는 이오니아 낙오병. 만만한 라키아만 약탈. 해방군 자처하나 약탈자 = 위선. 인격에 따라 테오도라의 거울상.
- 무리(선주민): 이 땅의 원래 주인, 인간(정복자)에게 땅을 빼앗긴 자들. / 인간: 나중에 온 정복자(가해 인지 못 함).
- 테오도라: 라키아인, 인간, 황혼 태생. 4주덕 중 절제가 빠짐 = "절제 없는 자"(신념대로 맹목적으로 나아가며 행동이 앞서는 자).
- 오더1: 라키아의 테오도라가 발드 약탈에 맞섬 → 도리아 패권 저항. '미궁'은 시선의 은유.

[인격 함수 — 같은 사건도 인격마다 다르게 지각하고 통과한다]
- 용기: 동기=가족. 행동=정면돌파·맞서 결단·물러서지 않음. 화법 느낌=마음이 먼저 정해진 사람의 목소리. 직업=전사.
- 지혜: 동기=자기. 행동=최단·최적·치명·손실 최소·분석적. 화법 느낌=한 발 떨어져 보는 목소리, 약간의 냉소. 직업=궁수.
- 정의: 동기=마을. 행동=동행·구원·함께. 화법 느낌=곁(타인)을 향하는 목소리. 직업=사제.

[기원 분기 — 어머니의 선택(테오도라 5세). 인격이 갈리는 분기점]
- 용기: 어머니가 두 자매를 품에 안고 불타는 마을을 빠져나와 함께 산다(어머니·키레네아 생존). 키레네아=전사.
- 지혜: 어머니가 키레네아만 데리고 도망쳐, 홀로 도망친 테오도라가 뒤늦게 재회한다. 자신이 주워온 자식임을 깨닫는다. 키레네아=궁수.
- 정의: 어머니가 마을 사람들과 자매를 이끌고 피신시키다 후미에서 죽는다. 테오도라는 마을 사람들 손에 자란다. 키레네아=사제.

[스테이지 척추 — 1스테이지 "라키아의 들개" (공통 골격, 사건의 뼈대 — 인격 무관)]
- 1페이즈(침공): 한밤, 발드의 낙오병들이 라키아 변방 마을에 들이닥친다. 잠에서 깬 테오도라가 처음 검을 든다.
- 2페이즈(격퇴와 추격): 마을에서 도적들을 밀어냈으나, 그들이 무언가를 노리고 물러난다. 자국을 좇는다.
- 3페이즈(두목의 그림자): 도적들 뒤에 이들을 부리는 자가 있다. 졸개를 넘어 그 윤곽에 다가선다.
- 운명: 스테이지 보스 = 성급한 프리키온(황금에 눈먼·성급한 도적 두목. 누더기 밑 이오니아 군복 = 위선).

[시점 주의] 기원은 5세 과거(도입 회상)다. 현재 페이즈(17~18세)에 기원의 사실(어머니 생사 등)을 섞지 마라. 어머니가 현재 어디 있는지는 미정이므로 현재 장면에 등장시키지 마라.

[너의 출력 = 기록 생성기 입력]
선택된 인격마다, 각 페이즈에 대해:
- situation: 그 인격이 그 페이즈를 통과하는 국면. 위 공통 골격을 그 인격의 동기·행동으로 변주한 1~2문장. 객관적 사건 + 그 인격의 통과 방식이 묻어나되 과하지 않게. (이 문장이 기록 생성기의 '페이즈 국면' 입력이 된다 — 카드를 만들 무대.)
- keywords: 그 페이즈에서 기록 카드(사건·전투·우연)의 소재가 될 모티프 2~3개. 구체적 명사·상황으로 (예: "불타는 곳간", "어머니의 검", "흩어지는 도적 떼", "황금 자루", "무너진 길목"). 추상어 금지. 이건 사람이 고르거나 다듬을 후보다.
- 기원 situation: 그 인격의 기원 장면(5세, 위 기원 분기). keywords도 그에 맞게.
- 운명 situation: 프리키온과 마주선 국면.

[톤] 고전적이고 차분하게. 농담조로 가볍게 흘리지도, 과장된 비장으로 부풀리지도 마라 — 그 사이에선 인격마다 자유롭게. 지명·고유명사는 구체적으로(라키아·모레아·칼리돈).

[출력 — 반드시 JSON만. 마크다운 펜스·설명·서두 금지]
{"flows":[{"persona":"용기","phases":[
  {"id":"origin","situation":"","keywords":["",""]},
  {"id":"p1","situation":"","keywords":["",""]},
  {"id":"p2","situation":"","keywords":["",""]},
  {"id":"p3","situation":"","keywords":["",""]},
  {"id":"fate","situation":"","keywords":["",""]}
]}]}
기원을 포함하지 않으면 origin 항목을 빼라(p1부터). persona는 선택된 것만. 각 인격은 phases 배열에 위 순서대로.`;

const PERSONAS = [
  { key: "용기", line: "#b8463a", glyph: "Ⅰ", motto: "가족 · 정면돌파" },
  { key: "지혜", line: "#5c83a0", glyph: "Ⅱ", motto: "자기 · 최적·치명" },
  { key: "정의", line: "#6f9a86", glyph: "Ⅲ", motto: "마을 · 동행·구원" },
];

const PHASE_META = {
  origin: { label: "기원", sub: "5세 · 어머니의 선택", color: "#c2a35c" },
  p1: { label: "1페이즈", sub: "침공", color: "#7d8a9e" },
  p2: { label: "2페이즈", sub: "격퇴와 추격", color: "#7d8a9e" },
  p3: { label: "3페이즈", sub: "두목의 그림자", color: "#7d8a9e" },
  fate: { label: "운명", sub: "성급한 프리키온", color: "#b8463a" },
};
const PHASE_ORDER = ["origin", "p1", "p2", "p3", "fate"];
const ACCENT = "#c2a35c";

export default function NarrativeFlow() {
  const [selected, setSelected] = useState(["용기"]);
  const [includeOrigin, setIncludeOrigin] = useState(true);
  const [direction, setDirection] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [flows, setFlows] = useState([]);
  const [raw, setRaw] = useState("");
  const [copied, setCopied] = useState("");

  const toggle = (k) =>
    setSelected((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));

  const copy = async (text, tag) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(tag);
      setTimeout(() => setCopied(""), 1200);
    } catch {
      setCopied("");
    }
  };

  const generate = async () => {
    if (selected.length === 0) { setError("인격을 하나 이상 선택해주세요."); return; }
    setLoading(true); setError(""); setFlows([]); setRaw("");

    const order = ["용기", "지혜", "정의"].filter((p) => selected.includes(p));
    const userMsg =
      `스테이지: 1스테이지 "라키아의 들개" (운명 보스 = 성급한 프리키온)\n` +
      `인격: ${order.join(", ")}\n` +
      `기원 포함: ${includeOrigin ? "예 (origin 항목 포함)" : "아니오 (p1부터)"}\n` +
      (direction.trim() ? `방향/모티프(반영): ${direction.trim()}\n` : "") +
      `\n위 스테이지를 각 인격의 페이즈별 국면+키워드로 펼쳐라. 각 페이즈 situation은 기록 생성기에 그대로 넣을 국면 문장이고, keywords는 그 페이즈 카드 소재 후보다. 같은 페이즈라도 인격마다 통과 방식이 다르다. JSON만 출력.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4000,
          system: SYSTEM,
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
      const clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      try {
        const parsed = JSON.parse(clean);
        if (parsed && Array.isArray(parsed.flows) && parsed.flows.length) setFlows(parsed.flows);
        else setRaw(text);
      } catch { setRaw(text); }
    } catch { setError("생성 중 오류가 났습니다. 다시 시도해주세요."); }
    finally { setLoading(false); }
  };

  const ordered = PERSONAS.filter((p) => flows.some((f) => f.persona === p.key));

  return (
    <div className="nf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nanum+Myeongjo:wght@400;700;800&display=swap');
        .nf-root{ --bg:#0c0d12; --panel:#15161d; --panel2:#1b1c25; --bone:#e9e3d4; --mute:#928c7d;
          --faint:#5d5849; --gold:${ACCENT}; --line:rgba(194,163,92,.22);
          min-height:100%; background:radial-gradient(1200px 600px at 80% -10%, rgba(194,163,92,.06), transparent 60%),
            radial-gradient(900px 500px at -5% 110%, rgba(90,110,130,.06), transparent 55%), var(--bg);
          color:var(--bone); font-family:'Nanum Myeongjo',serif; padding:42px 30px 64px; box-sizing:border-box; }
        .nf-root *{ box-sizing:border-box; }
        .wrap{ max-width:1180px; margin:0 auto; }
        .mast{ border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:30px; display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; }
        .brand{ display:flex; flex-direction:column; gap:4px; }
        .eyebrow{ font-family:'Cormorant Garamond',serif; letter-spacing:.42em; text-transform:uppercase; font-size:12px; color:var(--gold); font-weight:600; }
        .brand h1{ margin:0; font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic; font-size:40px; line-height:1; }
        .brand .kr{ font-size:14.5px; color:var(--mute); margin-top:7px; }
        .ver{ font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--faint); border:1px solid var(--line); padding:6px 12px; border-radius:2px; letter-spacing:.1em; white-space:nowrap; }
        .grid{ display:grid; grid-template-columns:300px 1fr; gap:28px; align-items:start; }
        @media (max-width:900px){ .grid{ grid-template-columns:1fr; } }
        .panel{ background:linear-gradient(180deg,var(--panel),var(--panel2)); border:1px solid var(--line); border-radius:4px; padding:22px; position:sticky; top:20px; }
        @media (max-width:900px){ .panel{ position:static; } }
        .label{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.26em; font-size:11px; color:var(--gold); font-weight:600; margin:0 0 9px; display:block; }
        .field{ margin-bottom:20px; }
        .stagebox{ border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:11px 13px; }
        .stagebox .nm{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:17px; color:var(--bone); }
        .stagebox .meta{ font-size:11.5px; color:var(--faint); margin-top:3px; }
        .chips{ display:flex; gap:7px; }
        .chip{ flex:1; cursor:pointer; border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:9px 4px 7px; text-align:center; transition:all .15s; user-select:none; }
        .chip .g{ font-family:'Cormorant Garamond',serif; font-size:14px; color:var(--faint); }
        .chip .n{ font-weight:700; font-size:13px; margin-top:2px; color:var(--mute); }
        .orig{ display:flex; align-items:center; gap:10px; cursor:pointer; border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:11px 13px; user-select:none; transition:all .15s; }
        .orig.on{ border-color:var(--gold); background:rgba(194,163,92,.10); }
        .box{ width:18px; height:18px; border:1px solid var(--faint); border-radius:3px; display:flex; align-items:center; justify-content:center; font-size:12px; color:var(--gold); flex-shrink:0; }
        .orig.on .box{ border-color:var(--gold); }
        .orig .t{ font-size:13px; color:var(--mute); }
        .orig.on .t{ color:var(--bone); }
        textarea.in{ width:100%; background:#0c0d12; border:1px solid var(--line); color:var(--bone); font-family:'Nanum Myeongjo',serif; font-size:13.5px; padding:9px 11px; border-radius:3px; outline:none; resize:vertical; line-height:1.5; }
        textarea.in:focus{ border-color:var(--gold); }
        .btn{ width:100%; margin-top:4px; cursor:pointer; border:1px solid var(--gold); background:linear-gradient(180deg, rgba(194,163,92,.16), rgba(194,163,92,.06)); color:var(--bone); font-family:'Cormorant Garamond',serif; font-weight:600; letter-spacing:.2em; text-transform:uppercase; font-size:14px; padding:12px; border-radius:3px; transition:all .2s; }
        .btn:hover:not(:disabled){ background:rgba(194,163,92,.22); }
        .btn:disabled{ opacity:.5; cursor:wait; }
        .note{ font-size:11px; color:var(--faint); line-height:1.6; margin-top:16px; border-top:1px solid var(--line); padding-top:13px; }
        .stage{ min-height:300px; }
        .empty,.loading{ height:100%; min-height:320px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; }
        .empty{ border:1px dashed var(--line); border-radius:4px; color:var(--faint); text-align:center; padding:30px; }
        .empty .lab{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:24px; color:var(--mute); }
        .pulse{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:22px; color:var(--gold); animation:breathe 1.6s ease-in-out infinite; }
        @keyframes breathe{ 0%,100%{opacity:.35;} 50%{opacity:1;} }
        .err{ border:1px solid #7a3b34; background:rgba(140,60,52,.12); color:#d99; padding:14px 16px; border-radius:3px; font-size:14px; }
        .rawbox{ white-space:pre-wrap; font-family:'Nanum Myeongjo',serif; font-size:13.5px; line-height:1.6; color:#cfc9ba; border:1px solid var(--line); border-radius:4px; padding:18px; background:#101119; }
        .pgroup{ margin-bottom:34px; }
        .pghead{ display:flex; align-items:center; gap:9px; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--line); }
        .badge{ font-family:'Cormorant Garamond',serif; font-size:15px; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid currentColor; }
        .pgname{ font-weight:800; font-size:16px; }
        .pgmotto{ font-size:11px; color:var(--faint); margin-left:auto; }
        .seq{ position:relative; padding-left:24px; }
        .seq::before{ content:''; position:absolute; left:7px; top:6px; bottom:6px; width:1px; background:var(--line); }
        .ph{ position:relative; margin-bottom:16px; }
        .ph::before{ content:''; position:absolute; left:-21px; top:7px; width:9px; height:9px; border-radius:50%; background:var(--bg); border:1px solid currentColor; }
        .phtop{ display:flex; align-items:baseline; gap:8px; margin-bottom:7px; }
        .phlab{ font-family:'Cormorant Garamond',serif; font-weight:700; font-size:15px; }
        .phsub{ font-size:11px; color:var(--faint); text-transform:uppercase; letter-spacing:.12em; }
        .copyrow{ margin-left:auto; display:flex; gap:6px; }
        .cbtn{ cursor:pointer; font-family:'Cormorant Garamond',serif; font-size:11px; letter-spacing:.08em; color:var(--mute); border:1px solid var(--line); border-radius:3px; padding:3px 9px; background:#0c0d12; transition:all .15s; }
        .cbtn:hover{ border-color:var(--gold); color:var(--bone); }
        .cbtn.done{ border-color:var(--gold); color:var(--gold); }
        .card{ border:1px solid var(--line); border-left-width:2px; border-radius:4px; padding:13px 15px; background:#101119; opacity:0; transform:translateY(6px); animation:rise .4s ease forwards; }
        @keyframes rise{ to{ opacity:1; transform:none; } }
        .sit{ font-size:14px; line-height:1.6; color:#d4cdbe; margin-bottom:11px; }
        .kwlab{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.16em; font-size:9.5px; color:var(--faint); margin-bottom:6px; }
        .kws{ display:flex; flex-wrap:wrap; gap:6px; }
        .kw{ font-size:12px; color:var(--bone); background:rgba(194,163,92,.10); border:1px solid var(--line); border-radius:3px; padding:3px 9px; }
        .legend{ font-size:11.5px; color:var(--faint); margin-bottom:20px; line-height:1.6; border:1px solid var(--line); border-radius:4px; padding:11px 14px; background:#101119; }
        .legend b{ color:var(--mute); font-weight:400; }
      `}</style>

      <div className="wrap">
        <header className="mast">
          <div className="brand">
            <span className="eyebrow">Stoa Factory</span>
            <h1>Narrative Flow</h1>
            <span className="kr">크로니클 · 서사 흐름 제조기 — 출력이 곧 기록 생성기 입력(페이즈 국면+키워드)</span>
          </div>
          <span className="ver">v2 · 페이즈 시퀀스</span>
        </header>

        <div className="grid">
          <aside className="panel">
            <div className="field">
              <label className="label">스테이지</label>
              <div className="stagebox">
                <div className="nm">라키아의 들개</div>
                <div className="meta">챕터1 · 1스테이지 · 보스=성급한 프리키온</div>
              </div>
            </div>

            <div className="field">
              <label className="label">인격 (1개 권장 · 복수 가능)</label>
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
              <label className="label">기원 포함</label>
              <div className={`orig${includeOrigin ? " on" : ""}`} onClick={() => setIncludeOrigin((v) => !v)}>
                <span className="box">{includeOrigin ? "✓" : ""}</span>
                <span className="t">{includeOrigin ? "기원 카드 포함 (5세 도입)" : "1페이즈부터 (기원 제외)"}</span>
              </div>
            </div>

            <div className="field">
              <label className="label">방향/모티프 (선택)</label>
              <textarea className="in" rows={2} value={direction} onChange={(e) => setDirection(e.target.value)}
                placeholder="비워도 됩니다. 넣으면 그 방향으로 — 예: 어머니의 검을 중심으로" />
            </div>

            <button className="btn" onClick={generate} disabled={loading}>
              {loading ? "엮는 중…" : "흐름 생성"}
            </button>

            <p className="note">
              인격마다 <b style={{ color: "var(--mute)" }}>기원·1·2·3·운명</b> 순으로 펼칩니다.
              각 페이즈의 <b style={{ color: "var(--mute)" }}>국면</b>·<b style={{ color: "var(--mute)" }}>키워드</b>를 복사해
              기록 생성기(Phase Matrix)에 그대로 넣으면 됩니다.
              키워드는 후보 — 고르거나 다듬으세요.
            </p>
          </aside>

          <section className="stage">
            {error && <div className="err">{error}</div>}
            {loading && <div className="loading"><div className="pulse">스테이지를 페이즈로 가른다…</div></div>}
            {!loading && !error && ordered.length === 0 && !raw && (
              <div className="empty"><div className="lab">tabula rasa</div><div>인격을 고르고 흐름 생성을 누르세요.</div></div>
            )}
            {!loading && raw && <div className="rawbox">{raw}</div>}
            {!loading && ordered.length > 0 && (
              <div>
                <div className="legend">
                  각 페이즈의 <b>국면 복사</b> → Phase Matrix의 그 페이즈 국면 칸 · <b>키워드 복사</b> → keywords 칸.
                  같은 페이즈라도 인격마다 통과 방식이 다릅니다.
                </div>
                {ordered.map((pm, gi) => {
                  const flow = flows.find((f) => f.persona === pm.key);
                  const phs = (flow.phases || []).slice().sort(
                    (a, b) => PHASE_ORDER.indexOf(a.id) - PHASE_ORDER.indexOf(b.id)
                  );
                  return (
                    <div className="pgroup" key={gi}>
                      <div className="pghead">
                        <span className="badge" style={{ color: pm.line }}>{pm.glyph}</span>
                        <span className="pgname" style={{ color: pm.line }}>{pm.key}</span>
                        <span className="pgmotto">{pm.motto}</span>
                      </div>
                      <div className="seq">
                        {phs.map((ph, pi) => {
                          const m = PHASE_META[ph.id] || { label: ph.id, sub: "", color: "var(--mute)" };
                          const kws = Array.isArray(ph.keywords) ? ph.keywords : [];
                          const sitTag = `${pm.key}-${ph.id}-sit`;
                          const kwTag = `${pm.key}-${ph.id}-kw`;
                          return (
                            <div className="ph" key={pi} style={{ color: m.color, animationDelay: `${pi * 0.05}s` }}>
                              <div className="phtop">
                                <span className="phlab" style={{ color: m.color }}>{m.label}</span>
                                <span className="phsub">{m.sub}</span>
                                <span className="copyrow">
                                  <span className={`cbtn${copied === sitTag ? " done" : ""}`}
                                    onClick={() => copy(ph.situation || "", sitTag)}>
                                    {copied === sitTag ? "복사됨" : "국면 복사"}
                                  </span>
                                  {kws.length > 0 && (
                                    <span className={`cbtn${copied === kwTag ? " done" : ""}`}
                                      onClick={() => copy(kws.join(", "), kwTag)}>
                                      {copied === kwTag ? "복사됨" : "키워드 복사"}
                                    </span>
                                  )}
                                </span>
                              </div>
                              <div className="card" style={{ borderLeftColor: m.color }}>
                                <div className="sit">{ph.situation}</div>
                                {kws.length > 0 && (
                                  <>
                                    <div className="kwlab">키워드 후보</div>
                                    <div className="kws">
                                      {kws.map((k, ki) => <span className="kw" key={ki}>{k}</span>)}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
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
