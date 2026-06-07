# 오더 1 (테오도라) — 사냥꾼 책략

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: hunter.
> 3 인격(용기·지혜·정의) 공통 카드 풀.
> specs/cards.md Stratagem 스키마 결로. 작가 결 = 철님.
> 책략 = 칸 지정 발동 (기도=말 / 책략=칸). 달빛·밤 모티프 = 사냥꾼 시간대색.
> ※ 수치·키워드 미검증 (모의전 후 확정).

```yaml
# 코스트순

- id: entangling_vines
  order: 01_theodora
  name: "휘감는 덩굴"
  belongs_to: hunter
  tier: common
  cost: 1
  mode: placed
  shape: "single"
  side: enemy_only
  visibility: ignore
  timing: instant
  duration: turns
  duration_turns: 1
  effect: "지정한 단일 칸의 적 말을 1턴 봉쇄한다 — 그 적은 다음 자기 턴에 이동·격돌 불가([대기] 상태). 1턴 뒤 해제. 칸 귀속."
  # 1코 봉쇄(1턴=점수2) — 적 묶어 사격 자리 확보 / 돌파 차단. 어그로·사수 양쪽 유틸
  # 봉쇄는 예언자 직업색이나 효과 범주(점수표)라 차용. 사냥꾼 첫 봉쇄 책략

- id: moonlight_guidance
  order: 01_theodora
  name: "달빛의 인도"
  belongs_to: hunter
  tier: rare
  cost: 2
  mode: placed
  shape: "col_2"
  side: ally_only
  visibility: ignore
  timing: instant
  duration: battle
  effect: "지정한 세로 2칸의 내 일반 인물에게 공격력 +2를 부여한다(그 배틀 내내, 시간대 무관). 대적자 제외. 칸 귀속 — 말이 칸을 벗어나면 부여 해소. 우리편만."
  # 〈인도〉 제거·재설계 (06-07) — 시간대 가변 폐기, 배틀 지속 단순 공+2. cost 4→3→2, shape 2x2→세로2(col_2). 대적자 해당 없음

- id: rockfall
  order: 01_theodora
  name: "낙석"
  belongs_to: hunter
  tier: epic
  cost: 1
  mode: placed
  shape: "single"
  side: enemy_only
  visibility: ignore
  timing: instant
  duration: once
  effect: "지정한 단일 칸의 적 말에 피해 1. 그 적이 [대기] 상태이면 피해 3(갓 소환됐거나 돌파 직후 — 자기 턴이 아직 안 돌아온 기물). 적 대적자도 지정 가능. 칸 귀속."
  # 1코 단일 즉발 — 평소 피해1, [대기] 적(갓 소환·돌파 직후) 처형 시 피해3. 봉쇄 폐기(06-07), 타이밍 노림수
```
