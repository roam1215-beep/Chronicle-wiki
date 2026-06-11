# 오더 1 (테오도라) — 사냥꾼 장비

> 오더 1 지혜 편 한정. belongs_to: hunter.

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
  # 1코 1회용 — 사냥꾼 특기 피해 +1.

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
  # 3코 — 사냥꾼 특기 피해 +2, 2회.
```
