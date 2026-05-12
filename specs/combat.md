# 전투 시스템

## 5층 구조

```yaml
Order > Chapter > Stage > Phase > Battle (Round)

Phase:  카드 시스템 (선택-거부-감내 3장). 최대 2 Battle 발생
Battle: 전투 카드 1장 = 1 전투 인스턴스
Round:  Battle 최소 단위. 명령 → 굴림 → 결산
```

## 배치

```yaml
Position:
  rank: "front" | "back"      # 전열 / 후열
  slot: int                   # 좌→우 인덱스 (0부터)

전열 비우는 결 X (전열 배치 필수)
```

## 라운드 흐름

```
resolve_round(round_num, round_time, our_units, enemy_units):
  1. command_phase:
     유저가 모든 인물 위치 재배치 (전열·후열·좌·우)
     라운드 안 결단 X
  
  2. dice_roll_phase:
     for unit in [...our_units, ...enemy_units]:
       unit.rolls = roll_dice(unit.dice_count, unit.faction, round_time)
  
  3. resolution_phase:
     resolve_protection(our_units, enemy_units, round_num)  # 페이즈 1
     resolve_ranged(our_units, enemy_units)                 # 페이즈 2
     resolve_clash(our_units, enemy_units)                  # 페이즈 3
  
  4. cleanup:
     remove_dead_units()
     reposition_if_front_empty()                            # 다음 라운드 시작
     clear_round_effects()                                  # 행동 효과 (방어도·축복·저주 1라운드)
```

## 주사위 굴림

```
roll_dice(count: int, faction: str, round_time: str) -> Roll[]:
  faces_by_faction:
    surface:    [star, star, star, border, border, day]
    labyrinth:  [star, star, star, border, border, night]
    border:     [star, star, star, day, night, border]
  
  own_time_by_faction:
    surface:    day
    labyrinth:  night
    border:     border
  
  for i in 0..count:
    face = random.choice(faces_by_faction[faction])
    result = resolve_face(face, own_time_by_faction[faction], round_time)
    yield Roll(face, result)

resolve_face(face, own_time, round_time) -> "critical" | "normal" | "fail":
  if face == "star":
    return "normal"
  if face == own_time:
    if round_time == own_time:
      return "critical"
    elif round_time == opposite_of(own_time):
      return "normal"      # case 2 (깡)
    else:
      return "normal"      # 경계 라운드
  if face == opposite_of(own_time):
    return "fail"
  if face == "border":
    return "normal"        # 경계 면 = 자기 시간대 아님, 별 X = 통상

opposite_of:
  day ↔ night
  border ↔ border         # 경계는 반대 없음
```

## 페이즈 1 — 보호 (Protection)

```
resolve_protection(our_units, enemy_units, round_num):
  # 진영별 (우리 먼저, 적 나중)
  for unit in our_units:
    if unit.class == "priest_surface":
      apply_blessing(target=front_leftmost(our_units), unit=unit)
    if unit.class == "priest_labyrinth":
      apply_curse(target=front_leftmost(enemy_units), unit=unit)
    if unit.class == "guardian" and has_critical(unit):
      apply_self_armor(unit)        # 수호 — 자신에게 임시 방어도
  
  for unit in enemy_units:
    # 같은 결로 진행

apply_blessing(target, unit):
  amount = unit.attack
  if has_critical(unit):
    amount = unit.attack + bonus    # 축성 (작가 결, 잠정 +1)
  target.temp_armor += amount       # 1 라운드만

apply_curse(target, unit):
  amount = unit.attack
  target.hp -= amount               # damage_flow 적용
  # 대성공 효과 = 펜딩

has_critical(unit):
  return any(roll.result == "critical" for roll in unit.rolls)

front_leftmost(units):
  front_units = [u for u in units if u.position.rank == "front"]
  if not front_units:
    front_units = [u for u in units if u.position.rank == "back"]  # 전열 다 죽었으면 후열
  return sorted(front_units, key=lambda u: u.position.slot)[0]

도발 효과 X (격돌이 아니라)
```

## 페이즈 2 — 사격 (Ranged)

