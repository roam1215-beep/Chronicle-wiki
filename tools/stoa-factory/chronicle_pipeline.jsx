import { useState } from "react";

// ──────────────────────────────────────────────────────────────
// CANON — Chronicle 세계 사전 + 카드 스키마 (5단계 공유, 한 곳에서 관리)
// 출처: design/worldbuilding.md [A] · design/narrative_ssot.md · design/style_canon.md · specs/cards.md
// 캐논이 바뀌면 여기만 고친다.
// ──────────────────────────────────────────────────────────────
const CANON = `[Chronicle 세계 사전 — 불변 캐논]

세계:
- 이오니아: 바다·섬의 패권국. 자칭 '황금의 도시'. 원주민에게 거주세를 물려 옥죄는 기만적 식민. 아테네 결.
- 도리아: 분지의 억압 세력. 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 경계 소국: 두 세력 사이에서 양쪽 다에게 수탈당하는 이중 피해자. (라키아가 이 자리.)
- 멸칭: 도리아='대지의 미궁'(갇힌 줄 알며 못 나옴) ↔ 이오니아='바다 위 새장'(갇힌 줄 모름). '미궁'은 시선의 은유.

종족 (가해 구조):
- 무리(선주민): 이 땅의 원래 주인. 인간(정복자)에게 땅을 빼앗긴 자들. 형상 없는 자연신을 섬김.
- 인간: 나중에 온 정복자(이오니아·도리아·경계인 전부). 가해를 인지하지 못한다. 주인공조차 인간 측 시점의 맹점에서 자유롭지 않다.

신앙 4분기: 낮=하늘·태양(이오니아) / 여명=달·사냥(친이오니아) / 황혼=화로·그림자(친도리아) / 밤=땅·밤(도리아). 인간=인격신(형상 有), 무리=자연신(형상 無).

메타 구조 (★):
- 인격 = 한 인물의 가능세계. 한 인물의 한 오더 = 가능세계 3 = 직업 3.
- 인격↔직업(고정): 용기=전사(warrior) / 지혜=사냥꾼(hunter) / 정의=사제(priest).
- 같은 인물·같은 사건도 인격(렌즈)에 따라 다르게 풀린다(사건은 인격의 함수). '4주덕 결핍' 도식은 쓰지 마라.
- 오더 = 한 영웅의 이야기책 한 권. 클리어 = 카타스테리스모스(별이 됨). 장르=판타지 플루타르크 영웅전(영웅의 한계까지 그림).

인격 함수 (느낌만, 문장 형식 지정 금지):
- 용기: 동기=가까운 사람. 행동=정면돌파·맞서 결단·물러서지 않음. 화법=마음이 먼저 정해진 목소리.
- 지혜: 동기=자신. 행동=최단·최적·치명·분석적. 화법=한 발 떨어진 냉소.
- 정의: 동기=공동체. 행동=동행·구원·함께. 화법=곁(타인)을 향하는 목소리.

양식:
- description(기록) = 객관 사실. 상황 서술만. 감상·1인칭·미사여구 금지.
- quote(기록) = 주관. 그 인격의 목소리. 인격마다 반드시 다름.
- flavor(전승) = 톤. 간결·구체적 고유명사·한 대상의 양면을 보는 시선. 과한 비장·현대어·이모지 금지. 약간의 위트 환영.

[카드 스키마 — 생성 기준. 수치·등급·비용·적 덱은 전부 비운다(밸런스 영역)]
■ 기록 카드 (덱 밖):
- event(사건): 비전투 확정 사건. effect 방향 = 속박/교차/이별 중.
- battle(전투): 일반 적과의 전투. adversary(적 한 줄). effect 없음(보상 자동).
- chance(우연): 위장된 우연. category = 행운|불운 (외부 표기는 "우연", 중립 없음). 행운=이로움 / 불운=해로움.
- fate(운명): 스테이지 보스전. adversary(보스 한 줄). effect 없음(보상 자동).
■ 전승 카드 (덱 안):
- character(인물): belongs_to(직업 전용 또는 neutral) + type 방향(보병/사수/기수/전령) + flavor + effect 방향.
- equipment(장비): belongs_to(직업 전용) + attach(king|unit) + flavor + effect 방향(키워드 부여·조건부·트레이드오프).
- spell(기도): belongs_to(직업 전용) + target 방향(말1/다수/진영/병종/대적자) + flavor + effect 방향.`;

