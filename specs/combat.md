# 전투 시스템

> Battle·Round 단위 명세. 상위 단위(Order·Chapter·Stage·Phase)는 `structure.md` 참조.

## 단위

```yaml
Battle: 전투 카드 1장 = 1 전투 인스턴스
Round:  Battle 최소 단위. 선언 → 가호 → 전투 결산
```

## 진형 (체스판)

```yaml
체스판:
  기본 4x4 (16칸)
  최대 6x6 (36칸)
  전투 카드(운명 전투 포함)가 맵을 정의
  맵 정보 = 크기·모양·특수 칸·시작 시간대 (작가 정의)

영역 분할:
  체스판을 중앙 기준 절반으로 분할
    - 아래 절반 = 우리 배치 영역
    - 위 절반   = 적 배치 영역
  경계 줄 없음 — 양 영역이 곧바로 마주봄
  배치는 자기 영역 안에서만
  4x4면 2x4 + 2x4
  6x6면 3x6 + 3x6
  홀수 크기는 사용 X (대칭 유지)

인접:
  4방향 (상하좌우)
  대각선 인접 X

부대 크기:
  시작     = 대적자 + 1명 (2명)
  상한     = 대적자 + 9명 (10명)
  전투 배치 = 자기 영역 칸 수 한계 (4x4면 8명까지, 6x6면 12명까지)
  후보석   = 부대 > 영역 시 일부 인물 후보석 (작가 정의, 펜딩)
```

```
Position:
  x: int      # 가로 좌표 (0부터)
  y: int      # 세로 좌표 (0부터)

영역 규칙:
  - 양 진영 영역은 맵이 정의
  - 한 칸에 한 인물
```

## 라운드 흐름

```
resolve_round(round_num, our_units, enemy_units):
  1. declare_phase(our_units):
     - 플레이어 결정
     - 진형 (자기 영역 안 자유 재배치)
     - 액티브 키워드 발동 결정 (의지 풀에서 비용 차감)
     - 영웅 능력 발동 결정 (대적자, 의지 1)
     - 결정 후 무를 수 없음
  
  2. blessing_phase(round_num, our_units, enemy_units):
     - 라운드 시간대 결정 (environment.md 참조)
     - 인도 굴림 (인도 시스템 참조)
     - 가호 발동 시 대상 인물에 효과 부여
  
  3. resolve_phase(our_units, enemy_units):
     - 자동 진행
     - 각 인물 기본 행동 (이동 + 공격)
     - 액티브 키워드 효과 적용
     - 인도 발동 시 인도 트리거 키워드 발동
  
  4. cleanup:
     remove_dead_units()
     clear_round_effects()  # 그 라운드 한정 효과 정리
     check_end_conditions(round_num)
```

## 의지 (자원)

```yaml
의지:
  부대 공용 풀 (양 진영 각자 자기 풀)
  매 라운드 시작 시 그 라운드 한도가 충전됨

라운드별 의지 한도:
  1라운드 = 1
  2라운드 = 2
  3라운드 = 3
  4라운드 = 4
  5라운드 = 5
  6라운드 = 6
  7라운드 = 7
  8라운드 이후 = 7 (한도 고정)

이월 X:
  사용 안 한 의지는 라운드 종료 시 소멸
  다음 라운드로 누적되지 않음

의지 비용:
  액티브 키워드  0~7 범위 (작가 정의)
  영웅 능력      의지 1 (모든 카테고리 통일), 매 라운드 1회 발동 (기본)
                 단 키워드 효과로 여러 번 발동 가능 (작가 정의)
  주문 카드      0~7 범위 (소모성, 작가 정의)
  
기본 행동 = 의지 비용 X (자동)
패시브 키워드 = 의지 비용 X (항상 작동)
```

```
declare_phase(our_units, round_num):
  available_will = will_for_round(round_num)  # min(round_num, 7)
  
  for action in player_declared_actions:
    if action.cost > available_will:
      reject(action)
      continue
    available_will -= action.cost
    queue_action(action)
  
  # 라운드 종료 시 available_will 폐기 (이월 X)
```

## 기본 행동 (자동)

```yaml
공격 타입:
  근접   인접 1칸 공격
  원거리 사거리 키워드 보유 (사거리 2~4)

기본:
  - 사거리 안 적 있음 → 공격
  - 없음 → 가장 가까운 적 방향으로 1칸 이동
  - 이동 = 4방향 (상하좌우), 한 칸
  - 자기 영역·적 영역 모두 이동 가능 (단 점유된 칸 X)

대상 선정:
  근접   인접 칸 적 중 우선순위 (펜딩, 작가 정의)
  원거리 사거리 안 적 중 우선순위 (펜딩, 작가 정의)
  도발 키워드 적이 있으면 도발 적 우선
```

