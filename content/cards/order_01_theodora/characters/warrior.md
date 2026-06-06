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
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 내 대적자(테오도라) 공격력 +1 (이 배틀)
  is_protagonist: false

- id: morea_militia
  order: 01_theodora
  name: "모레아 민병"
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
  hp: 5
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
  name: "스테로페아"
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
```
