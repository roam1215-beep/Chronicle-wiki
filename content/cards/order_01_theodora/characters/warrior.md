# 오더 1 (테오도라) — 전사 인물

> 오더 1 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: kyrenea_apprentice
  order: 01_theodora
  name: "견습 대장장이 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: epic
  cost: 3
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 내 대적자(테오도라) 공격력 +1 (이 배틀)
  is_protagonist: false

- id: valley_apprentice_ranger
  order: 01_theodora
  name: "산골짜기 견습 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: scout
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 깡통 (척후 신참 — 1코 침투병)
  is_protagonist: false

- id: morea_guard
  order: 01_theodora
  name: "모레아 위병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 2
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
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 2
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: []
  is_protagonist: false

- id: morea_mountaineer
  order: 01_theodora
  name: "모레아 산악 보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 3
  attack: 3
  defense: 0
  hp: 6
  shields: 0
  keywords: []
  is_protagonist: false

- id: reckless_valley_rider
  order: 01_theodora
  name: "무모한 산골짜기 기수"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: rider
  tier: rare
  cost: 2
  attack: 3
  defense: 0
  hp: 1
  shields: 0
  keywords: [돌격]
  is_protagonist: false

- id: valley_hammer_warrior
  order: 01_theodora
  name: "산골짜기 망치 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 4
  shields: 0
  keywords: [퇴장]
  # 퇴장: 내 대적자(테오도라)에게 방어도 +2 (이 배틀 지속)
  is_protagonist: false

- id: morea_vigilante_captain
  order: 01_theodora
  name: "모레아 자경단 대장"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: epic
  cost: 4
  attack: 2
  defense: 0
  hp: 5
  shields: 0
  keywords: [등장]
  # 등장: 내 대적자(테오도라) 방어도만큼 추가 공격력 획득 (상한 없음)
  is_protagonist: false

- id: master_bronteia
  order: 01_theodora
  name: "거장, 브론테이아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: herald
  tier: legendary
  cost: 5
  attack: 5
  defense: 0
  hp: 5
  shields: 0
  keywords: [동조]
  # 동조: 내 대적자(테오도라) 특기 발동 시마다 방어도 +1
  is_protagonist: false

- id: steropea
  order: 01_theodora
  name: "황소, 스테로페아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: rider
  tier: legendary
  cost: 7
  attack: 7
  defense: 0
  hp: 3
  shields: 1
  keywords: [돌격]
  # shields 1 = 보호막 1회 (첫 공격 무효)
  is_protagonist: false

- id: antilochos
  order: 01_theodora
  name: "수호자 안틸로크"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: herald
  tier: legendary
  cost: 7
  attack: 3
  defense: 0
  hp: 9
  shields: 0
  keywords: []
  # 수호(패시브): 이 카드 위치와 무관하게, 내 대적자가 격돌로 입을 피해를 대신 받는다 —
  #   내 대적자의 능동 격돌(선공), 적의 수동 격돌·돌파 후 관통 전부 포함.
  #   사격·기도·책략 피해는 대납하지 않는다.
  #   대납 피해가 이 카드 hp를 초과해도 초과분은 대적자에게 이월되지 않고, 이 카드가 그 타격을 받고 사망한다.
  is_protagonist: false

- id: rakia_quartermaster
  order: 01_theodora
  name: "라키아군 병참장교"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 3
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장]
  # 등장: 내 대적자(테오도라)에게 토큰 장비 "모레아 보급장비"(공격력 +1, uses 2)를 장착한다.
  #   대적자가 이미 장비를 장착 중이면 교체(기존 장비는 묘지 — 1대적자 1장비 결).
  #   빈 손이면 공짜 무장 이득 / 강한 무기 위에 끼면 강제 교체 손해 = 상황 보고 내는 양날.
  #   모레아 보급장비 = 토큰 (카드 풀 밖 생성물, 덱·패·묘지 안 거침, 소멸 시 덱 복귀 X).
  is_protagonist: false

- id: valley_ranger
  order: 01_theodora
  name: "산골짜기 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: scout
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 깡통 (척후 = 통과 침투가 본체인 귀한 기물 — 바닐라보다 스탯 낮음이 정상)
  is_protagonist: false

- id: morea_elite_cavalry
  order: 01_theodora
  name: "모레아 자경단 정예 기병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: rider
  tier: rare
  cost: 5
  attack: 4
  defense: 0
  hp: 2
  shields: 0
  keywords: [돌격]
  is_protagonist: false

- id: rakia_shield_warrior
  order: 01_theodora
  name: "라키아 방패 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 4
  attack: 4
  defense: 0
  hp: 7
  shields: 0
  keywords: []
  is_protagonist: false
```
