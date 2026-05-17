# 오더 1 (테오도라) — 용기 인격 / 스테이지 1

> 챕터 1 스테이지 1: **라키아의 들개** (튜토리얼)
> 10장 = 9 일반 (3 페이즈 × 3장) + 1 운명.
> 페이즈 결 = 선택·거부·감내 (3장 노출).
> specs/cards.md StoryCard 스키마 결로. 작가 결 = 철님.

```yaml
# 페이즈 골격 (용기 인격 결)
phase_1: "도적이 마을에 침공"
phase_2: "도적을 마을에서 몰아냄 + 토벌대 합류"
phase_3: "도적단 지부 들이침"
phase_fate: "라키아의 사자 (발드) 와의 전투"

stage_setup:
  location: "라키아"
  setting_notes: "마을 치안 어렸을 때부터 나빴음. 도적 위협 누적."
  toughness: "튜토리얼, 장소 특수 규칙 X"
```

## 페이즈 1 카드 풀 (잠정 시드)

```yaml
# 3장 노출, 선택 1 / 거부 1 / 감내 1
# 잠정, 시뮬 후 조정

- id: c1_s1_p1_card_1
  kind: battle
  title: "마을 입구의 도적"
  description: "마을 입구에서 칼을 빼든 도적 셋."
  enemies:
    - { id: bandit_grunt, count: 2 }

- id: c1_s1_p1_card_2
  kind: chance
  category: opportunity
  title: "마을 사람의 외침"
  description: "한 노인이 무기고를 가리킨다."
  effect: "다음 페이즈 시작 시 테오도라 방어도 +1"

- id: c1_s1_p1_card_3
  kind: event
  title: "타오르는 지붕"
  description: "불이 번진다. 시야가 좁아진다."
  effect: "이 페이즈 사수 타입 카드 전투 X (시야 제약)"
```

## 페이즈 2 카드 풀 (잠정)

```yaml
- id: c1_s1_p2_card_1
  kind: battle
  title: "도적의 반격"
  description: "마을에서 밀려난 도적들이 골목에서 다시 덤빈다."
  enemies:
    - { id: bandit_grunt, count: 3 }

- id: c1_s1_p2_card_2
  kind: event
  title: "토벌대 합류"
  description: "나라의 토벌대가 도착했다. 약해 보이지만 머릿수가 늘었다."
  effect: "[펜딩] 우호 NPC 영입? 토벌대 = 환경 모디파이어?"

- id: c1_s1_p2_card_3
  kind: chance
  category: crisis
  title: "추격의 무게"
  description: "쫓다 보니 마을에서 너무 멀어졌다."
  effect: "다음 페이즈 R1 시간대 = 경계 (전환 페널티)"
```

## 페이즈 3 카드 풀 (잠정)

```yaml
- id: c1_s1_p3_card_1
  kind: battle
  title: "지부의 보초"
  description: "도적단 지부 앞을 지키는 둘."
  enemies:
    - { id: bandit_grunt, count: 2 }

- id: c1_s1_p3_card_2
  kind: chance
  category: boon
  title: "사자의 시야 밖"
  description: "두목이 지부 뒤채에 있다. 뒷문으로 돌아갈 수 있다."
  effect: "운명 페이즈 첫 라운드 사수 타입 우선 행동"

- id: c1_s1_p3_card_3
  kind: event
  title: "지부의 함정"
  description: "들어가는 순간 발 밑이 흔들린다."
  effect: "운명 페이즈 R1 우리편 5줄 좌측 방어도 -1 (음수 시 0)"
```

## 운명 페이즈

```yaml
- id: c1_s1_fate
  kind: fate
  title: "라키아의 사자"
  description: "두목과 마주 선다. 별명대로 사자다."
  adversary:
    id: bald_courage          # 용기 인격 (회차 인격으로 자동 선택)
    count: 1
```

## TODO

```yaml
- TODO(밸런스): 카드 종류 비율 검증 (battle/event/chance)
- TODO(시스템): 우호 NPC 영입 (페이즈 어디서?)
- TODO(시스템): 토벌대 환경 모디파이어
```
