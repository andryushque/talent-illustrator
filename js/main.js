$(document).ready(function () {
  /*=== Intro Projects Slider ===*/
  var hotelSwiper = new Swiper(".intro-slider", {
    loop: true,
    speed: 600,

    navigation: {
      nextEl: ".intro__button--next",
      prevEl: ".intro__button--prev",
    },

    keyboard: {
      enabled: true,
    },
  });
});
