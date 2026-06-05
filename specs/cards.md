# 카드 스키마

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
  - spell        # 기도
  - equipment    # 장비
  - stratagem    # 책략 — 칸 지정 발동 (기도와 말/칸으로 대응)
  # ── 기록 카드 (Record) — 페이즈 진행, 10장 ──
  - story        # 스토리 — battle / event / chance / fate
  # ── 줄거리 카드 (Narrative) — 기록 10장과 별개 묶음, 오더 시작/끝 컷씬 ──
  - prologue     # 오더 시작 1회 (페이즈 밖, 보상 X) — 구 origin
  - epilogue     # 오더 끝 1회 (stage9 운명 승리 후, 페이즈 밖, 보상 X)

# 두 base 공통 — 출신 꼬리표 (하스스톤 set 결: 카드가 자기 소속을 안고 다님 → 단일 파일에서도 안전)
# id 규칙: id는 오더 내 유니크 (전역 X). order 필드가 오더를 식별 → (order, id)로 전역 구분.
TalismanCard (전승 공통):
  id · kind · order · tier(등급) · cost(의지 0~7) · name · flavor
  # 종류별 세부 = 아래 ### 인물/기도/장비/책략 카드

RecordCard (기록·줄거리 공통 스키마):
  id · kind · order · persona · title · description · quote
  # kind = 세부 종류: story 카테고리 = battle/event/chance/fate / 줄거리 = prologue·epilogue.
  #   (CardKind의 'story'는 카테고리명 — 데이터 kind 필드엔 battle 등 세부가 들어감, 'story'가 직접 들어가진 않음)
  # 등급·cost 없음. 종류별 세부 = 아래 ## 기록 카드 (story) / ### 줄거리 카드 (prologue·epilogue)
  # persona: courage|wisdom|justice — 인격 팩 소속 (옛 폴더 stories/courage/ → 카드 필드로 승격)

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
  - 양 진영 1명씩 시작부터 판에 (빈 판에 킹만)
  - 사망 = 그 진영 패배
  - 특기 보유 (signature_skill, 의지 지불, 턴 1회, 키워드·효과로 변동 가능)
  - 소환 비용 X (시작부터 판에)
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
  - 패에서 의지 지불해 소환 (비용 0~7, 킹 8칸 또는 자기 끝줄)
  - 패시브 + 등장 효과만 (능동 행동 X)
  - 직업 X (대신 덱 소속 1종)
  - 타입 = 보병·기수·전령·사수 중 하나 (+ 용병 펜딩)
  - 등급 = 보통/희귀/영웅/전설

공통:
  - 배틀 안 = 사용·사망 시 묘지 (그 배틀 재사용 X)
  - 배틀 사이 = 묘지 → 셔플 → 덱 복귀 (다음 배틀에 다시 패로)
  - 폐기 (discard) = 그 회차 영구 손실 (덱 복귀 X)
    → 헤어짐(parting)·교차(crossing)로 발생 — 덱 랜덤 1장 제거
```

### 기도 카드 · 책략 카드

```yaml
# 발동형 효과 카드 2종. 직업 전용(중립 X). 가르는 칼 = 조준 대상 (말/칸).
- 기도(Spell)     = 말 지정 — 효과가 말에 귀속 (움직이면 따라감)
- 책략(Stratagem) = 칸 지정 — 효과가 칸에 귀속 (발동 시 그 칸의 말이 맞음, 지나가면 해소)
- 의지 0~7 · 발동 후 묘지 · 배틀 사이 묘지->셔플->덱 복귀 · 폐기 시만 영구 손실
- 상세 스키마 = 아래 ## 정본 (기도·책략 카드)
```

### 장비 카드

```yaml
- 말에 부착되는 영속 물건 (기도 = 일시 효과 / 장비 = 영속 부착물 — 둘 다 말 쪽)
- 의지 0~7 (부착 시 지불) · 패에서 대상 1 지정
- 부착 대상: 킹 / 인물 (직업·중립 무관) · 진영: 내 편 / 상대(디버프 장비)
- 1대상 1장비 (새 장비 부착 시 기존 = 묘지, 하스 무기 교체 결)
- 대상 죽을 때까지 유지 · 사망 시 함께 묘지 · 배틀 사이 덱 복귀
- 단순 스탯 X — 효과군 (키워드 부여·조건부·지속·자해·트레이드오프) · 상세 = ## 정본
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
필드       # 말이 놓이는 칸 (소환 = 킹 8칸 또는 자기 끝줄)
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
  
  # 타입 (체스말 결)
  type: "soldier" | "archer" | "rider" 
      | "herald" | "mercenary" | "adversary"
                            # adversary = "adversary" 강제
                            # normal = 5종 중 하나 (용병은 턴제 결 펜딩)
                            # 한국어: 보병·사수·기수·전령·용병·대적자
  
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
  카드엔 인격 필드 없음 — 직업·특기·능력치 차이로 자연히 다른 카드.
  회차 인격이 어느 id를 쓸지 결정 (회차 단위 상태 — structure.md "인격" 참조)
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

