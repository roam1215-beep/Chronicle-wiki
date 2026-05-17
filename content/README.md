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
    characters/                   # 인물 — 직업/진영 결로 분리
      warrior/surface.md / labyrinth.md / border.md
      seer/  hunter/  bard/  wanderer/  sovereign/  priest/
        (각 3 진영 파일)
      neutral/surface.md / labyrinth.md / border.md
      # 합 24 파일 (8 직업·중립 × 3 진영)
    spells/                       # 기도 — 진영 무관 = 8 파일
      warrior.md / ... / neutral.md
    equipment/                    # 장비 — 진영 무관 = 8 파일
      warrior.md / ... / neutral.md
  
  order_01_theodora/              # 오더 1 (미궁의 테오도라) 팩
    README.md                     # 팩 메타 + 인격별 챕터·스테이지 명명
    characters/
      adversaries.md              # 양쪽 대적자 (작품 결, 진영 분리 X)
      warrior/surface.md / labyrinth.md / border.md
      ... / neutral/ (각 3 진영 파일)
      # 합 25 파일 (adversaries + 8 직업·중립 × 3 진영)
    spells/                       # 진영 무관 = 8 파일
    equipment/                    # 진영 무관 = 8 파일
    stories/                      # 스토리 — 인격별 분리
      courage/wisdom/justice/
        stage_1.md ~ stage_9.md
```

## 결의 결

```yaml
- 카드 풀 = 한 Order 단위. 3 인격 공통.
- 스토리 카드 = 인격별 분리 (한 회차 = 한 인격 팩).
- 매 Order 같은 구조 (Order 2 신설 시 같은 폴더 결).
- 기본 카드 (basic/) = 확장팩 무관 (옛 회차에서도 등장).
- 인물 카드 = 진영별 분리 (지상·미궁·경계).
- 기도·장비 = 진영 무관 (공용 카드).
- adversaries.md = 대적자 결 (작품 결, 진영 분리 X — 인격별 분기는 카드 id 결).
```

## 펜딩

```yaml
- TODO(콘텐츠): basic 카드 풀 (40 파일, 작가 결)
- TODO(콘텐츠): order_01_theodora 카드 풀 (41 파일, 작가 결)
- TODO(콘텐츠): order_01_theodora/stories 스테이지 2~9 × 3 인격 (26 파일)
- TODO(콘텐츠): 인물·스토리 카드 능력치 결 (시뮬 후)
```
