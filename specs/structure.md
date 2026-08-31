# Chronicle — 구조 (Structure)

> v1 Structure baseline을 보존 중인 문서 — 위계·카드 그릇·셔플·죽음 모델·인물/덕목.
> 진행 골격·판정·카드는 정본 포인터(미러 X):
>   진행 = `design/core_loop.md` · 판정 = `specs/dice.md` · 카드 = `specs/cards.md`.
>
> ⚠ **Structure migration 중.** 아래 고정 수치(3 Chapter × 3 Episode · Episode 10장 등)는 **v1 baseline**이다.
> STRUCTURE-01은 NOT CLOSED이며, v2의 Structure 정본은 아직 확정되지 않았다.
> 재검토 중인 가설 = `design/structure_recovery.md` (PROVISIONAL — 구현 근거 아님).

## 위계 — 6층

목차 명칭 (한글 / 영문):

```yaml
Chronicle / 크로니클: 인물들의 편이 꽂히는 전체 (서재·연대기). 게임 타이틀 겸.
Character / 인물:     한 사람 (예: 테오도라). 덕목 3종의 Book을 묶음.
Book      / 편:       한 덕목의 판본 (예: 용기편). 카드 90장 그릇.
Chapter   / 장:       큰 마디 (진행 단위 — 카드 그릇 X). 1 Book = 3 Chapter.
Episode   / 삽화:     한 대목 = 그 장면. 카드 10장 그릇. 1 Book = 9 Episode.
Phase     / 단계:     한 시각의 선택 (카드 3장 중 1택). 1 Episode = 4 Phase.
```

목차 예: 크로니클 › 테오도라(인물) › 용기편(Book) › 제1장 › 그 장면(삽화) › 선택(단계).

## 카드 그릇 — 콘텐츠 단위

```yaml
Character 270 = 3 Book (덕목 3종) × 90.
  Book 90 = 9 Episode × 10.
  Episode 10 = 9 결정 카드 + 1 운명(fate).
  프롤로그(death)·에필로그 = 그릇 밖 — 매 Episode 여닫는 서술 (cards). 도입에 death(죽음 제시), 운명전 클리어 후 에필로그.
게임 전체 = 여러 Character (수 미정) → Chronicle.
# 덕목: 사추덕(용기·지혜·정의·절제) 중 인물마다 3종. 테오도라 = 용기·지혜·정의.
# 종류·type(battle/scout/tactic/ordeal/fate)·mode·등급 = specs/cards.md.
```

## Book 트리 — 제작·관리 단위

결정 카드는 Book 단위로 묶어 관리. Chapter·Episode로 배분:

```
테오도라 용기편 (Book · 90장)
├─ Chapter 1 ─ Episode A · B · C
├─ Chapter 2 ─ Episode 가 · 나 · 다
└─ Chapter 3 ─ Episode 1 · 2 · 3
                (각 Episode = 결정 9 + 운명 1)
```

## Phase 귀속 — 셔플과 완결

```yaml
결정 카드는 각각 Phase에 귀속. 셔플은 Phase 경계 안에서만.
Episode 10 = Phase 1~3 결정 3장씩(9장) + Phase 4 운명 1장.
Phase 시간 순서 고정: 발단 → 전개 → 위기 → 절정(운명전).
  각 Phase 3장 중 1택. 셔플 = 그 Phase 3장 안 (경계 안 넘음).
완결성: Episode 10장은 그 자체로 하나의 장면 (발단~죽음, 떼어놔도 섬).
셔플 내성: 같은 Phase 카드끼리 독립 — 어느 순서로 뽑혀도 말이 됨.
# Phase에 공간 고정 가능 (카드가 Phase 밖으로 안 새므로).
#   예) Phase1 집 앞 · Phase2 골목 · Phase3 광장 · Phase4 다리 앞.
```

## 서사 단위 — 집필 위계

```yaml
# 이 절은 기존 Decision 중심 집필 위계다.
# TODO (후속 Structure Unit): Situation(상황 카드 — cards.md §상황 카드)과 Phase·scene의 대응 재검토.
#   Phase마다 Situation 1장인지, Episode당 몇 장인지, 그릇 안팎 어디인지 모두 미확정.
스냅샷 = 카드 1장 (그 시각의 장면 조각).
장면(scene) = Phase (3장 = 그 시각 할 수 있는 행동들, 1택).
작은 사건(beat) = scene 묶음.
작성 제약: 카드는 병렬(서로 독립) — 카드 간 인과 사슬 금지 (셔플되므로).
  결과는 상태로 남김 (장비·동료·건강·정보) — '다음 장면으로'가 아니라.
  인과는 '쥔 것/등진 것' 누적 → 운명전 판 (design/core_loop.md).
```

## 죽음 모델 — default 원본 + 조립

```yaml
death 슬롯 = Episode마다 1개. 프롤로그에 그 장면의 죽음을 보여준다.
  최초 진입 = default 원형. 작가가 미리 쓴 첫 죽음 (경로·문구 고정) — 회귀의 출발점이자 되돌릴 대상.
    편의 실패 테마가 원형의 색: 용기=만용 / 지혜=과한 회피 / 정의=과한 헌신 (§인물·덕목).
  재진입(회귀 후) = 직전에 죽은 죽음으로 교체. 게임 오버 상태(운명전 갈래·부족 능력치·소진 지점)를 서사로 렌더 (미리 안 씀) — 다음 판의 지도.
  운명전(fate) 생존 → 원형이 생존으로 flip (수집).
# 도감 박제·flip 대상은 default 원형 1장뿐 — 죽은 death는 안 쌓인다 (core_loop §수집).
# 죽음 카드 = 프롤로그(그릇 밖), 매 Episode 도입 (cards) — 운명전(fate)과 별개.
# 옛 'Episode당 4죽음 → 4생존 수집' 폐기.
```

## 인물·덕목

```yaml
Character = 한 인물. 사추덕(용기·지혜·정의·절제) 중 3종의 Book.
  같은 인물의 세 판본을 비교 = 자체 비교열전 (플루타르크 구조).
테오도라: 용기 / 지혜 / 정의.
덕목 = 직업: 용기=전사(warrior) / 지혜=사냥꾼(hunter) / 정의=사제(priest).
  편이 바뀌면 직업·시작값·카드풀이 함께 바뀐다 (시작값 = dice §시작값 · 카드풀 = cards).
# 인물마다 3종 조합이 다를 수 있음 (절제 포함 가능).
```
