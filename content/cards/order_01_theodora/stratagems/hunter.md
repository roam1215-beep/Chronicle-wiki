# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 달빛·밤 모티프 = 사냥꾼 시간대색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: moonlight_guidance
  order: 01_theodora
  name: "달빛의 인도"
  belongs_to: hunter
  tier: epic
  cost: 3
  mode: placed
  shape: "col_2"
  side: ally_only
  visibility: ignore
  timing: instant
  duration: battle
  effect: "지정한 세로 2칸의 내 일반 인물에게 공격력 +2를 부여한다(그 배틀 내내, 시간대 무관). 대적자 제외. 칸 귀속 — 말이 칸을 벗어나면 부여 해소. 우리편만."
  # 〈인도〉 제거·재설계 (06-07) — 시간대 가변 폐기, 배틀 지속 단순 공+2. cost 4→3, shape 2x2→세로2(col_2). 대적자 해당 없음
```
