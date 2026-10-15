(function () {
  // ---------- Data (from the restaurant's "Outdoor buffets" PDF) ----------
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

  var T = {
    en: {
      title: 'Terms and conditions with Price List – Qalat Al-Shahba Restaurants',
      brand: 'Qalat Al-Shahba Restaurants', langBtn: 'العربية', ariaLang: 'Switch language', back: '\u2190 Back to booking',
      h1: 'Terms and conditions with Price List',
      lead: 'Please read these terms and choose a package before you book. All prices are in Saudi riyals (SAR).',
      hTerms: 'Terms to know before booking',
      terms: [
        'The buffet does not include dining tables and chairs. A table set with 6 chairs starts from SAR 115 up to SAR 230 per table.',
        'For large buffets, some dishes may be repeated.',
        'Each buffet has a different heater size, from 4 litres up to 9 litres per heater, depending on the agreed number of guests.',
        'The dishes are international. The dishes are chosen from the menu according to the customer\'s preference.',
        'An order is confirmed only by transferring the deposit. Otherwise it is considered cancelled.',
        'Setting up the buffet at the venue takes from one and a half to two hours.',
        'A booking cannot be cancelled after it is confirmed. The customer may postpone it for up to one year at most.',
        'Communication is only with the phone number registered in the contract, and all arrangements are coordinated with that person.',
        'The minimum number of guests is set according to the area.',
        'The restaurant is not responsible for cleaning the dining hall, whether before the buffet is set up or after it ends.'
      ],
      hBuf: 'Buffet price list',
      bufNote: 'Every package includes water and soft drinks.',
      hDes: 'Dessert buffet price list',
      bufCols: ['Package', 'Price (SAR)', 'Main-dish heaters', 'Cold starters', 'Desserts', 'Also included'],
      desCols: ['Package', 'Price (SAR)', 'What is included'],
      guests: function (n) { return n + ' guests'; },
      heaters: function (n, l) { return n + ' \u00d7 ' + l + ' L'; },
      fruit: 'Fruit salad (silver tray)', none: '\u2014',
      cta: 'Back to the booking form',
      foot: 'Qalat Al-Shahba Restaurants \u00b7 Open daily 9 am to 11 pm \u00b7 Riyadh, Jeddah, Dammam and nearby \u00b7 hello@qalatalshahba.example'
    },
    ar: {
      title: 'الشروط والأحكام وقائمة الأسعار – مطاعم قلعة الشهباء',
      brand: 'مطاعم قلعة الشهباء', langBtn: 'English', ariaLang: 'تغيير اللغة', back: 'العودة إلى الحجز \u2192',
      h1: 'الشروط والأحكام وقائمة الأسعار',
      lead: 'يرجى قراءة هذه البنود واختيار الباقة المناسبة قبل الحجز. جميع الأسعار بالريال السعودي.',
      hTerms: 'بنود يجب معرفتها قبل الحجز',
      terms: [
        'البوفيه لا يشمل طاولات الطعام والكراسي، ويبدأ سعر الطاولة منسقة مع 6 كراسي من 115 ريال إلى 230 ريال للطاولة الواحدة.',
        'إذا كان البوفيه كبيراً قد تتكرر بعض الأصناف.',
        'لكل بوفيه حجم سخانات مختلف يبدأ من 4 لتر إلى 9 لتر للسخان الواحد، بناءً على عدد الأشخاص المتفق عليه.',
        'الأصناف انترناشونال. يتم اختيار الأصناف من المنيو حسب رغبة العميل.',
        'اعتماد الطلب يكون بتحويل العربون، خلاف ذلك يُعد لاغياً.',
        'يستغرق تجهيز البوفيه في الموقع من ساعة ونصف إلى ساعتين.',
        'لا يتم إلغاء الحجز بعد الاعتماد، ويحق للعميل التأجيل إلى حد سنة كحد أقصى.',
        'يكون التواصل مع الرقم المقيد في العقد فقط، وتنسيق جميع الأعمال معه.',
        'يتم تحديد الحد الأدنى للأشخاص حسب المنطقة.',
        'المطعم غير مسؤول عن نظافة قاعة الطعام سواءً قبل تجهيز البوفيه أو بعد انتهائه.'
      ],
      hBuf: 'قائمة أسعار البوفيهات',
      bufNote: 'جميع الباقات تشمل الماء والمشروبات الغازية.',
      hDes: 'قائمة أسعار بوفيهات الحلا',
      bufCols: ['الباقة', 'السعر (ريال)', 'سخانات الأطباق الرئيسية', 'المقبلات الباردة', 'الحلا', 'ويشمل أيضاً'],
      desCols: ['الباقة', 'السعر (ريال)', 'محتويات الباقة'],
      guests: function (n) { return n + ' شخص'; },
      heaters: function (n, l) { return n + ' \u00d7 ' + l + ' لتر'; },
      fruit: 'سلطة فواكه سيلفر', none: '\u2014',
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
        var td = el('td', cell.cls || null, cell.text);
        td.setAttribute('data-label', cols[i]);
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    tbl.appendChild(body);
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
    $('hTerms').textContent = t.hTerms; $('hBuf').textContent = t.hBuf; $('hDes').textContent = t.hDes;
    $('bufNote').textContent = t.bufNote; $('foot').textContent = t.foot;

    var ol = $('terms'); ol.innerHTML = '';
    t.terms.forEach(function (x) { ol.appendChild(el('li', null, x)); });

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
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  $('lang').addEventListener('click', function () { lang = lang === 'ar' ? 'en' : 'ar'; render(); });

  var q = (location.search.match(/[?&]lang=(ar|en)/) || [])[1], saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  lang = q || saved || ((navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en');
  render();
})();
