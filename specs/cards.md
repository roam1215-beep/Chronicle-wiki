# 카드 스키마

> 카드 데이터의 단일 정본 — 스키마·키워드 시스템·등급·능력치 기준선·직업별 덱 색.
> 안 쥔 것: 타입 정의 → types.md / 전투 → combat.md / 5층·페이즈·드래프트 → structure.md / 특기 → signatures.md.

## 카드 종류 — 전승 base / 기록 base (공통 꼬리표 order)

```yaml
# 큰 2분류 — 스키마가 갈린다. 두 부류가 공유하는 필드는 order(=하스 set) 하나,
#   나머지 필드 세트는 별개다. 그래서 단일 카드 스키마가 아니라 base 둘로 둔다.
#   전승 카드 (Talisman): 덱 안. 등급·의지비용 有. 드래프트·배틀 후 셔플 덱 복귀.
#   기록 카드 (Record):   덱 밖. 등급·비용 X. 페이즈 진행(battle/event/chance/fate, 10장).
#   줄거리 카드 (Narrative): 덱 밖·10장 밖. 오더 시작=프롤로그 / 오더 끝=에필로그 (컷씬, 보상·전투 X).
# ※ 영문 식별자는 코드 연동으로 유지 — 한글명만 재편.

CardKind:
  # ── 전승 카드 (Talisman) ──
  - character    # 인물
  - spell        # 기도 — 대상 1체 직접 지정 (적/내 편 × 대적자/인물)
  - equipment    # 장비
  - power        # 권능 — 칸(범위) 지정 발동 (기도와 단일/범위로 대응)
  # ── 기록 카드 (Record) — 페이즈 진행, 10장 ──
  - record       # 기록 — battle / event / chance / fate
  # ── 줄거리 카드 (Narrative) — 기록 10장과 별개 묶음, 오더 시작/끝 컷씬 ──
  - prologue     # 오더 시작 1회 (페이즈 밖, 보상 X)
  - epilogue     # 오더 끝 1회 (stage9 운명 승리 후, 페이즈 밖, 보상 X)

# 두 base 공통 — 출신 꼬리표 (하스스톤 set 결: 카드가 자기 소속을 안고 다님 → 단일 파일에서도 안전)
# id 규칙: id는 오더 내 유니크 (전역 X). order 필드가 오더를 식별 → (order, id)로 전역 구분.
TalismanCard (전승 공통):
  id · kind · order · tier(등급) · cost(의지 0~6) · name
  # 종류별 세부 = 아래 ### 인물/기도/장비/권능 카드

RecordCard (기록·줄거리 공통 스키마):
  id · kind · order · persona · title · description · quote
  # kind = 세부 종류: record 카테고리 = battle/event/chance/fate / 줄거리 = prologue·epilogue.
  #   (CardKind의 'record'는 카테고리명 — 데이터 kind 필드엔 battle 등 세부가 들어감, 'record'가 직접 들어가진 않음)
  # 등급·cost 없음. 종류별 세부 = 아래 ## 기록 카드 / ### 줄거리 카드 (prologue·epilogue)
  # persona: courage|wisdom|justice — 인격 팩 소속

# order 허용값 (= 하스 CardSet). 카드엔 식별자만 박고, 표시명은 따로 매핑 (하스 GVG → "고블린과 노움" 결)
# 값 형식 = {순번}_{인물}. 순번 = 그 인물의 개인 오더 순번 (세계사 국면 번호 아님!). 다른 인물은 각자 01부터 (01_achilles 등).
OrderSet:
  # core 비활성 — 지금은 공용 카드 없음 (전부 01_theodora). 오더2(02_theodora)/실제 공용 생기면 신설
  01_theodora    # 표시명 "미궁의 테오도라" (은유 제목 + 도리아↔이오니아 멸칭. 물리적 미궁 의미 아님)
  # 오더 추가 시 여기 등록
```

### 인물 카드

