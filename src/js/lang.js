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
      lv: "BEERloga • Sākums",
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
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const aboutPage = {
    "head-title": {
      en: "BEERloga • About Us",
      ru: "BEERloga • О Нас",
      lv: "BEERloga • Par Mums",
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
BEERloga Bar - самое подходящее место!`,
      lv: `Piesātiniet savu izsalkumu BEERloga
Piedāvājam garšīgus burgerus un fantastisku alus izvēli
Nāciet iekšā un ērti izbaudiet gardu maltīti,kas pilnībā apmierinās jūsu vēlmes
Izsalkuši labu laiku?
BEERloga Bar ir vieta, kur jābūt!`,
    },
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const menuPage = {
    "head-title": {
      en: "BEERloga • Menu",
      ru: "BEERloga • Меню",
      lv: "BEERloga • Ēdienkarte",
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
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const galleryPage = {
    "head-title": {
      en: "BEERloga • Gallery",
      ru: "BEERloga • Галерея",
      lv: "BEERloga • Galerija",
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
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const contactPage = {
    "head-title": {
      en: "BEERloga • Contact",
      ru: "BEERloga • Контакты",
      lv: "BEERloga • Kontakti",
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
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const cookiePage = {
    "head-title": {
      en: "BEERloga • Cookies policy",
      ru: "BEERloga • Политика файлов куки",
      lv: "BEERloga • Sīkdatņu politika",
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
    "privacy-heading": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "footer-contact": {
      en: "Contact",
      ru: "Контакты",
      lv: "Kontakti",
    },
    "footer-cookies": {
      en: "Cookie policy",
      ru: "Политика куки",
      lv: "Sīkdatņu politika",
    },
    "cookies-description": {
      en: 'We inform you that the BEERLOGA.LV website uses cookies to enhance the user experience, ensuring its operation and functionality, among other purposes. Click "OK" to confirm your consent to this use.',
      ru: 'Мы информируем вас, что на сайте BEERLOGA.LV используются файлы куки (на англ. "cookies"), для улучшения пользовательского опыта, обеспечения его работы и функциональности, а также для других целей. Нажмите «OK», чтобы подтвердить свое согласие на это использование.',
      lv: 'Informējam, ka BEERLOGA.LV tīmekļa vietnē tiekizmantotas sīkdatnes (angļu val. "cookies"), lai uzlabotu lietošanas pieredzi, nodrošinot tās darbību un funcionalitātiu.tml. mērķiem. Noklikšķiniet uz "OK" lai apstiprinātu šo izmantošanu.',
    },
  };

  const privacyTitle = {
    en: "Cookie policy",
    ru: "Политика куки",
    lv: "Sīkdatņu politika",
  };

  const privacyDescription = {
    en: `<p><strong>1. Introduction</strong></p>
<p>
  Our website uses cookies to enhance user experience and analyze visit data. This policy explains what cookies we use, why they are used, and how you can manage your cookie settings.
</p>

<p><strong>2. What are cookies?</strong></p>
<p>
  Cookies are small text files that your browser saves on your device when you visit our website. They help us recognize your device and provide a more personalized experience.
</p>

<p><strong>3. Types of cookies we use</strong></p>
<p>We use the following cookies:</p>
<ul>
  <li>
    <strong>Analytical cookies:</strong> We use Google Analytics to analyze how visitors use our website. These cookies help us understand how many people visit our site, which pages are visited most often, and how long visitors spend on our site.
  </li>
</ul>

<p><strong>4. How do we use the information?</strong></p>
<p>
  The information we obtain through Google Analytics is used to:
</p>
<ul>
  <li>Improve the performance and user experience of our website</li>
  <li>Analyze visitor behavior and preferences</li>
</ul>

<p><strong>5. Managing cookies</strong></p>
<p>
  You can control which cookies are used on your device by changing your browser settings. Most browsers allow you to:
</p>
<ul>
  <li>Choose to reject cookies</li>
  <li>Delete existing cookies</li>
  <li>Receive alerts before accepting cookies</li>
</ul>
<p>
  Please note that if you do not accept cookies, some functionalities of our website may not work properly.
</p>

<p><strong>6. Your consent</strong></p>
<p>
  By visiting our website, you agree that we use cookies in accordance with this policy. If you do not wish to consent, please disable the use of cookies in your browser.
</p>

<p><strong>7. Changes to the policy</strong></p>
<p>
  We reserve the right to change this cookie policy. Any changes will be published on this page with an indication of the change date.
</p>

<p><strong>8. Contact</strong></p>
<p>
  If you have any questions about this cookie policy, please contact us using the contact information on our website.
</p>
`,
    ru: `<p><strong>1. Введение</strong></p>
<p>
  Наш сайт использует файлы cookie для улучшения пользовательского опыта и анализа данных о посещениях. Эта политика объясняет, какие файлы cookie мы используем, почему они используются и как вы можете управлять настройками cookie.
</p>

<p><strong>2. Что такое файлы cookie?</strong></p>
<p>
  Файлы cookie — это небольшие текстовые файлы, которые ваш браузер сохраняет на вашем устройстве, когда вы посещаете наш сайт. Они помогают нам распознавать ваше устройство и предоставлять более персонализированный опыт.
</p>

<p><strong>3. Типы файлов cookie, которые мы используем</strong></p>
<p>Мы используем следующие файлы cookie:</p>
<ul>
  <li>
    <strong>Аналитические файлы cookie:</strong> Мы используем Google Analytics для анализа того, как посетители используют наш сайт. Эти файлы cookie помогают нам понять, сколько людей посещает наш сайт, какие страницы посещаются чаще всего и сколько времени посетители проводят на нашем сайте.
  </li>
</ul>

<p><strong>4. Как мы используем информацию?</strong></p>
<p>
  Информация, полученная с помощью Google Analytics, используется для:
</p>
<ul>
  <li>Улучшения работы и пользовательского опыта нашего сайта</li>
  <li>Анализа поведения и предпочтений посетителей</li>
</ul>

<p><strong>5. Управление файлами cookie</strong></p>
<p>
  Вы можете контролировать, какие файлы cookie используются на вашем устройстве, изменяя настройки браузера. Большинство браузеров позволяют вам:
</p>
<ul>
  <li>Выбирать отказ от файлов cookie</li>
  <li>Удалять существующие файлы cookie</li>
  <li>Получать предупреждения перед принятием файлов cookie</li>
</ul>
<p>
  Пожалуйста, обратите внимание, что если вы не принимаете файлы cookie, некоторые функции нашего сайта могут работать неправильно.
</p>

<p><strong>6. Ваше согласие</strong></p>
<p>
  Посещая наш сайт, вы соглашаетесь с тем, что мы используем файлы cookie в соответствии с этой политикой. Если вы не хотите соглашаться, пожалуйста, отключите использование файлов cookie в вашем браузере.
</p>

<p><strong>7. Изменения в политике</strong></p>
<p>
  Мы оставляем за собой право изменять эту политику файлов cookie. Все изменения будут опубликованы на этой странице с указанием даты изменения.
</p>

<p><strong>8. Контакт</strong></p>
<p>
  Если у вас есть вопросы относительно этой политики файлов cookie, пожалуйста, свяжитесь с нами, используя контактную информацию на нашем сайте.
</p>`,
    lv: `<p><strong>1. Ievads</strong></p>
<p>
  Mūsu vietne izmanto sīkdatnes, lai uzlabotu lietotāju pieredzi
  un analizētu apmeklējumu datus. Šī politika izskaidro, kādas
  sīkdatnes mēs izmantojam, kāpēc tās tiek izmantotas un kā jūs
  varat pārvaldīt savu sīkdatņu iestatījumu.
</p>

<p><strong>2. Kas ir sīkdatnes?</strong></p>
<p>
  Sīkdatnes ir mazas teksta datnes, ko jūsu pārlūkprogramma
  saglabā jūsu ierīcē, kad apmeklējat mūsu vietni. Tās palīdz mums
  atpazīt jūsu ierīci un sniegt personalizētāku pieredzi.
</p>

<p><strong>3. Sīkdatņu veidi, ko izmantojam</strong></p>
<p>Mēs izmantojam šādas sīkdatnes:</p>
<ul>
  <li>
    <strong>Analītiskās sīkdatnes:</strong> Mēs izmantojam Google
    Analytics, lai analizētu, kā apmeklētāji izmanto mūsu vietni.
    Šīs sīkdatnes palīdz mums saprast, cik daudz cilvēku apmeklē
    mūsu vietni, kādas lapas tiek apmeklētas visbiežāk un cik ilgi
    apmeklētāji pavada mūsu vietnē.
  </li>
</ul>

<p><strong>4. Kā mēs izmantojam informāciju?</strong></p>
<p>
  Informācija, ko mēs iegūstam, izmantojot Google Analytics, tiek
  izmantota, lai:
</p>
<ul>
  <li>Uzlabotu mūsu vietnes darbību un lietošanas pieredzi</li>
  <li>Analizētu apmeklētāju uzvedību un izvēles</li>
</ul>

<p><strong>5. Sīkdatņu pārvaldība</strong></p>
<p>
  Jūs varat kontrolēt, kādas sīkdatnes tiek izmantotas jūsu
  ierīcē, mainot pārlūkprogrammas iestatījumus. Vairums
  pārlūkprogrammu ļauj jums:
</p>
<ul>
  <li>Izvēlēties nepieņemt sīkdatnes</li>
  <li>Izdzēst esošās sīkdatnes</li>
  <li>Saņemt brīdinājumus pirms sīkdatņu pieņemšanas</li>
</ul>
<p>
  Lūdzu, ņemiet vērā, ka, ja jūs nepieņemat sīkdatnes, daži mūsu
  vietnes funkcionalitātes elementi var darboties nepareizi.
</p>

<p><strong>6. Jūsu piekrišana</strong></p>
<p>
  Apmeklējot mūsu vietni, jūs piekrītat, ka mēs izmantojam
  sīkdatnes saskaņā ar šo politiku. Ja jūs nevēlaties piekrist,
  lūdzu, izslēdziet sīkdatņu lietošanu savā pārlūkprogrammā.
</p>

<p><strong>7. Izmaiņas politikā</strong></p>
<p>
  Mēs paturam tiesības mainīt šo sīkdatņu politiku. Visas izmaiņas
  tiks publicētas šajā lapā ar norādi par izmaiņu datumu.
</p>

<p><strong>8. Saziņa</strong></p>
<p>
  Ja jums ir jautājumi par šo sīkdatņu politiku, lūdzu,
  sazinieties ar mums, izmantojot mūsu kontaktinformāciju mūsu
  vietnē.
</p>`,
  };

  const privacyTitleLang = document.querySelector(".privacy__heading");
  const privacyDescLang = document.querySelector(".privacy__description");
  if (location.pathname === "/privacy.html") {
    privacyTitleLang.innerHTML = privacyTitle[currentLang];
    privacyDescLang.innerHTML = privacyDescription[currentLang];
  }

  langSelect.querySelectorAll(".menu li").forEach((item) => {
    item.addEventListener("click", function () {
      if (location.pathname === "/privacy.html") {
        location.reload();
      }
    });
  });

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
      case "/privacy.html":
        currentTexts = cookiePage;
        break;

      default:
        currentTexts = cookiePage;
        break;
    }
  }
  checkPagePathName();

  function updateSelectedOption() {
    const selectedElement = langSelect.querySelector(".selected");
    // update text content with lang code
    selectedElement.textContent = currentLang.toUpperCase();
  }

  langSelect.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const listItem =
      clickedElement.tagName === "LI"
        ? clickedElement
        : clickedElement.parentNode;

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
