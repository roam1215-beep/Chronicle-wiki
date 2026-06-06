# 오더 1 (테오도라) — 사냥꾼 인물

> 오더 1 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: blackwood_dusk_wolf
  order: 01_theodora
  name: "검은 숲 어스름 늑대"
  race: horde
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: rare
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속]
  # 척후 ×2 = 4 − 신속1 = 합3 (공2/생1). 신속 = 척후 세로 이동 1~2칸 → 2~3칸 (통과 한 겹 결 유지)
  is_protagonist: false

- id: valley_apprentice_ranger
  order: 01_theodora
  name: "산골짜기 견습 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: common
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속]
  # 척후 ×2 = 4 − 신속1 = 합3 (공2/생1). 전사 풀에서 이관 — 전사 쪽 제거는 별도 진행(id 일시 공존)
  is_protagonist: false

- id: beckoning_blackwood_nymph
  order: 01_theodora
  name: "손짓하는 검은 숲 요정"
  race: horde
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: rider
  tier: epic
  cost: 4
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [사수]
  # 기준선 합7(기수4코×2.5=10 − 사수3), 실제 합4 — 의도적 하향(작가 결).
  #   사수+기수(직교 1~3칸 기동) 시너지로 실전 오버스펙. 사냥꾼 밥줄 카드.
  is_protagonist: false

- id: valley_elite_ranger
  order: 01_theodora
  name: "산골짜기 정예 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: rare
  cost: 4
  attack: 3
  defense: 0
  hp: 3
  shields: 0
  keywords: [신속]
  # 척후 ×2 = 8 − 신속1 = 기준선 7, 실제 합6 (공3/생3 — 1 낮음, 거의 정합)
  is_protagonist: false

- id: howling_blackwood_boar
  order: 01_theodora
  name: "울부짖는 검은 숲 멧돼지"
  race: horde
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: rider
  tier: rare
  cost: 4
  attack: 5
  defense: 0
  hp: 3
  shields: 0
  keywords: [신속]
  # 기수 ×2.5 = 10 − 신속1 = 기준선 9, 실제 합8 (공5/생3 — 1 낮음). 고공격·유리몸 돌격마
  is_protagonist: false
```
