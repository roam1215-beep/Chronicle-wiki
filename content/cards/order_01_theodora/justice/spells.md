# 오더 1 (테오도라) — 사제 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: priest.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: prayer_of_rest
  order: 01_theodora
  name: "안식의 기도"
  belongs_to: priest
  tier: common
  cost: 0
  target: one
  side: ally_normal
  timing: instant
  duration: once
  effect: "아군 일반 1명 체력 +2 회복 (최대치까지)."
  # 0코 회복2. ※미검증

- id: burning_ash
  order: 01_theodora
  name: "불타는 재"
  belongs_to: priest
  tier: rare
  cost: 2
  target: one
  side: enemy
  timing: instant
  duration: once
  effect: "적 대상(대적자 포함)에게 피해 1. 경계 시간대에는 피해 3."
  # 피해1(1점) / 경계 시간대 3(3점) — 판 시간대 기준(대상 태생 무관, 낮·밤=1). ※미검증

- id: purifying_flame
  order: 01_theodora
  name: "정화의 불꽃"
  belongs_to: priest
  tier: rare
  cost: 3
  target: one
  side: enemy
  timing: instant
  duration: once
  effect: "적 1명에게 피해 2. 이 피해로 처치 시 의식 +1."
  # 피해2(2점) + 처치 시 의식+1 ※의식 점수 미정. ※미검증

- id: shroud_of_rest
  order: 01_theodora
  name: "안식의 장막"
  belongs_to: priest
  tier: common
  cost: 3
  target: one
  side: ally
  timing: instant
  duration: once
  effect: "아군 대상(대적자 포함) 체력 +2 (최대치까지) · 카드 1장 드로우."
  # 회복2(2점)+드로우1 / ※드로우 효과점수 미정(표 공백)

- id: lamp_of_will
  order: 01_theodora
  name: "의지의 등불"
  belongs_to: priest
  tier: rare
  cost: 4
  target: one
  side: ally_normal
  timing: instant
  duration: once
  effect: "아군 일반 대상에게 보호막 +1 · 의식 스택 +2."
  # 보호막(2점)+의식+2(점수 미정, 키레네아 선례) ※미검증

- id: goddess_guidance
  order: 01_theodora
  name: "화로의 여신의 인도"
  belongs_to: priest
  tier: epic
  cost: 7
  target: one
  side: ally_normal
  timing: instant
  duration: once
  effect: "아군 일반 1기에게 돌격·돌풍·보호막 부여."
  # 돌격·돌풍 키워드 + 보호막 1 부여 (7코 에픽 버프). ※미검증
```
