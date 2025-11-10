/**
 * Simple i18n helper shared across pages.
 * Provides translation lookup, language persistence, and selector syncing.
 */
const translations = {
  en: {
    "index.meta.title": `Ethical Food Association of Georgia and Armenia`,
    "index.header.title": `Ethical Food Association of Georgia and Armenia`,
    "index.header.tagline": `Nurturing compassionate communities rooted in plant-based, fair trade, organic, and sustainable values.`,
    "index.nav.home": `Home`,
    "index.nav.about": `About`,
    "index.nav.programs": `Programs & Initiatives`,
    "index.nav.events": `Events & Gatherings`,
    "index.nav.restaurants": `Restaurants`,
    "index.nav.restaurantLabel": `Choose a city to view featured restaurants`,
    "common.city.placeholder": `Select a city`,
    "common.city.tbilisi": `Tbilisi`,
    "common.city.kutaisi": `Kutaisi`,
    "common.city.batumi": `Batumi`,
    "common.city.yerevan": `Yerevan`,
    "index.nav.recipes": `Recipes`,
    "index.nav.membership": `Membership`,
    "index.nav.membershipBenefits": `Benefits`,
    "index.nav.membershipJoin": `Join`,
    "index.nav.contact": `Contact`,
    "common.language.label": `Select language`,
    "common.language.english": `English`,
    "common.language.russian": `Русский`,
    "common.language.georgian": `ქართული`,
    "common.language.armenian": `Հայերեն`,
    "index.home.heading": `Welcome`,
    "index.home.body": `Welcome to the Ethical Food Association of Georgia and Armenia. We promote plant-based living alongside fair trade partnerships, organic agriculture, and community-wide sustainability.`,
    "index.about.heading": `About the Association`,
    "index.about.body": `We collaborate with local advocates, fair trade cooperatives, organic farmers, and policymakers to expand access to ethical, plant-centered, and sustainable food systems across the Caucasus region.`,
    "index.programs.heading": `Programs & Initiatives`,
    "index.programs.body": `Our core programs include school outreach, culinary training for restaurants, fair trade market development, farm partnerships, and public education campaigns that highlight the benefits of organic, plant-forward, and sustainable living.`,
    "index.events.heading": `Events & Gatherings`,
    "index.events.body": `Seasonal markets, urban garden tours, film screenings, and volunteer meetups help us build supportive networks and celebrate sustainable food traditions.`,
    "index.restaurants.heading": `Restaurants`,
    "index.restaurants.body": `Explore our trusted network of plant-forward, fair trade, and organic dining partners across the region.`,
    "index.recipes.heading": `Recipes & Nutrition`,
    "index.recipes.body": `We share culturally diverse meal plans, chef-developed recipes, and nutrition tips for every stage of life.`,
    "index.membership.heading": `Membership & Volunteers`,
    "index.membership.benefits.heading": `Benefits`,
    "index.membership.benefits.body": `Our membership program actively promotes policies that benefit vegetarian, vegan, sustainable, and fair trade businesses while equipping every member with advocacy tools, collaborative trainings, and regional impact updates.`,
    "index.membership.benefits.business.heading": `Business Membership`,
    "index.membership.benefits.business.item1": `Quarterly strategy briefings with partner organizations and policy action teams`,
    "index.membership.benefits.business.item2": `Featured advertising across association publications and digital channels`,
    "index.membership.benefits.business.item3": `Sponsored showcases and product demos at association-funded events`,
    "index.membership.benefits.business.item4": `Tailored support to align business campaigns with veg-forward and fair trade policy priorities`,
    "index.membership.benefits.individual.heading": `Individual Membership`,
    "index.membership.benefits.individual.item1": `Exclusive discounts at vegetarian, vegan, sustainable, and fair trade businesses that are part of our network`,
    "index.membership.join.heading": `Join`,
    "index.membership.join.body": `Ready to get involved? Choose the membership path that fits your goals, launch a neighborhood initiative, or connect with our team to start a new chapter.`,
    "index.membership.join.item1": `Select <em>Business Membership</em> to co-create campaigns, shape policy positions, and access promotional partnerships`,
    "index.membership.join.item2": `Select <em>Individual Membership</em> to enjoy discounts at participating member businesses while championing veg-forward, sustainable, and fair trade policies`,
    "index.membership.join.item3": `Partner with mentors to design community programming rooted in veg-forward, sustainable, and fair trade principles as a business member`,
    "index.membership.join.item4": `Coordinate with regional leads for collaborative projects across Georgia and Armenia through business membership cohorts`,
    "index.membership.join.link": `Connect with our team`,
    "index.contact.heading": `Contact & Partnerships`,
    "index.contact.body": `Connect with us to collaborate on community programs, request media interviews, or become a sponsoring partner.`
  },
  ru: {
    "index.meta.title": `Ассоциация этичного питания Грузии и Армении`,
    "index.header.title": `Ассоциация этичного питания Грузии и Армении`,
    "index.header.tagline": `Мы развиваем эмпатичные сообщества, основанные на ценностях растительного питания, честной торговли, органического и устойчивого развития.`,
    "index.nav.home": `Главная`,
    "index.nav.about": `О нас`,
    "index.nav.programs": `Программы и инициативы`,
    "index.nav.events": `События и встречи`,
    "index.nav.restaurants": `Рестораны`,
    "index.nav.restaurantLabel": `Выберите город, чтобы посмотреть рекомендуемые рестораны`,
    "common.city.placeholder": `Выберите город`,
    "common.city.tbilisi": `Тбилиси`,
    "common.city.kutaisi": `Кутаиси`,
    "common.city.batumi": `Батуми`,
    "common.city.yerevan": `Ереван`,
    "index.nav.recipes": `Рецепты`,
    "index.nav.membership": `Членство`,
    "index.nav.membershipBenefits": `Преимущества`,
    "index.nav.membershipJoin": `Вступление`,
    "index.nav.contact": `Контакты`,
    "common.language.label": `Выберите язык`,
    "common.language.english": `Английский`,
    "common.language.russian": `Русский`,
    "common.language.georgian": `ქართული`,
    "common.language.armenian": `Հայերեն`,
    "index.home.heading": `Добро пожаловать`,
    "index.home.body": `Добро пожаловать в Ассоциацию этичного питания Грузии и Армении. Мы продвигаем растительный образ жизни вместе с партнёрствами в сфере честной торговли, органическим земледелием и устойчивым развитием сообществ.`,
    "index.about.heading": `Об ассоциации`,
    "index.about.body": `Мы сотрудничаем с местными активистами, кооперативами честной торговли, органическими фермерами и политиками, чтобы расширить доступ к этичным, растительным и устойчивым продовольственным системам по всему Кавказскому региону.`,
    "index.programs.heading": `Программы и инициативы`,
    "index.programs.body": `Наши ключевые программы включают просветительскую работу в школах, кулинарное обучение для ресторанов, развитие рынков честной торговли, партнёрства с фермами и общественные кампании, подчёркивающие преимущества растительного и устойчивого образа жизни.`,
    "index.events.heading": `События и встречи`,
    "index.events.body": `Сезонные маркеты, туры по городским садам, кинопоказы и встречи волонтёров помогают нам строить поддерживающие сети и праздновать традиции устойчивого питания.`,
    "index.restaurants.heading": `Рестораны`,
    "index.restaurants.body": `Откройте нашу проверенную сеть ресторанов, ориентированных на растительную кухню, честную торговлю и органические продукты по всему региону.`,
    "index.recipes.heading": `Рецепты и питание`,
    "index.recipes.body": `Мы делимся разнообразными планами питания, рецептами от шеф-поваров и советами по питанию для любого этапа жизни.`,
    "index.membership.heading": `Членство и волонтёры`,
    "index.membership.benefits.heading": `Преимущества`,
    "index.membership.benefits.body": `Наша программа членства активно продвигает политики в поддержку вегетарианских, веганских, устойчивых и честных торговых бизнесов, предоставляя каждому участнику инструменты адвокации, совместные обучения и региональные обновления о влиянии.`,
    "index.membership.benefits.business.heading": `Корпоративное членство`,
    "index.membership.benefits.business.item1": `Ежеквартальные стратегические брифинги с партнёрскими организациями и командами по политическим инициативам`,
    "index.membership.benefits.business.item2": `Рекламные размещения во всех публикациях и цифровых каналах ассоциации`,
    "index.membership.benefits.business.item3": `Спонсируемые презентации и продуктовые демонстрации на мероприятиях ассоциации`,
    "index.membership.benefits.business.item4": `Персональная поддержка для согласования бизнес-кампаний с приоритетами вегетарианской и честной торговой политики`,
    "index.membership.benefits.individual.heading": `Индивидуальное членство`,
    "index.membership.benefits.individual.item1": `Эксклюзивные скидки в вегетарианских, веганских, устойчивых и честных торговых бизнесах нашей сети`,
    "index.membership.join.heading": `Вступление`,
    "index.membership.join.body": `Готовы присоединиться? Выберите путь членства, который соответствует вашим целям, запустите инициативу в своём районе или свяжитесь с нашей командой, чтобы открыть новое отделение.`,
    "index.membership.join.item1": `Выберите <em>Корпоративное членство</em>, чтобы совместно создавать кампании, формировать политические позиции и получать доступ к партнёрским возможностям продвижения`,
    "index.membership.join.item2": `Выберите <em>Индивидуальное членство</em>, чтобы пользоваться скидками у партнёрских бизнесов и поддерживать приоритеты растительного, устойчивого и честного торгового развития`,
    "index.membership.join.item3": `Сотрудничайте с наставниками, чтобы разрабатывать общественные программы на принципах растительной кухни, устойчивости и честной торговли в рамках корпоративного членства`,
    "index.membership.join.item4": `Координируйте совместные проекты по всей Грузии и Армении с региональными лидерами в корпоративных когортах`,
    "index.membership.join.link": `Свяжитесь с нашей командой`,
    "index.contact.heading": `Контакты и партнёрства`,
    "index.contact.body": `Свяжитесь с нами, чтобы сотрудничать в общественных программах, запросить интервью для СМИ или стать спонсирующим партнёром.`
  },
  ka: {},
  hy: {}
};

