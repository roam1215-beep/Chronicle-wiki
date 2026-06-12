# 오더 1 (테오도라) — 전사 기도

> 오더 1 용기 편 한정. belongs_to: warrior.

```yaml
# 코스트순

- id: courage_prayer
  order: 01_theodora
  name: "용기의 기도"
  belongs_to: warrior
  tier: common
  cost: 1
  target: one
  side: ally
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "내 말 1기를 지정한다(대적자 포함). 그 턴 동안 공격력 +2. 다음 내 턴 시작 시 해제."

- id: earth_shield
  order: 01_theodora
  name: "대지의 방패"
  belongs_to: warrior
  tier: common
  cost: 3
  target: one
  side: ally
  timing: instant
  duration: battle
  effect: "내 말 1명(대적자 포함)에게 보호막 1을 부여한다. ([등장] 상태인 대상만 가능, [대기]상태로 배치된 대상에게는 사용 불가)"
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
  effect: "내 대적자에게 방어도 +1(이 배틀 영구 누적). 카드 1장을 드로우한다."

- id: ironwall_ward
  order: 01_theodora
  name: "철벽의 가호"
  belongs_to: warrior
  tier: common
  cost: 2
  target: one
  side: ally
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "내 말 1기를 지정한다(대적자 포함). 그 턴 동안 생명력 +3 (현재 체력에 가산, 최대 체력 초과 허용). 다음 내 턴 시작 시 최대 체력으로 복귀."

- id: gaia_blessing
  order: 01_theodora
  name: "대지의 여신의 축복"
  belongs_to: warrior
  tier: legendary
  cost: 6
  target: adversary
  side: ally
  timing: instant
  duration: battle
  effect: "이번 배틀 동안 내 대적자는 8방향으로 2칸씩 이동할 수 있다(평소 1칸 → 2칸). 또한 발동 시점에 내 대적자가 보유한 방어도를 전부 공격력으로 전환한다 — 방어도가 0이 되고 그 수치만큼 공격력을 영구 획득(이번 배틀 지속). 전환 후 새로 쌓는 방어도는 정상 누적된다."
  keywords: []
```
