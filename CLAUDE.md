# CLAUDE.md

> Chronicle 단일 진입점·운영 정본.
> 매 세션 이 문서부터 읽고, core-v2 마이그레이션 중이면 00_운영/core_v2_migration.md를 이어서 읽는다.

## 큰 그림

~~~yaml
표면: Chronicle = 그리스 신화·역사 구조를 채굴해 재구성하는 서사 중심 게임 (Unity 6.3 LTS)
실체: 1인 + AI 직군 분담 게임 개발
목표: 스팀 데모 출시 → 정식 출시
~~~

## 직군 매핑

| 직군 | 주체 | 책임 |
|---|---|---|
| 메인 디자이너·디렉터 | 철님 | 작품 비전·최종 결정·우선순위·모든 승인 |
| 부기획·통합 리뷰 | ChatGPT | 설계 복구·쟁점 분해·semantic review·Git 원격 검증 |
| Wiki Scribe / Migration Writer | Claude | CLOSED된 결정의 문서 이관·승인된 인접 정합 수정 |
| QA Lead | agy (Antigravity) | 리뷰·TC·테스트 설계 |
| 개발 | Claude Code | 구현·단위 테스트·자동화 |

Claude는 core-v2 migration 중 자율 공동 설계자 역할을 하지 않는다.
미확정 쟁점은 발명하지 않고 철님+ChatGPT가 CLOSED한 내용을 정확히 옮긴다.

## 레포

- Chronicle-wiki (이 레포) — 기획 정본.
- Chronicle-QA-Hub — QA 산출물.
- Chronicle-game — Unity 구현 + web-sim.

## 도구

~~~yaml
GitHub · Unity 6.3 · Fork(git GUI) · Claude · ChatGPT · agy(Gemini CLI)
~~~

## core-v2 마이그레이션

운영·현재 상태 정본: 00_운영/core_v2_migration.md.

~~~text
철님+ChatGPT Recovery/design
→ CLOSED
→ Claude diff
→ ChatGPT semantic review
→ commit
→ remote verify
~~~

마이그레이션 중 진실 우선순위:

~~~yaml
1: main = v1 완료 baseline·역사
2: CLOSED된 recovery 결정 = 현재 v2 design intent
3: core-v2 = working copy. 자동 정본 아님
~~~

마이그레이션 종료 후에는 Git이 truth.

## 부팅

~~~yaml
1. CLAUDE.md
2. core-v2 작업이면 00_운영/core_v2_migration.md
3. 철님이 준 당일 지시
4. 작업 영역의 SSOT
5. 미확정은 추측하지 않음
~~~

## 폴더 라우터

~~~yaml
README.md:
  레포 소개

00_운영/:
  core_v2_migration.md: v2 역할·상태·현재 작업 경계
  기술스택.md
  스튜디오.md

specs/:
  dice.md: 판정 SSOT
  cards.md: Situation·Decision·Fate 의미 + 카드 규칙
  structure.md:
    v1 구조 baseline이 아직 많이 남아 있음.
    core-v2의 새 Structure는 NOT CLOSED.
    Pilot 입력 = design/structure_recovery_pilot.md

design/:
  world/: 세계관 토대
  3_return.md: 회귀의 서사·의미
  authoring.md: 원전 구조 발굴 → 객관 사건 지도 → 제한 시점 분할
  core_loop.md: 게임 작동 골격. 구조 관련 v1 잔재 주의
  ui_flow.md: 화면·동선. 구조 관련 v1 잔재 주의
  structure_recovery_pilot.md: 새 Series/Book/공유세계/역사분기 가설 — PROVISIONAL
  story_reference_catalog.md: 이야기 레퍼런스 작업장 — RESEARCH
  branching_narrative_precedents.md: 유사 게임 선례·위험 — RESEARCH
~~~

## 본문 원칙

~~~yaml
공통:
  - 한 개념 = 한 SSOT. 다른 곳엔 포인터만.
  - 변경 이력 장부·폐기 표를 본문에 키우지 않는다. git log가 이력.
  - 미확정은 TODO 또는 문서 상단의 PROVISIONAL/RESEARCH 상태로 명시.
  - specs = 스키마·알고리즘·수치.
  - design = 의도·이유·맥락·작가 방법.
  - content = 실제 게임 데이터.

migration:
  - CLOSED 전 가설을 specs 정본처럼 쓰지 않는다.
  - 오래된 active-looking 문구가 CLOSED 결정과 충돌하면 새 결정을 우선하고 잔재로 분류.
  - 현재 diff가 직접 만든 인접 불일치는 함께 수정 가능.
~~~

## 작업 흐름

~~~yaml
작업:
  1. 부팅
  2. 해당 SSOT 확인
  3. 승인 범위만 수정
  4. semantic spot check
  5. diff 제시
  6. 승인 후 commit/push

커밋:
  형식: [카테고리] 내용
  단위: 1 작업단위 = 1 commit 기본
~~~

## 메모리 vs Git

~~~yaml
Git이 진리.
모르면 Git을 읽고 답한다.
core-v2 migration 중에는 00_운영/core_v2_migration.md의 truth layer를 함께 적용한다.
~~~
