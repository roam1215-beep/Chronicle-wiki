# Structure Recovery — Pilot Input

> **상태: PROVISIONAL / PILOT INPUT. NOT CLOSED.**
> 이 문서는 v2 Structure 정본이 아니다. 이번 복구 세션에서 드러난 새 구조 가설을 잃지 않고 Pilot에 투입하기 위한 스냅샷이다.
> Pilot에서 틀린 것이 드러나면 수정한다. 기존 specs/structure.md의 고정 6층·3×3×3 수치도 v2 정본으로 취급하지 않는다.

## 출발점 — 구조를 먼저 채우지 않는다

v1은 대략 다음 고정 볼륨을 먼저 만들고 콘텐츠를 넣었다.

~~~text
Character
→ Book
→ 3 Chapter
→ Chapter당 3 Episode
→ Episode당 3 Decision Phase + Fate Phase
~~~

이 수치는 당시의 로그라이크 성장·자원 순환·카드 볼륨·회귀 반복을 성립시키기 위한 그릇이었다.

v2의 출발점은 반대다.

> **케이크를 먼저 굽고, 나중에 플레이 가능한 조각으로 자른다.**

~~~text
공유 시간·공간·사건을 먼저 만든다
→ 인물들을 그 안에 실제로 배치한다
→ 각 인물이 접한 제한 시점을 자른다
→ Situation / Decision / Result로 가공한다
→ 수렴점을 Fate와 역사적 귀결로 편집한다
→ 실제 호흡을 보고 Chapter / Episode / Phase 같은 단위를 결정한다
~~~

## 공유된 하나의 무대

Chronicle의 인물들은 각자 별도 우주에 사는 것이 아니다.

~~~yaml
객관적 바닥:
  - 일정한 시간축
  - 일정한 공간
  - 실제로 일어난 사건
  - 동시에 존재하는 여러 인물
  - 인물 관계
  - 사건 간 원인과 결과

플레이어:
  - 이 전체를 전지적으로 보지 않는다.
  - 특정 인물이 특정 시간·공간에서 접한 조각만 본다.
~~~

같은 객관 사건이 인물마다 다르게 나타날 수 있다.

~~~text
하나의 사건
├─ Character A: 현장에서 직접 경험
├─ Character B: 뒤늦게 소문으로 접함
└─ Character C: 그 사건의 정치적 여파만 경험
~~~

이 원칙은 design/authoring.md의 객관적 사건 지도 → 제한 시점 분할과 연결된다.

## 상위 편집 구조 가설

현재 가장 유력한 상위 구조:

~~~text
Chronicle
└─ Series
   └─ Book
~~~

### Chronicle

전체 연대기. 여러 Series와 그 안에서 플레이어가 발견한 가능한 역사들을 포괄한다.

### Series

하나의 거대한 역사적 흐름.

사고용 역사 예시:
- 「펠로폰네소스 전쟁」
- 「스파르타의 몰락」

이는 Chronicle 세계의 확정 고유명사가 아니라 범위를 이해하기 위한 역사 레퍼런스 예시다.

Series는 단순한 직선 목차보다, 서로 원인과 결과로 연결된 여러 Book과 가능 역사들의 계통에 가깝다.

### Book

Series에서 잘라낸 **하나의 플레이 가능한 역사적 사건 덩어리**이자 제품 확장의 핵심 조각.

세션에서 든 사고용 예시:
- 「레우크트라의 신의 복수」
- 「에파미논다스의 죽음」
- 보이오티아의 작은 반란에서 레우크트라까지 이어지는 사건군

이 예시들은 Book의 정확한 평균 크기를 확정하지 않는다. Book의 적정 범위 자체가 Pilot 검증 대상이다.

~~~yaml
Book:
  고정 카드 수: 없음(현재)
  고정 Chapter 수: 없음(현재)
  고정 Character 수: 없음(현재)
  길이: 이야기와 사건 밀도에 따라 가변 가능
~~~

## Character — 컨테이너가 아니라 시점선

v1의 Character → Book 고정 부모/자식 관계는 v2에서 재검토한다.

현재 가설:

~~~text
Book A
├─ Character α의 시점선
├─ Character β의 시점선
└─ Character γ의 시점선

Book B
├─ Character β가 계속 등장
├─ Character δ
└─ Character ε
~~~

따라서:

~~~yaml
Book ↔ Character:
  관계: N:M 가능
  한 Book에 여러 Character가 존재 가능
  한 Character가 여러 Book을 가로지를 수 있음
  Character별 이야기 길이는 동일할 필요 없음