## 키워드 시스템

```yaml
키워드 풀 3종 (cards.md 참조):
  인물 키워드     일반 인물 + 대적자 모두 보유 가능
  대적자 전용     대적자만 보유. 일반 인물 X.
  시작 키워드     회차 시작 시 1개 결정. 덱 방향성.

작동 방식 3종:
  패시브        항상 작동, 의지 비용 X
  액티브        의지 비용 있음, 선언 단계 결정 발동
  인도 트리거   가호 발동 시 작동
```

```
resolve_keywords(unit, phase):
  for kw in unit.keywords:
    if kw.mode == "passive":
      apply_passive(kw, unit)               # 항상 작동
    if kw.mode == "active" and kw.declared:
      apply_active(kw, unit)                # 선언 단계 결정 시 발동
    if kw.mode == "guidance_trigger":
      if blessing_match(unit, kw):
        apply_guidance(kw, unit)             # 가호 발동 시
```

## 인도 트리거 — 효과 제약

```yaml
인도 트리거 키워드 효과의 한계 (시스템 규칙):
  - 의지 비용 X (가호 발동 시 자동 작동)
  - 그 라운드 한정 효과 (다음 라운드 X)
  - 1번 발동 (단 다른 키워드 효과로 여러 번 발동 가능 — 작가 정의)
  - 결정타 X (즉시 대상 사망 효과 X)
  - 즉사 X (대상 hp 1 이상 잔류)
  - 인도 자체는 한 라운드 1번만 발동 (인도 시스템)

벌목기 결:
  판을 흔들지만 뒤집지 않음
  약자가 한 라운드 강자를 칠 수 있는 수준
  요그사론 결(판 뒤집기) X
```

## 액티브 키워드 — 효과 제약

```yaml
의지 비용 = 0~7 범위 (작가 정의)
선언 단계 결정:
  - 플레이어가 발동할지 결정
  - 발동 시 의지 풀에서 비용 차감
  - 결정 후 무를 수 없음
  
같은 액티브 키워드의 라운드당 발동 횟수:
  - 기본 1회 (의지 충분해도 같은 키워드 한 라운드 한 번만)
  - 단 다른 키워드 효과로 여러 번 발동 가능 (작가 정의)
```

## 패시브 키워드 — 효과 제약

```yaml
의지 비용 X
항상 작동 (전투 진입 시부터 인물 사망 시까지)
도발·은신·사거리 등 (구체 풀은 cards.md 참조)
```

## 인도 시스템 (가호)

```yaml
시간대 3종 (environment.md 참조):
  낮 / 경계 / 밤

인도 3종:
  태양의 인도 (낮 시간대)
  별의 인도   (경계 시간대)
  달의 인도   (밤 시간대)

라운드 시작 결정:
  - 시간대는 맵 + 라운드 흐름으로 결정 (environment.md)
  - 인도 굴림은 이 시간대 결과로만 발동 가능
```

```
blessing_phase(round_num, our_units, enemy_units):
  current_time = environment.time_for_round(round_num)
  
  # 1단계: 가호 발동 or 꽝
  if roll(2) == 0:
    return  # 꽝, 가호 없음
  
  # 2단계: 인도 결정
  # 한 시간대당 하나의 인도만 매핑 (1:1)
  guidance = guidance_for_time(current_time)
    # 낮     → 태양의 인도
    # 경계   → 별의 인도
    # 밤     → 달의 인도
  
  # 3단계: 대상 무작위
  candidates = [
    u for u in (our_units + enemy_units)
    if u.time == current_time          # 해당 시간대 인물만
    and not u.is_dead
  ]
  
  if not candidates:
    return  # 해당 시간대 인물 없으면 인도 발동 안 함
  
  target = random.choice(candidates)
  apply_blessing(target, guidance)

apply_blessing(target, guidance):
  target.blessing_this_round = guidance
  # 인도 트리거 키워드 발동은 resolve_phase에서
  # resolve_keywords의 guidance_match 규칙으로 처리
```

## 인도 제약

```yaml
가호 발동 확률:
  50% (1단계 굴림)

발동 시:
  인도 종류 = 시간대로 결정 (굴림 X — 시간대가 곧 인도)
  대상 = 해당 시간대 인물 중 무작위 1명 (양 진영 합쳐서)

플레이어 결정:
  선언 단계 = 시간대만 알고 결정 (가호 발동·인도·대상 모름)
  가호 단계 = 가호 발동/꽝, 인도, 대상 결정
  무를 수 없음 (선언 결정 후 결과)

호메로스 결:
  적이 해당 시간대 인물 보유 시 적에게도 발동 가능
  변덕스러운 신 — 자기 편 적 편 둘 다
```

