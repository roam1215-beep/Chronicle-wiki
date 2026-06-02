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
  
  # 2축 (race × birth)
  race: human
  birth: 황혼
  
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
      2: "라키아의 사자"   # [펜딩] 발드(별명 '라키아의 사자')가 스테이지3 챕터보스로 이동 — 제목 재정리 필요
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
# 챕터 1 스테이지 1 (운명전 = 스테이지 보스)
chapter_1_stage_1:
  fate_adversary:
    name: "성급한 프리키온"
    id: phrygion

# 챕터 1 스테이지 2 (운명전 = 스테이지 보스): 펜딩 — 신규 보스 미정

# 챕터 1 스테이지 3 (운명전 = 챕터 보스)
chapter_1_stage_3:
  fate_adversary:
    name: "발드"
    # 회차 인격으로 id 선택 (본체 동일, 직업·특기 분기)
    ids:
      courage: bald_courage    # 무모한 발드
      wisdom:  bald_wisdom     # 교활한 발드
      justice: bald_justice    # 위선적인 발드

# 챕터 2 스테이지 1 ~ 챕터 3 스테이지 3: 펜딩
```

## TODO

```yaml
- TODO(콘텐츠): 지혜로운 테오도라 챕터·스테이지 명명
- TODO(콘텐츠): 정의로운 테오도라 챕터·스테이지 명명
- TODO(콘텐츠): 챕터 1 스테이지 2~3 대적자
- TODO(콘텐츠): 챕터 2~3 모든 스테이지 대적자
- TODO(콘텐츠): 챕터 2·3 페이즈 골격
```
