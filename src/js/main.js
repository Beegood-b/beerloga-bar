import { swiper1, swiper2 } from "./swipers.js";
import { setupLanguageSwitcher } from "./lang.js";

// burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  nav.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    burger.classList.remove("active");
    document.body.classList.remove("no-scroll");
    nav.classList.remove("open");
  }
});

// preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
  }, 500);
});

// check if the device has touch capability
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

if (!isTouchDevice()) {
  // apply mouse effect only if its not a touchscreen device
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
}

//dropdown menu
const dropdowns = document.querySelectorAll(".dropdown");

//loop through all dropdown elem
dropdowns.forEach((dropdown) => {
  //get inner elem for each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    //add the clicked select styles to the select elem
    select.classList.toggle("select-clicked");
    // add the rotate styles to the caret elem
    caret.classList.toggle("caret-rotate");
    //add the open styles to the menu elem
    menu.classList.toggle("menu-open");
  });

  const arr = Array.from(options);

  //loop through all option elements
  arr.forEach((option) => {
    //add a click event to the option elem
    option.addEventListener("click", () => {
      //change selected inner text to clicked opt inner text
      selected.innerText = option.innerText;
      //add the clicked select styles to the select elem
      select.classList.remove("select-clicked");
      //add the rotate styles to the caret elem
      caret.classList.remove("caret-rotate");
      // add the open styles to the menu elem
      menu.classList.remove("menu-open");
      // remove active class from all option elems
      options.forEach((option) => {
        option.classList.remove("active");
      });

      // add active class to clicked option elem
      option.classList.add("active");
    });
  });
});

// highlight images on the menu page
const burgerMenu = document.querySelector(".burger-menu");
const drinkMenu = document.querySelector(".drink-menu");

if (burgerMenu) {
  // Set initial state
  burgerMenu.classList.add("highlighted");
  drinkMenu.classList.add("dimmed");

  burgerMenu.addEventListener("click", function () {
    // Highlight burger menu and dim drink menu
    this.classList.add("highlighted");
    this.classList.remove("dimmed");
    drinkMenu.classList.remove("highlighted");
    drinkMenu.classList.add("dimmed");
  });
}

if (drinkMenu) {
  drinkMenu.addEventListener("click", function () {
    // Highlight drink menu and dim burger menu
    this.classList.add("highlighted");
    this.classList.remove("dimmed");
    burgerMenu.classList.remove("highlighted");
    burgerMenu.classList.add("dimmed");
  });
}

//radio button close contact page
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(function (radioButton) {
    let lastChecked = null;

    radioButton.addEventListener("click", function () {
      // check if the radio button is already checked
      const isChecked = this.checked;

      // if the radio button is already checked and its not the same as the last checked one, uncheck it
      if (isChecked && this !== lastChecked) {
        lastChecked = this;
      } else {
        this.checked = false;
        lastChecked = null;
      }
    });
  });
});

// icon rotate on click
const labels = document.querySelectorAll(".accordion li label");
labels.forEach((label) => {
  label.addEventListener("click", () => {
    const icon = label.querySelector("i");
    icon.classList.toggle("icon-rotate");
  });
});

// Cookies

const cookieBox = document.querySelector(".cookies"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains Alpha-construction it will be returned and below of this code will not run
  if (document.cookie.includes("alpha-construction")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button was accepted
      if (button.id == "acceptBtn") {
        //set cookies for 1 month.
        document.cookie =
          "cookieBy= alpha-construction; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
//executeCodes after the setTimeout
window.addEventListener("load", () => {
  setTimeout(executeCodes, 3000);
});

setupLanguageSwitcher();
