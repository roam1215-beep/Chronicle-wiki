# 오더 1 (테오도라) — 전사 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 대지 모티프 번 = 전사 자연색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: earth_tremor
  order: 01_theodora
  name: "땅울림"
  belongs_to: warrior
  tier: rare
  cost: 3
  mode: placed
  shape: col_2
  side: both
  visibility: ignore
  timing: instant
  duration: once
  effect: "지정한 세로 2칸(위치·방향 = 시전자 지정)의 모든 말에 각각 피해 2. 아군·적·대적자 무관 — 범위 안이면 전부 맞음(내 말도 맞는 양날). 책략이라 시야 무관(안개 속도 지정 가능)."
  triggers: []

- id: earth_fissure
  order: 01_theodora
  name: "대지의 균열"
  belongs_to: warrior
  tier: epic
  cost: 5
  mode: placed
  shape: col_3
  side: both
  visibility: ignore
  timing: instant
  duration: once
  effect: "지정한 세로 3칸(위치·방향 = 시전자 지정)에 총 6 피해. 시전자가 찍은 방향의 맨 앞 말부터 채우고, 그 말이 죽으면 잔여 피해가 다음 말로 이월된다(관통). 아군·적·대적자 무관 — 범위 안이면 전부 대상. 책략이라 시야 무관."
  triggers: []

- id: defensive_stance
  order: 01_theodora
  name: "방어 태세"
  belongs_to: warrior
  tier: epic
  cost: 4
  mode: placed
  shape: 2x2
  side: ally_only
  visibility: ignore
  timing: instant
  duration: battle
  effect: "지정한 2x2 범위 안의 내 일반 인물 모두에게 방어도 +1(이 배틀 지속). 발동 순간 범위 안 대상에 1회 부여 — 부여된 방어도는 말에 귀속(이동해도 유지). 대적자 제외. 책략이라 시야 무관."
  triggers: []
```
