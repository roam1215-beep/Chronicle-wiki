# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 달빛·밤 모티프 = 사냥꾼 시간대색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: entangling_vines
  order: 01_theodora
  name: "휘감는 덩굴"
  belongs_to: hunter
  tier: common
  cost: 1
  mode: placed
  shape: "single"
  side: enemy_only
  visibility: ignore
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "지정한 단일 칸의 적 말을 1턴 봉쇄한다 — 그 적은 다음 자기 턴에 이동·격돌 불가([대기] 상태). 1턴 뒤 해제. 칸 귀속."
  # 1코 봉쇄(1턴=점수2) — 적 묶어 사격 자리 확보 / 돌파 차단. 어그로·사수 양쪽 유틸
  # 봉쇄는 예언자 직업색이나 효과 범주(점수표)라 차용. 사냥꾼 첫 봉쇄 책략

- id: moonlight_guidance
  order: 01_theodora
  name: "달빛의 인도"
  belongs_to: hunter
  tier: rare
  cost: 3
  mode: placed
  shape: "col_2"
  side: ally_only
  visibility: ignore
  timing: instant
  duration: battle
  effect: "지정한 세로 2칸의 내 일반 인물에게 공격력 +2를 부여한다(그 배틀 내내, 시간대 무관). 대적자 제외. 칸 귀속 — 말이 칸을 벗어나면 부여 해소. 우리편만."
  # 〈인도〉 제거·재설계 (06-07) — 시간대 가변 폐기, 배틀 지속 단순 공+2. cost 4→3, shape 2x2→세로2(col_2). 대적자 해당 없음

- id: landslide
  order: 01_theodora
  name: "산사태"
  belongs_to: hunter
  tier: epic
  cost: 6
  mode: placed
  shape: "row_3"
  side: both
  visibility: ignore
  timing: instant
  duration: once
  effect: "지정한 가로 3칸의 모든 말에 즉시 3 피해(대적자·내 인물·적 인물 전부 — 무차별)."
  # 6코 즉발 광역 — 3칸×3딜=9점, 무차별(both·내 말도 맞음) 디메리트로 상쇄. 사냥꾼 첫 광역 딜 책략
  # 산사태 = 자연재해 무차별. 적 진형 즉시 붕괴(내 말도 맞으니 미리 자리 비워야 — 양날)
```
