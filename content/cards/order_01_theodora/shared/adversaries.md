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
    effect: "사용한 턴 동안 임시 공격력 +1, 8방향 2칸 사격 (원격 일방, 시야 안 적). 턴 종료 시 0으로 복귀."
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
    effect: "의식 스택 +1 (봉헌). 의식 = 사제 사이드 자원 — mechanics.md ### 의식 / signatures.md ### 봉헌."
    keywords: []
  keywords: []
  is_protagonist: true
```

