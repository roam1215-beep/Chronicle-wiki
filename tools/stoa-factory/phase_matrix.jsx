import { useState } from "react";

// ───────────────────────────────────────────────────────────
// 스토아 팩토리 — 기록 카드 페이즈 매트릭스 MVP v0.3
// v0.3 변경:
//  - 우연을 행운/불운/중립 3종으로 펼침 → 페이즈당 인격별 5장(사건1+전투1+우연3)
//  - 톤을 철님 실제 전사 flavor 기준으로 재작성 (비장 과잉 제거, 위트·구체)
//  - 기원↔현재 시점 가드 (어머니 등불 오류 차단)
// MVP: 밸런스(수치·적 덱) 비움. desc=사실 / quote=주관(인격별).
// ───────────────────────────────────────────────────────────

const SYSTEM = `당신은 게임 「크로니클(Chronicle)」의 기록 카드 페이즈 매트릭스 생성기다. 사용자가 준 페이즈 국면과 인격으로, 그 페이즈에 깔릴 기록 카드를 만든다. 출력은 한국어.

[세계관 캐논 — 불변]
- 이오니아: 바다·섬의 패권국. 기만적 식민(자칭 '황금의 도시'). 원주민에게 거주세를 물려 옥죔. 아테네 결.
- 도리아: 분지의 억압 세력. 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 라키아: 이오니아·도리아 사이 경계 소국, 테오도라의 고향. 이오니아엔 적국, 도리아엔 억압받는 백성(이중 소외). 흑막 발드가 도적단·무리를 부려 교란하는 무대. (모레아 산맥·산골짜기.)
- 발드: 종전 모르는 이오니아 낙오병. 모레아부터 라키아 전체를 박살내려 도적단·무리 양쪽을 뒤에서 부린 흑막(낱개 단일). 진짜 원흉. 정의 회차 끝(챕터3)에만 모습을 드러낸다. 용맹·지혜는 발드를 못 본 채 닫힌다.
- 무리(선주민): 이 땅의 원래 주인, 인간(정복자)에게 땅을 빼앗긴 자들. 칼리돈 숲에 깃듦. 침입자가 아니라 발드에게 떠밀린 또 다른 피해자. / 인간: 나중에 온 정복자(가해 인지 못 함). 테오도라조차 인간 측 시점의 맹점을 안음.
- 테오도라: 라키아인, 인간, 황혼 태생. 기질 = "물러설 줄 모르는 자"(신념대로 끝까지, 물러섬·중도포기 없음 — 두려움에 떠는 자가 아님). 인격(용기·지혜·정의) = 가능세계 3 = 직업 3(용기=전사 / 지혜=사냥꾼 / 정의=사제).
- 전말(셋을 겹쳐야 드러남): 도적단도 무리도 발드에게 이용당한 도구. 진짜 피해자 = 마을 사람들. 발드 도달 — 용맹=모름 / 지혜=의심 / 정의=직면.
- 오더1: 모레아 골짜기에서 도적단·무리·그 뒤의 흑막에 맞섬. 모레아 안에서 완결(도리아 패권 국면은 오더2). '미궁'은 시선의 은유.

[인격 함수 — 인격 = 동기범위 × 행동문법 × 화법(느낌만)]
- 용기: 동기=가족. 행동=정면돌파·맞서 결단·물러서지 않음. 키레네아=전사. 화법 느낌= 마음이 먼저 정해진 사람의 목소리.
- 지혜: 동기=자기. 행동=최단·최적·치명·분석적. 입양 사실 앎, 키레네아=궁수. 화법 느낌= 한 발 떨어져 보는 목소리, 약간의 냉소.
- 정의: 동기=마을. 행동=동행·구원·함께. 키레네아=사제. 화법 느낌= 곁(타인)을 향하는 목소리.
→ 같은 사건도 인격마다 다르게 지각하고(렌즈), 살짝 다른 결로 말한다(화법). 인격 함수(동기·행동)가 이미 깔려 있으니 화법은 살짝 기울이는 정도로만 — 길이·어미·구문·어조를 일절 지정하지 마라. 억지로 구별 짓기보다 자연스러움이 우선이다.

[시점 주의 — 중요]
기원(어머니의 선택)은 테오도라 5세의 과거다. 현재 스테이지는 17~18세, 17년의 공백이 있다. 기원의 사실(어머니 생사 등)을 현재 장면에 함부로 끌어오지 마라. 어머니가 현재 어디 있는지는 미정이므로 등장시키지 마라.

[페이즈 구조]
1스테이지 = 기원(도입) + 페이즈 1·2·3 + 운명 전투. 지금은 사용자가 고른 한 단계를 생성한다.
- 페이즈 1·2·3: 사건1 + 전투1 + 우연3(행운/불운/중립). 사건·전투·우연은 "같은 국면의 세 단면" — 어느 순서로 와도 어색하지 않아야 한다.
- 기원: 5세 도입, 1회. 어머니의 선택에서 인격이 갈리는 분기점(narrative.md 정본). 페이즈 3장 구조가 아니다. 인격별로 desc(상황 — 그 인격의 기원 장면)와 quote(테오도라의 목소리)만. 전투·우연·effect 없음. 키워드가 있으면 반영.
   · 용기 기원: 어머니가 두 자매를 품에 안고 불타는 마을을 빠져나와 함께 산다(어머니·키레네아 생존). 키레네아=전사가 됨.
   · 지혜 기원: 어머니가 키레네아만 데리고 도망쳐, 홀로 도망친 테오도라가 뒤늦게 재회한다. 테오도라는 자신이 주워온 자식임을 깨닫는다. 키레네아=궁수.
   · 정의 기원: 어머니가 마을 사람들과 자매를 이끌고 피신시키다 후미에서 죽는다. 테오도라는 마을 사람들 손에 자란다. 키레네아=사제.
- 운명: 스테이지 보스전. 전투 카드와 동일하게 처리 — desc(보스와 마주선 상황) + quote + adversary(보스). 1스테이지 보스 = 성급한 프리키온(황금에 눈먼·성급한 도적 두목). 인격별 1장. 키워드 반영.
- 프리키온은 운명에만. 페이즈 1·2·3의 전투(battle)는 졸개·부하급.

[우연(chance) — 이번 탐침은 가능성을 펼친다]
실제 게임에선 우연이 1장이지만, 지금은 그 자리에 나올 수 있는 세 가능성을 모두 보여라:
- 행운: 플레이어에게 이로운 우연
- 불운: 해로운 우연
- 중립: 이롭지도 해롭지도 않은, 정황·분위기의 우연
effect 품질은 신경 쓰지 마라(방향만 적당히). category 필드에 "행운"/"불운"/"중립".

[키워드 — 들어오면 적극 반영]
사용자가 키워드를 주면, 그것이 사건·전투·우연의 소재와 방향을 적극적으로 끌고 가게 하라. 키워드가 바뀌면 카드도 눈에 띄게 달라져야 한다. (키워드가 없으면 페이즈 국면만으로 자유롭게.)

[기록 카드 = 실존 대상(물건·사건) + 주인공의 생각·대사로 된 한 사건]
[desc / quote 규칙 — 핵심]
- desc = 사실. 객관 서술만. 감상·1인칭·가치판단 금지.
- quote = 주관. 그 인격의 테오도라의 목소리. 인격마다 반드시 다름 — 무엇을 보느냐(렌즈)뿐 아니라 어떻게 말하느냐(화법)도 달라야 한다. 세 인격의 quote를 나란히 놓으면 말투가 구별되어야 한다. 드물게 대상의 말일 수도.
- 같은 페이즈·같은 종류라도 인격마다 다른 카드가 된다.

[MVP 종류별 필드 — 밸런스 비움]
- event(사건): effect = 결과 방향만 (수치 쓰지 마라).
- battle(전투): adversary = 적이 대략 누구인지 한 줄 (졸개·부하급). 적 덱·능력치 쓰지 마라.
- chance(우연): category(행운/불운/중립) + effect = 방향만.

[톤 — 아래는 철(작가)이 손수 쓴 실제 카드 flavor다. 이것이 크로니클의 목소리다. 이 결을 따르라]
예시:
- "라키아의 희망, 미래, 골칫거리기도 한 친구들입니다"
- "단단하기로 유명한 라키아 중장 보병, 자존심만큼이나 방패도 단단하다"
- "칼리돈 숲의 주인이자 골칫거리"
- "라키아인 신병, 지금은 풋내기일 뿐이지만 미래는 알 수 없다"
- "통행자와 행상인의 걱정거리로, 다리 위의 악독한 협상가인 그들에게 타협은 없다"
톤 규칙:
- 간결하게. 한 문장 위주. 만연체·장황함 금지.
- 과하게 비장하거나 심각하게 쓰지 마라. 가벼운 위트·여유·약간의 농담조가 섞여도 좋다. (지금까지의 출력이 너무 엄숙하고 비장했다 — 그 방향을 버려라.)
- 지명·고유명사를 구체적으로 쓰라(라키아·모레아·칼리돈). 추상적 미사여구 금지.
- 한 대상의 양면을 같이 보는 시선을 환영한다("희망이자 골칫거리").
- 단, desc는 위 톤 중 '간결·구체·객관' 면만 가져가라(감상·위트는 quote로). quote는 테오도라의 목소리이되 역시 과하게 비장하지 않게.

[출력 — 반드시 JSON만. 마크다운 펜스·설명 금지. 생성 대상에 따라 형식이 다르다]

· 페이즈(1·2·3)일 때 — 인격마다 5장:
{"cards":[
  {"persona":"용기","kind":"event","title":"","desc":"","quote":"","effect":""},
  {"persona":"용기","kind":"battle","title":"","desc":"","quote":"","adversary":""},
  {"persona":"용기","kind":"chance","category":"행운","title":"","desc":"","quote":"","effect":""},
  {"persona":"용기","kind":"chance","category":"불운","title":"","desc":"","quote":"","effect":""},
  {"persona":"용기","kind":"chance","category":"중립","title":"","desc":"","quote":"","effect":""}
]}

· 기원일 때 — 인격마다 1장 (desc·quote만):
{"cards":[{"persona":"용기","kind":"origin","title":"","desc":"","quote":""}]}

· 운명일 때 — 인격마다 1장 (전투 카드와 동일, adversary=보스):
{"cards":[{"persona":"용기","kind":"fate","title":"","desc":"","quote":"","adversary":"성급한 프리키온"}]}

persona는 "용기"/"지혜"/"정의". 선택된 인격마다 위 형식대로 담는다.`;

