# 오더 1 (테오도라) — 사냥꾼 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Equipment 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: forest_keeper_longbow
  order: 01_theodora
  name: "숲지기의 장궁"
  belongs_to: hunter
  tier: rare
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "부착된 대적자 공격력 +1. 대적자가 격돌할 때마다(능동·수동 피격·돌파 후 관통 전부) uses −1. 격돌로 피격된 적에게 독성 1 부여(누적). uses 0이 되면 이 장비만 묘지로 가고 대적자는 생존(공격력 +1·독성 부여 해제)."
  keywords: [독성]
  # 사수 무기를 킹에 — 공+1은 낮지만 격돌마다 독성 1 누적(StS 독). 사수/독 사냥꾼 보조
```
