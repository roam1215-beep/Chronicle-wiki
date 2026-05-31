# 오더 1 (테오도라) — 대적자

> 오더 1 양쪽 대적자 (주연 + 적). 인격별 분기 = 다른 카드 id.
> 회차 인격으로 자동 선택 — 같은 인격 결에서 양쪽 대적자 둘 다 같은 페르소나.
> 기본 스펙: attack=0 / defense=0 / hp=20 / shields=0
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

## 테오도라 (주연 영웅)

```yaml
- id: theodora_courage
  name: "테오도라"
  
  # 3축
  faction: surface
  race: human
  birth: 낮
  
  # 카테고리
  category: adversary
  
  # 직업
  class: warrior              # 용맹한 테오도라 = 전사
  belongs_to: null
  
  # 타입
  type: adversary
  
  # 등급
  tier: mythic
  
  # 의지 비용
  cost: null
  
  # 능력치 (대적자 기본 스펙)
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  # 특기 (signature_skill)
  signature_skill:
    cost: 1
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  
  # 키워드
  keywords: []
  
  # 메타
  persona: courage
  is_protagonist: true

- id: theodora_wisdom
  name: "테오도라"
  
  faction: surface
  race: human
  birth: 낮
  
  category: adversary
  class: hunter               # 지혜로운 테오도라 = 사냥꾼
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  signature_skill:
    cost: 1
    effect: "사용한 라운드 동안 임시 공격력 +1, 사수 결 원거리 공격 (2칸 가로세로, 시야 안 적). 라운드 종료 시 0으로 복귀."
    keywords: []
  
  keywords: []
  
  persona: wisdom
  is_protagonist: true

- id: theodora_justice
  name: "테오도라"
  
  faction: surface
  race: human
  birth: 낮
  
  category: adversary
  class: priest               # 정의로운 테오도라 = 사제
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  signature_skill:
    cost: 1
    effect: "지정한 아군(우호 NPC 포함) 또는 본인의 hp +1. 범위 무관. 최대 hp 초과 X (카드 효과로 최대 hp 늘어난 경우 그 값 기준)."
    keywords: []
  
  keywords: []
  
  persona: justice
  is_protagonist: true
```

## 발드 (적 대적자)

```yaml
- id: bald_courage
  name: "발드"
  
  # 3축
  faction: labyrinth
  race: horde
  birth: 밤
  
  category: adversary
  class: warrior              # 용맹한 회차 = 전사
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  signature_skill:
    cost: 1
    effect: "[펜딩 — 작가 박음]"
    keywords: []
  
  keywords: []
  
  persona: courage
  is_protagonist: false

- id: bald_wisdom
  name: "발드"
  
  faction: labyrinth
  race: horde
  birth: 밤
  
  category: adversary
  class: warrior              # 지혜로운 회차 = 전사
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  signature_skill:
    cost: 1
    effect: "[펜딩 — 작가 박음]"
    keywords: []
  
  keywords: []
  
  persona: wisdom
  is_protagonist: false

- id: bald_justice
  name: "발드"
  
  faction: labyrinth
  race: horde
  birth: 밤
  
  category: adversary
  class: sovereign            # 정의로운 회차 = 군주
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  
  variants: null
  
  signature_skill:
    cost: 1
    effect: "본인 이동 범위 8칸 안 빈 칸에 보병 1명 소환. 보병 결 = [펜딩 — 소환 대상 결]."
    keywords: []
  
  keywords: []
  
  persona: justice
  is_protagonist: false
```

## TODO

```yaml
- TODO(작가): 발드 용기·지혜 인격 특기 결
- TODO(시스템): 군주 특기 소환 보병 결 (소환 대상 결 펜딩)
- TODO(시뮬): 대적자 기본 스펙 hp 20 검증 (시뮬 후 조정)
```
