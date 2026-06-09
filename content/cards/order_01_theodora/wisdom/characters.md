# 오더 1 (테오도라) — 사냥꾼 인물

> 오더 1 팩 한정. belongs_to: hunter.
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
  name: "갈 곳 없는 모레아 피난민"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: soldier
  tier: common
  cost: 2
  attack: 4
  defense: 0
  hp: 1
  shields: 0
  keywords: []
  # 보병 2코×3=6 기준, 공4/생1=합5 (1 낮음, 미검증). 유리몸 선공 보병 (옛 벽 결→딜러 전환). id morea_refugee 유지
  is_protagonist: false

- id: valley_apprentice_ranger
  order: 01_theodora
  name: "산골짜기 견습 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: common
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속]
  # 척후 ×2 = 4 − 신속1 = 합3 (공2/생1). 전사 '산골짜기 보급대원'(구 약초지기)과는 별개 카드 (공존, id 충돌 없음)
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
  attack: 2
  defense: 0
  hp: 1
  shields: 1
  keywords: [신성, 돌격]
  # 여신이 총애하는 고위 정령, 여우의 형태를 갖추고 있다.
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
  type: cavalry
  tier: epic
  cost: 2
  attack: 1
  defense: 0
  hp: 2
  shields: 0
  keywords: [사수]
  # 척후 2코×2=4 − 사수3 = 합1 기준, 공1/생2=합3 (2 오버, 미검증). 저코 침투 사수 — 매 턴 1딜(공1·반격X) + 척후 세로 침투
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
  type: cavalry
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
  type: chariot
  tier: epic
  cost: 4
  attack: 2
  defense: 0
  hp: 3
  shields: 0
  keywords: [사수]
  # 기준선 합7(기수4코×2.5=10 − 사수3), 실제 합5 (공2/생3) — 의도적 하향(작가 결).
  #   사수+기수(직교 1~3칸 기동) 시너지로 실전 오버스펙. 검은 숲 사냥꾼(2코 기수 사수)보다 체력 라인으로 차별
  is_protagonist: false

- id: valley_elite_ranger
  order: 01_theodora
  name: "산골짜기 정예 순찰대원"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: cavalry
  tier: rare
  cost: 5
  attack: 4
  defense: 0
  hp: 2
  shields: 0
  keywords: [돌격, 신속]
  # 척후 5코×2=10 − (돌격2+신속1) = 기준선7, 공4/생2=합6 (1 낮음, 미검증). 돌격+신속 = 소환 즉시 멀리 침투하는 정예
  is_protagonist: false

- id: howling_blackwood_boar
  order: 01_theodora
  name: "울부짖는 검은 숲 멧돼지"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: rare
  cost: 3
  attack: 3
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속, 쇄도]
  # 기수 3코×2.5=7 − (신속1+쇄도1) = 기준선5, 공3/생1=합4 (1 낮음, 미검증). 신속+쇄도 = 빠른 돌파 피니셔(유리몸)
  is_protagonist: false

- id: blackwood_hunter
  order: 01_theodora
  name: "검은 숲 사냥꾼"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: common
  cost: 2
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  keywords: [사수]
  # 첫 사격에 한해 공격력 +1(그 사격만, 이후 기본 공2). 기수 2코×2.5=5 − 사수3 = 2 기준, 공2/생1=합3 + 첫사격 조건부 +1 (약간 오버, 미검증)
  # 기수 사수 — 기동하며 쏘는 부대 사수 코어. 첫 사격 공3, 이후 공2. 검은 숲 누비는 인간 사냥꾼(추적자 결)
  is_protagonist: false

- id: blackwood_dusk_wolf
  order: 01_theodora
  name: "검은 숲 어스름 늑대"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: chariot
  tier: epic
  cost: 4
  attack: 5
  defense: 0
  hp: 2
  shields: 0
  keywords: [쇄도]
  # 기수 4코×2.5=10 − 쇄도1 = 기준선9, 공5/생2=합7 (2 낮음, 미검증)
  # 쇄도 = 돌파 후 [대기] 없이 즉시 관통. 고공격 어그로 피니셔
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

- id: blackwood_dusk_deer
  order: 01_theodora
  name: "검은 숲 어스름 사슴"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: hunter
  type: shifting
  tier: common
  cost: 6
  attack: 3
  defense: 0
  hp: 9
  shields: 0
  keywords: [등장]
  # 등장 — 소환한 턴의 대적자 특기 의지 비용이 0이 된다(그 턴 1회 공짜 발동). cards.md "특기 비용 0(1회성)" 정합
  # 용병 6코 — 낮·경계 보병(벽)/밤 척후(통과). 계수 가변(낮·경계×3 / 밤×2), 공3/생9=12 + 등장(특기0) 6점어치(미검증). 큰 몸이 밤엔 침투까지
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
  cost: 1
  attack: 1
  defense: 0
  hp: 2
  shields: 0
  keywords: []
  # 용병 타입 — 매 턴 시작 시간대 변경 때 모양이 바뀜: 낮·경계 보병 / 밤 척후 (그 타입의 이동·격돌·막힘·시야 전부). 시간대 안 바뀌면 유지. 배치 시점 타입도 그 시간대 따름
  # 용병 계수 가변(낮·경계 보병×3 / 밤 척후×2) → 1코 공1/생2=합3, 용병 유연성 본체로 할인(미검증). 저코 가변 침투 + 용병 타입 첫 카드
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
  cost: 6
  attack: 3
  defense: 0
  hp: 5
  shields: 0
  keywords: []
  # 오라(악타이아 필드 생존 동안 유지): ① 내 시야가 밤·경계에도 판 전체로 확보(나만, 적 시야는 그대로) ② 내 필드 모든 인물 공격력 +1(대적자 포함). 악타이아 사망 시 둘 다 해제
  # 전령 6코×2.5=15 기준 → 공3/생5=8, 오라 둘로 하향(미검증). 밤 시야 = 사수 갈래 밤 구멍 메움. 공버프 +2→+1(직격 쏠림 완화)
  # 여왕 — 군대를 밝히고 강화하는 전설 코어(사수·어그로 양쪽 받침). 시야 효과 정합 별도(현현=시간대 잠금과 다름, 내 시야만)
  is_protagonist: false
```
