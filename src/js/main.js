import { swiper1, swiper2 } from "./swipers.js";
import { setupLanguageSwitcher } from "./lang.js";

setupLanguageSwitcher();

// burger menu
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  document.querySelector(".nav").classList.toggle("open");
});

// preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
  }, 500);
});

//mouse effect
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("cursor");
  const height = cursor.offsetHeight;
  const width = cursor.offsetWidth;

  if (window.innerWidth > 992) {
    setTimeout(() => {
      cursor.style.left = `${e.clientX - width / 2}px`;
      cursor.style.top = `${e.clientY - height / 2}px`;
    }, 100);
  }
});

document.addEventListener("click", () => {
  const cursor = document.getElementById("cursor");

  if (window.innerWidth > 992) {
    cursor.style.transform = "scale(.8)";
  }
});

document.getElementById("cursor").addEventListener("transitionend", () => {
  const cursor = document.getElementById("cursor");

  if (window.innerWidth > 992) {
    cursor.style.transform = "scale(1)";
  }
});

//radio button close contact page
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(function (radioButton) {
    let lastChecked = null;

    radioButton.addEventListener("click", function () {
      // check if the radio button is already checked
      const isChecked = this.checked;

      // if the radio button is already checked and it's not the same as the last checked one, uncheck it
      if (isChecked && this !== lastChecked) {
        lastChecked = this;
      } else {
        this.checked = false;
        lastChecked = null;
      }
    });
  });
});
