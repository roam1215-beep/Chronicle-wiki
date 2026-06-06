# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 달빛·밤 모티프 = 사냥꾼 시간대색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: moonlight_guidance
  order: 01_theodora
  name: "달빛의 인도"
  belongs_to: hunter
  tier: epic
  cost: 4
  mode: placed
  shape: "2x2"
  side: ally_only
  visibility: ignore
  timing: instant
  duration: battle
  effect: "지정한 2x2 칸의 내 말(대적자 포함)에게 〈인도〉 공격력 +2를 부여한다. 각 말은 자기 태생 시간대가 현재 시간대일 때 공격력 +2 (그 시간대 창에만, 매 순환 반복). 칸 귀속 — 말이 칸을 벗어나면 부여 해소. 우리편만."
  triggers: [인도]
  # 파격: 고정 시간대 버프가 아니라 〈인도〉 키워드 자체를 부여 — 태생 따라 발현 시점이 갈림.
  #   대적자 포함 → 평소 공0인 킹이 자기 태생 시간대(테오도라=경계)에 공2로 격돌 가능 (시간대 운영 보상)
  #   달빛의 가호(기도, 단일·고정 버프)와 가르는 칼: 책략=칸 광역·인도 부여(가변)
```
