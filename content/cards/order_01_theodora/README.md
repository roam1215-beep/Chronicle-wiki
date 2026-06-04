# Order 1 — 미궁의 테오도라

## 메타

```yaml
order_id: 01_theodora
order_name: "미궁의 테오도라"          # 은유 제목 + 도리아↔이오니아 멸칭 (물리적 미궁 아님 — 유지 확정 6/3)
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
  # TODO(콘텐츠): 새 세계관(이오니아↔도리아 전쟁·라키아·발드 위선) 기반 재정립 — T-01.
  #   옛 설정(테세우스·크레타·미궁·공헌제) 폐기. series_position·
  #   narrative_ssot.md 4주덕 "공헌제 폭로" 잔재 재검토.
  #   ※ order_name·pack_name "미궁의 테오도라" = 은유/멸칭으로 유지 확정 (6/3).
  
series_position: "미궁 반격의 효시 (첫 별)"
```

## 인격별 챕터·스테이지

> 명명 정본 이동 → `design/narrative_ssot.md` §3 인격 변주. 이 문서는 팩 메타와 대적자 명단만 보유.

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
