# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 달빛·밤 모티프 = 사냥꾼 시간대색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: ambush
  order: 01_theodora
  name: "암습"
  belongs_to: hunter
  tier: rare
  cost: 2
  mode: placed
  shape: "row_2"
  side: enemy_only
  timing: instant
  duration: once
  effect: "지정한 가로 2칸의 적 말에 각각 피해 1. [대기] 상태인 적에게는 피해 2. 적 대적자도 지정 가능. 칸 귀속."
  # 1코 단일 즉발 — 평소 피해1, [대기] 적(갓 소환·돌파 직후) 처형 시 피해3. 봉쇄 폐기(06-07), 타이밍 노림수
```
