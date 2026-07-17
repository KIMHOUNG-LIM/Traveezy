/* =================================================================
   main.js — Traveezy Hotel Page Behavior
   -----------------------------------------------------------------
   Linked in hotel-detail.html via: <script src="main.js"></script>
================================================================= */

/* 1. Testimonial card slider
      Slides the review cards left when "next" is clicked,
      right when "prev" is clicked. */
const track   = document.getElementById('cardTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let idx = 0;
const CARD_W = 284; /* 270px card width + 14px gap */

function slide() {
  if (track) {
    track.style.transform = `translateX(-${idx * CARD_W}px)`;
  }
  if (prevBtn) {
    prevBtn.style.opacity = idx === 0 ? '.35' : '1';
  }
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const total = track.querySelectorAll('.rev-card').length;
    if (idx < total - 2) { idx++; slide(); }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (idx > 0) { idx--; slide(); }
  });
}
slide(); // set the initial state when the page loads

/* 2. Fade-in animation as sections scroll into view */
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
