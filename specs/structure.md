# Chronicle — 구조 (Structure)

> Order·Chapter·Stage·Phase 위계, 카드 그릇, 셔플, 인격, Order 메타의 정본.
> 진행 골격·판정·카드·보상은 정본 포인터(미러 X):
>   진행 = `design/core_loop.md` · 판정 = `specs/dice.md` · 카드 = `specs/cards.md`.

## 위계 — 4층

```yaml
Order:   한 인격의 일대기 (책 한 권). 카드 270장 그릇.
Chapter: 큰 마디 (진행 단위 — 카드 그릇 X). 1 Order = 3 Chapter.
Stage:   한 장(페이지). 카드 10장 그릇. 1 Order = 9 Stage (3 Chapter × 3).
Phase:   한 시각의 선택 (카드 3장 중 1택). 1 Stage = 여러 Phase.
# 옛 Battle·Turn 폐기 (격돌·턴 없음 — 주사위 판정. dice.md).
```

## 카드 그릇 — 콘텐츠 단위

```yaml
Order 270 = 3 인격팩(용기·지혜·정의) × 90.
  인격팩 90 = 9 Stage × 10.
  Stage 10 = 9 결정 카드 + 1 운명(fate).
  + 줄거리 2장(프롤로그·에필로그) — 고정점.
# 종류·type(battle/scout/tactic/ordeal/fate)·mode·등급·슬롯 = specs/cards.md.
# 옛 '9 일반 = 전투3+사건3+우연3' 폐기 (옛 kind).
```

## 서사 단위 — 집필 위계

```yaml
스냅샷 = 카드 1장 (그 시각의 장면 조각).
장면(scene) = 페이즈 (3장 = 그 시각 할 수 있는 행동들, 1택).
작은 사건(beat) = scene 묶음.   일대기 = Order.
작성 제약: 카드는 병렬(서로 독립) — 카드 간 인과 사슬 금지 (셔플되므로).
         인과는 페이즈 → 운명전에서 빚어짐 (design/core_loop.md).
# scene·beat 헤더로 집필. 문체 = design/style_canon.md.
```

## 셔플 — 런 구성

```yaml
고정점: 프롤로그(앞) · 운명(각 Stage 끝) · 에필로그(뒤).
자유 구간: Stage 내 결정 카드 9장을 풀에서 셔플 → 페이즈 구성.
페이즈 조합 = 고정표 X — 기본 변동·변동·확정, 드물게 ordeal이 변동 한 자리 (specs/cards.md).
# 옛 'enemy_decks · 페이즈 묶음 = [전투1+사건1+우연1]' 폐기.
```

## 편성 시점

```yaml
오더 진입 → 프롤로그 1회(도입) → Stage1 … Stage9(운명) → 에필로그 1회 → 오더 완료

시작 구성 (편별 — 능력치 분배 + 시작 장비. 덱빌딩 없음):
  용기 (warrior) 테오도라: 힘 3 / 민첩 2 / 지혜 1 / 행운 1 / 건강 3 + 낡은 한손검 (무기·힘)
  지혜 (hunter):   # [펜딩 — 작가 박음]
  정의 (priest):   # [펜딩 — 작가 박음]
# 인물·장비·보급품 슬롯(각 3)은 비어서 시작 — 변동형 성공으로 채운다 (specs/cards.md).
# 옛 '고정 5장·최초 조우 드래프트·시작 덱 10장·덱 상한' 폐기 (덱빌딩 코어 아님).
```

## 인격 — Order 단위

```yaml
1 Order = 1 인격 (용기·지혜·정의 = 테오도라의 세 태도).
인격 ↔ 직업: 용기 = warrior / 지혜 = hunter / 정의 = priest.
같은 운명을 다른 태도로 맞선다 (회귀 — design/3_return.md, design/world/).
```

## Order 메타

```yaml
완료 = 정사(canon) / 실패(회귀 중 사망) = 미기록.
해금 = 순차 (Order N 완료 → N+1).
재플레이 = 완료 Order 다시 → 정사를 야사로 (같은 지점 다른 인격 = 다른 가능세계).
챕터·스테이지 명명도 인격마다 다를 수 있음.
```

## 진행 흐름

```yaml
도서관(메타) → 책(Order) → 인격 → 편성 → Chapter → Stage → Phase(3장 1택)
  → … → Stage 운명전 → 다음 Stage → … → Stage9 챕터 운명 → 에필로그 → Order 완료.
# 페이즈·운명전 진행 = design/core_loop.md. 판정 = specs/dice.md.
```

## 종료 조건

```yaml
스테이지:  운명전 통과 → 다음 스테이지 / 운명전 실패 → 사망 → 회귀.
오더 완료: Stage9(챕터 운명) 통과 + 에필로그.
사망 (둘 — 회귀로):
  운명전에서 주사위 예산 소진 + 요구 미충족 (specs/dice.md §운명전)
  건강 0 — 어느 시점이든 (specs/dice.md §건강)
철수 X
# 옛 '적/내 대적자(킹) 체력 0' 폐기 — 격돌·킹 없음. 종료는 운명전 결과 + 건강.
```
