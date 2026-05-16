# 게임 구조

## 5층

```yaml
Hierarchy:
  Order:     인물 1명의 호 (확장팩 단위, 270 스토리 카드)
  Chapter:   큰 마디 (진행 단위, 카드 그릇 X)
  Stage:     중간 마디 (10장 = 9 일반 + 1 운명)
  Phase:     카드 시스템 (3장 또는 운명 1장)
  Battle:    전투 인스턴스 (1 전투 카드 = 1 Battle)
  Round:     Battle 최소 단위
```

## 카드 단위 (콘텐츠 그릇)

```yaml
Order (작품 그릇) = 270 스토리 카드
  └─ 3 인격 팩 × 90장

PersonaPack (한 회차) = 90장 = 9 스테이지 × 10장
  = 81 일반 + 9 운명

Stage = 10장 = 9 일반 + 1 운명
Phase 카드 = 3장 (일반 페이즈) 또는 1장 (운명 페이즈)

챕터 = 진행 단위로만 (카드 그릇 X)
인물 카드 = 카드 그릇 밖 (영구 컬렉션)
```

## Phase 진행 (선택-거부-감내)

```yaml
PhaseType:
  - normal:  3장 (선택·거부·감내)
  - fate:    1장 (운명 카드)

normal_phase_flow:
  1. 3장 노출 (Dark 또는 Type 뒷면)
  2. 유저 결단:
     - 1번 카드: 선택 (효과 발동)
     - 거부 카드: 거부 (효과 X)
     - 2번 카드: 감내 (자동, 거부 X)
  3. 발화 순서: 1번 → 2번 → 거부 카드
  4. 비가역

뒷면 2상태:
  Dark:  미공개 (정보 X)
  Type:  분류만 공개 (battle / event / chance / fate)

최대 2 Battle 발생 / Phase
```

## 인격 (Order 단위)

```yaml
인격 시스템: 그리스 4주덕
  pool: [wisdom, courage, temperance, justice]
  인물 = 3 인격 보유, 1 빠짐
  빠진 1 = 정체성

한 회차 = 1 인격 팩 (90장)
같은 지점(챕터·스테이지) 다른 인격 = 다른 가능세계
챕터·스테이지 명명도 인격마다 다를 수 있음
```

## 위계 변동

```yaml
등극 (Order 클리어 시):
  human → hero
  horde → calamity
  태생·진영·종족 = 변동 X
  미리 정한 1명만 (작가 결, Order 시작 시 결정)
```

## 정보 공개 (적 유닛)

```yaml
공개:
  - rank (위계 아이콘): human / hero / horde / calamity
  - own_time (시간대 아이콘)
  - hp_bar
  - shields_count
  - defense_value
  - class (직업 아이콘)

비공개:
  - attack
  - 키워드 상세

아군은 정확한 숫자 다 보임 (hp + 보호막 + 방어도)
```

## 진행 흐름

```yaml
게임 시작:
  도서관 → 인물 책 클릭 → 책 펼침
  → 인격 선택 (해금 풀에서)
  → 인물 소개
  → Chapter 1 → Stage 1 → Phase 1 → Battle 1 → Round 1 → ...

Order 완료:
  정사 기록 → 도서관 복귀 (진척도 +1)
  영웅 등극 = 카타스테리스모스

Order 실패:
  미기록 ("쓰여지지 않았다")
  빈 상태 복귀

Order 순서: 순차 강제 (Order N 완료 시 N+1 해금)
재플레이: 완료 Order → "현재의 정사가 야사로 내려갑니다" 경고 후 가능
런 슬롯: 1 (동시 진행 1 Order)
```

## 종료 조건

```yaml
승리:     적 전멸
패배:     아군 전멸
게임오버: 주연 영웅 사망 (테오도라 등 is_protagonist=true)
시간초과: 라운드 5 도달 시 양측 생존 → 패배
철수 X
```

## TODO

```yaml
- TODO(시스템): 위계 등극 정확한 시점 (Order 안 어디서?)
- TODO(시스템): 인격 해금 결의 구체 (첫 회차 어느 인격 고정? 재플레이 결?)
- TODO(시스템): 좌석 수 (전열·후열 N자리)
- TODO(밸런스): 일반 9장 안 battle/event/chance 비율
- TODO(밸런스): 우연 5종 분포
```
