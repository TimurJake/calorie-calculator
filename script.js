  /* ============ Constants ============ */
  const PRESET_TAGS = [
    // Приёмы пищи
    'завтрак', 'обед', 'ужин', 'перекус',
    // Основные категории
    'белок', 'овощи', 'фрукты',
    // Типы продуктов
    'мясо', 'рыба', 'молочка', 'гарниры',
    // Категории блюд
    'блюда', 'напитки', 'снеки',
    // Диетические
    'пп',
  ];
  const TAG_HUES = {
    'завтрак': 40, 'обед': 22, 'ужин': 265, 'перекус': 175,
    'белок': 348, 'овощи': 135, 'фрукты': 320, 'пп': 210, 'мясо': 5, 'рыба': 195,
    'молочка': 215, 'гарниры': 50, 'блюда': 355, 'напитки': 190, 'снеки': 30,
  };
  const STORAGE_KEY = 'kcal_dashboard_v4';

  const QUICK_CATEGORIES = [
    {
      name: 'Фрукты', emoji: '🍎',
      items: [
        { emoji: '🍌', name: 'Банан',             kcal: 105, p: 1.3, f: 0.4, c: 27  },
        { emoji: '🍎', name: 'Яблоко',            kcal: 95,  p: 0.5, f: 0.3, c: 25  },
        { emoji: '🍊', name: 'Апельсин',          kcal: 62,  p: 1.2, f: 0.2, c: 15  },
        { emoji: '🍐', name: 'Груша',             kcal: 100, p: 0.6, f: 0.3, c: 27  },
        { emoji: '🍇', name: 'Виноград, 100 г',   kcal: 69,  p: 0.7, f: 0.2, c: 18  },
        { emoji: '🥝', name: 'Киви',              kcal: 42,  p: 0.8, f: 0.4, c: 10  },
        { emoji: '🍑', name: 'Персик',            kcal: 45,  p: 0.9, f: 0.1, c: 11  },
        { emoji: '🍊', name: 'Мандарин',          kcal: 40,  p: 0.8, f: 0.2, c: 9   },
        { emoji: '🍓', name: 'Клубника, 100 г',   kcal: 33,  p: 0.7, f: 0.3, c: 7.7 },
        { emoji: '🔵', name: 'Черника, 100 г',    kcal: 57,  p: 0.7, f: 0.3, c: 14  },
        { emoji: '🍒', name: 'Черешня, 100 г',    kcal: 52,  p: 1.1, f: 0.4, c: 12  },
        { emoji: '🥭', name: 'Манго, 100 г',      kcal: 60,  p: 0.8, f: 0.4, c: 15  },
      ]
    },
    {
      name: 'Овощи', emoji: '🥦',
      items: [
        { emoji: '🥒', name: 'Огурец, 100 г',     kcal: 15,  p: 0.7, f: 0.1, c: 3.6 },
        { emoji: '🍅', name: 'Помидор, 100 г',    kcal: 20,  p: 0.9, f: 0.2, c: 4.2 },
        { emoji: '🥕', name: 'Морковь, 100 г',    kcal: 35,  p: 0.9, f: 0.2, c: 8   },
        { emoji: '🥦', name: 'Брокколи, 100 г',   kcal: 34,  p: 2.8, f: 0.4, c: 7   },
        { emoji: '🥬', name: 'Капуста, 100 г',    kcal: 25,  p: 1.3, f: 0.1, c: 5.8 },
        { emoji: '🌶️', name: 'Перец болг., 100 г',kcal: 27,  p: 1.3, f: 0.1, c: 5.3 },
        { emoji: '🧅', name: 'Лук, 100 г',        kcal: 41,  p: 1.1, f: 0.1, c: 10  },
        { emoji: '🍆', name: 'Баклажан, 100 г',   kcal: 24,  p: 1.2, f: 0.1, c: 5.5 },
        { emoji: '🎃', name: 'Тыква, 100 г',      kcal: 26,  p: 1,   f: 0.1, c: 4.4 },
        { emoji: '🌽', name: 'Кукуруза, 100 г',   kcal: 96,  p: 3.4, f: 1.5, c: 21  },
        { emoji: '🥗', name: 'Свёкла, 100 г',     kcal: 40,  p: 1.5, f: 0.1, c: 9   },
        { emoji: '🍄', name: 'Шампиньоны, 100 г', kcal: 22,  p: 4.3, f: 1,   c: 0.1 },
      ]
    },
    {
      name: 'Белок', emoji: '🍗',
      items: [
        { emoji: '🥚', name: 'Яйцо варёное',          kcal: 78,  p: 6.3, f: 5.3, c: 0.6 },
        { emoji: '🍗', name: 'Курица грудка, 100 г',  kcal: 165, p: 31,  f: 3.6, c: 0   },
        { emoji: '🍗', name: 'Курица бедро, 100 г',   kcal: 185, p: 20,  f: 11,  c: 0   },
        { emoji: '🦃', name: 'Индейка, 100 г',        kcal: 150, p: 29,  f: 2,   c: 0   },
        { emoji: '🐟', name: 'Лосось, 100 г',         kcal: 208, p: 20,  f: 13,  c: 0   },
        { emoji: '🐟', name: 'Тунец конс., 100 г',    kcal: 96,  p: 22,  f: 0.6, c: 0   },
        { emoji: '🐟', name: 'Треска, 100 г',         kcal: 82,  p: 18,  f: 0.7, c: 0   },
        { emoji: '🐟', name: 'Скумбрия, 100 г',       kcal: 191, p: 18,  f: 13,  c: 0   },
        { emoji: '🥩', name: 'Говядина, 100 г',       kcal: 250, p: 26,  f: 15,  c: 0   },
        { emoji: '🥩', name: 'Свинина, 100 г',        kcal: 260, p: 27,  f: 16,  c: 0   },
        { emoji: '🍤', name: 'Креветки, 100 г',       kcal: 99,  p: 24,  f: 0.3, c: 0.2 },
        { emoji: '🐟', name: 'Икра красная, 30 г',    kcal: 75,  p: 9,   f: 4.5, c: 0   },
        { emoji: '🍖', name: 'Ветчина, 100 г',        kcal: 120, p: 15,  f: 6,   c: 1.5 },
        { emoji: '🌱', name: 'Тофу, 100 г',           kcal: 76,  p: 8,   f: 4.8, c: 1.9 },
      ]
    },
    {
      name: 'Молочка', emoji: '🥛',
      items: [
        { emoji: '🥛', name: 'Молоко 2.5%, 200 мл',  kcal: 104, p: 5.6, f: 5,   c: 9.6 },
        { emoji: '🥛', name: 'Молоко 3.2%, 200 мл',  kcal: 120, p: 6,   f: 6.4, c: 9.4 },
        { emoji: '🥛', name: 'Кефир 1%, 200 мл',     kcal: 80,  p: 6,   f: 2,   c: 8   },
        { emoji: '🥣', name: 'Йогурт натур., 150 г', kcal: 90,  p: 5,   f: 4.5, c: 7.5 },
        { emoji: '🥣', name: 'Йогурт греч., 100 г',  kcal: 66,  p: 9,   f: 3.2, c: 2.5 },
        { emoji: '🧀', name: 'Сыр твёрдый, 30 г',    kcal: 105, p: 7.5, f: 8.4, c: 0.9 },
        { emoji: '🧀', name: 'Моцарелла, 30 г',      kcal: 85,  p: 6.6, f: 6,   c: 0.6 },
        { emoji: '🧈', name: 'Творог 5%, 100 г',     kcal: 121, p: 17,  f: 5,   c: 3   },
        { emoji: '🧈', name: 'Творог 0%, 100 г',     kcal: 80,  p: 18,  f: 0.5, c: 1.8 },
        { emoji: '🥣', name: 'Сметана 20%, 50 г',    kcal: 103, p: 1.4, f: 10,  c: 1.5 },
        { emoji: '🥛', name: 'Ряженка, 200 мл',      kcal: 170, p: 6,   f: 8,   c: 17  },
        { emoji: '🧈', name: 'Масло слив., 10 г',    kcal: 75,  p: 0.1, f: 8.2, c: 0   },
      ]
    },
    {
      name: 'Гарниры', emoji: '🍚',
      items: [
        { emoji: '🍚', name: 'Рис отварной, 100 г',   kcal: 116, p: 2.2, f: 0.5, c: 25  },
        { emoji: '🌾', name: 'Гречка отвар., 100 г',  kcal: 110, p: 4,   f: 1.1, c: 21  },
        { emoji: '🍝', name: 'Паста отвар., 100 г',   kcal: 158, p: 5.8, f: 0.9, c: 31  },
        { emoji: '🥔', name: 'Картофель, 100 г',      kcal: 82,  p: 2,   f: 0.4, c: 17  },
        { emoji: '🍟', name: 'Картофель фри, 100 г',  kcal: 312, p: 3.4, f: 15,  c: 41  },
        { emoji: '🍞', name: 'Хлеб ржаной, ломтик',   kcal: 60,  p: 2,   f: 0.4, c: 12  },
        { emoji: '🍞', name: 'Хлеб белый, ломтик',    kcal: 70,  p: 2.5, f: 0.9, c: 13  },
        { emoji: '🥣', name: 'Овсянка гот., 100 г',   kcal: 88,  p: 3,   f: 1.7, c: 15  },
        { emoji: '🌾', name: 'Булгур отвар., 100 г',  kcal: 83,  p: 3.1, f: 0.2, c: 18.6 },
        { emoji: '🌾', name: 'Кускус отвар., 100 г',  kcal: 112, p: 3.8, f: 0.2, c: 23  },
        { emoji: '🌾', name: 'Киноа отвар., 100 г',   kcal: 120, p: 4.4, f: 1.9, c: 21  },
        { emoji: '🟠', name: 'Чечевица отвар., 100 г',kcal: 116, p: 9,   f: 0.4, c: 20  },
        { emoji: '🍠', name: 'Батат отвар., 100 г',   kcal: 90,  p: 2,   f: 0.2, c: 21  },
      ]
    },
    {
      name: 'Блюда', emoji: '🍕',
      items: [
        { emoji: '🍕', name: 'Пицца, кусок',           kcal: 285, p: 12,  f: 10,  c: 36 },
        { emoji: '🍔', name: 'Бургер',                 kcal: 500, p: 25,  f: 25,  c: 40 },
        { emoji: '🌯', name: 'Шаурма',                 kcal: 550, p: 25,  f: 25,  c: 55 },
        { emoji: '🍣', name: 'Суши ролл, 6 шт',        kcal: 240, p: 8,   f: 6,   c: 38 },
        { emoji: '🍲', name: 'Борщ, 300 мл',           kcal: 180, p: 6,   f: 6,   c: 25 },
        { emoji: '🍲', name: 'Суп куриный, 300 мл',    kcal: 120, p: 8,   f: 4,   c: 12 },
        { emoji: '🥗', name: 'Салат Цезарь',           kcal: 350, p: 18,  f: 22,  c: 18 },
        { emoji: '🍳', name: 'Омлет из 2 яиц',         kcal: 220, p: 14,  f: 16,  c: 2  },
        { emoji: '🥞', name: 'Блины с маслом, 2 шт',   kcal: 300, p: 6,   f: 12,  c: 40 },
        { emoji: '🥟', name: 'Пельмени отвар., 100 г', kcal: 250, p: 11,  f: 12,  c: 25 },
        { emoji: '🍱', name: 'Плов, 100 г',            kcal: 200, p: 5,   f: 7,   c: 28 },
      ]
    },
    {
      name: 'Напитки', emoji: '🥤',
      items: [
        { emoji: '☕', name: 'Кофе чёрный',        kcal: 2,   p: 0.2, f: 0,   c: 0  },
        { emoji: '☕', name: 'Кофе с молоком, 200 мл', kcal: 60, p: 3,  f: 3,   c: 5  },
        { emoji: '🍵', name: 'Чай с сахаром, 200 мл',  kcal: 40, p: 0,  f: 0,   c: 10 },
        { emoji: '🍊', name: 'Сок апельсин, 200 мл',   kcal: 90, p: 1.4, f: 0.2, c: 21 },
        { emoji: '🍎', name: 'Сок яблочный, 200 мл',   kcal: 92, p: 0.4, f: 0.2, c: 23 },
        { emoji: '🥤', name: 'Кола, 330 мл',           kcal: 139, p: 0,  f: 0,   c: 35 },
        { emoji: '🧃', name: 'Компот, 200 мл',         kcal: 80,  p: 0.2, f: 0,  c: 20 },
        { emoji: '🍺', name: 'Пиво, 500 мл',           kcal: 215, p: 2,  f: 0,   c: 20 },
        { emoji: '🍷', name: 'Вино красное, 150 мл',   kcal: 128, p: 0.1, f: 0,  c: 4  },
        { emoji: '🥤', name: 'Смузи, 300 мл',          kcal: 150, p: 2,  f: 1,   c: 33 },
      ]
    },
    {
      name: 'Снеки', emoji: '🍫',
      items: [
        { emoji: '🍫', name: 'Шоколад тёмный, 20 г',  kcal: 120, p: 1.5, f: 8.4, c: 9  },
        { emoji: '🍫', name: 'Шоколад молочн., 20 г', kcal: 110, p: 1.5, f: 6.5, c: 12 },
        { emoji: '🥜', name: 'Орехи, 30 г',           kcal: 180, p: 5,   f: 16,  c: 5  },
        { emoji: '🥜', name: 'Миндаль, 30 г',         kcal: 170, p: 6,   f: 15,  c: 6  },
        { emoji: '🥜', name: 'Грецкий орех, 30 г',    kcal: 196, p: 4.5, f: 19.5,c: 4  },
        { emoji: '🍪', name: 'Печенье, 30 г',         kcal: 140, p: 2,   f: 6,   c: 20 },
        { emoji: '🍬', name: 'Конфета шокол.',        kcal: 50,  p: 0.5, f: 2.5, c: 6  },
        { emoji: '🍿', name: 'Попкорн, 30 г',         kcal: 120, p: 3,   f: 4,   c: 18 },
        { emoji: '🥔', name: 'Чипсы, 30 г',           kcal: 160, p: 2,   f: 10,  c: 15 },
        { emoji: '🍯', name: 'Мёд, 1 ст. л.',         kcal: 65,  p: 0,   f: 0,   c: 16 },
        { emoji: '🥜', name: 'Арахис. паста, 1 ст. л.',kcal: 120, p: 5,  f: 10,  c: 4  },
        { emoji: '🍫', name: 'Протеин батончик',      kcal: 200, p: 20,  f: 7,   c: 18 },
      ]
    },
  ];

