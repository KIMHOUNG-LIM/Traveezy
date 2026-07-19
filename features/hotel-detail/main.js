/* =========================================================================
   TRAVEEZY — hotel.js
   -------------------------------------------------------------------------
   ONE shared script for both pages (hotel.html + hotel-detail.html).
   Every block below checks that its elements actually exist on the current
   page before running, so it's safe to load this same file everywhere.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) NAVBAR — turns white on scroll + mobile hamburger toggle
   (runs on both pages)
   ------------------------------------------------------------------------- */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.nav-inner').classList.toggle('open');
  });
}

/* -------------------------------------------------------------------------
   2) TOAST HELPER — small popup confirmation message
   (used by both the listing page and the detail page's footer)
   ------------------------------------------------------------------------- */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* -------------------------------------------------------------------------
   3) NEWSLETTER SUBSCRIBE BOX (shared footer, both pages)
   ------------------------------------------------------------------------- */
const subBtn = document.getElementById('subBtn');
if (subBtn) {
  subBtn.addEventListener('click', () => {
    const input = document.getElementById('subEmail');
    const val = input.value.trim();
    if (val && val.includes('@')) {
      showToast('Subscribed! Welcome aboard.');
      input.value = '';
    } else {
      showToast('Please enter a valid email.');
    }
  });
}

/* -------------------------------------------------------------------------
   4) "BOOKING NOW" HERO BUTTON
   On the listing page it just shows a friendly toast. On the detail page
   it's a real link (scrolls to #rooms) so this only wires up the button
   variant, if present.
   ------------------------------------------------------------------------- */
const bookingBtn = document.getElementById('bookingBtn');
if (bookingBtn) {
  bookingBtn.addEventListener('click', () => {
    showToast("Let's find your perfect stay!");
  });
}

/* =========================================================================
   ============   LISTING PAGE ONLY (hotel.html)   ========================
   Everything below is guarded by `if (container)` so it silently does
   nothing on hotel-detail.html.
   ========================================================================= */
const container = document.getElementById('listingContainer');