## 기도 카드 (Spell) · 책략 카드 (Stratagem)

```yaml
# 둘 다 발동형 효과 카드 — 직업 전용(중립 X), 직업색의 핵심.
# 가르는 칼 = 조준 대상: 기도 = 말 지정 / 책략 = 칸 지정 (체스판의 두 요소).
#   기도 = 효과가 말에 귀속 -> 말이 움직이면 따라감 (추적)
#   책략 = 효과가 칸에 귀속 -> 발동 시 그 칸의 말이 맞음, 지나가면 해소 (고정)
# 둘 다 모든 직업이 보유 — 비중·성향이 직업색 (예: 예언자 = 책략·지연 특화)

# ── 공유 필드 ──
공유:
  id: string                # 영구 ID, snake_case
  name: string
  belongs_to: <직업 어휘>    # 직업 전용 — neutral 불가
  tier: "common" | "rare" | "epic" | "legendary"   # 서사(mythic) 없음 — 인물 전용
  cost: int                 # 0~7

  timing: "instant" | "delayed"     # 즉시 / n턴 뒤
  delay_turns: int                  # delayed 한정
  duration: "once" | "turns" | "battle"   # 1회 / n턴 / 배틀 내내
  duration_turns: int               # turns 한정
  visibility: "required" | "ignore" # 시야 필요 / 무관 (무관 = 안개 속도 가능)

  effect: string            # 효과 내용 = 자유 텍스트 (+수치). 피해/속박/버프·디버프/이동/회복/… (열린)
  triggers: Keyword[]       # 효과가 참조하는 트리거 (보유 X — 예: "결속된 대상에게"). 없으면 생략

발동 결:
  - 의지 지불해 발동, 발동 후 묘지 (배틀 사이 = 묘지 -> 셔플 -> 덱 복귀)
  - 반격 없는 일방 효과 (격돌과 달리 패를 태워 일방으로 작용)

# ── 기도 (Spell) — 말 지정 ──
Spell:
  <공유 필드>
  target: "one" | "many" | "side_all" | "type_all" | "adversary"
    # one      = 말 1
    # many     = 말 N (지정)
    # side_all = 진영 전체 (내 편 전부 / 적 전부)
    # type_all = 병종 전체 (보병·사수·기수·전령… — 종족 X)
    # adversary= 대적자(킹) 지정
  side: "enemy" | "ally" | "ally_normal" | "any"
    # ally = 아군(대적자 포함) / ally_normal = 아군 중 일반만 / any = 적·아군 전부
  match: "on_cast" | "continuous"   # type_all 한정 — 발동 시점만 / 지속 매칭(이후 등장도)

# ── 책략 (Stratagem) — 칸 지정 ──
Stratagem:
  <공유 필드>
  mode: "fixed" | "placed" | "attached"
    # fixed    = 고정 범위 자동 발동 (유저 조작 X — 예: 내 대적자 주변 3x3)
    # placed   = 사용 가능 레인지 안에서 유저가 모양을 놓음 (예: 레인지 3x3 안에 2x2)
    # attached = 말을 닻으로 범위가 그 말 따라 이동 (효과는 말 주변 칸, 말 자신 X — 희귀)
  shape: "row_n" | "col_n" | "nxn" | "diag_n" | "row_full" | "col_full" | "single"
    # row_n=가로 n칸(왼->오) / col_n=세로 n / nxn=사각(좌상단 기준) / diag_n=대각선(우하향, 좌상단->우)
    # row_full=가로 전체 줄 / col_full=세로 전체 줄 / single=단일 칸
  origin: "absolute" | "my_adversary"   # 절대 지정 / 내 대적자 주변 (fixed와 연동)
  range: string             # placed 한정 — 지정 가능 레인지 (예: "3x3")
  attach_to: string         # attached 한정 — 닻 말
  side: "ally_only" | "enemy_only" | "both"   # 칸 효과의 피아 (fixed 포함 전부 보유)

조준 제한 (공통):
  - 시야 안만 (visibility=required) — 안개 속 못 겨냥. visibility=ignore면 예외
```

