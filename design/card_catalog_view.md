# 카드 카탈로그 뷰 — 표현 규약

> 카드 펼침 표현 규약의 단일 정본 — 분류·색·셀·필드·위젯 템플릿.
> claude.ai show_widget(visualize)으로 렌더, 위키엔 명세만 (반응형 HTML 안 박음).
> 안 쥔 것: 카드 데이터 → content/cards/.
> 목적: 어느 채팅·어느 직군이 카드를 펼치든 같은 틀이 이어지게.

## 언제 쓰나

철님이 "카드 펼쳐줘 / 보여줘 / 풀 보자 / 정렬해서 보자"류를 요청하면, 이 규약대로 인터랙티브 카탈로그 위젯을 낸다. (read_me modules=["mockup"] 먼저 호출 후 show_widget.)

## 분류 체계 (정렬 모드 — 버튼 토글)

기본은 "종합". 상단 버튼으로 전환한다.

```
종합 (기본):        진척 메트릭(현재/목표·더 채울 수) + 종류별 진척 바 + 코스트 곡선 + 등급 분포 + 타입 분포. 풀 건강을 한눈에.
종류·타입별:        인물(타입 보병→기수→척후→전령) → 장비 → 기도 → 책략. 각 섹션 내 코스트순.
코스트순:           1~7 코스트별. 같은 코스트 내 종류순(인물→장비→기도→책략).
등급순:             보통→희귀→영웅→전설. 각 등급 내 코스트순.
타입순:             보병→기수→척후→전령→발동 카드(장비·기도·책략). 각 내 코스트순.
종류순:             인물→장비→기도→책략. 각 내 코스트순.
```

종합 뷰 구성 (위→아래): ① 진척 메트릭(현재 N / 목표 30 · 더 채울 수) ② 종류별 진척 바(현재/목표, TARGET 기준) ③ 코스트 곡선(전체 카드 — 종류 누적 스택, 0코 비전승 포함) ④ 등급 분포(보통→전설, 피라미드 점검) ⑤ 타입 분포(직업색 점검). 각 분포 아래 한 줄 진단.

## 비주얼 규약

카드 한 장 = 셸:
```
[코스트 원(좌상)]              [등급 배지(우상)]
이름
타입(인물) 또는 종류(발동) 라벨 (+ 인물은 계열: 무리/인간)
공격력 / 체력 / 보호막 (인물만)
─────
효과 텍스트 (있으면)
```

색 (라이트/다크 양쪽 작동 — 배경은 ramp 50, 글자는 ramp 800/900):
```
등급 배지:  보통 bg #F1EFE8 fg #2C2C2A · 희귀 bg #E6F1FB fg #0C447C
            영웅 bg #EEEDFE fg #26215C · 전설 bg #FAEEDA fg #412402
등급 막대(TIERBAR, 종합 등급 분포): 보통 #B4B2A9 · 희귀 #85B7EB · 영웅 #AFA9EC · 전설 #EF9F27 (회·파·보·노 = 카드게임 관습)
타입(분포 바): 보병 #D3D1C7 · 기수 #B5D4F4 · 척후 #9FE1CB · 전령 #CECBF6 · 용병 #ED93B1
종류(진척 바): 인물 #888780 · 장비 #D85A30 · 기도 #1D9E75 · 책략 #7F77DD
능력치 아이콘: 공격 ti-sword(#993C1D) · 체력 ti-heart(text-primary) · 보호막 ti-shield(#185FA5)
코스트 곡선(종합): 종류 누적 스택 — 위 종류 색(인물·장비·기도·책략) 그대로. 빈/얇은 코스트는 막대 높이로 드러남(강조색 없음)
코스트 원: bg var(--color-background-tertiary), 숫자 text-primary
```

규칙: 본문 텍스트·테두리는 CSS 변수(--color-text-*, --color-border-tertiary) 사용. 등급/타입/종류 색만 위 hex 고정(카드 게임 색 일관). 셸 카드 = 흰 배경(--color-background-primary) + 0.5px 테두리 + radius-lg.

## 데이터 구조

카드 데이터는 content/cards/{order}/{characters,equipment,spells,stratagems}/{직업}.md에서 읽어 배열로 만든다. 한 카드 = {kind, name, type, tier, cost, atk, hp, sh, race, eff}.
- kind: unit | gear | spell | strat
- type: soldier | rider | scout | herald | shifting (인물만, 발동 카드는 '-')
- race: horde | human | null (인물만 — 계열 분석용. 발동 카드는 null)
- 능력치(atk/hp/sh)는 인물만. 시안(미검증)이면 그대로 표기.
- 종합 뷰의 목표치(TARGET = {unit, gear, spell, strat})는 직업 풀 목표 장수 — 갈아끼운다 (전사 기준 인물20·장비3·기도4·책략3 = 30).

