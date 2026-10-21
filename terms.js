(function () {
  // ---------- Price data (from the restaurant's "Outdoor buffets" PDF) ----------
  // [guests, price SAR, main-dish heaters, heater size (litres), cold starters, desserts, extra fruit salad tray (1/0)]
  var BUFFETS = [
    [25, 3250, 6, 4, 7, 6, 0],
    [30, 3600, 7, 4, 8, 7, 0],
    [35, 3900, 8, 4, 9, 8, 1],
    [40, 4600, 9, 4, 8, 9, 0],
    [50, 5200, 8, 6, 8, 8, 0],
    [55, 5500, 8, 6, 8, 9, 0],
    [60, 5900, 9, 6, 8, 9, 0],
    [70, 6500, 9, 6, 9, 9, 0],
    [80, 6900, 10, 6, 7, 8, 0],
    [90, 7500, 8, 9, 7, 8, 0],
    [100, 7900, 9, 9, 8, 8, 0],
    [120, 8500, 10, 9, 8, 9, 0],
    [140, 9200, 11, 9, 9, 9, 0],
    [160, 9900, 12, 9, 10, 10, 0],
    [180, 10500, 14, 9, 12, 10, 0],
    [200, 11500, 15, 9, 13, 11, 0],
    [220, 11900, 16, 9, 14, 12, 0],
    [250, 12500, 18, 9, 15, 13, 0],
    [280, 13700, 19, 9, 16, 13, 0],
    [300, 14500, 21, 9, 16, 13, 0],
    [320, 14950, 22, 9, 17, 13, 0],
    [360, 16900, 25, 9, 18, 14, 0],
    [400, 18500, 30, 9, 20, 16, 0],
    [450, 20700, 32, 9, 20, 18, 0],
    [500, 23000, 40, 9, 22, 20, 0]
  ];
  // Dessert buffets: [guests, price SAR, text in Arabic, text in English]
  var DESSERTS = [
    [120, 3750, '15 طبق حلا مشكل + 1 سيلفر مدرج فواكه + 2 سخان ام علي', '15 assorted dessert plates + 1 tiered silver fruit stand + 2 Om Ali heaters'],
    [160, 4200, '19 طبق حلا مشكل + 1 مستطيل سلطة فواكه + 3 ام علي', '19 assorted dessert plates + 1 rectangular fruit salad + 3 Om Ali'],
    [220, 4800, '23 طبق حلا مشكل + 2 سيلفر فواكه + 4 ام علي', '23 assorted dessert plates + 2 silver fruit trays + 4 Om Ali'],
    [300, 5750, '26 طبق حلا مشكل + 2 سيلفر فواكه + 1 مستطيل سلطة فواكه + 5 ام علي', '26 assorted dessert plates + 2 silver fruit trays + 1 rectangular fruit salad + 5 Om Ali']
  ];

  // VIP buffets: [guests, price SAR, main dishes, heater size (litres), starters, starter kind, desserts, included extras]
  var VIP = [
    [8, 1600, 5, 2, 3, 'app', 4, ['fruit', 'soft', 'bottle']],
    [9, 1800, 6, 2, 3, 'app', 4, ['fruit', 'soft', 'bottle']],
    [15, 2300, 4, 4, 5, 'salad', 5, ['omali', 'softN', 'waterN']],
    [20, 2800, 5, 4, 6, 'salad', 6, ['omali', 'softN', 'waterN']]
  ];

  // International menu for outdoor parties (from the restaurant's menu PDF). Items: [Arabic, English]; English null = keep the Arabic name.
  var MENU = [
    { id: "cold", ar: "المقبلات الباردة", en: "Cold appetizers", items: [
      ["حمص بالطحينه", "Hummus with tahini"],
      ["فتوش مع الخبز وزيت الزيتون", "Fattoush with bread and olive oil"],
      ["ورق عنب", "Grape leaves"],
      ["تبوله", "Tabbouleh"],
      ["خيار لبن", "Cucumber with yogurt"],
      ["متبل باذنجان باللبن", "Eggplant mutabbal with yogurt"],
      ["سلطة يونانية", "Greek salad"],
      ["سلطة منغولين", "Mongolian salad"],
      ["بابا غنوج بالباذنجان والخضار", "Baba ghanoush with eggplant and vegetables"],
      ["سلطة خضراء", "Green salad"],
      ["سلطة بروكلي", "Broccoli salad"],
      ["سلطة باستا بيستو", "Pesto pasta salad"],
      ["سلطه مايونيز روسية", "Russian mayonnaise salad"],
      ["سلطة شمندر", "Beetroot salad"],
      ["سلطة نيسواز", "Niçoise salad"],
      ["سلطة كيناوا", "Quinoa salad"],
      ["سلطة جرجير", "Arugula salad"],
      ["السلطة المغربية", "Moroccan salad"],
      ["سلطة بطاطس حراء", "Harra (spicy) potato salad"],
      ["سلطة سيزر", "Caesar salad"],
      ["سلطة شريمب قمبري كوكتيل", "Shrimp cocktail salad"],
      ["ديناميت شريم", "Dynamite shrimp"],
      ["سلطة بطاطس مع المايونيز", "Potato salad with mayonnaise"],
      ["سلطة إيطالي", "Italian salad"],
      ["سلطة افوكادو", "Avocado salad"],
      ["سلطه امريكانو", "Americano salad"],
      ["سلطة هاواي", "Hawaiian salad"],
      ["سلطة مكسيكي", "Mexican salad"],
      ["سلطة باستا", "Pasta salad"],
      ["سلطة مجدرة", "Mujaddara salad"],
      ["سلطة سائلة حارة", "Spicy liquid salad"]
    ] },
    { id: "hot", ar: "المقبلات الساخنة", en: "Hot appetizers", items: [
      ["سمبوبة دجاج", "Chicken sambousa"],
      ["كبة مقلية باللحم", "Fried kibbeh with meat"],
      ["سبنق رول", "Spring roll"],
      ["كبة مشوية باللحم", "Grilled kibbeh with meat"],
      ["أصابع جبن", "Cheese fingers"],
      ["فطاير مشكله صغيره", "Small mixed pies"]
    ] },
    { id: "soups", ar: "الشوربات الساخنة", en: "Soups", items: [
      ["شوربة عدس", "Lentil soup"],
      ["شوربة حريره", "Harira soup"],
      ["شوربة شوفان", "Oatmeal soup"],
      ["شوربة سيفود", "Seafood soup"],
      ["شوربة كريمة مشروم", "Cream of mushroom soup"]
    ] },
    { id: "main", ar: "الاطباق الرئيسة", en: "Main dishes", items: [
      ["مشويات عربي مشكله", "Mixed Arabic grills"],
      ["دجاج برياني", "Chicken biryani"],
      ["دجاج بالفرن", "Baked chicken"],
      ["معكرونة بالطماطم", "Pasta with tomatoes"],
      ["دجاج فرنسي", "Chicken Française"],
      ["بامية لحم", "Okra with meat"],
      ["شيش مشوي بالطريقة الهندية", "Indian-style grilled shish tawook"],
      ["كبة لبنية", "Kibbeh labneh"],
      ["دجاج جالفريزي", "Chicken jalfrezi"],
      ["سباغيتي بولونيز", "Spaghetti bolognese"],
      ["رز شعيرية", "Vermicelli rice"],
      ["معكرونة بشمل", "Pasta with béchamel"],
      ["الطبق الصيني بالدجاج", "Chinese chicken dish"],
      ["منسف لحم كبير (مبلغ إضافي حسب الطلب)", "Large meat mansaf (extra charge on request)"],
      ["تندوري دجاج", "Tandoori chicken"],
      ["رز صيادية مع سمك", "Sayadiyah rice with fish"],
      ["لازانيا", "Lasagna"],
      ["محاشي مشكلة", "Mixed stuffed vegetables"],
      ["دجاج ما سالا", "Chicken masala"],
      ["سمك ما سالا", "Fish masala"],
      ["فيليه دجاج مع الخضار", "Chicken fillet with vegetables"],
      ["جمبري كنافه", "Shrimp kunafa"],
      ["دجاج فيليه مشوي", "Grilled chicken fillet"],
      ["سمك فيليه صارمولا", "Sarmoula fish fillet"],
      ["ستروجانوف لحم البقر", "Beef stroganoff"],
      ["دجاج لولي بوب", "Lollipop chicken"],
      ["كسكي مغربي", "Moroccan couscous"],
      ["دجاج مشوي مع صلصة الليمون والثوم", "Roasted chicken with lemon and garlic sauce"],
      ["دجاج موغلاي", "Mughlai chicken"],
      ["داؤود باشا لحم", "Dawood Pasha (meat)"],
      ["معكرونة فيتوتشيني", "Fettuccine pasta"],
      ["رز كشري", "Koshari rice"],
      ["لحم ستيف", "Beef stew"],
      ["دجاج سوكا", "Chicken sukka"],
      ["دجاج مشوي 65", "Grilled chicken 65"],
      ["ارز بلو بالطريقة الهنديه", "Navratan pulao (Indian-style rice)"],
      ["برياني سمك", "Fish biryani"],
      ["كوسه باللبن", "Zucchini with yogurt"],
      ["مقلوبة", "Maqluba"],
      ["رز بيلاف", "Rice pilaf"],
      ["كبسة", "Kabsa"],
      ["قرصان", "Qursan"],
      ["دجاج بوت باي", "Chicken pot pie"],
      ["بطاطس كروكيت", "Potato croquettes"],
      ["باستا بيني اراتبيتا", "Penne arrabbiata pasta"],
      ["كباب اورفلي", "Orfali kebab"]
    ] },
    { id: "sweets", ar: "الحلويات", en: "Sweets", items: [
      ["تارت فواكه", "Fruit tart"],
      ["ام علي", "Om Ali"],
      ["مهلبيه", "Muhallabia (custard)"],
      ["بسبوسة", "Basbousa"],
      ["كيكة زعفران", "Saffron cake"],
      ["بانوراما فواكه مشكلة", "Mixed fruit panorama"],
      ["بلح الشام", "Balah al-Sham"],
      ["ميني كيك", "Mini cake"],
      ["جيلي", "Jelly"],
      ["رز بالحليب", "Rice pudding"],
      ["كيكه دائري", "Round cake"],
      ["جيلي فواكة", "Fruit jelly"],
      ["تورته فواكه ميني", "Mini fruit cake"],
      ["كيكة فواكه", "Fruit cake"],
      ["تشيز كيك", "Cheesecake"],
      ["كوب كريم كراميل", "Crème caramel cup"],
      ["سلطة فواكه", "Fruit salad"],
      ["كوب كريمة", "Cream cup"],
      ["كعكة الخمل", null],
      ["كوب كيك كبير بالكريمة", "Large cupcake with cream"],
      ["ريد بيلفت", "Red velvet cake"],
      ["موس تشيز كيك", "Mousse cheesecake"],
      ["فرود كبل", null],
      ["كريم بولي", null],
      ["براوني", "Brownie"],
      ["قطع حلوى إكلير", "Éclair pieces"],
      ["سويسرول", "Swiss roll"],
      ["باريس بيرست سانس", "Paris-Brest"]
    ] },
    { id: "drinks", ar: "المشروبات", en: "Drinks", items: [
      ["كينزا", "Kinza"],
      ["ماء", "Water"]
    ] }
  ];

  var T = {
    en: {
      title: 'Price List and Menu – Qalat Al-Shahba Restaurants',
      brand: 'Qalat Al-Shahba Restaurants', langBtn: 'العربية', ariaLang: 'Switch language', back: '\u2190 Back to booking',
      h1: 'Price List and Menu',
      lead: 'Choose a package and see the menu before you book. All prices are in Saudi riyals (SAR).',
      hMenu: 'Menu', menuSub: 'International menu for outdoor parties',
      menuNote: 'The dishes are chosen from this menu according to the customer\'s preference.', items: ' items',
      hBuf: 'Buffet price list',
      bufNote: 'Every package includes water and soft drinks.',
      hDes: 'Dessert buffet price list',
      bufCols: ['Package', 'Price (SAR)', 'Main-dish heaters', 'Cold starters', 'Desserts', 'Also included'],
      desCols: ['Package', 'Price (SAR)', 'What is included'],
      guests: function (n) { return n + ' guests'; },
      heaters: function (n, l) { return n + ' \u00d7 ' + l + ' L'; },
      fruit: 'Fruit salad (silver tray)', none: '\u2014',
      gateTitle: 'Enter your mobile number', gateSub: 'Enter your mobile number to see our price list and menu.',
      phone: 'Mobile number', gateBtn: 'View price list', gateBad: 'Enter a valid Saudi mobile number, like 05XXXXXXXX.',
      tabNormal: 'Normal Buffet', tabVip: 'VIP Buffet', tabsLabel: 'Buffet type',
      hVip: 'VIP buffet price list', vipNote: 'Ready-to-serve packages for small gatherings.',
      vipCols: ['Package', 'Price (SAR)', 'Main dishes', 'Appetizers / salads', 'Desserts', 'Also included'],
      app: function (n) { return n + ' appetizers'; }, salad: function (n) { return n + ' salads'; },
      ex: { fruit: 'Fruit salad', soft: 'Soft drinks', bottle: 'Bottled mineral water', omali: '1 Om Ali heater', softN: 'Soft drinks (by number of guests)', waterN: 'Water (by number of guests)' },
      sep: ' + ',
      cta: 'Back to the booking form',
      foot: 'Qalat Al-Shahba Restaurants \u00b7 Open daily 9 am to 11 pm \u00b7 Riyadh, Jeddah, Dammam and nearby \u00b7 hello@qalatalshahba.example'
    },
    ar: {
      title: 'قائمة الأسعار والمنيو – مطاعم قلعة الشهباء',
      brand: 'مطاعم قلعة الشهباء', langBtn: 'English', ariaLang: 'تغيير اللغة', back: 'العودة إلى الحجز \u2192',
      h1: 'قائمة الأسعار والمنيو',
      lead: 'يرجى اختيار الباقة المناسبة والاطلاع على المنيو قبل الحجز. جميع الأسعار بالريال السعودي.',
      hMenu: 'المنيو', menuSub: 'المنيو العالمي للحفلات الخارجية',
      menuNote: 'يتم اختيار الأصناف من المنيو حسب رغبة العميل.', items: ' صنف',
      hBuf: 'قائمة أسعار البوفيهات',
      bufNote: 'جميع الباقات تشمل الماء والمشروبات الغازية.',
      hDes: 'قائمة أسعار بوفيهات الحلا',
      bufCols: ['الباقة', 'السعر (ريال)', 'سخانات الأطباق الرئيسية', 'المقبلات الباردة', 'الحلا', 'ويشمل أيضاً'],
      desCols: ['الباقة', 'السعر (ريال)', 'محتويات الباقة'],
      guests: function (n) { return n + ' شخص'; },
      heaters: function (n, l) { return n + ' \u00d7 ' + l + ' لتر'; },
      fruit: 'سلطة فواكه سيلفر', none: '\u2014',
      gateTitle: 'أدخل رقم جوالك', gateSub: 'أدخل رقم جوالك للاطلاع على قائمة الأسعار والمنيو.',
      phone: 'رقم الجوال', gateBtn: 'عرض قائمة الأسعار', gateBad: 'أدخل رقم جوال سعودي صحيح، مثل 05XXXXXXXX.',
      tabNormal: 'البوفيه العادي', tabVip: 'بوفيه VIP', tabsLabel: 'نوع البوفيه',
      hVip: 'قائمة أسعار بوفيه VIP', vipNote: 'باقات جاهزة للتجمعات الصغيرة.',
      vipCols: ['الباقة', 'السعر (ريال)', 'الأطباق الرئيسية', 'المقبلات / السلطات', 'الحلا', 'ويشمل أيضاً'],
      app: function (n) { return n + ' مقبلات'; }, salad: function (n) { return n + ' سلطة'; },
      ex: { fruit: 'سلطة فواكه', soft: 'مشروبات غازية', bottle: 'مياه معدنية قزاز', omali: '1 سخان ام علي', softN: 'مشروبات غازية بحسب العدد', waterN: 'مياه بحسب العدد' },
      sep: '، ',
      cta: 'العودة إلى نموذج الحجز',
      foot: 'مطاعم قلعة الشهباء \u00b7 نعمل يومياً من 9 صباحاً حتى 11 مساءً \u00b7 الرياض وجدة والدمام وما حولها \u00b7 hello@qalatalshahba.example'
    }
  };

  var lang = 'en';
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function money(n) { return Number(n).toLocaleString('en-US'); }

  function table(tbl, cols, rows) {
    tbl.innerHTML = '';
    var thead = el('thead'), hr = el('tr');
    cols.forEach(function (c) { hr.appendChild(el('th', null, c)); });
    thead.appendChild(hr); tbl.appendChild(thead);
    var body = el('tbody');
    rows.forEach(function (r) {
      var tr = el('tr');
      r.forEach(function (cell, i) {
        var td = el('td', ((cell.cls || '') + (cell.text === '\u2014' ? ' dash' : '')).trim() || null, cell.text);
        td.setAttribute('data-label', cols[i]);
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    tbl.appendChild(body);
  }

  // One name with its translation underneath (current language first)
  function nameBlock(ar, en, cls) {
    var primaryAr = lang === 'ar' || !en, wrap = el('span', cls + ' nm');
    var main = el('bdi', null, primaryAr ? ar : en); main.setAttribute('dir', primaryAr ? 'rtl' : 'ltr'); wrap.appendChild(main);
    if (en) {
      var sub = el('span', 'sub'), s = el('bdi', null, primaryAr ? en : ar); s.setAttribute('dir', primaryAr ? 'ltr' : 'rtl');
      sub.appendChild(s); wrap.appendChild(sub);
    }
    return wrap;
  }
  function renderMenu(t) {
    $('hMenu').textContent = t.hMenu; $('menuSub').textContent = t.menuSub; $('menuNote').textContent = t.menuNote;
    var nav = $('menuNav'), body = $('menuBody'); nav.innerHTML = ''; body.innerHTML = '';
    MENU.forEach(function (c) {
      var name = lang === 'ar' ? c.ar : c.en;
      var chip = el('a', 'chip', name + ' · ' + c.items.length); chip.href = '#cat-' + c.id; nav.appendChild(chip);
      var box = el('div', 'cat'); box.id = 'cat-' + c.id;
      var h3 = el('h3'); h3.appendChild(nameBlock(c.ar, c.en, 'cname'));
      h3.appendChild(el('span', 'cnt', c.items.length + t.items)); box.appendChild(h3);
      var ul = el('ul', 'items');
      c.items.forEach(function (it) { var li = el('li'); li.appendChild(nameBlock(it[0], it[1], 'iname')); ul.appendChild(li); });
      box.appendChild(ul); body.appendChild(box);
    });
  }

  function render() {
    var t = T[lang], h = document.documentElement;
    h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
    $('brand').textContent = t.brand;
    $('lang').textContent = t.langBtn; $('lang').setAttribute('aria-label', t.ariaLang);
    $('back').textContent = t.back; $('back').href = 'index.html?lang=' + lang + '#book';
    $('cta').textContent = t.cta; $('cta').href = 'index.html?lang=' + lang + '#book';
    $('h1').textContent = t.h1; $('lead').textContent = t.lead;
    $('hBuf').textContent = t.hBuf; $('hDes').textContent = t.hDes;
    $('bufNote').textContent = t.bufNote; $('foot').textContent = t.foot;
    renderMenu(t);
    $('hVip').textContent = t.hVip; $('vipNote').textContent = t.vipNote;
    $('gateTitle').textContent = t.gateTitle; $('gateSub').textContent = t.gateSub;
    $('gatePhoneL').textContent = t.phone; $('gateBtn').textContent = t.gateBtn;
    $('tabNormal').textContent = t.tabNormal; $('tabVip').textContent = t.tabVip;
    $('tabs').setAttribute('aria-label', t.tabsLabel);
    if (gateErrKey) { $('gateErr').textContent = t[gateErrKey]; }

    table($('bufTable'), t.bufCols, BUFFETS.map(function (b) {
      return [
        { text: t.guests(b[0]), cls: 'pkg' }, { text: money(b[1]), cls: 'price num' },
        { text: t.heaters(b[2], b[3]), cls: 'num' }, { text: String(b[4]), cls: 'num' }, { text: String(b[5]), cls: 'num' },
        { text: b[6] ? t.fruit : t.none }
      ];
    }));
    table($('desTable'), t.desCols, DESSERTS.map(function (d) {
      return [{ text: t.guests(d[0]), cls: 'pkg' }, { text: money(d[1]), cls: 'price num' }, { text: lang === 'ar' ? d[2] : d[3] }];
    }));
    table($('vipTable'), t.vipCols, VIP.map(function (v) {
      return [
        { text: t.guests(v[0]), cls: 'pkg' }, { text: money(v[1]), cls: 'price num' },
        { text: t.heaters(v[2], v[3]), cls: 'num' }, { text: t[v[5]](v[4]), cls: 'num' }, { text: String(v[6]), cls: 'num' },
        { text: v[7].map(function (k) { return t.ex[k]; }).join(t.sep) }
      ];
    }));
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  // ---------- Mobile number gate + Normal / VIP tabs ----------
  var gateErrKey = '';
  function showTab(which) {
    var vip = which === 'vip';
    $('pNormal').hidden = vip; $('pVip').hidden = !vip;
    $('tabNormal').classList.toggle('on', !vip); $('tabVip').classList.toggle('on', vip);
    $('tabNormal').setAttribute('aria-selected', String(!vip)); $('tabVip').setAttribute('aria-selected', String(vip));
  }
  function unlock() { $('gate').hidden = true; $('content').hidden = false; $('lead').hidden = false; }
  $('tabNormal').addEventListener('click', function () { showTab('normal'); });
  $('tabVip').addEventListener('click', function () { showTab('vip'); });
  $('gateForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var raw = $('gatePhone').value, digits = raw.replace(/\D/g, '');
    if (!/^(00966|966|0)?5[0-9]{8}$/.test(digits)) {
      gateErrKey = 'gateBad'; $('gateErr').textContent = T[lang].gateBad; $('gateErr').hidden = false; $('gatePhone').focus(); return;
    }
    gateErrKey = ''; $('gateErr').hidden = true;
    try { sessionStorage.setItem('plPhone', digits); } catch (x) {}
    unlock();
  });

  $('lang').addEventListener('click', function () { lang = lang === 'ar' ? 'en' : 'ar'; render(); });

  var q = (location.search.match(/[?&]lang=(ar|en)/) || [])[1], saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  lang = q || saved || ((navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en');
  render();
  var known = null;
  try { known = sessionStorage.getItem('plPhone'); } catch (e) {}
  if (known) unlock(); else $('lead').hidden = true;
})();
