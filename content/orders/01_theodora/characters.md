# Order 1 — 인물 카드 풀

> specs/cards.md Character 스키마 따름. 잠정 시드 (시뮬 후 확정).

## 주연

```yaml
- id: theodora_dog_of_rakia
  name: "테오도라"
  epithet: "라키아의 들개"
  faction: surface
  race: human
  birth: day
  rank: human
  tier: 1
  class: warrior              # 잠정 — 결정 시 변경
  attack: 1
  hp: 3                       # day 분배 (3:7 → 합 4)
  armor: 0
  blessings: []               # 필멸 = 가호 0
  persona: courage
  is_protagonist: true
```

## 대적자

```yaml
- id: bald_lion_of_rakia
  name: "발드"
  epithet: "라키아의 사자"
  faction: labyrinth
  race: horde
  birth: night
  rank: calamity
  tier: 3                     # 잠정 (신성)
  class: warrior              # 잠정
  attack: 11                  # night 분배 (7:3 → 합 16 중 11:5)
  hp: 5
  armor: 0
  blessings: []               # TODO: tier 3 = 가호 2, scale=wide
  persona: null
  is_protagonist: false
```

## 졸병

```yaml
- id: bandit_grunt
  name: "도적 졸병"
  epithet: null
  faction: labyrinth
  race: horde
  birth: night
  rank: horde
  tier: 1
  class: warrior
  attack: 3                   # night 분배 (7:3 → 합 4 중 3:1)
  hp: 1
  armor: 0
  blessings: []
  persona: null
  is_protagonist: false
```

## 우호 NPC (펜딩 풀)

```yaml
- id: friendly_npc_chapter_1
  name: [펜딩]
  epithet: null
  faction: [펜딩]
  race: human                 # 펜딩 — 인간 가정 (챕터 1~2 동행)
  birth: [펜딩]
  rank: human
  tier: 1
  class: [펜딩]
  attack: [펜딩]
  hp: [펜딩]
  armor: 0
  blessings: []
  persona: null
  is_protagonist: false
  
  # 메모: 챕터 1 라키아의 들개에서 영입, 챕터 2까지 동행, 챕터 3 X
```

## 붕어빵 풀 (테오도라 추가 틀, 펜딩)

```yaml
# 시점 교차 시 NPC로 등장할 곳들
# 작가 결로 차후 추가

- id: theodora_???              # 등급 ↑, 시점 다름
  # 예: "미궁의 사슬 테오도라" (필멸 → 반신 시점)
  # 또는 "별이 된 테오도라" (영웅 등극 후, 다른 Order NPC)
```

## TODO

```yaml
- TODO(직업): 테오도라·발드 직업 결정 (잠정 warrior)
- TODO(시뮬): 능력치 시드 검증 (합 4/9/16/25 죽창 결)
- TODO(콘텐츠): 우호 NPC 4축 + 직업 + 능력치
- TODO(콘텐츠): 발드 가호 2개 (tier 3, scale=wide, type=night)
- TODO(콘텐츠): 토벌대 NPC (환경 모디파이어 — 카드 안 됨)
- TODO(콘텐츠): 챕터 2~3 등장 인물
- TODO(콘텐츠): 테오도라 붕어빵 풀 (Order 진행 따른 등급별 카드)
```