## 위젯 코드 템플릿

아래를 복사해 cards 배열·TARGET만 갈아끼우면 같은 카탈로그가 나온다. (종합·정렬 토글 포함)

```html
<h2 class="sr-only">카드 카탈로그 — 종합·정렬 토글</h2>
<div style="padding:0.5rem 0;">
  <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:1rem;">
    <button class="sortbtn active" data-mode="analysis">종합</button>
    <button class="sortbtn" data-mode="group">종류·타입별</button>
    <button class="sortbtn" data-mode="cost">코스트순</button>
    <button class="sortbtn" data-mode="tier">등급순</button>
    <button class="sortbtn" data-mode="type">타입순</button>
  </div>
  <div id="out"></div>
</div>
<style>
.sortbtn{font-size:13px; padding:6px 12px; border:0.5px solid var(--color-border-secondary); border-radius:var(--border-radius-md); background:transparent; color:var(--color-text-secondary); cursor:pointer;}
.sortbtn.active{border:2px solid var(--color-border-info); color:var(--color-text-primary); padding:5px 11px;}
.bar{height:22px; border-radius:4px; display:flex; align-items:center; padding:0 8px; font-size:11px; font-weight:500; color:#2C2C2A; white-space:nowrap;}
.mc{background:var(--color-background-secondary); border-radius:var(--border-radius-md); padding:0.8rem 1rem;}
.mc .lab{font-size:12px; color:var(--color-text-secondary); margin-bottom:3px;}
.mc .num{font-size:22px; font-weight:500; color:var(--color-text-primary);}
</style>
<script>
const TIER={common:{ko:'보통',bg:'#F1EFE8',fg:'#2C2C2A'},rare:{ko:'희귀',bg:'#E6F1FB',fg:'#0C447C'},epic:{ko:'영웅',bg:'#EEEDFE',fg:'#26215C'},legendary:{ko:'전설',bg:'#FAEEDA',fg:'#412402'}};
const TIERBAR={common:{ko:'보통',c:'#B4B2A9'},rare:{ko:'희귀',c:'#85B7EB'},epic:{ko:'영웅',c:'#AFA9EC'},legendary:{ko:'전설',c:'#EF9F27'}};
const TYPE={soldier:'보병',rider:'기수',scout:'척후',herald:'전령',shifting:'용병','-':'—'};
const TYPECOLOR={soldier:'#D3D1C7',rider:'#B5D4F4',scout:'#9FE1CB',herald:'#CECBF6',shifting:'#ED93B1'};
const KIND={unit:{ko:'인물',icon:'ti-users',ord:0,color:'#888780'},gear:{ko:'장비',icon:'ti-sword',ord:1,color:'#D85A30'},spell:{ko:'기도',icon:'ti-pray',ord:2,color:'#1D9E75'},strat:{ko:'책략',icon:'ti-map-pin',ord:3,color:'#7F77DD'}};

// ↓↓↓ 카드 데이터·목표치만 갈아끼운다 (위키 yaml에서 읽어 채움) ↓↓↓
const cards=[
  {kind:'unit', name:'예시 보병', type:'soldier', tier:'common', cost:1, atk:2, hp:1, sh:0, race:'human', eff:''},
  {kind:'unit', name:'예시 척후', type:'scout', tier:'rare', cost:3, atk:2, hp:3, sh:0, race:'horde', eff:'신속'},
  {kind:'gear', name:'예시 장비', type:'-', tier:'rare', cost:3, race:null, eff:'대적자 공 +1 · 사격 3회'},
  {kind:'spell', name:'예시 기도', type:'-', tier:'common', cost:1, race:null, eff:'일반 인물 1 · 그 턴 공 +2'},
  {kind:'strat', name:'예시 책략', type:'-', tier:'epic', cost:5, race:null, eff:'세로 3칸 6 피해 관통'}
];
const TARGET={unit:20,gear:3,spell:4,strat:3};   // 직업 풀 목표 장수 (전사 기준)
// ↑↑↑ 여기까지 ↑↑↑

function cardEl(c){
  const t=TIER[c.tier];
  let stat='';
  if(c.kind==='unit'){
    stat=`<span style="display:inline-flex;align-items:center;gap:3px;color:#993C1D;"><i class="ti ti-sword" aria-hidden="true"></i>${c.atk}</span><span style="display:inline-flex;align-items:center;gap:3px;"><i class="ti ti-heart" aria-hidden="true"></i>${c.hp}</span>`;
    if(c.sh)stat+=`<span style="display:inline-flex;align-items:center;gap:3px;color:#185FA5;"><i class="ti ti-shield" aria-hidden="true"></i>${c.sh}</span>`;
  }
  const sub=c.kind==='unit'?`<div style="font-size:11px;color:var(--color-text-secondary);">${TYPE[c.type]}${c.race?' · '+(c.race==='horde'?'무리':'인간'):''}</div>`:`<div style="font-size:11px;color:var(--color-text-secondary);">${KIND[c.kind].ko}</div>`;
  const statRow=stat?`<div style="display:flex;gap:10px;font-size:12.5px;font-weight:500;">${stat}</div>`:'';
  return `<div style="display:flex;flex-direction:column;gap:6px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:10px;">
    <div style="display:flex;align-items:center;justify-content:space-between;"><span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--color-background-tertiary);font-size:12px;font-weight:500;color:var(--color-text-primary);">${c.cost}</span><span style="font-size:10.5px;font-weight:500;padding:2px 7px;border-radius:var(--border-radius-md);background:${t.bg};color:${t.fg};">${t.ko}</span></div>
    <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);line-height:1.3;">${c.name}</div>${sub}${statRow}
    ${c.eff?`<div style="font-size:11px;color:var(--color-text-tertiary);line-height:1.45;border-top:0.5px solid var(--color-border-tertiary);padding-top:5px;">${c.eff}</div>`:''}</div>`;
}
const head=(i,l)=>`<div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--color-text-secondary);margin:1.3rem 0 9px;"><i class="ti ${i}" aria-hidden="true"></i><span>${l}</span></div>`;
const grid=x=>`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">${x}</div>`;

