import { swiper1, swiper2 } from './swipers.js'

// burger menu
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  document.querySelector(".nav").classList.toggle("open");
});

// preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
  }, 500);
});

//mouse effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('cursor');
  const height = cursor.offsetHeight;
  const width = cursor.offsetWidth;

  if (window.innerWidth > 992) {
    setTimeout(() => {
      cursor.style.left = `${e.clientX - width / 2}px`;
      cursor.style.top = `${e.clientY - height / 2}px`;
    }, 100);
  }
});

document.addEventListener('click', () => {
  const cursor = document.getElementById('cursor');

  if (window.innerWidth > 992) {
    cursor.style.transform = 'scale(.8)';
  }
});

document.getElementById('cursor').addEventListener('transitionend', () => {
  const cursor = document.getElementById('cursor');

  if (window.innerWidth > 992) {
    cursor.style.transform = 'scale(1)';
  }
});






