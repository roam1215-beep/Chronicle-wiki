# 오더 1 (테오도라) — 전사 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.
> ※ 전사 데모 덱 시안 — 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순 2장

- id: token_of_promise
  name: "약속의 징표"
  belongs_to: warrior
  tier: rare
  cost: 2
  targeting: single        # single 2회 지정 (대상 둘)
  target_side: ally        # 내 유닛만, 대적자 지정 불가
  range_shape: ""          # 범위 무관
  effect: "내 유닛 둘을 각각 지정한다(대적자 제외). 두 대상에 공격력 +1, 체력 +1. 결속이 걸린 대상에는 다른 결속 카드를 쓸 수 없다(중첩 불가). 묶인 둘 중 하나가 사망하면 살아남은 쪽의 공격력·체력 버프가 사라진다(동반 사망 없음)."
  keywords: [결속]
  # flavor: "서로의 무사와 행운을 바라는 기도로, 한쪽이 죽으면 같이 끊어진다. 선원들이 자주 사용했다고 전해진다"

- id: death_prayer
  name: "죽음의 기도"
  belongs_to: warrior
  tier: epic
  cost: 3
  targeting: single
  target_side: ally
  range_shape: ""
  effect: "지정한 내 유닛은 이번 턴을 마무리할 때 사망한다. 그 전까지 공격력 +6을 얻는다."
  keywords: []
  # flavor: "죽음의 신에게 생명을 바치고 강력한 힘을 얻은 금지된 기도"
```
