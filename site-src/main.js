(function(){
const R=document.documentElement,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let L='en';
const t=k=>{const v=COPY[k];if(!v){console.warn('missing',k);return k}return v[L==='en'?1:0]};
const gs=k=>{try{return localStorage.getItem(k)}catch(e){return null}},ss=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const NAV=$$('section.ch').map((s,i)=>({id:s.id,k:s.dataset.nav,n:String(i+1).padStart(2,'0')}));

function applyText(){$$('[data-k]').forEach(el=>{el.innerHTML=t(el.dataset.k)})}
function setLang(l){L=l;R.lang=l==='en'?'en':'zh-CN';R.classList.toggle('zh',l!=='en');$('#l-zh').setAttribute('aria-pressed',l!=='en');$('#l-en').setAttribute('aria-pressed',l==='en');ss('fs-lang',l);applyText();renderAll()}
$('#l-zh').onclick=()=>setLang('zh');$('#l-en').onclick=()=>setLang('en');

/* rail, menu, chip */
function buildNav(){const ol=$('#rail');ol.querySelectorAll('li').forEach(l=>l.remove());const ml=$('#menu-list');ml.innerHTML='';
  NAV.forEach((n,i)=>{const li=document.createElement('li');li.innerHTML=`<button data-go="${n.id}">${t(n.k)}</button>`;ol.appendChild(li);
    const m=document.createElement('li');m.innerHTML=`<button data-go="${n.id}" style="transition-delay:${i*40}ms"><small>${n.n}</small>${t(n.k)}</button>`;ml.appendChild(m)});moveDot()}
let curIdx=-1;
function moveDot(){const lis=$$('#rail li');lis.forEach((l,i)=>l.classList.toggle('on',i===curIdx));const li=lis[Math.max(0,curIdx)];if(li)$('#rail-dot').style.transform=`translateY(${li.offsetTop+li.offsetHeight/2-4}px)`}
function setNow(i){if(i===curIdx)return;const now=$('#now');const dir=i>curIdx?1:-1;curIdx=i;moveDot();
  if(i<0){now.textContent='';return}const txt=NAV[i].n+' — '+t(NAV[i].k);
  if(RM){now.textContent=txt;return}now.style.transform=`translateY(${-100*dir}%)`;now.style.opacity=0;setTimeout(()=>{now.textContent=txt;now.style.transition='none';now.style.transform=`translateY(${100*dir}%)`;requestAnimationFrame(()=>{now.style.transition='';now.style.transform='none';now.style.opacity=1})},250)}
(function(){const nav=$('.rail'),ol=$('#rail');if(RM)return;
  function reset(){nav.classList.remove('hot');ol.querySelectorAll('li').forEach(li=>{li.style.transform='';li.style.opacity='';li.classList.remove('near')})}
  ol.addEventListener('mousemove',e=>{nav.classList.add('hot');ol.querySelectorAll('li').forEach(li=>{const r=li.getBoundingClientRect();const d=(e.clientY-(r.top+r.height/2))/r.height;const f=Math.max(0,1-Math.abs(d)/3);
    li.style.transform=`translateX(${(f*12).toFixed(1)}px) translateZ(${(f*70).toFixed(1)}px) rotateX(${Math.max(-50,Math.min(50,d*-11)).toFixed(1)}deg)`;li.style.opacity=(.35+f*.65).toFixed(2);li.classList.toggle('near',f>.66)})});
  ol.addEventListener('mouseleave',reset)})();
$('#menu-open').onclick=()=>{$('#menu').classList.add('open');setTimeout(()=>$('#menu-close').focus(),300)};
$('#menu-close').onclick=()=>$('#menu').classList.remove('open');
addEventListener('keydown',e=>{if(e.key==='Escape')$('#menu').classList.remove('open')});

/* chapter jump: plain smooth scroll */
function go(id){const el=document.getElementById(id);if(!el)return;$('#menu').classList.remove('open');
  const top=id==='hero'?0:el.getBoundingClientRect().top+scrollY-64;scrollTo({top,behavior:RM?'auto':'smooth'})}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b){e.preventDefault();go(b.dataset.go)}});

/* scroll: progress, current chapter */
function onScroll(){const bn=$('.banner');if(bn){const away=bn.getBoundingClientRect().bottom>innerHeight*.35;$('.rail').classList.toggle('away',away);$('.chip-now').classList.toggle('away',away)}const h=document.documentElement.scrollHeight-innerHeight;$('#prog').style.setProperty('--p',(scrollY/h).toFixed(4));
  const mid=innerHeight*.45;let idx=-1;$$('section.ch').forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top<=mid&&r.bottom>mid)idx=i});setNow(idx)}
addEventListener('scroll',()=>requestAnimationFrame(onScroll),{passive:true});addEventListener('resize',()=>{moveDot();onScroll()});

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
$$('.head,.rv,.body').forEach(el=>io.observe(el));
if(RM)$$('.head,.rv,.body').forEach(el=>el.classList.add('revealed'));
requestAnimationFrame(()=>$('.banner').classList.add('in'));
if(!RM){const bi=$('#bn-img');addEventListener('scroll',()=>{const y=scrollY;if(y<900)bi.style.translate=`0 ${(y*.12).toFixed(1)}px`},{passive:true})}