if (container) {

  /* 5) THE LISTINGS DATA — one entry per hotel card shown on the page. */
  const listings = [
    { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", type: "Villas" },
    { name: "Cute Hotel", location: "Siem Reap, Cambodia", size: "3,600 sq.ft.", beds: 4, baths: 3, rating: 5, oldPrice: 480, price: 390, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop", type: "Hotels" },
    { name: "Harbor Loft", location: "Beverly Hill, CA", size: "2,100 sq.ft.", beds: 2, baths: 2, rating: 4, oldPrice: 390, price: 320, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop", type: "Apartments" },
    { name: "Palm Getaway", location: "Sihanoukville, Cambodia", size: "3,000 sq.ft.", beds: 3, baths: 3, rating: 5, oldPrice: 520, price: 430, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop", type: "Vacation Homes" },
    { name: "Ocean Breeze Villa", location: "Kep, Cambodia", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop", type: "Villas" },
    { name: "Riverside Hotel", location: "Phnom Penh, Cambodia", size: "2,800 sq.ft.", beds: 3, baths: 2, rating: 4, oldPrice: 410, price: 340, img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop", type: "Hotels" }
  ];

  /* 6) BUILDING ONE LISTING CARD — turns one listing object into HTML.
     "View Detail" links every card to hotel-detail.html so the two pages
     of the site are actually connected. */
  function cardHtml(item, idx) {
    const stars = '★'.repeat(item.rating);
    return `
    <div class="listing-card" data-type="${item.type}">
      <div class="listing-thumb" style="background-image:url('${item.img}')">
        <div class="fav-heart" data-idx="${idx}"><i class="fa-solid fa-heart"></i></div>
      </div>
      <div class="listing-body">
        <div class="listing-top">
          <div>
            <div class="listing-name">${item.name}</div>
            <div class="listing-loc"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
          </div>
          <div class="stars">${stars}</div>
        </div>

        <div class="listing-stats">
          <span><i class="fa-solid fa-expand"></i> ${item.size}</span>
          <div class="sep"></div>
          <span><i class="fa-solid fa-bed"></i> ${item.beds} bed</span>
          <div class="sep"></div>
          <span><i class="fa-solid fa-bath"></i> ${item.baths} bath</span>
        </div>

        <div class="listing-bottom">
          <div>
            <span class="price-old">$${item.oldPrice}</span>
            <span class="price-new">$${item.price}<span>/day</span></span>
          </div>
          <a href="hotel-detail.html" class="btn-detail">
            View Detail
            <span class="circle"><i class="fa-solid fa-chevron-right"></i></span>
          </a>
        </div>
      </div>
    </div>`;
  }

  /* 7) DRAWING THE LIST (with filtering + sorting) */
  function render(filterTypes = []) {
    let filtered = filterTypes.length
      ? listings.filter(l => filterTypes.includes(l.type))
      : listings.slice();

    const sortBy = document.getElementById('sortSelect')?.value || 'default';
    if (sortBy === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'high') filtered.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    container.innerHTML = filtered.map((item, i) => cardHtml(item, i)).join('');
    document.getElementById('resultsCount').textContent = filtered.length;
    attachHeartHandlers();
  }

  /* 8) FAVORITE HEART BUTTON */
  function attachHeartHandlers() {
    document.querySelectorAll('.fav-heart').forEach(heart => {
      heart.addEventListener('click', (e) => {
        e.preventDefault();
        heart.classList.toggle('active');
        showToast(heart.classList.contains('active') ? 'Added to favorites' : 'Removed from favorites');
      });
    });
  }

  /* 9) FILTER CHECKBOXES + SORT DROPDOWN */
  document.querySelectorAll('.type-filter').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.type-filter:checked')].map(c => c.value);
      render(checked);
    });
  });
  document.getElementById('sortSelect').addEventListener('change', () => {
    const checked = [...document.querySelectorAll('.type-filter:checked')].map(c => c.value);
    render(checked);
  });

  /* 10) MOBILE "FILTERS" TOGGLE BUTTON */
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  const filterPanel = document.getElementById('filterPanel');
  if (filterToggleBtn && filterPanel) {
    filterToggleBtn.addEventListener('click', () => {
      filterPanel.classList.toggle('open');
    });
  }

  /* 11) FIRST LOAD */
  render();
}

/* =========================================================================
   ==========   HOTEL DETAIL PAGE ONLY (hotel-detail.html)   ==============
   ========================================================================= */
const track = document.getElementById('cardTrack');

if (track) {

  /* -----------------------------------------------------------------------
     12) REUSABLE SLIDER HELPER
     Both the "Choose Your Room" photos and the testimonial cards need the
     exact same behaviour: slide a row of items left/right by clicking an
     arrow, and stay responsive on any screen size. Instead of writing that
     logic twice, we write it ONCE here and reuse it for both sliders below.

     How it works, in plain words:
       - "track"   = the strip of items that actually moves (has display:flex)
       - "wrapper" = the box around it that hides the overflow (the "window")
       - every time we need to move, we MEASURE the real width of one item
         (so it keeps working correctly at any screen size) and move the
         track by that many pixels using CSS transform.
     ------------------------------------------------------------------- */
  function setupSlider({ track, prevBtn, nextBtn, dotsBox, loop = false }) {
    const wrapper = track.parentElement;
    const items = track.children; /* one <div> per photo / review card */
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

    /* builds one small round button per "stop" of the slider (only used
       by the room photos slider — testimonials don't have dots) */
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
      if (idx > maxIndex) idx = maxIndex; /* stay valid after a resize */

      track.style.transform = `translateX(-${idx * getStep()}px)`;

      /* In "loop" mode the buttons are never grayed out/disabled, because
         there's always a "next" card to go to — clicking past the last
         one just wraps back around to the first one again. */
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

    /* Moves one step forward. In loop mode, going past the last card
       just wraps back around to the first card (index 0) — this is what
       makes the testimonials "never end", while still only ever showing
       the same set of review messages you already have. */
    function goNext() {
      const maxIndex = getMaxIndex();
      if (idx < maxIndex) idx++;
      else if (loop) idx = 0;
      update();
    }
    /* Same idea, but backwards: going before the first card wraps
       around to the last card. */
    function goPrev() {
      if (idx > 0) idx--;
      else if (loop) idx = getMaxIndex();
      update();
    }

    if (nextBtn) nextBtn.addEventListener('click', goNext);
    if (prevBtn) prevBtn.addEventListener('click', goPrev);

    /* -----------------------------------------------------------------
       TOUCH SWIPE SUPPORT (this is the "responsive" bit for phones)
       On a touchscreen, people expect to be able to SWIPE a row of
       cards left/right with a finger, not just tap the arrow buttons.
       This is plain vanilla JS — no library needed:
         1) touchstart  → remember where the finger first touched down
         2) touchend    → compare that to where the finger lifted up
         3) if the finger moved far enough sideways (more than 40px),
            treat it exactly like a click on the next/prev button
       ------------------------------------------------------------- */
    let touchStartX = 0;
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchEndX - touchStartX;
      const minSwipe = 40; /* smaller than this = accidental wobble, ignore it */

      if (swipeDistance < -minSwipe) goNext();        /* swiped LEFT  → next */
      else if (swipeDistance > minSwipe) goPrev();     /* swiped RIGHT → prev */
    });

    /* recalculate everything on window resize (e.g. rotating a phone or
       resizing the browser) so the slider never gets stuck off-screen */
    window.addEventListener('resize', () => { buildDots(); update(); });

    buildDots();
    update();
  }

  /* 13) TESTIMONIAL CARD SLIDER (no dots, just the 2 arrow buttons).
     "loop: true" makes it cycle endlessly through the same reviews:
     Esther → Gary → Julia → Marcus → back to Esther → ... forever. */
  setupSlider({
    track: track,
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    loop: true
  });

  /* 14) "CHOOSE YOUR ROOM" PHOTO SLIDER (arrows + auto-generated dots).
     "loop: true" makes this cycle endlessly too — clicking "next" past
     the last photo just wraps back around to the first one, so it never
     "runs out", it only ever shows the photos you already have. */
  const roomTrack = document.getElementById('roomTrack');
  if (roomTrack) {
    setupSlider({
      track: roomTrack,
      prevBtn: document.getElementById('roomPrevBtn'),
      nextBtn: document.getElementById('roomNextBtn'),
      dotsBox: document.getElementById('roomDots'),
      loop: true
    });
  }

  /* 15) FADE-IN ANIMATION as sections scroll into view */
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
}

/* =========================================================================
   END OF FILE
   ========================================================================= */
