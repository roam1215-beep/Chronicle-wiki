# 오더 1 (테오도라) — 사제 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: priest.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 화로·불·그림자 모티프 = 사제 자연색(황혼 화로 신앙).
> 의식 비용(ritual_cost) 가능 — 사제 둘째 통화 (cards.md ### 의식).
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순 (의지 기준)

- id: purifying_flame
  order: 01_theodora
  name: "정화의 불꽃"
  belongs_to: priest
  tier: epic
  cost: 0
  ritual_cost: 3
  mode: placed
  shape: diag_2
  origin: absolute
  range: board          # 제한 없음 — 판 어디든
  side: both
  visibility: ignore
  timing: instant
  duration: once
  effect: "대각선 2칸 각 칸에 피해 3 (칸 위 모든 말 — 아군·적·양 대적자 무관). 방향 우하/우상 선택."
  # 의식 3 전용(의지 0) — 사제 둘째 통화. 양날 광역. ※미검증

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
  side: both
  visibility: ignore
  timing: instant
  duration: once
  effect: "대각선 3칸 각 칸에 피해 3 (칸 위 모든 말 — 아군·적·양 대적자 무관). 방향 우하/우상 선택."
  # 양날 광역 (최대 9피해, 자해 포함). ※미검증
```