// 단계별 지시 — CANON에 얹는다
const INSTR = {
  narrative: `[너의 일 — 1단계 서사 (거시: 인물·이름·구조)]
씨앗(추상 서사 한 덩이)을 받아 Chronicle 세계로 펼친다. 캐논과 모순 금지.
한 인물을 세우고, 용기·지혜·정의 세 렌즈로 통과시켜 가능세계 3개를 만든다. 이름도 여기서 짓는다(인격 형용사+이름).
여기서는 거시 골격까지만 — 챕터·스테이지는 "이름"만. 페이즈·카드는 다음 단계에서 한 스테이지씩 깊게 한다.
반드시 아래 JSON만. 펜스·설명 금지.
{
  "protagonist_base": "주인공이 누구인지 한 줄 (이름 제외, 정체·처지)",
  "personas": [
    {"persona":"용기","name":"형용사+이름","job":"전사","arc":"용기 렌즈로 이 이야기를 사는 한 줄"},
    {"persona":"지혜","name":"...","job":"사냥꾼","arc":"..."},
    {"persona":"정의","name":"...","job":"사제","arc":"..."}
  ],
  "order_name": "오더(이야기책) 이름",
  "chapters": [
    {"name":"챕터1 이름","stages":["stage1 이름","stage2 이름","stage3 이름"]},
    {"name":"챕터2 이름","stages":["...","...","..."]},
    {"name":"챕터3 이름","stages":["...","...","..."]}
  ],
  "theme": "세 회차를 겹쳐야 드러나는 전말 한 줄"
}`,

  flow: `[너의 일 — 2단계 흐름 (한 스테이지를 페이즈로 분화)]
앞 서사와, 사용자가 고른 "한 스테이지"를 받아, 그 스테이지를 페이즈 단위로 분해한다. 인격마다 따로.
페이즈 = p1·p2·p3 + fate(스테이지 보스전).
- situation: 그 인격이 그 페이즈를 통과하는 국면 1~2문장. 객관적 공통 사건을 그 인격의 동기·행동으로 변주한다. ★인격마다 "만나는 사실·서 있는 위치"가 달라야 한다 — 같은 문장 복붙 금지.
- keywords: 그 페이즈에서 카드 소재가 될 구체적 모티프 2~3개(명사·상황. 예: "불타는 곳간","무너진 길목"). 추상어 금지.
이 situation·keywords가 다음(기록) 단계의 입력이 된다. 다르게 잘 갈수록 카드가 갈린다.
반드시 아래 JSON만.
{
  "stage": "고른 스테이지 이름",
  "flows": [
    {"persona":"용기","phases":[
      {"id":"p1","situation":"","keywords":["",""]},
      {"id":"p2","situation":"","keywords":["",""]},
      {"id":"p3","situation":"","keywords":["",""]},
      {"id":"fate","situation":"","keywords":["",""]}
    ]},
    {"persona":"지혜","phases":[ ... 동일 구조 ... ]},
    {"persona":"정의","phases":[ ... 동일 구조 ... ]}
  ]
}`,

  record: `[너의 일 — 3단계 기록 카드]
앞 흐름(페이즈별 situation+keywords, 인격별)을 받아, 그 스테이지의 기록 카드를 만든다.
각 페이즈에서: 사건(event) 또는 우연(chance) 한 장을, fate 페이즈에서는 보스전(fate)을. (battle은 필요시.)
★ description은 객관 사실이되, 인격마다 다른 사실/위치를 만나야 한다(situation을 따른다. 복붙 금지). quote는 인격별 주관·화법.
- 우연(chance)은 category="행운" 또는 "불운"만 (중립 없음).
- event는 effect를 "속박/교차/이별" 중 방향으로. fate·battle은 effect 없이 adversary(보스/적) 한 줄.
- 수치·적 덱은 비운다.
반드시 아래 JSON만.
{
  "stage": "스테이지 이름",
  "cards": [
    {"persona":"용기","phase":"p1","kind":"event","title":"","description":"","quote":"","effect_dir":"속박/교차/이별 중"},
    {"persona":"지혜","phase":"p2","kind":"chance","category":"불운","title":"","description":"","quote":""},
    {"persona":"정의","phase":"fate","kind":"fate","adversary":"보스 한 줄","title":"","description":"","quote":""}
  ]
}
(인격 3 × 페이즈 4 = 적절히. 각 인격이 p1·p2·p3·fate를 채우게.)`,

  talisman: `[너의 일 — 4단계 전승 카드]
앞 단계들이 만든 이 스테이지의 이야기를 소재로, 덱에 들어갈 전승 카드를 만든다. 인물·장비·기도 각 1장 이상.
이 이야기다운 카드여야 한다(다른 인격이면 안 나올 카드). flavor는 Chronicle 톤. 수치·등급·비용은 비운다(방향만).
반드시 아래 JSON만.
{
  "cards": [
    {"kind":"character","name":"","belongs_to":"warrior|hunter|priest|neutral","type_dir":"보병/사수/기수/전령 중","flavor":"톤 한 줄","effect_dir":"효과 방향(수치 없이)"},
    {"kind":"equipment","name":"","belongs_to":"...","attach":"king|unit","flavor":"...","effect_dir":"..."},
    {"kind":"spell","name":"","belongs_to":"...","target_dir":"말1/다수/진영/병종/대적자 중","flavor":"...","effect_dir":"..."}
  ]
}`,
};

