# 오더 1 (테오도라) — 전사 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Equipment 스키마 결로. 작가 결 = 철님.
> ※ 전사 데모 덱 시안 — 수치·키워드 미검증 (모의전 후 확정).

```yaml
- id: shield_of_nostos
  name: "귀향의 방패"
  belongs_to: warrior
  tier: legendary
  cost: 5
  effect: "부착된 유닛의 공격력 +2, 방어도 +3."
  keywords: [회수]
  # 회수: 부착 유닛 사망 시 묘지로 가지 않고 내 패로 복귀 (배틀당 1회). 복귀 후 두 번째 부착 유닛 사망 시 묘지행. 배틀 종료 시 리셋.
  # flavor: "어째선지 잃어버려도 다시 주인에게 돌아오는 무구, 필히 어느 신의 가호가 담긴 것이리라"
```
