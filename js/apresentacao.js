(function(){
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const contador = document.getElementById('contador');
  const progresso = document.getElementById('progresso');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  let idx = 0;
  function irPara(i){
    idx = (i + total) % total;
    slides.forEach((s,k)=>s.classList.toggle('active', k===idx));
    contador.textContent = (idx+1) + ' / ' + total;
    progresso.style.width = ((idx+1)/total*100) + '%';
    btnPrev.disabled = idx===0;
    btnNext.disabled = idx===total-1;
  }
  document.getElementById('btnNext').onclick = ()=>irPara(idx+1);
  document.getElementById('btnPrev').onclick = ()=>irPara(idx-1);
  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();irPara(idx+1)}
    if(e.key==='ArrowLeft'){e.preventDefault();irPara(idx-1)}
    if(e.key==='Home')irPara(0);
    if(e.key==='End')irPara(total-1);
  });
  let x0=null;
  document.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
  document.addEventListener('touchend',e=>{
    if(x0===null)return;
    const dx=e.changedTouches[0].clientX-x0;
    if(Math.abs(dx)>50){dx<0?irPara(idx+1):irPara(idx-1)}
    x0=null;
  },{passive:true});
  document.querySelector('.deck').addEventListener('click',e=>{
    if(e.target.closest('a,button'))return;
    irPara(idx+1);
  });
  irPara(0);
})();