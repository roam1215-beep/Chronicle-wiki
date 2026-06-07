# 오더 1 (테오도라) — 사제 인물

> 오더 1 팩 한정. belongs_to: priest.
> 3 인격(용기·지혜·정의) 공통 카드 풀. (진영 분할 폐기 — race·birth는 카드 필드)
> specs/cards.md Character 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: kyrenea_acolyte
  order: 01_theodora
  name: "견습 사제 키레네아"
  race: human
  birth: 황혼
  category: normal
  class: null
  belongs_to: priest
  type: rider
  tier: epic
  cost: 3
  attack: 2
  defense: 0
  hp: 5
  shields: 0
  keywords: [등장]
  # 등장: 의식 스택 +2
  # 의식 엔진 시동기 — 봉헌(턴당 +1)을 한 장으로 +2 점프시켜 은총·축복을 앞당김.
  # 기수 ×2.5 = 7.5→7 기준선에 2/0/5(합7) — 의식 점수 미정(펜딩)이라 정합 보류, 작가 결로 둠.
  # 테오도라 사냥꾼 kyrenea_ranger·전사 kyrenea_apprentice와 같은 인물의 다른 모습(붕어빵, 정의 편).
  is_protagonist: false
```
