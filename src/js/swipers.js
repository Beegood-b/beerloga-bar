import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// 1st swip
export const swiper1 = new Swiper(".mySwiper1", {
  zoom: true,
  centeredSlides: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 2nd swip
export const swiper2 = new Swiper(".mySwiper2", {
  zoom: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 122000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