## 인도 트리거 키워드 매칭

```yaml
인물의 인도 트리거 키워드 = 자기 시간대 인도만 가능:
  낮 인물    → 태양의 인도 트리거 키워드만
  경계 인물  → 별의 인도 트리거 키워드만
  밤 인물    → 달의 인도 트리거 키워드만

발동:
  가호 받은 인물의 인도 트리거 키워드 = 자동 발동
  (인물의 시간대 = 가호의 인도 시간대 = 항상 일치)
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
  if target.armor >= damage:
    target.armor -= damage
    return
  else:
    damage -= target.armor
    target.armor = 0
  
  # 3. hp
  target.hp -= damage
  if target.hp <= 0:
    target.hp = 0
    target.is_dead = true           # 영구 사망 (퍼마데스)
```

## 피해 자원 정리

```yaml
보호막 (shields):
  - 이진 자원, 1번 무효 (피해량 무관)
  - 키워드·장비·인도 효과로 부여
  - 사용 시 1개 소멸
  - 기본 지속 = 그 라운드만 (라운드 종료 시 정리)
  - 키워드 효과로 라운드 지속 변동 가능 (작가 정의)
  - 배틀 종료 시 자동 정리

방어도 (armor):
  - 감산 자원
  - 키워드·장비·인도 효과로 부여
  - 기본 지속 = 그 라운드만 (라운드 종료 시 정리)
  - 키워드 효과로 라운드 지속 변동 가능 (작가 정의)
  - 배틀 종료 시 자동 정리

hp:
  - 0 이하 = 영구 사망 (퍼마데스)
  - 배틀 종료 후 hp만 회복
```

## 라운드 효과 정리

```
clear_round_effects():
  for unit in all_units():
    # 그 라운드 한정 효과 (가호 인도 등)
    unit.round_effects = []
    
    # 보호막·방어도 기본 = 그 라운드만
    # 키워드 효과로 라운드 지속 변동된 경우만 유지
    if not unit.shields_persist_this_round:
      unit.shields = 0
    if not unit.armor_persist_this_round:
      unit.armor = 0
  
  # 회차 단위 효과(시작 키워드)는 회차 종료까지 유지
  # 장비·키워드로 부여된 보호막·방어도도 배틀 종료 시까지만 유지
```

## 종료 조건

```
check_end_conditions(round_num):
  if adversary_dead(our_units):
    return "game_over"         # 우리 대적자 사망 = 회차 종료
  
  if has_adversary(enemy_units):
    # 적 측에 대적자 있는 배틀
    if adversary_dead(enemy_units):
      return "victory"          # 적 대적자 사망 = 배틀 승리
    if round_num >= 9:
      return "continue"         # 9라운드 도달해도 결판까지 진행
  else:
    # 적 측에 대적자 없는 배틀
    if all_dead(enemy_units):
      return "victory"          # 적 전멸 = 배틀 승리
    if round_num >= 9:
      return "continue"         # 9라운드 도달해도 전멸까지 진행
  
  if all_dead(our_units):
    return "defeat"             # 우리 전멸 = 배틀 패배
  
  return "continue"

# 라운드 상한 = 9 (의지 상한 7, 라운드 상한 9)
# 9라운드 이후로는 결판까지 의지 7 유지하며 계속 진행
# 결판 조건:
#   - 적 측 대적자 있음 → 어느 한쪽 대적자 사망까지
#   - 적 측 대적자 없음 → 적 전멸 또는 우리 전멸까지
```

## 배틀 종료 후

```
between_battles(our_units):
  for unit in our_units:
    unit.hp = unit.max_hp           # hp 회복
    unit.shields = 0                # 보호막 자동 정리
    unit.armor = 0                  # 방어도 자동 정리
    unit.round_effects = []
  
  # 영구 효과(장비·시작 키워드): 유지
  # 소모성 주문 카드: 발동 시 덱에서 제거 (배틀 사이 회복 X)
```

## TODO

```yaml
시스템:
  - TODO(시스템): 대상 선정 우선순위 (근접·원거리, 작가 정의)
  - TODO(시스템): 후보석 규칙 (부대 > 자기 영역 시)
  - TODO(시스템): 비대칭 맵 규칙
  - TODO(시스템): 특수 칸 종류 (장애물·강화·약화 등, 작가 정의)
  - TODO(시스템): 챕터별 맵 변동 (크기·모양·특수 칸)

콘텐츠:
  - TODO(작가): 액티브 키워드 풀 (의지 비용 0~7 범위)
  - TODO(작가): 영웅 능력 효과 (카테고리 5종 + 사제 3 분기)
```
