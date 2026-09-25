// ==========================================================================
// Language Management (EN / JA)
// ==========================================================================
const LANG_KEY = 'teacola_lang';

const translations = {
  en: {
    pageTitle: "teacola",
    pageDesc: "A small collection of personal projects and web experiments by teacola.",
    heroDesc: "A small collection of personal projects and web experiments.",
    projectsHeading: "Projects",
    tabcandleType: "Chrome Extension",
    tabcandleDesc: "Automatically closes unpinned tabs after 4 hours of inactivity. Designed like a quiet candle to keep your browser and memory light.",
    wordformationType: "Web App",
    wordformationDesc: "A lightweight tool that combines two words at random to spark neologisms and creative naming ideas.",
    footerCopy: "© 2026 teacola"
  },
  ja: {
    pageTitle: "teacola",
    pageDesc: "teacola が個人で開発したツールやWebの実験作を置いているポートフォリオです。",
    heroDesc: "個人で作ったツールやWebの実験作を置いている場所です。",
    projectsHeading: "Projects",
    tabcandleType: "Chrome Extension",
    tabcandleDesc: "固定タブ以外の開きっぱなしタブを、4時間（240分）経過後に自動クローズするシンプルなChrome拡張機能です。タブを消えるロウソクに見立てて、メモリを節約します。",
    wordformationType: "Web App",
    wordformationDesc: "言葉を登録して、ランダムに組み合わさる2つの言葉から新しい造語をつくるシンプルなWebツールです。",
    footerCopy: "© 2026 teacola"
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.pageDesc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

function initLanguage() {
  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang && (savedLang === 'en' || savedLang === 'ja')) {
    setLanguage(savedLang);
    return;
  }
  const userLang = (navigator.language || '').toLowerCase();
  setLanguage(userLang.startsWith('ja') ? 'ja' : 'en');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = e.currentTarget.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// ==========================================================================
// Init
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
});
