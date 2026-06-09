# 오더 1 (테오도라) — 사제 장비

> 오더 1 (미궁의 테오도라) 팩 한정. belongs_to: priest.
> specs/cards.md Equipment 스키마 결로. 작가 결 = 철님.

```yaml
# 코스트순

- id: altar_torch
  order: 01_theodora
  name: "제단의 횃불"
  belongs_to: priest
  tier: common
  cost: 1
  attach_target: king
  attach_side: ally
  uses: 1
  effect: "공격력 +1. 장착한 턴 봉헌(특기) 발동 비용 0. uses 1 — 격돌 시 0 → 장비만 묘지(대적자 생존)."
  # 봉헌 가속 촉매 (의식 엔진 — 장착 턴 의식 점프). ※미검증

- id: pilgrim_hammer
  order: 01_theodora
  name: "순례자의 망치"
  belongs_to: priest
  tier: epic
  cost: 3
  attach_target: king
  attach_side: ally
  uses: 2
  effect: "공격력 +2. 격돌마다 uses -1 · 의지 +1. uses 0이면 이 장비만 묘지(대적자 생존)."
  # ※미검증
```