async function callClaude(system, userText) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system,
      messages: [{ role: "user", content: userText }],
    }),
  });
  const data = await res.json();
  const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n");
  return text.replace(/```json|```/g, "").trim();
}

const STEPS = [
  { key: "seed", label: "0 · 씨앗" },
  { key: "narrative", label: "1 · 서사" },
  { key: "flow", label: "2 · 흐름" },
  { key: "record", label: "3 · 기록" },
  { key: "talisman", label: "4 · 전승" },
];

// ── 스타일 ──
const PCOLOR = { "용기": "#d98a5a", "지혜": "#6a9ad9", "정의": "#8ac88a" };
const KKR = { character: "인물", equipment: "장비", spell: "기도", stratagem: "책략" };
const KIND_KR = { event: "사건", battle: "전투", chance: "우연", fate: "운명", origin: "기원" };
const card = { background: "#221f19", border: "1px solid #3a352d", borderRadius: 8, padding: 12 };
const grid = { display: "grid", gridTemplateColumns: "1fr", gap: 10, margin: "8px 0" };
const sect = { padding: "6px 0", fontSize: 14, borderBottom: "1px solid #2a251d" };
const lbl = { color: "#e8c884", fontWeight: 600, marginRight: 6 };
const lead = { fontSize: 14, color: "#cfc8bc", lineHeight: 1.6, padding: "8px 0", borderBottom: "1px solid #2a251d" };
const fb = { fontSize: 12, color: "#9a948a", padding: "16px 0" };
const chip = { display: "inline-block", padding: "4px 10px", margin: "3px 4px 0 0", fontSize: 12, borderRadius: 14, border: "1px solid #3a352d", background: "#1a1814", color: "#cfc8bc", cursor: "pointer" };
const chipOn = { ...chip, borderColor: "#c8a05a", background: "#2a251d", color: "#e8c884" };
const kw = { display: "inline-block", padding: "1px 7px", margin: "2px 4px 0 0", fontSize: 11, borderRadius: 4, background: "#1a1814", color: "#9a948a", border: "1px solid #2a251d" };

function parse(raw) { try { return JSON.parse(raw); } catch { return null; } }

