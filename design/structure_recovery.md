# Structure Recovery — Pilot 입력

> **status: PROVISIONAL — 구현 정본이 아니다.** STRUCTURE-01은 NOT CLOSED다.
> v2의 Structure 정본은 아직 확정되지 않았다. `specs/structure.md`는 v1 baseline을 보존 중이며,
> 그것이 v2 확정 구조라는 뜻은 아니다.
> 이 문서의 가설도 구현 근거로 삼지 않는다 — Pilot으로 검증할 입력이다.
> CLOSED된 v2 결정(Situation·Decision·Fate의 의미, 판정·고갈)은 그대로 유효하다.
> 제작 방법론 정본 = `authoring.md` · 참고 자료 = `references.md`.

## 제작 순서 — 틀이 아니라 이야기부터

```yaml
v1: 고정 그릇(Chapter·Episode·Phase 수)을 먼저 정하고 콘텐츠를 채웠다.
새 방향: 반대다.

  ① 공유된 시간·공간·객관 사건을 먼저 만든다
  ② 그 안에 여러 인물이 동시에 실제로 존재한다
  ③ 각 인물이 접하는 부분을 제한 시점으로 잘라낸다
  ④ Situation / Decision / Result로 가공한다
  ⑤ 수렴점과 역사적 귀결을 본다
  ⑥ 실제 플레이 호흡을 보고 Chapter·Episode·Phase 등의 단위를 결정한다

# 케이크를 먼저 굽고, 나중에 잘라 포장한다.
# → 단위 숫자를 먼저 확정하지 않는다.
```

## 공유된 하나의 무대

```yaml
여러 인물이 각자 별도의 이야기 우주에 사는 것이 아니다.
하나의 역사 상태 안에서, 작가 입장에서는 객관적으로 정의되는 바닥이 먼저 존재한다:
  일정한 시간축 · 일정한 공간
  그 시점에 인물들이 어디에 있는가
  일어난 사건과 성립해 있는 조건
  인물 관계 · 사건 간 인과

# "객관적"은 그 역사 상태 안에서 확정되어 있다는 뜻이다.
#   단일 불변의 정사가 하나뿐이라는 뜻이 아니다.
# Book Outcome이 갈리면 이후의 객관 사건 자체가 달라질 수 있다 (§Book의 역사적 분기).
#   단, 가능한 모든 세계를 미리 열거한다는 뜻은 아니다 — 저작된 것만 존재한다.

플레이어는 그 전체를 전지적으로 보지 않는다.
같은 객관 사건이라도:
  A는 현장에서 직접 겪고 / B는 나중에 소문으로 듣고 / C는 정치적 여파만 겪는다.

# authoring.md §객관적 사건 지도 · §제한 시점과 교차의 직접 연장.
```

## 상위 편집 구조 가설

```yaml
# PROVISIONAL. 기존 v1의 "Character가 Book을 여러 개 가진다"와 충돌 가능 — 정본 교체하지 않는다.

Chronicle — 전체 연대기. 여러 Series와 그 안의 가능한 역사들을 포괄하는 가장 큰 단위.
  Series — 하나의 거대한 역사적 흐름을 다루는 범위.
           여러 지역·인물·시간대·사건이 얽힌다.
           Book Outcome에 따라 그 흐름 자체가 달라질 수 있다.
    Book — Series에서 잘라낸, 플레이 가능한 하나의 역사적 사건 덩어리. 제품·확장의 핵심 조각.
           역사적 사건 덩어리를 하나의 플레이 가능한 편집·제품 단위로 묶는 경계다.

# 단위 크기 감각용 역사 사례 (Chronicle 확정 콘텐츠 아님):
#   Series 크기 ≈ "펠로폰네소스 전쟁" · "스파르타의 몰락"
#   Book 크기   ≈ "레우크트라의 신의 복수" · "에파미논다스의 죽음"
# Book의 길이·Character 수·Chapter 수 전부 미정.
```

