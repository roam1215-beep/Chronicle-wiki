# 오더 1 (테오도라) — 대적자

> 오더 1 양쪽 대적자 (주연 + 적). 인격별 분기 = 다른 카드 id.
> 회차 인격이 어느 id를 쓸지 결정 (카드엔 인격 필드 없음).
> hp 위계·능력치 결은 specs/cards.md "대적자 hp 위계" 참조.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

## 테오도라 (주연 영웅 — 플레이어 선택, 스테이지1 시작 0/0/20)

```yaml
- id: theodora_courage
  order: 01_theodora
  name: "용맹한 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: warrior              # 용맹한 테오도라 = 전사
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 1
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  keywords: []
  is_protagonist: true

- id: theodora_wisdom
  order: 01_theodora
  name: "지혜로운 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: hunter              # 지혜로운 테오도라 = 사냥꾼
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 1
    effect: "사용한 턴 동안 임시 공격력 +1, 사수 결 원거리 공격 (8방향 1칸, 시야 안 적). 턴 종료 시 0으로 복귀."
    keywords: []
  keywords: []
  is_protagonist: true

- id: theodora_justice
  order: 01_theodora
  name: "정의로운 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: priest              # 정의로운 테오도라 = 사제
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 1
    effect: "지정한 아군(우호 NPC 포함) 또는 본인의 hp +1. 범위 무관. 최대 hp 초과 X (카드 효과로 최대 hp 늘어난 경우 그 값 기준)."
    keywords: []
  keywords: []
  is_protagonist: true
```

## 발드 (적 대적자 — 챕터 1 보스, hp 30)

```yaml
- id: bald_courage
  order: 01_theodora
  name: "무모한 발드"
  race: human
  birth: 낮
  category: adversary
  class: warrior
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 30
  shields: 0
  signature_skill:
    cost: 1
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  # 특기 잠정 — 테오도라 용기 거울. 고유 특기로 교체 가능 (작가 결)
  keywords: []
  is_protagonist: false

- id: bald_wisdom
  order: 01_theodora
  name: "교활한 발드"
  race: human
  birth: 낮
  category: adversary
  class: hunter              # 교활한 발드 = 사냥꾼 (지혜 테오도라와 동일 특기, 확정)
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 30
  shields: 0
  signature_skill:
    cost: 1
    effect: "사용한 턴 동안 임시 공격력 +1, 사수 결 원거리 공격 (8방향 1칸, 시야 안 적). 턴 종료 시 0으로 복귀."
    keywords: []
  keywords: []
  is_protagonist: false

- id: bald_justice
  order: 01_theodora
  name: "위선적인 발드"
  race: human
  birth: 낮
  category: adversary
  class: sovereign           # 위선적인 발드 = 군주
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 30
  shields: 0
  signature_skill:
    cost: 1
    effect: "본인 이동 범위 8칸 안 빈 칸에 보병 1명 소환. 보병 결 = [펜딩 — 소환 대상 결]."
    keywords: []
  keywords: []
  is_protagonist: false
```

## 프리키온 (스테이지 1 운명전 보스, 1/0/20)

```yaml
- id: phrygion
  order: 01_theodora
  name: "성급한 프리키온"
  race: human
  birth: 황혼
  category: adversary
  class: warrior
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 1                   # 약한 심장(0) 아님 — 점령당해도 매 턴 1 반격
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 1
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  # 특기 잠정 — 거울. '성급함' 고유 특기로 교체 예정 (작가 결)
  keywords: []
  is_protagonist: false
```

## 이오니아 탈주병 (스테이지 1 일반전 — hp 10)

> 이오니아 탈주병이 라키아 토착 도적 무리와 합류해 세를 키워 치안을 어지럽힌다.
> 페이즈 1=전사 / 2=사수 / 3=떠돌이 (각 hp 10, 얇은 덱).

```yaml
- id: ionia_remnant_warrior
  order: 01_theodora
  name: "이오니아 탈주병 전사"
  race: human
  birth: 낮
  category: adversary
  class: warrior             # 전사 특기
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 10
  shields: 0
  signature_skill:
    cost: 1
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  keywords: []
  is_protagonist: false

- id: ionia_remnant_archer
  order: 01_theodora
  name: "이오니아 탈주병 사수"          # 이름은 사수, 직업은 사냥꾼 (대적자 타입은 킹 고정)
  race: human
  birth: 낮
  category: adversary
  class: hunter             # 사냥꾼 특기 (원거리)
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 10
  shields: 0
  signature_skill:
    cost: 1
    effect: "사용한 턴 동안 임시 공격력 +1, 사수 결 원거리 공격 (8방향 1칸, 시야 안 적). 턴 종료 시 복귀."
    keywords: []
  keywords: []
  is_protagonist: false

- id: ionia_wandering_drifter
  order: 01_theodora
  name: "헤매이는 떠돌이"
  race: human
  birth: 황혼
  category: adversary
  class: wanderer            # 방랑자 특기
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 10
  shields: 0
  signature_skill:
    cost: 1
    effect: "사용한 턴에 본인이 1회 더 이동할 수 있다 (격돌 진입 가능)."
    keywords: []
  keywords: []
  is_protagonist: false
```

## TODO

```yaml
- TODO(작가): 발드 무모/교활/위선 고유 특기 (현재 거울·기성품 잠정)
- TODO(작가): 프리키온 '성급함' 고유 특기 (현재 거울 잠정)
- TODO(시스템): 군주 특기 소환 보병 결 (소환 대상 결 펜딩)
- TODO(콘텐츠): 지혜·정의 회차 스테이지1 일반전/운명전 대적자