function NarrativeView({ d, picked, onPick }) {
  return (
    <div>
      {d.protagonist_base && <div style={lead}>{d.protagonist_base}</div>}
      <div style={grid}>
        {(d.personas || []).map((p, i) => (
          <div key={i} style={{ ...card, borderTop: `2px solid ${PCOLOR[p.persona] || "#c8a05a"}` }}>
            <div style={{ fontSize: 11, color: PCOLOR[p.persona] || "#c8a05a" }}>{p.persona} · {p.job}</div>
            <div style={{ fontSize: 15, fontWeight: 600, margin: "2px 0 6px" }}>{p.name}</div>
            <div style={{ fontSize: 12, color: "#bbb4a8", lineHeight: 1.5 }}>{p.arc}</div>
          </div>
        ))}
      </div>
      {d.order_name && <div style={sect}><span style={lbl}>오더</span>{d.order_name}</div>}
      <div style={{ fontSize: 11, color: "#7a746a", margin: "10px 0 4px" }}>아래 스테이지 하나를 골라 깊게 들어갑니다 ↓</div>
      {(d.chapters || []).map((c, i) => (
        <div key={i} style={{ padding: "6px 0" }}>
          <span style={lbl}>{c.name}</span>
          <div>
            {(c.stages || []).map((s, j) => (
              <span key={j} style={picked === s ? chipOn : chip} onClick={() => onPick(s)}>{s}</span>
            ))}
          </div>
        </div>
      ))}
      {d.theme && <div style={{ ...sect, color: "#c8a05a", fontStyle: "italic", marginTop: 8 }}>전말 — {d.theme}</div>}
    </div>
  );
}

