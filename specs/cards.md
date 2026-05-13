# 카드 스키마

## 카드 종류

```yaml
CardKind:
  - character    # 인물 카드 (영구 컬렉션)
  - battle       # 스토리 카드 — 적 부대 등장
  - event        # 스토리 카드 — 결과형 단일
  - chance       # 스토리 카드 — 우연 5종
  - fate         # 스토리 카드 — 운명 (Stage 마지막)
```

## 인물 카드 (Character)

```yaml
Character:
  id: string                # 영구 ID, snake_case
  name: string              # "테오도라"
  epithet: string|null      # "라키아의 들개" (붕어빵 부제)
  
  # 4축
  faction: "surface" | "labyrinth" | "border"
  race: "human" | "horde"
  birth: "day" | "dawn" | "dusk" | "night"
  rank: "human" | "hero" | "horde" | "calamity"
  
  # 등급 (내부, 노출 X)
  tier: 1 | 2 | 3 | 4       # 필멸·반신·신성·번외
  
  # 직업
  class: "warrior" | "guardian" | "hunter" | "priest_surface" | "priest_labyrinth"
  
  # 능력치 (시뮬 후 확정)
  attack: int               # 공격력
  hp: int                   # 체력
  armor: int                # 시작 방어도 (기본 0)
  
  # 가호 (수 = tier, 폭 = rank, 유형 = birth)
  blessings: Blessing[]
  
  # 메타
  persona: "courage" | "wisdom" | "justice" | "temperance" | null
                            # 인격 (해당 시). null = 인격 무관 카드 (예: 발드)
  is_protagonist: bool      # 주연 영웅 (사망 = 게임 오버)
```

## 4축 ↔ tier ↔ rank 정합

```yaml
faction × race × birth 조합 (4종 유효):
  surface  + human + day    # 지상 인간
  border   + human + dawn   # 경계 인간
  border   + horde + dusk   # 경계 무리
  labyrinth + horde + night # 미궁 무리

race ↔ rank 정합:
  race=human  → rank ∈ {human, hero}      # 등극 시 영웅
  race=horde  → rank ∈ {horde, calamity}  # 시작부터 또는 변동

dice_count = tier         # 필멸 1 / 반신 2 / 신성 3 / 번외 4
blessing_count = tier - 1 # 필멸 0 / 반신 1 / 신성 2 / 번외 3
blessing_scale =
  rank ∈ {human, horde}        → "narrow"
  rank ∈ {hero, calamity}      → "wide"
```

## 능력치 합 결 (잠정 시드)

```yaml
stat_sum = attack + hp

tier 1 (필멸):  합 4   # 잠정
tier 2 (반신):  합 9
tier 3 (신성):  합 16
tier 4 (번외):  합 25

근사식: sum = (dice_count + 1)²
근거: 1라운드 결판 (죽창) 기준 + 등급 위로 가속

분배: 인물 결로 자유 (hp ≥ 1)
태생별 권장 비율 (잠정 시드, 강제 X):
  day:   attack 30% / hp 70%
  dawn:  attack 40% / hp 60%
  dusk:  attack 60% / hp 40%
  night: attack 70% / hp 30%

edge:
  hp ≤ 0 즉시 제거
  음수 피해는 0으로 처리
  필멸 dice_count=1, blessing_count=0
```

## 가호 (Blessing)

```yaml
Blessing:
  id: string
  type: "day" | "dawn" | "dusk" | "night"   # birth와 일치 강제
  trigger: "passive" | "on_critical" | "round_based" | "column_based" | "on_attack" | "on_hit"
  effect: string                             # 자유 텍스트 (작가 결)
  scale: "narrow" | "wide"                   # rank 정합

지속:
  passive (시작 시 스탯+N): 영구
  on_critical 효과 발동: 1 라운드
  나머지: trigger 명세대로
```

## 인물 카드 예시 (잠정 시드)

