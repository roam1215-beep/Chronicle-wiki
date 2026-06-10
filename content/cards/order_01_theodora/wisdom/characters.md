# 오더 1 (테오도라) — 사냥꾼 인물

> 오더 1 팩 한정. belongs_to: hunter.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: blackwood_direwolf
  order: 01_theodora
  name: "검은 숲 어스름 이리"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 1
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 1코 바닐라 보병 — 직격 제거, 깡 2/1.
  is_protagonist: false

- id: morea_refugee
  order: 01_theodora
  name: "갈 곳 없는 모레아 피난민"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 2
  attack: 3
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 보병 2코×3=6 기준, 공4/생1=합5 (1 낮음, 미검증). 유리몸 선공 보병 (옛 벽 결→딜러 전환). id morea_refugee 유지
  is_protagonist: false

- id: valley_apprentice_ranger
  order: 01_theodora
  name: "산골짜기 견습 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장, 저격]
  # 등장: 〈저격 1〉 (8방향 2칸 적에 피해 1).
  is_protagonist: false

- id: thermia
  order: 01_theodora
  name: "고위정령, 테르미아"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: herald
  tier: legendary
  cost: 3
  attack: 1
  defense: 0
  hp: 3
  shields: 1
  keywords: [등장]
  # 등장: 이번 턴 동안 내가 발동하는 모든 〈저격〉 피해 +1. (직격 갈래 페이오프)
  is_protagonist: false

- id: silent_tree_spirit
  order: 01_theodora
  name: "절규하는 나무 정령"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: rare
  cost: 3
  attack: 1
  defense: 0
  hp: 4
  shields: 0
  keywords: [퇴장]
  # 퇴장: 등장 상태인 내 [처치] 인물들의 효과를 각 1회 발동. (처치 갈래 퇴장 페이오프 — 여우 정령의 등장판과 짝)
  is_protagonist: false

- id: kyrenea_ranger
  order: 01_theodora
  name: "견습 사냥꾼 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: epic
  cost: 3
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장, 저격]
  # 등장: 〈저격 3〉 (8방향 2칸 적에 피해 3).
  is_protagonist: false

- id: blackwood_tracker
  order: 01_theodora
  name: "검은 숲 추적자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: rare
  cost: 3
  attack: 4
  defense: 0
  hp: 1
  shields: 0
  keywords: [처치]
  # 처치: 적을 처치하면 공격력 +1·생명력 +1 (기수 통과 격돌 포함).
  is_protagonist: false

- id: beckoning_blackwood_nymph
  order: 01_theodora
  name: "손짓하는 검은 숲 요정"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: epic
  cost: 4
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장, 저격]
  # 등장: 〈저격 2〉 (8방향 2칸 적에 피해 2).
  is_protagonist: false

- id: valley_elite_ranger
  order: 01_theodora
  name: "산골짜기 정예 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: rare
  cost: 4
  attack: 4
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장, 저격]
  # 등장: 〈저격 2〉 (8방향 2칸 적에 피해 2).
  is_protagonist: false

- id: howling_blackwood_boar
  order: 01_theodora
  name: "울부짖는 검은 숲 멧돼지"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: [처치]
  # 처치: 카드 1장 드로우.
  is_protagonist: false

- id: blackwood_hunter
  order: 01_theodora
  name: "검은 숲 사냥꾼"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: common
  cost: 3
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장, 저격]
  # 등장: 〈저격 1〉 (8방향 2칸 적에 피해 1).
  is_protagonist: false

- id: blackwood_dusk_wolf
  order: 01_theodora
  name: "검은 숲 어스름 늑대"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: epic
  cost: 4
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [처치]
  # 처치: 적을 처치하면 공격력 +1·생명력 +1.
  is_protagonist: false

- id: blackwood_cave_bear
  order: 01_theodora
  name: "잠자는 검은 숲 동굴 곰"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: rare
  cost: 4
  attack: 5
  defense: 0
  hp: 5
  shields: 0
  keywords: []
  # 잠 — 적에게 공격받기 전까지 고정(이동 불가). 적에게 한 번이라도 공격받으면 그 후 이동 가능. (직격 제거)
  is_protagonist: false

- id: lykaion
  order: 01_theodora
  name: "울부짖는 칼리돈의 공포, 리카이온"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: herald
  tier: legendary
  cost: 5
  attack: 4
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장, 처치]
  # 등장: 적 대적자에게 피해 2.
  # 처치: 적 인물을 처치하면 적 대적자에게 피해 2.
  is_protagonist: false

- id: blackwood_dusk_deer
  order: 01_theodora
  name: "검은 숲 어스름 사슴"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: common
  cost: 6
  attack: 8
  defense: 0
  hp: 5
  shields: 0
  keywords: []
  # 6코 바닐라 — 효과 없는 8/5 큰 몸 전차.
  is_protagonist: false

- id: capricious_dark_fae
  order: 01_theodora
  name: "변덕스러운 어둠 요정"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 0
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 저코 보병.
  is_protagonist: false

- id: lapith_tracker
  order: 01_theodora
  name: "추적자, 라피테스"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: herald
  tier: legendary
  cost: 5
  attack: 5
  defense: 0
  hp: 2
  shields: 1
  keywords: [처치]
  # 처치: 적을 처치하면 보호막 1 획득.
  is_protagonist: false

- id: aktaia
  order: 01_theodora
  name: "여왕, 악타이아"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: herald
  tier: legendary
  cost: 6
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 오라(악타이아 필드 생존 중): 내 모든 아군의 등장 효과가 2번 발동. 악타이아 사망 시 해제.
  is_protagonist: false

- id: blackwood_fox
  order: 01_theodora
  name: "검은 숲 여우 정령"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: epic
  cost: 3
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 내 필드의 [처치] 효과를 가진 인물 모두의 처치 효과를 즉시 1회 발동 (처치 콤보 코어). 구 투척 단도 자리 교체
  is_protagonist: false

```
