# 카드 뷰어 (Card Viewer) — 카드 펼침 표준 형식

> 철님이 "카드 펼쳐줘 / 보여줘 / 펼쳐달라" 류로 요청하면 → 이 형식으로 렌더.
> Visualizer(클로드씨 본 채팅 HTML)로 띄운다. 정적 도감 — 게임 동선 목업(PROTOTYPE)과 별개.

## 정의

```yaml
용도:   직업 덱(또는 카드 묶음)을 도감·대시보드로 펼쳐 검토
형식:   HTML + CSS + JS (인라인, 단일 파일)
도구:   Visualizer
저장:   git 영구 (이 폴더 — 직업별 인스턴스 .html)
색·테마: claude.ai 다크/라이트 자동 (CSS 변수 + Tabler 아이콘)
```

## 인스턴스

```yaml
hunter_pool_viewer.html   사냥꾼 오더1 30장 (인물18·기도6·책략3·장비3) — 형식 원본
```

## 탭 구성

```yaml
종합:        완성 메트릭(현재/목표) · 종류별 진행바 · 코스트 곡선(종류 스택) · 등급 분포 · 타입 분포
종류·타입별:  인물=타입별(보병·척후·기수·전령·변동) / 기도·장비·책략=종류별, 각 코스트순
코스트순:    0~7 코스트별, 같은 코스트 안은 종류순(인물→장비→기도→책략)
등급순:      보통·희귀·영웅·전설, 각 코스트순
```

## 카드 셀 결

```yaml
공통:  코스트 원 · 등급 뱃지 · 이름
인물:  타입 + 종족(무리/인간) · 공/체/(보호막) · 효과 한 줄
발동형: 종류 라벨 · 효과 한 줄
```

## 직업별 재사용

```yaml
cards 배열만 교체 — 레이아웃·색·탭·셀 결은 동일.
필드: {kind, name, type, tier, cost, atk, hp, sh, race, eff}
  kind:  unit | gear | spell | strat   (인물·장비·기도·책략)
  type:  soldier | rider | scout | herald | shifting | '-'  (발동형은 '-')
  tier:  common | rare | epic | legendary
  race:  horde | human | null          (발동형은 null)
TARGET = 종류별 목표 장수 (메트릭 '현재/목표'용).
```

## TODO

```yaml
- TODO(콘텐츠): 전사·사제·예언자·군주 인스턴스 (사냥꾼 결 복제, cards 교체)
```
