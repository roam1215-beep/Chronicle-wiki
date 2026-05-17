# Order 1 — 인물 카드 풀

> specs/cards.md Character 스키마 따름. 능력치는 시뮬 후 확정 (펜딩).

## 주연 (대적자)

```yaml
- id: theodora_dog_of_rakia
  name: "테오도라"
  epithet: "라키아의 들개"
  
  # 3축 (작품 결)
  faction: surface
  race: human
  birth: 한낮
  
  # 카테고리
  category: adversary
  
  # 직업 (대적자만)
  class: warrior              # 잠정 (작가 결로 결정)
  belongs_to: null
  
  # 타입 (체스말 결)
  type: adversary             # 대적자 카테고리 = 대적자 타입 강제
  
  # 등급
  tier: mythic                # 대적자 = 서사 강제
  
  # 의지 비용
  cost: null
  
  # 능력치 (펜딩 — 시뮬 후 확정)
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  # 키워드 (작가 결)
  keywords: []
  
  # 메타
  persona: courage            # 회차 인격 (테오도라 = 용기·지혜·정의 가능, 회차당 1종)
  is_protagonist: true
```

## 적 대적자

```yaml
- id: bald_lion_of_rakia
  name: "발드"
  epithet: "라키아의 사자"
  
  # 3축
  faction: labyrinth
  race: horde
  birth: 심야
  
  # 카테고리
  category: adversary
  
  # 직업
  class: warrior              # 잠정 (작가 결로 결정)
  belongs_to: null
  
  # 타입
  type: adversary
  
  # 등급
  tier: mythic
  
  # 의지 비용
  cost: null
  
  # 능력치 (펜딩)
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  # 키워드 (작가 결)
  keywords: []
  
  # 메타
  persona: courage            # 회차 인격 (테오도라와 동일)
  is_protagonist: false
```

## 일반 인물 (졸병 결)

```yaml
- id: bandit_grunt
  name: "도적 졸병"
  epithet: null
  
  # 3축
  faction: labyrinth
  race: horde
  birth: 심야
  
  # 카테고리
  category: normal
  
  # 직업 X / 덱 소속
  class: null
  belongs_to: neutral         # 잠정 (중립 또는 작가 결)
  
  # 타입 (체스말 결)
  type: soldier               # 잠정 — 작가 결로 결정 가능
  
  # 등급
  tier: common
  
  # 의지 비용
  cost: 1                     # 잠정
  
  # 능력치 (펜딩)
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  # 키워드
  keywords: []
  
  # 메타
  persona: null               # 일반 인물 = null
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
  
  category: normal
  class: null
  belongs_to: [펜딩]           # 직업 전용 또는 중립
  
  type: [펜딩]                 # 5종 중 하나
  tier: [펜딩]
  cost: [펜딩]
  
  attack: [펜딩]
  defense: [펜딩]
  hp: [펜딩]
  shields: 0
  
  keywords: []
  persona: null
  is_protagonist: false
  
  # 메모: 챕터 1 라키아의 들개에서 영입, 챕터 2까지 동행, 챕터 3 X
```

## 붕어빵 풀 (테오도라 추가 틀, 펜딩)

```yaml
# 시점 교차 시 NPC로 등장할 곳들
# 작가 결로 차후 추가

- id: theodora_???              # 등급 ↑, 시점 다름
  # 예: "미궁의 사슬 테오도라" — 다른 시점의 테오도라
  # 또는 "별이 된 테오도라" — 카타스테리스모스 이후 (다른 Order NPC)
```

## TODO

```yaml
- TODO(직업): 테오도라·발드 직업 결정 (잠정 warrior)
- TODO(타입): 일반 인물 카드별 타입 결정 (병사·사수·기수·전령·용병)
- TODO(시뮬): 능력치 결 검증 (3패러미터 — 첫 구현 후)
- TODO(콘텐츠): 우호 NPC 3축·타입·덱 소속·등급·능력치
- TODO(콘텐츠): 발드 키워드 결 (등장·강림·치명타·인내·동조·퇴장 중)
- TODO(콘텐츠): 토벌대 NPC (환경 모디파이어 — 카드 안 됨)
- TODO(콘텐츠): 챕터 2~3 등장 인물
- TODO(콘텐츠): 테오도라 붕어빵 풀 (Order 진행 따른 등급별 카드)
```
