# 오더 1 (테오도라) — 사제 인물

> 오더 1 팩 한정. belongs_to: priest.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

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
  keywords: [퇴장]
  # 퇴장: 의식 스택 +1
  # 보병 2코 ×3=기준선6. 공2/생2=합4 → 2 차감(퇴장:의식+1). ※의식 점수 미정, 시뮬 후 보정
  is_protagonist: false

- id: valley_torchbearer
  order: 01_theodora
  name: "산골짜기 횃불지기"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 2
  attack: 1
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 1칸 이내 아군 일반 인물에게 공격력 +1 부여
  # 보병 2코 ×3=기준선6. 공1/생3=합4 → 2 차감(등장:공+1 부여). ※미검증
  is_protagonist: false

- id: devoted_hearthkeeper
  order: 01_theodora
  name: "헌신적인 화로지기"
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
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 의식 2 소모 → 지정 아군에게 체력 +2 회복. 의식 2 미만이면 효과 없음.
  # 보병 2코 ×3=기준선6. 공1/생1=합2 → 4 차감(등장:의식2소모→2회복). ※의식 점수 미정. ※트리거=등장 추정(매 턴이면 개시로)
  is_protagonist: false

- id: morea_adept
  order: 01_theodora
  name: "모레아 수행사제"
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
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 의식 스택 +1
  # 보병 3코 ×3=기준선9. 공2/생3=합5 → 4 차감(등장:의식+1). ※의식 점수 미정, 시뮬 후 보정
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
  hp: 8
  shields: 0
  keywords: [고정]
  # 고정: 배치 후 이동 불가 (디메리트) — 다른 효과 없는 고체력 벽
  # 보병 3코 ×3=기준선9. 고정(-3 디메리트→스탯 보상). 공2/생8=합10 (고정 보상 일부만, 작가 결)
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
  attack: 2
  defense: 0
  hp: 4
  shields: 0
  keywords: [동조]
  # 동조(내 대적자 특기 발동 직후): 적 대적자에게 피해 1 — 봉헌 칠 때마다 적 킹 깎음
  # 전령 4코 ×2.5=기준선10. 공2/생4=합6 → 4 차감(동조:특기당 적킹 1피해). ※미검증
  is_protagonist: false

- id: morea_torch_watcher
  order: 01_theodora
  name: "모레아 횃불 감시자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 4
  attack: 3
  defense: 0
  hp: 4
  shields: 0
  keywords: [등장]
  # 등장: 의식 2 소모 → 지정 적에게 피해 2 (기도 판정). 의식 2 미만이면 효과 없음.
  # 보병 4코 ×3=기준선12. 공3/생4=합7 → 5 차감(등장:의식2소모→2피해). ※의식 점수 미정, 시뮬 후 보정
  is_protagonist: false

- id: morea_hearthkeeper
  order: 01_theodora
  name: "모레아 화로지기"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: soldier
  tier: common
  cost: 5
  attack: 5
  defense: 0
  hp: 6
  shields: 0
  keywords: [퇴장]
  # 퇴장: 의식 스택 +1
  # 보병 5코 ×3=기준선15. 공5/생6=합11 → 4 차감(퇴장:의식+1). ※의식 점수 미정, 시뮬 후 보정
  is_protagonist: false

- id: holy_flame_guardian
  order: 01_theodora
  name: "성화의 수호자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: rider
  tier: rare
  cost: 6
  attack: 3
  defense: 0
  hp: 8
  shields: 0
  keywords: [종료]
  # 종료: 공격력 +1 (영구·매 턴 누적 성장)
  # 기수 6코 ×2.5=기준선15. 공3/생8=합11 → 4 차감(종료:공+1 매턴 성장). ※미검증
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
  attack: 2
  defense: 0
  hp: 3
  shields: 0
  keywords: [등장]
  # 등장: 의식 스택 모두 소모 → 소모한 만큼 내 일반 인물 1명에게 공격력·생명력 부여 (의식 1당 공+1·생+1). 적·내 대적자 불가.
  # 전령 6코 ×2.5=15 기준선. 공2/생3=합5 → 10 차감(등장:의식변환 버프). ※의식 가변·점수 미정, 시뮬 후 보정
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
