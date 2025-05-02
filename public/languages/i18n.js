
const translations = {
  "zh-tw": {
    "homepage.title": "星宇假期旅遊首頁",
    "homepage.subtitle": "精選行程，等你探索～",
    "product.1.title": "美加東熱鬧行程",
    "product.1.desc": "五日團、七日團行程自由搭配，含稅含住宿",
    "product.2.title": "夏威夷豪華郵輪",
    "product.2.desc": "登船享受假期，頂級設施和樂隊表演",
    "footer.contact": "聯絡方式｜微信：StarLuxNY｜IG：@starluxtravelagency｜電話：+1-646-666-7914｜Email：info@starsluxtravel.com"
  },
  "zh-cn": {
    "homepage.title": "星宇假期旅游首页",
    "homepage.subtitle": "精选行程，等你探索～",
    "product.1.title": "美加东热闹行程",
    "product.1.desc": "五日团、七日团行程自由搭配，含税含住宿",
    "product.2.title": "夏威夷豪华邮轮",
    "product.2.desc": "登船享受假期，顶级设施和乐队表演",
    "footer.contact": "联系方式｜微信：StarLuxNY｜IG：@starluxtravelagency｜电话：+1-646-666-7914｜Email：info@starsluxtravel.com"
  },
  "en": {
    "homepage.title": "StarLux Travel Homepage",
    "homepage.subtitle": "Explore our featured tours today!",
    "product.1.title": "East Coast USA & Canada Tour",
    "product.1.desc": "5- or 7-day itineraries with tax & hotel included",
    "product.2.title": "Hawaii Luxury Cruise",
    "product.2.desc": "Board and relax with top facilities and shows",
    "footer.contact": "Contact｜WeChat: StarLuxNY｜IG: @starluxtravelagency｜Phone: +1-646-666-7914｜Email: info@starsluxtravel.com"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

document.getElementById("language-select").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("selectedLang", lang);
  applyTranslations(lang);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "zh-tw";
  document.getElementById("language-select").value = savedLang;
  applyTranslations(savedLang);
});