/* counters */
$$('[data-c]').forEach(b=>{if(RM)return;const o=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;o.disconnect();const n=+b.dataset.c,t0=performance.now();(function f(tm){const p=Math.min(1,(tm-t0)/1100);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)},{threshold:.5});o.observe(b)});

/* screens: one slide per flow, static screens, manual left/right */
const SC=[
 [3,['01-welcome','02-today','03-use-first']],
 [3,['04-pantry','05-ingredient','06-empty-pantry']],
 [4,['09-scan-groceries','10-scan-results','12-pantry-updated']],
 [2,['11-my-fridge','08-manual-entry']],
 [3,['13-discover','14-recipe-match','15-recipe-detail']],
 [3,['16-cooking-steps','17-cooking-timer','18-meal-complete']],
 [3,['20-saved-recipes','22-shopping-list','24-food-preferences']]];
let carIdx=0;
function buildScenes(){const box=$('#scenes');box.innerHTML='';
  SC.forEach(([n,shots],si)=>{const d=document.createElement('section');d.className='slide'+(si===carIdx?' act':'');d.setAttribute('aria-label',`${si+1} / ${SC.length}`);
    let lis='';for(let j=1;j<=n;j++)lis+=`<li><span class="i">0${j}</span><b data-k="sc${si+1}.s${j}.t">${t(`sc${si+1}.s${j}.t`)}</b><p data-k="sc${si+1}.s${j}.d">${t(`sc${si+1}.s${j}.d`)}</p></li>`;
    d.innerHTML=`<div><p class="sn">${String(si+1).padStart(2,'0')} / ${String(SC.length).padStart(2,'0')}</p><h3 data-k="sc${si+1}.t">${t(`sc${si+1}.t`)}</h3><ol>${lis}</ol></div>
      <div class="shots">${shots.map(f=>`<div class="phone" data-zoom="img/shot/${f}.jpg"><div class="scr"><img src="img/shot/${f}.jpg" alt="" loading="lazy"></div></div>`).join('')}</div>`;
    box.appendChild(d)});
  $('#car-dots').innerHTML=SC.map((_,i)=>`<button type="button" aria-label="${i+1}" aria-current="${i===carIdx}"></button>`).join('');
  $$('#car-dots button').forEach((b,i)=>b.onclick=()=>carGo(i));
  requestAnimationFrame(()=>{box.scrollTo({left:carIdx*(box.clientWidth+16),behavior:'instant'});carSync()})}
function carGo(i){const box=$('#scenes');i=Math.max(0,Math.min(SC.length-1,i));$$('#scenes .slide').forEach((d,k)=>d.classList.toggle('act',k===i));box.scrollTo({left:i*(box.clientWidth+16),behavior:RM?'auto':'smooth'})}
function carSync(){const box=$('#scenes');const i=Math.round(box.scrollLeft/(box.clientWidth+16));carIdx=i;
  $$('#scenes .slide').forEach((d,k)=>d.classList.toggle('act',k===i));$$('#car-dots button').forEach((b,k)=>b.setAttribute('aria-current',k===i));
  $('#car-prev').disabled=i<=0;$('#car-next').disabled=i>=SC.length-1;$('#car-cnt').textContent=`${String(i+1).padStart(2,'0')} / ${String(SC.length).padStart(2,'0')}`}
(function(){const box=$('#scenes');let tm;box.addEventListener('scroll',()=>{clearTimeout(tm);tm=setTimeout(carSync,60)},{passive:true});
  $('#car-prev').onclick=()=>carGo(carIdx-1);$('#car-next').onclick=()=>carGo(carIdx+1);
  box.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();carGo(carIdx+1)}if(e.key==='ArrowLeft'){e.preventDefault();carGo(carIdx-1)}});
  addEventListener('resize',()=>box.scrollTo({left:carIdx*(box.clientWidth+16),behavior:'instant'}))})();

/* lightbox */
document.addEventListener('click',e=>{const f=e.target.closest('[data-zoom]');if(!f)return;const d=document.createElement('div');d.className='lb';d.innerHTML=`<img alt=""><button>${t('ui.close')}</button>`;d.querySelector('img').src=f.dataset.zoom;d.onclick=ev=>{if(ev.target.tagName!=='IMG')d.remove()};document.body.appendChild(d)});

/* copy email */
$('#copy').onclick=async function(){try{await navigator.clipboard.writeText($('#mail').textContent);this.textContent=t('ft.copied')}catch(e){const r=document.createRange();r.selectNodeContents($('#mail'));const s=getSelection();s.removeAllRanges();s.addRange(r)}};

function renderAll(){buildNav();buildScenes();if(curIdx>=0){const i=curIdx;curIdx=-2;setNow(i)}}
setLang(gs('fs-lang')==='zh'?'zh':'en');onScroll();
window.CU={COPY,lang:()=>L,rerender:()=>setLang(L)};
})();
