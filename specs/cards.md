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
  - 양 진영 1명씩 시작부터 판에 (빈 판에 킹만)
  - 사망 = 그 진영 패배
  - 특기 보유 (signature_skill, 의지 지불, 턴 1회, 키워드·효과로 변동 가능)
  - 소환 비용 X (시작부터 판에)
  - 직업 1종 가짐 (7종 중)
  - 타입 = 대적자(킹) 고정
  - 등급 = 서사 고정
  - 기본 스펙: attack=0, defense=0, hp=20, shields=0
    (attack=0 → 격돌 시 반격으로 0을 줌, 직접 못 싸움 = 약한 심장)
    (특기·키워드·카드 효과로 임시·영구 attack 얻을 수 있음)

일반 인물 (normal):
  - 패에서 의지 지불해 소환 (비용 0~7, 킹 인접 8칸)
  - 패시브 + 등장 효과만 (능동 행동 X)
  - 직업 X (대신 덱 소속 1종)
  - 타입 = 병사·기수·전령·사수 중 하나 (+ 용병 펜딩)
  - 등급 = 보통/희귀/영웅/전설

공통:
  - 배틀 안 = 사용·사망 시 묘지 (그 배틀 재사용 X)
  - 배틀 사이 = 묘지 → 셔플 → 덱 복귀 (다음 배틀에 다시 패로)
  - 폐기 (discard) = 그 회차 영구 손실 (덱 복귀 X)
    → 스토리 카드 결로만 발생 (펜딩 — 어느 결로?)
```

### 기도 카드

```yaml
- 의지 비용 0~7
- 배틀당 1회 발동 (그 배틀 안 재사용 X)
- 발동 후 묘지
- 배틀 사이 = 묘지 → 셔플 → 덱 복귀
- 폐기 시만 그 회차 영구 손실

카테고리 결 폐기:
  옛 결 (reusable/consumable) 통째 폐기
  소모성 결 = 영구사망 결과 한 묶음이라 같이 폐기
  모든 기도 = 위 결 동일 (배틀당 1회·배틀 사이 복귀)
```

### 장비 카드

```yaml
- 의지 비용 0~7 (부착 시 지불)
- 패에서 인물 1명 지정해 부착 — 부착 시점에 비용 지불
- 한 인물 1장비 (새 장비 부착 시 기존 = 묘지)
- 부착 동안 영구 효과
- 부착된 인물 사망 시 = 함께 묘지
- 배틀 사이 = 묘지 → 셔플 → 덱 복귀
- 단순 스탯 X — 효과군 결 (인물 키워드에 더해짐)
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
묘지       # 사용·사망한 카드 더미 (배틀 끝 셔플 후 덱 복귀)
폐기       # 그 회차 영구 손실 (덱 복귀 X). 스토리 카드 결로만 발생
맵         # 체스판 전체
필드       # 말이 놓이는 칸 (소환은 킹 인접 8칸)
```

## 카드 생애 결

```yaml
배틀 안:
  덱 → 패 (드로우)
  패 → 필드·발동 (인물 소환 / 기도 발동 / 장비 부착)
  필드·발동 → 묘지 (사용·사망)
  같은 배틀 안 묘지 → 패·필드 복귀 X

배틀 끝:
  묘지 → 셔플 → 덱 (다음 배틀 시작 시 다시 드로우)

폐기 (회차 안):
  덱·패·묘지 어디서든 → 폐기
  그 회차 끝까지 X — 다음 배틀에도 X
  스토리 카드 결로만 발생 (펜딩 — 어느 결로?)
