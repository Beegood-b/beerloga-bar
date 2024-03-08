import { swiper1, swiper2 } from './swipers.js'

// burger menu
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  document.querySelector(".nav").classList.toggle("open");
});

// preloader
window.addEventListener("load", () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader--hidden');
});