// Специальные теги для отдельных блюд (переопределяют тег категории)
  const QUICK_TAG_OVERRIDES = {
    // Мясо
    'Курица грудка, 100 г': ['белок', 'мясо'],
    'Курица бедро, 100 г':  ['белок', 'мясо'],
    'Индейка, 100 г':       ['белок', 'мясо'],
    'Говядина, 100 г':      ['белок', 'мясо'],
    'Свинина, 100 г':       ['белок', 'мясо'],
    'Ветчина, 100 г':       ['белок', 'мясо'],
    // Рыба
    'Лосось, 100 г':        ['белок', 'рыба'],
    'Тунец конс., 100 г':   ['белок', 'рыба'],
    'Треска, 100 г':        ['белок', 'рыба'],
    'Скумбрия, 100 г':      ['белок', 'рыба'],
    'Креветки, 100 г':      ['белок', 'рыба'],
    'Икра красная, 30 г':   ['белок', 'рыба'],
    // Яйцо
    'Яйцо варёное':         ['белок', 'завтрак'],
    // Молочка с белком
    'Молоко 2.5%, 200 мл':  ['молочка', 'белок'],
    'Молоко 3.2%, 200 мл':  ['молочка', 'белок'],
    'Кефир 1%, 200 мл':     ['молочка', 'белок'],
    'Йогурт натур., 150 г': ['молочка', 'белок'],
    'Йогурт греч., 100 г':  ['молочка', 'белок'],
    'Творог 5%, 100 г':     ['молочка', 'белок'],
    'Творог 0%, 100 г':     ['молочка', 'белок'],
    // Снеки → перекус
    'Шоколад тёмный, 20 г': ['снеки', 'перекус'],
    'Шоколад молочн., 20 г':['снеки', 'перекус'],
    'Печенье, 30 г':        ['снеки', 'перекус'],
    'Попкорн, 30 г':        ['снеки', 'перекус'],
    'Чипсы, 30 г':          ['снеки', 'перекус'],
    'Протеин батончик':     ['снеки', 'белок'],
    // Напитки → завтрак
    'Кофе чёрный':          ['напитки', 'завтрак'],
    'Кофе с молоком, 200 мл':['напитки', 'завтрак'],
    'Чай с сахаром, 200 мл':['напитки', 'завтрак'],
  };

  // Проставляем теги всем блюдам: явные из overrides, иначе — от категории
  QUICK_CATEGORIES.forEach(cat => {
    const catTag = cat.name.toLowerCase();
    cat.items.forEach(item => {
      item.tags = QUICK_TAG_OVERRIDES[item.name] || [catTag];
    });
  });

  let activeQuickCategory = 0;

  /* ============ Date helpers ============ */
  const pad = n => String(n).padStart(2, '0');
  const todayStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const addDaysStr = (str, n) => {
    const d = new Date(str + 'T12:00:00');
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  function dateLabel(str) {
    const t = todayStr();
    const d = new Date(str + 'T12:00:00');
    const human = d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
    if (str === t) return 'Сегодня, ' + human;
    if (str === addDaysStr(t, -1)) return 'Вчера, ' + human;
    if (str === addDaysStr(t, 1)) return 'Завтра, ' + human;
    return human;
  }
  function tagHue(tag) {
    if (TAG_HUES[tag] != null) return TAG_HUES[tag];
    let h = 0;
    for (let i = 0; i < tag.length; i++) h = (h * 31 + tag.charCodeAt(i)) % 360;
    return h;
  }

  /* ============ State ============ */
  const state = {
    theme: 'dark',
    profile: { gender: 'male', age: 28, height: 178, weight: 72, activity: 1.55, goal: 'maintain' },
    mealsByDate: {},
    favorites: [],
    currentDate: todayStr(),
    pendingTags: [],
    activeTags: [],
    chartRange: 7,
    editingId: null,
  };

  const $ = id => document.getElementById(id);
  const RING_R = 52;
  const RING_C = 2 * Math.PI * RING_R;

  let lastDeleted = null;
  let toastTimer = null;

  /* ============ Getters ============ */
  const getMeals = () => state.mealsByDate[state.currentDate] || [];
  const setMeals = list => { state.mealsByDate[state.currentDate] = list; };

  /* ============ Persistence ============ */
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        theme: state.theme,
        profile: state.profile,
        mealsByDate: state.mealsByDate,
        favorites: state.favorites,
        chartRange: state.chartRange,
      }));
    } catch (e) {}
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.theme === 'light' || d.theme === 'dark') state.theme = d.theme;
      if (d.profile && typeof d.profile === 'object') Object.assign(state.profile, d.profile);
      if (d.mealsByDate && typeof d.mealsByDate === 'object') state.mealsByDate = d.mealsByDate;
      if (Array.isArray(d.favorites)) state.favorites = d.favorites;
      if (d.chartRange === 7 || d.chartRange === 30) state.chartRange = d.chartRange;
    } catch (e) {}
  }

  /* ============ Apply to UI ============ */
  function applyProfileToUI() {
    const p = state.profile;
    const gInput = document.querySelector(`input[name="gender"][value="${p.gender}"]`);
    if (gInput) gInput.checked = true;
    $('age').value = p.age;
    $('height').value = p.height;
    $('weight').value = p.weight;
    document.querySelectorAll('.activity-item').forEach(item => {
      item.classList.toggle('active', parseFloat(item.dataset.k) === p.activity);
    });
    document.querySelectorAll('.goal-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.goal === p.goal);
    });
    document.querySelectorAll('.chart-range').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.range) === state.chartRange);
    });
  }

  /* ============ Calculations ============ */
  function calcBMR() {
    const { weight, height, age, gender } = state.profile;
    const base = 10 * weight + 6.25 * height - 5 * age;
    return Math.round(gender === 'male' ? base + 5 : base - 161);
  }
  const getTDEE = () => Math.round(calcBMR() * state.profile.activity);
  function getGoalKcal() {
    const tdee = getTDEE();
    switch (state.profile.goal) {
      case 'cut': return tdee - 400;
      case 'bulk': return tdee + 350;
      default: return tdee;
    }
  }
  function getMacroTargets() {
    const k = getGoalKcal();
    return { p: Math.round((k * 0.30) / 4), f: Math.round((k * 0.30) / 9), c: Math.round((k * 0.40) / 4) };
  }

  /* ============ Render: result ============ */
  function updateResult() {
    const bmr = calcBMR();
    const tdee = getTDEE();
    const cut = tdee - 400;
    const bulk = tdee + 350;
    const goal = getGoalKcal();

    const goalLabels = { cut: 'Цель · Похудение', maintain: 'Дневная цель', bulk: 'Цель · Набор' };
    $('goalLabel').textContent = goalLabels[state.profile.goal] || 'Дневная цель';

    const el = $('kcal');
    el.classList.remove('pulse');
    void el.offsetWidth;
    el.classList.add('pulse');
    const from = parseInt(el.textContent.replace(/\D/g, '')) || 0;
    animateNumber(el, from, goal, 600);

    $('bmr').textContent = bmr.toLocaleString('ru-RU') + ' ккал';
    $('cut').textContent = cut.toLocaleString('ru-RU') + ' ккал';
    $('maintain').textContent = tdee.toLocaleString('ru-RU') + ' ккал';
    $('bulk').textContent = bulk.toLocaleString('ru-RU') + ' ккал';
    $('totalGoal').textContent = goal.toLocaleString('ru-RU');

    // Highlight active goal row
    document.querySelectorAll('.result-detail > span').forEach(s => {
      s.classList.toggle('active', s.dataset.goal === state.profile.goal);
    });

    const mt = getMacroTargets();
    $('pTarget').textContent = mt.p;
    $('fTarget').textContent = mt.f;
    $('cTarget').textContent = mt.c;

    renderTotals();
  }

  function animateNumber(el, from, to, dur) {
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(from + (to - from) * eased);
      el.textContent = v.toLocaleString('ru-RU');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ============ Render: totals ============ */
  function renderTotals() {
    const meals = getMeals();
    const total = meals.reduce((s, m) => s + (+m.kcal || 0), 0);
    const pCon = meals.reduce((s, m) => s + (+m.protein || 0), 0);
    const fCon = meals.reduce((s, m) => s + (+m.fat || 0), 0);
    const cCon = meals.reduce((s, m) => s + (+m.carbs || 0), 0);

    $('totalEaten').textContent = Math.round(total).toLocaleString('ru-RU');
    $('pConsumed').textContent = Math.round(pCon);
    $('fConsumed').textContent = Math.round(fCon);
    $('cConsumed').textContent = Math.round(cCon);

    const goal = getGoalKcal();
    const kcalPct = Math.min(total / goal, 1);
    $('progressFill').style.width = (kcalPct * 100) + '%';

    const ringFill = $('ringFill');
    ringFill.style.strokeDasharray = RING_C;
    ringFill.style.strokeDashoffset = RING_C * (1 - kcalPct);
    $('ringPct').textContent = Math.round(kcalPct * 100) + '%';

    const mt = getMacroTargets();
    $('pFill').style.width = (mt.p ? Math.min(pCon / mt.p, 1) : 0) * 100 + '%';
    $('fFill').style.width = (mt.f ? Math.min(fCon / mt.f, 1) : 0) * 100 + '%';
    $('cFill').style.width = (mt.c ? Math.min(cCon / mt.c, 1) : 0) * 100 + '%';

    renderChart();
  }

  /* ============ Render: chart ============ */
  function renderChart() {
    const chart = $('chart');
    if (!chart) return;
    const range = state.chartRange;
    const today = todayStr();
    const days = [];
    for (let i = range - 1; i >= 0; i--) {
      const d = addDaysStr(today, -i);
      const meals = state.mealsByDate[d] || [];
      const kcal = meals.reduce((s, m) => s + (+m.kcal || 0), 0);
      days.push({ date: d, kcal });
    }

    const goal = getGoalKcal();
    const maxVal = Math.max(goal, ...days.map(d => d.kcal), 100);
    const scaleMax = maxVal * 1.1;

    chart.innerHTML = '';
    days.forEach(d => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      const h = (d.kcal / scaleMax) * 100;
      bar.style.height = Math.max(h, 2) + '%';
      if (d.kcal === 0) { /* empty */ }
      else if (d.kcal > goal * 1.15) bar.classList.add('over');
      else if (d.kcal >= goal * 0.85) bar.classList.add('good');
      else bar.classList.add('under');
      bar.title = `${d.date}: ${Math.round(d.kcal)} ккал`;
      chart.appendChild(bar);
    });

    const goalLine = (goal / scaleMax) * 100;
    chart.style.setProperty('--goal-line', goalLine + '%');
  }

  /* ============ Render: day label ============ */
  function renderDayLabel() {
    $('dayLabel').textContent = dateLabel(state.currentDate);
    $('nextDay').disabled = state.currentDate >= todayStr();
  }

  /* ============ Render: meals ============ */
  function getFilteredMeals() {
    return getMeals().filter(m => {
      if (state.activeTags.length) {
        const mealTags = m.tags || [];
        if (!state.activeTags.every(t => mealTags.includes(t))) return false;
      }
      return true;
    });
  }

  function renderMeals() {
    const list = $('mealList');
    const all = getMeals();
    const meals = getFilteredMeals();
    list.innerHTML = '';
    if (!all.length) {
      list.innerHTML = '<div class="empty">За этот день пока нет блюд</div>';
    } else if (!meals.length) {
      list.innerHTML = '<div class="empty">Ничего не найдено по фильтрам</div>';
    } else {
      meals.forEach(m => list.appendChild(buildMealEl(m)));
    }
    renderTotals();
  }

  const ICONS = {
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  };

  function isFavorite(meal) {
    const n = meal.name.trim().toLowerCase();
    return state.favorites.some(f => f.name.trim().toLowerCase() === n);
  }

  function buildMealEl(m) {
    if (state.editingId === m.id) return buildEditEl(m);
    const el = document.createElement('div');
    el.className = 'meal';

    const tagsHtml = (m.tags && m.tags.length)
      ? `<div class="meal-tags">${m.tags.map(t =>
          `<button class="mini-tag" style="--h:${tagHue(t)}" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`
        ).join('')}</div>`
      : '';

    const macrosParts = [];
    if (+m.protein) macrosParts.push(`Б ${Math.round(m.protein)}`);
    if (+m.fat)     macrosParts.push(`Ж ${Math.round(m.fat)}`);
    if (+m.carbs)   macrosParts.push(`У ${Math.round(m.carbs)}`);
    const macrosHtml = macrosParts.length
      ? `<div class="meal-macros">${macrosParts.map(x => `<span>${x}</span>`).join('')}</div>`
      : '<div class="meal-macros"></div>';

    const isFav = isFavorite(m);

    el.innerHTML = `
      <div class="meal-body">
        <div class="meal-name">${escapeHtml(m.name)}</div>
        ${tagsHtml}
      </div>
      ${macrosHtml}
      <div class="meal-kcal">${Math.round(m.kcal)}</div>
      <div class="meal-actions">
        <button class="meal-action fav-btn${isFav ? ' is-fav' : ''}" title="${isFav ? 'Убрать из избранного' : 'В избранное'}">${ICONS.star}</button>
        <button class="meal-action dup-btn" title="Дублировать">${ICONS.copy}</button>
        <button class="meal-action edit-btn" title="Редактировать">${ICONS.edit}</button>
        <button class="meal-action del-btn" title="Удалить">${ICONS.del}</button>
      </div>
    `;

    el.querySelectorAll('.mini-tag').forEach(tagEl => {
      tagEl.addEventListener('click', () => {
        const t = tagEl.dataset.tag;
        if (!state.activeTags.includes(t)) {
          state.activeTags.push(t);
          renderFilters();
          renderMeals();
        }
      });
    });

    el.querySelector('.fav-btn').addEventListener('click', () => toggleFavorite(m));
    el.querySelector('.dup-btn').addEventListener('click', () => duplicateMeal(m));
    el.querySelector('.edit-btn').addEventListener('click', () => {
      state.editingId = m.id;
      renderMeals();
    });
    el.querySelector('.del-btn').addEventListener('click', () => deleteMeal(m));

    return el;
  }

  function buildEditEl(m) {
    const el = document.createElement('div');
    el.className = 'meal editing';
    el.innerHTML = `
      <div class="edit-grid">
        <input type="text" class="edit-name" value="${escapeHtml(m.name)}" placeholder="Название" maxlength="80">
        <input type="text" class="edit-kcal" value="${m.kcal || ''}" placeholder="ккал" inputmode="decimal">
        <input type="text" class="edit-p" value="${m.protein || ''}" placeholder="Б" inputmode="decimal">
        <input type="text" class="edit-f" value="${m.fat || ''}" placeholder="Ж" inputmode="decimal">
        <input type="text" class="edit-c" value="${m.carbs || ''}" placeholder="У" inputmode="decimal">
        <button class="edit-btn-save">Сохранить</button>
        <button class="edit-btn-cancel">Отмена</button>
      </div>
    `;

    const nameInp = el.querySelector('.edit-name');
    const kcalInp = el.querySelector('.edit-kcal');
    const pInp = el.querySelector('.edit-p');
    const fInp = el.querySelector('.edit-f');
    const cInp = el.querySelector('.edit-c');

    const cancel = () => { state.editingId = null; renderMeals(); };
    const confirm = () => {
      const name = nameInp.value.trim();
      const kcal = num(kcalInp.value);
      if (!name || !kcal) { shake([nameInp, kcalInp]); return; }
      const list = getMeals();
      const idx = list.findIndex(x => x.id === m.id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], name, kcal, protein: num(pInp.value), fat: num(fInp.value), carbs: num(cInp.value) };
        setMeals(list);
      }
      state.editingId = null;
      save();
      renderMeals();
    };

    el.querySelector('.edit-btn-save').addEventListener('click', confirm);
    el.querySelector('.edit-btn-cancel').addEventListener('click', cancel);
    el.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); confirm(); }
        if (e.key === 'Escape') { e.preventDefault(); cancel(); }
      });
    });

    setTimeout(() => { nameInp.focus(); nameInp.select(); }, 30);
    return el;
  }

  /* ============ Favorite logic ============ */
  function toggleFavorite(meal) {
    const n = meal.name.trim().toLowerCase();
    const idx = state.favorites.findIndex(f => f.name.trim().toLowerCase() === n);
    if (idx >= 0) state.favorites.splice(idx, 1);
    else state.favorites.push({
      id: 'fav_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      name: meal.name,
      kcal: +meal.kcal || 0,
      protein: +meal.protein || 0,
      fat: +meal.fat || 0,
      carbs: +meal.carbs || 0,
      tags: [...(meal.tags || [])],
    });
    save();
    renderMeals();
    renderFavorites();
  }

  function renderFavorites() {
    const panel = $('favoritesPanel');
    const list = $('favList');
    if (!state.favorites.length) {
      panel.classList.add('hidden');
      list.innerHTML = '';
      return;
    }
    panel.classList.remove('hidden');
    list.innerHTML = '';
    state.favorites.forEach(f => {
      const chip = document.createElement('button');
      chip.className = 'fav-chip';
      chip.type = 'button';
      chip.innerHTML = `
        <span class="fav-star">★</span>
        <span class="fav-name">${escapeHtml(f.name)}</span>
        <span class="fav-kcal">${Math.round(f.kcal)}</span>
        <span class="fav-remove" title="Убрать из избранного">×</span>
      `;
      chip.addEventListener('click', e => {
        if (e.target.classList.contains('fav-remove')) {
          state.favorites = state.favorites.filter(x => x.id !== f.id);
          save();
          renderFavorites();
          renderMeals();
          return;
        }
        addFromFavorite(f);
      });
      list.appendChild(chip);
    });
  }

  function addFromFavorite(fav) {
    const newMeal = {
      id: Date.now() + Math.random(),
      name: fav.name,
      kcal: +fav.kcal || 0,
      protein: +fav.protein || 0,
      fat: +fav.fat || 0,
      carbs: +fav.carbs || 0,
      tags: [...(fav.tags || [])],
    };
    setMeals([newMeal, ...getMeals()]);
    save();
    renderMeals();
  }

  /* ============ Duplicate ============ */
  function duplicateMeal(m) {
    const copy = {
      ...m,
      id: Date.now() + Math.random(),
      tags: [...(m.tags || [])],
    };
    const list = getMeals();
    const idx = list.findIndex(x => x.id === m.id);
    list.splice(idx, 0, copy);
    setMeals(list);
    save();
    renderMeals();
  }

  /* ============ Delete + Undo ============ */
  function deleteMeal(m) {
    const list = getMeals();
    const idx = list.findIndex(x => x.id === m.id);
    if (idx < 0) return;
    lastDeleted = { meal: { ...m, tags: [...(m.tags || [])] }, index: idx, dateKey: state.currentDate };
    setMeals(list.filter(x => x.id !== m.id));
    save();
    renderMeals();
    showUndoToast();
  }

  function showUndoToast() {
    const toast = $('toast');
    toast.innerHTML = '';
    const text = document.createElement('span');
    text.textContent = 'Блюдо удалено';
    const btn = document.createElement('button');
    btn.className = 'toast-undo';
    btn.textContent = 'Вернуть';
    btn.addEventListener('click', undoDelete);
    toast.appendChild(text);
    toast.appendChild(btn);
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
      lastDeleted = null;
    }, 5000);
  }

  function undoDelete() {
    if (!lastDeleted) return;
    const { meal, index, dateKey } = lastDeleted;
    const arr = state.mealsByDate[dateKey] || [];
    arr.splice(Math.min(index, arr.length), 0, meal);
    state.mealsByDate[dateKey] = arr;
    save();
    if (dateKey === state.currentDate) renderMeals();
    $('toast').classList.remove('visible');
    lastDeleted = null;
    clearTimeout(toastTimer);
  }

  /* ============ Filters ============ */
  function renderFilters() {
    const wrap = $('filters');
    const toolbar = $('mealsToolbar');
    if (!state.activeTags.length) {
      toolbar.style.display = 'none';
      wrap.innerHTML = '';
      return;
    }
    toolbar.style.display = 'flex';
    wrap.innerHTML = '';
    state.activeTags.forEach((t, i) => {
      const btn = document.createElement('button');
      btn.className = 'tag-chip active';
      btn.style.setProperty('--h', tagHue(t));
      btn.textContent = t + ' ×';
      btn.addEventListener('click', () => {
        state.activeTags.splice(i, 1);
        renderFilters();
        renderMeals();
      });
      wrap.appendChild(btn);
    });
  }

  /* ============ Tag chips ============ */
  function renderTagChips() {
    const wrap = $('tagChips');
    wrap.innerHTML = '';
    const allTags = [...PRESET_TAGS];
    state.pendingTags.forEach(t => { if (!allTags.includes(t)) allTags.push(t); });
    allTags.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tag-chip' + (state.pendingTags.includes(t) ? ' active' : '');
      btn.style.setProperty('--h', tagHue(t));
      btn.textContent = t;
      btn.addEventListener('click', () => togglePendingTag(t));
      wrap.appendChild(btn);
    });
  }
  function togglePendingTag(tag) {
    const idx = state.pendingTags.indexOf(tag);
    if (idx >= 0) state.pendingTags.splice(idx, 1);
    else state.pendingTags.push(tag);
    renderTagChips();
  }

  /* ============ Quick add ============ */
  function renderQuickTabs() {
    const wrap = $('quickTabs');
    if (!wrap) return;
    wrap.innerHTML = '';
    QUICK_CATEGORIES.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'quick-tab' + (i === activeQuickCategory ? ' active' : '');
      btn.type = 'button';
      btn.innerHTML = `<span class="quick-tab-emoji">${cat.emoji}</span><span>${cat.name}</span><span class="quick-tab-count">${cat.items.length}</span>`;
      btn.addEventListener('click', () => {
        activeQuickCategory = i;
        renderQuickTabs();
        renderQuickGrid();
      });
      wrap.appendChild(btn);
    });
  }

  function renderQuickGrid() {
    const wrap = $('quickGrid');
    if (!wrap) return;
    wrap.innerHTML = '';
    const cat = QUICK_CATEGORIES[activeQuickCategory];
    if (!cat) return;
    cat.items.forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'quick-food';
      btn.type = 'button';
      btn.title = `${f.name} · ${f.kcal} ккал · Б${f.p} Ж${f.f} У${f.c}`;
      btn.innerHTML = `
        <span class="quick-food-emoji">${f.emoji}</span>
        <span class="quick-food-info">
          <span class="quick-food-name">${escapeHtml(f.name)}</span>
          <span class="quick-food-macros">Б${f.p} · Ж${f.f} · У${f.c}</span>
        </span>
        <span class="quick-food-kcal">${f.kcal}</span>
      `;
      btn.addEventListener('click', () => {
        const newMeal = {
          id: Date.now() + Math.random(),
          name: f.name,
          kcal: f.kcal,
          protein: f.p,
          fat: f.f,
          carbs: f.c,
          tags: [...(f.tags || [])],
        };
        setMeals([newMeal, ...getMeals()]);
        save();
        renderMeals();
        btn.animate([
          { transform: 'translateY(-2px) scale(1)' },
          { transform: 'translateY(-2px) scale(0.94)' },
          { transform: 'translateY(-2px) scale(1)' },
        ], { duration: 280, easing: 'ease-out' });
      });
      wrap.appendChild(btn);
    });
  }

  function initQuickAdd() {
    const toggle = $('quickToggle');
    const panel = $('quickPanel');
    const count = $('quickCount');
    if (!toggle || !panel) return;

    const total = QUICK_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);
    if (count) count.textContent = total;

    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.contains('open');
      panel.classList.toggle('open', !isOpen);
      toggle.classList.toggle('open', !isOpen);
    });

    renderQuickTabs();
    renderQuickGrid();
  }

  /* ============ Calculator ============ */
  function initCalculator() {
    const toggle = $('calcToggle');
    const panel = $('calcPanel');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
      panel.classList.toggle('hidden');
      toggle.classList.toggle('open');
    });

    const fields = ['calcKcal', 'calcP', 'calcF', 'calcC', 'calcGrams'];
    const values = () => ({
      k: num($('calcKcal').value),
      p: num($('calcP').value),
      f: num($('calcF').value),
      c: num($('calcC').value),
      g: num($('calcGrams').value),
    });

    function compute() {
      const { k, p, f, c, g } = values();
      const res = $('calcResult');
      const apply = $('calcApply');
      if (!g || !k) {
        res.textContent = '— ккал · Б 0 Ж 0 У 0';
        apply.disabled = true;
        return;
      }
      const m = g / 100;
      const round1 = x => Math.round(x * 10) / 10;
      res.textContent = `${Math.round(k * m)} ккал · Б ${round1(p * m)} Ж ${round1(f * m)} У ${round1(c * m)}`;
      apply.disabled = false;
    }

    fields.forEach(id => $(id).addEventListener('input', compute));

    $('calcApply').addEventListener('click', () => {
      const { k, p, f, c, g } = values();
      const m = g / 100;
      const round1 = x => Math.round(x * 10) / 10;
      $('mealKcal').value = Math.round(k * m);
      $('mealP').value = round1(p * m);
      $('mealF').value = round1(f * m);
      $('mealC').value = round1(c * m);
      $('mealName').focus();
    });
  }

  /* ============ Stars background ============ */
  function createStars() {
    const container = $('stars');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 90; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const isBig = Math.random() < 0.15;
      const size = isBig ? (2 + Math.random() * 1.8) : (1 + Math.random() * 1);
      star.style.width = size.toFixed(2) + 'px';
      star.style.height = size.toFixed(2) + 'px';
      star.style.left = (Math.random() * 100).toFixed(2) + '%';
      star.style.top = (Math.random() * 100).toFixed(2) + '%';
      star.style.setProperty('--dur', (14 + Math.random() * 28).toFixed(1) + 's');
      star.style.setProperty('--delay', (-Math.random() * 40).toFixed(1) + 's');
      star.style.setProperty('--tx', (Math.random() * 60 - 30).toFixed(1) + 'px');
      star.style.setProperty('--ty', (Math.random() * 60 - 30).toFixed(1) + 'px');
      star.style.setProperty('--op1', (0.25 + Math.random() * 0.4).toFixed(2));
      star.style.setProperty('--op2', (0.55 + Math.random() * 0.45).toFixed(2));
      container.appendChild(star);
    }
  }

  /* ============ Helpers ============ */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function num(v) {
    if (v === '' || v == null) return 0;
    const n = parseFloat(String(v).replace(',', '.'));
    return isNaN(n) || n < 0 ? 0 : n;
  }
  function shake(els) {
    els.forEach(el => {
      el.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
      ], { duration: 300, easing: 'ease-in-out' });
    });
  }

  /* ============ Theme ============ */
  function applyTheme() { document.documentElement.setAttribute('data-theme', state.theme); }
  $('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    save();
  });

  /* ============ Day nav ============ */
  $('prevDay').addEventListener('click', () => {
    state.currentDate = addDaysStr(state.currentDate, -1);
    state.editingId = null;
    renderDayLabel();
    renderMeals();
  });
  $('nextDay').addEventListener('click', () => {
    const t = todayStr();
    if (state.currentDate < t) {
      state.currentDate = addDaysStr(state.currentDate, 1);
      state.editingId = null;
      renderDayLabel();
      renderMeals();
    }
  });

  /* ============ Clear day ============ */
  let clearConfirm = false;
  let clearTimer = null;
  const clearBtn = $('clearDay');
  clearBtn.addEventListener('click', () => {
    if (!getMeals().length) return;
    if (!clearConfirm) {
      clearConfirm = true;
      clearBtn.classList.add('confirming');
      clearBtn.textContent = 'Точно? Нажмите ещё раз';
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => {
        clearConfirm = false;
        clearBtn.classList.remove('confirming');
        clearBtn.textContent = 'Очистить день';
      }, 3000);
      return;
    }
    clearConfirm = false;
    clearTimeout(clearTimer);
    clearBtn.classList.remove('confirming');
    clearBtn.textContent = 'Очистить день';
    setMeals([]);
    state.editingId = null;
    save();
    renderMeals();
  });

  /* ============ Profile events ============ */
  ['age', 'height', 'weight'].forEach(id => {
    $(id).addEventListener('input', e => {
      const v = parseFloat(e.target.value);
      if (!isNaN(v) && v > 0) { state.profile[id] = v; updateResult(); save(); }
    });
  });
  document.querySelectorAll('input[name="gender"]').forEach(r => {
    r.addEventListener('change', e => {
      state.profile.gender = e.target.value;
      updateResult();
      save();
    });
  });
  document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.activity-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      state.profile.activity = parseFloat(item.dataset.k);
      updateResult();
      save();
    });
  });

  /* ============ Goal select ============ */
  document.querySelectorAll('.goal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.goal-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      state.profile.goal = btn.dataset.goal;
      updateResult();
      save();
    });
  });

  /* ============ Chart range ============ */
  document.querySelectorAll('.chart-range').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-range').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      state.chartRange = parseInt(btn.dataset.range);
      renderChart();
      save();
    });
  });

  /* ============ Tag input ============ */
  $('tagInput').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = e.target.value.trim().toLowerCase().replace(/^#/, '');
      if (val && !state.pendingTags.includes(val)) {
        state.pendingTags.push(val);
        renderTagChips();
      }
      e.target.value = '';
    } else if (e.key === 'Backspace' && !e.target.value) {
      for (let i = state.pendingTags.length - 1; i >= 0; i--) {
        if (!PRESET_TAGS.includes(state.pendingTags[i])) {
          state.pendingTags.splice(i, 1);
          renderTagChips();
          break;
        }
      }
    }
  });

  /* ============ Add meal ============ */
  function addMeal() {
    const name = $('mealName').value.trim();
    const kcal = num($('mealKcal').value);
    if (!name || !kcal) { shake([$('mealName'), $('mealKcal')]); return; }
    const newMeal = {
      id: Date.now() + Math.random(),
      name,
      kcal,
      protein: num($('mealP').value),
      fat: num($('mealF').value),
      carbs: num($('mealC').value),
      tags: [...state.pendingTags],
    };
    setMeals([newMeal, ...getMeals()]);
    $('mealName').value = '';
    $('mealKcal').value = '';
    $('mealP').value = '';
    $('mealF').value = '';
    $('mealC').value = '';
    state.pendingTags = [];
    renderTagChips();
    renderMeals();
    save();
    $('mealName').focus();
  }
  $('addMeal').addEventListener('click', addMeal);
  ['mealName', 'mealKcal', 'mealP', 'mealF', 'mealC'].forEach(id => {
    $(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); addMeal(); }
    });
  });

  /* ============ Midnight check ============ */
  let lastToday = todayStr();
  setInterval(() => {
    const t = todayStr();
    if (t !== lastToday) {
      if (state.currentDate === lastToday) {
        state.currentDate = t;
        renderDayLabel();
        renderMeals();
      }
      lastToday = t;
      renderDayLabel();
      renderChart();
    }
  }, 30000);

  /* ============ Export / Import ============ */
  function exportData() {
    const payload = {
      app: 'calorie-calculator',
      version: 1,
      exportDate: new Date().toISOString(),
      theme: state.theme,
      profile: state.profile,
      mealsByDate: state.mealsByDate,
      favorites: state.favorites,
      chartRange: state.chartRange,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calorie-backup-${todayStr()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Файл сохранён');
  }

  async function importData(file) {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data || typeof data !== 'object') throw new Error('Неверный формат файла');

      const hasKnownKey = ['theme', 'profile', 'mealsByDate', 'favorites', 'chartRange']
        .some(k => k in data);
      if (!hasKnownKey) throw new Error('В файле нет данных калькулятора');

      if (!confirm('Импорт заменит все текущие данные (профиль, блюда, избранное, настройки).\n\nПродолжить?')) return;

      if (data.theme === 'light' || data.theme === 'dark') state.theme = data.theme;
      if (data.profile && typeof data.profile === 'object') {
        state.profile = Object.assign(
          { gender: 'male', age: 28, height: 178, weight: 72, activity: 1.55, goal: 'maintain' },
          data.profile
        );
      }
      if (data.mealsByDate && typeof data.mealsByDate === 'object') state.mealsByDate = data.mealsByDate;
      if (Array.isArray(data.favorites)) state.favorites = data.favorites;
      if (data.chartRange === 7 || data.chartRange === 30) state.chartRange = data.chartRange;

      save();

      // Переприменяем всё к UI
      applyTheme();
      applyProfileToUI();
      renderTagChips();
      renderFilters();
      renderFavorites();
      renderDayLabel();
      renderMeals();
      updateResult();

      showToast('Данные импортированы');
    } catch (err) {
      showToast('Ошибка импорта: ' + (err.message || 'неверный файл'));
    }
  }

  function showToast(text) {
    const toast = $('toast');
    toast.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = text;
    toast.appendChild(span);
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3000);
  }

  $('exportBtn').addEventListener('click', exportData);
  $('importBtn').addEventListener('click', () => $('importFile').click());
  $('importFile').addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (file) importData(file);
    e.target.value = '';
  });

  /* ============ Init ============ */
  function init() {
    load();
    applyTheme();
    createStars();
    applyProfileToUI();
    renderTagChips();
    initQuickAdd();
    initCalculator();
    renderFilters();
    renderFavorites();
    renderDayLabel();
    renderMeals();
    updateResult();
  }
  init();