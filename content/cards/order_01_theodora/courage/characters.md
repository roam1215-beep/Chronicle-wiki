# 오더 1 (테오도라) — 전사 인물

> 오더 1 용기편 한정. belongs_to: warrior.

```yaml
- id: kyrenea_warrior
  order: 01_theodora
  name: "전사 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: chariot
  tier: epic
  cost: 3
  attack: 2
  defense: 0
  hp: 4
  shields: 0
  keywords: [패시브]
  # 〈패시브〉: 내 대적자 특기(수비) 비용 -1 (최소 0)
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
  tier: common
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장, 진형]
  # 등장: 〈진형〉 상하좌우·대각선 1칸 이내 아군 인물(대적자 제외)에게 공격력 +1 부여.
  is_protagonist: false

- id: morea_vigilante_captain
  order: 01_theodora
  name: "모레아 자경단 대장"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: cleric
  tier: rare
  cost: 4
  attack: 3
  defense: 0
  hp: 4
  shields: 0
  keywords: [오라]
  # 〈오라〉: 내 모든 등장 인물 공격력 +1
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
  keywords: [등장, 진형]
  # 등장: 〈진형〉 상하좌우·대각선 1칸 이내 아군 인물(대적자 제외)에게 공격력 +3·생명력 +3 부여.
  is_protagonist: false

- id: steropea
  order: 01_theodora
  name: "황소, 스테로페아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: herald
  tier: legendary
  cost: 5
  attack: 4
  defense: 0
  hp: 3
  shields: 1
  keywords: [연전]
  # 〈연전〉: 이 카드가 격돌해 양쪽(이 카드·상대) 모두 생존하면 즉시 한 번 더 격돌(능동·수동격돌 전부, 추가 1회만). shields 1 = 첫 공격 무효.
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
  keywords: [등장, 진형]
  # 등장: 〈진형〉 상하좌우·대각선 1칸 이내 아군 인물(대적자 제외)에게 공격력 +2 부여.
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
  attack: 3
  defense: 0
  hp: 4
  shields: 0
  keywords: [등장, 진형]
  # 등장: 〈진형〉 상하좌우·대각선 1칸 이내 아군 인물(대적자 제외)에게 공격력 +1·생명력 +1 부여.
  is_protagonist: false

- id: aganeia
  order: 01_theodora
  name: "지휘관, 아가네이아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: herald
  tier: legendary
  cost: 5
  attack: 3
  defense: 0
  hp: 5
  shields: 0
  keywords: [오라]
  # 〈오라〉: 같은 가로줄(행)의 아군 인물(대적자 제외)에게 공격력 +2·생명력 +2.
  is_protagonist: false

- id: valley_arms_merchant
  order: 01_theodora
  name: "산골짜기 무기 상인"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: warrior
  type: cavalry
  tier: common
  cost: 3
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [등장]
  # 등장: 내 대적자에게 토큰 장비 "모레아 보급장비"(공격력 +1, uses 2)를 장착한다.
  #   대적자가 이미 장비를 장착 중이면 교체(기존 장비는 묘지 — 1대적자 1장비 결).
  #   모레아 보급장비 = 토큰 (카드 풀 밖 생성물, 덱·패·묘지 안 거침, 소멸 시 덱 복귀 X).
  is_protagonist: false
```