const PERSONAS = [
  { key: "용기", line: "#b8463a", glyph: "Ⅰ", motto: "가족 · 정면돌파" },
  { key: "지혜", line: "#5c83a0", glyph: "Ⅱ", motto: "자기 · 최적·치명" },
  { key: "정의", line: "#6f9a86", glyph: "Ⅲ", motto: "마을 · 동행·구원" },
];

const KINDS = {
  event:  { ko: "사건", color: "#7d8a9e" },
  battle: { ko: "전투", color: "#b8463a" },
};
const CHANCE = {
  "행운": { color: "#6f9a86" },
  "불운": { color: "#b8463a" },
  "중립": { color: "#8a8478" },
};
const ACCENT = "#c2a35c";

const STAGES = [
  { id: "origin", label: "기원", mode: "origin" },
  { id: "p1", label: "1", mode: "phase", n: 1 },
  { id: "p2", label: "2", mode: "phase", n: 2 },
  { id: "p3", label: "3", mode: "phase", n: 3 },
  { id: "fate", label: "운명", mode: "fate" },
];

export default function PhaseMatrix() {
  const [p1, setP1] = useState("한밤, 도적단이 라키아 변방 마을에 들이닥친다. 잠에서 깬 테오도라가 처음 검을 든다.");
  const [p2, setP2] = useState("마을에서 도적들을 밀어냈으나, 그들이 무언가를 노리고 물러난다. 자국을 좇는다.");
  const [p3, setP3] = useState("도적들 뒤에 이들을 부리는 자가 있다. 졸개를 넘어 그 윤곽에 다가선다.");
  const [keywords, setKeywords] = useState("");
  const [target, setTarget] = useState("p1");
  const [selected, setSelected] = useState(["용기"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cards, setCards] = useState([]);
  const [raw, setRaw] = useState("");

  const toggle = (k) => setSelected((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  const phases = { 1: p1, 2: p2, 3: p3 };
  const cur = STAGES.find((s) => s.id === target) || STAGES[1];

  const generate = async () => {
    if (selected.length === 0) { setError("인격을 하나 이상 선택해주세요."); return; }
    if (cur.mode === "phase" && !phases[cur.n].trim()) { setError(`${cur.n}페이즈 국면을 입력해주세요.`); return; }
    setLoading(true); setError(""); setCards([]); setRaw("");

    const kw = keywords.trim() ? `키워드(적극 반영): ${keywords.trim()}\n` : "";
    const ppl = `인격: ${selected.join(", ")}\n`;
    let userMsg;
    if (cur.mode === "origin") {
      userMsg =
        `생성 대상: 기원 (1스테이지 "라키아의 들개" 도입 — 5세, 어머니의 선택에서 인격이 갈리는 분기점)\n` +
        kw + ppl +
        `인격마다 기원 카드 1장을 만들어라. desc(그 인격의 기원 장면 — 사실)와 quote(테오도라의 목소리)만. 전투·우연·effect 없음. JSON만.`;
    } else if (cur.mode === "fate") {
      userMsg =
        `생성 대상: 운명 전투 (1스테이지 보스 = 성급한 프리키온)\n` +
        kw + ppl +
        `인격마다 운명 카드 1장을 전투 카드 형식으로 만들어라 — desc(프리키온과 마주선 상황), quote(테오도라의 목소리), adversary(보스). JSON만.`;
    } else {
      userMsg =
        `스테이지: 챕터1 · 1스테이지 "라키아의 들개" (운명 보스 = 성급한 프리키온)\n` +
        `1페이즈: ${p1.trim() || "(미입력)"}\n2페이즈: ${p2.trim() || "(미입력)"}\n3페이즈: ${p3.trim() || "(미입력)"}\n\n` +
        `→ 지금 생성할 페이즈: ${cur.n}페이즈 — "${phases[cur.n].trim()}"\n` +
        kw + ppl +
        `이 페이즈에 깔릴 기록 카드를 인격마다 5장(사건1·전투1·우연3=행운/불운/중립) 만들어라. 사건·전투·우연은 같은 국면의 세 단면 — 순서 자유로 엮여야 한다. JSON만.`;
    }

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 3000,
          system: SYSTEM,
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
      const clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      try {
        const parsed = JSON.parse(clean);
        if (parsed && Array.isArray(parsed.cards) && parsed.cards.length) setCards(parsed.cards);
        else setRaw(text);
      } catch { setRaw(text); }
    } catch { setError("생성 중 오류가 났습니다. 다시 시도해주세요."); }
    finally { setLoading(false); }
  };

  const byPersona = PERSONAS
    .filter((p) => cards.some((c) => c.persona === p.key))
    .map((p) => {
      const all = cards.filter((c) => c.persona === p.key);
      const event = all.find((c) => c.kind === "event");
      const battle = all.find((c) => c.kind === "battle");
      const chances = ["행운", "불운", "중립"]
        .map((cat) => all.find((c) => c.kind === "chance" && c.category === cat))
        .filter(Boolean);
      return { meta: p, all, fixed: [event, battle].filter(Boolean), chances };
    });

  return (
    <div className="pm-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nanum+Myeongjo:wght@400;700;800&display=swap');
        .pm-root{ --bg:#0c0d12; --panel:#15161d; --panel2:#1b1c25; --bone:#e9e3d4; --mute:#928c7d;
          --faint:#5d5849; --gold:${ACCENT}; --line:rgba(194,163,92,.22);
          min-height:100%; background:radial-gradient(1200px 600px at 80% -10%, rgba(194,163,92,.06), transparent 60%),
            radial-gradient(900px 500px at -5% 110%, rgba(90,110,130,.06), transparent 55%), var(--bg);
          color:var(--bone); font-family:'Nanum Myeongjo',serif; padding:42px 30px 64px; box-sizing:border-box; }
        .pm-root *{ box-sizing:border-box; }
        .wrap{ max-width:1200px; margin:0 auto; }
        .mast{ border-bottom:1px solid var(--line); padding-bottom:22px; margin-bottom:30px; display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; }
        .brand{ display:flex; flex-direction:column; gap:4px; }
        .eyebrow{ font-family:'Cormorant Garamond',serif; letter-spacing:.42em; text-transform:uppercase; font-size:12px; color:var(--gold); font-weight:600; }
        .brand h1{ margin:0; font-family:'Cormorant Garamond',serif; font-weight:700; font-style:italic; font-size:42px; line-height:1; }
        .brand .kr{ font-size:15px; color:var(--mute); margin-top:7px; }
        .ver{ font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--faint); border:1px solid var(--line); padding:6px 12px; border-radius:2px; letter-spacing:.1em; white-space:nowrap; }
        .grid{ display:grid; grid-template-columns:320px 1fr; gap:28px; align-items:start; }
        @media (max-width:900px){ .grid{ grid-template-columns:1fr; } }
        .panel{ background:linear-gradient(180deg,var(--panel),var(--panel2)); border:1px solid var(--line); border-radius:4px; padding:22px; position:sticky; top:20px; }
        @media (max-width:900px){ .panel{ position:static; } }
        .label{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.26em; font-size:11px; color:var(--gold); font-weight:600; margin:0 0 8px; display:block; }
        .field{ margin-bottom:18px; }
        .pnum{ font-family:'Cormorant Garamond',serif; font-size:13px; color:var(--gold); border:1px solid var(--line); width:21px; height:21px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; margin-bottom:5px; }
        textarea.in{ width:100%; background:#0c0d12; border:1px solid var(--line); color:var(--bone); font-family:'Nanum Myeongjo',serif; font-size:13.5px; padding:9px 11px; border-radius:3px; outline:none; resize:vertical; line-height:1.5; }
        textarea.in:focus{ border-color:var(--gold); }
        .seg{ display:flex; gap:6px; }
        .segb{ flex:1; cursor:pointer; text-align:center; border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:9px 4px; font-family:'Cormorant Garamond',serif; font-size:15px; color:var(--mute); transition:all .15s; }
        .segb.on{ background:rgba(194,163,92,.16); border-color:var(--gold); color:var(--bone); }
        .chips{ display:flex; gap:7px; }
        .chip{ flex:1; cursor:pointer; border:1px solid var(--line); border-radius:3px; background:#0c0d12; padding:9px 4px 7px; text-align:center; transition:all .15s; user-select:none; }
        .chip .g{ font-family:'Cormorant Garamond',serif; font-size:14px; color:var(--faint); }
        .chip .n{ font-weight:700; font-size:13px; margin-top:2px; color:var(--mute); }
        .btn{ width:100%; margin-top:4px; cursor:pointer; border:1px solid var(--gold); background:linear-gradient(180deg, rgba(194,163,92,.16), rgba(194,163,92,.06)); color:var(--bone); font-family:'Cormorant Garamond',serif; font-weight:600; letter-spacing:.2em; text-transform:uppercase; font-size:14px; padding:12px; border-radius:3px; transition:all .2s; }
        .btn:hover:not(:disabled){ background:rgba(194,163,92,.22); }
        .btn:disabled{ opacity:.5; cursor:wait; }
        .note{ font-size:11px; color:var(--faint); line-height:1.6; margin-top:16px; border-top:1px solid var(--line); padding-top:13px; }
        .stage{ min-height:300px; }
        .empty,.loading{ height:100%; min-height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; }
        .empty{ border:1px dashed var(--line); border-radius:4px; color:var(--faint); text-align:center; padding:30px; }
        .empty .lab{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:24px; color:var(--mute); }
        .pulse{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:22px; color:var(--gold); animation:breathe 1.6s ease-in-out infinite; }
        @keyframes breathe{ 0%,100%{opacity:.35;} 50%{opacity:1;} }
        .err{ border:1px solid #7a3b34; background:rgba(140,60,52,.12); color:#d99; padding:14px 16px; border-radius:3px; font-size:14px; }
        .phasehead{ font-family:'Cormorant Garamond',serif; font-style:italic; font-size:20px; color:var(--gold); margin-bottom:4px; }
        .phasesit{ font-size:14px; color:var(--mute); margin-bottom:22px; padding-bottom:14px; border-bottom:1px solid var(--line); }
        .prow{ margin-bottom:30px; }
        .prowhead{ display:flex; align-items:center; gap:9px; margin-bottom:12px; }
        .badge{ font-family:'Cormorant Garamond',serif; font-size:14px; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid currentColor; }
        .pname{ font-weight:700; font-size:14px; }
        .pmotto{ font-size:11px; color:var(--faint); margin-left:auto; }
        .grouplab{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.2em; font-size:10px; color:var(--faint); margin:14px 0 9px; }
        .two{ display:grid; grid-template-columns:repeat(2,1fr); gap:13px; }
        .three{ display:grid; grid-template-columns:repeat(3,1fr); gap:13px; }
        @media (max-width:680px){ .two,.three{ grid-template-columns:1fr; } }
        .card{ border:1px solid var(--line); border-top-width:2px; border-radius:4px; padding:14px 15px; background:#101119; opacity:0; transform:translateY(8px); animation:rise .45s ease forwards; }
        @keyframes rise{ to{ opacity:1; transform:none; } }
        .kind{ font-family:'Cormorant Garamond',serif; text-transform:uppercase; letter-spacing:.16em; font-size:10px; margin-bottom:7px; display:inline-block; }
        .ctitle{ font-weight:800; font-size:16px; color:var(--bone); margin-bottom:9px; line-height:1.3; }
        .cdesc{ font-size:13px; line-height:1.55; color:#c4bdae; margin-bottom:9px; }
        .cquote{ font-size:13px; line-height:1.55; color:var(--bone); font-style:italic; padding-left:9px; border-left:2px solid var(--line); margin-bottom:9px; }
        .cmeta{ font-size:11.5px; color:var(--faint); border-top:1px dashed var(--line); padding-top:7px; }
        .cmeta b{ color:var(--mute); font-weight:400; }
        .rawbox{ white-space:pre-wrap; font-family:'Nanum Myeongjo',serif; font-size:13.5px; line-height:1.6; color:#cfc9ba; border:1px solid var(--line); border-radius:4px; padding:18px; background:#101119; }
      `}</style>

      <div className="wrap">
        <header className="mast">
          <div className="brand">
            <span className="eyebrow">Stoa Factory</span>
            <h1>Phase Matrix</h1>
            <span className="kr">크로니클 · 기록 카드 생성 MVP — 기원 · 페이즈(1·2·3) · 운명</span>
          </div>
          <span className="ver">v0.7 · 기원·운명</span>
        </header>

        <div className="grid">
          <aside className="panel">
            <div className="field">
              <label className="label">페이즈 국면 (1·2·3 전용)</label>
              {[1, 2, 3].map((n) => (
                <div key={n} style={{ marginBottom: 8 }}>
                  <span className="pnum">{n}</span>
                  <textarea className="in" rows={2}
                    value={n === 1 ? p1 : n === 2 ? p2 : p3}
                    onChange={(e) => (n === 1 ? setP1 : n === 2 ? setP2 : setP3)(e.target.value)}
                    placeholder={`${n}페이즈 국면`} />
                </div>
              ))}
              <div style={{ fontSize: 11, color: "var(--faint)", marginTop: 4 }}>기원·운명은 국면 입력 없이 키워드만 받습니다.</div>
            </div>

            <div className="field">
              <label className="label">생성 대상</label>
              <div className="seg">
                {STAGES.map((s) => (
                  <div key={s.id} className={`segb${target === s.id ? " on" : ""}`} onClick={() => setTarget(s.id)}>{s.label}</div>
                ))}
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
              <label className="label">키워드 (선택 · 적극 반영)</label>
              <textarea className="in" rows={2} value={keywords} onChange={(e) => setKeywords(e.target.value)}
                placeholder="예: 어머니의 검, 불타는 곳간, 무리의 흔적…" />
            </div>

            <button className="btn" onClick={generate} disabled={loading}>
              {loading ? "엮는 중…" : `${cur.label} 생성`}
            </button>

            <p className="note">
              <b style={{ color: "var(--mute)" }}>기원</b>=desc·quote만 · <b style={{ color: "var(--mute)" }}>1·2·3</b>=사건1·전투1·우연3 · <b style={{ color: "var(--mute)" }}>운명</b>=전투 카드(보스 프리키온).
              밸런스·effect는 비움(방향만).
              <br /><br />
              톤은 철님 전사 카드 flavor 기준. 인격 여럿 켜면 출력이 길어 잘릴 수 있어요(1개 권장).
            </p>
          </aside>

          <section className="stage">
            {error && <div className="err">{error}</div>}
            {loading && <div className="loading"><div className="pulse">페이즈의 단면들을 부른다…</div></div>}
            {!loading && !error && byPersona.length === 0 && !raw && (
              <div className="empty"><div className="lab">tabula rasa</div><div>페이즈 국면을 넣고 생성을 누르세요.</div></div>
            )}
            {!loading && raw && <div className="rawbox">{raw}</div>}
            {!loading && byPersona.length > 0 && (
              <div>
                <div className="phasehead">
                  {cur.mode === "origin" ? "기원" : cur.mode === "fate" ? "운명 — 성급한 프리키온" : `Phase ${cur.n}`}
                </div>
                <div className="phasesit">
                  {cur.mode === "phase" ? phases[cur.n]
                    : cur.mode === "origin" ? "5세, 어머니의 선택 — 인격이 갈리는 분기점"
                    : "1스테이지 보스전"}
                </div>
                {byPersona.map((grp, gi) => (
                  <div className="prow" key={gi}>
                    <div className="prowhead">
                      <span className="badge" style={{ color: grp.meta.line }}>{grp.meta.glyph}</span>
                      <span className="pname" style={{ color: grp.meta.line }}>{grp.meta.key}</span>
                      <span className="pmotto">{grp.meta.motto}</span>
                    </div>

                    {cur.mode === "phase" ? (
                      <>
                        <div className="two">
                          {grp.fixed.map((c, ci) => {
                            const k = KINDS[c.kind] || { ko: c.kind, color: "var(--mute)" };
                            return (
                              <article key={ci} className="card" style={{ borderTopColor: k.color, animationDelay: `${ci * 0.07}s` }}>
                                <span className="kind" style={{ color: k.color }}>{k.ko}</span>
                                <div className="ctitle">{c.title}</div>
                                <div className="cdesc">{c.desc}</div>
                                <div className="cquote">{c.quote}</div>
                                <div className="cmeta">
                                  {c.kind === "battle" && <span><b>적:</b> {c.adversary}</span>}
                                  {c.kind === "event" && <span><b>효과:</b> {c.effect}</span>}
                                </div>
                              </article>
                            );
                          })}
                        </div>
                        <div className="grouplab">우연 — 이 자리에 나올 수 있는 가능성</div>
                        <div className="three">
                          {grp.chances.map((c, ci) => {
                            const col = (CHANCE[c.category] || { color: "var(--gold)" }).color;
                            return (
                              <article key={ci} className="card" style={{ borderTopColor: col, animationDelay: `${ci * 0.07}s` }}>
                                <span className="kind" style={{ color: col }}>우연 · {c.category}</span>
                                <div className="ctitle">{c.title}</div>
                                <div className="cdesc">{c.desc}</div>
                                <div className="cquote">{c.quote}</div>
                                <div className="cmeta"><b>효과:</b> {c.effect}</div>
                              </article>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="two">
                        {grp.all.map((c, ci) => {
                          const col = cur.mode === "fate" ? "#b8463a" : grp.meta.line;
                          return (
                            <article key={ci} className="card" style={{ borderTopColor: col, animationDelay: `${ci * 0.07}s` }}>
                              <span className="kind" style={{ color: col }}>{cur.mode === "fate" ? "운명 · 전투" : "기원"}</span>
                              <div className="ctitle">{c.title}</div>
                              <div className="cdesc">{c.desc}</div>
                              <div className="cquote">{c.quote}</div>
                              {cur.mode === "fate" && c.adversary && <div className="cmeta"><b>적:</b> {c.adversary}</div>}
                            </article>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
