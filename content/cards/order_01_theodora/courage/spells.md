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
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 공격력 +2. 다음 내 턴 시작 시 해제."

- id: bond_token
  order: 01_theodora
  name: "인연의 증표"
  belongs_to: warrior
  tier: rare
  cost: 2
  target: many
  side: ally_normal
  timing: instant
  duration: battle
  visibility: ignore
  effect: "내 일반 인물 2명을 순서대로 지정한다(대적자 제외). 두 대상에 각각 공격력 +1, 체력 +1. 결속이 걸린 대상에는 다른 결속을 쓸 수 없다(중첩 X). 묶인 둘 중 하나가 사망하면 살아남은 쪽의 버프가 해제된다(동반 사망 없음 — 버프 해제 시 현재 체력 유지, 최대치만 조정)."
  keywords: [결속]

- id: grace_of_gaia
  order: 01_theodora
  name: "대지의 은혜"
  belongs_to: warrior
  tier: rare
  cost: 2
  target: adversary
  side: ally
  timing: instant
  duration: battle
  visibility: ignore
  effect: "내 대적자에게 방어도 +1(이 배틀 영구 누적). 카드 1장을 뽑는다."

- id: ironwall_ward
  order: 01_theodora
  name: "철벽의 가호"
  belongs_to: warrior
  tier: rare
  cost: 3
  target: one
  side: ally_normal
  timing: instant
  duration: turns
  duration_turns: 1
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 임시 방어도 +5. 다음 내 턴 시작 시 해제."
```
