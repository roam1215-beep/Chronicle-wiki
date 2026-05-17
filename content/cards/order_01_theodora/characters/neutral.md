# 오더 1 (테오도라) — 중립 인물

> 오더 1 팩 한정. belongs_to: neutral.
> 3 인격 공통 카드 풀. 모든 직업 덱에 들어감.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
- id: bandit_grunt
  name: "도적 졸병"
  epithet: null
  
  # 3축
  faction: labyrinth
  race: horde
  birth: 심야
  
  # 카테고리
  category: normal
  
  # 직업 X / 덱 소속
  class: null
  belongs_to: neutral
  
  # 타입 (체스말 결)
  type: soldier               # 잠정 — 작가 결로 결정 가능
  
  # 등급
  tier: common
  
  # 의지 비용
  cost: 1                     # 잠정
  
  # 능력치 (펜딩)
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  variants: null
  
  # 키워드
  keywords: []
  
  # 메타
  persona: null               # 일반 인물 = null
  is_protagonist: false
```

## TODO

```yaml
- TODO(타입): 도적 졸병 타입 결정 (잠정 soldier)
- TODO(시뮬): 능력치 결 검증 (3패러미터 — 시뮬 후)
- TODO(콘텐츠): 추가 중립 인물 풀 (작가 결)
```
