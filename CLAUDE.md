# CLAUDE.md

> Chronicle 위키 운영 결. 두 Claude 공용 (claude.ai 기획 + Claude Code 구현).

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
