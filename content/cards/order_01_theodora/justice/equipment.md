# 오더 1 (테오도라) — 사제 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: priest.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Equipment 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: dusk_order_war_hammer
  order: 01_theodora
  name: "황혼 교단 전투 망치"
  belongs_to: priest
  tier: epic
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "공격력 +2. 격돌마다 uses -1 · 의지 +1. uses 0이면 이 장비만 묘지(대적자 생존)."
  # ※미검증
```
