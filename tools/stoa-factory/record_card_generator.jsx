import { useState } from "react";

// ───────────────────────────────────────────────────────────
// 스토아 팩토리 — 기록 카드(StoryCard) 초안 생성기 v0.1
// 코어(세계관·인격 함수·desc/quote 규칙)를 시스템 프롬프트로 박아
// 한 모티프 → 인격별 기록 카드 초안을 생성한다.
// 캐논은 지금 위키 스냅샷. 세계관이 바뀌면 아래 SYSTEM_CANON을 손으로 갱신.
// ───────────────────────────────────────────────────────────

const SYSTEM_CANON = `당신은 게임 「크로니클(Chronicle)」의 기록 카드(StoryCard) 초안 생성기다. 사용자가 준 모티프와 인격을 받아, 아래 캐논·인격 규칙·desc/quote 규칙을 반드시 지키는 기록 카드 초안을 만든다. 출력은 한국어.

[세계관 캐논 — 불변]
- 이오니아: 바다·섬의 패권국. 기만적 식민주의(자칭 '황금의 도시'). 원래 주인인 원주민에게 거주·생활 명목 세금을 물려 옥죔(못 내면 추방·노예). 아테네 결.
- 도리아: 분지의 억압 세력(분지는 그들에게 신성한 대지). 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 라키아: 이오니아·도리아 사이 경계 소국, 테오도라의 고향. 이오니아엔 적국 취급, 도리아엔 억압받는 백성(이중 소외). 발드 패잔병의 약탈 대상.
- 발드: 전쟁이 끝난 줄 모르거나 인정 못 하는 이오니아 낙오병 무리. 자기를 이긴 도리아 정규군은 못 건드리고 만만한 라키아(경계 약자)만 약탈한다. 해방군을 자처하나 실은 약탈자 = 위선.
- 무리(선주민): 이 땅의 원래 주인. 외부에서 온 이민족이 아니라 애초에 이 땅에 살던 자들. 인간(이오니아·도리아·라키아인 등 정복자)에게 땅을 빼앗긴 자들. 무리에게 인간은 침략자다(이는 진실이나, 정작 인간들은 그렇게 알지 못한다).
- 인간: 나중에 들어온 정복자·정착민. 가해를 인지하지 못하는 구조(정착민 식민주의). 테오도라(라키아·인간)조차 인간 측 시점에서 출발하는 맹점이 깔려 있다.
- 신앙 4분기: 낮=하늘·태양(이오니아) / 여명=달·사냥(친이오니아) / 황혼=화로·그림자(친도리아) / 밤=땅·밤(도리아). 인간은 인격신(형상·성별 있음, 직능으로 부름)으로, 무리는 자연신(형상 없음 — 화로의 여신이 아니라 불 그 자체)으로 같은 신을 다르게 본다.
- 테오도라: 라키아인, 인간, 황혼 태생. 4주덕(용기·지혜·정의·절제) 중 절제가 빠짐 = "절제 없는 자". 자제를 못 하는 게 아니라 신념대로 맹목적으로 나아가며 행동이 앞서는 자.

[인격 규칙 — 인격 = 동기범위 × 행동문법]
- 용기(courage): 동기=가족(범위2). 행동문법=정면돌파, 맞서 결단, 물러서지 않음. 기원에서 어머니 생존(두 자매를 양쪽 품에 안고 불타는 마을을 주파해 함께 피신). 자매 키레네아=전사.
- 지혜(wisdom): 동기=자기(범위1). 행동문법=최단·최적·치명, 손실 최소, 분석적·냉철. 기원에서 어머니 생존(키레네아만 데리고 도망 → 혼자 도망친 테오도라와 재회. 테오도라는 자신이 주워온 자식임을 본능적으로 깨달음=앎). 자매 키레네아=궁수.
- 정의(justice): 동기=마을(범위3). 행동문법=동행·구원, 혼자가 아니라 마을과 함께. 기원에서 어머니 사망(마을 사람들과 자매를 이끌고 피신, 후미에서 시간 벌다 죽음). 테오도라는 마을 사람들 손에 자람. 자매 키레네아=사제.

[기록 카드 정의]
기록 카드 = 실존 대상(물건·사건) + 주인공의 생각·대사로 구성된 한 사건.
필드: title(카드명) / desc(상황 서술) / quote(대사).

[desc / quote 규칙 — 가장 중요]
- 같은 모티프라도 인격마다 *다른 카드*가 된다. 비슷하더라도 다른 대상·다른 내용이어야 한다. (예: 모티프 "버려진 여신상" → 용기는 '대지의 여신상'을, 지혜는 '태양의 여신상'을 만나는 식으로 카드 자체가 갈린다.)
- desc = 사실. 객관적 상황 서술만 한다. 감상·1인칭·가치판단·미사여구 금지. 인격에 따라 '어떤 사실을 만나는가'는 달라도, 서술의 어조는 언제나 객관이다.
    좋음: "대지의 여신의 사당이 관리되지 않은 채 방치되어 있다."
    나쁨: "안타깝게도 신성한 사당이 슬프게 버려져 있다."(감상이 섞임)
- quote = 주관. 그 인격의 테오도라의 목소리·생각이다. 인격마다 반드시 달라야 한다(세 인격의 quote가 비슷하면 틀린 것이다). 인격 함수가 목소리에 드러나야 한다:
    용기 = 정면적 신념, 맞서려는 의지.
    지혜 = 날카로운 분석, 세계관의 모순을 짚음, 자기 중심의 셈.
    정의 = 공동체·타인을 향한 시선, 함께라는 감각.
  quote는 주인공의 생각·대사가 기본이나, 드물게 대상 자체의 말일 수도 있다.

[톤 — 크로니클 공용]
- 판타지 플루타르크 영웅전체. 고전적이고 간결하며 무게 있게. 과장·현대어·이모지 금지.
- '미궁'은 보는 자의 시선이 만든 은유지 물리적 실체가 아니다.

[출력 형식 — 반드시 JSON만 출력. 마크다운 코드펜스·설명·서두·후기 일절 금지]
{"cards":[{"persona":"용기","title":"카드명","desc":"상황 서술(사실, 1~2문장)","quote":"테오도라의 대사(주관, 1~2문장)"}]}
선택된 인격마다 한 장씩 배열에 담는다. persona 값은 정확히 "용기"/"지혜"/"정의" 중 하나로 적는다.`;

