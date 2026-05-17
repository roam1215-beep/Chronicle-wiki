# 오더 1 (테오도라) — 대적자

> 오더 1 양쪽 대적자 (주연 + 적). 회차 인격으로 persona 결정.
> 능력치 = 시뮬 검증 후 박음 (펜딩).
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: theodora_dog_of_rakia
  name: "테오도라"
  epithet: "라키아의 들개"
  
  # 3축 (작품 결)
  faction: surface
  race: human
  birth: 한낮
  
  # 카테고리
  category: adversary
  
  # 직업
  class: warrior              # 잠정 (작가 결로 결정)
  belongs_to: null
  
  # 타입
  type: adversary
  
  # 등급
  tier: mythic
  
  # 의지 비용
  cost: null
  
  # 능력치 (펜딩)
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  variants: null
  
  # 키워드
  keywords: []
  
  # 메타
  persona: courage            # 회차 인격
  is_protagonist: true

- id: bald_lion_of_rakia
  name: "발드"
  epithet: "라키아의 사자"
  
  faction: labyrinth
  race: horde
  birth: 심야
  
  category: adversary
  class: warrior              # 잠정
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  variants: null
  keywords: []
  
  persona: courage            # 회차 인격 (테오도라와 동일)
  is_protagonist: false
```