```yaml
카테고리: adversary | normal

대적자 (adversary):
  - 양 진영 1명씩 시작부터 판에 (킹은 배치 대상 아님 — 오프닝 기물은 별도)
  - 사망 = 그 진영 패배
  - 특기 보유 (signature_skill, 의지 지불, 턴 1회, 키워드·효과로 변동 가능)
  - 배치 비용 X (킹은 배치·등장 안 함, 시작부터 판에)
  - 직업 1종 가짐 (7종 중)
  - 타입 = 대적자(킹) 고정
  - 등급 = 서사 고정
  - 능력치: attack·defense·shields = 카드별 (기본 0, 전투형이면 얹음)
    (attack=0 = 약한 심장 → 격돌 시 반격으로 0. 특기·키워드·카드로 attack 얻음)
    hp = 등장 역할로 결정 (아래 "대적자 hp 위계")

대적자 hp 위계:
  플레이어 선택 대적자(테오도라 등) = 스테이지1 시작 0/0/20, 보상으로 성장
  적 대적자 = 등장 역할로 hp 결정:
    일반전(스테이지 전투)  hp 10
    스테이지 보스(운명전)  hp 20
    챕터 보스              hp 30
    오더 보스(최종)        hp 40
  (attack·defense는 위계와 무관 — 카드별)

일반 인물 (normal):
  - 패에서 뽑아 배치(놓기, 공짜) → 등장(의지 0~6)으로 활성화 (배치 영역 = 킹 8칸 또는 자기 끝 2줄)
  - 패시브 + 등장 효과만 (능동 행동 X)
  - 직업 X (대신 덱 소속 1종)
  - 타입 = 보병·전차·신관·기수 중 하나
  - 등급 = 보통/희귀/영웅/전설

공통:
  - 생애(묘지·셔플 복귀·폐기) = ## 카드 생애 결
```

### 기도 카드 · 권능 카드

```yaml
# 발동형 효과 카드 2종. 직업 전용(중립 X). 가르는 칼 = 조준 대상 (말/칸).
- 기도(Spell)     = 말 지정 — 효과가 말에 귀속 (움직이면 따라감)
- 권능(Power) = 칸 지정 — 효과가 칸에 귀속 (발동 시 그 칸의 말이 맞음, 지나가면 해소)
- 의지 0~6 · 생애 = ## 카드 생애 결
- 상세 스키마 = 아래 ## 정본 (기도·권능 카드)
```

### 장비 카드

```yaml
- 대적자(킹)에 부착되는 물건 (기도 = 일시 효과 / 장비 = 부착물 — 둘 다 말 쪽). 인물 부착 X
- 의지 0~6 (부착 시 지불) · 패에서 대적자 1 지정 (내 킹 / 적 킹)
- 부착 대상: 킹 전용 · 진영: 내 편 / 상대(디버프 장비)
- 1대적자 1장비 (새 장비 부착 시 기존 = 묘지, 하스 무기 교체 결)
- 단순 스탯 X — 효과군 (키워드 부여·조건부·지속·자해·트레이드오프) · 부착·유지·uses 상세 = ## 장비 카드
```

### 기록 카드

```yaml
종류(kind): battle | event | chance | fate  (줄거리 카드 prologue·epilogue = 별도 묶음, 아래 ### 줄거리 카드)
- 덱 외 (페이즈 진행 단위) · 등급·cost 없음 · 결과 비가역
- 일반 페이즈: 3장 노출(선택-버림-감내) / 운명 페이즈: 1장 단일
- effect = 기록 카드가 일으키는 보상·대가 (6종). 스키마·발생 매트릭스 = ## 기록 카드 effect
```

### 줄거리 카드 (프롤로그 · 에필로그)

```yaml
# 기록 10장과 별개 묶음 · 오더 시작/끝 컷씬. 스키마 = ## 줄거리 카드 (NarrativeCard).
프롤로그: 오더 시작 1회 (페이즈 밖, 시작 덱 편성과 같은 층). 보상·전투 X.
  - 오더1 프롤로그 = 5세, 어머니의 선택·키레네아 (받을 에필로그 없는 출발점)
  - 오더2~ 프롤로그 = 전 오더 같은 편 에필로그와 맥락 이음 (별개 카드)
에필로그: 오더 끝 1회 (stage9 운명 승리 후, 페이즈 밖). 보상·전투 X · 마무리 컷씬.
성격: 전투 X · 분기 X · 컷씬. effect·face 없음.
id: prologue_{persona} / epilogue_{persona}  (persona = courage|wisdom|justice. 예: prologue_courage)
짝·줄: (order + persona + kind) — 같은 편이 오더 넘어 프롤로그↔전 오더 에필로그로 이어짐
```

## 덱 어휘

```yaml
패         # 손에 든 카드
덱         # 뽑을 카드 더미
묘지       # 사용·사망한 카드 더미 (배틀 끝 셔플 후 덱 복귀)
폐기       # 그 회차 영구 손실 (덱 복귀 X). 헤어짐·교차로 발생
맵         # 체스판 전체
필드       # 말이 놓이는 칸 (배치 = 킹 8칸 또는 자기 끝 2줄)
```

## 카드 생애 결

```yaml
배틀 안:
  덱 → 패 (드로우)
  패 → 필드·발동 (인물 배치·등장 / 기도 발동 / 장비 부착)
  필드·발동 → 묘지 (사용·사망)
  같은 배틀 안 묘지 → 패·필드 복귀 X

배틀 끝:
  묘지 → 셔플 → 덱 (다음 배틀 시작 시 다시 드로우)

폐기 (회차 안):
  덱·패·묘지 어디서든 → 폐기
  그 회차 끝까지 X — 다음 배틀에도 X
  헤어짐(parting)·교차(crossing)로 발생 — 덱 랜덤 1장 제거
```

