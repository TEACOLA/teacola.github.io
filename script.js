// Theme Management
const THEME_KEY = 'teacola_theme';
const root = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    // Respect system preference
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

// WordFormation Interactive Widget Demonstration
const wordPairs = [
  { a: 'word', b: 'formation', res: 'wordformation' },
  { a: 'tab', b: 'candle', res: 'tabcandle' },
  { a: 'tea', b: 'cola', res: 'teacola' },
  { a: 'light', b: 'craft', res: 'lightcraft' },
  { a: 'idea', b: 'flow', res: 'ideaflow' }
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
  
  // Quick fade effect
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

// Cycle words every 3.5s
if (slotA && slotB && slotRes) {
  setInterval(updateFormationWidget, 3500);
  if (formationWidget) {
    formationWidget.addEventListener('click', updateFormationWidget);
    formationWidget.style.cursor = 'pointer';
    formationWidget.title = 'クリックして組み合わせを変更';
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
