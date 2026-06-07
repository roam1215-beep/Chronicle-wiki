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
  cost: 2
  attack: 1
  defense: 0
  hp: 3
  shields: 0
  keywords: []
  # 배치 후, 시간대가 밤→낮으로 바뀔 때마다(3턴 순환에 1회) 공격력 +2·체력 +2 영구 성장. 그 배틀 한정(나가면 리셋), 상한 없음.
  # 전령 2코×2.5=5, 공1/생3=4 시작 — 성장 잠재로 전설. 여우 정령 결(밤 지날수록 커짐). 일반 인물 첫 영구 성장체. [성장 효과] 어휘 펜딩이라 keywords 비움
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
  hp: 8
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

- id: blackwood_tracker
  order: 01_theodora
  name: "검은 숲 추적자"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: scout
  tier: rare
  cost: 3
  attack: 4
  defense: 0
  hp: 1
  shields: 0
  keywords: [쇄도]
  # 척후 3코×2=6 − 쇄도1 = 합5 (공4/생1, 정합). 고공격 유리몸 침투 피니셔
  # 쇄도 = 돌파 후 [대기] 없이 즉시 관통. 척후 세로 침투 + 쇄도 = 빠른 끝줄 돌파→관통. 검은 숲 누비는 인간 추적자(라피테스 결)
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

- id: capricious_dark_fae
  order: 01_theodora
  name: "변덕스러운 어둠 요정"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: shifting
  tier: epic
  cost: 6
  attack: 3
  defense: 0
  hp: 7
  shields: 0
  keywords: []
  # 변동 타입 — 매 턴 시작 시간대 변경 때 모양이 바뀜: 낮 보병 / 경계 기수 / 밤 척후 (그 타입의 이동·격돌·막힘·시야 전부). 시간대 안 바뀌면 유지. 배치 시점 타입도 그 시간대 따름
  # 기수 6코×2.5=15 기준 → 공3/생7=10, 변동 유연성으로 할인(미검증). 6코 첫 카드 + 변동 타입 첫 카드
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
  cost: 7
  attack: 3
  defense: 0
  hp: 8
  shields: 0
  keywords: []
  # 오라(악타이아 필드 생존 동안 유지): ① 내 시야가 밤·경계에도 판 전체로 확보(나만, 적 시야는 그대로) ② 내 필드 모든 인물 공격력 +2(대적자 포함). 악타이아 사망 시 둘 다 해제
  # 전령 7코×2.5=17.5 기준 → 공3/생8=11, 강력 오라 둘로 하향(미검증). 밤 시야 = 사수 갈래 밤 구멍 메움. 전체 공+2 = 직격 쏠림과 겹쳐 시뮬 강도 검증 필요
  # 여왕 — 군대를 밝히고 강화하는 전설 코어(사수·어그로 양쪽 받침). 시야 효과 정합 별도(현현=시간대 잠금과 다름, 내 시야만)
  is_protagonist: false
```
