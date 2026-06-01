# 기본 — 중립 인물 / 미궁 (labyrinth)

> 기본 카드 풀 (확장팩 무관). belongs_to: neutral, faction: labyrinth.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.
> ※ 전사 데모 덱 시안 — 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순 2장

- id: beckoning_thicket_sprite
  name: "손짓하는 덤불 요정"
  faction: labyrinth
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: neutral
  type: soldier
  tier: rare
  cost: 5
  attack: 3
  defense: 6
  hp: 1
  shields: 0
  variants: null
  keywords: [강림]
  is_protagonist: false
  # 강림: 밤 턴마다 임시 공격력 +3 (그 턴만)
  # flavor: "밤의 주민들을 유혹하는 반딧불이, 홀린 듯이 덤불에 발걸음을 옮기게 된다"

- id: calydon_rushing_calamity
  name: "칼리돈의 쇄도하는 재앙"
  faction: labyrinth
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: neutral
  type: herald
  tier: legendary
  cost: 6
  attack: 10
  defense: 2
  hp: 3
  shields: 0
  variants: null
  keywords: [신성]
  is_protagonist: false
  # 신성: 대상 지정 기도(targeting: single)의 효과를 받지 않음(적·아군 모두). 범위 기도(area)에는 적중.
  # flavor: "칼리돈의 거대한 멧돼지, 미궁의 끔찍한 피조물 중 하나이다"
```
