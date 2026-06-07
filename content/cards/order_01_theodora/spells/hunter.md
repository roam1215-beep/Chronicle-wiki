# 오더 1 (테오도라) — 사냥꾼 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: wind_blade
  order: 01_theodora
  name: "바람의 칼날"
  belongs_to: hunter
  tier: common
  cost: 0
  target: one
  side: any
  timing: instant
  duration: once
  visibility: ignore
  effect: "대상 1명에게 피해 1. 적·아군 어느 진영이든, 인물·대적자 전부 지정 가능(내 인물·내 대적자도 포함)."
  # 0코 범용 핑 — 마무리·콤보·자기 피해 트리거 점화용. 시야 무관(주문이라 안개 뚫음, 사격과 가르는 칼)
  # 바람 모티프 = 사냥꾼색(바람의 가호와 짝). [피해 효과] 어휘 펜딩이라 keywords 비움

- id: moonlight_blessing
  order: 01_theodora
  name: "달빛의 가호"
  belongs_to: hunter
  tier: epic
  cost: 2
  target: one
  side: ally_normal
  timing: instant
  duration: battle
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 쇄도 부여(그 배틀 지속) — 돌파 시 [대기] 없이 즉시 관통. + 즉시 카드 1장 드로우. 이미 쇄도를 가진 대상에게는 사용 불가."
  # 쇄도 부여 + 드로우 1 — 어그로 피니시 가속(바람의 가호 돌격과 짝). 시간대 버프 폐기·재설계 (06-07)

- id: wind_blessing
  order: 01_theodora
  name: "바람의 가호"
  belongs_to: hunter
  tier: rare
  cost: 2
  target: one
  side: ally_normal
  timing: instant
  duration: battle
  visibility: ignore
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 돌격 부여 — 소환 턴 [대기]를 무시하고 즉시 이동·격돌·사격 가능. 이미 돌격을 가진 대상에게는 사용 불가."
  # 어그로 가속 — 방금 소환한 유닛을 그 턴 바로 투입. 사냥꾼 첫 돌격 부여 카드

- id: shadow_blade
  order: 01_theodora
  name: "그림자 칼날"
  belongs_to: hunter
  tier: rare
  cost: 3
  target: adversary
  side: enemy
  timing: instant
  duration: once
  visibility: ignore
  effect: "적 대적자에게 피해 4."
  # 적 킹 직격 번 — 바람의 칼날(0코 범용 1딜)의 큰형. 어그로 갈래 마무리 화력. 그림자 = 밤·어둠(사냥꾼색)
  # 시야 무관(주문). [피해 효과] 어휘 펜딩이라 keywords 비움
```
