const heroSwiper = new Swiper('.hero-swiper .swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 1000,           // how fast the slide-in motion happens (ms)
  centeredSlides: false,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true, // Make autoplay scroll to the right
  },

  breakpoints: {
    // When window width is >= 320px (mobile / tablet)
    320: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    // When window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

const exploreSwiper = new Swiper('.explore-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.explore-swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.explore-swiper .swiper-button-next',
    prevEl: '.explore-swiper .swiper-button-prev',
  },
});