```

## 인물 카드 (Character)

```yaml
Character:
  id: string                # 영구 ID, snake_case
  name: string              # "테오도라" (작품 명칭은 별도 결)
  
  # 3축 (작품 결)
  faction: "surface" | "labyrinth" | "border"
  race: "human" | "horde"
  birth: "한낮" | "여명" | "황혼" | "심야"
  # rank 폐기됨 (작품 결에서만 살아남)
  
  # 카테고리
  category: "adversary" | "normal"
  
  # 직업 (대적자만)
  class: "seer" | "hunter" | "bard" 
       | "wanderer" | "warrior" | "sovereign" | "priest" | null
                            # adversary = 7종 중 하나
                            # normal = null
                            # 한국어: 예언자·사냥꾼·음유시인
                            #         방랑자·전사·군주·사제
  
  # 덱 소속 (일반만)
  belongs_to: <직업 어휘 한 자리> | "neutral" | null
                            # normal = 한 직업 전용 또는 "neutral" (중립)
                            # adversary = null
  
  # 타입 (체스말 결)
  type: "soldier" | "archer" | "rider" 
      | "herald" | "mercenary" | "adversary"
                            # adversary = "adversary" 강제
                            # normal = 5종 중 하나 (용병은 턴제 결 펜딩)
                            # 한국어: 병사·사수·기수·전령·용병·대적자
  
  # 등급
  tier: "common" | "rare" | "epic" | "legendary" | "mythic"
                            # adversary = "mythic" 강제
                            # normal = "common"/"rare"/"epic"/"legendary"
                            # 한국어: 보통·희귀·영웅·전설·서사
  
  # 의지 비용
  cost: int|null            # adversary=null, normal=0~7
  
  # 능력치 (3패러미터)
  attack: int|null          # 일반 타입: 공격력 / 용병: null (variants 결로)
                            # 대적자 기본 = 0 (공격 X, 특기·키워드로 얻음)
  defense: int|null         # 일반 타입: 방어력 / 용병: null
  hp: int|null              # 일반 타입: 생명력 / 용병: null
  
  # 시작 보호막
  shields: int|null         # 일반 타입: 시작 보호막 / 용병: null
  
  # 용병 결 (type = mercenary 한정)
  variants: Variant[]|null  # type=mercenary → 2개 (필수)
                            # 다른 타입 = null
                            # 배치 시 1종 선택, 결정 후 변경 X
  
  # 특기 결 (대적자만)
  signature_skill: SignatureSkill|null
                            # adversary = 필수 (null X)
                            # normal    = null 강제
  
  # 키워드 슬롯
  keywords: Keyword[]       # 트리거·효과·상태 키워드 묶음
                            # 정확한 결은 키워드 시스템 본문 결로 (펜딩)
                            # 용병은 키워드 공통 (variants 결 X)
  
  # 메타
  persona: "courage" | "wisdom" | "justice" | "temperance" | null
                            # 대적자만 가짐 (일반 인물 = null)
                            # 회차 인격으로 결정 — 양 진영 대적자 동일
                            # 한국어: 용기·지혜·정의·절제
  is_protagonist: bool      # 주연 영웅 (사망 = 게임 오버)


Variant (용병만):
  role: "soldier" | "archer"   # 어느 결로 배치
  attack: int                  # 그 role의 공격력
  defense: int                 # 그 role의 방어력
  hp: int                      # 그 role의 생명력
  shields: int                 # 그 role의 시작 보호막


SignatureSkill (대적자만):
  cost: int                    # 의지 비용 (기본 1)
  effect: string               # 효과 본문 (자유 텍스트)
  keywords: Keyword[]          # 트리거 키워드 (능동 발동 결, 펜딩)
```

## 특기 결 (Signature Skill)

```yaml
본질:
  - 대적자 영웅 능력 (하스스톤 영웅 능력 결)
  - 능동 발동 — 내 턴, 플레이어 결정
  - 의지 비용 (기본 1, 카드·키워드로 변동 가능)
  - 턴 1회 (카드·키워드로 변동 가능)

정합 강제:
  category = "adversary" → signature_skill 필수 (null X)
  category = "normal"    → signature_skill = null 강제

동조 트리거와의 결:
  자기 진영 대적자 특기 발동 시 → 자기편 인물의 '동조' 트리거 발동
  (combat.md 턴 구조 / 트리거 재매핑 펜딩 참조)

복수 인격 결 (같은 인물, 다른 직업·인격):
  같은 인물의 인격별 분기 = 다른 카드 id 결로 박힘
  예: theodora_courage / theodora_wisdom / theodora_justice
  회차 인격으로 자동 선택됨
```

## 용병 결 (mercenary)

```yaml
# ※ 펜딩: 턴제 체스 전환으로 용병 결 재정의 필요.
#   옛 결(병사형/사수형 택1)은 병사=폰·사수=우리 말로 바뀌며 의미 재고 중.
#   아래는 옛 골격 (variants 스키마는 참고용 보존).

배치 결:
  - 패에서 의지 지불해 배치 (일반 인물 결)
  - 배치 시점에 role 선택: soldier 또는 archer
  - 선택 후 결정: 그 결로 굳어짐, 턴·배틀 안 변경 X
  - 표시 결: "용병 (병사로 배치)" / "용병 (사수로 배치)"

variants 정합 강제:
  type = "mercenary" → 본문 attack/defense/hp/shields = null
                    → variants = [2개, 각각 role: soldier·archer]
  type ≠ "mercenary" → 본문 attack/defense/hp/shields = int
                    → variants = null

공통 자리 (variants 결 X):
  - 의지 비용 (cost)
  - 키워드 (keywords)
  - 덱 소속 (belongs_to)
  - 등급 (tier)
  - 이름 (name)