## Character — 컨테이너가 아니라 시점선

```yaml
# PROVISIONAL.
한 Book 안에 여러 Character의 시점이 존재할 수 있다.
한 Character가 여러 Book에 걸쳐 등장할 수 있다.
Character별 이야기 길이는 같을 필요가 없다 — 전체를 관통하기도, 짧게 스치기도 한다.
→ Book ↔ Character는 N:M 가능성이 있다.
```

## 미시 플레이 문법 — 유지

```yaml
Situation → Decision → 판정/Result → 다음 Situation  (CLOSED — core_loop.md §기본 경험 문법)
  Situation = 특정 Character가 현재 시간·공간에서 접하는 세계의 제한된 단면
  Decision  = 그 Situation에서 무엇을 할 것인가
  Result    = 선택·판정이 남긴 귀결

미정:
  1 Situation = 1 Phase 인지
  한 Situation에서 Decision이 몇 번 발생하는지
  Decision 후보가 항상 3개인지 · 고정 저작인지 더 큰 풀에서 뽑는지
  Result가 다음 Situation을 바꾸는 graph/schema

Phase를 함부로 삭제하지 않는다.
  v1에서 시간 슬롯·선택 단위·셔플 경계였고, v2에서도 고갈 감소의 기계적 시간 단위다.
  Situation이 생겼다는 이유만으로 Phase 삭제를 결론내지 않는다.
```

## Fate와 역사적 귀결은 다른 층일 수 있다

```yaml
FATE-01 CLOSED 유지: Fate = 앞선 것들이 수렴해 나타나는 결론·도착점 (cards.md §운명 카드).

같은 객관 사건이라도 A에게는 최종 Fate, B에게는 중간 Fate, C에게는 배경일 수 있다.

가설 — 두 층을 구분할 수 있다:
  Character Fate — 한 인물의 선택·결과가 수렴한 귀결.
  Book Outcome   — 여러 인물과 사건의 결과가 합쳐져 "역사적으로 무엇이 일어났는가"를 정하는 거시 귀결.
  둘은 같을 필요가 없다. 개인에게 좋은 결과와 역사적으로 유리한 결과도 같을 필요가 없다.

Book 경계와 Character Fate 경계가 자동으로 일치한다고 가정하지 않는다.
  어떤 인물의 Fate는 Book이 닫히기 전에 오고, 어떤 인물은 Book 끝까지 도착점에 닿지 않을 수 있다.

# "Book Outcome"은 사고용 기능명. 정식 명칭·schema 미정.
```

## Book의 역사적 분기

```yaml
현재 가설: Book마다 최소 2개 이상의 의미 있는 역사적 귀결을 둔다.
  # PROVISIONAL — Pilot에서 검증한다. 개수·강도·비용이 실측으로 뒤집힐 수 있다.
  # 사고용 예: 그 인물이 죽었다 / 죽지 않았다 → 이후 패권이 다르게 전개될 수 있음.

모든 Decision마다 평행우주를 만드는 구조가 아니다. 원하는 흐름:
  작은 Decision → 작은 Result·사실 → 여러 결과가 축적
  → 일부가 큰 조건으로 작동 → Book 수준의 역사적 귀결 → 이후 Book·Series에 반향

# 모든 나비의 날갯짓이 태풍이 되는 것은 아니다. 소수의 의미 있는 인과만 거시 분기로 이어진다.
```

## 분기 폭발 방지

```yaml
모든 Book Outcome이 새 downstream Book을 만들 필요는 없다.

가설적 강도:
  작은 변주 — 다음 Book은 같되 인물·상태·Situation·대사가 다르다
  중간 분기 — 다음 Book 자체가 달라진다
  대분기   — Series의 큰 역사적 성격이 달라진다

갈라진 흐름이 나중에 같은 사건·Book으로 재합류하는 것을 허용한다.
→ 완전한 이진·다진 branching tree를 전제하지 않는다.

저장 방향 (schema 미정):
  timeline_A / timeline_B 같은 완전 세계선 복제보다,
  소수의 역사적 사실·상태를 저장하고 후속 Book이 조건으로 읽는 방식이 유력.
  # 사고용 예시(schema 아님): 지도자 생존 여부 · 도시 성향 · 군세 약화 여부
  목적 — 재합류 허용 / 같은 downstream Book 재사용 / 콘텐츠·QA 폭발 억제
```

