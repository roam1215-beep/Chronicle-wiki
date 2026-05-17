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
카테고리: adversary | normal

대적자 (adversary):
  - 양 진영 1명씩 자동 배치 (시작 시)
  - 사망 = 그 진영 패배
  - epithet 필수
  - 특기 보유 (의지 1, 라운드 1회, 키워드·효과로 변동 가능)
  - 배치 비용 X
  - 직업 1종 가짐 (8종 중)
  - 타입 = 대적자 고정
  - 등급 = 서사 고정

일반 인물 (normal):
  - 패에서 의지 지불해 배치 (비용 0~7)
  - epithet 선택
  - 패시브 + 등장 효과만 (능동 행동 X)
  - 직업 X (대신 덱 소속 1종)
  - 타입 5종 중 하나
  - 등급 = 보통/희귀/영웅/전설

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
  
  # 3축 (작품 결)
  faction: "surface" | "labyrinth" | "border"
  race: "human" | "horde"
  birth: "한낮" | "여명" | "황혼" | "심야"
  # rank 폐기됨 (작품 결에서만 살아남)
  
  # 카테고리
  category: "adversary" | "normal"
  
  # 직업 (대적자만)
  class: "seer" | "hunter" | "guardian" | "bard" 
       | "wanderer" | "warrior" | "sovereign" | "priest" | null
                            # adversary = 8종 중 하나
                            # normal = null
                            # 한국어: 예언자·사냥꾼·수호자·음유시인
                            #         방랑자·전사·군주·사제
  
  # 덱 소속 (일반만)
  belongs_to: <직업 어휘 한 자리> | "neutral" | null
                            # normal = 한 직업 전용 또는 "neutral" (중립)
                            # adversary = null
  
  # 타입 (체스말 결)
  type: "soldier" | "archer" | "rider" 
      | "herald" | "mercenary" | "adversary"
                            # adversary = "adversary" 강제
                            # normal = 5종 중 하나
                            # 한국어: 병사·사수·기수·전령·용병·대적자
  
  # 등급
  tier: "common" | "rare" | "epic" | "legendary" | "mythic"
                            # adversary = "mythic" 강제
                            # normal = "common"/"rare"/"epic"/"legendary"
                            # 한국어: 보통·희귀·영웅·전설·서사
  
  # 의지 비용
  cost: int|null            # adversary=null, normal=0~7
  
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
                            # 대적자만 가짐 (일반 인물 = null)
                            # 회차 인격으로 결정 — 양 진영 대적자 동일
                            # 한국어: 용기·지혜·정의·절제
  is_protagonist: bool      # 주연 영웅 (사망 = 게임 오버)
```

## 3축 정합

```yaml
faction × race × birth (4종 유효):
  surface   + human + 한낮  # 지상 인간
  border    + human + 여명  # 경계 인간
  border    + horde + 황혼  # 경계 무리
  labyrinth + horde + 심야  # 미궁 무리
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

## 직업 (Class) — 대적자만

```yaml
8종 (덱빌딩 결):
  예언자   seer        — 카산드라·테이레시아스·모프소스
  사냥꾼   hunter      — 아탈란타·멜레아그로스·아르테미스
  수호자   guardian    — 헥토르·아이아스·펠레우스
  음유시인 bard        — 오르페우스
  방랑자   wanderer    — 오디세우스
  전사     warrior     — 아킬레우스
  군주     sovereign   — 아가멤논·이아손
  사제     priest      — 아스클레피오스·마카온·델포이 무녀

본질:
  - 대적자가 어떤 결의 영웅인지 결정
  - 그 직업의 덱은 직업 전용 카드 + 중립 카드로 묶임
  - 직업별 특기·기도·인물·장비 카드 풀이 다름

덱 소속 (belongs_to) — 일반 인물·기도·장비:
  - 한 직업 전용 (단일)
  - 또는 중립 (neutral) — 어느 직업 덱에도 들어감
```

## 타입 (Type) — 체스말 결

```yaml
6종:
  병사   soldier
    이동:  1칸 / 가로·세로
    전투:  근접 1칸 / 가로·세로
    시야:  1
  
  사수   archer
    이동:  1칸 / 가로·세로
    전투:  2칸 / 가로·세로 / 시야 안 적만
    시야:  1
  
  기수   rider
    이동:  2칸 / 가로·세로
    전투:  근접 1칸 / 가로·세로
    시야:  1
  
  전령   herald     (대각 결, 펜딩)
    이동:  TBD
    전투:  TBD
    시야:  TBD
  
  용병   mercenary  (특수 결, 펜딩)
    이동:  TBD
    전투:  TBD
    시야:  TBD
  
  대적자 adversary  (킹 결)
    이동:  1칸 / 8방향
    전투:  근접 1칸 / 8방향 (공격력 0 가능)
    시야:  1

본질:
  - 카드의 체스말 결 — 이동·전투·시야 한 묶음
  - 대적자 카테고리 = 대적자 타입 강제 (정합)
  - 일반 카테고리 = 5종 중 하나
  - 시야는 진영 공유 (combat.md 참조)
  - 사거리 어휘 폐기 — 타입 자체가 사거리
```

## 등급 (Tier)

```yaml
5종:
  보통   common      흔함
  희귀   rare        덜 흔함
  영웅   epic        드묾
  전설   legendary   덱에 1장만
  서사   mythic      대적자 전용

박힐 카드:
  인물 / 기도 / 장비 (스토리 X)

대적자·일반 정합:
  대적자 = 서사 강제 (자동)
  일반 = 보통/희귀/영웅/전설 (서사 X)

덱 제약:
  서사 = 대적자, 덱당 1명
  전설 = 한 덱에 1장만
  영웅·희귀·보통 = 한 덱에 2장까지

용도:
  - 덱 구성 제약
  - 보상 풀 정합 (펜딩)
  - 수치·키워드 강도 — 등급 높을수록 강함
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
  category: "crisis" | "opportunity" | "boon" | "curse" | "prophecy"
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
  # 사거리는 타입 자체로 박힘 — 상태 키워드 X
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
- TODO(시스템): 전령 타입 이동·전투·시야 결
- TODO(시스템): 용병 타입 이동·전투·시야 결
- TODO(시스템): 직업 8종별 덱 특색 결 (카드 풀의 본질)
- TODO(시스템): 보호막·방어도 결산 결 (combat.md 결로 박힘)
- TODO(시스템): 보상 풀 정합 (등급별 분포)
- TODO(시뮬): 능력치 결 검증 — 첫 구현 시도 후 (새 3패러미터 결로)
- TODO(콘텐츠): 인물 카드 풀 정정 (옛 스키마 → 새 스키마)
- TODO(콘텐츠): 라키아의 들개 카드 10장 (용기 인격, 옛 어휘 정정 포함)
- TODO(콘텐츠): 인물 카드 풀 (테오도라 붕어빵 틀)
- TODO(밸런스): 일반 9장 안 battle/event/chance 비율
- TODO(밸런스): 우연 5종 분포
```
