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
  keywords: [동조, 저격]
  # 오라(테르미아 필드 생존 중): 내 모든 〈저격〉 피해 +1 (상시).
  # 동조(사냥꾼 대적자 저격 특기 발동 직후): 테르미아도 〈저격 1〉 발동 — 오라로 피해 2. 저격 본체 겸 페이오프.
  is_protagonist: false

- id: wailing_tree_spirit
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
  # 퇴장 시: 처치 효과를 가진 내 등장 상태 인물들이 마치 적을 처치한 것처럼 각자 자기 처치 효과를 1회 발동. (나무 정령 본인이 받는 게 아니라 그 인물들이 발동 — 처치 페이오프)
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
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 8방향 2칸 이내의 적 [대기] 인물 1명을 제거한다 (갓 소환된 적 즉살 — 저격 아님).
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

- id: slumbering_cave_bear
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
  keywords: [잠]
  # mechanics 상태 〈잠〉 — 적에게 공격받기 전까지 고정, 받으면 그 후 이동 가능. (직격 제거)
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
  attack: 4
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 〈그림자 칼날〉(적 대적자 피해 3) 카드 2장을 손에 추가. 오라 폐기 — 직격 엔진으로 전환.
  is_protagonist: false

- id: blackwood_fox_spirit
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
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 내 아군 인물이 사망할 때마다 본인 공격력 +1·생명력 +1 (그 인물이 [대기] 상태로 죽어도 카운트). 여우 정령이 등장 상태일 때만 발동. 본인 2/2.
  is_protagonist: false

```
