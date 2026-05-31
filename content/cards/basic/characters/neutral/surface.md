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
```
