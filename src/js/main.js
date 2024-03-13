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

//dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elem
dropdowns.forEach(dropdown => {
  //get inner elem for each dropdown
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    //add the clicked select styles to the select elem
    select.classList.toggle('select-clicked');
    // add the rotate styles to the caret elem
    caret.classList.toggle('caret-rotate');
    //add the open styles to the menu elem
    menu.classList.toggle('menu-open');
  });

  const arr = Array.from(options)

  //loop through all option elements
  arr.forEach(option => {
    //add a click event to the option elem
    option.addEventListener('click', () => {
      //change selected inner text to clicked opt inner text
      selected.innerText = option.innerText;
      //add the clicked select styles to the select elem
      select.classList.remove('select-clicked');
      //add the rotate styles to the caret elem
      caret.classList.remove('caret-rotate');
      // add the open styles to the menu elem
      menu.classList.remove('menu-open');
      // remove active class from all option elems
      options.forEach(option => {
        option.classList.remove('active');
      });

      // add active class to clicked option elem
      option.classList.add('active');
    });
  });
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

