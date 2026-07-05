const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 1000,           // how fast the slide-in motion happens (ms)
  centeredSlides: false,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true, // Make autoplay scroll to the right
  },

  breakpoints: {
    // When window width is >= 320px (mobile)
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // When window width is >= 768px (tablet)
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // When window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});