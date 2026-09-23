// ==========================================================================
// Theme Management
// ==========================================================================
const THEME_KEY = 'teacola_theme';
const root = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}

function toggleTheme() {
  const currentTheme = root.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// ==========================================================================
// Internationalization (i18n: EN / JA)
// ==========================================================================
const LANG_KEY = 'teacola_lang';

const translations = {
  en: {
    pageTitle: "teacola — Minimal Tools & Creative Web Experiments",
    pageDesc: "Minimal browser extensions and creative web experiments by teacola. Featuring tabCandle (gentle 4-hour auto-tab closer) and wordformation (serendipitous naming tool).",
    heroPill: "Indie Maker & Experimental Lab",
    heroTitle: `Crafting focused tools for a <br><span class="gradient-text">lighter, calmer web.</span>`,
    heroDesc: "Lightweight browser extensions and playful web experiments built to reclaim focus, save memory, and spark creative curiosity.",
    projectsHeading: "Selected Projects",
    projectsCount: "2 Projects",

    // tabCandle
    tabcandleType: "Chrome Extension",
    tabcandleStatus: "Free on Web Store",
    tabcandleTitle: "tabCandle",
    tabcandleSubtext: "A digital candle that gently melts away idle browser tabs",
    tabcandleDesc: "Unpinned tabs automatically close after 240 minutes (4 hours) of inactivity. Like a candle burning down, tabCandle quietly reclaims bloated system RAM while keeping your workspace clean. Pinned tabs remain safely protected.",
    tabcandlePill1: "🔒 Zero Tracking",
    tabcandlePill2: "⚡ Manifest V3",
    tabcandlePill3: "📦 100% Free",
    tabcandleFeat1: "Gentle 4-hour timer closes idle background tabs",
    tabcandleFeat2: "Pinned tabs are strictly protected & never closed",
    tabcandleFeat3: "Restores system memory & stops tab hoarding",
    tabcandleWidgetLabel: "Auto-close timer",
    tabcandleWidgetNote: "📌 Pinned tabs protected",
    tabcandleCta: "Add to Chrome — Free",

    // wordformation
    wordformationType: "Web App",
    wordformationStatus: "Live on GitHub Pages",
    wordformationTitle: "wordformation",
    wordformationSubtext: "Spark creative naming ideas through serendipitous word collisions",
    wordformationDesc: "Input words, spin the slots, and let concepts collide into unexpected neologisms and brand names. Designed for indie makers, writers, and curious creators seeking inspiration.",
    wordformationPill1: "⚡ Instant Client-Side",
    wordformationPill2: "✨ No Signup Needed",
    wordformationPill3: "📋 Quick Copy",
    wordformationFeat1: "Dual-slot random blending engine (Slot A + Slot B)",
    wordformationFeat2: "One-click copy to clipboard for rapid ideation",
    wordformationFeat3: "Interactive word tag constellation for exploration",
    wordformationWidgetHint: "Click to generate a new blend",
    wordformationCta: "Launch Web App",

    // About
    aboutTitle: "About teacola",
    aboutDesc: "Independent software maker focused on building clean, lightweight, and delightful digital tools. I believe in respectful software: zero tracking, minimal bloat, and thoughtful interactions.",
    aboutLink: "GitHub Profile",

    // Footer
    footerCopy: "© 2026 teacola. All rights reserved."
  },
  ja: {
    pageTitle: "teacola — Portfolio & Works",
    pageDesc: "teacolaの個人開発ポートフォリオ。Chrome拡張機能「tabCandle」や言葉の組み合わせ生成ツール「wordformation」などの制作物を紹介しています。",
    heroPill: "Personal Works & Lab",
    heroTitle: `Crafting tools with <br><span class="gradient-text">focus & curiosity.</span>`,
    heroDesc: "日常のブラウジングを心地よくする拡張機能や、新しいアイデアの種を紡ぎ出すWebツールなど、シンプルで実用的なプロダクトを開発しています。",
    projectsHeading: "Selected Projects",
    projectsCount: "2 Projects",

    // tabCandle
    tabcandleType: "Chrome Extension",
    tabcandleStatus: "Chrome Web Store 公開中",
    tabcandleTitle: "tabCandle",
    tabcandleSubtext: "4時間で静かに消える、ブラウザタブのロウソク",
    tabcandleDesc: "固定タブ以外の開きっぱなしタブを、240分（4時間）経過後に自動クローズ。溜まりがちなタブを整理し、ブラウザのメモリ消費を軽やかに抑えます。固定したタブは消えません。",
    tabcandlePill1: "🔒 トラッキングなし",
    tabcandlePill2: "⚡ Manifest V3",
    tabcandlePill3: "📦 無料・オープン",
    tabcandleFeat1: "4時間経過でバックグラウンドタブを自動クローズ",
    tabcandleFeat2: "固定（ピン留め）タブは自動消滅から確実に保護",
    tabcandleFeat3: "不要なメモリ解放でPCの快適性をキープ",
    tabcandleWidgetLabel: "自動クローズまで",
    tabcandleWidgetNote: "📌 留めたタブは保護",
    tabcandleCta: "Chrome ウェブストアで見る",

    // wordformation
    wordformationType: "Web App",
    wordformationStatus: "GitHub Pages 公開中",
    wordformationTitle: "wordformation",
    wordformationSubtext: "登録した言葉たちから、新しい造語を紡ぎ出す",
    wordformationDesc: "思いついた単語を登録すると、ランダムに2つの言葉が組み合わさって新しい造語が誕生。ネーミングや創作、企画のアイデア出しにひらめきを与えるサービスです。",
    wordformationPill1: "⚡ クライアント完結",
    wordformationPill2: "✨ 登録不要・即利用",
    wordformationPill3: "📋 ワンクリックコピー",
    wordformationFeat1: "2つのスロット（A + B）で言葉をランダムにブレンド",
    wordformationFeat2: "気になった造語はワンクリックで即座にコピー",
    wordformationFeat3: "登録した言葉を俯瞰できるインタラクティブなタグクラウド",
    wordformationWidgetHint: "クリックして組み合わせを変更",
    wordformationCta: "Webアプリを開く",

    // About
    aboutTitle: "About teacola",
    aboutDesc: "使い勝手がよく、シンプルで余白のあるモノづくりを心がけています。日常のちょっとした不便の解消や、創作のインスピレーションになるWebプロダクトを開発しています。",
    aboutLink: "GitHub Profile",

    // Footer
    footerCopy: "© 2026 teacola. All rights reserved."
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  
  // Document level
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.pageDesc);

  // Apply to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update active state in switcher
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
  // Default to English to maximize international appeal, or auto-detect if Japanese
  const userLang = (navigator.language || '').toLowerCase();
  if (userLang.startsWith('ja')) {
    setLanguage('ja');
  } else {
    setLanguage('en');
  }
}

// Bind language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = e.currentTarget.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// ==========================================================================
// WordFormation Interactive Widget Demonstration
// ==========================================================================
const wordPairs = [
  { a: 'word', b: 'formation', res: 'wordformation' },
  { a: 'tab', b: 'candle', res: 'tabcandle' },
  { a: 'tea', b: 'cola', res: 'teacola' },
  { a: 'light', b: 'craft', res: 'lightcraft' },
  { a: 'focus', b: 'flow', res: 'focusflow' },
  { a: 'brain', b: 'spark', res: 'brainspark' }
];

let currentPairIndex = 0;
const slotA = document.getElementById('slot-a-val');
const slotB = document.getElementById('slot-b-val');
const slotRes = document.getElementById('slot-res-val');
const formationWidget = document.getElementById('formation-widget');

function updateFormationWidget() {
  if (!slotA || !slotB || !slotRes) return;
  
  currentPairIndex = (currentPairIndex + 1) % wordPairs.length;
  const pair = wordPairs[currentPairIndex];
  
  [slotA, slotB, slotRes].forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-4px)';
  });
  
  setTimeout(() => {
    slotA.textContent = pair.a;
    slotB.textContent = pair.b;
    slotRes.textContent = pair.res;
    
    [slotA, slotB, slotRes].forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }, 180);
}

if (slotA && slotB && slotRes) {
  setInterval(updateFormationWidget, 3500);
  if (formationWidget) {
    formationWidget.addEventListener('click', updateFormationWidget);
    formationWidget.style.cursor = 'pointer';
  }
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
});
