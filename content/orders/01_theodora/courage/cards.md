# 용맹한 테오도라 — 스토리 카드

> 90장 = 9 스테이지 × 10장. 현재 작성: 챕터 1 스테이지 1 (라키아의 들개)

## 챕터 1 — 버려진 아이

### 스테이지 1: 라키아의 들개

```yaml
# 페이즈 골격 (용맹 측면)
phase_1: "도적이 마을에 침공"
phase_2: "도적을 마을에서 몰아냄 + 토벌대 합류"
phase_3: "도적단 지부 들이침"
phase_fate: "라키아의 사자 (발드) 와의 전투"

stage_setup:
  location: "라키아"
  setting_notes: "마을 치안 어렸을 때부터 나빴음. 도적 위협 누적."
  toughness: "튜토리얼, 장소 특수 규칙 X"
```

#### 페이즈 1 카드 풀 (잠정 시드)

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
  effect: "다음 페이즈 시작 시 테오도라 armor +1"

- id: c1_s1_p1_card_3
  kind: event
  title: "타오르는 지붕"
  description: "불이 번진다. 시야가 좁아진다."
  effect: "이 페이즈 모든 사격 행동 X"
```

#### 페이즈 2 카드 풀 (잠정)

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
  effect: "다음 페이즈 R1 시간대 = border (전환 페널티)"
```

#### 페이즈 3 카드 풀 (잠정)

```yaml
- id: c1_s1_p3_card_1
  kind: battle
  title: "지부의 보초"
  description: "도적단 지부 앞을 지키는 둘."
  enemies:
    - { id: bandit_grunt, count: 2 }

- id: c1_s1_p3_card_2
  kind: chance
  category: blessing
  title: "사자의 시야 밖"
  description: "두목이 지부 뒤채에 있다. 뒷문으로 돌아갈 수 있다."
  effect: "운명 페이즈 첫 라운드 사격·축복·저주 우선권"

- id: c1_s1_p3_card_3
  kind: event
  title: "지부의 함정"
  description: "들어가는 순간 발 밑이 흔들린다."
  effect: "운명 페이즈 R1 우리편 전열 좌측 armor -1 (음수 시 0)"
```

#### 운명 페이즈

```yaml
- id: c1_s1_fate
  kind: fate
  title: "라키아의 사자"
  description: "두목과 마주 선다. 별명대로 사자다."
  adversary:
    id: bald_lion_of_rakia
    count: 1
```

### 스테이지 2: 라키아의 사자

```yaml
# 명명만 작성됨 (챕터.md)
# 페이즈 골격 + 카드: [펜딩, 작가 정의]
```

### 스테이지 3: 골짜기는 더 이상 울지 않는다

```yaml
# 명명만 작성됨
# 페이즈 골격 + 카드: [펜딩, 작가 정의]
```

## 챕터 2 — 단말마와 메아리

```yaml
# 스테이지 명만 작성됨 (도망치는 자들 / 다가오는 위협 / 헤매임의 끝)
# 페이즈 + 카드: [펜딩]
```

## 챕터 3 — 신탁

```yaml
# 스테이지 명만 작성됨 (귀환 / 기만과 체념 사이 / 변하지 않는 것들)
# 페이즈 + 카드: [펜딩]
```

## 카드 풀 통계

```yaml
잠정 작성: 1 fate + 9 일반 (3 phase × 3장)
목표: 90장 (9 스테이지 × 10장)
현재 진척: 10 / 90

분포 (잠정 시드, 챕터 1 스테이지 1 기준):
  battle:  3장 (33%)
  chance:  3장 (33%)
  event:   3장 (33%)
  fate:    1장
```

## TODO

```yaml
- TODO(콘텐츠): 스테이지 1-2 / 1-3 페이즈 골격 + 카드
- TODO(콘텐츠): 챕터 2~3 모든 스테이지 페이즈 골격 + 카드
- TODO(밸런스): 카드 종류 비율 검증 (battle/event/chance)
- TODO(시스템): 우호 NPC 영입 (페이즈 어디서?)
- TODO(시스템): 토벌대 환경 모디파이어
```
