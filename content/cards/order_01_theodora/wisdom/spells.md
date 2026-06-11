# 오더 1 (테오도라) — 사냥꾼 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: wind_blade
  order: 01_theodora
  name: "바람의 칼날"
  belongs_to: hunter
  tier: common
  cost: 0
  target: one
  side: any
  timing: instant
  duration: once
  effect: "대상 1명에게 피해 1. 적·아군 어느 진영이든, 인물·대적자 전부 지정 가능(내 인물·내 대적자도 포함)."

- id: dawn_guidance
  order: 01_theodora
  name: "새벽의 인도"
  belongs_to: hunter
  tier: epic
  cost: 2
  target: self
  side: ally
  timing: instant
  duration: once
  effect: "내 덱에서 [등장] 효과를 가진 인물 카드 1장을 뽑는다."
  #

- id: wind_blessing
  order: 01_theodora
  name: "바람의 가호"
  belongs_to: hunter
  tier: common
  cost: 2
  target: one
  side: ally_normal
  timing: instant
  duration: battle
  effect: "내 일반 인물 1명을 지정한다(대적자 제외). 그 인물에게 배틀 내내 공격력 +2를 부여한다."
  #

- id: shadow_blade
  order: 01_theodora
  name: "그림자 칼날"
  belongs_to: hunter
  tier: rare
  cost: 2
  target: adversary
  side: enemy
  timing: instant
  duration: once
  effect: "적 대적자에게 피해 3."
  #

- id: whirlwind_blessing
  order: 01_theodora
  name: "돌개바람의 가호"
  belongs_to: hunter
  tier: epic
  cost: 4
  target: self
  side: ally
  timing: instant
  duration: once
  effect: "이번 턴 카드 2장을 드로우한다."
  #

- id: earnest_prayer
  order: 01_theodora
  name: "절실한 기도"
  belongs_to: hunter
  tier: rare
  cost: 5
  target: self
  side: ally
  timing: instant
  duration: once
  effect: "카드 3장을 드로우한다. 그 후 이 게임에서 더 이상 드로우할 수 없다(드로우 봉인). 덱이 비어 있으면 효과 없음."
  # 5코 드로우 폭발 후 영구 봉인 — 끝장 한 방(빈 손 보충)·이후 드로우 끊김. 막판 운영·OTK 직전용.

- id: drawn_bowstring
  order: 01_theodora
  name: "당겨진 활시위"
  belongs_to: hunter
  tier: common
  cost: 2
  target: self
  side: ally
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "이번 턴 사냥꾼 특기 코스트가 0이 되고, 특기로 적에게 입히는 피해가 +1 된다."
  #

- id: westwind_guidance
  order: 01_theodora
  name: "서풍의 인도"
  belongs_to: hunter
  tier: rare
  cost: 2
  target: one
  side: ally
  timing: instant
  duration: turns
  effect: "아군 인물 1명(대적자 포함)을 지정한다. 그 인물은 이번 턴에 한 번 더 이동할 수 있다."
  #

```
