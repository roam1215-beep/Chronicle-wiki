# 카드 카탈로그 뷰 — 표현 규약

> "카드 보여줘 / 펼쳐줘 / 풀 보자" 할 때, 일관된 분류·비주얼로 펼치는 규약.
> claude.ai 채팅에서 show_widget(visualize)으로 렌더한다. 위키엔 명세만 — 반응형 HTML을 위키에 박지 않는다.
> design/card_mockup.html(게임 페이즈 동선 목업)과 별개. 이 문서는 카드 풀 전체를 펼치는 카탈로그용.
> 목적: 어느 채팅·어느 직군이 카드를 펼치든 같은 틀이 이어지게.

## 언제 쓰나

철님이 "카드 펼쳐줘 / 보여줘 / 풀 보자 / 정렬해서 보자"류를 요청하면, 이 규약대로 인터랙티브 카탈로그 위젯을 낸다. (read_me modules=["mockup"] 먼저 호출 후 show_widget.)

## 분류 체계 (정렬 모드 — 버튼 토글)

기본은 "종류·타입별". 상단 버튼으로 전환한다.

```
종류·타입별 (기본): 인물(타입 보병→기수→척후→전령) → 장비 → 기도 → 책략. 각 섹션 내 코스트순.
코스트순:           1~7 코스트별. 같은 코스트 내 종류순(인물→장비→기도→책략).
등급순:             보통→희귀→영웅→전설. 각 등급 내 코스트순.
타입순:             보병→기수→척후→전령→발동 카드(장비·기도·책략). 각 내 코스트순.
종류순:             인물→장비→기도→책략. 각 내 코스트순.
```

선택 요소(분석 뷰): 의지 커브 막대(코스트별 장수, 종류 누적 스택) · 인물 타입 분포 바.

## 비주얼 규약

카드 한 장 = 셸:
```
[코스트 원(좌상)]              [등급 배지(우상)]
이름
타입(인물) 또는 종류(발동) 라벨
공격력 / 체력 / 보호막 (인물만)
─────
효과 텍스트 (있으면)
```

색 (라이트/다크 양쪽 작동 — 배경은 ramp 50, 글자는 ramp 800/900):
```
등급:  보통 bg #F1EFE8 fg #2C2C2A · 희귀 bg #E6F1FB fg #0C447C
       영웅 bg #EEEDFE fg #26215C · 전설 bg #FAEEDA fg #412402
타입(분포 바): 보병 #D3D1C7 · 기수 #B5D4F4 · 척후 #9FE1CB · 전령 #CECBF6
종류(커브 스택): 인물 #888780 · 장비 #D85A30 · 기도 #1D9E75 · 책략 #7F77DD
능력치 아이콘: 공격 ti-sword(#993C1D) · 체력 ti-heart(text-primary) · 보호막 ti-shield(#185FA5)
코스트 원: bg var(--color-background-tertiary), 숫자 text-primary
```

규칙: 본문 텍스트·테두리는 CSS 변수(--color-text-*, --color-border-tertiary) 사용. 등급/타입/종류 색만 위 hex 고정(카드 게임 색 일관). 셸 카드 = 흰 배경(--color-background-primary) + 0.5px 테두리 + radius-lg.

## 데이터 구조

카드 데이터는 content/cards/{order}/{characters,equipment,spells,stratagems}/{직업}.md에서 읽어 배열로 만든다. 한 카드 = {kind, name, type, tier, cost, atk, hp, sh, eff}.
- kind: unit | gear | spell | strat
- type: soldier | rider | scout | herald (인물만, 발동 카드는 '-')
- 능력치(atk/hp/sh)는 인물만. 시안(미검증)이면 그대로 표기.

## 위젯 코드 템플릿

아래를 복사해 cards 배열만 갈아끼우면 같은 카탈로그가 나온다. (정렬 토글 포함)

