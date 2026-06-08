# 오더 1 (테오도라) — 사제 인물

> 오더 1 팩 한정. belongs_to: priest.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: devout_hearthkeeper
  order: 01_theodora
  name: "신실한 화로지기"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: epic
  cost: 2
  attack: 2
  defense: 0
  hp: 2
  shields: 0
  keywords: [퇴장]
  # 퇴장: 의식 스택 +2
  # 보병 2코 ×3=기준선6. 공2/생2=합4 → 2 차감(퇴장:의식+2). ※의식 점수 미정 — 키레네아(등장:의식+2)는 0점, 시뮬 후 통일
  is_protagonist: false

- id: dusk_ascetic
  order: 01_theodora
  name: "어스름 교단 고행 사제"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 3
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 드로우 1장
  # 보병 3코 ×3=기준선9. 공1/생1=합2, 의도적 하향(후반 지향 사제 — 본체 빈약). ※드로우 효과점수 미정(표 공백)
  is_protagonist: false

- id: kyrenea_acolyte
  order: 01_theodora
  name: "견습 사제 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: rider
  tier: epic
  cost: 3
  attack: 2
  defense: 0
  hp: 5
  shields: 0
  keywords: [등장]
  # 등장: 의식 스택 +2
  # 의식 엔진 시동기 — 봉헌(턴당 +1)을 한 장으로 +2 점프시켜 은총·축복을 앞당김.
  # 기수 ×2.5 = 7.5→7 기준선에 2/0/5(합7) — 의식 점수 미정(펜딩)이라 정합 보류, 작가 결로 둠.
  # 테오도라 사냥꾼 kyrenea_ranger·전사 kyrenea_apprentice와 같은 인물의 다른 모습(붕어빵, 정의 편).
  is_protagonist: false

- id: morea_pilgrim
  order: 01_theodora
  name: "모레아 순례자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: rider
  tier: epic
  cost: 4
  attack: 2
  defense: 0
  hp: 5
  shields: 0
  keywords: [개시]
  # 개시: 체력 +2 회복 (최대 초과 X) — 매 턴 자가회복
  # 기수 4코 ×2.5=10 기준선. 공2/생5=합7. 개시:회복2(매턴) ※회복 매턴 점수 표 미정, 시뮬 후 보정
  is_protagonist: false

- id: artaia_hearthkeeper
  order: 01_theodora
  name: "화로지기 아르타이아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: herald
  tier: legendary
  cost: 7
  attack: 3
  defense: 0
  hp: 8
  shields: 0
  keywords: [등장]
  # 등장: 모든 의식 스택 소모 → 소모한 수만큼 대상에게 피해 (적 대적자·인물 지정)
  # 전령 7코 ×2.5=17.5→17 기준선. 공3/생8=합11 → 6 차감(등장:의식 변환 피해). ※의식 가변·점수 미정, 시뮬 후 보정
  is_protagonist: false
```
