# Chronicle

> 그리스 신화 결의 턴제 전술 카드+주사위 로그라이크.
> 사서 프레임 + 카타스테리스모스 + 그리스 4주덕 인격.

## 두 Claude 라우터

### 구현 결 (Claude Code) — 어디부터 읽나

```yaml
1. specs/cards.md       — 카드 데이터 스키마 + 예시
2. specs/combat.md      — 전투 결산 알고리즘 (의사코드)
3. specs/structure.md   — 5층 구조 + 인격 + 위계
4. specs/environment.md — 시간대 + 우호 NPC
5. content/orders/01_theodora/ — 실제 카드·인물 데이터
```

### 기획 결 (claude.ai) — 어디부터 읽나

```yaml
1. STATE.md             — 단일 진입점
2. specs/ 전체          — 시스템 결
3. content/             — 현재 콘텐츠 결
4. design/              — 작품·서사·UI 결 (필요 시)
```

## 폴더 결

```
specs/        결정론적 명세 (스키마·알고리즘·수치)
content/      게임 데이터 (실제 카드·인물)
design/       작품 결·서사·UI
00_운영/      운영 결
STATE.md      부팅 진입점
CLAUDE.md     두 Claude 라우터
```

## 핵심 결

```yaml
구조:
  Order > Chapter > Stage > Phase > Battle (Round)
  Order = 270 스토리 카드 = 3 인격 팩
  Phase = 선택-거부-감내 3장
  Battle = 동시 결산 (Inscryption 결)

스탯 (3패러미터):
  공격력 + 방어력 + 생명력
  수치 결 = 첫 구현 시도 후 시뮬 결로

4축:
  진영 (지상/미궁/경계) × 종족 (인간/무리) × 태생 (한낮/여명/황혼/심야) × 위계 (인간/영웅/무리/재앙)
  + 직업 6종 (전사/수호자/사냥꾼/사제/도적/용병)

인격:
  그리스 4주덕 (지혜·용기·절제·정의)
  인물 = 3 보유 + 1 빠짐. 빠진 = 정체성.
  회차 = 1 인격 팩 (카드 데이터의 persona = 단일)
```

## 운영

```yaml
- 본문 = 명세·데이터·결만 (변경 이력 X)
- 한 개념 = 한 정본 (SSOT)
- 결정론적 결만 specs/, 비결정론은 design/
- 청산 기조 유지 (CLAUDE.md / 운영규칙 v6.0)
```