## 장비 카드 (Equipment)

```yaml
Equipment:
  id: string                # 영구 ID, snake_case
  name: string              # "방패의 무게"
  belongs_to: <직업 어휘>    # 직업 전용 — neutral 불가
  tier: "common" | "rare" | "epic" | "legendary"   # 서사(mythic) 없음 — 인물 전용
  cost: int                 # 0~7 (부착 시 지불)

  attach_target: "king" | "unit"   # 킹(대적자) / 인물 (직업·중립 무관)
  attach_side: "ally" | "enemy"     # 내 진영 / 상대 진영 (디버프 장비 — 적 장비 슬롯 점유)

  effect: string            # 자유 텍스트 — 키워드 부여·조건부·지속 패시브·피해(자해)·트레이드오프
                            #   예: "내 턴 시작 시 hp -1, 공격력 +2" (대가 있는 강화)
  keywords: Keyword[]       # 부착 대상에 합산 (중복 = 기존 유지, 추가 무시)

부착 결:
  - 의지 지불해 부착 (패에서 대상 1 지정)
  - 1대상 1장비 — 새 장비 부착 시 기존 = 묘지 (하스 무기 교체 결)
  - 효과는 대상(말)에 귀속 — 말이 움직이면 따라감
    (말/칸 칼: 장비·기도 = 말 쪽 / 책략 = 칸 쪽. 단 장비 = 영속 부착물 / 기도 = 일시 효과)
  - 부착 대상이 죽을 때까지 유지 (스스로 못 뗌 — 해제 효과로만)
  - 대상 사망 시 = 함께 묘지 · 배틀 사이 둘 다 덱 복귀
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
# 옛 4고정조합(human=낮·여명 / horde=황혼·밤) 폐기 — 무리=황혼·밤 묶임 해제
```

## 태생 ↔ 시간대 매핑

