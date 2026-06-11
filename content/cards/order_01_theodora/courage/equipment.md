# 오더 1 (테오도라) — 전사 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.

```yaml
# 코스트순

- id: morea_club
  order: 01_theodora
  name: "투박한 모레아 곤봉"
  belongs_to: warrior
  tier: rare
  cost: 2
  attach_target: king
  attach_side: ally
  uses: 3
  effect: "부착된 대적자 공격력 +1. 대적자가 격돌할 때마다(능동·수동 피격·돌파 후 관통 전부) uses -1. uses 0이 되면 이 장비만 묘지로 가고 대적자는 생존(공격력 +1 해제)."
  keywords: []

- id: morea_steel_hammer
  order: 01_theodora
  name: "모레아산 강철 망치"
  belongs_to: warrior
  tier: rare
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "부착된 대적자 공격력 +2. 대적자가 격돌할 때마다(능동·수동 피격·돌파 후 관통 전부) uses -1. uses 0이 되면 이 장비만 묘지로 가고 대적자는 생존(공격력 +2 해제)."
  keywords: []

- id: thunderstruck_steel_hammer
  order: 01_theodora
  name: "벼락 맞은 강철 망치"
  belongs_to: warrior
  tier: epic
  cost: 6
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "부착된 대적자 공격력 +3. 대적자가 능동 격돌(적 칸으로 진입)할 때, 그 격돌 계산 직전에 한해 추가 공격력 +2(일시 — 그 격돌에만 적용, 누적 X, 수동 피격엔 미적용). 대적자가 격돌할 때마다(능동·수동 피격·돌파 후 관통 전부) uses -1. uses 0이 되면 이 장비만 묘지로 가고 대적자는 생존(모든 공격력 보너스 해제)."
  keywords: []
```