## Collection — 가능한 역사를 모은다

```yaml
플레이어는 카드뿐 아니라 "직접 살아본 가능한 역사"를 수집한다.
  Book X — 역사적 귀결 A ✓ / B ✓ / C □
  Series 전체에서도 같은 출발점에서 갈라진 흐름을 발견하고 모을 수 있다.

무한한 모든 가능세계가 아니라, 작가가 의도적으로 저작한 의미 있는 가능 역사만 제공한다.
# 기존 수집 시스템(core_loop.md §수집)과 어떻게 합칠지는 미정.
```

## Pilot

```yaml
지금은 Chapter·Episode·Phase 숫자를 머리로 더 설계하지 않는다. 작은 Book/Pilot 하나를 먼저 만든다.

최소안:
  공유 사건 1개 — 시간·공간·객관 사건 지도를 만들 수 있는 작은 범위
  Character 2~3명 · 각자의 제한 시점 Situation
  Decision / Result · 필요한 Fate
  의미 있는 역사적 Book Outcome 최소 2개
  두 Outcome이 이후 사건 또는 world fact를 실제로 다르게 만들 것

Pilot이 답해야 할 것:
  Situation→Decision→Result 한 사이클의 실제 시간·밀도
  Character별 적정 길이 · Episode가 정말 필요한가 · Chapter가 자연스럽게 생기는가
  Phase가 서사 단위인가 기계 단위인가
  Book에 몇 Character가 감당 가능한가 · Outcome 추가 시 콘텐츠 비용
  Book에서 무엇이 고정 전제이고 무엇이 변화 가능한 historical fact인가
  작은 Result가 어떤 기준으로 Book Outcome의 조건에 참여하는가
  작은 선택 → 큰 역사 변화의 인과가 플레이어에게 읽히는가
  주사위·고갈이 서사를 살리는가 방해하는가
  가능한 역사 수집이 재플레이 동기가 되는가
```

## Pilot 전 확정 금지

```yaml
3 Chapter / Chapter당 3 Episode / Episode당 4 Phase
마지막 Phase = Fate / Episode마다 Fate 1개
Character마다 동일 분량 / Book마다 동일 분량
모든 Outcome이 새 downstream Book을 생성
완전한 branching tree schema
```

## Structure 경계 의존 목록

```yaml
# 현재 Git에서 살아 있으면서, 기존 Chapter·Episode·Phase 경계에 의존하는 항목이다.
# 전부 폐기된 v1 규칙이라는 뜻이 아니다 — 새 Structure가 CLOSED되면 경계가 재확인되어야 하는 자리다.
# 이번 Unit에서 청소하지 않는다.

specs/structure.md   — 6층 위계 · 3 Chapter × 3 Episode · Episode 10 = 9 결정 + 1 운명
design/core_loop.md  — Episode = 한 페이지 · 결정 Phase 1~3 + Phase 4 · 확정형/변동형 등 옛 Decision 서술
specs/dice.md        — "희망: Episode 시작 시 1" (active rule) · "Chapter 클리어 성장" (active rule)
                       # 설계상 희망의 refresh boundary는 OPEN이나, Git 본문은 Episode 기준으로 확정 서술 중이다.
specs/cards.md       — death 블록의 Episode 슬롯 · path{Phase1~3, 운명전}
design/ui_flow.md    — Episode 플레이 화면 (별건: INFO-DECISION-01과의 정보 공개 충돌도 미해소)
design/3_return.md   — 챕터를 닫는 Episode(3·6·9)
```
