# 오더 1 (테오도라) — 용기편 / 기록 카드 (9스테이지)

> 스테이지당 10장 (9 일반 = 3페이즈 × 3 + 운명 1). 페이즈 = 선택·버림·감내 (병렬, 인과 금지 — narrative §2.5).

## 스테이지 1 — 챕터1 마을 / 침공 (모레아 산골짜기, 튜토리얼)

```yaml
# order: 01_theodora · persona: courage · location: 마을(모레아 성채) · time: 밤
# 페이즈 = 장면. scene·beat = 페이즈 3장 공유. 어느 2장이 펼쳐져도 그 장면으로 이어짐.
# desc = 그림(art_hook) 밖 사실만. 전투 adversary 실명·enemy_decks = 시뮬/작가 후속(자리표).

# ── 페이즈1 · 장면=들이닥침 · beat=망루에 신호불이 오르는 때 ──
- id: s1_p1_battle_beacon
  kind: battle
  scene: 들이닥침
  beat: 망루에 신호불이 오르는 때
  title: "십이 년 만의 불"
  art_hook: "봉화 오른 망루 아래, 칼을 든 테오도라"
  description: "망루의 불은 위급할 때만 올린다. 십이 년 만이다."
  quote: "십이 년 전엔 안겨 나왔지. 오늘은 아니고."
  adversary: { id: ionia_remnant_warrior, count: 1 }
  enemy_decks: []
  setup: { map_preset: corridor_small, king_layout: advance_right }

- id: s1_p1_event_order
  kind: event
  scene: 들이닥침
  beat: 망루에 신호불이 오르는 때
  title: "순서"
  art_hook: "망루 사다리 아래 쓰러진 파수꾼, 손에 쥔 부싯돌"
  description: "불부터 올리고 쓰러졌다. 순서를 아는 사람이었다."
  quote: "잘 올리셨어요. 뒤는 두고 가시고."
  effect: [ parting ]

- id: s1_p1_chance_top
  kind: chance
  scene: 들이닥침
  beat: 망루에 신호불이 오르는 때
  category: 불운
  title: "아직 도는 팽이"
  art_hook: "빈 우물가, 혼자 도는 나무 팽이"
  description: "주인은 멀리 못 갔다. 팽이가 아직 돌고 있으니까."
  quote: "그건 두고 못 가지. 찾으러 간다."
  effect: ordeal
  setup: { map_preset: corridor_small, king_layout: advance_left }

# ── 페이즈2 · 장면=몰림 · beat=성채 안 사람들이 한쪽으로 몰리는 때 ──
- id: s1_p2_battle_stranger
  kind: battle
  scene: 몰림
  beat: 성채 안 사람들이 한쪽으로 몰리는 때
  title: "먼 데서 온 말씨"
  art_hook: "몰려가는 사람들 사이, 마주 선 도적의 얼굴"
  description: "쓰는 말이 이 골짜기 말이 아니다. 멀리서 온 자다."
  quote: "출신은 안 물어. 멈출 데나 정해."
  adversary: { id: ionia_remnant_warrior, count: 1 }
  enemy_decks: []
  setup: { map_preset: corridor_small, king_layout: advance_left }

- id: s1_p2_event_sickle
  kind: event
  scene: 몰림
  beat: 성채 안 사람들이 한쪽으로 몰리는 때
  title: "다르게 쥔 낫"
  art_hook: "떨리는 손으로 낫을 고쳐 쥔 마을 사람"
  description: "보리만 베던 손이다. 낫을 쥐는 법이 오늘만 다르다."
  quote: "떨려도 돼요. 안 떨리면 그게 이상한 거지."
  effect: [ bind ]

- id: s1_p2_chance_bundle
  kind: chance
  scene: 몰림
  beat: 성채 안 사람들이 한쪽으로 몰리는 때
  category: 불운
  title: "문턱에 걸린 보따리"
  art_hook: "비어가는 안마당, 문턱에 걸린 보따리 하나"
  description: "안에서 소리가 난다. 두고 갈 수 있는 짐이 아니다."
  quote: "저건 안 되지."
  effect: ordeal
  setup: { map_preset: standard_small, king_layout: advance_right }

# ── 페이즈3 · 장면=버팀 · beat=지친 몸이 한 번 더 일어서는 때 ──
- id: s1_p3_battle_rolled
  kind: battle
  scene: 버팀
  beat: 지친 몸이 한 번 더 일어서는 때
  title: "발치로 굴러온 것"
  art_hook: "쓰러진 이 곁, 굴러온 칼을 집어 드는 테오도라"
  description: "끝까지 칼을 거꾸로 쥐고 있었다. 한 번도 안 휘둘러 본 사람처럼."
  quote: "칼은 이렇게 쥐는 거예요. ……늦게 알려줘서 미안하고."
  adversary: { id: ionia_remnant_warrior, count: 1 }
  enemy_decks: []
  setup: { map_preset: standard_small, king_layout: standard_left }

- id: s1_p3_event_quiet
  kind: event
  scene: 버팀
  beat: 지친 몸이 한 번 더 일어서는 때
  title: "조용한 성문"
  art_hook: "어둠 깔린 성문 너머를 응시하는 테오도라, 곁의 누군가를 먼저 보냄"
  description: "성문 너머가 조용하다. 이 골짜기에선 조용한 게 더 나쁘다."
  quote: "먼저 가요. 여긴 봐 둘 테니."
  effect: [ parting ]

- id: s1_p3_chance_back
  kind: chance
  scene: 버팀
  beat: 지친 몸이 한 번 더 일어서는 때
  category: 불운
  title: "등으로 막은 길"
  art_hook: "테오도라 앞을 막아선 누군가의 등"
  description: "누가 등으로 길을 막는다. 돌아보지 말라는 뜻이다."
  quote: "뒤에 서라곤 했지, 앞은 아닌데."
  effect: ordeal
  setup: { map_preset: corridor_small, king_layout: standard_left }

# ── 운명 · 장면=결판 · beat=무너진 망루 아래 (첫 장면 호응) ──
- id: s1_fate_raid_leader
  kind: fate
  scene: 결판
  beat: 두목이 무너진 망루 아래 선다
  title: "밤을 연 자"
  art_hook: "무너진 망루 잔해 아래, 칼을 늘어뜨린 두목과 마주한 테오도라"
  description: "십이 년 전 그 망루가, 이제 무너져 있다."
  quote: "네가 열었으니 네가 닫아. 거드는 건 해 줄게."
  adversary: { id: bandit_raid_leader, count: 1 }   # 자리표 — 실명 펜딩
  enemy_decks: []
  setup: { map_preset: corridor_small, king_layout: advance_right }
```

## 스테이지 2 — 챕터1 마을 / 밀어냄

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 3 — 챕터1 마을 / 우두머리 (챕터 보스)

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 4 — 챕터2 숲(칼리돈) / 추격 개시

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 5 — 챕터2 숲(칼리돈) / 본거지

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 6 — 챕터2 숲(칼리돈) / 원흉 (챕터 보스)

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 7 — 챕터3 재습격 / 재습격

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 8 — 챕터3 재습격 / 뒷수습

```yaml
# [펜딩 — 작가 박음]
```

## 스테이지 9 — 챕터3 재습격 / 재대결 (챕터 보스)

```yaml
# [펜딩 — 작가 박음]
```