```yaml
- id: theodora_dog_of_rakia
  name: "테오도라"
  epithet: "라키아의 들개"
  faction: surface
  race: human
  birth: day
  rank: human
  tier: 1
  class: warrior              # 잠정 — 결정 시 변경
  attack: 1
  hp: 3                       # day 분배 (3:7 → 합 4 중 1:3)
  armor: 0
  blessings: []               # 필멸 = 가호 0
  persona: courage
  is_protagonist: true

- id: bald_lion_of_rakia
  name: "발드"
  epithet: "라키아의 사자"
  faction: labyrinth
  race: horde
  birth: night
  rank: calamity
  tier: 3                     # 잠정 (신성 또는 번외)
  class: warrior              # 잠정
  attack: 11                  # night 분배 (7:3 → 합 16 중 11:5)
  hp: 5
  armor: 0
  blessings: [...]            # tier 3 = 가호 2, scale=wide
  persona: null               # 인격 무관 (대적자)
  is_protagonist: false

- id: bandit_grunt
  name: "도적 졸병"
  epithet: null
  faction: labyrinth
  race: horde
  birth: night
  rank: horde
  tier: 1
  class: warrior
  attack: 3                   # night 분배 (7:3)
  hp: 1
  armor: 0
  blessings: []
  persona: null
  is_protagonist: false
```

## 스토리 카드 (Battle / Event / Chance / Fate)

```yaml
StoryCard:
  id: string
  kind: "battle" | "event" | "chance" | "fate"
  title: string                  # "도적 침공"
  description: string            # 짧은 텍스트

BattleCard extends StoryCard:
  kind: "battle"
  enemies: CharacterRef[]        # 인물 카드 ID 참조 + 수량
                                 # 예: [{ id: "bandit_grunt", count: 3 }]

FateCard extends StoryCard:
  kind: "fate"
  adversary: CharacterRef        # 대적자 — 인물 카드 ID 1장
                                 # 예: { id: "bald_lion_of_rakia", count: 1 }

EventCard extends StoryCard:
  kind: "event"
  effect: string                 # 결과형 단일 (분기 X), 즉발

ChanceCard extends StoryCard:
  kind: "chance"
  category: "crisis" | "opportunity" | "blessing" | "curse" | "prophecy"
  effect: string                 # 축복·저주만 분기, 나머지 단일

CharacterRef:
  id: string                     # 인물 카드 ID
  count: int                     # 수량 (졸병 다수 등장 시)
```

## 스토리 카드 예시

```yaml
- id: battle_bandit_raid
  kind: battle
  title: "도적 침공"
  description: "마을이 불탄다. 칼이 그림자에서 휘둘린다."
  enemies:
    - { id: bandit_grunt, count: 3 }

- id: fate_lion_of_rakia
  kind: fate
  title: "라키아의 사자"
  description: "두목과 마주 선다. 별명대로 사자다."
  adversary: { id: bald_lion_of_rakia, count: 1 }

- id: event_villager_aid
  kind: event
  title: "마을 사람의 도움"
  description: "한 노인이 약초를 건넨다."
  effect: "모든 우리편 hp +1 (다음 배틀 시작 시 회복에 누적)"

- id: chance_omen_of_battle
  kind: chance
  category: prophecy
  title: "전투의 전조"
  description: "까마귀 세 마리가 같은 방향으로 난다."
  effect: "다음 페이즈 운명 카드 미리 공개"
```

## 카드 풀 (Order = 270장)

```yaml
Order_1_Theodora_Pack:
  total: 270
  personas:
    courage:    90  # 81 일반 + 9 운명
    wisdom:     90
    justice:    90

Persona_Pack (한 회차 단위):
  total: 90
  stages: 9
  per_stage:
    general: 9    # battle / event / chance 혼합
    fate:    1
```

## TODO

```yaml
- TODO(시뮬): 합 4/9/16/25 죽창 결 검증 — 첫 구현 시도 후
- TODO(콘텐츠): 라키아의 들개 카드 10장 (용기 인격)
- TODO(콘텐츠): 인물 카드 풀 (테오도라 붕어빵 틀)
- TODO(밸런스): 일반 9장 안 battle/event/chance 비율
- TODO(밸런스): 우연 5종 분포
- TODO(시스템): 미궁 사제 대성공 효과
- TODO(시스템): 보호막 부여 결 (사제 행동? 가호?)
```
