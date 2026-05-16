# 카드 스키마

## 카드 종류 (4종)

```yaml
CardKind:
  - character    # 인물 카드 (유닛)
  - spell        # 기도 카드
  - equipment    # 장비 카드
  - story        # 스토리 카드 (페이즈 진행 단위)
```

### 인물 카드

```yaml
카테고리: adversary | common

대적자 (adversary):
  - 양 진영 1명씩 자동 배치 (시작 시)
  - 사망 = 그 진영 패배
  - epithet 필수
  - 특기 보유 (의지 1, 라운드 1회, 키워드·효과로 변동 가능)
  - 배치 비용 X

일반 인물 (common):
  - 패에서 의지 지불해 배치 (비용 0~7)
  - epithet 선택
  - 패시브 + 등장 효과만 (능동 행동 X)

공통:
  - 영구사망 (잃으면 Order 끝까지 X)
```

### 기도 카드

```yaml
카테고리: reusable | consumable

재사용 가능 (reusable):
  - 배틀당 1회 발동
  - 발동 후 묘지

소모성 (consumable):
  - 발동 시 Order 끝까지 영구 제거

공통:
  - 의지 비용 0~7
  - 발동된 기도 = 묘지
```

### 장비 카드

```yaml
- 인물에 부착, 영구 효과
- 한 인물 1장비 (새 장비 부착 시 기존 대체)
- 단순 스탯 X — 효과군 결
```

### 스토리 카드

```yaml
카테고리: battle | event | chance | fate

- 덱 외 (페이즈 진행 단위)
- 매 페이즈 3장 노출 (선택-거부-감내)
- 운명 페이즈: 1장 단일
- 결과 비가역
```

## 덱 어휘

```yaml
패         # 손에 든 카드
덱         # 뽑을 카드 더미
묘지       # 사용·폐기된 카드 더미
맵         # 체스판 전체
필드       # 배치 가능 영역
```

## 인물 카드 (Character)

```yaml
Character:
  id: string                # 영구 ID, snake_case
  name: string              # "테오도라"
  epithet: string|null      # "라키아의 들개" (붕어빵 부제)
  
  # 4축 (작품 결)
  faction: "surface" | "labyrinth" | "border"
  race: "human" | "horde"
  birth: "한낮" | "여명" | "황혼" | "심야"
  rank: "human" | "hero" | "horde" | "calamity"
  
  # 직업 (6종)
  class: "warrior" | "guardian" | "hunter" | "priest" | "rogue" | "mercenary"
  
  # 카테고리
  category: "adversary" | "common"
  
  # 의지 비용
  cost: int|null            # adversary=null, common=0~7
  
  # 능력치 (3패러미터)
  attack: int               # 공격력
  defense: int              # 방어력 (시작 방어도, 결산 결은 combat.md)
  hp: int                   # 생명력
  
  # 시작 보호막
  shields: int              # 시작 보호막 수 (결산 결은 combat.md)
  
  # 키워드 슬롯
  keywords: Keyword[]       # 트리거·효과·상태 키워드 묶음
                            # 정확한 결은 키워드 시스템 본문 결로 (펜딩)
  
  # 메타
  persona: "courage" | "wisdom" | "justice" | "temperance" | null
                            # 회차 단위 단일. null = 인격 무관 (대적자·졸병 등)
  is_protagonist: bool      # 주연 영웅 (사망 = 게임 오버)
```

## 4축 정합

```yaml
faction × race × birth (4종 유효):
  surface   + human + 한낮  # 지상 인간
  border    + human + 여명  # 경계 인간
  border    + horde + 황혼  # 경계 무리
  labyrinth + horde + 심야  # 미궁 무리

race ↔ rank:
  human → human / hero       # 등극 시 영웅
  horde → horde / calamity   # 시작부터 또는 변동
```

## 태생 ↔ 시간대 매핑

```yaml
태생 (4종, 작품 결):    한낮 / 여명 / 황혼 / 심야
시간대 (3종, 메커니즘): 낮 / 경계 / 밤

매핑:
  한낮 → 낮
  여명 → 경계
  황혼 → 경계
  심야 → 밤

용도:
  - 강림 트리거 자격: 카드 시간대 = 현재 시간대
  - 진영 자기 시간대: 지상=낮 / 경계=경계 / 미궁=밤
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

## 키워드 시스템

```yaml
키워드 = 트리거 + 효과 자유 조합 (하스스톤·카오스 아카데미 결)

카드 = 능력치 + (있을 수도 없을 수도 있는) 효과
효과 = 자유 텍스트 + 키워드 묶음

적용:
  대적자·일반 인물 모두 6종 트리거 전부 가능
```

### 트리거 (6종)

```yaml
언제 발동되나:
  등장      인물 카드 배치 시
  강림      카드 시간대 = 현재 시간대일 때
  치명타    적 인물 카드 처치 시
  인내      라운드 전투 끝나고 생존 시
  동조      자기 진영 대적자 특기 사용 시
  퇴장      인물 카드 사망 시
```

### 효과 키워드

```yaml
무엇이 발동되나 (트리거와 자유 조합):
  기습          자동 공격 N회 (배치 위치·공격 타입 결로 — 펜딩)
  소환          임의의 인물 카드 N장 소환 (대상 결 펜딩)
  [피해 효과]    일정 피해 즉시 가함 (어휘 펜딩 — 옛 "사격" 폐기됨)

조합 예시:
  "등장 시 [피해 효과] 2"
  "치명타 시 소환 1"
  "퇴장 시 기습 1"
```

### 상태 키워드

```yaml
지속 결:
  수호       적이 우선 공격 (옛 도발 결)
  은신       보이지 X, 타겟팅 불가
  사거리 N   원거리 결 — 정확한 결 펜딩 (판 새로 짤 결)
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
- TODO(시스템): [피해 효과] 어휘
- TODO(시스템): 기습 결 세부 (배치 위치·공격 타입)
- TODO(시스템): 소환 대상 결
- TODO(시스템): 사거리 결 (판 새로 짤 결)
- TODO(시스템): 보호막·방어도 결산 결 (combat.md 결로 박힘)
- TODO(시뮬): 능력치 결 검증 — 첫 구현 시도 후 (새 3패러미터 결로)
- TODO(콘텐츠): 인물 카드 풀 정정 (옛 스키마 → 새 스키마)
- TODO(콘텐츠): 라키아의 들개 카드 10장 (용기 인격, 옛 어휘 정정 포함)
- TODO(콘텐츠): 인물 카드 풀 (테오도라 붕어빵 틀)
- TODO(밸런스): 일반 9장 안 battle/event/chance 비율
- TODO(밸런스): 우연 5종 분포
```
