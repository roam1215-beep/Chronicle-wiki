# 오더 1 (테오도라) — 전사 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: courage_prayer
  order: 01_theodora
  name: "용기의 기도"
  belongs_to: warrior
  tier: common
  cost: 1
  target: one
  side: ally_normal
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 공격력 +2. 다음 내 턴 시작 시 해제."

- id: earth_shield
  order: 01_theodora
  name: "대지의 방패"
  belongs_to: warrior
  tier: rare
  cost: 3
  target: one
  side: ally_normal
  timing: instant
  duration: battle
  effect: "아군 일반 인물 1명(대적자 제외)에게 보호막 1을 부여한다. [대기] 상태인 아군에게도 부여 가능."
  keywords: []

- id: grace_of_gaia
  order: 01_theodora
  name: "대지의 은혜"
  belongs_to: warrior
  tier: rare
  cost: 3
  target: adversary
  side: ally
  timing: instant
  duration: battle
  effect: "내 대적자에게 방어도 +1(이 배틀 영구 누적). 카드 1장을 뽑는다."

- id: ironwall_ward
  order: 01_theodora
  name: "철벽의 가호"
  belongs_to: warrior
  tier: rare
  cost: 2
  target: one
  side: ally_normal
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 생명력 +3 (현재 체력에 가산, 최대 체력 초과 허용). 다음 내 턴 시작 시 최대 체력으로 복귀."
```