~~~

누군가는 Book 전체를 관통하고, 누군가는 한 사건에서 짧게 등장할 수 있다.

## 미시 플레이 문법

이미 CLOSED된 의미:

~~~text
Situation
→ Decision
→ Result
→ 다음 Situation
~~~

- Situation = 특정 인물이 현재 시간·공간에서 접하는 세계의 단면. “지금 무슨 일이 벌어지고 있는가.”
- Decision = 그 Situation에서 무엇을 할 것인가.
- Result = 선택과 판정이 남긴 귀결.

Situation은 세계 전체를 설명하는 전지적 카드가 아니다.

아직 확정하지 않은 것:

~~~yaml
OPEN:
  - 1 Situation = 1 Phase인지
  - 한 Situation에서 Decision을 몇 번 하는지
  - Decision 후보가 항상 3개인지
  - 3개가 고정 저작인지, 더 큰 호환 풀에서 뽑히는지
  - Result가 다음 Situation 선택에 어떤 데이터 구조로 개입하는지
~~~

v1에서 Phase는 시간 슬롯·선택 단위·셔플 경계였고, v2에서는 고갈 감소의 기계적 시간 단위로도 이미 사용된다.
따라서 Situation이 생겼다는 이유만으로 Phase를 삭제하지 않는다. Pilot에서 서사 단위와 기계 단위의 관계를 본다.

## Fate와 역사적 귀결은 다른 층일 수 있다

현재 Fate 정본:

> Fate = 앞선 Situation·Decision·Result가 한 이야기에서 수렴하는 결론 또는 도착점.

같은 객관 사건도:

~~~text
Character A에게는 최종 Fate
Character B에게는 중간 Fate
Character C에게는 Situation의 배경
~~~

일 수 있다.

새 구조에서 별도 검토할 거시 층:

### Character Fate

한 인물의 선택과 결과가 수렴한 귀결.

### Book Outcome

여러 인물과 사건의 결과가 합쳐져 역사적으로 무엇이 일어났는가를 정하는 Book 수준의 귀결.

둘은 동일할 필요가 없다.

~~~text
Character A의 최종 Fate
Character B의 최종 Fate
Character C의 결과들
          ↓
      Book Outcome
          ↓
 이후 역사 상태 변화
~~~

개인에게 좋은 결말과 역사적으로 유리한 결말도 동일할 필요가 없다.

## Book 분기 — 모든 가능세계가 아니라 의미 있는 역사적 만약

핵심 가설:

> Book마다 최소 2개 이상의 **수집할 가치가 있는 의미 있는 역사적 귀결**을 저작한다.

사고용 예시:

~~~text
에파미논다스가 죽었다
→ 이후 보이오티아 패권의 한 흐름

에파미논다스가 살아남았다
→ 같은 출발점에서 다른 역사적 반향
~~~

이것은 모든 Decision마다 별도 세계를 만드는 시스템이 아니다.

~~~text
작은 Decision
→ 작은 Result / 역사적 사실
→ 여러 사실의 축적
→ 일부가 큰 조건으로 작동
→ Book Outcome
→ 이후 Book / Series의 흐름 변화
~~~

**모든 나비의 날갯짓이 태풍이 되는 것은 아니다.**
소수의 의미 있는 인과만 거시적 역사 변화를 만든다.

## 분기 폭발 방지 원칙

Book Outcome이 2개 이상이라고 해서 모든 Outcome이 완전히 새로운 다음 Book을 요구하지 않는다.

가능한 세기:

~~~yaml
작은 변주:
  다음 Book은 같음
  과거 사실에 따라 인물·Situation·대사·상태 일부가 다름

중간 분기:
  다음 Book 자체가 달라질 수 있음

대분기:
  Series의 큰 역사적 성격이 달라질 수 있음
~~~

서로 갈라진 흐름이 나중에 다시 같은 큰 사건으로 합류하는 것도 허용한다.

~~~text
           → Book B ──┐
Book A ────            ├→ Book D
           → Book C ──┘
~~~

목표는 무한 평행우주 트리가 아니라 작가가 고른 몇 개의 역사적으로 의미 있는 가능성이다.

## 저장 관점 가설 — 세계선보다 역사적 사실

~~~yaml
피하고 싶은 방식:
  timeline_A
  timeline_B
  timeline_C
  ...

유력한 방식:
  Book 종료와 진행 중에 소수의 역사적 fact/state를 남김
  다음 콘텐츠가 그 사실을 조건으로 읽음
