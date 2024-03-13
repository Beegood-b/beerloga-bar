export function setupLanguageSwitcher() {
  const langSelect = document.getElementById("langSelect");
  const allLangs = ["lv", "eng", "ru"];
  const currentPathName = window.location.pathname;
  let currentLang =
    localStorage.getItem("language") || checkBrowserLang() || "lv";
  let currentTexts = {};

  const mainPage = {
    "nav-home": {
      en: "home",
      ru: "главная",
      lv: "sākums",
    },
    "nav-about": {
      en: "about",
      ru: "о нас",
      lv: "par mums",
    },
    "nav-menu": {
      en: "menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "nav-gallery": {
      en: "GALLERY",
      ru: "галерея",
      lv: "galerija",
    },
    "nav-contact": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
  };

  const aboutPage = {
    "nav-home": {
      en: "home",
      ru: "главная",
      lv: "sākums",
    },
    "nav-about": {
      en: "about",
      ru: "о нас",
      lv: "par mums",
    },
    "nav-menu": {
      en: "menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "nav-gallery": {
      en: "gallery",
      ru: "галерея",
      lv: "galerija",
    },
    "nav-contact": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
    "about-heading": {
      en: "about us",
      ru: "о нас",
      lv: "par mums",
    },
    "about-text": {
      en: `Satisfy your hunger at BEERloga
We've got delicious burgers paired with a fantastic selection of beers
Come on in and ​treat yourself to a delicious meal that hits the spot
Hungry for a ​great time?
BEERloga Bar is the place to be!`,
      ru: `Утолите свой голод в BEERloga
У нас вы найдете вкусные бургеры в сочетании с отличным выбором пива
Загляните и насладитесь великолепным приемом пищи, который поднимет настроение
Хотите отлично провести время?
BEERloga Bar - самое подходящее место!
    `,
      lv: `Piesātiniet savu izsalkumu BEERloga
Piedāvājam garšīgus burgerus un fantastisku alus izvēli
Nāciet iekšā un ērti izbaudiet gardu maltīti,kas pilnībā apmierinās jūsu vēlmes
Izsalkuši labu laiku?
BEERloga Bar ir vieta, kur jābūt!`,
    },
  };

  const menuPage = {
    "nav-home": {
      en: "home",
      ru: "главная",
      lv: "sākums",
    },
    "nav-about": {
      en: "about",
      ru: "о нас",
      lv: "par mums",
    },
    "nav-menu": {
      en: "menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "nav-gallery": {
      en: "gallery",
      ru: "галерея",
      lv: "galerija",
    },
    "nav-contact": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
    "menu-heading": {
      en: "bar menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "menu-text": {
      en: `"Order your happiness here"`,
      ru: `"Закажи свою улыбку здесь"`,
      lv: `"Piegādā sev prieku un izbaudi to šeit"`,
    },
  };

  const galleryPage = {
    "nav-home": {
      en: "home",
      ru: "главная",
      lv: "sākums",
    },
    "nav-about": {
      en: "about",
      ru: "о нас",
      lv: "par mums",
    },
    "nav-menu": {
      en: "menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "nav-gallery": {
      en: "gallery",
      ru: "галерея",
      lv: "galerija",
    },
    "nav-contact": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
    "gallery-heading": {
      en: "gallery",
      ru: "галерея",
      lv: "galerija",
    },
    "gallery-text": {
      en: `"Small Glimpse into BEERloga"`,
      ru: `"Небольшой взгляд в BEERloga"`,
      lv: `"Neliels ieskats BEERloga"`,
    },
  };

  const contactPage = {
    "nav-home": {
      en: "home",
      ru: "главная",
      lv: "sākums",
    },
    "nav-about": {
      en: "about",
      ru: "о нас",
      lv: "par mums",
    },
    "nav-menu": {
      en: "menu",
      ru: "меню",
      lv: "ēdienkarte",
    },
    "nav-gallery": {
      en: "gallery",
      ru: "галерея",
      lv: "galerija",
    },
    "nav-contact": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
    "contact-heading": {
      en: "contact",
      ru: "контакты",
      lv: "kontakti",
    },
    "contact-directions": {
      en: "get directions",
      ru: "как добраться",
      lv: "kā nonākt",
    },
    "contact-get-in-touch": {
      en: "get in touch",
      ru: "cвязаться с нами",
      lv: "sazināties ar mums",
    },
    "contact-working-hours": {
      en: "working hours",
      ru: "рабочие часы",
      lv: "darba laiks",
    },
    "contact-follow": {
      en: "follow us",
      ru: "подписаться",
      lv: "sekot mums",
    },
  };

  // checking the path of the website page
  function checkPagePathName() {
    switch (currentPathName) {
      case "/index.html":
        currentTexts = mainPage;
        break;
      case "/about.html":
        currentTexts = aboutPage;
        break;
      case "/menu.html":
        currentTexts = menuPage;
        break;
      case "/gallery.html":
        currentTexts = galleryPage;
        break;
      case "/contact.html":
        currentTexts = contactPage;
        break;

      default:
        currentTexts = mainPage;
        break;
    }
  }
  checkPagePathName();

  function updateSelectedOption() {
    const selectedElement = langSelect.querySelector('.selected');
    selectedElement.textContent = ''; // clear any previous content

    const img = document.createElement('img');
    img.src = `./src/img/${currentLang}.png`;
    img.width = 16;
    img.alt = `${currentLang} flag`;
    selectedElement.appendChild(img);
  }

  langSelect.addEventListener("click", (event) => {
    const clickedElement = event.target;

    // if clicked element is an image, get its parent (LI element)
    const listItem = clickedElement.tagName === "IMG" ? clickedElement.parentNode : clickedElement;

    if (listItem.tagName === "LI") {
      const newLang = listItem.getAttribute("data-value");

      if (newLang !== currentLang) {
        currentLang = newLang;
        localStorage.setItem("language", currentLang);
        changeLang();
        updateSelectedOption(); // update the selected language display after changing language
      }
    }
  });

  updateSelectedOption();

  // changing lang of the texts
  function changeLang() {
    for (const key in currentTexts) {
      let elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = currentTexts[key][currentLang];
      }
    }
  }
  changeLang();

  // checking lang of the browser
  function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some((elem) => {
      return elem === navLang;
    });
    if (result) {
      return navLang;
    }
  }
}