## 인물 카드 (Character)

```yaml
Character:
  id: string                # 영구 ID, snake_case
  name: string              # "테오도라" (작품 명칭은 별도 결)
  
  # 종족 × 태생 (작품 결) — faction 폐기, birth가 진영 흡수
  race: "human" | "horde"            # human=정복자·시민 / horde=선주민
  birth: "낮" | "여명" | "황혼" | "밤"  # 정치·종교 좌표 (낮=이오니아 … 밤=도리아)
  # race × birth 독립 (무리도 4분기 어디든). faction·rank 폐기.
  # ※ 코드: faction 필드 제거 — Claude Code 인계 대상
  
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

  # 중립 갈래 (belongs_to: "neutral" 한정)
  neutral_card: "player" | "enemy" | null
                            # player = 유저 드래프트 풀 (encounter)
                            # enemy  = 적 덱 머릿수 (enemy_decks) — 유저 풀보다 스펙 약간 약함
                            # belongs_to != neutral (직업 전용·대적자) = null 강제
  
  # 타입 (체스말 결 — 정의 SSOT = types.md)
  type: "soldier" | "chariot" | "cleric" 
      | "cavalry" | "herald" | "adversary"
                            # adversary = "adversary" 강제 (킹)
                            # normal = 5종 중 하나 (보병·전차·신관·기수·전령)
                            # 한국어: 보병·전차·신관·기수·전령·대적자
                            # ※ 전령(herald) = 퀸·전설 전용 — 전설 ↔ 전령 정합은 등급 섹션 (전환 작업 펜딩)
  
  # 등급
  tier: "common" | "rare" | "epic" | "legendary" | "mythic"
                            # adversary = "mythic" 강제
                            # normal = "common"/"rare"/"epic"/"legendary"
                            # 한국어: 보통·희귀·영웅·전설·서사
  
  # 의지 비용
  cost: int|null            # adversary=null, normal=0~6
  
  # 능력치 (3패러미터)
  attack: int               # 공격력 (대적자 기본 = 0 — 공격 X, 특기·키워드로 얻음)
  defense: int              # 방어도 (대적자 전용 자원 — 일반 인물은 0, mechanics.md)
  hp: int                   # 생명력 (= 최대 체력. max_hp 지정 시 그 값이 최대)
  max_hp: int               # (선택) 최대 체력 — 생략 시 hp와 동일. hp < max_hp면 깎인 채 등장 (상처입은 모레아 전사)
  
  # 시작 보호막
  shields: int              # 시작 보호막
  
  # 특기 결 (대적자만)
  signature_skill: SignatureSkill|null
                            # adversary = 필수 (null X)
                            # normal    = null 강제
  
  # 키워드 슬롯
  keywords: Keyword[]       # 트리거·효과·상태 키워드 묶음
                            # 정확한 결은 키워드 시스템 본문 결로 (펜딩)
  
  # 메타
  is_protagonist: bool      # 주연 영웅 (사망 = 게임 오버)
  opening: bool             # true = 배틀 시작 시 덱에서 자동 배치([대기] 상태). 시작 3장과 별개·덱 드로우 풀 미포함 (combat.md "## 배치·등장")


SignatureSkill (대적자만):
  cost: int                    # 의지 비용 (기본 2)
  effect: string               # 효과 본문 (자유 텍스트)
  keywords: Keyword[]          # 트리거 키워드 (능동 발동 결, 펜딩)
```

## 특기 결 (Signature Skill)

```yaml
본질:
  - 대적자 영웅 능력 (하스스톤 영웅 능력 결)
  - 능동 발동 — 내 턴, 플레이어 결정
  - 의지 비용 (기본 2, 카드·키워드로 변동 가능)
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
  카드엔 인격 필드 없음 — 직업·특기·능력치 차이로 자연히 다른 카드.
  회차 인격이 어느 id를 쓸지 결정 (회차 단위 상태 — structure.md "인격" 참조)
```

## 기도 카드 (Spell) · 권능 카드 (Power)