function analysisView(){
  let h=''; const tot=cards.length, units=cards.filter(c=>c.kind==='unit');
  const goal=Object.values(TARGET).reduce((a,b)=>a+b,0);
  const hbar=(label,n,total,color,note)=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><span style="width:42px;font-size:12px;color:var(--color-text-secondary);">${label}</span><div class="bar" style="width:${Math.max(n/total*100,8)}%;background:${color};">${n}</div>${note?`<span style="font-size:11px;color:var(--color-text-tertiary);">${note}</span>`:''}</div>`;
  h+=`<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:6px;">
    <div class="mc"><div class="lab">현재 → 목표</div><div class="num">${tot} <span style="font-size:14px;color:var(--color-text-tertiary);">/ ${goal}</span></div></div>
    <div class="mc"><div class="lab">더 채울 카드</div><div class="num">${Math.max(goal-tot,0)}<span style="font-size:14px;color:var(--color-text-tertiary);">장</span></div></div>
  </div>`;
  h+=head('ti-stack-2','종류별 — 현재 / 목표');
  for(const [k,info] of Object.entries(KIND)){
    const cur=cards.filter(c=>c.kind===k).length, tg=TARGET[k], need=tg-cur;
    h+=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="width:42px;font-size:12px;color:var(--color-text-secondary);">${info.ko}</span><div style="flex:1;height:22px;border-radius:4px;background:var(--color-background-tertiary);position:relative;overflow:hidden;"><div style="position:absolute;inset:0;width:${Math.min(cur/tg*100,100)}%;background:${info.color};border-radius:4px;"></div></div><span style="font-size:12px;color:var(--color-text-secondary);min-width:58px;">${cur} / ${tg}${need>0?` <span style="color:var(--color-text-tertiary);">+${need}</span>`:''}</span></div>`;
  }
  h+=head('ti-chart-bar','코스트 곡선 — 전체 (종류 스택)');
  let maxc=0; const byc=[];
  for(let cc=0;cc<=7;cc++){const list=cards.filter(c=>c.cost===cc); byc[cc]=list; if(list.length>maxc)maxc=list.length;}
  h+='<div style="display:flex;align-items:flex-end;gap:8px;height:140px;padding:0 4px;">';
  for(let cc=0;cc<=7;cc++){
    const list=byc[cc]; let stack='';
    for(const [k,info] of Object.entries(KIND)){const n=list.filter(c=>c.kind===k).length; if(n)stack+=`<div style="background:${info.color};width:100%;height:${n/maxc*115}px;"></div>`;}
    h+=`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="font-size:11px;color:var(--color-text-tertiary);">${list.length||''}</div><div style="width:100%;display:flex;flex-direction:column-reverse;border-radius:4px;overflow:hidden;">${stack||'<div style="height:2px;background:var(--color-border-tertiary);"></div>'}</div><div style="font-size:11px;color:var(--color-text-secondary);">${cc}</div></div>`;
  }
  h+='</div>';
  h+=`<div style="display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:var(--color-text-secondary);margin-top:8px;">${Object.values(KIND).map(i=>`<span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;border-radius:2px;background:${i.color};"></span>${i.ko}</span>`).join('')}</div>`;
  h+=head('ti-star','등급 분포 — 보통=덱 살, 전설 덱당 1장');
  for(const [tk,info] of Object.entries(TIERBAR)){ h+=hbar(info.ko,cards.filter(c=>c.tier===tk).length,tot,info.c,''); }
  h+=head('ti-cards','타입 분포 — 직업색 점검');
  for(const tk of ['scout','rider','soldier','herald']){ h+=hbar(TYPE[tk],units.filter(c=>c.type===tk).length,units.length||1,TYPECOLOR[tk],''); }
  return h;
}

