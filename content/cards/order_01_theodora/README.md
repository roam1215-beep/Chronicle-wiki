# Order 1 — 미궁의 테오도라

## 메타

```yaml
order_id: 01_theodora
order_name: "미궁의 테오도라"
pack_name: "미궁의 테오도라 팩"      # 확장팩 단위
total_cards: 270                       # 3 인격 팩 × 90장

protagonist:
  name: "테오도라"
  # 인격별 카드 id (회차 인격으로 자동 선택)
  ids:
    courage: theodora_courage
    wisdom:  theodora_wisdom
    justice: theodora_justice
  personas_owned: [courage, wisdom, justice]   # 4주덕 중 3
  persona_missing: temperance                  # 정체성 = "절제 없는 자"
  
  # 3축 (3 카드 공통)
  faction: surface
  race: human
  birth: 한낮
  
  # 카타스테리스모스 (작품 결)
  catasterism_at_order_clear: true     # Order 클리어 시 별이 됨

work_theme:
  setting: "테세우스 결 차용 — 크레타 섬 결로 공물 + 미궁 탈출"
  climax: "공헌제가 거짓된 명예이자 인신공양임을 폭로"
  audience: "다음 공헌제 후보 아이들"
  
series_position: "미궁 반격의 효시 (첫 별)"
```

## 인격별 챕터·스테이지

### 용맹한 테오도라 (courage)

```yaml
chapters:
  1:
    title: "버려진 아이"
    stages:
      1: "라키아의 들개"
      2: "라키아의 사자"
      3: "골짜기는 더 이상 울지 않는다"
  
  2:
    title: "단말마와 메아리"
    stages:
      1: "도망치는 자들"
      2: "다가오는 위협"
      3: "헤매임의 끝"
  
  3:
    title: "신탁"
    stages:
      1: "귀환"
      2: "기만과 체념 사이"
      3: "변하지 않는 것들"
```

### 지혜로운 테오도라 (wisdom)

```yaml
chapters: [펜딩, 작가 결]
```

### 정의로운 테오도라 (justice)

```yaml
chapters: [펜딩, 작가 결]
```

## 대적자 (Fate 카드 적 인물)

```yaml
# 챕터 1 스테이지 1
chapter_1_stage_1:
  fate_adversary:
    name: "발드"
    # 회차 인격으로 자동 선택 (본체 동일, 직업·특기 결 분기)
    ids:
      courage: bald_courage
      wisdom:  bald_wisdom
      justice: bald_justice

# 챕터 1 스테이지 2 ~ 챕터 3 스테이지 3: 펜딩
```

## TODO

```yaml
- TODO(콘텐츠): 지혜로운 테오도라 챕터·스테이지 명명
- TODO(콘텐츠): 정의로운 테오도라 챕터·스테이지 명명
- TODO(콘텐츠): 챕터 1 스테이지 2~3 대적자
- TODO(콘텐츠): 챕터 2~3 모든 스테이지 대적자
- TODO(콘텐츠): 챕터 2·3 페이즈 골격
```
