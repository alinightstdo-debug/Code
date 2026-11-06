/* =====================================================
   [A] ข้อมูลไพ่ — เพิ่มไพ่ใหม่โดยคัดลอกหนึ่งบล็อกแล้วแก้ข้อความ
   id    = ชื่อสั้นภาษาอังกฤษ (ใช้ใน URL และชื่อไฟล์รูป images/<id>.jpg)
   group = หมวดสำหรับปุ่มกรอง: hope | love | mystic
   grad  = สีพื้นของการ์ดเมื่อยังไม่มีรูป
   tarot = (ไม่บังคับ) path รูปไพ่ทาโรต์ใบจริง เช่น tarot:'images/The fool.png' — ใส่แล้วจะโชว์ในหน้ารายละเอียดและด้านหลังของไพ่พลิกในหน้าเรื่องราว
   img   = (ไม่บังคับ) path รูปการ์ด เช่น img:'images/Fool.png' — ใส่แล้วทุกหน้าจะใช้รูปนี้ ไม่ใส่ = ใช้สีไล่เฉด + ดอกไม้ SVG แทน
   ===================================================== */
const CARDS = [
  { id:'fool', img:'images/Fool.png', tarot:'images/The fool.png', num:'0', en:'The Fool', flower:'ดอกเดซี่', group:'hope',
    grad:'linear-gradient(160deg,#f5c542,#3f8fd2)',
    short:'ความบริสุทธิ์ ก้าวแรกที่ไม่กลัวอะไร',
    keys:['เริ่มต้นใหม่','บริสุทธิ์','กล้าเสี่ยง'],
    card:'การเริ่มต้นครั้งใหม่ ความกล้าที่จะก้าวไปโดยไม่รู้ปลายทาง และความเชื่อใจในชีวิต',
    bloom:'เดซี่คือดอกไม้แห่งความบริสุทธิ์และความหวังใหม่ กลีบขาวเรียบง่ายสื่อถึงหัวใจที่ยังไม่ถูกแต่งแต้ม',
    why:'ทั้งคู่เริ่มจากความเรียบง่าย ไม่ต้องพร้อมทุกอย่างก็เริ่มได้' },
  { id:'magician',img:'images/The Magician.png', tarot:'images/Magician.png',num:'I', en:'The Magician', flower:'ดาวเรือง', group:'hope',
    grad:'linear-gradient(160deg,#f59e1b,#b3430f)',
    short:'พลังแห่งการลงมือทำ',
    keys:['ลงมือทำ','ความตั้งใจ','ทักษะ'],
    card:'พลังที่จะเปลี่ยนความตั้งใจให้เป็นจริง ด้วยทรัพยากรที่มีอยู่ตรงหน้า',
    bloom:'ดาวเรืองสีทองส้มแทนความมั่นใจและความเจริญรุ่งเรือง เป็นดอกไม้ที่ใช้บูชาในพิธีสำคัญ',
    why:'สีทองของดาวเรืองเหมือนพลังที่ถูกจุดขึ้นเมื่อเรากล้าลงมือ' },
  { id:'priestess', img:'images/The High Priestess.png', tarot:'images/High Priestess.png',num:'II', en:'The High Priestess', flower:'มะลิ', group:'mystic',
    grad:'linear-gradient(160deg,#c9ccff,#4a4fb0)',
    short:'ความลับที่เงียบและสัญชาตญาณ',
    keys:['สัญชาตญาณ','ความลับ','ปัญญาภายใน'],
    card:'การฟังเสียงภายใน ความรู้ที่ไม่ต้องอธิบาย และความลับที่ยังไม่ถึงเวลาเปิดเผย',
    bloom:'มะลิบานในยามค่ำและส่งกลิ่นหอมเงียบๆ แทนความบริสุทธิ์และความผูกพันที่ลึกซึ้ง',
    why:'ทั้งสองอย่างทรงพลังโดยไม่ต้องส่งเสียง' },
  { id:'empress', img:'images/Empress.png', tarot:'images/The Empress.png', num:'III', en:'The Empress', flower:'กุหลาบ', group:'love',
    grad:'linear-gradient(160deg,#e8536f,#7a1030)',
    short:'ความรัก ความอุดมสมบูรณ์ และการดูแล',
    keys:['ความอุดมสมบูรณ์','การดูแล','ความรัก'],
    card:'พลังแห่งการเลี้ยงดูและการเติบโต ความงามของธรรมชาติและความอบอุ่นแบบแม่',
    bloom:'กุหลาบเป็นดอกไม้แห่งความรักมาช้านาน กลีบซ้อนสื่อถึงความงามที่ค่อยๆ เผยตัว',
    why:'ทั้งคู่งดงามเพราะได้รับการดูแลอย่างใส่ใจ' },
  { id:'lovers', img:'images/Lover.png', tarot:'images/The Lovers.png', num:'VI', en:'The Lovers', flower:'ลิลลี่', group:'love',
    grad:'linear-gradient(160deg,#f7a1b8,#c2305a)',
    short:'ความรักที่ซื่อสัตย์ และการเลือกจากใจ',
    keys:['ความรัก','การเลือก','ความสัมพันธ์'],
    card:'ความรักที่เกิดจากการเลือกอย่างจริงใจ และการตัดสินใจที่ตรงกับค่านิยมของตัวเอง',
    bloom:'ลิลลี่แทนความบริสุทธิ์ของหัวใจและความรักที่ซื่อตรง มักใช้ในงานมงคลสมรส',
    why:'ทั้งสองพูดถึงความจริงใจที่เลือกแล้วไม่หันหลังกลับ' },
  { id:'star', img:'images/Star.png', tarot:'images/The Star.png', num:'XVII', en:'The Star', flower:'บัวหลวง', group:'hope',
    grad:'linear-gradient(160deg,#5b6cf0,#1a1d5c)',
    short:'ความหวัง การเยียวยา และการเกิดใหม่',
    keys:['ความหวัง','การเยียวยา','แรงบันดาลใจ'],
    card:'ความหวังที่กลับมาหลังช่วงเวลายากลำบาก การเยียวยาใจ และความเชื่อว่าสิ่งดีกำลังมา',
    bloom:'บัวหลวงงอกจากโคลนตมแต่บานสะอาด เป็นสัญลักษณ์ของการเกิดใหม่และปัญญา',
    why:'ทั้งสองบอกว่าแสงสว่างเกิดขึ้นได้ แม้จากที่ที่มืดที่สุด' },
  { id:'death', img:'images/Death.png', tarot:'images/The Death.png', num:'XIII', en:'Death', flower:'เบญจมาศ', group:'mystic',
    grad:'linear-gradient(160deg,#8d8fa0,#23242e)',
    short:'การจบลงเพื่อให้สิ่งใหม่ได้เริ่ม',
    keys:['การเปลี่ยนผ่าน','การปล่อยวาง','การเริ่มรอบใหม่'],
    card:'การสิ้นสุดที่จำเป็น เพื่อเปิดทางให้การเปลี่ยนแปลง ไม่ได้หมายถึงความตายตามตัวอักษร',
    bloom:'เบญจมาศบานในปลายฤดูใบไม้ร่วง ใช้ในพิธีอำลาและแทนการระลึกถึงอย่างสงบ',
    why:'ทั้งคู่เตือนว่าการจบเป็นส่วนหนึ่งของวงจร' },
  { id:'moon', img:'images/The Moon.png', tarot:'images/Moon.png', num:'XVIII', en:'The Moon', flower:'พิกุล', group:'mystic',
    grad:'linear-gradient(160deg,#7a6ff0,#2a2060)',
    short:'ความฝัน ความกลัว และสิ่งที่มองไม่ชัด',
    keys:['ความฝัน','ความกลัว','ภาพลวงตา'],
    card:'โลกของความฝันและจิตใต้สำนึก สิ่งที่ดูไม่ชัดจนกว่าจะผ่านคืนนั้นไปได้',
    bloom:'พิกุลดอกเล็กหอมเย็นและหอมนานแม้แห้ง สื่อถึงความทรงจำที่ติดอยู่กับกลิ่น',
    why:'ทั้งคู่ทำงานกับสิ่งที่ซ่อนอยู่ ในความมืดและในความทรงจำ' },
  { id:'sun', img:'images/The sun.png',tarot:'images/Sun.png', num:'XIX', en:'The Sun', flower:'ทานตะวัน', group:'love',
    grad:'linear-gradient(160deg,#ffd23f,#f08a1c)',
    short:'ความสุข ความสำเร็จ และพลังบวก',
    keys:['ความสุข','ความสำเร็จ','พลังชีวิต'],
    card:'ความสุขแบบเปิดเผย ความสำเร็จที่เห็นชัด และพลังชีวิตที่เต็มเปี่ยม',
    bloom:'ทานตะวันหันหน้าตามดวงอาทิตย์ แทนความภักดี ความสดใส และการมองไปทางแสง',
    why:'ทั้งสองคือความสว่างที่ไม่ต้องอธิบายเพิ่ม' }
];