```
resolve_ranged(our_units, enemy_units):
  # 양측 동시 결산 — 다 죽어도 둘 다 발동
  ranged_actions = []
  
  for unit in [...our_units, ...enemy_units]:
    if unit.class != "hunter":
      continue
    for roll in unit.rolls:
      if roll.result == "fail":
        continue                  # 사냥꾼 실패면 행동 X (수동 X)
      target = pick_ranged_target(unit, opposing_units_of(unit))
      damage = unit.attack
      if roll.result == "critical":
        damage += bonus           # 저격 (잠정 +1)
      ranged_actions.append((target, damage))
  
  # 동시 결산
  for (target, damage) in ranged_actions:
    apply_damage(target, damage)

pick_ranged_target(hunter, enemies):
  # 자기 위치 기준 가장 먼 적 (열 기준)
  hunter_col = hunter.position.slot
  enemy_cols = unique_slots(enemies)
  furthest_col = max(enemy_cols, key=lambda c: abs(c - hunter_col))
  
  # 후열 사냥꾼 = 적 전열 가장 좌측 (특수 규칙)
  if hunter.position.rank == "back":
    front_enemies = [e for e in enemies if e.position.rank == "front"]
    if front_enemies:
      return min(front_enemies, key=lambda e: e.position.slot)
  
  # 같은 열 적 중 전열 우선
  candidates = [e for e in enemies if e.position.slot == furthest_col]
  return min(candidates, key=lambda e: 0 if e.position.rank == "front" else 1)

도발 효과 받지 X (사격은 도발 무시)
자기 피해 X (격돌 X)
```

## 페이즈 3 — 격돌 (Clash)

```
resolve_clash(our_units, enemy_units):
  # 양 진영 동시 — 죽어도 자기 격돌 결산
  clash_actions = []
  
  for unit in [...our_units, ...enemy_units]:
    if unit.class not in ["warrior", "guardian"]:
      continue
    enemies = opposing_units_of(unit)
    
    for roll in unit.rolls:
      if roll.result == "fail" and unit.class in ["warrior", "guardian"]:
        # 격돌 직업 실패 = 수동 격돌 (자기 스탯 자동 반응)
        target = pick_clash_target(unit, enemies)
        if target:
          clash_actions.append((unit, target, unit.attack, False))
        continue
      
      if roll.result in ["normal", "critical"]:
        target = pick_clash_target(unit, enemies)
        if not target:
          continue
        is_critical = roll.result == "critical"
        damage = unit.attack
        clash_actions.append((unit, target, damage, is_critical))
        
        # 격파 (전사 대성공) = 양 옆 광역
        if unit.class == "warrior" and is_critical:
          for neighbor in get_neighbors(target, enemies):
            clash_actions.append((unit, neighbor, unit.attack, False))
                                            # 격파 광역은 추가 격돌 피해 안 받음
  
  # 동시 결산
  for (attacker, target, damage, is_critical) in clash_actions:
    apply_damage(target, damage)
    
    # 격돌 = 자기도 격돌 받음 (대상의 공격력으로)
    if attacker.class in ["warrior", "guardian"] and target and not target_already_dead:
      # 단, 격파 광역은 첫 대상에게만 격돌 피해
      if is_critical and target != first_target_of(attacker):
        continue
      apply_damage(attacker, target.attack)

pick_clash_target(attacker, enemies):
  # 도발 우선
  taunt_units = [e for e in enemies if e.class == "guardian"
                                    and e.position.rank == "front"
                                    and "normal" in [r.result for r in e.rolls]]
  if taunt_units:
    return sorted(taunt_units, key=lambda e: e.position.slot)[0]
  
  # 도발 X → 적 전열 가장 좌측
  front_enemies = [e for e in enemies if e.position.rank == "front"]
  if front_enemies:
    return min(front_enemies, key=lambda e: e.position.slot)
  
  # 전열 다 죽었으면 후열 가장 좌측
  back_enemies = [e for e in enemies if e.position.rank == "back"]
  if back_enemies:
    return min(back_enemies, key=lambda e: e.position.slot)
  
  return None

get_neighbors(target, enemies):
  # target과 같은 rank, 인접한 slot
  return [e for e in enemies
          if e.position.rank == target.position.rank
          and abs(e.position.slot - target.position.slot) == 1]

모든 우리 전사 = 적 좌측만 공격 (좌→우 순서 자기 진영 안)
```

## 피해 흐름

