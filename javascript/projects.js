var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Pause autoplay on hover
document
  .querySelector(".swiper")
  .addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

document
  .querySelector(".swiper")
  .addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });