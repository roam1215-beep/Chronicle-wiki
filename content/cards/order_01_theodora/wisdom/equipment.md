# 오더 1 (테오도라) — 사냥꾼 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
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
  effect: "대적자 전용 — 부착된 대적자에게 〈사수〉 부여(8방 2칸 일방 사격) + 공격력 +2. 1회 사격하면 uses 0 → 장비만 소모되어 사라짐(사수 해제), 대적자는 생존."
  keywords: [사수]
  # 1코 싸구려 1회용 사수 무기. 장궁(상시 사수·매턴 공+1·3발)의 하위 — 〈사수〉+공+2로 1발 사격(공2 피해) 후 소멸

- id: morea_throwing_knife
  order: 01_theodora
  name: "모레아 순찰대 투척 단도"
  belongs_to: hunter
  tier: rare
  cost: 1
  attach_target: king
  attach_side: ally
  uses: 1
  effect: "대적자 전용 — 부착된 대적자에게 〈사수〉 부여(8방 2칸 일방 사격) + 공격력 +1. uses 1. 단 격돌(능동·간접 모두)로 적 대상이 사망하면 uses가 소진되지 않는다(처치가 이어지는 한 계속 사용). 그 외 사용은 uses −1, 0이면 소모(사수 해제)."
  keywords: [사수]
  # 1코 희귀 — 〈사수〉+공+1. 격돌 처치 시 uses 유지 = 약체 연쇄 학살 무기(공1이라 처치 대상 한정). 사격은 1회 소모. 모레아 순찰대 결

- id: forest_keeper_longbow
  order: 01_theodora
  name: "숲지기의 장궁"
  belongs_to: hunter
  tier: rare
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 3
  effect: "부착된 사냥꾼 대적자에게 〈사수〉 부여 — 상시 사격(8방향 2칸 일방, 공격력만큼 피해·시야 안 적·쏘면 노출[밤 제외]) + 매 턴 공격력 +1(그 턴). 사격할 때마다 uses −1, 0이 되면 이 장비만 묘지·대적자 생존(사수 해제). 별도 의지·특기 없이 공0 킹을 상시 사수로 만든다."
  keywords: [사수]
  # 사수 무기로 재설계 (06-07, 독성 제거). 의지·특기 없이 킹을 상시 사수화(매 턴 공+1·사격). 사격 3회 소멸.
  #   저격 특기를 쓰면 그 턴 공+1이 사수의 +1 위에 누적(1→2), 사격 채널은 이미 있어 중복 무시 (signatures.md 저격)
```
