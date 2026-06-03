# 오더 1 (테오도라) — 전사 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: warrior.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Spell 스키마 결로. 작가 결 = 철님.
> ※ 전사 데모 덱 시안 — 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순 6장

- id: token_of_promise
  order: 01_theodora
  name: "약속의 징표"
  belongs_to: warrior
  tier: rare
  cost: 2
  targeting: single        # single 2회 지정 (대상 둘)
  target_side: ally_normal # 아군 중 일반만 (대적자 제외)
  range_shape: ""          # 범위 무관
  effect: "내 유닛 둘을 각각 지정한다(대적자 제외). 두 대상에 공격력 +1, 체력 +1. 결속이 걸린 대상에는 다른 결속 카드를 쓸 수 없다(중첩 불가). 묶인 둘 중 하나가 사망하면 살아남은 쪽의 공격력·체력 버프가 사라진다(동반 사망 없음)."
  keywords: [결속]
  # flavor: "서로의 무사와 행운을 바라는 기도로, 한쪽이 죽으면 같이 끊어진다. 선원들이 자주 사용했다고 전해진다"

- id: embrace_of_gaia
  order: 01_theodora
  name: "대지의 포옹"
  belongs_to: warrior
  tier: epic
  cost: 2
  targeting: single
  target_side: ally
  range_shape: ""
  effect: "지정한 내 유닛에 임시 방어도 5를 부여한다. 다음 내 턴 시작 시 사라진다."
  keywords: []
  # flavor: "거친 대지 위에서 가장 믿음직한 여신은 바로 그녀입니다"

- id: death_prayer
  order: 01_theodora
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

- id: shield_of_faith
  order: 01_theodora
  name: "믿음의 방패"
  belongs_to: warrior
  tier: rare
  cost: 3
  targeting: single
  target_side: ally
  range_shape: ""
  effect: "필드의 내 유닛 1기를 지정한다(범위 무관). 보호막 1(1회 무효), 공격력 +1(영구)을 부여한다."
  keywords: []
  # flavor: "가호는 당신이 믿는 만큼 강해지고 의심하는 만큼 약해진다"

- id: silencing_earth
  order: 01_theodora
  name: "침묵하는 대지"
  belongs_to: warrior
  tier: rare
  cost: 3
  targeting: area
  target_side: null        # area 미적용 (가로 1x4 직선의 적)
  range_shape: "1x4"
  effect: "지정한 가로 4칸 직선의 적 유닛에 피해 1, 1턴 동안 이동 불가(이동·격돌·관통 X, 사격은 가능). 다음 내 턴 시작 시 해제. 시야 안만 지정 가능."
  keywords: []
  # flavor: "그녀의 분노는 오래가고 또 치명적입니다"

- id: wrath_of_gaia
  order: 01_theodora
  name: "대지의 분노"
  belongs_to: warrior
  tier: common
  cost: 4
  targeting: area
  target_side: null        # area 미적용 (2x2 범위 안 모든 유닛)
  range_shape: "2x2"
  effect: "지정한 2x2 칸 범위에 피해 2. 범위 안의 모든 유닛에 적용(아군 포함). 시야 안만 지정 가능."
  keywords: []
  # flavor: "땅 위에서 그녀의 분노를 사는 것은 현명한 일이 아닙니다"
```
