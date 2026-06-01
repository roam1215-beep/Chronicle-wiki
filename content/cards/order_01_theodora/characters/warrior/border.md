# 오더 1 (테오도라) — 전사 인물 / 경계 (border)

> 오더 1 팩 한정. belongs_to: warrior, faction: border.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.
> ※ 전사 데모 덱 시안 — 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순 2장

- id: bridge_highwayman
  name: "다리 위 노상강도"
  faction: border
  race: human
  birth: 여명
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: rare
  cost: 1
  attack: 2
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: []
  is_protagonist: false
  # flavor: "통행자와 행상인의 걱정거리로, 다리 위의 악독한 협상가인 그들에게 타협은 없다"

- id: bridge_bandit_chief
  name: "다리 위 도적단 두목"
  faction: border
  race: human
  birth: 여명
  category: normal
  class: null
  belongs_to: warrior
  type: soldier
  tier: common
  cost: 4
  attack: 4
  defense: 4
  hp: 1
  shields: 0
  variants: null
  keywords: [강림]
  is_protagonist: false
  # 강림: 경계 턴마다 임시 방어도 +2 (그 턴만)
  # flavor: "다리 위를 지나가려면 그와 불편한 거래를 해야 한다, 당신이 원치 않더라도"
```
