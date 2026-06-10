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
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 적 대적자에게 피해 1.
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
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 기수 통과(적 넘기) 1회마다 공격력 +1 (영구 누적).
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
  cost: 0
  attack: 1
  defense: 0
  hp: 1
  shields: 1
  keywords: [신성]
  # 여신이 총애하는 고위 정령, 여우의 형태.
  is_protagonist: false

- id: silent_tree_spirit
  order: 01_theodora
  name: "침묵하는 나무 정령"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 3
  attack: 2
  defense: 0
  hp: 6
  shields: 0
  keywords: [고정]
  # 고정: 배치 자리에 박혀 사망까지 이동 불가. 보병 3코×3=9 + 고정(-3 디메리트 보상 여지) → 합12까지, 실제 합10(공2/생8)
  # 못 움직이는 단단한 벽 — 길목·전선 고정용 앵커. 기동덱(사냥꾼) 안의 드문 정착 카드
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
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장, 퇴장]
  # 등장: 8방향 2칸 이내 적에게 피해 1.
  # 퇴장: 키레네아가 사망하며 그 자리 기준 8방향 2칸 이내 적에게 피해 1.
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
  keywords: [등장]
  # 등장: 8방향 2칸 이내 적에게 피해 2.
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
  keywords: []
  # 기수 통과(적 넘기) 1회마다 공격력 +1·생명력 +1 (영구 누적).
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
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 등장한 턴에 한해 이동력 +1칸 (전차 — 추가 칸에서 격돌 가능).
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
  keywords: [등장]
  # 등장: 8방향 2칸 이내 적에게 피해 1.
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
  name: "검은 숲 동굴 곰"
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
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 적 대적자에게 피해 2.
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
  tier: epic
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
  cost: 4
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 오라(악타이아 필드 생존 중): 내 모든 아군의 등장 효과가 2번 발동. 악타이아 사망 시 해제.
  is_protagonist: false

- id: blackwood_fox
  order: 01_theodora
  name: "검은 숲 여우"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 3
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 내 필드의 [처치] 효과를 가진 인물 모두의 처치 효과를 즉시 1회 발동 (처치 콤보 코어). 구 투척 단도 자리 교체
  is_protagonist: false

```
