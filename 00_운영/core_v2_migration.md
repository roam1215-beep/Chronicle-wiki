# core-v2 마이그레이션 운영

> 현재 v2 복구·마이그레이션의 운영 정본.
> 결정 내용 자체는 specs/·design/의 각 SSOT에 둔다. 이 문서는 역할·상태·현재 작업 경계만 관리한다.

## 역할

~~~yaml
철님:
  역할: 메인 디자이너·디렉터
  권한: 최종 결정·우선순위·승인

ChatGPT:
  역할: 부기획·통합 리뷰
  책임:
    - 설계 복구와 쟁점 분해
    - 기존 Git과 새 결정의 의미 정합 검토
    - Claude diff의 semantic review
    - 원격 Git 검증

Claude:
  역할: Wiki Scribe / Migration Writer
  책임:
    - CLOSED된 결정을 Git 문서로 이관
    - 승인된 인접 정합 수정
  금지:
    - 미확정 쟁점의 자율 설계
    - 오래된 Git 문구를 근거로 새 결정을 발명
~~~

## 진실 계층

~~~yaml
마이그레이션 중:
  1: main = v1 완료본·역사적 baseline
  2: 철님+ChatGPT가 CLOSED한 복구 결정 = 현재 v2 design-intent truth
  3: core-v2 = migration working copy. 존재한다고 자동 정본이 아님

마이그레이션 종료 후:
  Git = truth
~~~

## 상태

~~~yaml
CLOSED:    설계·복구가 끝나 migration 가능
COMMITTED: 승인 diff가 core-v2에 commit
VERIFIED:  ChatGPT가 remote Git에서 직접 검증
~~~

현재 완료 단위:

| Unit | 상태 |
|---|---|
| DICE-01 | CLOSED / COMMITTED / VERIFIED |
| REROLL-EXH-01 | CLOSED / COMMITTED / VERIFIED |
| CARD-DECISION-01 | CLOSED / COMMITTED / VERIFIED |
| INFO-DECISION-01 | CLOSED / COMMITTED / VERIFIED |
| SITUATION-01 | CLOSED / COMMITTED / VERIFIED |
| NARRATIVE-AUTHORING-01 | CLOSED / COMMITTED / VERIFIED |
| DEFEAT-01 | CLOSED / COMMITTED / VERIFIED |
| FATE-01 | CLOSED / COMMITTED / VERIFIED |

## 작업 흐름

~~~text
Recovery / design
→ CLOSED
→ Claude diff
→ semantic review
→ commit
→ remote verify
~~~

- 고위험 시스템(Fate·위계·성장·저장/회귀·콘텐츠 그래프)은 깊게 리뷰한다.
- 의미/UI/정보 공개 같은 저위험 단위는 더 빠르게 처리한다.
- 현재 diff가 직접 만든 인접 불일치는 같은 commit에서 고쳐도 된다.
- 오래된 문구를 모두 매 Unit마다 청소하지 않는다. 마지막 GLOBAL-CONSISTENCY에서 전역 감사한다.

## 현재 Structure 상태

~~~yaml
STRUCTURE-01: NOT CLOSED
현재 단계: STRUCTURE RECOVERY → PILOT INPUT
이유:
  v1의 3 Chapter × 3 Episode × (3 Decision Phase + Fate) 고정 볼륨은
  로그라이크 성장·카드 수·회귀 볼륨을 먼저 정한 구조였다.
  v2에서는 Situation·Decision·Fate의 의미와 콘텐츠 제작 방식이 바뀌어
  같은 숫자를 자동 승계할 근거가 사라졌다.
~~~

현재 구조 복구 입력은 design/structure_recovery_pilot.md를 읽는다.
기존 specs/structure.md의 6층·고정 수치는 v1 baseline으로 보존 중이며 v2 정본이 아니다.

## 다음 작업

~~~text
이야기 레퍼런스 카탈로그
→ 원전 구조 채굴
→ Chronicle 고유 공유 사건 하나 제작
→ Character 2~3명 시점으로 절단
→ Situation / Decision / Result / Fate 구성
→ 최소 2개 역사적 Book Outcome 구성
→ 실제 한 판
→ 관찰 결과로 Chapter / Episode / Phase / 볼륨 재결정
~~~

Pilot 전에는 다음을 억지로 닫지 않는다.

~~~yaml
OPEN:
  - Chapter 존재·수·의미
  - Episode 존재·수·의미
  - Phase와 Situation의 정확한 대응
  - Decision 후보 공급 방식
  - Book 평균 길이와 Character 수
  - Fate 수·배치
  - 성장·저장·회귀·희망 refresh 경계
  - Book Outcome이 downstream Book을 어느 정도 갈라놓는지
~~~

## GLOBAL-CONSISTENCY 대기 항목

- dice.md의 희망: Episode 시작 시 1 — 새 구조 경계와 함께 재결정.
- dice.md 성장 Chapter 클리어 문구 — 미확정인데 active-looking.
- 축복과 Phase 시작 상태 확정 순서.
- cards.md의 health·옛 인물/장비/보급품·Episode 트리거·death path 등 legacy.
- core_loop.md의 고정 3+1 Phase·Episode death·옛 수집/회귀 구조.
- ui_flow.md의 옛 Episode/Phase·건강·옛 플레이 화면.
- design/3_return.md의 3·6·9 Chapter Fate 등 옛 구조.
- 운명전과 Fate 용어 잔재.
- README.md·CLAUDE.md의 제품 설명 중 턴제 전술 등 현재 코어와 어긋날 수 있는 표현.
- 새 상위 구조(Chronicle / Series / Book)와 기존 Character→Book 구조의 전역 파급은 Pilot 뒤에 정식 migration.
