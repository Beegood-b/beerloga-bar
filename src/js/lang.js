export function setupLanguageSwitcher() {
  const langSelect = document.getElementById("langSelect");
  const allLangs = ["lv", "en", "ru"];
  const currentPathName = window.location.pathname;
  let currentLang =
    localStorage.getItem("language") || "lv" || checkBrowserLang();
  let currentTexts = {};

  const mainPage = {
    "head-title": {
      en: "BEERloga • Home",
      ru: "BEERloga • Главная",
      lv: "BEERloga •  Sākums"
    },
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
    "head-title": {
      en: "BEERloga • About Us",
      ru: "BEERloga • О Нас",
      lv: "BEERloga • Par Mums"
    },
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
    "head-title": {
      en: "BEERloga • Menu",
      ru: "BEERloga • Меню",
      lv: "BEERloga • Ēdienkarte"
    },
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
    "head-title": {
      en: "BEERloga • Gallery",
      ru: "BEERloga • Галерея",
      lv: "BEERloga • Galerija"
    },
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
    "head-title": {
      en: "BEERloga • Contact",
      ru: "BEERloga • Контакты",
      lv: "BEERloga • Kontakti"
    },
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
      case "/index":
        currentTexts = mainPage;
        break;
      case "/about":
        currentTexts = aboutPage;
        break;
      case "/menu":
        currentTexts = menuPage;
        break;
      case "/gallery":
        currentTexts = galleryPage;
        break;
      case "/contact":
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
    // update text content with lang code
    selectedElement.textContent = currentLang.toUpperCase();
  }

  langSelect.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const listItem = clickedElement.tagName === "LI" ? clickedElement : clickedElement.parentNode;

    if (listItem.tagName === "LI") {
      const newLang = listItem.getAttribute("data-value");

      if (newLang !== currentLang && allLangs.includes(newLang)) {
        currentLang = newLang;
        localStorage.setItem("language", currentLang);
        changeLang();
        // update the selected lang display after changing lang
        updateSelectedOption();
      }
    }
  });

  updateSelectedOption();

  // changing lang of the texts
  function changeLang() {
    //change title based on the selected lang
    const headTitle = currentTexts["head-title"][currentLang];
    document.title = headTitle;

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