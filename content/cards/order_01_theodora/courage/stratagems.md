# 오더 1 (테오도라) — 전사 책략

> 오더 1 용기 편 한정. belongs_to: warrior.

```yaml
# 코스트순

- id: aftershock
  order: 01_theodora
  name: "여진"
  belongs_to: warrior
  tier: rare
  cost: 4
  mode: placed
  shape: sq_2
  side: both
  timing: instant
  duration: turns
  duration_turns: 2
  effect: "지정한 2×2칸에 장(場)을 설치한다. 설치한 턴부터 2턴 동안, 매 턴 그 칸 안의 모든 말이 피해 1 (아군·적·대적자 무관 — 범위 안이면 전부)."
  triggers: []

- id: earthquake
  order: 01_theodora
  name: "지진"
  belongs_to: warrior
  tier: epic
  cost: 6
  mode: placed
  shape: field_full
  side: both
  timing: instant
  duration: once
  effect: "필드 전체의 모든 칸에 있는 모든 말이 피해 2 (아군·적·대적자 무관)."
  triggers: []

- id: rockfall
  order: 01_theodora
  name: "낙석"
  belongs_to: warrior
  tier: epic
  cost: 4
  mode: placed
  shape: col_2
  side: both
  timing: instant
  duration: once
  effect: "지정한 세로 2칸의 모든 말에 각각 피해 2 (아군·적·대적자 무관 — 범위 안이면 전부)."
  triggers: []
```