function FlowView({ d }) {
  return (
    <div>
      {d.stage && <div style={sect}><span style={lbl}>스테이지</span>{d.stage}</div>}
      {(d.flows || []).map((f, i) => (
        <div key={i} style={{ ...card, borderTop: `2px solid ${PCOLOR[f.persona] || "#c8a05a"}`, marginTop: 10 }}>
          <div style={{ fontSize: 12, color: PCOLOR[f.persona] || "#c8a05a", fontWeight: 600, marginBottom: 6 }}>{f.persona}</div>
          {(f.phases || []).map((ph, j) => (
            <div key={j} style={{ padding: "5px 0", borderTop: j ? "1px solid #2a251d" : "none" }}>
              <div style={{ fontSize: 11, color: "#9a948a" }}>{ph.id}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>{ph.situation}</div>
              <div>{(ph.keywords || []).map((k, n) => <span key={n} style={kw}>{k}</span>)}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function RecordView({ d }) {
  return (
    <div>
      {d.stage && <div style={sect}><span style={lbl}>스테이지</span>{d.stage}</div>}
      <div style={grid}>
        {(d.cards || []).map((c, i) => (
          <div key={i} style={{ ...card, borderTop: `2px solid ${PCOLOR[c.persona] || "#c8a05a"}` }}>
            <div style={{ fontSize: 11, color: PCOLOR[c.persona] || "#c8a05a" }}>
              {c.persona} · {c.phase} · {KIND_KR[c.kind] || c.kind}
              {c.category ? `(${c.category})` : ""}{c.adversary ? ` · ${c.adversary}` : ""}{c.effect_dir ? ` · ${c.effect_dir}` : ""}
            </div>
            {c.title && <div style={{ fontSize: 14, fontWeight: 600, margin: "3px 0" }}>{c.title}</div>}
            <div style={{ fontSize: 13, margin: "3px 0", lineHeight: 1.5 }}>{c.description}</div>
            {c.quote && <div style={{ fontSize: 12, color: "#bbb4a8", fontStyle: "italic" }}>"{c.quote}"</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function TalismanView({ d }) {
  return (
    <div style={grid}>
      {(d.cards || []).map((c, i) => (
        <div key={i} style={card}>
          <div style={{ fontSize: 11, color: "#c8a05a" }}>
            {KKR[c.kind] || c.kind} · {c.belongs_to}
            {c.type_dir ? ` · ${c.type_dir}` : ""}{c.attach ? ` · ${c.attach}` : ""}{c.target_dir ? ` · ${c.target_dir}` : ""}
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, margin: "2px 0 6px" }}>{c.name}</div>
          {c.flavor && <div style={{ fontSize: 12, color: "#bbb4a8", fontStyle: "italic", marginBottom: 4 }}>{c.flavor}</div>}
          {c.effect_dir && <div style={{ fontSize: 12, color: "#9a948a" }}>효과 — {c.effect_dir}</div>}
        </div>
      ))}
    </div>
  );
}

function renderOutput(key, raw, picked, onPick) {
  const d = parse(raw);
  if (!d) return <div style={fb}>아직 JSON으로 깔끔히 안 떨어졌어요 — "원본 고치기"로 직접 보거나 다시 생성해보세요.</div>;
  if (key === "narrative") return <NarrativeView d={d} picked={picked} onPick={onPick} />;
  if (key === "flow") return <FlowView d={d} />;
  if (key === "record") return <RecordView d={d} />;
  if (key === "talisman") return <TalismanView d={d} />;
  return null;
}

export default function ChroniclePipeline() {
  const [seed, setSeed] = useState("");
  const [step, setStep] = useState(0);
  const [out, setOut] = useState({}); // {narrative, flow, record, talisman} — raw text (검수 관문)
  const [stage, setStage] = useState(""); // 고른 스테이지
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [showRaw, setShowRaw] = useState(false);
  const goStep = (i) => { setStep(i); setShowRaw(false); };

  const run = async (which) => {
    setLoading(true);
    setErr("");
    try {
      let userText = "";
      if (which === "narrative") {
        if (!seed.trim()) { setErr("씨앗을 먼저 넣어주세요."); setLoading(false); return; }
        userText = `[씨앗]\n${seed.trim()}\n\n위 씨앗을 Chronicle 세계로 펼쳐라. JSON만.`;
      } else if (which === "flow") {
        if (!out.narrative) { setErr("1단계(서사)를 먼저 생성하세요."); setLoading(false); return; }
        if (!stage) { setErr("서사에서 스테이지 하나를 먼저 고르세요(스테이지 칩 클릭)."); setLoading(false); return; }
        userText = `[1단계 서사]\n${out.narrative}\n\n[고른 스테이지]\n${stage}\n\n이 스테이지를 인격별 페이즈로 분화하라. JSON만.`;
      } else if (which === "record") {
        if (!out.flow) { setErr("2단계(흐름)를 먼저 생성하세요."); setLoading(false); return; }
        userText = `[2단계 흐름 — situation+keywords, 인격별]\n${out.flow}\n\n[스테이지]\n${stage}\n\n이 흐름으로 기록 카드를 만들어라(description은 인격별로 다르게). JSON만.`;
      } else if (which === "talisman") {
        if (!out.record) { setErr("3단계(기록)를 먼저 생성하세요."); setLoading(false); return; }
        userText = `[앞 단계 이야기]\n■ 서사:\n${out.narrative}\n\n■ 흐름:\n${out.flow}\n\n■ 기록:\n${out.record}\n\n[스테이지] ${stage}\n\n이 이야기를 소재로 전승 카드. JSON만.`;
      }
      const result = await callClaude(CANON + "\n\n" + INSTR[which], userText);
      setOut((o) => ({ ...o, [which]: result }));
    } catch (e) {
      setErr("호출 실패: " + String(e));
    }
    setLoading(false);
  };

  const pickStage = (s) => { setStage(s); };
  const cur = STEPS[step];

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", maxWidth: 860, margin: "0 auto", padding: 20, color: "#e8e4dc", background: "#1a1814", minHeight: "100vh" }}>
      <h2 style={{ margin: "0 0 4px", fontSize: 20 }}>크로니클 파이프라인 — 씨앗 → 서사 → 흐름 → 기록 → 전승</h2>
      <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 14 }}>
        한 스테이지씩 깊게. 서사에서 스테이지를 고르면 → 그 스테이지를 페이즈로 분화(흐름) → 카드로. 각 출력은 <b>편집 가능</b>(검수 관문).
        {stage && <span style={{ color: "#e8c884" }}> · 고른 스테이지: {stage}</span>}
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
        {STEPS.map((s, i) => (
          <button key={s.key} onClick={() => goStep(i)}
            style={{
              padding: "6px 12px", borderRadius: 6, fontSize: 12, cursor: "pointer",
              border: "1px solid " + (i === step ? "#c8a05a" : "#3a352d"),
              background: i === step ? "#2a251d" : "transparent",
              color: i === step ? "#e8c884" : (out[s.key] || s.key === "seed" ? "#e8e4dc" : "#6a645a"),
            }}>
            {s.label}{out[s.key] ? " ✓" : ""}
          </button>
        ))}
      </div>

      {cur.key === "seed" && (
        <div>
          <label style={{ fontSize: 12, color: "#9a948a" }}>씨앗 — 추상 서사 한 덩이 (인물·사건·결말의 결만, 이름 없어도 됨)</label>
          <textarea value={seed} onChange={(e) => setSeed(e.target.value)} rows={7}
            placeholder="예: 성문이 뚫리고 도시가 화염에 휩싸인다. 도망치던 자가 결국 적에게 잡히고, 가장 높던 자가 바닥으로 떨어진다..."
            style={ta} />
          <button onClick={() => { run("narrative"); goStep(1); }} disabled={loading} style={goBtn}>서사 생성 → 1단계로</button>
        </div>
      )}

      {cur.key !== "seed" && (
        <div>
          <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 6 }}>
            {cur.key === "narrative" && "1단계 — 인물·이름·오더/챕터/스테이지(이름)·전말. 스테이지 하나를 고르세요."}
            {cur.key === "flow" && "2단계 — 고른 스테이지를 인격별 페이즈(situation+keywords)로 분화. desc 분화의 토대."}
            {cur.key === "record" && "3단계 — 흐름을 받아 기록 카드(사건·전투·우연·운명). description 인격별로 다름."}
            {cur.key === "talisman" && "4단계 — 이 스테이지 이야기를 소재로 전승 카드(인물·장비·기도)."}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <button onClick={() => run(cur.key)} disabled={loading} style={goBtn}>{loading ? "생성 중…" : (out[cur.key] ? "다시 생성" : "생성")}</button>
            {out[cur.key] && step < 4 && <button onClick={() => goStep(step + 1)} style={nextBtn}>검수 완료 → 다음 단계</button>}
          </div>
          {out[cur.key] && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <label style={{ fontSize: 11, color: "#7a746a" }}>{showRaw ? "원본 (JSON) — 고치면 다음 단계 입력이 됩니다" : "출력"}</label>
              <button onClick={() => setShowRaw((s) => !s)} style={toggleBtn}>{showRaw ? "카드로 보기" : "원본(JSON) 고치기"}</button>
            </div>
          )}
          {out[cur.key]
            ? (showRaw
              ? <textarea value={out[cur.key]} onChange={(e) => setOut((o) => ({ ...o, [cur.key]: e.target.value }))} rows={16} style={{ ...ta, fontFamily: "ui-monospace, monospace", fontSize: 12 }} />
              : renderOutput(cur.key, out[cur.key], stage, pickStage))
            : <div style={{ fontSize: 12, color: "#6a645a", padding: "20px 0" }}>생성을 누르면 여기에 나옵니다.</div>}
        </div>
      )}

      {err && <div style={{ color: "#e08a6a", fontSize: 12, marginTop: 8 }}>{err}</div>}
    </div>
  );
}

const ta = { width: "100%", boxSizing: "border-box", marginTop: 6, padding: 10, background: "#12100c", color: "#e8e4dc", border: "1px solid #3a352d", borderRadius: 6, fontSize: 13, lineHeight: 1.6, resize: "vertical" };
const goBtn = { marginTop: 10, padding: "8px 16px", background: "#c8a05a", color: "#1a1814", border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer" };
const nextBtn = { marginTop: 0, padding: "8px 16px", background: "transparent", color: "#e8c884", border: "1px solid #c8a05a", borderRadius: 6, fontSize: 13, cursor: "pointer" };
const toggleBtn = { padding: "4px 10px", background: "transparent", color: "#9a948a", border: "1px solid #3a352d", borderRadius: 5, fontSize: 11, cursor: "pointer" };
