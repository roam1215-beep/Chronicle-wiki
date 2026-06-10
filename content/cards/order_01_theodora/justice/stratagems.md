# 오더 1 (테오도라) — 사제 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: priest.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 화로·불·그림자 모티프 = 사제 자연색(황혼 화로 신앙).
> ※ 수치·키워드 미검증 (모의전 후 확정).

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
