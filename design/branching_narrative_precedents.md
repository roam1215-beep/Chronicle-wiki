# 분기·다중시점 게임 선례 조사

> **상태: RESEARCH ONLY. 설계 정본 아님.**
> 목적은 다른 게임의 조리법을 Chronicle에 복제하는 것이 아니라,
> 새 구조의 각 부품이 실제 제품에서 어떤 장점·비용을 만들었는지 확인하는 것이다.
> Chronicle의 1차 레퍼런스는 story_reference_catalog.md의 이야기 카탈로그다.

## 비교 대상

### Suzerain / Kingdom of Rizia

관찰 포인트:
- 같은 허구 세계에서 서로 다른 국가·주인공 캠페인이 존재.
- 앞선 캠페인의 일부 선택과 세계 상태가 다음 캠페인에 영향을 주는 구조가 있다.

Chronicle에 주는 질문:
- Book 간에 전체 세계선을 복제하지 않고 어떤 fact/state만 넘길 것인가?
- 이전 Book 결과가 다음 Book의 대사·인물·정치 상태를 어느 정도 바꾸면 충분한가?

자료:
- https://www.suzeraingame.com/
- https://store.steampowered.com/app/1207650/Suzerain/

### The King's Dilemma / The King's Dilemma: Chronicles

관찰 포인트:
- 작은 딜레마와 결정이 이후 사건을 열거나 왕국 상태를 바꾸는 저작형 역사 분기.
- 개별 선택보다 누적된 정치 상태와 사건망이 큰 흐름을 만든다.

Chronicle에 주는 질문:
- Decision 하나를 직접 branch node로 만들지 않고, 작은 결과를 어떻게 거시 조건으로 축약할 것인가?

자료:
- https://horribleguild.com/eu/product/the-kings-dilemma/
- https://store.steampowered.com/app/2069180/The_Kings_Dilemma_Chronicles/

### 13 Sentinels: Aegis Rim

관찰 포인트:
- 여러 인물의 제한된 관점으로 하나의 큰 사건을 조립해 이해하게 한다.
- 전체 객관 사건과 Character별 시점선의 분리가 강하다.

Chronicle과 차이:
- 거시 이야기는 기본적으로 저작된 고정 흐름에 가깝고,
  Chronicle은 그 다중시점 위에 역사적 Outcome 변화까지 얹으려 한다.

자료:
- https://www.nintendo.com/us/store/products/13-sentinels-aegis-rim-switch/

### As Dusk Falls

관찰 포인트:
- 여러 인물·세대의 선택과 결과.
- 재플레이에서 분기 흐름을 확인하고 다른 결과를 탐색하게 하는 구조.
- 많은 작은 선택과 실제 큰 분기를 구별해서 볼 필요를 보여준다.

Chronicle에 주는 질문:
- 다르게 보이지만 결국 같은 흐름인 가짜 분기와,
  실제 후속 역사 상태를 바꾸는 분기를 어떻게 구분할 것인가?

자료:
- https://www.asduskfalls.com/

### Detroit: Become Human

관찰 포인트:
- 다중 주인공 + 촘촘한 분기 + Chapter flowchart + 경로 재탐색.
- 높은 분기 가시성과 높은 콘텐츠 제작비의 대표적 비교점.

Chronicle에 주는 경고:
- 모든 Situation/Decision을 트리로 확장하면 Series/Book 레벨과 곱해져 제작량이 폭발한다.

자료:
- https://www.quanticdream.com/en/detroit-become-human

### The Banner Saga

관찰 포인트:
- 작품 간에 인물 생사·선택·상태를 넘기는 장기 연속성.
- 여러 작품에 걸친 변수 호환과 콘텐츠 정합 관리가 큰 제작 부담이 된다.

Chronicle에 주는 경고:
- Book × Character × Outcome × Series 변수를 그대로 누적하지 않는다.
- 작은 world fact/state로 축약하고 재합류를 허용해야 한다.

자료:
- https://www.stoicstudio.com/games/banner-saga/

### Oath: Chronicles of Empire and Exile

관찰 포인트:
- 이전 플레이의 결과가 다음 플레이의 출발 세계를 바꾸며, 플레이 자체가 역사로 남는다.
- 저작된 선형 캠페인보다 emergent history 쪽에 가깝다.

Chronicle과 차이:
- Chronicle은 무한 emergent history보다 작가가 선별한 의미 있는 가능 역사를 제공하려 한다.

자료:
- https://ledergames.com/products/oath-chronicles-of-empire-exile

## 현재 구조와의 비교

Chronicle의 가설은 대략 다음 부품의 결합이다.

~~~text
다중 제한시점
+ 같은 공유 세계
+ 작은 선택의 상태 축적
+ Book 수준의 저작된 역사적 Outcome
+ Book 간 world fact 승계
+ 분기 재합류
+ 가능한 역사 자체의 수집
~~~

조사 범위에서는 이 조합 전체가 그대로 겹치는 대표작은 확인하지 못했다.
독창성의 핵심은 개별 부품의 최초 발명보다 결합 방식과 역사 수집 목적에 있다.

## Pilot에 가져갈 경고

1. **모든 선택을 분기로 만들지 않는다.**
   대부분은 Character/세계 fact를 남기고, 소수만 거시 Outcome 조건에 참여한다.

2. **모든 Outcome을 새 Book으로 만들지 않는다.**
   같은 downstream Book에 다른 사실 상태로 재합류할 수 있어야 한다.

3. **세계선 ID보다 역사적 fact/state를 우선 검토한다.**
   완전한 timeline 복제는 제작·QA 비용이 기하급수적으로 커질 수 있다.

4. **인과를 플레이어가 읽을 수 있어야 한다.**
   작은 선택이 다음 Book에서 큰 반향을 만들었다면, 나중에 그 연결을 추적할 수 있는 기록 방식이 필요하다.

5. **Character Fate와 Book Outcome을 분리한다.**
   개인의 종착점과 역사 전체의 귀결이 항상 같으면 다중시점의 의미가 약해진다.

6. **Schema보다 Pilot이 먼저다.**
   실제 Book 한 조각을 만들어 콘텐츠 비용과 재합류 가능성을 측정한 뒤 graph/schema를 확정한다.
