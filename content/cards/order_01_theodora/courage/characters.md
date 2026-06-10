# 오더 1 (테오도라) — 전사 인물

> 오더 1 팩 한정. belongs_to: warrior.

```yaml
- id: kyrenea_warrior
  order: 01_theodora
  name: "전사 키레네아"
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
  hp: 4
  shields: 0
  keywords: [동조]
  # 동조(내 대적자 특기 발동 직후): 본인 생명력 1 회복 (최대치까지)
  is_protagonist: false

- id: valley_quartermaster_scout
  order: 01_theodora
  name: "산골짜기 보급대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: cavalry
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 내 대적자(테오도라)가 장착한 장비의 사용횟수(uses) +1.
  #   장비 미장착이면 효과 없음 (장비를 깐 상태에서 이 카드가 죽어야 적용). uses 0으로 장비 소멸한 상태에도 효과 없음.
  #   기수 1코 침투병 — 죽으며 보급을 마지막으로 채워 무기 어그로 라인 지속. 조건부라 스탯 1/1 유지.
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
  keywords: [고정]
  # 고정: 배치 자리에 박혀 사망까지 이동 불가.
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
  attack: 2
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
  attack: 4
  defense: 0
  hp: 4
  shields: 0
  keywords: []
  is_protagonist: false

- id: morea_apprentice_smith
  order: 01_theodora
  name: "모레아산 견습 대장장이"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 내 대적자(테오도라)에게 방어도 +1 (이 배틀 지속). 죽으며 벼린 한 겹.
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
  tier: epic
  cost: 3
  attack: 3
  defense: 0
  hp: 3
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
  type: chariot
  tier: epic
  cost: 4
  attack: 3
  defense: 0
  hp: 4
  shields: 0
  keywords: [동조]
  # 동조(내 대적자 특기 발동 직후): 본인 공격력 +1 (특기 발동 시마다 누적, 최대 +3)
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
  hp: 4
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
  type: chariot
  tier: legendary
  cost: 5
  attack: 2
  defense: 0
  hp: 5
  shields: 1
  keywords: [등장]
  # 등장: 내 대적자(테오도라) 방어도만큼 추가 공격력 획득 (상한 없음). shields 1 = 첫 공격 무효.
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
  cost: 6
  attack: 2
  defense: 0
  hp: 6
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
  tier: common
  cost: 3
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 내 대적자(테오도라)에게 토큰 장비 "모레아 보급장비"(공격력 +1, uses 2)를 장착한다.
  #   대적자가 이미 장비를 장착 중이면 교체(기존 장비는 묘지 — 1대적자 1장비 결).
  #   죽으며 자기 장비를 넘겨줌 — 빈 손이면 공짜 무장 이득 / 강한 무기 위에 떨어지면 강제 교체 손해 = 죽는 타이밍이 양날.
  #   모레아 보급장비 = 토큰 (카드 풀 밖 생성물, 덱·패·묘지 안 거침, 소멸 시 덱 복귀 X).
  is_protagonist: false

- id: valley_guide
  order: 01_theodora
  name: "산골짜기 길잡이"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: cavalry
  tier: common
  cost: 3
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 깡통 (척후 = 통과 침투가 본체인 귀한 기물 — 바닐라보다 스탯 낮음이 정상)
  is_protagonist: false

- id: morea_smith
  order: 01_theodora
  name: "모레아산 대장장이"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 5
  attack: 4
  defense: 0
  hp: 3
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 장착 중인 내 대적자(테오도라)의 무기 공격력 +2 (무기 없으면 효과 없음).
  is_protagonist: false

- id: morea_drill_instructor
  order: 01_theodora
  name: "모레아 훈련 교관"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: chariot
  tier: common
  cost: 4
  attack: 5
  defense: 0
  hp: 4
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
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [퇴장]
  # 퇴장: 카드 1장 드로우
  is_protagonist: false

- id: aganeia
  order: 01_theodora
  name: "달인, 아가네이아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: chariot
  tier: legendary
  cost: 5
  attack: 2
  defense: 0
  hp: 6
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 덱에서 장비 카드 1장을 무작위로 패에 넣고, 그 장비가 부여하는 공격력 +3.
  is_protagonist: false

- id: morea_heavy_infantry
  order: 01_theodora
  name: "모레아 산악 중보병"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 6
  attack: 7
  defense: 0
  hp: 6
  shields: 0
  keywords: []
  # 바닐라 — 6코 벽
  is_protagonist: false

- id: morea_rookie_militia
  order: 01_theodora
  name: "모레아 풋내기 자경대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 1
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 바닐라 — 1코 깡통 (보병 1코 ×3=3, 공2/생1=합3)
  is_protagonist: false

- id: valley_axe_warrior
  order: 01_theodora
  name: "산골짜기 도끼 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 4
  attack: 4
  defense: 0
  hp: 4
  shields: 0
  keywords: [퇴장]
  # 퇴장(사망 시): 장비 카드 1장 드로우
  is_protagonist: false
```