```yaml
# 둘 다 발동형 효과 카드 — 직업 전용(중립 X), 직업색의 핵심.
# 가르는 칼 = 조준 대상: 기도 = 말 지정 / 권능 = 칸 지정 (체스판의 두 요소).
#   기도 = 효과가 말에 귀속 -> 말이 움직이면 따라감 (추적)
#   권능 = 효과가 칸에 귀속 -> 발동 시 그 칸의 말이 맞음, 지나가면 해소 (고정)
# 둘 다 모든 직업이 보유 — 비중·성향이 직업색 (예: 예언자 = 권능·지연 특화)

# ── 공유 필드 ──
공유:
  id: string                # 영구 ID, snake_case
  name: string
  belongs_to: <직업 어휘>    # 직업 전용 — neutral 불가
  tier: "common" | "rare" | "epic" | "legendary"   # 서사(mythic) 없음 — 인물 전용
  cost: int                 # 0~6
  timing: "instant" | "delayed"     # 즉시 / n턴 뒤
  delay_turns: int                  # delayed 한정
  duration: "once" | "turns" | "battle"   # 1회 / n턴 / 배틀 내내
  duration_turns: int               # turns 한정

  effect: string            # 효과 내용 = 자유 텍스트 (+수치). 피해/속박/버프·디버프/이동/회복/… (열린)
  triggers: Keyword[]       # 효과가 참조하는 트리거 (보유 X — 예: "동조 직후"). 없으면 생략

발동 결:
  - 의지 지불해 발동, 발동 후 묘지 (배틀 사이 = 묘지 -> 셔플 -> 덱 복귀)
  - 반격 없는 일방 효과 (격돌과 달리 패를 태워 일방으로 작용)

# ── 기도 (Spell) — 말 지정 ──
Spell:
  <공유 필드>
  target: "one" | "many" | "side_all" | "type_all" | "adversary" | "self"
    # one      = 말 1
    # many     = 말 N (지정)
    # side_all = 진영 전체 (내 편 전부 / 적 전부)
    # type_all = 병종 전체 (보병·전차·신관·기수… — 종족 X)
    # adversary= 대적자(킹) 지정
    # self     = 시전자 자신 (자기 자원 효과 — 드로우 등, 말 대상 없음)
  side: "enemy" | "ally" | "ally_normal" | "any"
    # ally = 아군(대적자 포함) / ally_normal = 아군 중 일반만 / any = 적·아군 전부
  match: "on_cast" | "continuous"   # type_all 한정 — 발동 시점만 / 지속 매칭(이후 등장도)

# ── 권능 (Power) — 칸 지정 ──
Power:
  <공유 필드>
  mode: "fixed" | "placed" | "attached"
    # fixed    = 고정 범위 자동 발동 (유저 조작 X — 예: 내 대적자 중심 3x3). 적 대적자용이 기본 / 플레이어 권능은 placed·attached 원칙, fixed는 작가 의도 시만 예외
    # placed   = 사용 가능 레인지 안에서 유저가 모양을 놓음 (예: 레인지 3x3 안에 2x2)
    # attached = 말을 닻으로 범위가 그 말 따라 이동 (효과는 말 주변 칸, 말 자신 X — 희귀)
  shape: "row_n" | "col_n" | "sq_n" | "diag_n" | "row_full" | "col_full" | "field_full" | "single"
    # row_n=가로 n칸(왼->오) / col_n=세로 n / sq_n=정사각 n×n(예: sq_2=2×2, 좌상단 기준) / diag_n=대각선 n칸(우하향·우상향 — placed는 둘 중 선택)
    # row_full=가로 전체 줄 / col_full=세로 전체 줄 / field_full=필드 전체 / single=단일 칸 (권능은 2칸+ 권장 — single은 기도와 겹침)
    # duration: turns = 장(場) — 설치한 턴부터 N턴 지속, 매 턴 범위 내 대상에 효과 (예: 여진 = sq_2, 2턴)
  origin: "absolute" | "my_adversary"
    # absolute     = 절대 지정 (placed/attached)
    # my_adversary = 내 대적자 기준 (fixed). nxn·diag_n은 대적자를 중심에 두고 정렬 (좌상단 기준 아님)
  include_origin: bool       # my_adversary 한정 — 중심(대적자 발밑) 칸을 효과에 포함할지 (true=버프 자기도 받음 / false=디버프 자기 발밑 안전)
  range: string             # placed 한정 — 지정 가능 레인지 (예: "3x3")
  attach_to: string         # attached 한정 — 닻 말
  side: "ally_only" | "enemy_only" | "both"   # 칸 효과의 피아 (fixed 포함 전부 보유)

조준 제한 (공통):
  - 판 전체 겨냥 가능 (시야 시스템 폐기 — 안개·visibility 없음)
```

## 장비 카드 (Equipment)