~~~

사고용 예:

~~~text
leader_alive = true
city_alignment = hostile
army_weakened = true
~~~

정확한 schema는 아직 만들지 않는다.

이 방식의 목적:
- 분기 재합류 가능
- 같은 Book을 여러 과거에서 재사용 가능
- 세계선 파일 폭발 방지

## Collection — 가능한 역사를 살아보고 모은다

수집의 장기 방향:

> 플레이어는 단순히 카드를 채우는 것을 넘어 **직접 살아본 가능한 역사들**을 Chronicle에 축적한다.

~~~text
Book X
✓ 역사적 귀결 A
✓ 역사적 귀결 B
□ 역사적 귀결 C
~~~

Series 전체도 같은 출발점에서 다른 역사적 흐름을 발견할 수 있다.

다만:
- 이것을 무한한 모든 가능세계의 수집으로 확장하지 않는다.
- 작가가 저작한 의미 있는 역사 가능성만 존재한다.
- 기존 카드 도감·death flip·회귀 수집과 정확히 어떻게 합칠지는 별도 Unit.

## Reference — 다른 게임의 조리법보다 이야기 카탈로그

이번 복구에서 참고의 대상도 수정했다.

우선순위:

~~~text
좋은 역사·신화·비극·전설의 이야기 덩어리 수집
→ 왜 한 덩어리로 성립하는지 구조 채굴
→ 고유명사·표면 플롯 제거
→ 기능·관계·인과·시점·수렴 구조 추출
→ 여러 원전 구조를 보존/분할/병합/반전/삭제/추가
→ Chronicle 고유 공유 사건으로 다시 제작
~~~

즉 레퍼런스는 케이크 카탈로그다.
다른 게임 사례는 구현·분기 위험을 보는 보조 비교 자료로만 쓴다.

후보 이야기는 design/story_reference_catalog.md에서 관리한다.

## 제작 공정 가설

~~~text
1. 이야기 레퍼런스 선정
2. 원전 구조 발굴
3. 고유명사 제거 / 기능·관계·인과 추출
4. Chronicle 고유 사건 재구축
5. 객관적 공유 시간·공간·사건 지도 작성
6. Series / Book 범위 편집
7. 의미 있는 Character 시점선 추출
8. Situation / Decision / Result 작성
9. Character Fate 구성
10. Book Outcome 2개 이상 구성
11. Outcome이 이후 역사에 남기는 fact/state 연결
12. 실제 플레이
13. 관찰 결과로 Chapter / Episode / Phase / 볼륨 결정
~~~

## Pilot

다음 Structure 설계는 문서에서 더 내려가지 않고 작은 케이크 하나를 실제로 굽는다.

최소 Pilot:

~~~yaml
공유 사건: 1개
시간·공간: 작지만 객관적 사건 지도를 만들 수 있는 범위
Character: 2~3명
각 Character:
  - 제한 시점 Situation들
  - Decision과 Result
  - 필요하면 Fate
Book Outcome:
  - 최소 2개
  - 둘이 이후 사건 또는 world fact를 실제로 다르게 만듦
~~~

Pilot이 답해야 할 질문:

1. Situation→Decision→Result 한 사이클의 실제 플레이 시간은?
2. 한 Character에 몇 사이클이 있어야 짧지/길지 않다고 느끼는가?
3. 여러 사이클 사이에 Episode라는 편집 단위가 실제로 필요한가?
4. Chapter는 자연스럽게 생기는가? Fate와의 관계는 무엇인가?
5. Phase는 서사 단위인가, 기계적 시간 단위인가, 둘 다인가?
6. Book 하나에 몇 Character가 감당 가능한가?
7. Outcome 하나를 추가할 때 콘텐츠 비용이 실제로 얼마나 증가하는가?
8. 작은 선택→큰 역사 변화의 인과를 플레이어가 기억하고 납득하는가?
9. Dice/고갈이 서사를 살리는가, 흐름을 끊는가?
10. 가능한 역사 수집이 실제 재플레이 동기가 되는가?

## Pilot 전 금지

~~~yaml
미리 확정하지 않음:
  - 3 Chapter
  - Chapter당 3 Episode
  - Episode당 4 Phase
  - 마지막 Phase = Fate
  - Episode마다 Fate 1개
  - Character마다 동일 분량
  - Book마다 동일 분량
  - 모든 Outcome = 새로운 downstream Book
  - 완전한 branching tree schema
~~~
