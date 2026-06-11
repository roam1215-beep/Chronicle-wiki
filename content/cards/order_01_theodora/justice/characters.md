# 오더 1 (테오도라) — 사제 인물

> 오더 1 정의 편 한정. belongs_to: priest.

```yaml
# 코스트순

- id: morea_hearth_apprentice
  order: 01_theodora
  name: "모레아 견습 화로지기"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: rare
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장]
  # 등장: 상하좌우·대각 2칸 이내 등장 상태의 인물 또는 대적자 1명 생명력 +1 회복 (등장한 턴만, 1회).
  is_protagonist: false

- id: morea_wounded_warrior
  order: 01_theodora
  name: "상처입은 모레아 전사"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 2
  attack: 3
  defense: 0
  hp: 1
  max_hp: 3
  shields: 0
  keywords: []
  # 배치 시 체력 2 깎인 채 등장 (현재 1 / 최대 3).
  is_protagonist: false

- id: zealous_acolyte
  order: 01_theodora
  name: "열성적인 견습 사제"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: rare
  cost: 2
  attack: 1
  defense: 0
  hp: 2
  shields: 0
  keywords: [패시브]
  # 〈패시브〉: 내 등장 상태의 아군 인물이 회복될 때마다 이 카드 공격력 +1.
  is_protagonist: false

- id: hearth_idol
  order: 01_theodora
  name: "화로의 여신상"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 3
  attack: 2
  defense: 0
  hp: 5
  shields: 0
  keywords: [고정]
  # 〈고정〉
  is_protagonist: false

- id: kyrenea_priestess
  order: 01_theodora
  name: "사제 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: chariot
  tier: epic
  cost: 3
  attack: 2
  defense: 0
  hp: 3
  shields: 0
  keywords: [패시브]
  # 〈패시브〉: 내 기도 카드의 의지 비용 -1 (최소 0).
  # 사냥꾼 kyrenea_ranger·전사 kyrenea_warrior와 같은 인물의 다른 모습(정의 편).
  is_protagonist: false

- id: morea_devout_hearthkeeper
  order: 01_theodora
  name: "독실한 모레아 화로지기"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 4
  attack: 4
  defense: 0
  hp: 4
  shields: 0
  keywords: [등장]
  # 등장: 상하좌우·대각 2칸 이내 등장 상태의 인물 또는 대적자 1명 생명력 +1 회복 (등장한 턴만, 1회).
  is_protagonist: false

- id: melene_shadow
  order: 01_theodora
  name: "그림자, 멜레네"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: herald
  tier: legendary
  cost: 4
  attack: 3
  defense: 0
  hp: 2
  shields: 0
  keywords: [패시브]
  # 〈패시브〉: 회복 효과를 주는 내 모든 주문·인물·책략이 대상을 회복시키는 대신 같은 수치만큼 피해를 준다 (회복→피해 전환). 멜레네 퇴장 시 해제.
  is_protagonist: false

- id: dusk_shrine_keeper
  order: 01_theodora
  name: "황혼의 신전 관리인"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 5
  attack: 6
  defense: 0
  hp: 6
  shields: 0
  keywords: [고정]
  # 〈고정〉
  is_protagonist: false

- id: slumbering_guardian
  order: 01_theodora
  name: "잠자는 수호 정령"
  race: horde
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: chariot
  tier: epic
  cost: 5
  attack: 3
  defense: 0
  hp: 5
  shields: 0
  keywords: [잠]
  # 〈잠〉 — 공격받기 전까지 이동 불가. 깨어나면(피해를 받거나 수동 격돌 1회를 겪고 생존) 보호막 +1·공격력 +1 (1회만).
  is_protagonist: false

- id: holy_flame_guardian
  order: 01_theodora
  name: "성화의 수호자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: chariot
  tier: rare
  cost: 6
  attack: 4
  defense: 0
  hp: 5
  shields: 1
  keywords: []
  #
  is_protagonist: false

- id: skia_high_priest
  order: 01_theodora
  name: "고위 사제 스키아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: herald
  tier: legendary
  cost: 6
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [저격]
  # 〈저격〉: 8방 2칸 적(등장 인물·대적자) 1명 지정 → 내 회복 누적량만큼 피해 (회복 누적 = mechanics: 멜레네 전환 무관·내 회복만·매치 중 추적).
  is_protagonist: false

- id: artaia_judge
  order: 01_theodora
  name: "심판자 아르타이아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: herald
  tier: legendary
  cost: 6
  attack: 4
  defense: 0
  hp: 5
  shields: 0
  keywords: [등장]
  # 등장: 적 등장 상태의 인물 1명을 제거한다.
  is_protagonist: false
```
