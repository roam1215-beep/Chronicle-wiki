# 오더 1 (테오도라) — 중립 인물 / 적 공용

> 오더 1 팩 한정. belongs_to: neutral · neutral_card: enemy.
> 적 대적자 덱(enemy_decks)의 머릿수 살. 3 인격(용기·지혜·정의) 적 측 공유.
> 유저 풀(neutral_card: player)보다 스펙 약간 약함 — 갈래 = characters_player.md.
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: calydon_bandit_recruit
  order: 01_theodora
  name: "칼리돈 도적단 신입"
  race: human
  birth: 낮
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: enemy
  type: soldier
  tier: common
  cost: 1
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [등장]
  # 등장: 적 대적자에게 피해 1 (즉시 직격). 보병 1코×3=3 − 등장1 = 합2 (정합)
  # 사냥꾼 → 중립 이관 (06-07). 태생 황혼→낮. 등장 1딜 자폭병 (공용 머릿수 살)
  is_protagonist: false

- id: blackwood_viper
  order: 01_theodora
  name: "검은 숲 독사"
  race: horde
  birth: 밤
  category: normal
  class: null
  belongs_to: neutral
  neutral_card: enemy
  type: cavalry
  tier: rare
  cost: 2
  attack: 1
  defense: 0
  hp: 1
  shields: 0
  keywords: [신속, 독성2]
  # 척후 ×2=4 − 신속1 − 독성2(격돌 양날·실질 1점) = 합2 (공1/생1, 정합)
  # 사냥꾼 → 중립 이관 (06-07, 독성 공용화). 독성2 = 격돌 시 적에 독성 2 부여(StS 독 — 상대 턴 시작 시 2딜→1딜, 누적). 신속 = 세로 이동 1~2→2~3칸
  is_protagonist: false
```
