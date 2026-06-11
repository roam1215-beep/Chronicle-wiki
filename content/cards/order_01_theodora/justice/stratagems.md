# 오더 1 (테오도라) — 사제 책략

> 오더 1 정의 편 한정. belongs_to: priest.

```yaml
# 코스트순 (의지 기준)

- id: spreading_blaze
  order: 01_theodora
  name: "번지는 불길"
  belongs_to: priest
  tier: rare
  cost: 4
  mode: placed
  shape: diag_3
  origin: absolute
  range: board          # 제한 없음 — 판 어디든
  side: enemy_only
  timing: instant
  duration: once
  effect: "대각선 3칸 — 적 칸에 피해 2. 방향 우하/우상 선택."
  # 적 칸만 피해2 (양날 X). ※미검증
```
