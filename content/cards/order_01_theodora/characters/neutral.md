# 오더 1 (테오도라) — 중립 인물

> 오더 1 팩 한정. belongs_to: neutral.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: beckoning_thicket_sprite
  order: 01_theodora
  name: "손짓하는 덤불 요정"
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
  keywords: [강림]
  is_protagonist: false
  # 강림: 밤 턴마다 임시 공격력 +3 (그 턴만)
  # flavor: "밤의 주민들을 유혹하는 반딧불이, 홀린 듯이 덤불에 발걸음을 옮기게 된다"

- id: calydon_rushing_calamity
  order: 01_theodora
  name: "칼리돈의 쇄도하는 재앙"
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
  keywords: [신성]
  is_protagonist: false
  # 신성: 대상 지정 기도(targeting: single)의 효과를 받지 않음(적·아군 모두). 범위 기도(area)에는 적중.
  # flavor: "칼리돈 숲의 주인이자 골칫거리"

- id: frontier_gatekeeper
  order: 01_theodora
  name: "산골짜기 위병"
  
  # 2축 (race × birth)
  race: human
  birth: 황혼
  
  # 카테고리
  category: normal
  
  # 직업 X / 덱 소속
  class: null
  belongs_to: neutral
  
  # 타입 (체스말 결)
  type: soldier
  
  # 등급
  tier: common
  
  # 의지 비용
  cost: 1
  
  # 능력치 (3패러미터)
  attack: 1
  defense: 1
  hp: 1
  shields: 0
  
  
  # 키워드 (깡통)
  keywords: []
  
  # 메타
  is_protagonist: false

- id: morea_valley_guard
  order: 01_theodora
  name: "산골짜기 수비대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  type: archer
  tier: common
  cost: 2
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  is_protagonist: false
  # flavor: "모레아 산골짜기를 지키는 병사들로 평소에는 사냥꾼이나 다름 없다"

- id: laconia_raw_recruit
  order: 01_theodora
  name: "라키아 풋내기 신병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  type: soldier
  tier: common
  cost: 0
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  is_protagonist: false
  # token: 모병·등장으로 생성. 덱·패·묘지 안 거침. 사망 시 소멸.
  # flavor: "라키아인 신병, 지금은 풋내기일 뿐이지만 미래는 알 수 없다"
```