```html
<h2 class="sr-only">카드 카탈로그 — 정렬 토글</h2>
<div style="padding:0.5rem 0;">
  <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:1rem;">
    <button class="sortbtn" data-mode="group">종류·타입별 (기본)</button>
    <button class="sortbtn" data-mode="cost">코스트순</button>
    <button class="sortbtn" data-mode="tier">등급순</button>
    <button class="sortbtn" data-mode="type">타입순</button>
    <button class="sortbtn" data-mode="kind">종류순</button>
  </div>
  <div id="out"></div>
</div>
<style>
.sortbtn{font-size:13px; padding:6px 12px; border:0.5px solid var(--color-border-secondary); border-radius:var(--border-radius-md); background:transparent; color:var(--color-text-secondary); cursor:pointer;}
.sortbtn.active{border:2px solid var(--color-border-info); color:var(--color-text-primary); padding:5px 11px;}
</style>
<script>
const TIER={common:{ko:'보통',bg:'#F1EFE8',fg:'#2C2C2A'},rare:{ko:'희귀',bg:'#E6F1FB',fg:'#0C447C'},epic:{ko:'영웅',bg:'#EEEDFE',fg:'#26215C'},legendary:{ko:'전설',bg:'#FAEEDA',fg:'#412402'}};
const TYPE={soldier:'보병',rider:'기수',scout:'척후',herald:'전령','-':'—'};
const KIND={unit:{ko:'인물',icon:'ti-users',ord:0},gear:{ko:'장비',icon:'ti-sword',ord:1},spell:{ko:'기도',icon:'ti-pray',ord:2},strat:{ko:'책략',icon:'ti-map-pin',ord:3}};

// ↓↓↓ 카드 데이터만 갈아끼운다 (위키 yaml에서 읽어 채움) ↓↓↓
const cards=[
  {kind:'unit', name:'예시 보병', type:'soldier', tier:'common', cost:1, atk:2, hp:1, sh:0, eff:''},
  {kind:'gear', name:'예시 장비', type:'-', tier:'rare', cost:3, eff:'대적자 공 +3 · 2회'},
  {kind:'spell', name:'예시 기도', type:'-', tier:'common', cost:1, eff:'일반 인물 1 · 그 턴 공 +2'},
  {kind:'strat', name:'예시 책략', type:'-', tier:'epic', cost:5, eff:'세로 3칸 6 피해 관통'}
];
// ↑↑↑ 여기까지 ↑↑↑

function cardEl(c){
  const t=TIER[c.tier];
  let stat='';
  if(c.kind==='unit'){
    stat=`<span style="display:inline-flex;align-items:center;gap:3px;color:#993C1D;"><i class="ti ti-sword" aria-hidden="true"></i>${c.atk}</span><span style="display:inline-flex;align-items:center;gap:3px;"><i class="ti ti-heart" aria-hidden="true"></i>${c.hp}</span>`;
    if(c.sh)stat+=`<span style="display:inline-flex;align-items:center;gap:3px;color:#185FA5;"><i class="ti ti-shield" aria-hidden="true"></i>${c.sh}</span>`;
  }
  const sub=c.kind==='unit'?`<div style="font-size:11px;color:var(--color-text-secondary);">${TYPE[c.type]}</div>`:`<div style="font-size:11px;color:var(--color-text-secondary);">${KIND[c.kind].ko}</div>`;
  const statRow=stat?`<div style="display:flex;gap:10px;font-size:12.5px;font-weight:500;">${stat}</div>`:'';
  return `<div style="display:flex;flex-direction:column;gap:6px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-background-tertiary);font-size:12px;font-weight:500;color:var(--color-text-primary);">${c.cost}</span><span style="font-size:10.5px;font-weight:500;padding:2px 7px;border-radius:var(--border-radius-md);background:${t.bg};color:${t.fg};">${t.ko}</span></div>
    <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);line-height:1.3;">${c.name}</div>${sub}${statRow}
    ${c.eff?`<div style="font-size:11px;color:var(--color-text-tertiary);line-height:1.45;border-top:0.5px solid var(--color-border-tertiary);padding-top:5px;">${c.eff}</div>`:''}</div>`;
}
const head=(i,l)=>`<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--color-text-secondary);margin:1.3rem 0 9px;"><i class="ti ${i}" aria-hidden="true"></i><span>${l}</span></div>`;
const grid=x=>`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:10px;">${x}</div>`;