```yaml
태생 (4종, 작품 결 — 카드 고정 속성):    낮 / 여명 / 황혼 / 밤
시간대 (3종, 메커니즘 — 매 턴 변동):     낮 / 경계 / 밤

매핑 (태생 → 강림 자격 시간대):
  태생 낮   → 시간대 낮
  태생 여명 → 시간대 경계
  태생 황혼 → 시간대 경계
  태생 밤   → 시간대 밤
  # 경계만 여명·황혼으로 세분 (낮/밤은 그대로). 같은 단어지만 축이 다름.

용도:
  - 강림 트리거 자격: 카드 시간대 = 현재 시간대
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
# 수호자 (guardian) 폐기 (5/17) — 헥토르·아이아스·펠레우스는 전사 흡수

본질:
  - 대적자가 어떤 결의 영웅인지 결정
  - 그 직업의 덱은 직업 전용 카드 + 중립 인물로 묶임
  - 직업별 특기·기도·인물·장비 카드 풀이 다름

카드 분배 규칙 (하스 결):
  기도 = 직업 전용 (중립 X)
  장비 = 직업 전용 (중립 X)
  인물 = 직업 전용 + 공용(중립) — 셋 중 인물만 중립 있음
  → 직업색은 기도·장비가 만든다 (중립 인물은 머릿수)

덱 소속 (belongs_to):
  - 기도·장비 = 한 직업 전용 (단일, neutral 불가)
  - 일반 인물 = 한 직업 전용 또는 중립 (neutral)
  - 대적자 = null (직업은 class 필드로)

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
                       특기: 본인 8방향 8칸 빈 칸에 보병 1명 소환
  
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
                       특기: 의지 1, 사용한 턴에 본인이 1회 더 이동 (격돌 진입 가능)
  
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
명칭은 유지, 이동 = 체스 기물 결 (5/31 확정). 이동·전투·시야 한 묶음.

  보병   soldier   — 폰 결
    이동:  앞뒤 1~2칸 (세로 직진, 좌우 X, 막힘 — 통과 X)
    전투:  격돌 — 앞뒤 칸 (좌우·대각 X → 측면 약점)
    돌파:  적 끝줄 도달(=돌파) → 다음 턴부터 매 턴 적 대적자를 관통 공격 (combat.md "돌파·관통" 참조)
    시야:  1

  기수   rider     — 룩 결
    이동:  직교(상하좌우) 1~2칸 (막힘 — 통과 X)
    전투:  격돌 (적 칸 진입)
    돌파:  적 끝줄 도달 시 가능 (보병과 동일 — combat.md 참조)
    시야:  1

  전령   herald    — 비숍 결
    이동:  대각 1~2칸 (막힘 — 통과 X)
    전투:  격돌
    돌파:  적 끝줄 도달 시 가능 (combat.md 참조)
    시야:  1

  사수   archer    — 우리만의 말 (이동 ≠ 공격)
    이동:  1칸 / 가로·세로
    사격:  8방향(상하좌우+대각) 1칸 / 시야 안 적만 (일방, 반격 없음, 사격 시 위치 노출)
           # [2026-06-01] 가로세로 2칸 → 8방향 1칸 (대각 막힘 해소 + 거리 단축). 사수 효용 개선
    돌파:  원리상 가능하나 이동 1칸이라 비효율 → 본대 화력 역할 (combat.md 참조)
    시야:  1

  대적자 adversary — 킹 결
    이동:  8방향 1칸
    전투:  격돌 (공격력 0 → 반격으로 0, 약한 심장)
    시야:  1

  # 용병 mercenary: 턴제 결 펜딩 (옛 병사형/사수형 택1)

본질:
  - 타입 = 이동하는 모양 (체스 기물의 명료함)
  - 카드 = 그 말의 영혼 (능력치·키워드 = 덱빌딩의 개성)
  - 전진·후퇴 개념 X — 체스처럼 매 턴 어느 말을 움직일지 일일이 선택
  - 보병 = 앞뒤 침(좌우 X) → 측면 약점 → 배치 비가역·신중 (진형의 핵)
  - 기수(직교)·전령(대각) = 사각이 반대라 보완적
  - 근접(보병·기수·전령·대적자) = 격돌 (이동해 진입, 동시 교환, combat.md 참조)
  - 사수 = 사격 (이동≠공격, 일방, 시야 안 적만)
  - 대적자 카테고리 = 대적자(킹) 타입 강제 (정합)
  - 일반 카테고리 = 보병·기수·전령·사수 중 하나 (+ 용병 펜딩)
  - 보병 1~2칸 / 기수·전령 1~2칸 (신중 1칸 vs 과감 2칸)
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
  인물 / 기도 / 장비 (기록 X)

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

## 기록 카드 (Battle / Event / Chance / Fate) · 줄거리 카드 (Prologue / Epilogue)

```yaml
# 기록 base — 덱 밖, 등급(tier)·의지비용(cost) 없음, 페이즈 진행 단위, 결과 비가역.
# effect 정본·발생 매트릭스 = 아래 ## 기록 카드 effect.

RecordCard:
  id: string
  kind: battle | event | chance | fate | prologue | epilogue
  order: string                  # 소속 오더 (01_theodora) — 전승·기록 공통 꼬리표
  persona: courage | wisdom | justice
  title: string
  description: string            # 상황 = 실존 대상(물건·사건) 객관 서술 (감상·1인칭 X)
  quote: string                  # 대사 = 주인공의 생각 또는 대상의 말
  # 면(face) 3종 = unknown -> back -> front. 동선 = structure.md "Phase 진행" SSOT

NarrativeCard (줄거리 — 프롤로그·에필로그):   # 기록 10장과 별개, 오더 시작/끝 컷씬
  kind: prologue | epilogue
  id: prologue_{persona} | epilogue_{persona}   # persona = courage|wisdom|justice (예: prologue_courage)
  # 상속: order·persona·title·description·quote. effect·face·분기 없음 (순수 컷씬).
  # id는 오더 내 유니크 — order 필드가 오더 구분 (전역 유니크 X). 짝·줄 = (order+persona+kind).

BattleCard:                      # 일반 대적자 전투 (페이즈)
  kind: battle
  adversary: CharacterRef        # 적 대적자(킹) — 일반전 hp 10
  enemy_decks: EnemyDeck[]       # 프리셋 2종 (## 적 덱 생성)
  # 보상: 승리 -> encounter(일반). effect 필드 없음 (전투가 곧 트리거).