```yaml
Equipment:
  id: string                # 영구 ID, snake_case
  name: string              # "방패의 무게"
  belongs_to: <직업 어휘> | "neutral"    # 직업 전용 또는 중립
  tier: "common" | "rare" | "epic" | "legendary"   # 서사(mythic) 없음 — 인물 전용
  cost: int                 # 0~6 (부착 시 지불)

  attach_target: "king"     # 대적자(킹) 전용 (장비 = 대적자가 채우는 무기, 인물 부착 X)
  attach_side: "ally" | "enemy"     # 내 대적자 / 적 대적자 (디버프 장비 — 적 킹 슬롯 점유)

  uses: int|null            # 사용 횟수 (하스 무기 내구도 결). null = 무제한(영속, 죽을 때까지)
                            #   값 있으면 대적자 격돌마다 -1, 0 도달 시 이 장비만 묘지(대적자는 생존)
  effect: string            # 자유 텍스트 — 키워드 부여·조건부·지속 패시브·피해(자해)·트레이드오프
                            #   예: "내 턴 시작 시 hp -1, 공격력 +2" (대가 있는 강화)
  keywords: Keyword[]       # 부착 대상에 합산 (중복 = 기존 유지, 추가 무시)

부착 결:
  - 의지 지불해 부착 (패에서 대적자 1 지정 — 내 킹 또는 적 킹)
  - 1대적자 1장비 — 새 장비 부착 시 기존 = 묘지 (하스 무기 교체 결)
  - 효과는 대적자에 귀속 — 킹이 움직이면 따라감
    (말/칸 칼: 장비·기도 = 말 쪽 / 권능 = 칸 쪽. 단 장비 = 영속 부착물 / 기도 = 일시 효과)
  - 유지 조건 (둘 중 먼저 오는 쪽에서 묘지行):
      uses=null → 대적자가 죽을 때까지 (영속, 스스로 못 뗌 — 해제 효과로만)
      uses=int  → 대적자가 그 무기로 전투할 때마다 -1: 격돌형 무기 = 격돌마다(능동·수동 전부, effect가 규정). 0이면 장비만 묘지·대적자 생존
  - 대적자 사망 시 = 함께 묘지 · 배틀 사이 둘 다 덱 복귀
```

## 2축 정합 (race × birth — faction 폐기)

```yaml
race × birth — 두 축 독립. birth가 진영·정치좌표를 흡수:
  race:  human (정복자·시민) | horde (선주민)
  birth: 낮(=이오니아) | 여명(=친이오니아) | 황혼(=친도리아) | 밤(=도리아)

무리도 사는 자리 따라 4분기 어디든 (race 2 × birth 4 = 8조합 유효):
  human + 낮   = 이오니아 시민        horde + 낮   = 이오니아 거주 무리(선주민)
  human + 여명 = 친이오니아 시민      horde + 여명 = 친이오니아 무리
  human + 황혼 = 친도리아 시민        horde + 황혼 = 친도리아 무리
  human + 밤   = 도리아 시민          horde + 밤   = 도리아 노예 무리

진영은 birth로 읽음 (낮=이오니아 / 여명·황혼=경계 / 밤=도리아)
```

## 태생 ↔ 시간대 매핑

```yaml
태생 (4종, 작품 결 — 카드 고정 속성):    낮 / 여명 / 황혼 / 밤
시간대 (3종, 메커니즘 — 매 턴 변동):     낮 / 경계 / 밤

매핑 (태생 → 인도 자격 시간대):
  태생 낮   → 시간대 낮
  태생 여명 → 시간대 경계
  태생 황혼 → 시간대 경계
  태생 밤   → 시간대 밤
  # 경계만 여명·황혼으로 세분 (낮/밤은 그대로). 같은 단어지만 축이 다름.

용도:
  - 인도 트리거 자격: 카드 시간대 = 현재 시간대
  - 진영 자기 시간대: 이오니아=낮 / 경계=경계 / 도리아=밤
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

본질:
  - 대적자가 어떤 결의 영웅인지 결정
  - 그 직업의 덱은 직업 전용 카드 + 중립 인물로 묶임
  - 직업별 특기·기도·인물·장비 카드 풀이 다름

카드 분배 규칙 (하스 결):
  기도 = 직업 전용 (중립 X)
  장비 = 직업 전용 또는 중립 (neutral)
  인물 = 직업 전용 또는 중립 (neutral)

덱 소속 (belongs_to):
  - 기도 = 한 직업 전용 (neutral 불가)
  - 장비 = 한 직업 전용 또는 중립 (neutral)
  - 일반 인물 = 한 직업 전용 또는 중립 (neutral)
  - 대적자 = null (직업은 class 필드로)
  # 중립 인물은 player/enemy 갈래로 또 갈림 (neutral_card 필드) — player=유저 드래프트 / enemy=적 덱 머릿수(스펙 약간 약함)
```

## 등급 (Tier)

