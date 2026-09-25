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
    tabcandleWidgetText: "Closes idle tabs after 4h (pinned tabs safe)",
    tabcandleLink: "Chrome Web Store ↗",
    wordformationType: "Web App",
    wordformationDesc: "A lightweight tool that combines two words at random to spark neologisms and creative naming ideas.",
    wordformationWidgetHint: "Click to blend another",
    wordformationLink: "Open Web App ↗",
    footerCopy: "© 2026 teacola"
  },
  ja: {
    pageTitle: "teacola",
    pageDesc: "teacola が個人で開発したツールやWebの実験作を置いているポートフォリオです。",
    heroDesc: "個人で作ったツールやWebの実験作を置いている場所です。",
    projectsHeading: "Projects",
    tabcandleType: "Chrome Extension",
    tabcandleDesc: "固定タブ以外の開きっぱなしタブを、4時間（240分）経過後に自動クローズするシンプルなChrome拡張機能です。タブを消えるロウソクに見立てて、メモリを節約します。",
    tabcandleWidgetText: "4時間で自動クローズ（固定タブは保護）",
    tabcandleLink: "Chrome ウェブストア ↗",
    wordformationType: "Web App",
    wordformationDesc: "言葉を登録して、ランダムに組み合わさる2つの言葉から新しい造語をつくるシンプルなWebツールです。",
    wordformationWidgetHint: "クリックで別の組み合わせ",
    wordformationLink: "Webアプリを開く ↗",
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
// Wordformation Minimal Widget
// ==========================================================================
const pairs = [
  { a: 'word', b: 'formation', r: 'wordformation' },
  { a: 'tab', b: 'candle', r: 'tabcandle' },
  { a: 'tea', b: 'cola', r: 'teacola' },
  { a: 'light', b: 'craft', r: 'lightcraft' },
  { a: 'idea', b: 'flow', r: 'ideaflow' }
];

let pairIndex = 0;
const slotA = document.getElementById('slot-a');
const slotB = document.getElementById('slot-b');
const slotR = document.getElementById('slot-r');
const wordWidget = document.getElementById('word-widget');

function rotateWords() {
  if (!slotA || !slotB || !slotR) return;
  pairIndex = (pairIndex + 1) % pairs.length;
  const p = pairs[pairIndex];
  slotA.textContent = p.a;
  slotB.textContent = p.b;
  slotR.textContent = p.r;
}

if (wordWidget) {
  wordWidget.addEventListener('click', rotateWords);
  setInterval(rotateWords, 4000);
}

// ==========================================================================
// Init
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
});
