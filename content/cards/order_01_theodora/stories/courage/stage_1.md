# 오더 1 (테오도라) — 용기 인격 / 스테이지 1

> 챕터 1 "버려진 아이" 스테이지 1: **라키아의 들개** (튜토리얼)
> 10장 = 9 일반 (3 페이즈 × 3장) + 1 운명. 페이즈 결 = 선택·거부·감내 (3장 노출).
> 모든 전투 = 맞은편 대적자전 (일반전 hp 10 / 운명전 = 스테이지 보스 hp 20).
> specs/cards.md StoryCard 스키마 결로. 적 덱 구성·수치는 시뮬 후 조정. 작가 결 = 철님.

```yaml
phase_1: "도적이 마을에 침공 (이오니아 패잔병 전사)"
phase_2: "도적을 마을에서 몰아냄 (이오니아 패잔병 사수)"
phase_3: "도적단 지부 들이침 (헤매이는 이오니아 떠돌이)"
phase_fate: "성급한 프리키온 (스테이지 보스)"

stage_setup:
  location: "라키아"
  setting_notes: "아르고스 전쟁 패잔병이 토착 도적과 합류해 치안을 어지럽힘. 마을 치안은 본래 나빴음."
  toughness: "튜토리얼 — 장소 특수 규칙 X"
  enemy_note: "일반전 적 = 이오니아 패잔병 대적자(hp 10) + 얇은 덱(잡졸 결 미정). 운명전 = 프리키온 풀 덱."
```

## 페이즈 1 — 도적 침공 (3장: 선택 / 거부 / 감내)

```yaml
- id: c1_s1_p1_card_1
  order: 01_theodora
  persona: courage
  kind: battle
  title: "마을 입구의 도적"
  description: "마을 입구에서 칼을 빼든 패잔병."
  adversary: { id: ionia_remnant_warrior }
  # enemy_deck: 잡졸 결 미정 (시뮬 후 — 일반전 얇은 덱)

- id: c1_s1_p1_card_2
  order: 01_theodora
  persona: courage
  kind: chance
  category: opportunity
  title: "마을 사람의 외침"
  description: "한 노인이 무기고를 가리킨다."
  effect: "다음 페이즈 시작 시 테오도라 방어도 +1"

- id: c1_s1_p1_card_3
  order: 01_theodora
  persona: courage
  kind: event
  title: "타오르는 지붕"
  description: "불이 번진다. 시야가 좁아진다."
  effect: "[펜딩] 시야 제약 효과 — 현행 시야(시간대) 결로 재정의 필요"
```

## 페이즈 2 — 몰아냄 (3장)

```yaml
- id: c1_s1_p2_card_1
  order: 01_theodora
  persona: courage
  kind: battle
  title: "도적의 반격"
  description: "밀려난 패잔병이 골목에서 화살로 응수한다."
  adversary: { id: ionia_remnant_archer }
  # enemy_deck: 잡졸 결 미정 (시뮬 후)

- id: c1_s1_p2_card_2
  order: 01_theodora
  persona: courage
  kind: event
  title: "토벌대 합류"
  description: "나라의 토벌대가 도착했다. 약해 보이지만 머릿수가 늘었다."
  effect: "[펜딩] 우호 NPC 영입 또는 환경 모디파이어 (environment.md 우호 NPC 결)"

- id: c1_s1_p2_card_3
  order: 01_theodora
  persona: courage
  kind: chance
  category: crisis
  title: "추격의 무게"
  description: "쫓다 보니 마을에서 너무 멀어졌다."
  effect: "다음 페이즈 첫 턴 시간대 = 경계"
```

## 페이즈 3 — 지부 들이침 (3장)

```yaml
- id: c1_s1_p3_card_1
  order: 01_theodora
  persona: courage
  kind: battle
  title: "지부의 보초"
  description: "도적단 지부 앞을 지키는 떠돌이."
  adversary: { id: ionia_wandering_drifter }
  # enemy_deck: 잡졸 결 미정 (시뮬 후)

- id: c1_s1_p3_card_2
  order: 01_theodora
  persona: courage
  kind: chance
  category: boon
  title: "뒷문의 틈"
  description: "두목이 지부 뒤채에 있다. 뒷문으로 돌아갈 수 있다."
  effect: "[펜딩] 운명 페이즈 시작 이점 — 현행 결로 재정의 (옛 '사수 우선 행동' 폐기)"

- id: c1_s1_p3_card_3
  order: 01_theodora
  persona: courage
  kind: event
  title: "지부의 함정"
  description: "들어가는 순간 발 밑이 흔들린다."
  effect: "[펜딩] 운명 페이즈 첫 턴 우리편 일부 방어도 -1 — 현행 좌표 결로 재정의 (옛 '5줄 좌측' 폐기)"
```

## 운명 페이즈 — 성급한 프리키온

```yaml
- id: c1_s1_fate
  order: 01_theodora
  persona: courage
  kind: fate
  title: "성급한 프리키온"
  description: "황금에 눈먼 두목과 마주 선다. 성급한 칼이 먼저 움직인다."
  adversary: { id: phrygion }              # 스테이지 보스 (hp 20)
  # enemy_deck: 풀 덱 20~30장 (갖춘 덱빌드 — 시뮬 후 확정)
```

## TODO

```yaml
- TODO(콘텐츠): 일반전 잡졸 결 (다른 잡졸 또는 적 대적자만)
- TODO(콘텐츠): 프리키온 운명전 풀 덱 구성 (시뮬 후)
- TODO(콘텐츠): chance/event 효과 현행 결로 확정 (타오르는 지붕·뒷문의 틈·지부의 함정 — 펜딩)
- TODO(시스템): 우호 NPC 영입 (토벌대 — environment.md 결)
- TODO(밸런스): 페이즈 battle/event/chance 비율
```
