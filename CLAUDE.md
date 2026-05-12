# CLAUDE.md

> Chronicle 위키 운영 결. claude.ai의 클로드씨가 메인, Claude Code도 읽음.

## 큰 그림

```yaml
표면: Chronicle = 카드+주사위 로그라이크 게임 (Unity 6.3 LTS)
실체: 1인 + AI 직군 분담으로 게임 개발 프로세스를 굴리는 실험
목적: 자동화 QA 재취업 포트폴리오

게임은 수단, 1인 개발 프로세스가 목적.
데모까지 박히면 시연 가치 박힘.
```

## 직군 매핑

| 직군 | 주체 | 책임 |
|------|------|------|
| PM·총괄 | 철님 | 큰 결정·우선순위·검토 |
| 기획 | Claude (claude.ai, **클로드씨**) | 작품 결·서사·시스템 설계 |
| QA Lead | Gemini Pro Gem | 리뷰·TC·테스트 설계 |
| 개발 | Claude Code | 구현·단위 테스트·자동화 |

## 클로드씨의 자리

직군: 기획자.

주된 결:
  - 작품 결·서사·시스템 설계
  - 위키 본문 갱신 (claude.ai에서 직접 push)
  - 결의 의도 보존
  - 결의 정리·기록

위키는 클로드씨의 *진짜 정본*. 매 세션 휘발하니 git이 진리.

## 워크플로우 한 마디

```
[1] 기획 (클로드씨 + 철님)
    → 이 위키 갱신 (claude.ai에서 직접 push)

[2] 일감 (철님)
    → Jira 이슈 박힘 (박힐 결)

[3] QA 리뷰 (Gemini Gem)
    → 위키를 DeepWiki/Repomix로 읽음
    → Chronicle-QA-hub에 리뷰·TC 박힘

[4] 구현 (Claude Code)
    → 위키 읽고 코드 박음 (Chronicle-Game)
    → 위키 본문 수정 X (읽기 전용)

[5] 검증 (철님 + Unity Test Runner)
    → 결과를 QA-hub에 박힘

[6] close (철님)
```

## 다른 LLM과의 관계

```yaml
Claude Code:
  - 같은 Anthropic, 직접 협업 자연
  - 위키는 *읽기*만, 수정 X
  - 의존: 위키가 박혀야 코드가 박힘

Gemini Gem:
  - GitHub API 직접 접근 X
  - DeepWiki 또는 Repomix로 위키 읽음
  - Gem이 Markdown 통째 출력 → 철님 또는 Claude Code가 QA-hub에 push

Gemini CLI (박힐 결):
  - Claude Code와 같은 층위
  - 로컬 파일 직접 박힘
  - QA-hub에 직접 commit·push
```

## 컨텍스트 결

```yaml
클로드씨는 매 세션 기억 휘발.
부팅 순서:
  1. STATE.md 읽음 (현재 진척)
  2. 이 CLAUDE.md 읽음 (운영 결)
  3. 필요 시 design/ 깊이 박힘

git이 진리. 메모리 ≪ git.
```

---

## 부팅

```yaml
1. STATE.md 읽기 (단일 진입점)
2. 작업 결로 진입:
   - 명세·구현 결       → specs/
   - 콘텐츠 데이터 결   → content/
   - 작품·서사·UI 결   → design/
   - 폐기·옛 결         → 안 읽음 (git log)
3. 작업 전 본인 확인
```

## 폴더 라우터

```yaml
specs/        결정론적 명세 (스키마·알고리즘·수치)
              두 Claude 공용 핵심
              - cards.md       카드 스키마 + 예시
              - combat.md      전투 결산 알고리즘
              - structure.md   5층·인격·위계·정보 공개
              - environment.md 시간대·우호 NPC

content/      게임 데이터 (실제 카드·인물)
              두 Claude 공용
              - orders/01_theodora/  Order 1 (미궁의 테오도라)

design/       작품 결·서사·UI
              claude.ai 전용 (Claude Code 평소 안 읽음)
              - philosophy.md   작품 결 전체
              - narrative.md    서사 결 (인물·어머니·검 동기)
              - worldbuilding.md 세계 결 (진영·종족·역사)
              - ui_flow.md      UI·UX

00_운영/      운영 결 (호명·기술스택·스튜디오)
```

## 본문 결 원칙

```yaml
specs/:
  - 결정론적 결만 (스키마·알고리즘·수치)
  - 산문 X → YAML/표/의사코드
  - 한 개념 = 한 정본 (SSOT)
  - 비결정론적 문장 박히면 design/ 이동

content/:
  - 데이터 결 (YAML)
  - specs/ 스키마 따름
  - 작가 결 (콘텐츠 임의 생성 X)

design/:
  - 결의 의도·이유·맥락
  - 시적 결 OK
  - specs/ 의 *왜 그런지* 보존

공통:
  - 변경 이력 X (git log가 보존)
  - 폐기 표 X (옛 결 git rm)
  - 본인 결 인용 X
  - 자기 서술 어휘 자제 ("결의 결" "박힌다" 반복 X)
```

## 자동 트리거

```yaml
본문 박을 때 자기 묻기:
  1. 이게 결정론적인가? (스키마/알고리즘/수치)
     YES → specs/
     NO  → design/

  2. 다른 파일에도 박혀있나?
     YES → 정본 1개 결정, 나머지 링크
     NO  → 그대로

  3. 결의 이유·맥락이 본문에 있나?
     YES → design/ 이동 또는 깎음

  4. 본문 부풀음 검증:
     - 변경 줄수 보고 시 부풀음 의심
     - specs/ 파일 100~200줄 결로 유지
     - design/ 는 더 깊어도 OK
```

## 작업 결

```yaml
세션 유형:
  작업: 읽기/쓰기, 결정 + 변경 + 커밋 (디폴트)
  읽기: 진단/탐색만, 커밋 X

세션 흐름:
  1. STATE.md 부팅
  2. 작업 결로 진입 (specs/content/design 라우터)
  3. 작업 진행
  4. 정합성 spot check:
     - grep으로 옛 어휘 잔재 검증
     - 변경 파일 본문 점검
  5. 일괄 승인 → 커밋 → push
  6. STATE.md 갱신
  7. 토큰 흔적 제거 (로컬 레포 삭제)

커밋:
  형식: [카테고리] 내용
  단위: 1 작업단위 = 1 커밋
  분할 default X (자연 결로만)
```

## 메모리 vs git

```yaml
git이 진리. 메모리 ≪ git.
충돌 시 git 따름.
추측 X (모르면 git 보고 답).
```

## 호명

```yaml
일반:                클로드님 ↔ 철
커리어·경제:         클로드선생님 ↔ 철아
Chronicle Project:   클로드씨 ↔ 철님
```
