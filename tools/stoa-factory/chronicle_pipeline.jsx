import { useState } from "react";

// ──────────────────────────────────────────────────────────────
// CANON — Chronicle 세계 사전 (4단계 공유, 한 곳에서 관리)
// 출처: design/worldbuilding.md [A] + design/narrative_ssot.md + design/style_canon.md
// 캐논이 바뀌면 여기만 고친다.
// ──────────────────────────────────────────────────────────────
const CANON = `[Chronicle 세계 사전 — 불변 캐논]

세계:
- 이오니아: 바다·섬의 패권국. 자칭 '황금의 도시'. 원주민에게 거주세를 물려 옥죄는 기만적 식민. 아테네 결.
- 도리아: 분지의 억압 세력. 강자의 약자 지배를 당연시. 노골적 예속. 스파르타 결.
- 경계 소국: 두 세력 사이에서 양쪽 다에게 수탈당하는 이중 피해자. (라키아가 이 자리 — 테오도라의 고향.)
- 멸칭: 도리아='대지의 미궁'(갇힌 줄 알며 못 나옴) ↔ 이오니아='바다 위 새장'(갇힌 줄 모름). '미궁'은 물리 실체가 아니라 보는 자의 시선이 만든 은유.

종족 (가해 구조):
- 무리(선주민): 이 땅의 원래 주인. 인간(정복자)에게 땅을 빼앗긴 자들. 형상 없는 자연신을 섬김.
- 인간: 나중에 온 정복자·정착민(이오니아·도리아·경계인 전부). 가해를 인지하지 못한다. 주인공조차 인간 측 시점의 맹점에서 자유롭지 않다.

신앙 4분기 (같은 신, 두 얼굴):
- 낮=하늘·태양(이오니아) / 여명=달·사냥(친이오니아) / 황혼=화로·그림자(친도리아) / 밤=땅·밤(도리아).
- 인간=인격신(형상·성별 有, 직능으로 부름) / 무리=자연신(형상 無 — 화로의 여신이 아니라 불 그 자체).

메타 구조 (★ 가장 중요):
- 인격 = 한 인물의 가능세계. 한 인물의 한 오더 = 가능세계 3개 = 직업 3개.
- 인격 ↔ 직업 (고정): 용기=전사(warrior) / 지혜=사냥꾼(hunter) / 정의=사제(priest).
- 같은 인물·같은 사건도 인격(렌즈)에 따라 다르게 풀린다 (사건은 인격의 함수).
- 오더 = 한 영웅의 이야기책 한 권. 클리어 = 카타스테리스모스(별이 됨).
- 장르: 판타지 플루타르크 영웅전 — 인격 중심 + 병렬 비교. 단 영웅의 한계까지 그린다(가해 맹점).
- '4주덕 중 하나 결핍=정체성' 같은 도식은 쓰지 마라. 인격은 결핍이 아니라 통과 렌즈다.

인격 함수 (동기 × 행동 × 화법 — 느낌만):
- 용기: 동기=가까운 사람. 행동=정면돌파·맞서 결단·물러서지 않음. 화법=마음이 먼저 정해진 사람의 목소리.
- 지혜: 동기=자신. 행동=최단·최적·치명·분석적. 화법=한 발 떨어져 보는 목소리, 약간의 냉소.
- 정의: 동기=공동체. 행동=동행·구원·함께. 화법=곁(타인)을 향하는 목소리.
- 화법은 성격·태도이지 문장 형식이 아니다. 길이·어미·구문을 지정하지 마라. 억지 구별보다 자연스러움 우선.

양식 (카드 텍스트):
- desc = 객관 사실. 상황 서술만. 감상·1인칭·가치판단·미사여구 금지. (좋음: "사당이 관리되지 않은 채 방치되어 있다.")
- quote = 주관. 그 인격의 목소리. 인격마다 반드시 다름 — 무엇을 보느냐(렌즈) + 어떻게 말하느냐(화법) 둘 다 달라야.
- flavor = 톤 (전승 카드 전용 필드. 기록 카드엔 없음).
- 톤: 간결(한 문장 위주)·구체적 고유명사·한 대상의 양면을 같이 보는 시선("희망이자 골칫거리"). 과한 비장·현대어·이모지 금지. 약간의 위트는 quote/flavor에서 환영.`;

