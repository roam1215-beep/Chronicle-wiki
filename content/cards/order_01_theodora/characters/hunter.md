# 오더 1 (테오도라) — 사냥꾼 인물

> 오더 1 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
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
  keywords: [퇴장]
  # 퇴장: 적 대적자에게 피해 2. 보병 1코×3=3 − 피해2 = 합1 기준선, 공1/생1=합2 (퇴장 조건부라 사실상 정합)
  # 1코 자폭병 — 던져 죽으면 적 킹 2딜 (어그로 적 킹 직격, 첫 효과 카드)
  is_protagonist: false

- id: calydon_bandit_recruit
  order: 01_theodora
  name: "칼리돈 도적단 신입"
  race: human
  birth: 황혼
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
  # 등장: 적 대적자에게 피해 1 (즉시 직격). 보병 1코×3=3 − 등장1 = 합2 (정합)
  # 이리(퇴장 2딜)와 짝 — 등장 1딜 자폭병. 칼리돈 숲의 인간 도적단
  is_protagonist: false

- id: morea_refugee
  order: 01_theodora
  name: "숨어든 모레아 피난민"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 2
  attack: 1
  defense: 0
  hp: 5
  shields: 0
  keywords: []
  # 보병 2코×3=6, 합6 (공1/생5 — 정합). 바닐라 벽
  is_protagonist: false

- id: blackwood_viper
  order: 01_theodora
  name: "검은 숲 독사"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: rare
  cost: 2
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속, 독성2]
  # 척후 ×2=4 − 신속1 − 독성2(격돌 양날·실질 1점) = 합2 (공1/생1, 정합)
  # 독성2 = 격돌한 적에게 독성 2 부여 (StS 독 — 상대 턴 시작 시 2딜→1딜, 누적). 신속 = 세로 이동 1~2→2~3칸
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
  # 척후 ×2 = 4 − 신속1 = 합3 (공2/생1). 전사 '산골짜기 약초지기'와는 별개 카드 (이관 전제 폐기 — 공존, id 충돌 없음)
  is_protagonist: false

- id: kyrenea_ranger
  order: 01_theodora
  name: "견습 사냥꾼 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: epic
  cost: 3
  attack: 1
  defense: 0
  hp: 2
  shields: 0
  keywords: [사수]
  # 척후 ×2 = 6 − 사수3 = 합3 (공1/생2). 저코 침투 사수 — 매 턴 1딜(공1·반격X) + 척후 세로 침투
  # 테오도라 사냥꾼 오더의 동행. 전사 kyrenea_apprentice(견습 대장장이 키레네아)와 같은 인물의 다른 모습(붕어빵)
  is_protagonist: false

- id: beckoning_blackwood_nymph
  order: 01_theodora
  name: "손짓하는 검은 숲 요정"
  race: horde
  birth: 밤
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
  birth: 밤
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

- id: blackwood_dusk_wolf
  order: 01_theodora
  name: "검은 숲 어스름 늑대"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: rider
  tier: epic
  cost: 5
  attack: 4
  defense: 0
  hp: 3
  shields: 0
  keywords: [신속, 쇄도]
  # 기수 ×2.5 = 12 − (신속1+쇄도1) = 기준선 10, 실제 합7 (쇄도 조건부 값으로 하향)
  # 신속+쇄도 = 빠르게 돌파 후 [대기] 없이 즉시 관통. 어그로 피니셔, 사냥꾼 첫 쇄도
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
  cost: 5
  attack: 6
  defense: 0
  hp: 7
  shields: 0
  keywords: [등장]
  # 등장: 적 대적자에게 피해 1 (거리·시간대 무관 — 조건 없는 확정 직격)
  # 보병 5코×3=15 − 등장1 = 기준선14, 합13 (1 낮음). 무리 야수 = 보병이지만 사나운 단단한 벽+딜러
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
  keywords: [등장, 퇴장]
  # 등장: 적 대적자 피해3 / 퇴장: 적 대적자 피해3 (합 6딜, 거리 무관). 어그로 직격 피니셔 정점
  # 전령 5코×2.5=12 − (등장3+퇴장3=6) = 기준선6, 합7 (1 오버 — 퇴장 조건부라 사실상 정합)
  # 리카이온 = 늑대로 변한 아르카디아 왕(리카온, 늑대인간 어원)
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
  cost: 7
  attack: 5
  defense: 0
  hp: 3
  shields: 1
  keywords: [신성, 사수]
  # 전령 ×2.5 = 17 − (신성2+사수3+보호2) ≈ 7 = 기준선 10, 실제 합8 + 보호막1. 효과 위주 에이스
  # 신성 = 단일 지정 기도 면역 (적 저주 막음, 단 아군 버프도 못 받음) → 자기 공격력 5로만 쏘는 자립형 사수
  # 라피테스 = 켄타우로스와 싸운 인간 부족 (무리 짐승 덱 안의 인간 추적자)
  is_protagonist: false
```