```

## 기도 카드 (Spell)

```yaml
Spell:
  id: string                # 영구 ID, snake_case
  name: string              # "은총의 빛"
  
  # 덱 소속
  belongs_to: <직업 어휘> | "neutral"
  
  # 등급
  tier: "common" | "rare" | "epic" | "legendary"
  
  # 의지 비용
  cost: int                 # 0~7
  
  # 효과 본문
  effect: string            # 자유 텍스트 (효과 결로)
  
  # 키워드
  keywords: Keyword[]       # 효과·상태 키워드 (트리거 결 X — 즉발)
                            # 예: [피해 효과]·소환·기습 등 효과 키워드

발동 결:
  - 의지 지불해 발동 (즉발)
  - 발동 후 묘지
  - 트리거 결 X — 발동 시점에만 효과
```

## 장비 카드 (Equipment)

```yaml
Equipment:
  id: string                # 영구 ID, snake_case
  name: string              # "방패의 무게"
  
  # 덱 소속
  belongs_to: <직업 어휘> | "neutral"
  
  # 등급
  tier: "common" | "rare" | "epic" | "legendary"
  
  # 의지 비용 (부착 시)
  cost: int                 # 0~7
  
  # 효과 본문
  effect: string            # 자유 텍스트 (부착 효과 결로)
  
  # 키워드 — 부착된 인물 결에 더해짐
  keywords: Keyword[]       # 트리거·효과·상태 자유 조합
                            # 부착된 인물의 키워드에 합산 결

부착 결:
  - 의지 지불해 부착 (소환·발동과 같은 결, 패에서 인물 1명 지정)
  - 한 인물 1장비 (새 장비 부착 시 기존 = 묘지)
  - 부착 동안 효과 유지
  - 부착된 인물 사망 시 = 함께 묘지
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
7종 (덱빌딩 결):
  예언자   seer        — 카산드라·테이레시아스·모프소스
  사냥꾼   hunter      — 아탈란타·멜레아그로스·아르테미스
  음유시인 bard        — 오르페우스
  방랑자   wanderer    — 오디세우스
  전사     warrior     — 아킬레우스·헥토르·아이아스·펠레우스
  군주     sovereign   — 아가멤논·이아손
  사제     priest      — 아스클레피오스·마카온·델포이 무녀
# 수호자 (guardian) 폐기 (5/17) — 헥토르·아이아스·펠레우스는 전사 흡수

본질:
  - 대적자가 어떤 결의 영웅인지 결정
  - 그 직업의 덱은 직업 전용 카드 + 중립 카드로 묶임
  - 직업별 특기·기도·인물·장비 카드 풀이 다름

덱 소속 (belongs_to) — 일반 인물·기도·장비:
  - 한 직업 전용 (단일)
  - 또는 중립 (neutral) — 어느 직업 덱에도 들어감

직업 매핑 결 (하스스톤 결 결 + 덱 주축):
  전사     warrior    하스스톤 전사
                       주축: 전선·방어  부축: 컨트롤/OTK
                       특기: 본인 방어력 +1 (그 배틀 누적, 보호막 X)
                       헥토르·아이아스·펠레우스 흡수 (방어형 결)
  
  사냥꾼   hunter     하스스톤 사냥꾼
                       주축: 사수·어그로  부축: 기동
                       특기: 사용 턴 임시 공격력 +1 + 사수 결 원거리
  
  군주     sovereign  하스스톤 성기사 + 흑마법사
                       주축: 전개·소환  부축: 템포
                       특기: 본인 8방향 8칸 빈 칸에 병사 1명 소환
  
  사제     priest     하스스톤 사제
                       주축: 회복·번  부축: 컨트롤
                       특기: 지정 아군 hp +1 (범위 무관, 최대 hp 초과 X,
                            우호 NPC 포함)
                       회복 결 + 번 결 (양면)
  
  예언자   seer       하스스톤 마법사
                       주축: 책략·번  부축: 지연 소환
                       메커니즘: 타일 지정 + n 턴 후 발현 결
                       특기: 펜딩
  
  방랑자   wanderer   하스스톤 드루이드
                       주축: 기동·용병  부축: 변신·자원
                       특기: 펜딩
  
  음유시인 bard       하스스톤 주술사
                       주축: 부여 (지원)  부축: 토템 결 가능 (펜딩)
                       특기: 펜딩
```

## 덱 아키타입

```yaml
한 직업 안 큰 갈래 결.
같은 직업이라도 빌드 결로 갈라짐 (한 직업 = 여러 축 결).
인격 결과 무관 — 직업별 갈래 결.

3축으로 결 박힘:
  카드 기능 축    인물·기도-부여·기도-번·장비·책략·타일 지연
  덱 아키타입 축  전선·사수·기동·번·전개·회복·부여·책략
  페이즈+표적 축  어그로/템포/컨트롤/OTK × 직격/우회/전선

