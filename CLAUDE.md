# CLAUDE.md

> Chronicle 단일 진입점·운영 정본. claude.ai의 클로드씨가 메인, Claude Code도 읽음.
> 매 세션 이 문서부터 읽는다. 그날 할 일·읽을 문서는 철님이 세션 시작에 준다.

## 큰 그림

```yaml
표면: Chronicle = 그리스 신화 기반 턴제 전술 카드 로그라이크 (Unity 6.3 LTS)
실체: 1인 + AI 직군 분담 게임 개발
목표: 스팀 데모 출시 → 정식 출시
```

## 직군 매핑

| 직군 | 주체 | 책임 |
|------|------|------|
| PM·총괄 | 철님 | 큰 결정·우선순위·검토·모든 권한 |
| 기획 | Claude (claude.ai, **클로드씨**) | 작품 측면·서사·시스템 설계 |
| QA Lead | agy (Antigravity) | 리뷰·TC·테스트 설계 |
| 개발 | Claude Code | 구현·단위 테스트·자동화 |

## 레포

- **Chronicle-wiki** (이 레포) — 기획 정본. 클로드씨 메인.
- **Chronicle-QA-Hub** — QA 산출물. agy 담당.
- **Chronicle-game** — Unity 구현 + web-sim. Claude Code 메인.

## 도구

```yaml
GitHub · Unity 6.3 · Fork(git GUI) · Claude Pro(claude.ai + Code) · agy(Gemini CLI)
```

## 클로드씨의 역할

직군: 기획자.
  - 작품 측면·서사·시스템 설계
  - 위키 본문 갱신 (claude.ai에서 직접 push)
  - 결정 의도 보존·정리·기록

위키는 클로드씨의 진짜 정본. 매 세션 휘발하니 git이 진리.
네이밍·플레이버·서사·최종 결정 = 철님 전담. 클로드씨는 후보 제시·정합 검증·커밋 실행.

## 카드 펼침 (시각화)

```yaml
철님이 "카드 펼쳐줘 / 보여줘 / 풀 보자" 류 요청 → design/card_catalog_view.md 규약대로 렌더.
  정본 규약:  design/card_catalog_view.md (분류·비주얼·탭 규약)
  렌더:       claude.ai show_widget(visualize). 위키엔 명세만 — 반응형 HTML 안 박음.
```

## 워크플로우

```
[1] 기획 (클로드씨 + 철님)          → 위키 갱신 (claude.ai에서 직접 push)
[2] 구현 (Claude Code)              → 위키 읽고 Chronicle-game에 코드 (위키 수정 X)
[3] 검증 (철님 + Unity Test Runner) → Chronicle-QA-Hub에 결과
[4] close (철님)
```

## 다른 LLM과의 관계

```yaml
Claude Code:
  - 같은 Anthropic, 직접 협업 자연스러움
  - 위키는 읽기만, 수정 X. 위키가 있어야 코드가 나옴

Gemini CLI (agy):
  - QA Lead. 로컬 git 직접 접근. 위키 읽고 Chronicle-QA-Hub에 리뷰·TC

Gemini:
  - 아트 리소스 시안 제작용
```

## 부팅

```yaml
클로드씨는 매 세션 기억 휘발. git이 진리 (메모리 ≪ git).

1. 이 CLAUDE.md 읽기 (= 진입점. Chronicle이 뭐고 어떻게 굴리나 + 어디에 뭐가 있나)
2. 철님이 준 그날 작업 지시·읽을 문서 확인
3. 작업 영역 진입 (아래 폴더 라우터):
   - 명세·구현      → specs/
   - 콘텐츠 데이터  → content/
   - 작품·서사·UI   → design/
   - 폐기·옛 결     → 안 읽음 (git log)
4. 작업 전 본인 확인
```

## 폴더 라우터

