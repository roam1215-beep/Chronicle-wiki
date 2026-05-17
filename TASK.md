# 첫 실험 — 카드 데이터 모델 (Claude Code 전용)

> Claude Code의 첫 구현 진입점. Core 레이어의 카드 데이터 결만.
> 한 바퀴 돌면 위키 본문 정합 검증, 다음 실험으로 넘어감.

## 진입점

```yaml
1. STATE.md 부팅
2. GLOSSARY.md 어휘 결 확인
3. specs/cards.md     (카드 스키마 + 키워드 시스템)
4. specs/combat.md    (라운드 2단계 — 전투 결산은 다음 실험)
5. specs/structure.md (5층 구조 + 인격)
6. content/orders/01_theodora/characters.md (실제 인물 카드 3장)
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
  Faction:   Surface | Labyrinth | Border
  Race:      Human | Horde
  Birth:     한낮 | 여명 | 황혼 | 심야  (또는 영문: Noon/Dawn/Dusk/Midnight)
  TimeOfDay: Day | Border | Night
  Category:  Adversary | Normal
  Class:     Seer | Hunter | Guardian | Bard
             | Wanderer | Warrior | Sovereign | Priest
  Type:      Soldier | Archer | Rider | Herald | Mercenary | Adversary
  Tier:      Common | Rare | Epic | Legendary | Mythic
  Persona:   Courage | Wisdom | Justice | Temperance
  Trigger:   Onstage | Descend | Critical | Endure | Sync | Exit
                                # 등장·강림·치명타·인내·동조·퇴장
  CardKind:  Character | Spell | Equipment | Story
  SpellKind: Reusable | Consumable
  StoryKind: Battle | Event | Chance | Fate

검증:
  GLOSSARY.md의 어휘 결과 한국어 ↔ 영문 매핑이 1:1
```

### B. Character 데이터 모델 (Chronicle.Core.Card)

```yaml
파일: Assets/_Project/Scripts/Core/Card/Character.cs

내용:
  - specs/cards.md의 Character 스키마 → C# class (POCO, MonoBehaviour X)
  - 3패러미터: Attack / Defense / HP (int)
  - 시작 보호막: Shields (int)
  - 의지 비용: Cost (int? — adversary는 null)
  - 직업: Class? (adversary만, normal은 null)
  - 덱 소속: BelongsTo (Class? 또는 별도 enum "Neutral" 포함 결, normal만)
  - 타입: Type (adversary 카테고리 = Type.Adversary 강제)
  - 등급: Tier (adversary = Mythic 강제)
  - 인격: Persona? (adversary만)
  - 키워드: List<Keyword> — 트리거 + 효과/상태 자유 조합

정합 강제 (컴파일러 또는 생성자 검증):
  - Category.Adversary → Type = Adversary, Tier = Mythic, Class != null, BelongsTo = null, Persona != null, Cost = null
  - Category.Normal    → Type ∈ {Soldier, Archer, Rider, Herald, Mercenary}, Tier ≠ Mythic, Class = null, BelongsTo != null, Persona = null, Cost ∈ [0, 7]

검증:
  - characters.md 인물 3장 표현 가능:
    - 테오도라 (adversary / warrior / 용기 인격)
    - 발드      (adversary / warrior / 용기 인격, 적 진영)
    - 도적 졸병 (normal / 병사 / 중립)
```

### C. Spell / Equipment / Story 카드 모델 (Chronicle.Core.Card)

```yaml
파일:
  Assets/_Project/Scripts/Core/Card/Spell.cs
  Assets/_Project/Scripts/Core/Card/Equipment.cs
  Assets/_Project/Scripts/Core/Card/Story.cs

Spell:
  - SpellKind (Reusable | Consumable)
  - Cost (int)
  - BelongsTo (Class? — 직업 전용 또는 중립)
  - Tier
  - Keywords

Equipment:
  - BelongsTo (Class? — 직업 전용 또는 중립)
  - Tier
  - Effects (자유 텍스트 + 키워드)

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
    - 도적 졸병 (bandit_grunt / soldier / common / 중립) ×2
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
      Story.cs           # 스토리 카드 (Battle/Event/Chance/Fate)
      CharacterPool.cs   # id → Character 매핑
      CharacterRef.cs    # 인물 참조 + 수량
    (Combat / Map / Stage / Axis / Class / Type / Tier / Persona / Trigger는 다음 실험)
  Unity/
    MainEntry.cs         # 진입점 (최소 예시 실행)

규모:
  코드 전체 300~500줄 (첫 실험)
  전투 결산·시야·맵·자동 진군은 다음 실험
```

## 펜딩

```yaml
- 시스템 결로 박힘:
  - 스키마 큰 부분 결정 (3축·3패러미터·직업 8종·타입 6종·등급 5종·트리거 6종)
  - 키워드 시스템 본문화 (specs/cards.md)
  - 카드 종류 4종 (인물·기도·장비·스토리)

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
