# 첫 실험 — 카드 시스템 구현 (Claude Code 전용)

> 이 파일은 Claude Code 첫 구현 실험의 시작점.
> 한 바퀴 돌고 나면 위키 결을 조정하는 결로 사용.

## 진입점

```yaml
1. specs/cards.md 읽음 (카드 스키마 + 예시 결)
2. content/orders/01_theodora/characters.md 읽음 (실제 인물 카드 3장)
3. 아래 작업 진행
```

## 작업 목표

### A. 카드 데이터 모델

```yaml
파일: src/cards/Character.ts (또는 적절한 자리)
결:
  - specs/cards.md 의 Character 스키마 → TypeScript interface
  - 4축 enum (Faction, Race, Birth, Rank)
  - tier·class·persona enum
  - Blessing 인터페이스
  - CharacterRef 인터페이스

검증:
  - characters.md 의 3장 (theodora_dog_of_rakia / bald_lion_of_rakia / bandit_grunt) 을
    TypeScript 데이터로 박을 수 있어야 함
  - 컴파일러가 4축 정합 강제하면 더 좋음 (race=human → rank ∈ {human, hero} 등)
```

### B. 스토리 카드 모델

```yaml
파일: src/cards/StoryCard.ts
결:
  - specs/cards.md 의 StoryCard 결로 union type
  - BattleCard / EventCard / ChanceCard / FateCard 각각 박음
  - CharacterRef 로 인물 카드 참조 (id + count)

검증:
  - content/orders/01_theodora/courage/cards.md 의 카드 10장을 데이터로 박음
  - fate 카드의 adversary = bald_lion_of_rakia 참조 작동
```

### C. 인물 풀 + 참조 결산

```yaml
파일: src/cards/CharacterPool.ts
결:
  - 인물 카드 영구 컬렉션 (id → Character 매핑)
  - CharacterRef 받으면 인물 카드 반환하는 함수
  - 같은 id 여러 카드 가능 (붕어빵 풀 결)

검증:
  - getCharacter("bandit_grunt") → 도적 졸병 카드
  - BattleCard.enemies = [{ id: "bandit_grunt", count: 3 }] →
    실제 인스턴스 3개 생성
```

### D. 최소 예시 실행

```yaml
파일: src/index.ts (또는 main)
결:
  - 챕터 1 스테이지 1 페이즈 1 카드 한 장 인스턴스화
  - 그 카드의 적 부대 (CharacterRef 풀어서) 콘솔 출력
  
예상 출력:
  Stage: 라키아의 들개
  Phase 1 Card 1: 마을 입구의 도적
  Enemies:
    - 도적 졸병 (warrior, attack=3, hp=1) ×2
```

## 결과 받을 결

```yaml
다음 자리:
  1. Claude Code가 specs/cards.md 결로 위 4 자리 박음
  2. 막힌 자리 보고:
     - 모호한 자리 (스키마 부족)
     - 부딪힘 (정합 깨지는 자리)
     - 추가 결정 필요 자리
  3. 그 결 받아 위키 specs/ 조정
  4. 운영 결 박힘 (다음부터 자동 적용)
```

## 짚어야 할 자리 (Claude Code 답변에서 받고 싶은 결)

```yaml
- 스키마 결로 부족한 자리?
- 예시 카드의 모호함?
- 4축 정합 결을 타입 시스템에 박을 결?
- BattleCard.enemies CharacterRef 결로 충분한가?
- 시스템 결로 빠진 자리?
- 작은 코드 결의 첫 어색함?
```

## 코드 결의 자리 (제안, Claude Code 결로 변경 가능)

```yaml
프로젝트 구조:
  src/
    cards/
      Character.ts
      StoryCard.ts
      CharacterPool.ts
      types.ts            # 공통 enum
    data/
      characters.ts        # content/ 결을 TypeScript 결로
      cards_courage_1_1.ts # 챕터 1 스테이지 1 카드
    index.ts

도구:
  - TypeScript (strict mode)
  - 빌드: 단순 결로 (esbuild 또는 tsx)
  - 테스트: 단위 테스트 1~2개 (CharacterRef 풀기 등)

규모:
  코드 전체 200~400줄 결로 (첫 실험 자리)
  복잡한 결 X (전투 결산은 다음 실험)
```