// 단계별 지시 — CANON에 얹는다
const INSTR = {
  narrative: `[너의 일 — 1단계 서사 시뮬]
씨앗(추상 서사 한 덩이)을 받아, 위 Chronicle 세계 사전에 비추어 한 편(오더)으로 펼친다. 캐논과 모순되면 안 된다.
한 인물을 세우고, 그 인물을 용기·지혜·정의 세 렌즈로 통과시켜 가능세계 3개를 만든다. 이름도 여기서 짓는다(인격 형용사 + 이름).
반드시 아래 JSON만 출력. 마크다운 펜스·설명 금지.
{
  "protagonist_base": "주인공이 누구인지 한 줄 (이름 제외, 정체·처지)",
  "personas": [
    {"persona":"용기","name":"형용사+이름 (예: 용맹한 ○○)","job":"전사","arc":"이 인물이 용기 렌즈로 이 이야기를 사는 한 줄"},
    {"persona":"지혜","name":"...","job":"사냥꾼","arc":"..."},
    {"persona":"정의","name":"...","job":"사제","arc":"..."}
  ],
  "order_name": "이 이야기책(오더) 이름",
  "chapters": [
    {"name":"챕터1 이름","stages":["stage1 이름","stage2 이름","stage3 이름"]},
    {"name":"챕터2 이름","stages":["...","...","..."]},
    {"name":"챕터3 이름","stages":["...","...","..."]}
  ],
  "theme": "세 회차를 겹쳐야 드러나는 전말 한 줄"
}`,

  record: `[너의 일 — 2단계 기록 시뮬]
앞 단계(서사)의 출력을 받아, 챕터 하나·스테이지 하나를 골라 그 스테이지의 기록 카드를 인격별로 만든다.
한 스테이지 = 페이즈 1·2·3 + 운명(스테이지 보스). 각 페이즈에서 사건(event)·우연(chance, 행운/불운/중립 중 하나)을, 운명에서 보스전(fate)을.
desc는 객관 사실, quote는 그 인격의 주관(인격마다 반드시 다르게). 기록 카드엔 flavor 없음.
반드시 아래 JSON만.
{
  "picked": {"chapter":"고른 챕터 이름","stage":"고른 스테이지 이름"},
  "cards": [
    {"persona":"용기","phase":"p1","kind":"event","desc":"객관 사실","quote":"용기 목소리"},
    {"persona":"지혜","phase":"p1","kind":"chance","category":"불운","desc":"...","quote":"..."},
    {"persona":"정의","phase":"fate","kind":"fate","adversary":"보스 한 줄","desc":"...","quote":"..."}
  ]
}
(인격 3 × 페이즈 몇 개를 적절히. 6~9장.)`,

  talisman: `[너의 일 — 3단계 전승 시뮬]
앞 단계들(서사·기록)이 만든 이야기 구조를 소재로, 덱에 들어갈 전승 카드를 만든다. 인물(character)·장비(equipment)·기도(spell) 각각 한 장 이상.
이 이야기다운 카드여야 한다 — 다른 인격이었으면 안 나올 카드. flavor는 Chronicle 톤. 수치·등급은 비운다(방향만).
반드시 아래 JSON만.
{
  "cards": [
    {"kind":"character","name":"카드 이름","belongs_to":"warrior|hunter|priest|neutral","flavor":"톤 한 줄","effect_dir":"효과 방향 (수치 없이)"},
    {"kind":"equipment","name":"...","belongs_to":"...","flavor":"...","effect_dir":"..."},
    {"kind":"spell","name":"...","belongs_to":"...","flavor":"...","effect_dir":"..."}
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
  const text = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");
  return text.replace(/```json|```/g, "").trim();
}

const STEPS = [
  { key: "seed", label: "0 · 씨앗" },
  { key: "narrative", label: "1 · 서사 (이름·구조)" },
  { key: "record", label: "2 · 기록 카드" },
  { key: "talisman", label: "3 · 전승 카드" },
];

export default function ChroniclePipeline() {
  const [seed, setSeed] = useState("");
  const [step, setStep] = useState(0);
  const [out, setOut] = useState({}); // {narrative, record, talisman} — raw text, 편집 가능(검수 관문)
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const run = async (which) => {
    setLoading(true);
    setErr("");
    try {
      let userText = "";
      if (which === "narrative") {
        if (!seed.trim()) { setErr("씨앗을 먼저 넣어주세요."); setLoading(false); return; }
        userText = `[씨앗]\n${seed.trim()}\n\n위 씨앗을 Chronicle 세계로 펼쳐라. JSON만.`;
      } else if (which === "record") {
        if (!out.narrative) { setErr("1단계(서사)를 먼저 생성하세요."); setLoading(false); return; }
        userText = `[1단계 서사 출력 — 이것을 재료로]\n${out.narrative}\n\n이 서사로 한 스테이지의 기록 카드를 인격별로. JSON만.`;
      } else if (which === "talisman") {
        if (!out.record) { setErr("2단계(기록)를 먼저 생성하세요."); setLoading(false); return; }
        userText = `[앞 단계 이야기 구조]\n■ 서사:\n${out.narrative}\n\n■ 기록:\n${out.record}\n\n이 이야기를 소재로 전승 카드. JSON만.`;
      }
      const result = await callClaude(CANON + "\n\n" + INSTR[which], userText);
      setOut((o) => ({ ...o, [which]: result }));
    } catch (e) {
      setErr("호출 실패: " + String(e));
    }
    setLoading(false);
  };

  const cur = STEPS[step];

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", maxWidth: 860, margin: "0 auto", padding: 20, color: "#e8e4dc", background: "#1a1814", minHeight: "100vh" }}>
      <h2 style={{ margin: "0 0 4px", fontSize: 20 }}>크로니클 파이프라인 — 씨앗 → 서사 → 기록 → 전승</h2>
      <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 16 }}>
        한 판이 위에서 아래로 흐릅니다. 각 단계 출력은 <b>편집 가능</b>(검수 관문) — 고친 내용이 다음 단계 입력이 됩니다.
      </div>

      {/* 단계 네비 */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
        {STEPS.map((s, i) => (
          <button key={s.key} onClick={() => setStep(i)}
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

      {/* 씨앗 단계 */}
      {cur.key === "seed" && (
        <div>
          <label style={{ fontSize: 12, color: "#9a948a" }}>씨앗 — 추상 서사 한 덩이 (인물·사건·결말의 결만, 이름 없어도 됨)</label>
          <textarea value={seed} onChange={(e) => setSeed(e.target.value)} rows={7}
            placeholder="예: 바다 건너 황금빛 군대가 분지 끝 마을을 불태웠다. 살아남은 대장장이 하나가 망치를 놓고 칼을 든다..."
            style={taStyle} />
          <button onClick={() => { run("narrative"); setStep(1); }} disabled={loading} style={goBtn}>
            서사 생성 → 1단계로
          </button>
        </div>
      )}

      {/* 생성 단계 (서사·기록·전승 공통 UI) */}
      {cur.key !== "seed" && (
        <div>
          <div style={{ fontSize: 12, color: "#9a948a", marginBottom: 6 }}>
            {cur.key === "narrative" && "1단계 — 씨앗을 받아 인물·이름·오더/챕터/스테이지·인격별 흐름을 펼침"}
            {cur.key === "record" && "2단계 — 서사를 받아 한 스테이지의 기록 카드(desc/quote)를 인격별로"}
            {cur.key === "talisman" && "3단계 — 이야기 구조를 소재로 전승 카드(인물·장비·기도)"}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <button onClick={() => run(cur.key)} disabled={loading} style={goBtn}>
              {loading ? "생성 중…" : (out[cur.key] ? "다시 생성" : "생성")}
            </button>
            {out[cur.key] && step < 3 && (
              <button onClick={() => setStep(step + 1)} style={nextBtn}>검수 완료 → 다음 단계</button>
            )}
          </div>
          <label style={{ fontSize: 11, color: "#7a746a" }}>출력 (JSON) — 직접 고쳐서 다음으로 넘길 수 있습니다</label>
          <textarea value={out[cur.key] || ""} onChange={(e) => setOut((o) => ({ ...o, [cur.key]: e.target.value }))}
            rows={16} placeholder="생성을 누르면 여기에 출력됩니다." style={{ ...taStyle, fontFamily: "ui-monospace, monospace", fontSize: 12 }} />
        </div>
      )}

      {err && <div style={{ color: "#e08a6a", fontSize: 12, marginTop: 8 }}>{err}</div>}
    </div>
  );
}

const taStyle = {
  width: "100%", boxSizing: "border-box", marginTop: 6, padding: 10,
  background: "#12100c", color: "#e8e4dc", border: "1px solid #3a352d",
  borderRadius: 6, fontSize: 13, lineHeight: 1.6, resize: "vertical",
};
const goBtn = {
  marginTop: 10, padding: "8px 16px", background: "#c8a05a", color: "#1a1814",
  border: "none", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer",
};
const nextBtn = {
  marginTop: 0, padding: "8px 16px", background: "transparent", color: "#e8c884",
  border: "1px solid #c8a05a", borderRadius: 6, fontSize: 13, cursor: "pointer",
};
