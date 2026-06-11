# 오더 1 (테오도라) — 사제 기도

> 오더 1 정의 편 한정. belongs_to: priest.

```yaml
# 코스트순

- id: prayer_of_rest
  order: 01_theodora
  name: "안식의 기도"
  belongs_to: priest
  tier: common
  cost: 1
  target: one
  side: any
  timing: instant
  duration: once
  effect: "대상 1명(내 일반 인물·내 대적자·적 인물·적 대적자 모두 가능)의 생명력 +2 회복 (최대치까지)."

- id: shroud_of_rest
  order: 01_theodora
  name: "안식의 장막"
  belongs_to: priest
  tier: common
  cost: 3
  target: one
  side: any
  timing: instant
  duration: once
  effect: "대상 1명(적·내 등장 인물 + 대적자)의 생명력 +2 회복 (최대치까지) · 카드 1장 드로우."
```