FateCard:                        # 스테이지 보스 (각 stage 끝, stage 1~9)
  kind: fate
  adversary: CharacterRef        # 스테이지 보스 hp 20 / 챕터 보스 hp 30
  enemy_decks: EnemyDeck[]       # 프리셋 3종
  # 보상 = stage 위치로 자동 분기 (카드에 안 박음):
  #   stage 1·2·4·5·7·8 (스테이지 보스) -> encounter(일반) + growth(일반)
  #   stage 3·6·9       (챕터 보스)    -> encounter(특수) + growth(특수)
  # effect 필드 없음.

EventCard:                       # 비전투 확정 사건 (예고 — 앞면 보고 감내)
  kind: event
  effect: Effect[]               # 1~2개 복합 가능. 허용: bind | crossing | parting

ChanceCard:                      # 위장된 우연
  kind: chance
  category: 행운 | 불운           # 내부 구분만 (외부 표기 = "우연")
  effect: Effect                 # 단일. 행운 -> growth(일반) / 불운 -> ordeal
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
  battle (일반 대적자)              -> encounter(일반)
  fate   (스테이지 보스 1·2·4·5·7·8) -> encounter(일반) + growth(일반)
  fate   (챕터 보스 3·6·9)          -> encounter(특수) + growth(특수)
  event                            -> bind | crossing | parting   (1~2개 복합)
  chance (행운)                    -> growth(일반)
  chance (불운)                    -> ordeal
  # 복합 = event 전용. chance는 단일.

encounter (조우): 전승 드래프트 — 전투 보상 전용
  제시 3장 1택 · 풀 = 해당 오더 직업 고유 + 중립 · 계통 제한 없음(인물·기도·책략·장비)
  일반: common~epic (3장 같은 등급 도배 X — 예: [common, epic, common] OK)
  특수: legendary
  스킵: 가능 (0장 허용)
  ※ 최초 편성 조우 = 일반 · 스킵 불가 · 1택 x5 (고정 5 + 조우 5 = 시작 덱 10)

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

crossing (교차): 전승 교체 = parting + encounter(일반)
  덱 랜덤 1장 잃고(전설 제외) -> 일반 조우 3장 1택 획득

parting (헤어짐): 덱에서 랜덤 1장 제거 (전설 등급 제외) — 1장

ordeal (시련): 악조건 전투 — 뚫으면 encounter(일반)
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
  adversary: { id: phrygion }                  # stage 1 = 스테이지 보스 -> encounter(일반)+growth(일반)
  enemy_decks:                                 # 프리셋 3종 (시뮬 후)
```

## 적 덱 생성 (enemy_decks)

```yaml
적도 자기 덱으로 소환·이동·격돌 (6/1, 대칭). 그 덱을 어떻게 채우나.

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
      - 머릿수 살 (중립·직업 카드)
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

## 능력치 기준선 (바닐라 · 타입 계수)

```yaml
바닐라 합의:
  의지 1당 능력치(공격력 + 방어도 + 생명력) 합 = 타입 계수
  효과 없는 깡통(바닐라)의 기준선. 효과 있으면 점수만큼 차감.

타입 계수 (의지 × 계수, 버림):
  보병   ×3      느린 대신 압도적 스탯 (진형의 핵)
  사수   ×2      사격(반격 없는 일방 공격)의 대가, 최저
  기수   ×2.5    기동형
  전령   ×2.5    기동형
  → 기수·전령은 효과가 본체 (바닐라보다 효과 카드 위주)

방어도 · 생명력:
  같은 자원(방어 총량). 생명력은 효과 표적용 별도 태그.
  일반 인물: 방어도가 곧 체력 / 생명력은 마지막 마진(기본 1)
  누적 생명력(스테이지 단위)은 대적자만 (combat.md)
  분포 = 공격 vs 방어총량 둘 사이 배분

효과 차감 (b방식):
  효과 점수만큼 합에서 차감 후 배분. 도구가 수치까지 산출, 작가가 튜닝.
  공식은 기준선이지 감옥이 아님 — 의도적 일탈은 작가 결.
```

## 키워드 시스템

