/**
 * app.js — 凪タロット アプリケーション
 *
 * 拡張ガイド:
 *   - 小アルカナを追加: cards.js の DECK_FULL に追加するだけで自動反映
 *   - 逆位置を無効化したい場合: ENABLE_REVERSED = false に変更
 */

/* ============================================================
   CONFIG
   ============================================================ */
const CONFIG = {
  ENABLE_REVERSED: true,    // 正位置・逆位置 50% ずつランダム
  IMAGE_PATH: "",     // カード画像フォルダ
  CARD_BACK_ALT: "カードの裏面"
};

/* ============================================================
   STATE
   ============================================================ */
let isDrawing = false;

/* ============================================================
   STARS CANVAS
   ============================================================ */
(function initStars() {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    const count = Math.floor((canvas.width * canvas.height) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  raf = requestAnimationFrame(draw);
})();

/* ============================================================
   WAVE RIPPLE CANVAS
   ============================================================ */
(function initRipple() {
  const canvas = document.getElementById("ripple-canvas");
  const ctx = canvas.getContext("2d");
  let ripples = [];
  let raf = null;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function addRipple(x, y) {
    for (let i = 0; i < 3; i++) {
      ripples.push({
        x, y,
        r: 0,
        maxR: Math.max(window.innerWidth, window.innerHeight) * 0.7,
        alpha: 0.18 - i * 0.04,
        speed: 4 + i * 2,
        delay: i * 12
      });
    }
    canvas.classList.add("active");
    if (!raf) raf = requestAnimationFrame(animateRipple);
  }

  function animateRipple() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    for (const rp of ripples) {
      if (rp.delay > 0) { rp.delay--; continue; }
      rp.r += rp.speed;
      rp.alpha *= 0.975;

      if (rp.alpha > 0.003 && rp.r < rp.maxR) {
        alive = true;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 168, 75, ${rp.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    ripples = ripples.filter(rp => rp.alpha > 0.003 && rp.r < rp.maxR);

    if (alive) {
      raf = requestAnimationFrame(animateRipple);
    } else {
      raf = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.classList.remove("active");
    }
  }

  // グローバルに公開
  window.triggerRipple = addRipple;
})();

/* ============================================================
   CARD DRAW
   ============================================================ */
function pickCard() {
  const deck = DECK_FULL;
  const card = deck[Math.floor(Math.random() * deck.length)];

  // 将来: ENABLE_REVERSED が true のとき、50% で逆位置を選択
  const isReversed = CONFIG.ENABLE_REVERSED && Math.random() < 0.5;

  return { card, isReversed };
}

function showCard({ card, isReversed }) {
  const img = document.getElementById("card-img");
  img.src = CONFIG.IMAGE_PATH + card.image;
  img.alt = card.nameJa + (isReversed ? "（逆位置）" : "（正位置）");

  // 逆位置はカード画像を180度回転（別画像は使用しない）
  img.style.transform = isReversed ? "rotate(180deg)" : "";

  // ローマ数字は大アルカナのみ存在するため、あれば表示
  const numberEl = document.getElementById("card-number");
  numberEl.textContent = card.roman ? `Major Arcana ${card.roman}` : "";

  document.getElementById("card-name-ja").textContent = card.nameJa;
  document.getElementById("card-name-en").textContent = card.nameEn;

  const orientEl = document.getElementById("card-orientation");
  orientEl.textContent = isReversed ? "逆位置" : "正位置";
  orientEl.dataset.reversed = isReversed ? "true" : "false";

  // 新データ構造: uprightMessage / reversedMessage を直接参照
  const msg = isReversed ? card.reversedMessage : card.uprightMessage;
  document.getElementById("card-message").textContent = msg;
}

/* ============================================================
   BUTTON RIPPLE (UI feedback)
   ============================================================ */
function addButtonRipple(btn, e) {
  const rect = btn.getBoundingClientRect();
  const x = (e.clientX || rect.left + rect.width / 2) - rect.left;
  const y = (e.clientY || rect.top + rect.height / 2) - rect.top;
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.cssText = `
    width: ${btn.offsetWidth * 2}px;
    height: ${btn.offsetWidth * 2}px;
    left: ${x - btn.offsetWidth}px;
    top: ${y - btn.offsetWidth}px;
  `;
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

/* ============================================================
   MAIN INTERACTION
   ============================================================ */
document.getElementById("draw-btn").addEventListener("click", function(e) {
  if (isDrawing) return;
  isDrawing = true;

  const btn = this;
  addButtonRipple(btn, e);

  // 波紋エフェクト（画面中央から）
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  window.triggerRipple(cx, cy);

  // カードを選択
  const drawn = pickCard();

  // カードを裏面に戻す
  const flipEl = document.getElementById("card-flip");
  const infoEl = document.getElementById("card-info");
  flipEl.classList.remove("flipped");
  flipEl.removeAttribute("aria-hidden");
  infoEl.classList.remove("visible");

  // 少し待ってからフリップ
  setTimeout(() => {
    showCard(drawn);
    flipEl.classList.add("flipped");

    // カード情報を表示（フリップ後にフェードイン）
    setTimeout(() => {
      infoEl.classList.add("visible");
      isDrawing = false;
    }, 700);
  }, 300);
});
