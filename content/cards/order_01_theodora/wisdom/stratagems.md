# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 지혜 편 한정. belongs_to: hunter.

```yaml
# 코스트순

- id: ambush
  order: 01_theodora
  name: "암습"
  belongs_to: hunter
  tier: rare
  cost: 2
  mode: placed
  shape: "row_2"
  side: enemy_only
  timing: instant
  duration: once
  effect: "지정한 가로 2칸의 적 말에 각각 피해 1. [대기] 상태인 적에게는 피해 2. 적 대적자도 지정 가능. 칸 귀속."
```
