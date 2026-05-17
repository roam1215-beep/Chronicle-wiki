# content/ — 게임 데이터

> Claude Code + claude.ai 공용. 실제 카드 데이터.

## 원칙

```yaml
- 데이터로 작성 (YAML)
- 의도·서사 = design/ 이동
- specs/ 스키마 따름
- 작가 정의 우선 (콘텐츠 임의 생성 X)
```

## 구조 (하스스톤 결)

```yaml
cards/
  basic/                          # 기본 카드 풀 (확장팩 무관)
    characters/                   # 인물 카드 — 8 직업 + neutral = 9 파일
      warrior.md / seer.md / hunter.md / guardian.md
      bard.md / wanderer.md / sovereign.md / priest.md
      neutral.md
    spells/                       # 기도 카드 — 9 파일
    equipment/                    # 장비 카드 — 9 파일
  
  order_01_theodora/              # 오더 1 (미궁의 테오도라) 팩
    README.md                     # 팩 메타 + 인격별 챕터·스테이지 명명
    characters/                   # 인물 카드 — adversaries + 8 직업 + neutral = 10 파일
      adversaries.md              # 양쪽 대적자
      warrior.md / ... / neutral.md
    spells/                       # 기도 카드 — 9 파일
    equipment/                    # 장비 카드 — 9 파일
    stories/                      # 스토리 카드 — 인격별 분리
      courage/                    # 용기 인격 (90장 = 9 스테이지 × 10장)
        stage_1.md ~ stage_9.md
      wisdom/                     # 지혜 인격
      justice/                    # 정의 인격
```

## 결의 결

```yaml
- 카드 풀 = 한 Order 단위. 3 인격 공통.
- 스토리 카드 = 인격별 분리 (한 회차 = 한 인격 팩).
- 매 Order 같은 구조 (Order 2 신설 시 같은 폴더 결).
- 기본 카드 (basic/) = 확장팩 무관 (옛 회차에서도 등장).
```

## 펜딩

```yaml
- TODO(콘텐츠): basic 카드 풀 (27 파일, 작가 결)
- TODO(콘텐츠): order_01_theodora 카드 풀 (27 파일, 작가 결)
- TODO(콘텐츠): order_01_theodora/stories 스테이지 2~9 × 3 인격 (26 파일)
- TODO(콘텐츠): 인물·스토리 카드 능력치 결 (시뮬 후)
```
