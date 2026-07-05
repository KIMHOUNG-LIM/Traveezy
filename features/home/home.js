const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  speed: 1000,           // how fast the slide-in motion happens (ms)

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});