전사 (warrior) — 3 갈래:

  방어 전사 (헥토르 결)
    본질: 인물 자체가 단단·전열 강함, 필드 위주 승부
    페이즈: 중·후반 (컨트롤)
    표적: 전선
    cost 곡선: 중 cost 무게
    핵심 풀: 방어력·보호막·hp 높은 인물

  돌격 전사 (아킬레우스 결, 해적 전사 결)
    본질: 속도·전개 빠른 초반 결
    페이즈: 초반 (어그로)
    표적: 직격 (대적자)
    cost 곡선: 저 cost 무게
    핵심 풀: 빠른 인물·기수 결·돌격

  장비 전사 (아이아스·펠레우스 결)
    본질: 장비 위주, 전열도 강함, 장비 효과 무게
    페이즈: 중반 (템포)
    표적: 전선·직격 섞임
    cost 곡선: 중 cost (장비 cost 포함)
    핵심 풀: 장비 카드 많음, 부착 결 + 인물 결합

# 사냥꾼·예언자·군주·방랑자·음유시인·사제 갈래: 펜딩
```

## 타입 (Type) — 체스말 결

```yaml
명칭은 유지, 움직임은 체스 문법 차용. 이동·전투·시야 한 묶음.

  병사   soldier   — 폰 결
    이동:  앞으로 1칸 (방향성)
    전투:  격돌 (적 칸 진입 시도 = 동시 교환)
    시야:  1

  기수   rider     — 나이트 결
    이동:  ㄱ자 점프 (막힘 무시)
    전투:  격돌
    시야:  1

  전령   herald    — 비숍 결
    이동:  대각 (칸수 펜딩, 6x6 기준 제한 필요)
    전투:  격돌
    시야:  2

  사수   archer    — 우리만의 말 (이동 ≠ 공격)
    이동:  1칸 / 가로·세로
    사격:  2칸 / 가로·세로 / 시야 안 적만 (일방, 반격 없음, 사격 시 위치 노출)
    시야:  1

  대적자 adversary — 킹 결
    이동:  8방향 1칸
    전투:  격돌 (공격력 0 → 반격으로 0, 약한 심장)
    시야:  1

  # 용병 mercenary: 턴제 체스에서의 결 펜딩 (옛 병사형/사수형 택1)

본질:
  - 타입 = 이동하는 모양 (체스의 명료함을 빌림)
  - 카드 = 그 말의 영혼 (능력치·키워드 = 덱빌딩의 개성)
  - 체스 문법 차용 + 사수(우리 말) 섞음 = 마이너 카피 회피
  - 근접(병사·기수·전령·대적자) = 격돌 (이동해 진입, 동시 교환, combat.md 참조)
  - 사수 = 사격 (이동≠공격, 일방, 시야 안 적만)
  - 대적자 카테고리 = 대적자(킹) 타입 강제 (정합)
  - 일반 카테고리 = 병사·기수·전령·사수 중 하나 (+ 용병 펜딩)
  - 정확한 칸수(비숍 대각 등)는 시뮬에서 조정
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
                                 # 예: { id: "bald_courage", count: 1 }

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
  adversary: { id: bald_courage, count: 1 }   # 용기 인격 결 예시

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
# ※ 펜딩: 트리거 6종은 턴제 재매핑 미완 (인내·동조·강림이 라운드/자동전투
#   기준, 기습이 자동 공격 기준이었음 — 턴제 결로 추후 재정의). 아래는 옛 골격.

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
- TODO(시스템): [피해 효과] 어휘 (키워드용, 트리거 펜딩과 묶임)
- TODO(시스템): 기습 결 세부 (소환 위치·공격 — 트리거 펜딩)
- TODO(시스템): 소환 대상 결 (소환 키워드)
- TODO(시스템): 전령(비숍) 대각 칸수 (시뮬)
- TODO(시스템): 용병(mercenary) 결 (턴제 체스에서 — 옛 병사형/사수형 택1)
- TODO(시스템): 직업 7종별 덱 특색 결 (카드 풀의 본질)
- TODO(시스템): 보호막·방어도 결산 결 (combat.md 결로 박힘)
- TODO(시스템): 보상 풀 정합 (등급별 분포)
- TODO(시뮬): 능력치 결 검증 — 첫 구현 시도 후 (새 3패러미터 결로)
- TODO(콘텐츠): 인물 카드 풀 정정 (옛 스키마 → 새 스키마)
- TODO(콘텐츠): 라키아의 들개 카드 10장 (용기 인격, 옛 어휘 정정 포함)
- TODO(콘텐츠): 인물 카드 풀 (테오도라 붕어빵 틀)
- TODO(밸런스): 일반 9장 안 battle/event/chance 비율
- TODO(밸런스): 우연 5종 분포
```
