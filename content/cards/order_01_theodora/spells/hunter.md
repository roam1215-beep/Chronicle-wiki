# 오더 1 (테오도라) — 사냥꾼 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

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
```
