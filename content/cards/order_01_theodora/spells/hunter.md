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
  effect: "내 일반 인물 1기를 지정한다(대적자 제외). 그 배틀 동안, 현재 시간대가 경계 또는 밤이면 공격력 +2. 낮이면 비활성 — 시간대 변동(매 턴)에 따라 켜짐/꺼짐."
  # 사냥꾼 직업색: 무리=어두운 시간대(경계·밤)에 강해지는 결. 낮 진영(이오니아) 상대로 시간대 운영 보상

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
