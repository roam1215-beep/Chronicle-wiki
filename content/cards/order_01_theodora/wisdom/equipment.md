# 오더 1 (테오도라) — 사냥꾼 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> specs/cards.md Equipment 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: crude_wooden_bow
  order: 01_theodora
  name: "조악한 나무 활"
  belongs_to: hunter
  tier: common
  cost: 1
  attach_target: king
  attach_side: ally
  uses: 1
  effect: "대적자 전용 — 장착 공격력 보정 없음. 사냥꾼 특기로 적에게 입히는 피해 +1. 특기로 적을 공격하면 uses -1, 0이면 장비만 소모(대적자 생존)."
  keywords: []
  # 1코 1회용 — 사냥꾼 특기 피해 +1. 한 번 쓰면 소멸. 장궁(+2)의 하위.

- id: morea_throwing_knife
  order: 01_theodora
  name: "모레아 순찰대 투척 단도"
  belongs_to: hunter
  tier: rare
  cost: 1
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "대적자 공격력 +1. 사냥꾼 특기·격돌로 적(대적자 제외)을 처치할 때마다 uses 충전(소진 안 됨). 그 외 사용은 uses -1, 0이면 소모(대적자 생존)."
  keywords: []
  # 1코 희귀 — 대적자 공+1. 적 처치 시 uses 충전 = 연쇄 학살 도구. 모레아 순찰대 결.

- id: forest_keeper_longbow
  order: 01_theodora
  name: "숲지기의 장궁"
  belongs_to: hunter
  tier: rare
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "대적자 전용 — 장착 공격력 보정 없음. 사냥꾼 특기로 적에게 입히는 피해 +2. 특기로 적을 공격하면 uses -1, 0이면 장비만 소모(대적자 생존)."
  keywords: []
  # 3코 — 사냥꾼 특기 피해 +2, 2회. 특기 강화의 정점.
```
