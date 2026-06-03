# 오더 1 (테오도라) — 전사 인물

> 오더 1 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: bridge_highwayman
  order: 01_theodora
  name: "다리 위 노상강도"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 1
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: []
  is_protagonist: false
  # flavor: "통행자와 행상인의 걱정거리로, 다리 위의 악독한 협상가인 그들에게 타협은 없다"

- id: bridge_bandit_chief
  order: 01_theodora
  name: "다리 위 도적단 두목"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 4
  attack: 4
  defense: 4
  hp: 1
  shields: 0
  variants: null
  keywords: [강림]
  is_protagonist: false
  # 강림: 경계 턴마다 임시 방어도 +2 (그 턴만)
  # flavor: "다리 위를 지나가려면 그와 불편한 거래를 해야 한다, 당신이 원치 않더라도"

- id: laconia_aspirant
  order: 01_theodora
  name: "라키아 풋내기 용사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: [등장]
  is_protagonist: false
  # 등장: 라키아 풋내기 신병(토큰) 1기를 자기 정면(적 방향 1칸)에 소환. 막혀 있으면 불발.
  # flavor: "라키아의 희망, 미래, 골칫거리기도 한 친구들입니다"

- id: morea_volunteer
  order: 01_theodora
  name: "산골짜기 지원병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: [등장]
  is_protagonist: false
  # 등장: 공격력 +1 또는 방어도 +1 중 택1, 소환 후 굳힘(영구). 2/0/1 또는 1/1/1.
  # flavor: "군인이 되고 싶은 모레아 젊은이들은 오늘도 산을 오릅니다"

- id: dorian_mountain_soldier
  order: 01_theodora
  name: "산골짜기 산악 보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 2
  attack: 3
  defense: 3
  hp: 1
  shields: 0
  variants: null
  keywords: []
  is_protagonist: false
  # flavor: "모레아 산맥을 지키는 역전의 용사"

- id: morea_valley_scout
  order: 01_theodora
  name: "산골짜기 정찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: archer
  tier: epic
  cost: 3
  attack: 3
  defense: 1
  hp: 1
  shields: 0
  variants: null
  keywords: [돌격]
  is_protagonist: false
  # flavor: "모레아 산맥의 눈이자 귀이며 부지런한 손발이기도 하다"

- id: morea_valley_guide
  order: 01_theodora
  name: "산골짜기 길잡이"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: rider
  tier: common
  cost: 3
  attack: 4
  defense: 0
  hp: 5
  shields: 0
  variants: null
  keywords: []
  is_protagonist: false
  # flavor: "모레아 산에 그가 모르는 길은 없다"

- id: laconia_hoplite
  order: 01_theodora
  name: "라키아 중장보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 4
  attack: 3
  defense: 6
  hp: 2
  shields: 0
  variants: null
  keywords: []
  is_protagonist: false
  # flavor: "단단하기로 유명한 라키아 중장 보병, 자존심만큼이나 방패도 단단하다"

- id: laconia_recruiter
  order: 01_theodora
  name: "라키아 모병관"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: herald
  tier: epic
  cost: 4
  attack: 1
  defense: 1
  hp: 2
  shields: 0
  variants: null
  keywords: [모병]
  is_protagonist: false
  # 모병: 내 턴 시작 시 적 방향 정면 1칸에 laconia_raw_recruit 토큰 자동 소환 (빈 칸일 때만)
  # flavor: "라키아 지방의 신병을 모집하는 모병관, 군공을 원하는 라키아인은 그를 찾아가는 게 좋다"

- id: laconia_elite_cavalry
  order: 01_theodora
  name: "라키아 정예 기병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: rider
  tier: epic
  cost: 6
  attack: 7
  defense: 0
  hp: 4
  shields: 0
  variants: null
  keywords: [돌격]
  is_protagonist: false

- id: lysandros_the_bulwark
  order: 01_theodora
  name: "철벽의 리산드로스"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: legendary
  cost: 7
  attack: 5
  defense: 8
  hp: 2
  shields: 0
  variants: null
  keywords: [보강]
  is_protagonist: false
  # 보강: 내 턴 시작 시 방어도 +2 (시작값 8 상한, 방어도 0이면 멈춤)
  # flavor: "라키아의 이름 높은 영웅, 그의 방패를 뚫은 자는 아직 아무도 없다"
```
