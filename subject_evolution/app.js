// ===== STARS =====
(function initStars(){
  const c=document.getElementById('stars');
  for(let i=0;i<200;i++){
    const s=document.createElement('div');
    s.className='star';
    const sz=Math.random()*3+1;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${Math.random()*3+2}s;animation-delay:${Math.random()*3}s`;
    c.appendChild(s);
  }
})();

// ===== RENDER TIMELINE =====
(function renderTimeline(){
  const container=document.getElementById('layers-container');
  LAYERS.forEach((l,i)=>{
    const div=document.createElement('div');
    div.className=`layer color-${i%20}`;
    div.innerHTML=`
      <div class="layer-dot"></div>
      <div class="layer-card" id="card-${i}">
        <div class="layer-era">${l.era}</div>
        <div class="layer-title">${l.title}</div>
        <p class="layer-narrative">${l.narrative}</p>
        <div class="layer-subjects">${l.subjects.map(s=>`<span class="subject-tag">${s}</span>`).join('')}</div>
        <div class="layer-foundation">${l.foundation}</div>
        <div class="layer-detail" id="detail-${i}">
          <div class="layer-detail-inner">${l.detail}</div>
        </div>
        <div class="expand-hint">▸ Click to expand</div>
      </div>`;
    container.appendChild(div);

    div.querySelector('.layer-card').addEventListener('click',()=>{
      const det=document.getElementById(`detail-${i}`);
      det.classList.toggle('open');
      div.querySelector('.expand-hint').textContent=det.classList.contains('open')?'▾ Click to collapse':'▸ Click to expand';
    });
  });
})();

// ===== SCROLL REVEAL =====
(function scrollReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.15});
  document.querySelectorAll('.layer').forEach(l=>obs.observe(l));
})();

// ===== DEPENDENCY GRAPH ON CANVAS =====
(function drawGraph(){
  const canvas=document.getElementById('depGraph');
  const W=Math.min(1000,window.innerWidth-40);
  const H=900;
  canvas.width=W*2;canvas.height=H*2;
  canvas.style.width=W+'px';canvas.style.height=H+'px';
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);

  const nodes=[
    {id:0,label:"Cosmology\n& Physics",x:W/2,y:30},
    {id:1,label:"Astronomy",x:W/2,y:90},
    {id:2,label:"Chemistry",x:W/2-120,y:150},
    {id:3,label:"Geology",x:W/2+120,y:150},
    {id:4,label:"Geography",x:W/2,y:210},
    {id:5,label:"Biology",x:W/2-150,y:270},
    {id:6,label:"Evolution\n& Ecology",x:W/2+150,y:270},
    {id:7,label:"Botany &\nZoology",x:W/2,y:330},
    {id:8,label:"Anthropology",x:W/2,y:390},
    {id:9,label:"Language\n& Arts",x:W/2-180,y:450},
    {id:10,label:"Agriculture",x:W/2+180,y:450},
    {id:11,label:"Mathematics",x:W/2-100,y:510},
    {id:12,label:"Writing &\nHistory",x:W/2+100,y:510},
    {id:13,label:"Engineering",x:W/2-200,y:570},
    {id:14,label:"Economics\n& Trade",x:W/2,y:570},
    {id:15,label:"Philosophy\n& Religion",x:W/2+200,y:570},
    {id:16,label:"Medicine",x:W/2-250,y:640},
    {id:17,label:"Political\nScience & Law",x:W/2-80,y:640},
    {id:18,label:"Education",x:W/2+80,y:640},
    {id:19,label:"Scientific\nRevolution",x:W/2+250,y:640},
    {id:20,label:"Industrial\nRevolution",x:W/2-180,y:710},
    {id:21,label:"Social\nSciences",x:W/2,y:710},
    {id:22,label:"Modern\nMedicine",x:W/2+180,y:710},
    {id:23,label:"Computer\nScience",x:W/2-120,y:780},
    {id:24,label:"Space &\nEnvironment",x:W/2+120,y:780},
    {id:25,label:"Digital\nRevolution",x:W/2-60,y:840},
    {id:26,label:"AI & Frontier\nSciences",x:W/2+60,y:840}
  ];

  const edges=[
    [0,1],[0,2],[1,2],[1,3],[2,3],[2,4],[3,4],
    [2,5],[4,5],[3,5],[5,6],[4,6],[3,6],
    [6,7],[4,7],[5,7],[7,8],[4,8],[6,8],
    [8,9],[8,10],[4,10],[7,10],
    [10,11],[1,11],[9,11],[10,12],[9,12],[11,12],
    [0,13],[11,13],[3,13],[14,13],
    [4,14],[10,14],[11,14],[13,14],
    [9,15],[10,15],[12,15],
    [5,16],[2,16],[7,16],[15,16],
    [15,17],[14,17],[12,17],[4,17],
    [15,18],[12,18],[11,18],
    [15,19],[11,19],[1,19],
    [19,20],[0,20],[2,20],[14,20],
    [15,21],[19,21],[11,21],[5,21],
    [5,22],[2,22],[0,22],[11,22],[20,22],
    [11,23],[15,23],[20,23],
    [0,24],[2,24],[5,24],[23,24],[20,24],
    [23,25],[21,25],[14,25],[9,25],
    [23,26],[11,26],[22,26],[25,26],[24,26]
  ];

  const colors=[
    '#a78bfa','#818cf8','#60a5fa','#38bdf8','#22d3ee','#2dd4bf','#34d399','#4ade80',
    '#a3e635','#facc15','#fb923c','#f97316','#f472b6','#e879f9','#c084fc','#ff6b6b',
    '#ffa07a','#87ceeb','#dda0dd','#98fb98','#ff9ff3','#54a0ff','#5f27cd','#01a3a4',
    '#f368e0','#ff6348','#7bed9f'
  ];

  // Draw edges
  ctx.lineWidth=0.8;
  edges.forEach(([a,b])=>{
    const na=nodes[a],nb=nodes[b];
    ctx.strokeStyle='rgba(255,255,255,0.08)';
    ctx.beginPath();ctx.moveTo(na.x,na.y);ctx.lineTo(nb.x,nb.y);ctx.stroke();
  });

  // Draw nodes
  nodes.forEach((n,i)=>{
    const r=18;
    // Glow
    const grd=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,r*2);
    grd.addColorStop(0,colors[i]+'44');
    grd.addColorStop(1,'transparent');
    ctx.fillStyle=grd;
    ctx.beginPath();ctx.arc(n.x,n.y,r*2,0,Math.PI*2);ctx.fill();

    // Circle
    ctx.fillStyle=colors[i];
    ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fill();

    // Label
    ctx.fillStyle='#e0e0e8';
    ctx.font='600 9px Inter, sans-serif';
    ctx.textAlign='center';
    const lines=n.label.split('\n');
    lines.forEach((line,li)=>{
      ctx.fillText(line,n.x,n.y+r+12+li*11);
    });
  });
})();
