# STATE

> Chronicle 단일 진입점. 결정·펜딩만. 결의 이유 X (→ design/).

## 폴더 라우터

```yaml
specs/        결정론적 명세 (Claude Code + claude.ai 공용)
  cards.md       카드 데이터 스키마 + 예시
  combat.md      전투 결산 알고리즘 (의사코드)
  structure.md   5층 구조 + 인격 + 위계 변동
  environment.md 시간대 + 우호 NPC

content/      게임 데이터
  orders/01_theodora/
    README.md      Order 1 메타 + 인격별 챕터·스테이지 명명
    characters.md  인물 카드 풀 (테오도라·발드·도적단)
    courage/cards.md  용기 인격 — 챕터 1 스테이지 1 카드 (10장)

design/       작품 결·서사·UI (claude.ai 전용)
  narrative.md   인물 결·어머니 결·검 동기
  worldbuilding.md 진영·종족·태생·미궁 정치
  ui_flow.md     도서관·책 펼침·UI

00_운영/      운영 결
  운영규칙.md / 기술스택.md / 스튜디오.md
```

## 현재 결정 — 큰 자리

```yaml
작품 그릇:
  Order 1 = "미궁의 테오도라 팩" = 270 스토리 카드
  3 인격 팩 × 90장 (한 회차 = 한 인격 팩)
  Stage = 10장 (9 일반 + 1 운명)

인격 시스템:
  그리스 4주덕 (지혜·용기·절제·정의)
  인물 = 3 보유 + 1 빠짐. 빠진 = 정체성.
  테오도라 = 용기·지혜·정의 (빠진 = 절제)

카드 종류:
  스토리 카드 (270장): battle / event / chance / fate
  인물 카드 (영구 컬렉션, 별도): 참조 결로 호출
  대적자 = 운명 카드의 적 인물

스탯 (잠정 시드):
  합 = (dice_count + 1)² → 4 / 9 / 16 / 25
  태생 분배: day 3:7 / dawn 4:6 / dusk 6:4 / night 7:3
  공·hp 자유 분배 (hp ≥ 1)

기술:
  Unity 6.3 LTS / C# / Steam + Web 프로토
  1인 + AI 오케스트라
```

## 진척

```yaml
박힘:
  ✓ specs/ 골격 (cards / combat / structure / environment)
  ✓ content/orders/01_theodora/ 메타 + 인물 + 용기 인격 카드 10장 (잠정 시드)
  ✓ design/ 골격 (narrative / worldbuilding / ui_flow)
  ✓ 운영 결 (CLAUDE.md / 운영규칙 v6.0)

진행 중:
  - Claude Code 첫 구현 실험 (specs/cards.md 결로 TypeScript 카드 클래스)

다음:
  - Claude Code 결과 받고 specs/ 조정
  - 시뮬 후 잠정 시드 검증
  - 카드 90장 완성 (용기 인격)
```

## 펜딩 (큰 자리)

```yaml
시뮬·밸런스:
  - 합 4/9/16/25 죽창 결 검증
  - 격파·축성·저격·수호 보너스 수치
  - 카드 종류 비율 (battle/event/chance 분포)

시스템:
  - 미궁 사제 저주 대성공 효과
  - 보호막 부여 결 (사제? 가호?)
  - 가호 콘텐츠 풀 (4 태생 × N)
  - 좌석 수 (전열·후열 N자리)
  - 위계 등극 정확한 시점
  - 인격 해금 결의 구체
  - 우호 NPC 전투 등장 결

콘텐츠:
  - 테오도라·발드 직업 (잠정 warrior)
  - 인물 능력치 시뮬 검증
  - 라키아의 들개 카드 10장 최종
  - 지혜로운·정의로운 테오도라 챕터·스테이지 명명
  - 챕터 2~3 페이즈 골격
  - 우호 NPC 4축 + 능력치

세계 결:
  - 진짜 여신 이름 + 단편화 정도
  - 미궁 우두머리 자기 인식
  - 다른 도시국가 면면
  - 테세우스 매핑 디테일
```

## 운영

```yaml
- 메모리 ≪ git (git이 진리)
- 추측 X (모르면 git)
- 콘텐츠 임의 생성 X (작가 결)
- 위키 커밋 전 본인 확인
- 1 작업 단위 = 1 커밋

호명: 클로드씨 ↔ 철님
톤:   다정한 존댓말
```
