# 기본 — 중립 인물 / 지상 (surface)

> 기본 카드 풀 (확장팩 무관). belongs_to: neutral, faction: surface.
> 모든 직업 덱에 들어갈 수 있음.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: frontier_gatekeeper
  name: "변방의 문지기"
  
  # 3축
  faction: surface
  race: human
  birth: 낮
  
  # 카테고리
  category: normal
  
  # 직업 X / 덱 소속
  class: null
  belongs_to: neutral
  
  # 타입 (체스말 결)
  type: soldier
  
  # 등급
  tier: common
  
  # 의지 비용
  cost: 1
  
  # 능력치 (3패러미터)
  attack: 1
  defense: 1
  hp: 1
  shields: 0
  
  variants: null
  
  # 키워드 (깡통)
  keywords: []
  
  # 메타
  persona: null
  is_protagonist: false

- id: morea_valley_guard
  name: "산골짜기 수비대원"
  faction: surface
  race: human
  birth: 낮
  category: normal
  class: null
  belongs_to: neutral
  type: archer
  tier: common
  cost: 2
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: []
  persona: null
  is_protagonist: false
  # flavor: "모레아 산골짜기를 지키는 병사들로 평소에는 사냥꾼이나 다름 없다"

- id: laconia_raw_recruit
  name: "라코니아 풋내기 신병"
  faction: surface
  race: human
  birth: 낮
  category: normal
  class: null
  belongs_to: neutral
  type: soldier
  tier: common
  cost: 0
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  variants: null
  keywords: []
  persona: null
  is_protagonist: false
  # token: 모병으로만 생성. 덱·패·묘지 안 거침. 사망 시 소멸.
  # flavor: "라코니아인 신병, 지금은 풋내기일 뿐이지만 미래는 알 수 없다"
```
