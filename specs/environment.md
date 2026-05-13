# 환경 레이어

## 환경 3축

```yaml
Environment:
  location: string        # Stage 단위 고정. 특수 규칙 가능.
  weather:  string|null   # Stage 시작 시 결정. [TODO: 정찰 조건 영향]
  time_of_day: "day" | "border" | "night"
                          # Phase 시작 R1 + 라운드별 변동. 의지 주사위 영향.
```

## 시간대

```yaml
own_time_by_faction:
  surface:   day
  labyrinth: night
  border:    border

R1 결정:
  첫 배틀:     Phase 시작 시간대 (진영 결로)
  두 번째 배틀: 이전 배틀 마지막 라운드 시간대

라운드별 흐름 (예시):
  지상 Phase R1=day:    day → border → night → border → day ...
  미궁 Phase R1=night:  night → border → day → border → night ...
  
순환:
  day ↔ border ↔ night ↔ border ↔ day ... (홀수 라운드 = 시간대, 짝수 = border)
```

## 우호 NPC (Friendly NPC)

```yaml
정의:
  진영: 아군
  통제: 불가 (플레이어 조작 X)
  존재 기간: 시스템·서사가 정함
  손실 처리: 서사가 정함 (게임 룰로 영구 손실 강제 X)

종류 (예시):
  - stage_npc:    Stage 합류 (토벌대·자원자). 그 Stage·Chapter 종료 시 이탈
  - chapter_npc:  다음 챕터까지 이어짐 (예: Order 1 챕터 1 동료 = 챕터 2까지)
  - fate_npc:     운명 전투 등장 (결과는 서사 결정)

작동:
  - 전투 등장 가능 (단 카드 시스템 정합 펜딩)
  - 조작 시도 = UI 차단
  - 사망 처리 = 서사 (영구 손실 자동 X)
```

## TODO

```yaml
- TODO(시스템): 우호 NPC 전투 등장 (카드 시스템과 정합)
- TODO(시스템): 우호 NPC 사망·이탈 서사
- TODO(시스템): 토벌대 NPC 같은 환경 모디파이어와의 경계
- TODO(밸런스): 날씨 정찰 조건 영향 구체
- TODO(콘텐츠): Order 1 챕터 1 우호 NPC 1명 (다음 챕터까지 이어짐)
- TODO(큰 정정): 인도 시스템 통합 (시간대 + 가호 + 인도 트리거)
```