function render(mode){
  const out=document.getElementById('out'); let html='';
  if(mode==='group'){
    for(const [k,info] of Object.entries(KIND)){
      const list=cards.filter(c=>c.kind===k);
      if(!list.length) continue;
      if(k==='unit'){
        for(const [tk,tko] of Object.entries(TYPE)){
          if(tk==='-')continue;
          const tl=list.filter(c=>c.type===tk).sort((a,b)=>a.cost-b.cost);
          if(!tl.length)continue;
          html+=head(tk==='soldier'?'ti-shield':tk==='rider'?'ti-run':tk==='scout'?'ti-eye':'ti-flag',`${tko} · ${tl.length}장`);
          html+=grid(tl.map(cardEl).join(''));
        }
      } else { html+=head(info.icon,`${info.ko} · ${list.length}장`); html+=grid(list.slice().sort((a,b)=>a.cost-b.cost).map(cardEl).join('')); }
    }
  } else if(mode==='cost'){
    for(let cc=0;cc<=7;cc++){
      const cl=cards.filter(c=>c.cost===cc).sort((a,b)=>KIND[a.kind].ord-KIND[b.kind].ord);
      if(!cl.length)continue;
      html+=head('ti-droplet',`${cc} 코스트 · ${cl.length}장`); html+=grid(cl.map(cardEl).join(''));
    }
  } else if(mode==='tier'){
    for(const [tk,info] of Object.entries(TIER)){
      const tl=cards.filter(c=>c.tier===tk).sort((a,b)=>a.cost-b.cost);
      if(!tl.length)continue;
      html+=head('ti-star',`${info.ko} · ${tl.length}장`); html+=grid(tl.map(cardEl).join(''));
    }
  } else if(mode==='type'){
    for(const [tk,tko] of Object.entries(TYPE)){
      const tl=cards.filter(c=>c.type===tk).sort((a,b)=>a.cost-b.cost);
      if(!tl.length)continue;
      const ic=tk==='soldier'?'ti-shield':tk==='rider'?'ti-run':tk==='scout'?'ti-eye':tk==='herald'?'ti-flag':'ti-cards';
      html+=head(ic,`${tk==='-'?'발동 카드 (장비·기도·책략)':tko} · ${tl.length}장`); html+=grid(tl.map(cardEl).join(''));
    }
  } else if(mode==='kind'){
    for(const [k,info] of Object.entries(KIND)){
      const kl=cards.filter(c=>c.kind===k).sort((a,b)=>a.cost-b.cost);
      if(!kl.length)continue;
      html+=head(info.icon,`${info.ko} · ${kl.length}장`); html+=grid(kl.map(cardEl).join(''));
    }
  }
  out.innerHTML=html;
  document.querySelectorAll('.sortbtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
}
document.querySelectorAll('.sortbtn').forEach(b=>b.addEventListener('click',()=>render(b.dataset.mode)));
render('group');
</script>
```

## 의지 커브 막대 (선택 — 분석 뷰)

코스트별 장수를 종류 누적 스택으로. 코스트 1~7 가로축, 막대 높이 = 장수, 종류색(인물/장비/기도/책략) 스택. 3코 봉우리·6코 골짜기 같은 분포 구멍을 한눈에 보여줄 때 쓴다.

## 유지보수

- 타입·종류·등급 어휘가 바뀌면(예: 새 타입 추가) TYPE/KIND/TIER 맵을 같이 고친다.
- 색은 design/style_canon.md 톤과 어긋나지 않게.
- 새 정렬 모드가 필요하면 버튼 + render() 분기 추가.