```yaml
키워드 = 트리거(언제) + 효과(무엇을) 분리 조립.
카드 = 능력치 + (있을 수도 없을 수도 있는) 키워드.
트리거는 공장 고정(7종), 효과는 자유 조립 — 둘이 끼워져 카드가 양산된다.
```

### 트리거 (언제 발동 — 7종 고정)

```yaml
등장:  배치되는 즉시
퇴장:  사망하는 즉시 (적 턴에도). 그 칸이 비워진 뒤 효과 발동
개시:  내 턴 시작 시 (여럿이면 컨트롤러가 순서 선택)
종료:  내 턴 종료 시
처치:  대적자 제외 적 인물을 '직접' 처치하고 살아남으면 (적 턴에도). 동시 사망 시 불발
동조:  자기 진영 대적자 특기 발동 직후
인도:  카드 태생 시간대가 될 때 — 그 시간대 창에만 효과 켜짐, 매 순환 반복 (구 '강림')

# 효과 내용·수치는 트리거에 안 묶임 — 아래 효과로 자유 조립.
# 트리거 간 동시 발동 우선순위 = 펜딩 (시뮬에서 확정).
```

### 상태 (상시 성질)

```yaml
신속:  이동력 +1칸 (방향은 타입 고유 유지). 소환 턴 [대기]는 해제 X
돌격:  소환 턴 [대기] 무시 (그 턴 이동·격돌·사격 가능)
신성:  단일 지정 기도(targeting: single) 면역 (적·아군 모두). 범위 기도(area)엔 적중
       → 단일 지정 면역이라 아군 버프(결속·회복)도 못 받음
수호 · 은신:  펜딩 (턴제 정의 미완)
```

### 효과 (무엇을 — 범주 점수화)

```yaml
트리거에 안 묶임, 자유 조립.
점수화: 효과 점수만큼 능력치 합에서 차감 (위 능력치 기준선 참조).
임시 부여는 0점이라, 임시 반복 카드(인도 등)는 바닐라 스탯이 낮은 게 정상 (변동성을 스탯 할인으로 삼음).

효과 점수표 (신속 1점 기준):
  신속    1   이동 +1칸
  돌격    2   소환 턴 [대기] 무시
  보호    2   보호막 부여
  신성    2   단일 지정 기도 면역
  인도    1   시간대 반복 트리거 (임시 부여 0이라 최소 몸값 1)
  피해    데미지 1당 1
  봉쇄    기본 2 + (n−1)턴당 1   (n턴 대기. 1턴=2 / 2턴=3 …)
  소환    기본 2 + 토큰(공 + 생)   · 1턴 1체 · 깡통 토큰만
  부여    스탯 총합 1당 1 × 지속배수 (임시 0 / 영구 1 / 매 턴 반복 ×2)
# 옛 효과 키워드(기습·소환·[피해]) = 범주로 흡수 (소환·피해 정의됨)
```

### 메커니즘 키워드 (카드 종류 전용)

```yaml
결속 (기도):
  내 유닛 둘을 지정해 묶고 효과 부여. 대상 = 일반 유닛만 (대적자 X).
  한 유닛 한 결속만 (중첩 X). 한쪽 사망 시 살아남은 쪽 효과 해제 (동반 사망 없음).
    버프 해제 시 현재 체력 유지, 최대치만 조정.
  결속 상태·짝은 상대도 보임 (짝이 시야 밖이면 누구인지 안 드러남). 수치는 카드별.

회수 (장비):
  부착 유닛 사망 시 장비가 묘지로 안 가고 패로 복귀 (배틀당 1회).
  복귀 후 두 번째 부착 유닛 사망 시 일반 장비처럼 묘지행. 배틀 종료 시 리셋.
```

### 토큰

```yaml
토큰 = 카드 풀 밖의 생성물.
  키워드(등장·〈개시〉 소환 등)로만 필드에 생성.
  덱·패·묘지를 거치지 않음. 사망 시 덱 복귀 없이 소멸.
  예: 라키아 풋내기 신병.
```

### 폐기·개명

```yaml
모병·보강 → 〈개시〉 트리거 + 효과로 재서술 (키워드 삭제)
강림 → 인도 / 치명타 → 처치 (개명)
인내 → 폐기 (라운드 전투 유령 — 완전 턴제엔 자리 없음)
기습·소환·[피해] → 효과 범주로 흡수 (펜딩)
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