const PERSONAS = [
  { key: "용기", en: "courage", accent: "#a8403353", line: "#b8463a", glyph: "Ⅰ", motto: "가족 · 정면돌파" },
  { key: "지혜", en: "wisdom",  accent: "#4a6b8253", line: "#5c83a0", glyph: "Ⅱ", motto: "자기 · 최적·치명" },
  { key: "정의", en: "justice", accent: "#5b7d7053", line: "#6f9a86", glyph: "Ⅲ", motto: "마을 · 동행·구원" },
];

const ACCENT = "#c2a35c";

export default function StoaFactory() {
  const [motif, setMotif] = useState("버려진 여신상");
  const [character, setCharacter] = useState("테오도라");
  const [selected, setSelected] = useState(["용기", "지혜", "정의"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cards, setCards] = useState([]);
  const [raw, setRaw] = useState("");

  const toggle = (k) =>
    setSelected((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));

  const orderPersona = (arr) => {
    const order = { 용기: 0, 지혜: 1, 정의: 2 };
    return [...arr].sort((a, b) => (order[a.persona] ?? 9) - (order[b.persona] ?? 9));
  };

  const generate = async () => {
    if (!motif.trim() || selected.length === 0) {
      setError("모티프와 인격을 하나 이상 넣어주세요.");
      return;
    }
    setLoading(true);
    setError("");
    setCards([]);
    setRaw("");

    const userMsg =
      `모티프/키워드: ${motif.trim()}\n` +
      `인물: ${character.trim() || "테오도라"}\n` +
      `생성할 인격: ${selected.join(", ")}\n\n` +
      `위 모티프를 각 인격의 카드로 펼쳐라. 같은 모티프라도 인격마다 다른 카드가 되어야 한다. JSON만 출력.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_CANON,
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      const text = (data.content || [])
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();

      const clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      try {
        const parsed = JSON.parse(clean);
        if (parsed && Array.isArray(parsed.cards) && parsed.cards.length) {
          setCards(orderPersona(parsed.cards));
        } else {
          setRaw(text);
        }
      } catch {
        setRaw(text); // 포맷이 어긋나도 출력은 보여줌
      }
    } catch (e) {
      setError("생성 중 오류가 났습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const meta = (k) => PERSONAS.find((p) => p.key === k) || PERSONAS[0];

  return (
    <div className="stoa-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nanum+Myeongjo:wght@400;700;800&display=swap');

        .stoa-root{
          --bg:#0c0d12; --panel:#15161d; --panel2:#1b1c25;
          --bone:#e9e3d4; --mute:#928c7d; --faint:#5d5849;
          --gold:${ACCENT}; --line:rgba(194,163,92,.22);
          min-height:100%; background:
            radial-gradient(1200px 600px at 80% -10%, rgba(194,163,92,.06), transparent 60%),
            radial-gradient(900px 500px at -5% 110%, rgba(90,110,130,.06), transparent 55%),
            var(--bg);
          color:var(--bone);
          font-family:'Nanum Myeongjo', serif;
          padding:42px 30px 64px;
          box-sizing:border-box;
        }
        .stoa-root *{ box-sizing:border-box; }

        .wrap{ max-width:1080px; margin:0 auto; }

        .masthead{ border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:30px;
          display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; }
        .brand{ display:flex; flex-direction:column; gap:4px; }
        .brand .eyebrow{ font-family:'Cormorant Garamond',serif; letter-spacing:.42em; text-transform:uppercase;
          font-size:12px; color:var(--gold); font-weight:600; }
        .brand h1{ margin:0; font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic;
          font-size:44px; line-height:1; color:var(--bone); }
        .brand .kr{ font-family:'Nanum Myeongjo',serif; font-size:15px; color:var(--mute); margin-top:7px; letter-spacing:.04em; }
        .ver{ font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--faint);
          border:1px solid var(--line); padding:6px 12px; border-radius:2px; letter-spacing:.1em; white-space:nowrap; }

        .grid{ display:grid; grid-template-columns:340px 1fr; gap:30px; align-items:start; }
        @media (max-width:820px){ .grid{ grid-template-columns:1fr; } }

        .panel{ background:linear-gradient(180deg,var(--panel),var(--panel2));
          border:1px solid var(--line); border-radius:4px; padding:24px; position:sticky; top:20px; }
        @media (max-width:820px){ .panel{ position:static; } }

        .label{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.28em;
          font-size:11px; color:var(--gold); font-weight:600; margin:0 0 9px; display:block; }
        .field{ margin-bottom:20px; }

        textarea.in, input.in{ width:100%; background:#0c0d12; border:1px solid var(--line); color:var(--bone);
          font-family:'Nanum Myeongjo',serif; font-size:15px; padding:11px 12px; border-radius:3px; resize:vertical;
          outline:none; transition:border-color .2s; }
        textarea.in{ min-height:64px; line-height:1.5; }
        textarea.in:focus, input.in:focus{ border-color:var(--gold); }

        .chips{ display:flex; gap:8px; flex-wrap:wrap; }
        .chip{ flex:1; min-width:84px; cursor:pointer; border:1px solid var(--line); border-radius:3px;
          background:#0c0d12; padding:11px 8px 9px; text-align:center; transition:all .18s; user-select:none; }
        .chip .g{ font-family:'Cormorant Garamond',serif; font-size:15px; color:var(--faint); line-height:1; }
        .chip .n{ font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:15px; margin-top:3px; color:var(--mute); }
        .chip .m{ font-size:10px; color:var(--faint); margin-top:3px; letter-spacing:.02em; }
        .chip.on{ background:#16171f; }

        .btn{ width:100%; margin-top:4px; cursor:pointer; border:1px solid var(--gold);
          background:linear-gradient(180deg, rgba(194,163,92,.16), rgba(194,163,92,.06));
          color:var(--bone); font-family:'Cormorant Garamond',serif; font-weight:600; letter-spacing:.22em;
          text-transform:uppercase; font-size:14px; padding:13px; border-radius:3px; transition:all .2s; }
        .btn:hover:not(:disabled){ background:rgba(194,163,92,.22); }
        .btn:disabled{ opacity:.5; cursor:wait; }

        .note{ font-size:11.5px; color:var(--faint); line-height:1.6; margin-top:18px;
          border-top:1px solid var(--line); padding-top:14px; }

        .stage{ min-height:300px; }
        .empty{ height:100%; min-height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:10px; border:1px dashed var(--line); border-radius:4px; color:var(--faint); text-align:center; padding:30px; }
        .empty .lab{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:26px; color:var(--mute); }

        .loading{ height:100%; min-height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px; }
        .pulse{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:22px; color:var(--gold);
          letter-spacing:.04em; animation:breathe 1.6s ease-in-out infinite; }
        @keyframes breathe{ 0%,100%{opacity:.35;} 50%{opacity:1;} }

        .err{ border:1px solid #7a3b34; background:rgba(140,60,52,.12); color:#d99; padding:14px 16px; border-radius:3px; font-size:14px; }

        .cards{ display:flex; flex-direction:column; gap:18px; }
        .card{ border:1px solid var(--line); border-radius:4px; overflow:hidden; background:#101119;
          opacity:0; transform:translateY(8px); animation:rise .5s ease forwards; }
        @keyframes rise{ to{ opacity:1; transform:none; } }
        .card .cap{ display:flex; align-items:center; gap:11px; padding:11px 16px; border-bottom:1px solid var(--line); }
        .card .badge{ font-family:'Cormorant Garamond',serif; font-size:16px; width:26px; height:26px; border-radius:50%;
          display:flex; align-items:center; justify-content:center; border:1px solid currentColor; flex-shrink:0; }
        .card .pname{ font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:14px; }
        .card .pmotto{ font-size:11px; color:var(--faint); margin-left:auto; letter-spacing:.04em; }

        .card .body{ padding:18px 20px 20px; }
        .card .title{ font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:21px; color:var(--bone);
          margin:0 0 14px; letter-spacing:.01em; }
        .row{ margin-bottom:13px; }
        .row:last-child{ margin-bottom:0; }
        .tag{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.24em; font-size:10px;
          color:var(--gold); display:inline-block; margin-bottom:5px; }
        .desc{ font-size:15px; line-height:1.62; color:#cfc9ba; }
        .quote{ font-size:15px; line-height:1.62; color:var(--bone); font-style:italic;
          padding-left:13px; border-left:2px solid var(--line); }

        .rawbox{ white-space:pre-wrap; font-family:'Nanum Myeongjo',serif; font-size:14px; line-height:1.6;
          color:#cfc9ba; border:1px solid var(--line); border-radius:4px; padding:18px; background:#101119; }
      `}</style>

      <div className="wrap">
        <header className="masthead">
          <div className="brand">
            <span className="eyebrow">Stoa Factory</span>
            <h1>Record&nbsp;Cards</h1>
            <span className="kr">크로니클 · 기록 카드 초안 생성기 — 한 모티프, 세 인격</span>
          </div>
          <span className="ver">v0.1 · 텍스트 결</span>
        </header>

        <div className="grid">
          {/* ── 입력 패널 ── */}
          <aside className="panel">
            <div className="field">
              <label className="label">모티프 · 키워드</label>
              <textarea
                className="in"
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                placeholder="예: 버려진 여신상, 도적단, 토벌, 골짜기…"
              />
            </div>

            <div className="field">
              <label className="label">인물</label>
              <input className="in" value={character} onChange={(e) => setCharacter(e.target.value)} />
            </div>

            <div className="field">
              <label className="label">인격 (복수 선택 = 동시 출력)</label>
              <div className="chips">
                {PERSONAS.map((p) => {
                  const on = selected.includes(p.key);
                  return (
                    <div
                      key={p.key}
                      className={`chip${on ? " on" : ""}`}
                      onClick={() => toggle(p.key)}
                      style={on ? { borderColor: p.line, boxShadow: `inset 0 2px 0 ${p.line}` } : {}}
                    >
                      <div className="g" style={on ? { color: p.line } : {}}>{p.glyph}</div>
                      <div className="n" style={on ? { color: "var(--bone)" } : {}}>{p.key}</div>
                      <div className="m">{p.motto}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="btn" onClick={generate} disabled={loading}>
              {loading ? "기록하는 중…" : "초안 생성"}
            </button>

            <p className="note">
              desc는 <b style={{ color: "var(--mute)" }}>사실</b>(객관·공용 결), quote는{" "}
              <b style={{ color: "var(--mute)" }}>주관</b>(인격별로 갈림). 같은 모티프라도 인격마다 다른 카드가 됩니다.
              <br /><br />
              캐논은 현재 위키 스냅샷입니다. 세계관이 바뀌면 코드의 캐논도 갱신해야 합니다.
            </p>
          </aside>

          {/* ── 출력 ── */}
          <section className="stage">
            {error && <div className="err">{error}</div>}

            {loading && (
              <div className="loading">
                <div className="pulse">아직 쓰여지지 않은 이야기를 부른다…</div>
              </div>
            )}

            {!loading && !error && cards.length === 0 && !raw && (
              <div className="empty">
                <div className="lab">tabula rasa</div>
                <div>모티프를 넣고 초안 생성을 누르세요.</div>
              </div>
            )}

            {!loading && raw && (
              <div className="rawbox">{raw}</div>
            )}

            {!loading && cards.length > 0 && (
              <div className="cards">
                {cards.map((c, i) => {
                  const m = meta(c.persona);
                  return (
                    <article
                      key={i}
                      className="card"
                      style={{
                        animationDelay: `${i * 0.12}s`,
                        borderTop: `2px solid ${m.line}`,
                      }}
                    >
                      <div className="cap" style={{ background: m.accent }}>
                        <span className="badge" style={{ color: m.line }}>{m.glyph}</span>
                        <span className="pname" style={{ color: m.line }}>{c.persona}</span>
                        <span className="pmotto">{m.motto}</span>
                      </div>
                      <div className="body">
                        <h2 className="title">{c.title}</h2>
                        <div className="row">
                          <span className="tag">desc · 사실</span>
                          <div className="desc">{c.desc}</div>
                        </div>
                        <div className="row">
                          <span className="tag">quote · 주관 {c.persona}</span>
                          <div className="quote">{c.quote}</div>
                        </div>
                      </div>
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
