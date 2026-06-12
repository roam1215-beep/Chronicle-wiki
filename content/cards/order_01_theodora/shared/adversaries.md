# 오더 1 (테오도라) — 대적자

> 오더 1 양쪽 대적자 (주연 + 적). 인격별 분기 = 다른 카드 id.
> 회차 인격이 어느 id를 쓸지 결정 (카드엔 인격 필드 없음).
> hp 위계·능력치 결은 specs/cards.md "대적자 hp 위계" 참조.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

## 테오도라 (주연 영웅 — 플레이어 선택, 스테이지1 시작 0/0/20)

```yaml
- id: theodora_courage
  order: 01_theodora
  name: "전사 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: warrior              # 용기편(courage) = 전사
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 2
    effect: "본인의 방어력 +1 (그 배틀 내내 누적, 보호막 X)"
    keywords: []
  keywords: []
  is_protagonist: true

- id: theodora_wisdom
  order: 01_theodora
  name: "검은 숲 사냥꾼 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: hunter              # 지혜편(wisdom) = 사냥꾼
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 2
    effect: "〈저격 1〉 발동 — 8방향 2칸 이내 적 1명(인물·대적자)에게 피해 1 (그 턴 1회). signatures.md ### 저격."
    keywords: []
  keywords: []
  is_protagonist: true

- id: theodora_justice
  order: 01_theodora
  name: "황혼 사제 테오도라"
  race: human
  birth: 황혼
  category: adversary
  class: priest              # 정의편(justice) = 사제
  belongs_to: null
  type: adversary
  tier: mythic
  cost: null
  attack: 0
  defense: 0
  hp: 20
  shields: 0
  signature_skill:
    cost: 2
    effect: "대적자 기준 상하좌우·대각 2칸 이내 1명(적 인물·적 대적자·내 인물·내 대적자 모두 가능)의 생명력 +1 회복 (최대치 초과 X) — signatures.md ### 회복."
    keywords: []
  keywords: []
  is_protagonist: true
```