const FALLBACK_LANGUAGE = "en";
const STORAGE_KEY = "efa:preferred-language";
let activeLanguage = null;

function resolveLanguage(requested) {
  if (requested && Object.prototype.hasOwnProperty.call(translations, requested)) {
    return requested;
  }
  return FALLBACK_LANGUAGE;
}

function getTranslation(lang, key) {
  const langData = translations[lang] || {};
  if (Object.prototype.hasOwnProperty.call(langData, key)) {
    return langData[key];
  }
  const fallbackData = translations[FALLBACK_LANGUAGE] || {};
  return fallbackData[key];
}

function updateElementContent(element, value) {
  if (value == null) {
    return;
  }

  const tag = element.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") {
    if (element.hasAttribute("placeholder")) {
      element.setAttribute("placeholder", value);
    } else {
      element.value = value;
    }
    return;
  }

  if (tag === "META") {
    element.setAttribute("content", value);
    return;
  }

  if (/<[a-z][\s\S]*>/i.test(value)) {
    element.innerHTML = value;
  } else {
    element.textContent = value;
  }
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    if (!key) {
      return;
    }
    const translation = getTranslation(lang, key);
    if (translation !== undefined) {
      updateElementContent(element, translation);
    }
  });

  document.documentElement.setAttribute("lang", lang);
}

function syncLanguageSelectors(lang) {
  const selectors = document.querySelectorAll("#language-selector");
  selectors.forEach((selector) => {
    if (selector.value !== lang) {
      selector.value = lang;
    }
  });
}

function setLanguage(lang, { persist = true } = {}) {
  const resolved = resolveLanguage(lang);
  if (resolved === activeLanguage) {
    return;
  }

  activeLanguage = resolved;
  applyTranslations(resolved);
  syncLanguageSelectors(resolved);

  if (persist && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, resolved);
    } catch (_) {
      // ignore storage errors
    }
  }
}

function determineInitialLanguage() {
  if (window.localStorage) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return resolveLanguage(stored);
      }
    } catch (_) {
      // ignore storage errors
    }
  }

  const browserLang = (navigator.language || navigator.userLanguage || "").split("-")[0];
  return resolveLanguage(browserLang);
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = determineInitialLanguage();
  setLanguage(initialLanguage, { persist: false });

  const selectors = document.querySelectorAll("#language-selector");
  selectors.forEach((selector) => {
    selector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  });
});

window.setLanguage = (lang, options) => setLanguage(lang, options);
