# 오더 1 (테오도라) — 중립 인물 / 유저 공용

> 오더 1 팩 한정. belongs_to: neutral · neutral_card: player.
> 유저 드래프트 풀(encounter) — 조우 보상으로 유저가 뽑는 중립 카드. 3 인격(용기·지혜·정의) 유저 측 공유.
> 적 풀(neutral_card: enemy)보다 스펙 약간 강함 — 갈래 = characters_enemy.md.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: valley_quartermaster_scout
  order: 01_theodora
  name: "산골짜기 보급대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: rare
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 내 대적자(테오도라)가 장착한 장비의 사용횟수(uses) +1.
  #   장비 미장착이면 효과 없음 (장비를 깐 상태에서 이 카드가 죽어야 적용). uses 0으로 장비 소멸한 상태에도 효과 없음.
  is_protagonist: false

- id: morea_guard
  order: 01_theodora
  name: "모레아 위병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 2
  shields: 0
  keywords: [고정]
  # 고정: 배치 자리에 박혀 사망까지 이동 불가.
  is_protagonist: false

- id: morea_rookie_militia
  order: 01_theodora
  name: "모레아 풋내기 자경대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: common
  cost: 1
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  is_protagonist: false

- id: morea_shieldbearer
  order: 01_theodora
  name: "모레아 방패병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: common
  cost: 2
  attack: 2
  defense: 0
  hp: 3
  shields: 0
  keywords: []
  is_protagonist: false

- id: valley_tomb_raider
  order: 01_theodora
  name: "산골짜기 도굴꾼"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: cavalry
  tier: rare
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [퇴장]
  # 퇴장: 카드 1장 드로우
  is_protagonist: false

- id: morea_mountaineer
  order: 01_theodora
  name: "모레아 산악 보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: common
  cost: 3
  attack: 4
  defense: 0
  hp: 4
  shields: 0
  keywords: []
  is_protagonist: false

- id: valley_guide
  order: 01_theodora
  name: "산골짜기 길잡이"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: cavalry
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: [신속]
  is_protagonist: false

- id: valley_hammer_warrior
  order: 01_theodora
  name: "산골짜기 망치 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: cavalry
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [퇴장]
  # 퇴장: 내 대적자(테오도라)에게 방어도 +2 (이 배틀 지속)
  is_protagonist: false

- id: valley_axe_warrior
  order: 01_theodora
  name: "산골짜기 도끼 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: chariot
  tier: rare
  cost: 4
  attack: 4
  defense: 0
  hp: 4
  shields: 0
  keywords: [등장]
  # 등장: 카드 1장 드로우
  is_protagonist: false

- id: morea_heavy_infantry
  order: 01_theodora
  name: "모레아 산악 중보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: player
  type: soldier
  tier: common
  cost: 6
  attack: 7
  defense: 0
  hp: 6
  shields: 0
  keywords: []
  is_protagonist: false
```