function render(mode){
  const out=document.getElementById('out'); let html='';
  if(mode==='analysis'){ out.innerHTML=analysisView(); document.querySelectorAll('.sortbtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode)); return; }
  if(mode==='group'){
    for(const [k,info] of Object.entries(KIND)){
      const list=cards.filter(c=>c.kind===k); if(!list.length) continue;
      if(k==='unit'){
        for(const [tk,tko] of Object.entries(TYPE)){
          if(tk==='-')continue;
          const tl=list.filter(c=>c.type===tk).sort((a,b)=>a.cost-b.cost); if(!tl.length)continue;
          html+=head(tk==='soldier'?'ti-shield':tk==='rider'?'ti-run':tk==='scout'?'ti-eye':tk==='herald'?'ti-flag':'ti-refresh',`${tko} · ${tl.length}장`); html+=grid(tl.map(cardEl).join(''));
        }
      } else { html+=head(info.icon,`${info.ko} · ${list.length}장`); html+=grid(list.slice().sort((a,b)=>a.cost-b.cost).map(cardEl).join('')); }
    }
  } else if(mode==='cost'){
    for(let cc=0;cc<=7;cc++){ const cl=cards.filter(c=>c.cost===cc).sort((a,b)=>KIND[a.kind].ord-KIND[b.kind].ord); if(!cl.length)continue; html+=head('ti-droplet',`${cc} 코스트 · ${cl.length}장`); html+=grid(cl.map(cardEl).join('')); }
  } else if(mode==='tier'){
    for(const [tk,info] of Object.entries(TIER)){ const tl=cards.filter(c=>c.tier===tk).sort((a,b)=>a.cost-b.cost); if(!tl.length)continue; html+=head('ti-star',`${info.ko} · ${tl.length}장`); html+=grid(tl.map(cardEl).join('')); }
  } else if(mode==='type'){
    for(const [tk,tko] of Object.entries(TYPE)){ const tl=cards.filter(c=>c.type===tk).sort((a,b)=>a.cost-b.cost); if(!tl.length)continue; const ic=tk==='soldier'?'ti-shield':tk==='rider'?'ti-run':tk==='scout'?'ti-eye':tk==='herald'?'ti-flag':tk==='shifting'?'ti-refresh':'ti-cards'; html+=head(ic,`${tk==='-'?'발동 카드':tko} · ${tl.length}장`); html+=grid(tl.map(cardEl).join('')); }
  }
  out.innerHTML=html;
  document.querySelectorAll('.sortbtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
}
document.querySelectorAll('.sortbtn').forEach(b=>b.addEventListener('click',()=>render(b.dataset.mode)));
render('analysis');
</script>
```

## 유지보수

- 타입·종류·등급 어휘가 바뀌면(예: 새 타입 추가) TYPE/KIND/TIER/TIERBAR 맵을 같이 고친다.
- 색은 design/style_canon.md 톤과 어긋나지 않게. 등급 막대(TIERBAR) = 보통 회색·희귀 파랑·영웅 보라·전설 노랑(카드게임 관습).
- 새 정렬 모드가 필요하면 버튼 + render() 분기 추가.
- 종합 뷰 목표치(TARGET)는 직업마다 갱신 (전사 20·3·4·3 = 30 기준).