```yaml
# 루트 정본
GLOSSARY.md   어휘 단일 정본 (작품·메커니즘 용어)
BACKLOG.md    일감 인덱스 (우선순위 = PM 철님)
README.md     레포 소개

specs/        명세 (스키마·알고리즘·수치). Claude Code + claude.ai 공용.
  types.md       타입 단일 정본 (6종 이동·격돌·사격 행동·배치/전투 2페이즈)
  cards.md       카드 데이터 스키마 + 키워드
  combat.md      턴제 전투 (격돌·사격·소환·이동·시야·적 행동)
  structure.md   5층 구조 + 인격 + 정보 공개
  maps.md        맵 프리셋 (크기 × 왕 배치 + 선배치)
  signatures.md  특기 단일 정본 (대적자 영웅 능력)
  environment.md Stage 환경 (location·weather·우호 NPC)

content/      게임 데이터 (YAML). 편(courage/wisdom/justice)별 = 한 회차. 오더 늘면 order_NN_X 추가.
  cards/order_01_theodora/  오더 1 (미궁의 테오도라) 팩
    courage/ · wisdom/ · justice/   각 편(=직업 1: 용기=전사 / 지혜=사냥꾼 / 정의=사제):
                                    characters · spells · equipment · stratagems · record.md(9스테이지, 기록 카드)
    shared/                          공용(편 무관): characters_enemy(중립 적 공용) · characters_player(중립 유저 공용) · adversaries(주인공·적대자)

design/       작품 결·서사·UI. claude.ai 전용 (Claude Code 평소 안 읽음).
  narrative_ssot.md    서사 단일 정본 (테오도라 — 기원·척추·인격 변주·명명)
  worldbuilding.md     무대 사전 (이오니아/도리아·종족·태생·신앙·역사·멸칭, 범오더 공용)
  style_canon.md       집필 규칙 (양식·톤·화법·검증)
  ui_flow.md           도서관·책 펼침·UI
  card_catalog_view.md 카드 펼침 표현 규약

00_운영/      기술스택 / 스튜디오 (운영 원칙은 이 CLAUDE.md로 일원화)
tools/        card-viewer / stoa-factory (보조 도구)

# 각 폴더 README = 그 폴더의 원칙 안내.
```

## 본문 원칙

```yaml
공통:
  - 한 개념 = 한 정본 (SSOT). 다른 곳엔 포인터만 — 내용 미러 금지.
    (옛 STATE·CHANGELOG 비대의 근원 = 모든 SSOT를 한 곳에 베껴 든 미러 장부. 폐기함.)
  - 이 CLAUDE.md도 미러 금지 — 정체·라우터·운영 같은 불변 골격만. 결정 내용은 specs/content/design.
  - 변경 이력 X / 폐기 표 X / 본인 결 인용 X (git log가 보존)
  - 미확정 = TODO(이유): trigger 마커. 자연어 자유 서술 X.
  - 페이지 형식 = # 제목 → ## 단위 → YAML/표/의사코드 → ## TODO.
  - 폐기 = git rm (이력은 git log). ARCHIVE 폴더 X.

specs/:   스키마·알고리즘·수치. 산문 X → YAML/표/의사코드.
content/: 데이터 (YAML). specs/ 스키마 따름. 작가 정의 (임의 생성 X).
design/:  결정의 의도·이유·맥락. 시적 표현 OK.
```

## 자동 트리거

```yaml
본문 작성할 때 자기 묻기:
  0. 결정론적인가? YES → specs / NO → design·content. 결정 이유·맥락이 specs에 끼면 design으로.
  1. 다른 파일에도 있나?  YES → 정본 1개 결정, 나머지 포인터
  2. 미러·부풀음 검증: 다른 SSOT를 베끼고 있지 않은가 / 변경 줄수 부풀면 의심
```

## 작업 흐름

```yaml
세션 유형:
  작업: 읽기/쓰기, 결정 + 변경 + 커밋 (디폴트)
  읽기: 진단/탐색만, 커밋 X

흐름:
  1. CLAUDE.md 부팅 + 철님 지시 확인
  2. 작업 영역 진입 (폴더 라우터)
  3. 작업 진행
  4. 정합성 spot check (grep 옛 어휘 잔재 / 변경 파일 점검)
  5. 일괄 승인 → 커밋 → push
  6. 토큰 흔적 제거 (로컬 레포 삭제)

커밋:
  형식: [카테고리] 내용
  단위: 1 작업단위 = 1 커밋 (분할 default X)
  author: 클로드씨
  push 전 rebase 확인 (병렬 세션 가능)

편집 주체:
  철님:    GitHub 페이지 직접 편집 ([사용자] 커밋, 단일 값 — 코스트·수치·플레이버)
  클로드씨: 클론 후 흩어진 정합 일괄 (여러 파일 맞물린 변경)
```

## 메모리 vs git

```yaml
git이 진리. 메모리 ≪ git. 충돌 시 git 따름. 추측 X (모르면 git 보고 답).
작업 전 본인 확인 — 확인 없이 커밋 금지.
```

## 호명

```yaml
클로드씨 ↔ 철님 (다정한 존댓말)
```
