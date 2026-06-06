# 오더 1 (테오도라) — 전사 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: courage_prayer
  order: 01_theodora
  name: "용기의 기도"
  belongs_to: warrior
  tier: common
  cost: 1
  target: one
  side: ally_normal
  timing: instant
  duration: turns
  duration_turns: 1
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 공격력 +2. 다음 내 턴 시작 시 해제."

- id: ironwall_ward
  order: 01_theodora
  name: "철벽의 가호"
  belongs_to: warrior
  tier: rare
  cost: 3
  target: one
  side: ally_normal
  timing: instant
  duration: turns
  duration_turns: 1
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 턴 동안 임시 방어도 +5. 다음 내 턴 시작 시 해제."
```
