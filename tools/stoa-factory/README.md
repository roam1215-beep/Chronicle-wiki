# 스토아 팩토리 (Stoa Factory) — 콘텐츠 초안 생성기 시제품

크로니클 세계관·인격·톤을 강제하는 **제작 보조 초안 생성기**의 시제품(proof of concept).
키워드/국면을 넣으면 캐논·인격 함수·desc·quote 규칙·톤을 따른 초안을 뽑는다.
"AI가 창작을 대체"가 아니라 **"세계관 일관성을 강제하며 사람의 창작을 증폭"**하는 파이프라인.

## 동작 방식 (중요)

- 이건 **딥러닝이 아니다.** 기존 모델(Claude Sonnet)에, 캐논을 정리한 시스템 프롬프트(`SYSTEM`)를 매번 주는 것 = 프롬프트 엔지니어링 + 컨텍스트 설계.
- **git을 직접 읽지 않는다.** 각 파일의 `SYSTEM` 상수 = 위키 캐논의 **스냅샷**이다.
  → 캐논(design/narrative_ssot.md, design/worldbuilding.md, design/style_canon.md, specs/cards.md)이 바뀌면 **`SYSTEM`(CANON 상수)을 손으로 갱신**해야 한다.
- claude.ai 아티팩트로 실행된다(.jsx를 아티팩트로 열면 Claude API를 호출해 생성).

## 파일

| 파일 | 출력 | 상태 |
|---|---|---|
| `chronicle_pipeline.jsx` | 통짜 5단계 — 씨앗 → 서사 → 흐름 → 기록 → 전승 | **메인 (06-04 통짜 재작성)** |
| `phase_matrix.jsx` | 기록 카드 — 기원 / 페이즈 / 운명 | 구버전 (통짜에 흡수·미정합 — 폐기 검토) |

## 출력 단위 (phase_matrix)

```
기원      : desc·quote만 (인격별 1장) — 어머니의 선택 분기
1·2·3페이즈 : 사건1 + 전투1 + 우연3(행운/불운/중립) (인격별)
운명      : 전투 카드(desc/quote/적=보스) (인격별)
```
※ 게임 실제 페이즈는 우연 1장. 시제품은 우연 자리의 가능성(행운/불운/중립)을 펼쳐 보여줌.
※ 밸런스(수치·적 덱)는 비움 — 초안 단계. specs/cards.md 스키마의 텍스트·종류·방향까지만.

## 캐논 출처

이 생성기들의 `SYSTEM`(CANON 상수)은 아래에서 정리됨:
- `design/narrative_ssot.md` — 서사 정본 (기원·척추·인격 변주·보스·명명. story_arc·narrative 통합)
- `design/worldbuilding.md` — 세계관 캐논
- `design/style_canon.md` — desc/quote 의존성, 톤 기준, 화법, 검증 rubric
- `specs/cards.md` — 카드 스키마

## 다음

- 인물(전승) 생성기 = 같은 코어 복제 + 능력치 정책
- 기록 카드 스키마(effect·enemy_decks) 확정 후 카드 실물·밸런스 편입
- 영구 도구화(레포 내 git 연동) = 캐논 안정화 후 별도