const $ = s => document.querySelector(s);
const artHTML = (c, cls = '') =>
  `<div class="card-art ${cls}" style="--grad:${c.grad}${c.img ? `;--img:url('${c.img}')` : ''}">
     <span class="art-num font-display">${c.num}</span>
     ${c.img ? '' : '<svg class="art-bloom"><use href="#bloom"/></svg>'}</div>`;
const cardHTML = c =>
  `<div class="col-md-6 col-lg-4" data-group="${c.group}">
     <div class="card h-100 border-0 shadow-sm card-hover">${artHTML(c)}
       <div class="card-body text-center">
         <h5 class="font-display fs-4"><a class="stretched-link text-decoration-none text-reset" href="detail.html?id=${c.id}">${c.en} · ${c.flower}</a></h5>
         <p class="text-muted small mb-0">${c.short}</p>
       </div></div></div>`;

/* [B0] แถบไพ่เลื่อน (หน้าคอลเลกชัน): ด้านหน้า = ภาพไพ่, ด้านหลัง = ความหมาย */
const track = $('#marquee-track');
if (track) {
  const flipHTML = c =>
    `<div class="flip" tabindex="0"><div class="flip-inner">
       <div class="face front">${artHTML(c)}<span class="flip-name font-display">${c.en}<small>${c.flower}</small></span></div>
       <div class="face back">
         <span class="font-display fs-4 text-gold">${c.num}</span>
         <h5 class="font-display">${c.en}</h5>
         <p class="small mb-2">${c.short}</p>
         <div class="d-flex flex-wrap gap-1 justify-content-center">${c.keys.map(k => `<span class="chip">${k}</span>`).join('')}</div>
         <a class="stretched-link flip-more" href="detail.html?id=${c.id}">อ่านต่อ</a>
       </div></div></div>`;
  const one = CARDS.map(flipHTML).join('');
  // ใส่ 2 ชุดเพื่อให้เลื่อนวนต่อเนื่อง (ชุดที่สองซ่อนจากโปรแกรมอ่านหน้าจอ)
  track.innerHTML = one + one.replace(/tabindex="0"/g, 'tabindex="-1" aria-hidden="true"');
  track.querySelectorAll('.flip').forEach(f => {
    f.addEventListener('click', e => { if (!e.target.closest('a')) f.classList.toggle('flipped'); }); // มือถือ: แตะเพื่อพลิก
    f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f.classList.toggle('flipped'); } });
  });
}

