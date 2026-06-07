# 환경 레이어

> Stage 단위 환경 결. 시간대 결은 combat.md SSOT.

## 환경 3종

```yaml
Environment:
  location:    string        # Stage 단위 고정. 특수 규칙 가능.
  weather:     string|null   # Stage 시작 시 결정. [TODO: 시야 영향 — combat 시간대 시야와 연동, 중복 여부는 시뮬]
  time_of_day: TimeOfDay     # combat.md "## 시간대" 결로
```

## 시간대

```yaml
시간대 결의 정본: specs/combat.md "## 시간대"
어휘 결의 정본:   GLOSSARY.md "### 덱·전장"

요지 (정본 참조):
  - 3 시간대: 낮 / 경계 / 밤
  - 진영 자기 시간대: 이오니아=낮 / 경계=경계 / 도리아=밤
  - 매 턴 시작 시 변경 (순환 패턴 = 작가 정의, 맵·기록 카드)
  - 다음 턴만 미리 보임 (예고 결)
```

## 우호 NPC (Friendly NPC)

```yaml
정의:
  진영: 아군
  통제: 불가 (플레이어 조작 X)
  존재 기간: 시스템·서사가 정함
  손실 처리: 서사가 정함 (게임 룰로 영구 손실 강제 X)

종류 (예시):
  stage_npc:    Stage 합류 (토벌대·자원자). 그 Stage·Chapter 종료 시 이탈
  chapter_npc:  다음 챕터까지 이어짐 (예: Order 1 챕터 1 동료 = 챕터 2까지)
  fate_npc:     운명 전투 등장 (결과는 서사 결정)

작동:
  - 전투 등장 가능 (단 카드 시스템 정합 펜딩)
  - 조작 시도 = UI 차단
  - 사망 처리 = 서사 (영구 손실 자동 X)
```
