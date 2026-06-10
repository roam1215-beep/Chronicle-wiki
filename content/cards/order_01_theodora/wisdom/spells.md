# 오더 1 (테오도라) — 사냥꾼 기도

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
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
  effect: "대상 1명에게 피해 1. 적·아군 어느 진영이든, 인물·대적자 전부 지정 가능(내 인물·내 대적자도 포함)."
  # 0코 범용 핑 — 마무리·콤보·자기 피해 트리거 점화용.
  # 바람 모티프 = 사냥꾼색(바람의 가호와 짝). [피해 효과] 어휘 펜딩이라 keywords 비움

- id: moonlight_blessing
  order: 01_theodora
  name: "새벽의 인도"
  belongs_to: hunter
  tier: epic
  cost: 2
  target: self
  side: ally
  timing: instant
  duration: once
  effect: "내 덱에서 [등장] 효과를 가진 인물 카드 1장을 뽑는다."
  # [대기] 적 처형 + 드로우 1 — 타이밍 노림수(낙석과 짝).

- id: wind_blessing
  order: 01_theodora
  name: "바람의 가호"
  belongs_to: hunter
  tier: common
  cost: 2
  target: one
  side: ally_normal
  timing: instant
  duration: battle
  effect: "내 일반 인물 1명을 지정한다(대적자 제외). 그 인물에게 배틀 내내 공격력 +2를 부여한다."
  # 배틀 지속 공+2 부여 — 대상 폭넓음(내 대적자만 제외).

- id: shadow_blade
  order: 01_theodora
  name: "그림자 칼날"
  belongs_to: hunter
  tier: rare
  cost: 2
  target: adversary
  side: enemy
  timing: instant
  duration: once
  effect: "적 대적자에게 피해 3."
  # 적 킹 직격 번 — 바람의 칼날(0코 범용 1딜)의 큰형. 어그로 갈래 마무리 화력. 그림자 = 밤·어둠(사냥꾼색)
  # [피해 효과] 어휘 펜딩이라 keywords 비움

- id: whirlwind_blessing
  order: 01_theodora
  name: "돌개바람의 가호"
  belongs_to: hunter
  tier: common
  cost: 5
  target: self
  side: ally
  timing: instant
  duration: once
  duration_turns: 2
  effect: "이번 턴 카드 2장을 드로우한다."
  # 3코 드로우 가속 — 당겨쓰기(이번 +2 / 다음 0), 실질 +1장 + 템포. 가호 시리즈(바람·달빛과 짝)
  # target: self = 자기 자원(드로우, 말 대상 없음). 기도 target enum에 self 추가 완료(cards.md)

- id: moonlit_frenzy
  order: 01_theodora
  name: "달빛 아래 광기"
  belongs_to: hunter
  tier: rare
  cost: 6
  target: side_all
  side: ally_normal
  timing: instant
  duration: battle
  duration_turns: 1
  effect: "이번 턴 동안 등장 상태인(대기 제외) 내 모든 일반 인물(대적자 제외)의 공격력 +2. 다음 내 턴 시작 시 해제."
  #   효과가 진영 전체 버프라 칸 지정(책략) 아닌 진영 지정(기도 side_all)
  # TODO(작가): cost(4 유지?)·tier 결. 전체 공+2(그 턴) = 부여 범주 점수(mechanics.md)

- id: entangling_vines
  order: 01_theodora
  name: "당겨진 활시위"
  belongs_to: hunter
  tier: common
  cost: 2
  target: self
  side: ally
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "이번 턴 사냥꾼 특기 코스트가 0이 되고, 특기로 적에게 입히는 피해가 +1 된다."
  # 2코 — 그 턴 특기 0코 + 특기 피해 +1. 특기 장비와 연계하는 자기 강화. (구 휘감는 덩굴 책략 → 기도)

- id: moonlight_guidance
  order: 01_theodora
  name: "서풍의 인도"
  belongs_to: hunter
  tier: rare
  cost: 2
  target: one
  side: ally
  timing: instant
  duration: turns
  effect: "아군 인물 1명(대적자 포함)을 지정한다. 그 인물은 이번 턴에 한 번 더 이동할 수 있다."
  # 2코 — 최대 체력 +3(배틀 지속) + 즉시 회복. 내 대적자·인물 지정. (구 책략 → 기도)

```
