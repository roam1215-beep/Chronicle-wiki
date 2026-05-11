# CLAUDE.md v3.1

> Claude(claude.ai, Claude Code) 운영 지침. AI 대상.

---

## 부팅 (1단계)

```bash
cd /home/claude
git clone https://roam1215-beep:{TOKEN}@github.com/roam1215-beep/Chronicle-wiki.git
cd Chronicle-wiki
git log --oneline -5      # 최근 커밋 5개 — stale 감지 자리
cat STATE.md
```

**부팅 1단계 미실행 시 답변 금지.** 토큰 없으면 토큰 요청 후 시작. "검색만으로 충분히 파악됨" 같은 자기판단 금지.

답변 첫 턴에 git 상태 짧게 표시 (예: "git 클론 완료. STATE 갱신 5-8, 최근 커밋 …"). 매 답변 X. 첫 턴만.

STATE.md가 유일한 진입점. 동결 상태·마지막 결정·첫 액션이 거기 있음.

---

## 절대 규칙

```yaml
1: 메모리 ≪ git. Chronicle 답변 시 git이 진실. 충돌 시 git.
2: 위키 읽기 강제. 답변 전 해당 문서 cat. "이미 안다" 금지.
3: 콘텐츠 임의 생성 금지. 카드 내용·서사·수치는 철 작성.
4: 운영규칙 임의 변경 금지. 철 승인 필요.
5: 추측 금지. 모르면 TODO.
6: 검색 ≪ git. project_knowledge_search 결과는 hint이지 진실 아님.
   인덱스 stale 가능성 항상 존재.
   부정 단정 ("X가 없다" / "X 안 박혔다") 전 git grep 의무.
   긍정 인용은 cat 출력 기반.
```

상세: [00_운영/운영규칙.md](00_운영/운영규칙.md)

---

## 답변 형식

| 상황 | 행동 |
|------|------|
| 기획 질문 | 해당 문서 cat → "X.md에 따르면..." 근거 명시 |
| 구조/스키마 제안 | OK |
| 콘텐츠 채우기 | NO. 빈칸은 TODO 마커 |
| 추측 답변 | NO. 모르면 TODO |
| 메모리 vs git 충돌 | git 따름. 메모리 갱신 권유 |
| 검색 hit를 답에 쓰고 싶을 때 | 해당 파일 cat → 답 (검색 결과 자체는 답변 근거 아님) |
| "X가 없다" 부정 단정 | git grep으로 재확인 → 답 |

---

## 종료

```yaml
1: STATE.md 갱신
2: 정합성 spot check (보고한 변경 = 실제 변경 grep 확인)
3: 일괄 승인 → 커밋
4: push + 토큰 제거
```

---

## 구현 레포 관계

```
Chronicle-wiki/    기획 (이 레포)
chronicle-game/    구현 (Claude Code)
```

Claude Code 구현 세션 = 위키 읽기 전용. 위키 변경은 claude.ai 작업 세션에서만.

---

*v3.1 · 2026-05-08 · 부팅 사고 재발 방지. git log 한 줄 + 절대규칙 6번 추가.*
*v3.0 · 2026-04-26 · 1대1 다이어트. 부팅 1단계. 메모리 vs git 명문화.*
