# 첫 실험 — 카드 데이터 모델 (Claude Code 전용)

> Claude Code의 첫 구현 진입점. Core 레이어의 카드 데이터 결만.
> 한 바퀴 돌면 위키 본문 정합 검증, 다음 실험으로 넘어감.

## 진입점

```yaml
1. STATE.md 부팅
2. GLOSSARY.md 어휘 결 확인
3. specs/cards.md     (카드 스키마 + 키워드 시스템)
4. specs/combat.md    (턴제 전투 — 전투 결산은 다음 실험)
5. specs/structure.md (5층 구조 + 인격)
6. content/cards/order_01_theodora/characters/ (인물 카드 3장 — adversaries.md + neutral.md)
7. 아래 작업 진행
```

## 환경

```yaml
엔진:    Unity 6.3 LTS (6000.3.10f1)
언어:    C#
프로젝트: Chronicle-game 레포 (Unity 6.3 URP 2D 골격 + asmdef 박힘)
어셈블리: Chronicle.Core (noEngineReferences: true) / Chronicle.Unity
```

## 작업 목표 — Core/Card 레이어 첫 구현

### A. 공용 enum (Chronicle.Core.Common)

```yaml
파일: Assets/_Project/Scripts/Core/Common/Enums.cs

enum 결:
  # Faction enum 폐기 (faction 필드 폐기 — 진영은 Birth가 흡수)
  Race:      Human | Horde
  Birth:     낮 | 여명 | 황혼 | 밤  (또는 영문: Noon/Dawn/Dusk/Midnight)
             # = 정치·종교 좌표 (낮=이오니아 / 여명=친이오니아 / 황혼=친도리아 / 밤=도리아). Race와 독립.
  TimeOfDay: Day | Border | Night
  Category:  Adversary | Normal
  Class:     Seer | Hunter | Bard
             | Wanderer | Warrior | Sovereign | Priest
  Type:      Soldier | Archer | Rider | Herald | Mercenary | Adversary
  Role:      Soldier | Archer   # 용병 variants 결 (Type 어휘 중첩, 의미 결 분리)
  Tier:      Common | Rare | Epic | Legendary | Mythic
  Persona:   Courage | Wisdom | Justice | Temperance
             # 회차 단위 상태용 — Character 필드 아님 (인격 분기는 직업·특기 차이로)
  Trigger:   Onstage | Descend | Critical | Endure | Sync | Exit
                                # 등장·강림·치명타·인내·동조·퇴장
  CardKind:  Character | Spell | Equipment | Story
  StoryKind: Battle | Event | Chance | Fate
  # SpellKind enum 폐기 (5/17 — 영구사망 결 폐기와 함께)

검증:
  GLOSSARY.md의 어휘 결과 한국어 ↔ 영문 매핑이 1:1
```

### B. Character 데이터 모델 (Chronicle.Core.Card)

```yaml
파일: Assets/_Project/Scripts/Core/Card/Character.cs

내용:
  - specs/cards.md의 Character 스키마 → C# class (POCO, MonoBehaviour X)
  - 3패러미터: Attack / Defense / HP (int? — 용병은 null)
  - 시작 보호막: Shields (int? — 용병은 null)
  - 의지 비용: Cost (int? — adversary는 null)
  - 직업: Class? (adversary만, normal은 null)
  - 덱 소속: BelongsTo (Class? 또는 별도 enum "Neutral" 포함 결, normal만)
  - 타입: Type (adversary 카테고리 = Type.Adversary 강제)
  - 등급: Tier (adversary = Mythic 강제)
  # 인격 필드 폐기 — 회차 단위 상태 (structure.md). Character.Persona 안 만듦
  - 키워드: List<Keyword> — 트리거 + 효과/상태 자유 조합 (용병은 공통)
  - variants: List<Variant>? — 용병만 (2개, role: Soldier·Archer)
  - signature_skill: SignatureSkill? — 대적자만 (필수, 일반=null)

Variant 클래스 (용병만):
  - Role: Role enum (Soldier | Archer)
  - Attack: int
  - Defense: int
  - HP: int
  - Shields: int

SignatureSkill 클래스 (대적자만):
  - Cost: int                  # 의지 비용 (기본 1)
  - Effect: string             # 효과 본문 (자유 텍스트)
  - Keywords: List<Keyword>    # 트리거 키워드 (능동 발동 결, 펜딩)

대적자 기본 스펙 (specs/cards.md 결):
  - Attack = 0 (대적자 기본 — 공격력 0, 관통으로 깎임)
  - Defense = 0
  - HP = 20
  - Shields = 0
  - 특기·키워드·카드 효과로 임시·영구 Attack 얻을 수 있음

정합 강제 (컴파일러 또는 생성자 검증):
  - Category.Adversary → Type = Adversary, Tier = Mythic, Class != null, BelongsTo = null, Cost = null, SignatureSkill != null
  - Category.Normal    → Type ∈ {Soldier, Archer, Rider, Herald, Mercenary}, Tier ≠ Mythic, Class = null, BelongsTo != null, Cost ∈ [0, 7], SignatureSkill = null
  - Type = Mercenary   → Variants = [2개, role: Soldier·Archer], Attack/Defense/HP/Shields = null
  - Type ≠ Mercenary   → Variants = null, Attack/Defense/HP/Shields = int

검증:
  - 인물 카드 표현 가능 (같은 인물의 인격별 분기 결로 3 카드):
    - theodora_courage (adversary / warrior / 용기 인격, 주연)
    - theodora_wisdom  (adversary / hunter / 지혜 인격, 주연)
    - theodora_justice (adversary / priest / 정의 인격, 주연)
    - bald_courage     (adversary / warrior / 용기 인격, 적)
    - bald_wisdom      (adversary / warrior / 지혜 인격, 적)
    - bald_justice     (adversary / sovereign / 정의 인격, 적)
    - [일반전 잡졸] (normal / soldier / 중립 — 결 미정, STATE 펜딩)
    - 변방의 문지기    (normal / soldier / 중립)
```