/* [B] หน้าคอลเลกชัน: สร้างการ์ด + ปุ่มกรอง */
const grid = $('#card-grid');
if (grid) {
  grid.innerHTML = CARDS.map(cardHTML).join('');
  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    const f = btn.dataset.filter;
    grid.querySelectorAll('[data-group]').forEach(el => el.classList.toggle('d-none', f !== 'all' && el.dataset.group !== f));
  }));
}

/* [C] หน้ารายละเอียด: อ่าน ?id= จาก URL */
const box = $('#detail');
if (box) {
  const id = new URLSearchParams(location.search).get('id');
  const c = CARDS.find(x => x.id === id) || CARDS[0];
  document.title = `${c.en} · ${c.flower} | Arcana Flora`;
  const others = CARDS.filter(x => x.id !== c.id).slice(0, 3);
  box.innerHTML = `
    <section class="page-hero text-white">
      <div class="container">
        <a class="back-link" href="collection.html">← กลับไปคอลเลกชัน</a>
        <div class="row align-items-center g-5 mt-1">
          <div class="col-md-5">${c.tarot
            ? `<div class="detail-pair">${artHTML(c, 'detail-art')}<img class="detail-tarot" src="${c.tarot}" alt="ไพ่ ${c.en} ใบจริง"></div>`
            : artHTML(c, 'detail-art mx-auto')}</div>
          <div class="col-md-7">
            <p class="font-display fs-3 text-gold mb-0">${c.num}</p>
            <h1 class="display-4 font-display">${c.en}</h1>
            <p class="lead hero-sub">คู่กับ${c.flower}</p>
            <div class="d-flex flex-wrap gap-2">${c.keys.map(k => `<span class="chip">${k}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 section-paper">
      <div class="container py-4">
        <div class="row g-4">
          <div class="col-md-6"><div class="meaning h-100"><h3 class="font-display">ความหมายของไพ่</h3><p class="text-muted mb-0">${c.card}</p></div></div>
          <div class="col-md-6"><div class="meaning h-100"><h3 class="font-display">ความหมายของ${c.flower}</h3><p class="text-muted mb-0">${c.bloom}</p></div></div>
          <div class="col-12"><div class="meaning why"><h3 class="font-display">ทำไมถึงจับคู่กัน</h3><p class="mb-0">${c.why}</p></div></div>
        </div>
        <h2 class="font-display text-center mt-5 mb-4">ไพ่ใบอื่น</h2>
        <div class="row g-4 justify-content-center">${others.map(cardHTML).join('')}</div>
      </div>
    </section>`;
}

/* [E] หน้าเรื่องราว: ไพ่ตัวอย่างที่พลิกได้ (ด้านหน้า = ดอกไม้, ด้านหลัง = ไพ่ทาโรต์)
   ใช้งาน: ใส่ <div data-pair="fool"></div> ตรงไหนก็ได้ (ค่าคือ id ของไพ่) */
document.querySelectorAll('[data-pair]').forEach(el => {
  const c = CARDS.find(x => x.id === el.dataset.pair);
  if (!c) return;
  el.className = 'pair';
  el.tabIndex = 0;
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', `พลิกดูไพ่ ${c.en}`);
  const back = c.tarot
    ? `<div class="pair-face pair-back"><img src="${c.tarot}" alt="ไพ่ ${c.en}"></div>`
    : `<div class="pair-face pair-back pair-blank">
         <span class="font-display fs-3 text-gold">${c.num}</span>
         <h5 class="font-display">${c.en}</h5>
         <div class="d-flex flex-wrap gap-1 justify-content-center">${c.keys.map(k => `<span class="chip">${k}</span>`).join('')}</div>
       </div>`;
  el.innerHTML = `<div class="pair-inner">
      <div class="pair-face pair-front">${artHTML(c)}<span class="flip-name font-display">${c.flower}</span></div>
      ${back}</div>`;
  el.addEventListener('click', () => el.classList.toggle('flipped'));            // มือถือ: แตะเพื่อพลิก
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.classList.toggle('flipped'); } });
});

/* =====================================================
   [D] เอฟเฟกต์ตกแต่งทุกหน้า: ดอกไม้ร่วงช้าๆ + ดาวระยิบระยับ + ดาวตกนานๆ ครั้ง
   เปิด/ปิดแต่ละอย่างที่ EFFECTS ด้านล่าง (true = เปิด, false = ปิด)
   ปิดทั้งหมด: ตั้งเป็น false ทั้งสามตัว หรือลบหัวข้อ [D] นี้ทิ้ง
   ===================================================== */
const EFFECTS = {
  bloom:    true,   // ดอกไม้ร่วงลงมาช้าๆ
  stars:    true,   // ดาวกะพริบ + ลอยขึ้นลงเบาๆ
  shooting: true    // ดาวตกพาดผ่านเป็นครั้งคราว
};
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;   // คนที่ปิดแอนิเมชันในระบบจะไม่เห็นเลย
  if (!EFFECTS.bloom && !EFFECTS.stars && !EFFECTS.shooting) return;
  const small = innerWidth < 600;
  const rnd = (a, b) => a + Math.random() * (b - a);
  document.body.insertAdjacentHTML('afterbegin',
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="spark" viewBox="0 0 40 40">' +
    '<path d="M20 0C21.5 13 27 18.5 40 20 27 21.5 21.5 27 20 40 18.5 27 13 21.5 0 20 13 18.5 18.5 13 20 0Z" fill="currentColor"/></symbol></svg>');
  const layer = document.createElement('div');
  layer.className = 'drift';
  layer.setAttribute('aria-hidden', 'true');

  // 1) ดอกไม้ร่วง: จำนวนน้อยลง ช้าลง แกว่งนุ่มๆ และหมุนช้าๆ
  if (EFFECTS.bloom) {
    const colors = ['#d4a24c', '#d9667f'];
    const n = small ? 5 : 9;                                   // จำนวนดอกไม้
    for (let i = 0; i < n; i++) {
      const size = rnd(18, 40);
      const el = document.createElement('span');
      el.className = 'drift-item';
      el.style.cssText = `left:${rnd(0, 100)}%;width:${size}px;height:${size}px;color:${colors[i % 2]};` +
        `animation-duration:${rnd(26, 44)}s;animation-delay:-${rnd(0, 40)}s`;                // ยิ่งเลขมาก ยิ่งร่วงช้า
      el.innerHTML = `<svg style="animation-duration:${rnd(6, 10)}s;animation-delay:-${rnd(0, 8)}s"><use href="#bloom"/></svg>`;
      layer.appendChild(el);
    }
  }

  // 2) ดาวระยิบระยับ: ตั้งอยู่กับที่แล้วกะพริบ ขนาดต่างกันให้ดูมีมิติ
  if (EFFECTS.stars) {
    const colors = ['#d4a24c', '#e8b86a', '#9a8cf0', '#c9a0dc'];
    const n = small ? 12 : 24;                                 // จำนวนดาว
    for (let i = 0; i < n; i++) {
      const size = rnd(8, 24);
      const el = document.createElement('span');
      el.className = 'star';
      el.style.cssText = `left:${rnd(0, 100)}%;top:${rnd(0, 100)}%;width:${size}px;height:${size}px;color:${colors[i % colors.length]};` +
        `animation-duration:${rnd(2.5, 6)}s;animation-delay:-${rnd(0, 6)}s`;                 // ความเร็วการกะพริบ
      el.innerHTML = `<svg style="animation-duration:${rnd(7, 14)}s;animation-delay:-${rnd(0, 10)}s"><use href="#spark"/></svg>`;
      layer.appendChild(el);
    }
  }
  document.body.appendChild(layer);

  // 3) ดาวตก: สุ่มโผล่ทุก 6-14 วินาที (แก้ช่วงเวลาที่ rnd(6000, 14000))
  if (EFFECTS.shooting) {
    const shoot = () => {
      const el = document.createElement('span');
      el.className = 'shooting';
      el.style.cssText = `left:${rnd(30, 100)}%;top:${rnd(0, 40)}%`;
      el.addEventListener('animationend', () => el.remove());
      layer.appendChild(el);
      setTimeout(shoot, rnd(6000, 14000));
    };
    setTimeout(shoot, 2500);
  }
})();
