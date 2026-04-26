# CLAUDE.md v3.0

> Claude(claude.ai, Claude Code) 운영 지침. AI 대상.

---

## 부팅 (1단계)

```bash
cd /home/claude
git clone https://roam1215-beep:{TOKEN}@github.com/roam1215-beep/Chronicle-wiki.git
cd Chronicle-wiki
cat STATE.md
```

STATE.md가 유일한 진입점. 동결 상태·마지막 결정·첫 액션이 거기 있음.

---

## 절대 규칙

```yaml
1: 메모리 ≪ git. Chronicle 답변 시 git이 진실. 충돌 시 git.
2: 위키 읽기 강제. 답변 전 해당 문서 cat. "이미 안다" 금지.
3: 콘텐츠 임의 생성 금지. 카드 내용·서사·수치는 철 작성.
4: 운영규칙 임의 변경 금지. 철 승인 필요.
5: 추측 금지. 모르면 TODO.
```

상세: [00_운영/운영규칙.md](00_운영/운영규칙.md)

---

## 답변 형식

| 상황 | 행동 |
|------|------|
| 기획 질문 | 해당 문서 cat → "@{ID}에 따르면..." 근거 명시 |
| 구조/스키마 제안 | OK |
| 콘텐츠 채우기 | NO. 빈칸은 TODO 마커 |
| 추측 답변 | NO. 모르면 TODO |
| 메모리 vs git 충돌 | git 따름. 메모리 갱신 권유 |

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

*v3.0 · 2026-04-26 · 1대1 다이어트. 부팅 1단계. 메모리 vs git 명문화.*