### C. Spell / Equipment / Story 카드 모델 (Chronicle.Core.Card)

```yaml
파일:
  Assets/_Project/Scripts/Core/Card/Spell.cs
  Assets/_Project/Scripts/Core/Card/Equipment.cs
  Assets/_Project/Scripts/Core/Card/Story.cs

Spell:
  - Id / Name
  - Cost (int, 0~7)
  - BelongsTo (Class? — 직업 전용 또는 중립)
  - Tier (common/rare/epic/legendary)
  - Effect (string, 자유 텍스트)
  - Keywords (List<Keyword> — 효과·상태만, 트리거 결 X)
  # SpellKind (Reusable/Consumable) 폐기 — 영구사망 결과 같이 폐기됨

Equipment:
  - Id / Name
  - Cost (int, 0~7 — 부착 시 지불)
  - BelongsTo (Class? — 직업 전용 또는 중립)
  - Tier (common/rare/epic/legendary)
  - Effect (string, 자유 텍스트)
  - Keywords (List<Keyword> — 부착된 인물 결에 더해짐)

Story (abstract):
  - StoryKind
  - Title / Description

  BattleCard : Story
    - Enemies: CharacterRef[] (id + count)
  
  FateCard : Story
    - Adversary: CharacterRef (count = 1)
  
  EventCard : Story
    - Effect: string
  
  ChanceCard : Story
    - Category: ChanceCategory (Crisis | Opportunity | Boon | Curse | Prophecy)
    - Effect: string

CharacterRef:
  - Id (string)
  - Count (int)
```

### D. CharacterPool + 최소 예시 실행

```yaml
파일:
  Assets/_Project/Scripts/Core/Card/CharacterPool.cs
  Assets/_Project/Scripts/Unity/MainEntry.cs

CharacterPool:
  - id → Character 매핑 (Dictionary)
  - GetCharacter(string id) → Character
  - Resolve(CharacterRef ref) → IEnumerable<Character> (count 만큼)

MainEntry (Unity 레이어):
  - 챕터 1 스테이지 1 페이즈 1 카드 1장(c1_s1_p1_card_1, "마을 입구의 도적") 인스턴스화
  - BattleCard.Enemies를 Pool로 풀어서 콘솔 출력

예상 출력:
  Stage: 라키아의 들개
  Phase 1 Card 1: 마을 입구의 도적
  Enemies:
    - [일반전 잡졸] (잡졸 결 미정 — STATE 펜딩) ×2
```

## 받을 결과

```yaml
1. Claude Code가 위 A~D 결로 구현
2. 막힌 부분 보고:
   - 스키마 부족한 자리
   - 정합 강제가 컴파일러 결로 표현 안 되는 자리
   - 키워드 시스템이 C# 결로 부족한 자리
   - 어휘 모호 자리
3. 그 결과 받아 위키 specs/ 조정
4. 다음 실험 부팅 (전투 결산 결로)
```

## 짚어야 할 부분 (Claude Code가 답변에서 짚어줄 자리)

```yaml
- 새 스키마로 부족한 부분 (특히 키워드 시스템)
- 카테고리 정합 강제를 타입 시스템에 표현할 방법 (sealed class? record? 별도 클래스?)
- 키워드 자유 조합 (트리거 + 효과 키워드)을 C# 결로 어떻게 박나
- [피해 효과] 어휘 펜딩 — 키워드 enum에 비워둠
- 능력치 펜딩 — 시뮬 후 채움
- BattleCard.Enemies = CharacterRef[]로 충분한가
- belongs_to "neutral" 결을 enum 결로 어떻게 표현 (별도 enum vs null vs Class? + bool)
```

## 코드 구조 (제안, Claude Code가 조정 가능)

```yaml
Assets/_Project/Scripts/
  Core/
    Common/
      Enums.cs           # 모든 enum 한 자리 (또는 결로 분리)
      Keyword.cs         # 트리거 + 효과/상태 자유 조합 결
    Card/
      Character.cs       # 인물 카드 (대적자 / 일반)
      Spell.cs           # 기도 카드
      Equipment.cs       # 장비 카드
      Story.cs           # 기록 카드 (Battle/Event/Chance/Fate)
      CharacterPool.cs   # id → Character 매핑
      CharacterRef.cs    # 인물 참조 + 수량
    (Combat / Map / Stage / Axis / Class / Type / Tier / Persona / Trigger는 다음 실험)
  Unity/
    MainEntry.cs         # 진입점 (최소 예시 실행)

규모:
  코드 전체 300~500줄 (첫 실험)
  전투 결산·시야·맵·이동은 다음 실험
```

## 펜딩

```yaml
- 시스템 결로 박힘:
  - 스키마 큰 부분 결정 (2축·3패러미터·직업 7종·타입 6종·등급 5종·트리거 6종)
  - 키워드 시스템 본문화 (specs/cards.md)
  - 카드 종류 4종 (인물·기도·장비·기록)

- 아직 펜딩:
  - [피해 효과] 어휘
  - 기습 결 세부 (배치 위치·공격 타입)
  - 소환 대상 결
  - 전령·용병 타입 이동·전투·시야 결
  - 능력치 수치 (시뮬 후 결정)
  - 키워드 강도 (등급별 차등)

- 부팅 순서:
  1. 이 TASK.md 진입
  2. Core/Common + Core/Card 구현
  3. 막힌 부분 보고 → 위키 specs/ 조정
  4. 다음 실험 (전투 결산)
```