```
apply_damage(target, damage):
  if damage <= 0:
    return                          # 음수 피해 = 0 처리
  
  # 1. 보호막 (이진, 1번 무효)
  if target.shields >= 1:
    target.shields -= 1
    return
  
  # 2. 방어도 (감산)
  total_armor = target.armor + target.temp_armor
  if total_armor >= damage:
    if target.temp_armor >= damage:
      target.temp_armor -= damage
    else:
      damage -= target.temp_armor
      target.temp_armor = 0
      target.armor -= damage
    return
  else:
    damage -= total_armor
    target.armor = 0
    target.temp_armor = 0
  
  # 3. hp
  target.hp -= damage
  if target.hp <= 0:
    target.hp = 0
    target.is_dead = true           # 영구 사망 (퍼마데스)
```

## 자리 변동

```
reposition_if_front_empty():
  for side in [our_units, enemy_units]:
    front_alive = [u for u in side if u.position.rank == "front" and not u.is_dead]
    if front_alive:
      continue                      # 전열 부분 사망 = 자리 변동 X
    
    back_alive = [u for u in side if u.position.rank == "back" and not u.is_dead]
    if not back_alive:
      continue                      # 양쪽 다 죽었으면 패배 처리
    
    # 후열 인물을 자기 위치의 전열로 이동
    for unit in back_alive:
      target_slot = unit.position.slot
      if slot_available(side, target_slot, "front"):
        unit.position.rank = "front"
      else:
        nearest = nearest_empty_front(side, target_slot)
        unit.position.rank = "front"
        unit.position.slot = nearest
```

## 라운드 효과 정리

```
clear_round_effects():
  # 행동으로 부여된 효과는 1 라운드만
  for unit in all_units():
    unit.temp_armor = 0             # 축복·축성·수호로 받은 방어도
  # 가호 효과는 영구 (clear X)
  # 보호막은 사용 외에는 영구
```

## 종료 조건

```
check_end_conditions(round_num):
  if all_dead(enemy_units):
    return "victory"
  if all_dead(our_units):
    return "defeat"
  if protagonist_dead(our_units):
    return "game_over"              # 테오도라 사망
  if round_num >= 5:
    return "timeout_defeat"
  return "continue"

철수 X (전투 진입 시 끝까지)
```

## 배틀 종료 후

```
between_battles(our_units):
  for unit in our_units:
    unit.hp = unit.max_hp           # hp 풀 회복
    unit.shields = unit.start_shields
    unit.armor = unit.start_armor   # 시작 방어도 (직업·가호)
    unit.temp_armor = 0
  
  # 보호막은 배틀 사이 X — 1회 사용 시 1개 소멸, 그 외 누적

  # 다음 배틀 R1 시간대 = 이전 배틀 마지막 라운드 시간대
```

## 시간대 흐름

```yaml
시간대 3종: day / border / night
태생 무관 (태생 = 인물 어휘만, 굴림 영향 X)

라운드별 흐름 (지상 페이즈 시작 R1=day 예시):
  R1: day → R2: border → R3: night → R4: border → R5: day ...

미궁 페이즈 시작 R1=night 예시:
  R1: night → R2: border → R3: day → R4: border → R5: night ...

R1 결정:
  첫 배틀:     페이즈 시작 시간대 = 진영 결로 (지상=day, 미궁=night, 경계=border)
  두 번째 배틀: 이전 배틀 마지막 라운드 시간대
```

## 확률 (자기 라운드, 자기 시간대)

```yaml
필멸 (dice 1):   critical 17% / normal 50% / fail 33%
반신 (dice 2):   critical 31% / normal 75% / fail 11%
신성 (dice 3):   critical 42% / normal 87% / fail 4%
번외 (dice 4):   critical 52% / normal 94% / fail 1%

자기 시간대 라운드만 critical 발동
경계 라운드 (모든 라운드): critical 0%, normal 50% + 깡 17% = 67%
```

## TODO

```yaml
- TODO(시뮬): 합 4/9/16/25 죽창 결 검증 (구현 후)
- TODO(밸런스): 격파·축성·저격·수호 보너스 수치 (잠정 +1)
- TODO(시스템): 미궁 사제 저주 대성공 효과
- TODO(시스템): 보호막 부여 결 (사제 행동? 가호?)
- TODO(시스템): 가호 콘텐츠 풀
```