```yaml
5종:
  보통   common      흔함 , 동일한 카드 2장까지 들어갈 수 있음
  희귀   rare        덜 흔함 , 동일한 카드 2장까지 들어갈 수 있음
  영웅   epic        드묾 , 동일한 카드 2장까지 들어갈 수 있음
  전설   legendary   덱에 동일한 카드는 1장밖에 들어갈 수 없음
  서사   mythic      대적자 전용

박힐 카드:
  인물 / 기도 / 장비 (기록 X)

대적자·일반 정합:
  대적자 = 서사 강제 (자동)
  일반 = 보통/희귀/영웅/전설 (서사 X)

덱 제약:
  서사 = 대적자, 덱당 1명
  영웅·희귀·보통 = 한 덱에 2장까지
```

## 기록 카드 (Battle / Event / Chance / Fate) · 줄거리 카드 (Prologue / Epilogue)

```yaml
# 기록 base — 덱 밖, 등급(tier)·의지비용(cost) 없음, 페이즈 진행 단위, 결과 비가역.
# effect 정본·발생 매트릭스 = 아래 ## 기록 카드 effect.

RecordCard:
  id: string
  kind: battle | event | chance | fate | prologue | epilogue
  order: string                  # 소속 오더 (01_theodora) — 전승·기록 공통 꼬리표
  persona: courage | wisdom | justice
  scene: string                  # 이 카드가 속한 장면 — 같은 페이즈 3장이 공유 (페이즈 묶음 헤더)
  beat: string                   # 장면 핵 (난수 굴림 축 — tools/record-factory §2). 페이즈 3장 공유
  title: string
  description: string            # 그림 밖 사실만 — art_hook에 보이는 것은 뺀다. 객관·무인칭 (감상·1인칭·캡션화 X)
  quote: string                  # 페르소나 목소리 (상황 대사 아닌 '그 사람이 하는 말') — record-factory §1·§4
  art_hook: string               # 그 스냅샷이 그릴 한 컷 (일러스트 입력 · 시각 100% 전담)
  # 면(face) 3종 = unknown -> back -> front. 동선 = structure.md "Phase 진행" SSOT
  # 장면 레이어·desc/quote/art_hook 분업 = structure.md "페이즈 = 장면" + tools/record-factory

NarrativeCard (줄거리 — 프롤로그·에필로그):   # 기록 10장과 별개, 오더 시작/끝 컷씬
  kind: prologue | epilogue
  id: prologue_{persona} | epilogue_{persona}   # persona = courage|wisdom|justice (예: prologue_courage)
  # 상속: order·persona·title·description·quote. effect·face·분기 없음 (순수 컷씬).
  # id는 오더 내 유니크 — order 필드가 오더 구분 (전역 유니크 X). 짝·줄 = (order+persona+kind).

# 전투 세팅 (battle·fate·전투형 chance[불운→ordeal→조우] 공통 — 시작 판. SSOT = specs/maps.md)
BattleSetup:
  map_preset:  standard_small | standard_medium | standard_large | corridor_small | corridor_medium | corridor_large  # 축1 크기 (필수)
  king_layout: standard_left | standard_right | advance_left | advance_right                                         # 축2 왕 배치 (필수)
  preplaced:   Placement[]       # 이 전투 고유 선배치([대기] 상태). opening 카드 자동배치와 별개 — 전투가 직접 지정. 없으면 [] — 적 카드색이라 재사용 X
Placement: { card: string, pos: string, side: ally | enemy }

BattleCard:                      # 일반 대적자 전투 (페이즈)
  kind: battle
  adversary: CharacterRef        # 적 대적자(킹) — 일반전 hp 10
  enemy_decks: EnemyDeck[]       # 프리셋 2종 (## 적 덱 생성)
  setup: BattleSetup             # 시작 판 (맵 프리셋·왕 배치·선배치 = maps.md)
  # 보상: 승리 -> 직업 전용 조우. effect 필드 없음 (전투가 곧 트리거).

FateCard:                        # 스테이지 보스 (각 stage 끝, stage 1~9)
  kind: fate
  adversary: CharacterRef        # 스테이지 보스 hp 20 / 챕터 보스 hp 30
  enemy_decks: EnemyDeck[]       # 프리셋 3종
  setup: BattleSetup             # 시작 판 (maps.md)
  # 보상 = stage 위치로 자동 분기 (카드에 안 박음):
  #   stage 1·2·4·5·7·8 (스테이지 보스) -> growth(일반) + 조우(매핑 = ## 기록 카드 effect TODO)
  #   stage 3·6·9       (챕터 보스)    -> growth(특수) + 조우(매핑 = ## 기록 카드 effect TODO)
  # effect 필드 없음.

EventCard:                       # 비전투 확정 사건 (예고 — 앞면 보고 감내)
  kind: event
  effect: Effect[]               # 1~2개 복합 가능. 허용: bind | crossing | parting

ChanceCard:                      # 위장된 우연
  kind: chance
  category: 행운 | 불운           # 내부 구분만 (외부 표기 = "우연")
  effect: Effect                 # 단일. 행운 -> growth(일반) / 불운 -> ordeal
  setup: BattleSetup?            # 불운(전투형 ordeal -> 조우)일 때만. 행운은 전투 없음 -> 생략
  # face: 자기 back 없음 -> 사건/전투 back 50:50 랜덤 위장, front에서 정체. 버림 시 정체 영구 비공개.

CharacterRef: { id: string, count: int }
CardRef:      { id: string, count: int }
EnemyDeck:
  core:     CardRef[]             # 개성분 (프리셋 공유)
  variable: CardRef[]            # 변주분 (프리셋 고유)
```

