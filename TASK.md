# 첫 실험 — 카드 시스템 구현 (Claude Code 전용)

> 이 파일은 Claude Code 첫 구현 실험의 시작점.
> 한 바퀴 돌고 나면 위키 본문을 조정하는 결로 사용.

## 진입점

```yaml
1. specs/cards.md 읽음 (카드 스키마 + 키워드)
2. specs/combat.md 읽음 (전투 시스템)
3. content/orders/01_theodora/characters.md 읽음 (실제 인물 카드)
4. 아래 작업 진행
```

## 환경

```yaml
엔진:    Unity 6.3 LTS
언어:    C#
프로젝트: Chronicle-Game 레포 (Unity 6.3 URP 2D 골격 + asmdef 있음)
어셈블리: Chronicle.Core, Chronicle.Unity
```

## 작업 목표

### A. 카드 데이터 모델 (Chronicle.Core)

```yaml
파일: Assets/_Project/Scripts/Core/Cards/Character.cs
내용:
  - specs/cards.md 의 Character 스키마 → C# class 또는 ScriptableObject
  - enum: Race, TimeOfDay, Hierarchy, AttackType
  - Hierarchy = { Human, Hero, Mob, Calamity }
  - Keyword 클래스 (3 종: Personal, AdversaryOnly, Starting)
  - 작동 방식 (Passive, Active, GuidanceTrigger)

검증:
  - characters.md 의 인물 카드를 C# 데이터로 표현할 수 있어야 함
  - 컴파일러가 정합 강제하면 더 좋음
```

### B. 스토리 카드 모델

```yaml
파일: Assets/_Project/Scripts/Core/Cards/StoryCard.cs
내용:
  - specs/cards.md 의 StoryCard 결로 추상 class + 4 종 (Battle/Event/Chance/Fate)
  - 보상 정의: 카드 종류별 보상 풀
  - 인물 참조 (CharacterRef)

검증:
  - content/orders/01_theodora/courage/cards.md 의 카드를 데이터로 표현
  - fate 카드의 대적자 참조 작동
```

### C. 인물 풀 + 참조 결산

```yaml
파일: Assets/_Project/Scripts/Core/Cards/CharacterPool.cs
내용:
  - 인물 카드 풀 (id → Character 매핑)
  - CharacterRef 받으면 인물 카드 반환하는 메소드
  - 같은 id 여러 인스턴스 가능 (졸병 풀)

검증:
  - GetCharacter("bandit_grunt") → 도적 졸병 카드
  - BattleCard.enemies = [{ id: "bandit_grunt", count: 3 }] →
    실제 인스턴스 3개 생성
```

### D. 최소 예시 실행

```yaml
파일: Assets/_Project/Scripts/Unity/MainEntry.cs (또는 비슷)
내용:
  - 챕터 1 스테이지 1 페이즈 1 카드 한 장 인스턴스화
  - 그 카드의 적 부대 콘솔 출력 (Debug.Log)

예상 출력:
  Stage: 라키아의 들개
  Phase 1 Card 1: 마을 입구의 도적
  Enemies:
    - 도적 졸병 (warrior, attack=3, hp=1) ×2
```

## 받을 결과

```yaml
다음 단계:
  1. Claude Code가 specs/cards.md 결로 위 4 영역 구현
  2. 막힌 부분 보고:
     - 모호한 부분 (스키마 부족)
     - 충돌 (정합 깨지는 부분)
     - 추가 결정 필요한 부분
  3. 그 결과 받아 위키 specs/ 조정
  4. 운영 안정화 (다음부터 자동 적용)
```

## 짚어야 할 부분 (Claude Code 답변에서 받고 싶은 것)

```yaml
- 스키마로 부족한 부분?
- 예시 카드의 모호함?
- 4축 정합을 타입 시스템에 표현할 방법?
- BattleCard.enemies CharacterRef로 충분한가?
- 시스템적으로 빠진 부분?
- 코드의 첫 어색함?
```

## 코드 구조 (제안, Claude Code가 변경 가능)

```yaml
프로젝트 구조:
  Assets/_Project/Scripts/
    Core/
      Cards/
        Character.cs
        StoryCard.cs
        CharacterPool.cs
        Keyword.cs
        Enums.cs           # 공통 enum
      Combat/
        (전투 결산 — 다음 실험)
    Unity/
      MainEntry.cs         # 진입점
      ScriptableObjects/   # 인물·카드 SO
    Data/
      Characters.json      # 또는 SO 에셋
      Cards_Courage_1_1.json

규모:
  코드 전체 200~400줄 (첫 실험)
  복잡한 결 X (전투 결산은 다음 실험)
```

## 펜딩

```yaml
- 스키마: specs/cards.md 본문 정정이 필요 (큰 정정 — 키워드 3풀·작동 3방식·의지 비용 반영)
- 콘텐츠: content/orders/01_theodora/ 정정 (위계 노출, 행동 타입 적용)
- 위키 본문 정정 후 Claude Code 부팅
```
