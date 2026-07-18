/* =================================================================
   main.js — Traveezy Hotel Page Behavior
   -----------------------------------------------------------------
   Linked in hotel-detail.html via: <script src="main.js"></script>
 ================================================================= */

/* 1) REUSABLE SLIDER HELPER
   Both the "Choose Your Room" photos and the testimonial cards need the
   exact same behaviour: slide a row of items left/right by clicking an
   arrow, and stay responsive on any screen size.
   ------------------------------------------------------------------- */
function setupSlider({ track, prevBtn, nextBtn, dotsBox, loop = false }) {
  if (!track) return;

  const wrapper = track.parentElement;
  const items = track.children;
  let idx = 0;

  function getStep() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return items[0].offsetWidth + gap;
  }
  function getVisibleCount() {
    return Math.max(1, Math.floor(wrapper.offsetWidth / getStep()));
  }
  function getMaxIndex() {
    return Math.max(0, items.length - getVisibleCount());
  }

  /* builds one small round button per "stop" of the slider */
  function buildDots() {
    if (!dotsBox) return;
    const maxIndex = getMaxIndex();
    dotsBox.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'room-dot' + (i === idx ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => { idx = i; update(); });
      dotsBox.appendChild(dot);
    }
  }

  function update() {
    const maxIndex = getMaxIndex();
    if (idx > maxIndex) idx = maxIndex;

    track.style.transform = `translateX(-${idx * getStep()}px)`;

    if (loop) {
      if (prevBtn) prevBtn.disabled = false;
      if (nextBtn) nextBtn.disabled = false;
    } else {
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx >= maxIndex;
    }
    if (dotsBox) {
      [...dotsBox.children].forEach((dot, i) => dot.classList.toggle('active', i === idx));
    }
  }

  function goNext() {
    const maxIndex = getMaxIndex();
    if (idx < maxIndex) idx++;
    else if (loop) idx = 0;
    update();
  }
  function goPrev() {
    if (idx > 0) idx--;
    else if (loop) idx = getMaxIndex();
    update();
  }

  if (nextBtn) nextBtn.addEventListener('click', goNext);
  if (prevBtn) prevBtn.addEventListener('click', goPrev);

  /* Touch Swiping support on mobile */
  let touchStartX = 0;
  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;
    const minSwipe = 40;

    if (swipeDistance < -minSwipe) goNext();
    else if (swipeDistance > minSwipe) goPrev();
  });

  window.addEventListener('resize', () => { buildDots(); update(); });

  buildDots();
  update();
}

/* 2) TESTIMONIAL CARD SLIDER (no dots, just arrows, looping) */
const testiTrack = document.getElementById('cardTrack');
if (testiTrack) {
  setupSlider({
    track:   testiTrack,
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    loop:    true
  });
}

/* 3) "CHOOSE YOUR ROOM" PHOTO SLIDER (arrows + auto dots, looping) */
const roomTrack = document.getElementById('roomTrack');
if (roomTrack) {
  setupSlider({
    track:   roomTrack,
    prevBtn: document.getElementById('roomPrevBtn'),
    nextBtn: document.getElementById('roomNextBtn'),
    dotsBox: document.getElementById('roomDots'),
    loop:    true
  });
}

/* 4) FADE-IN ANIMATION as sections scroll into view */
const fadeEls = document.querySelectorAll('.about, .services, .rooms, .testimonials');
fadeEls.forEach(el => {
  el.style.cssText += 'opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;';
});
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
}, { threshold: .08 });
fadeEls.forEach(el => io.observe(el));