## 기록 카드 effect

```yaml
# effect = 기록 카드가 일으키는 보상·대가. 6종.
# 철학: 한 런 = 영웅의 일대기. 덱 = 생애 총체(전승=얻은 것·기록=겪은 사건). 헤라클레스 결.
# 전투(battle·fate)는 effect 필드 없음 — 보상은 전투 종류·stage로 자동.
#   event·chance만 effect를 카드에 박는다.

발생 매트릭스:
  battle (일반 대적자)              -> encounter(직업 전용)
  event                            -> encounter(공용)
  fate   (스테이지 보스 1·2·4·5·7·8) -> growth(일반) + TODO(조우매핑)
  fate   (챕터 보스 3·6·9)          -> growth(특수) + TODO(조우매핑)
  chance (행운)                    -> growth(일반)
  chance (불운)                    -> ordeal
  # TODO(사건효과): event의 옛 bind/crossing/parting 잔존/폐기 미정 (공용 조우로 대체 검토 중)
  # TODO(조우매핑): fate·chance 불운·crossing이 주던 조우 = 새 2축 어디에 붙나 (encounter 정의 참조)

encounter (조우): 전승 드래프트 (3장 제시 -> 1택). 2축 분류.
  # 옛 '일반=common~epic / 특수=legendary' 등급 기반 분류 폐기 (06-12). 아래 2축으로 재편.
  축1 (직업): 직업 전용 | 공용
  축2 (계통): 일반=인물 | 특수=인물 외(장비·기도·권능)
  4갈래 (영문키 = 자리표, 철님 확정 대기):
    직업-일반  class_unit    직업 전용 인물
    직업-특수  class_relic   직업 전용 장비·기도·권능
    공용-일반  common_unit   공용 인물
    공용-특수  common_relic  공용 장비 (기도·권능은 공용 풀 없음 -> 장비만)
  매핑: battle -> 직업 전용 조우 / event -> 공용 조우
  TODO(제시): 각 조우가 일반/특수 중 무엇을·몇 장 제시하나 (제시 방식 후순위)
  TODO(조우매핑): fate·chance 불운·crossing이 주던 조우를 새 2축 어디에 붙이나
  TODO(부속): 스킵·등급 도배 금지·덱 상한·최초 편성 조우(스킵 불가, 고정5+조우5=10)를 새 2축에 어떻게 얹나

growth (성장): 영웅 본체 변화 — 3장 1택
  일반 (스테이지 보스 / chance 행운):
    공격력 +1 (최대치↑·반복 가능) · 최대 체력 +3 (반복 가능)
    첫 턴만 이동 2회 (1회성) · 첫 턴만 특기 비용 0 (1회성)
  특수 (챕터 보스 전용):
    특기 비용 0  <->  특기 비용 2 + 효과 2배   (상호 배타 — 하나 고르면 반대쪽 빠짐)
    시작 드로우 +1 · 첫 턴만 의지 2 시작 / 전부 1회성
    # 챕터 보스 3명 < 4종 -> 소진 없음

bind (인연): 인물 카드 1장 강화 — 셋 중 하나
  의지 코스트 -1 (0 미만 X) · 공격력 +1 · 체력 +2

crossing (교차): 전승 교체 = parting + encounter
  덱 랜덤 1장 잃고(전설 제외) -> 조우 3장 1택 획득   # 어느 조우 = encounter TODO(조우매핑)

parting (헤어짐): 덱에서 랜덤 1장 제거 (전설 등급 제외) — 1장

ordeal (시련): 악조건 전투 — 뚫으면 encounter   # 어느 조우 = encounter TODO(조우매핑)
  악조건 4종, 배틀 시작 시 랜덤 1택 (전부 그 배틀 유지, 아래로 갈수록 강함):
    1. 적 대적자 방어도 10 보유 시작
    2. 적 대적자 공격력 +2 보유 시작
    3. 적 대적자 보호막 2겹 장착 시작
    4. 적 대적자 매 턴 +1 드로우
  패배 = 일반 전투와 동일 (대적자 사망 = 런 패배)
```

## 기록 카드 예시

```yaml
- id: prologue_courage
  kind: prologue
  persona: courage
  title: "불타는 마을, 두 자매"
  # description·quote = 작가 창작 (narrative_ssot.md)

- id: battle_bandit_raid
  kind: battle
  title: "도적 침공"
  description: "한밤, 마을 어귀에 칼이 든다."
  adversary: { id: ionia_remnant_warrior }    # 일반전 hp 10
  enemy_decks:                                 # 프리셋 2종 (시뮬 후)

- id: event_recruit
  kind: event
  title: "거두어 달라는 신병"
  description: "라키아의 아이가 검을 들고 선다."
  effect: [ bind ]                             # 인물 강화 (복합 예: [bind, parting])

- id: chance_omen
  kind: chance
  category: 행운
  title: "길조"
  description: "까마귀가 같은 곳으로 난다."
  effect: growth                               # 행운 -> 일반 성장

- id: fate_phrygion
  kind: fate
  title: "성급한 프리키온"
  description: "황금에 눈먼 두목과 마주 선다."
  adversary: { id: phrygion }                  # stage 1 = 스테이지 보스 -> growth(일반) + 조우(매핑 TODO)
  enemy_decks:                                 # 프리셋 3종 (시뮬 후)
```

## 적 덱 생성 (enemy_decks)

```yaml
적도 자기 덱으로 배치·등장·이동·격돌 (대칭). 그 덱을 어떻게 채우나.

설계 의도:
  대적자 카드 = 오더 팩 단위 고정 (stage1 배틀의 대적자는 매번 동일)
  그 대적자의 덱  = 런마다 달라짐 (사전제작 프리셋 중 랜덤 1택)
  → "같은 a인데 마주칠 때마다 조금 다르네"

프리셋 결 (절차생성 X — 작가가 짠 완성 덱들):
  각 대적자 = 덱 프리셋 N벌 보유 (스테이지 진입 시 랜덤 1택, 통째로)
  프리셋 1벌 = core(공유) + variable(고유):
    core (개성분, 프리셋끼리 공유):
      - 의지 커브 저점·균형 보장 (저코 잡졸 → AI 1턴부터 전개 가능)
      - 그 대적자의 변치 않는 색 (필수 카드)
      - 머릿수 살 (중립 neutral_card: enemy · 직업 카드)
      (우리 편성 고정 5장을 적에게 미러링한 발상)
    variable (변주분, 프리셋마다 다름):
      - 프리셋의 정체를 내는 카드 (공격형/수비형/함정형 등)
      - 같은 대적자라도 프리셋마다 다른 인상
  → 절차추첨·풀·가중치 없음. 완성 덱을 통째로 부르기만.

프리셋 개수:
  일반전 대적자           2종
  스테이지 보스·챕터 보스   3종

규모 (적 hp 위계와 연동, 프리셋 1벌 기준):
  일반전(hp 10)               20장 = core 15 + var 5
  운명전·스테이지 보스(hp 20)   30장 = core 20 + var 10
  챕터 보스(hp 30)             30장 = core 20 + var 10
  # 덱 크기 = 풀 크기(안전마진). 한 전투에 다 안 뽑힘.
  #   넉넉히 둬 적 AI가 카드 떨어져 나뒹구는 꼴 방지.

추첨 시점·범위:
  시점 = 스테이지 진입 (카드팩 확정과 동시) — 그때 그 스테이지 배틀들의 프리셋 굳음
  범위 = 그 스테이지 내내 고정 (한 런 안 같은 대적자 = 같은 프리셋)
  재추첨 = 다음 런 (또는 스테이지 재진입)
  → 한 스테이지는 학습 가능, 런마다 변주

[MVP] 프리셋 1벌만 있어도 구조는 성립 (enemy_decks[] = 1개):
  → 데모에선 프리셋 1개부터, 변주는 콘텐츠로 확장
  → 스키마가 N벌을 수용하므로 코드 변경 없이 늘어남

펜딩:
  - 실제 카드 목록 (core·variable에 박을 카드 — 능력치 검증 뒤 작가 박음)
  - 챕터 보스가 어느 기록 kind로 들어가나 (현재 fate는 스테이지 보스 결 — 챕보 매핑 미명시)
```

## 키워드·효과·능력치 → specs/mechanics.md

```yaml
# 키워드(트리거·상태)·효과·효과 점수표·능력치 기준선·타입 계수·토큰 = specs/mechanics.md SSOT.
# cards.md는 카드 데이터 스키마만 보유 (중복 정의 제거).
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
