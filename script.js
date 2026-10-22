(function () {
  // English text is read from index.html itself; only Arabic is listed here.
  var AR = {
    title: 'مطاعم قلعة الشهباء – تقديم الطعام خارج المنزل',
    logo: 'مطاعم قلعة الشهباء',
    h1: 'نطبخ في موقع مناسبتك، ليصل كل طبق ساخناً.',
    lead: 'أعراس ولقاءات عائلية وإفطارات رمضان وفعاليات الشركات. أخبرنا بالمكان والموعد، وسيصل فريقنا بالمطبخ والعمال والطعام.',
    f1t: 'الطبخ في موقعك',
    f1d: 'لدينا أفضل الطباخين على مستوى عالمي يتناسب مع جميع الأذواق العالمية العربية والاسيوية الأوربية والأيطالية',
    f2t: 'من 25 إلى 2,000 ضيف',
    f2d: 'قوائم الطعام وعدد العمال بحسب حجم مناسبتك.',
    f3t: 'نرد عليك خلال 24 ساعة',
    f3d: 'نؤكد معك القائمة والسعر والموعد بالاتصال.',
    bookTitle: 'احجز مناسبتك',
    bookSub: 'عبّئ البيانات أدناه وسنتصل بك للتأكيد.',
    lgYou: 'بياناتك',
    name: 'الاسم الكامل',
    phone: 'رقم الجوال',
    idno: 'رقم الهوية الوطنية أو الإقامة',
    calType: 'نوع التقويم',
    calG: 'ميلادي',
    calH: 'هجري',
    day: 'اليوم',
    month: 'الشهر',
    year: 'السنة',
    lgBuffet: 'نوع البوفيه', buffet: 'اختر نوع البوفيه', buffetOrd: 'بوفيه عادي', buffetVip: 'بوفيه VIP', sBuffet: 'نوع البوفيه', pkg: 'اختر الباقة', choosePkg: 'اختر الباقة', pkgBuf: 'باقات البوفيه', pkgDes: 'بوفيهات الحلا فقط', pkgVip: 'باقات VIP', sPackage: 'الباقة', pkgPrice: 'سعر الباقة (ريال)',
    lgWhen: 'اليوم والوقت',
    date: 'تاريخ المناسبة',
    time: 'وقت تقديم الطعام',
    lgWhere: 'موقع الحفلة',
    address: 'عنوان المكان',
    addressPh: 'اسم المكان، الشارع، أقرب معلم',
    city: 'المدينة',
    chooseCity: 'اختر المدينة',
    postal: 'الرمز البريدي (اختياري)',
    lgEvent: 'مناسبتك',
    type: 'نوع المناسبة',
    choose: 'اختر',
    wedding: 'زواج',
    birthday: 'عيد ميلاد',
    family: 'لقاء عائلي',
    iftar: 'إفطار رمضان',
    corporate: 'فعالية شركة',
    other: 'أخرى',
    guests: 'عدد الضيوف',
    food: 'نوع القائمة',
    rice: 'كبسة ومندي',
    grill: 'مشويات ومضبي',
    both: 'الاثنان معاً',
    notes: 'هل هناك شيء آخر نحتاج معرفته؟',
    notesPh: 'أطباق خاصة، حساسية، وقت التجهيز',
    submit: 'أرسل طلب الحجز',
    termsBtn: 'اقرأ الشروط والأحكام أولاً، قبل أن تحجز مناسبتك',
    trackLink: 'هل حجزت من قبل؟ تحقق من حالة حجزك', trackTitle: 'تحقق من حجزك',
    trackSub: 'أدخل رقم الجوال الذي استخدمته عند الحجز لعرض تفاصيل حجزك وحالته.', trackBtn: 'تحقق',
    trackWorking: 'جارٍ البحث...', trackBad: 'أدخل رقم جوال سعودي صحيح، مثل 05XXXXXXXX.',
    trackNone: 'لم نجد حجزاً بهذا الرقم. تأكد من الرقم الذي استخدمته عند الحجز.',
    trackMany: 'عدد محاولات البحث كبير. حاول مرة أخرى بعد 15 دقيقة.',
    trackErr: 'تعذر الاتصال. تحقق من الإنترنت وحاول مرة أخرى.', trackCount: 'عدد الحجوزات: ',
    st_new: 'قيد المراجعة', st_confirmed: 'مؤكد', st_completed: 'مكتمل', st_cancelled: 'ملغي',
    sm_new: 'استلمنا طلبك وسنتصل بك قريباً للتأكيد.', sm_confirmed: 'تم تأكيد حجزك. نتشرف بخدمتكم في الموعد المحدد.',
    sm_completed: 'تمت خدمة هذا الحجز. شكراً لاختياركم لنا.', sm_cancelled: 'تم إلغاء هذا الحجز. للاستفسار يرجى التواصل معنا.',
    tkDate: 'التاريخ', tkEvent: 'المناسبة', tkMenu: 'القائمة', tkPlace: 'الموقع',
    agBtnSign: 'عرض العقد والتوقيع', agBtnView: 'عرض العقد', agSigned: 'تم توقيع العقد',
    agWhy: 'حفاظاً على خصوصيتك، أدخل رقم هويتك الوطنية أو إقامتك لفتح العقد.', agOpen: 'فتح العقد', agOpening: 'جارٍ فتح العقد...',
    agBadId: 'أدخل رقم هوية أو إقامة صحيحاً مكوناً من 10 أرقام.', agMismatch: 'البيانات المدخلة لا تطابق سجلاتنا.',
    agNotReady: 'العقد غير جاهز بعد. سنتواصل معك بعد استكمال بيانات الحجز.',
    agMany: 'محاولات خاطئة كثيرة. حاول مرة أخرى بعد 15 دقيقة.', agPopup: 'يرجى السماح بالنوافذ المنبثقة لهذه الصفحة ثم المحاولة مرة أخرى.',
    note: 'هذا ليس دفعاً. نؤكد السعر بعد الاتصال بك.',
    doneTitle: 'تم استلام طلبك',
    doneSub: 'سنتصل بك على الرقم أدناه خلال 24 ساعة.',
    again: 'حجز جديد',
    menusTitle: 'ما نحضره إلى موقعك',
    m1t: 'كبسة ومندي',
    m1d: 'أرز مطبوخ ببطء مع لحم الضأن أو الدجاج أو الإبل، يُقدَّم في صواني كبيرة للجميع.',
    m2t: 'مشويات ومضبي',
    m2d: 'مشاوي مشكلة ومضبي ومطبق تُحضَّر في الموقع على الفحم.',
    m3t: 'قهوة وتمر وحلويات',
    m3d: 'ضيافة قهوة عربية وشاي مع تمر طازج وكنافة ولقيمات لضيوفك.',
    stepsTitle: 'كيف نعمل',
    s1n: 'الخطوة 1', s1t: 'أرسل بياناتك', s1d: 'أرسل التاريخ والوقت والمكان عبر النموذج.',
    s2n: 'الخطوة 2', s2t: 'نتصل بك', s2d: 'نتفق معك على القائمة والسعر، ثم نأخذ دفعة مقدمة صغيرة.',
    s3n: 'الخطوة 3', s3t: 'نصل ونقدّم', s3d: 'يجهّز فريقنا المكان ويطبخ ويقدّم الطعام ثم ينظّف.',
    foot: 'مطاعم قلعة الشهباء لتقديم الطعام خارج المنزل · نعمل يومياً من 9 صباحاً حتى 11 مساءً · الرياض وجدة والدمام وما حولها · hello@qalatalshahba.example',
    sName: 'الاسم', sPhone: 'الجوال', sWhen: 'اليوم والوقت', sWhere: 'الموقع', sEvent: 'المناسبة', sFood: 'القائمة',
    guestsWord: 'ضيف', sRef: 'رقم الحجز', sending: 'جارٍ الإرسال...', errSend: 'تعذّر إرسال الطلب. تحقق من الاتصال وحاول مرة أخرى، أو اتصل بنا.', errConfig: 'لم يتم ربط قاعدة البيانات بعد. أضف مفتاح Supabase في ملف index.html.', sId: 'الهوية / الإقامة', eqH: 'التاريخ الهجري: ', eqG: 'التاريخ الميلادي: ', ariaLang: 'تغيير اللغة', langBtn: 'English'
  };
  var EN = { trackWorking: 'Searching...', trackBad: 'Enter a valid Saudi mobile number, like 05XXXXXXXX.',
    trackNone: 'We could not find a booking with this number. Check the number you used when booking.',
    trackMany: 'Too many searches. Please try again in 15 minutes.',
    trackErr: 'Could not connect. Check your internet and try again.', trackCount: 'Bookings found: ',
    st_new: 'Under review', st_confirmed: 'Confirmed', st_completed: 'Completed', st_cancelled: 'Cancelled',
    sm_new: 'We received your request and will call you soon to confirm.', sm_confirmed: 'Your booking is confirmed. We look forward to serving you.',
    sm_completed: 'This booking has been served. Thank you for choosing us.', sm_cancelled: 'This booking was cancelled. Please contact us if you have a question.',
    tkDate: 'Date', tkEvent: 'Event', tkMenu: 'Menu', tkPlace: 'Location',
    agBtnSign: 'View and sign agreement', agBtnView: 'View agreement', agSigned: 'Agreement signed',
    agWhy: 'For your privacy, enter your Saudi ID or Iqama number to open your agreement.', agOpen: 'Open agreement', agOpening: 'Opening the agreement...',
    agBadId: 'Enter a valid 10-digit Saudi ID or Iqama number.', agMismatch: 'These details do not match our records.',
    agNotReady: 'Your agreement is not ready yet. We will contact you once your booking details are completed.',
    agMany: 'Too many wrong attempts. Please try again in 15 minutes.', agPopup: 'Please allow pop-ups for this page, then try again.',
    sName: 'Name', sPhone: 'Mobile', sId: 'Saudi ID / Iqama', sWhen: 'Day and time', sWhere: 'Location',
    sEvent: 'Event', sFood: 'Menu', sBuffet: 'Buffet type', pkgBuf: 'Buffet packages', pkgDes: 'Dessert-only buffets', pkgVip: 'VIP packages', sPackage: 'Package', sRef: 'Booking number', sending: 'Sending...', errSend: 'We could not send your request. Check your connection and try again, or call us.', errConfig: 'The database is not connected yet. Add your Supabase key in index.html.', guestsWord: 'guests', ariaLang: 'Switch language', langBtn: 'العربية',
    eqH: 'Hijri date: ', eqG: 'Gregorian date: ', title: document.title };

  var textNodes = document.querySelectorAll('[data-i18n]');
  var phNodes = document.querySelectorAll('[data-i18n-ph]');
  textNodes.forEach(function (el) { EN[el.dataset.i18n] = EN[el.dataset.i18n] || el.textContent; });
  phNodes.forEach(function (el) { EN[el.dataset.i18nPh] = el.getAttribute('placeholder'); });

  var lang = 'en', HIJRI = 'islamic-umalqura';
  var form = document.getElementById('form'), box = document.getElementById('confirm'),
      sum = document.getElementById('summary'), dateIn = document.getElementById('date'),
      cal = document.getElementById('cal'), gBox = document.getElementById('gBox'),
      hBox = document.getElementById('hBox'), hd = document.getElementById('hd'),
      hm = document.getElementById('hm'), hy = document.getElementById('hy'),
      equiv = document.getElementById('equiv'), btn = document.getElementById('lang');

  function t(k) { return (lang === 'ar' ? AR : EN)[k]; }
  function loc(c) { return (lang === 'ar' ? 'ar-SA' : 'en-GB') + '-u-ca-' + c + '-nu-latn'; }
  function fmt(d, c) {
    return new Intl.DateTimeFormat(loc(c), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  }

  // ----- Hijri calendar: the next 750 days with their Hijri day/month/year -----
  var hp = new Intl.DateTimeFormat('en-u-ca-' + HIJRI + '-nu-latn', { day: 'numeric', month: 'numeric', year: 'numeric' });
  var days = [], now = new Date();
  for (var i = 0; i < 750; i++) {
    var d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 12), o = {};
    hp.formatToParts(d0).forEach(function (p) {
      if (p.type === 'day' || p.type === 'month' || p.type === 'year') o[p.type] = parseInt(p.value, 10);
    });
    days.push({ d: d0, y: o.year, m: o.month, day: o.day });
  }
  function uniq(a) { return a.filter(function (v, k) { return a.indexOf(v) === k; }); }
  function fill(sel, items, val) {
    sel.innerHTML = '';
    items.forEach(function (it) {
      var op = document.createElement('option');
      op.value = it.v; op.textContent = it.t; if (it.v === val) op.selected = true;
      sel.appendChild(op);
    });
  }
  function monthName(y, m) {
    var e = days.filter(function (x) { return x.y === y && x.m === m; })[0];
    return new Intl.DateTimeFormat(loc(HIJRI), { month: 'long' }).format(e.d);
  }
  function renderHijri() {
    var y = +hy.value, m = +hm.value, d = +hd.value;
    var ys = uniq(days.map(function (x) { return x.y; }));
    if (ys.indexOf(y) < 0) y = ys[0];
    fill(hy, ys.map(function (v) { return { v: v, t: String(v) }; }), y);
    var ms = uniq(days.filter(function (x) { return x.y === y; }).map(function (x) { return x.m; }));
    if (ms.indexOf(m) < 0) m = ms[0];
    fill(hm, ms.map(function (v) { return { v: v, t: monthName(y, v) }; }), m);
    var ds = days.filter(function (x) { return x.y === y && x.m === m; }).map(function (x) { return x.day; });
    if (ds.indexOf(d) < 0) d = ds[0];
    fill(hd, ds.map(function (v) { return { v: v, t: String(v) }; }), d);
  }
  function chosenDate() {
    if (cal.value === 'G') return dateIn.value ? new Date(dateIn.value + 'T12:00:00') : null;
    var y = +hy.value, m = +hm.value, d = +hd.value;
    var e = days.filter(function (x) { return x.y === y && x.m === m && x.day === d; })[0];
    return e ? e.d : null;
  }
  function refreshDate() {
    var d = chosenDate();
    equiv.textContent = d ? (cal.value === 'G' ? t('eqH') + fmt(d, HIJRI) : t('eqG') + fmt(d, 'gregory')) : '';
  }
  function setCal() {
    var h = cal.value === 'H';
    gBox.hidden = h; hBox.hidden = !h;
    dateIn.disabled = h; dateIn.required = !h;
    [hd, hm, hy].forEach(function (s) { s.disabled = !h; s.required = h; });
    if (h) renderHijri();
    refreshDate();
  }

  // ----- Language -----
  // ----- Ordinary Buffet packages (from the price list) -----
  // [guests, price SAR, main-dish heaters, heater size (litres), cold appetizers, desserts, silver fruit salad included]
  var PKG_B = [
    [25, 3250, 6, 4, 7, 6, 0], [30, 3600, 7, 4, 8, 7, 0], [35, 3900, 8, 4, 9, 8, 1], [40, 4600, 9, 4, 8, 9, 0], [50, 5200, 8, 6, 8, 8, 0],
    [55, 5500, 8, 6, 8, 9, 0], [60, 5900, 9, 6, 8, 9, 0], [70, 6500, 9, 6, 9, 9, 0], [80, 6900, 10, 6, 7, 8, 0], [90, 7500, 8, 9, 7, 8, 0],
    [100, 7900, 9, 9, 8, 8, 0], [120, 8500, 10, 9, 8, 9, 0], [140, 9200, 11, 9, 9, 9, 0], [160, 9900, 12, 9, 10, 10, 0],
    [180, 10500, 14, 9, 12, 10, 0], [200, 11500, 15, 9, 13, 11, 0], [220, 11900, 16, 9, 14, 12, 0], [250, 12500, 18, 9, 15, 13, 0],
    [280, 13700, 19, 9, 16, 13, 0], [300, 14500, 21, 9, 16, 13, 0], [320, 14950, 22, 9, 17, 13, 0], [360, 16900, 25, 9, 18, 14, 0],
    [400, 18500, 30, 9, 20, 16, 0], [450, 20700, 32, 9, 20, 18, 0], [500, 23000, 40, 9, 22, 20, 0]
  ];
  // [guests, price SAR, what is served in Arabic, what is served in English]
  var PKG_D = [
    [120, 3750, '15 طبق حلا مشكل + 1 سيلفر مدرج فواكه + 2 سخان ام علي', '15 assorted dessert plates + 1 tiered silver fruit stand + 2 Om Ali heaters'],
    [160, 4200, '19 طبق حلا مشكل + 1 مستطيل سلطة فواكه + 3 ام علي', '19 assorted dessert plates + 1 rectangular fruit salad + 3 Om Ali'],
    [220, 4800, '23 طبق حلا مشكل + 2 سيلفر فواكه + 4 ام علي', '23 assorted dessert plates + 2 silver fruit trays + 4 Om Ali'],
    [300, 5750, '26 طبق حلا مشكل + 2 سيلفر فواكه + 1 مستطيل سلطة فواكه + 5 ام علي', '26 assorted dessert plates + 2 silver fruit trays + 1 rectangular fruit salad + 5 Om Ali']
  ];
  // VIP packages: [guests, price SAR, what is served in Arabic, what is served in English]
  var PKG_V = [
    [8, 1600, '5 طبق رئيسي مقاس سمول 2 لتر + 3 مقبلات + 4 حلويات + سلطة فواكه + مشروبات غازية + مياه معدنية قزاز',
      '5 main dishes (small, 2 L) + 3 appetizers + 4 desserts + fruit salad + soft drinks + bottled mineral water'],
    [9, 1800, '6 طبق رئيسي مقاس سمول 2 لتر + 3 مقبلات + 4 حلويات + سلطة فواكه + مشروبات غازية + مياه معدنية قزاز',
      '6 main dishes (small, 2 L) + 3 appetizers + 4 desserts + fruit salad + soft drinks + bottled mineral water'],
    [15, 2300, '4 طبق رئيسي مقاس 4 لتر + 1 سخان ام علي + 5 سلطة + 5 حلا + مشروبات غازية بحسب العدد + مياه بحسب العدد',
      '4 main dishes (4 L) + 1 Om Ali heater + 5 salads + 5 desserts + soft drinks (by number of guests) + water (by number of guests)'],
    [20, 2800, '5 طبق رئيسي مقاس 4 لتر + 1 سخان ام علي + 6 سلطة + 6 حلا + مشروبات غازية بحسب العدد + مياه بحسب العدد',
      '5 main dishes (4 L) + 1 Om Ali heater + 6 salads + 6 desserts + soft drinks (by number of guests) + water (by number of guests)']
  ];
  var pkgBox = document.getElementById('pkgBox'), pkgSel = form.elements['package'], bufSel = form.elements['buffet'], pkgInfo = document.getElementById('pkgInfo');
  function pkgFind(code) {
    var n = +code.slice(1), p = null;
    ({ D: PKG_D, V: PKG_V }[code.charAt(0)] || PKG_B).forEach(function (x) { if (x[0] === n) p = x; });
    return p;
  }
  // "25 guests – SAR 3,250 – 6 main-dish heaters (4 L) + 7 cold appetizers + ..."  (full = also say "Dessert buffet" for dessert-only ones)
  function pkgLabel(code, l, full) {
    var k = code.charAt(0), d = k === 'D', n = +code.slice(1), p = pkgFind(code), ar = l === 'ar';
    if (!p) return '';
    var money = p[1].toLocaleString('en-US'), what;
    if (d || k === 'V') what = ar ? p[2] : p[3];
    else if (ar) what = p[2] + ' سخانات اطباق رئيسية حجم ' + p[3] + ' لتر + ' + p[4] + ' مقبلات باردة + ' + p[5] + ' حلا + الماء والمشروبات الغازية' + (p[6] ? ' + سلطة فواكه سيلفر' : '');
    else what = p[2] + ' main-dish heaters (' + p[3] + ' L) + ' + p[4] + ' cold appetizers + ' + p[5] + ' desserts + water and soft drinks' + (p[6] ? ' + silver fruit salad' : '');
    if (ar) return (d && full ? 'بوفيه حلا – ' : '') + n + (n <= 10 ? ' أشخاص – ' : ' شخص – ') + money + ' ريال – ' + what;
    return (d && full ? 'Dessert buffet – ' : '') + n + ' guests – SAR ' + money + ' – ' + what;
  }
  // the closed dropdown cuts long text short, so the chosen package is also written out in full under it
  function updInfo() {
    var v = pkgSel.value;
    pkgInfo.textContent = v ? pkgLabel(v, lang, true) : '';
    pkgInfo.hidden = !v || pkgBox.hidden;
    var p = v ? pkgFind(v) : null, shown = !!p && !pkgBox.hidden;
    document.getElementById('pkgPrice').value = shown ? p[1].toLocaleString('en-US') : '';
    document.getElementById('priceBox').hidden = !shown;
  }
  // choosing a package fills in the number of guests (the customer can still change it)
  pkgSel.addEventListener('change', function () {
    var p = pkgSel.value ? pkgFind(pkgSel.value) : null;
    if (p) form.elements['guests'].value = p[0];
    updInfo();
  });
  function buildPkg() {
    var keep = pkgSel.value;
    while (pkgSel.options.length > 1) pkgSel.remove(1);
    var groups = bufSel.value === 'VIP' ? [['pkgVip', PKG_V, 'V']] : [['pkgBuf', PKG_B, 'B'], ['pkgDes', PKG_D, 'D']];
    groups.forEach(function (g) {
      var og = document.createElement('optgroup'); og.label = t(g[0]);
      g[1].forEach(function (p) {
        var o = document.createElement('option'); o.value = g[2] + p[0]; o.textContent = pkgLabel(o.value, lang, false); og.appendChild(o);
      });
      pkgSel.appendChild(og);
    });
    pkgSel.value = keep; updInfo();
  }
  // the package list only appears (and is only required) for the Ordinary Buffet
  function togglePkg() {
    var on = bufSel.value === 'Ordinary' || bufSel.value === 'VIP';
    pkgBox.hidden = !on; pkgSel.disabled = !on;
    form.elements['guests'].min = bufSel.value === 'VIP' ? 8 : 10; // VIP packages start at 8 guests
    if (on) buildPkg(); else pkgSel.value = '';
    updInfo();
  }
  bufSel.addEventListener('change', togglePkg);

  function setLang(l) {
    lang = l;
    var h = document.documentElement;
    h.lang = l; h.dir = l === 'ar' ? 'rtl' : 'ltr';
    textNodes.forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    buildPkg();
    phNodes.forEach(function (el) { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
    document.title = t('title');
    btn.textContent = t('langBtn');
    btn.setAttribute('aria-label', t('ariaLang'));
    var tl = document.getElementById('termsLink'); if (tl) tl.href = 'terms.html?lang=' + l + '#conditions';
    if (cal.value === 'H') renderHijri();
    refreshDate();
    if (typeof trackShow === 'function' && trackData) trackShow();
    try { localStorage.setItem('lang', l); } catch (e) {}
  }

  // Minimum Gregorian date = today
  var todayLocal = new Date(); todayLocal.setMinutes(todayLocal.getMinutes() - todayLocal.getTimezoneOffset());
  dateIn.min = todayLocal.toISOString().slice(0, 10);

  function label(name) { return form.elements[name].selectedOptions[0].textContent; }

  var go = form.querySelector('button.go'), errEl = document.getElementById('err');
  function pad(n) { return String(n).length < 2 ? '0' + n : String(n); }
  function hijriStr(d) {
    var o = {};
    hp.formatToParts(d).forEach(function (p) { if (p.type === 'day' || p.type === 'month' || p.type === 'year') o[p.type] = parseInt(p.value, 10); });
    return o.year + '-' + pad(o.month) + '-' + pad(o.day);
  }
  function showErr(k) { errEl.textContent = t(k); errEl.hidden = false; }

  function showSummary(f, d, ref) {
    var main = cal.value === 'G' ? 'gregory' : HIJRI, other = cal.value === 'G' ? HIJRI : 'gregory';
    var tm = new Date('2000-01-01T' + f.get('time')).toLocaleTimeString(lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-GB', { hour: 'numeric', minute: '2-digit' });
    var when = fmt(d, main) + ' (' + fmt(d, other) + ') – ' + tm;
    var id = String(f.get('idno'));
    var place = [f.get('address'), f.get('city'), f.get('postal')].filter(Boolean).join(lang === 'ar' ? '، ' : ', ');
    var rows = [
      [t('sRef'), ref], [t('sName'), f.get('name')], [t('sPhone'), f.get('phone')],
      [t('sId'), id.charAt(0) + '••••••' + id.slice(-3)],
      [t('sWhen'), when], [t('sWhere'), place],
      [t('sEvent'), label('type') + ' · ' + f.get('guests') + ' ' + t('guestsWord')],
      [t('sFood'), label('food')],
      [t('sBuffet'), label('buffet')]
    ];
    if (f.get('package')) rows.push([t('sPackage'), pkgLabel(String(f.get('package')), lang, true)]);
    sum.innerHTML = '';
    rows.forEach(function (r) {
      var dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = r[0]; dd.textContent = r[1];
      sum.appendChild(dt); sum.appendChild(dd);
    });
    form.style.display = 'none'; box.classList.add('show'); box.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errEl.hidden = true;
    var cfg = window.SUPABASE_CONFIG || {};
    if (!cfg.url || !cfg.key || /YOUR_/.test(cfg.key)) { showErr('errConfig'); return; }
    var f = new FormData(form), d = chosenDate();
    // the booking record has no buffet column yet, so the choice is written at the top of the notes staff see
    function buffetNote(v) {
      var s = 'Buffet type / نوع البوفيه: ' + (v === 'VIP' ? 'VIP Buffet / بوفيه VIP' : 'Ordinary Buffet / بوفيه عادي'), p = f.get('package');
      if (p) s += '\nPackage / الباقة: ' + pkgLabel(String(p), 'en', true) + ' / ' + pkgLabel(String(p), 'ar', true);
      return s;
    }
    var payload = {
      full_name: f.get('name'), phone: f.get('phone'), national_id: f.get('idno'),
      calendar_type: cal.value === 'G' ? 'gregorian' : 'hijri',
      event_date: d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()),
      hijri_date: hijriStr(d), event_time: f.get('time'),
      address: f.get('address'), city: f.get('city'), postal_code: f.get('postal'),
      event_type: f.get('type'), guests: parseInt(f.get('guests'), 10), menu: f.get('food'),
      notes: buffetNote(f.get('buffet')) + (f.get('notes') ? '\n' + f.get('notes') : ''), language: lang
    };
    var headers = { 'Content-Type': 'application/json', apikey: cfg.key };
    if (cfg.key.indexOf('eyJ') === 0) headers.Authorization = 'Bearer ' + cfg.key; // legacy anon (JWT) keys only
    go.disabled = true; go.textContent = t('sending');
    fetch(cfg.url + '/rest/v1/rpc/catering_submit_booking', { method: 'POST', headers: headers, body: JSON.stringify({ p: payload }) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (ref) { clearDraft(); showSummary(f, d, ref); })
      .catch(function () { showErr('errSend'); })
      .then(function () { go.disabled = false; go.textContent = t('submit'); });
  });

  document.getElementById('again').addEventListener('click', function () {
    form.reset(); clearDraft(); togglePkg(); setCal(); form.style.display = ''; box.classList.remove('show');
  });

  // ----- Keep the customer's details while they look at the price list -----
  var DRAFT = 'bookingDraft', DRAFT_FIELDS = ['name', 'phone', 'idno', 'buffet', 'package', 'cal', 'time', 'date', 'address', 'city', 'postal', 'type', 'guests', 'food', 'notes'];
  function saveDraft() {
    if (box.classList.contains('show')) return;
    var o = {};
    DRAFT_FIELDS.forEach(function (n) { o[n] = form.elements[n].value; });
    o.hy = hy.value; o.hm = hm.value; o.hd = hd.value;
    try { sessionStorage.setItem(DRAFT, JSON.stringify(o)); } catch (e) {}
  }
  function clearDraft() { try { sessionStorage.removeItem(DRAFT); } catch (e) {} }
  function restoreDraft() {
    var o = null;
    try { o = JSON.parse(sessionStorage.getItem(DRAFT) || 'null'); } catch (e) {}
    if (o) {
      DRAFT_FIELDS.forEach(function (n) { if (o[n] != null) form.elements[n].value = o[n]; });
      togglePkg();
      if (o['package'] != null && !pkgSel.disabled) { pkgSel.value = o['package']; updInfo(); }
      setCal();
      if (cal.value === 'H') {
        hy.value = o.hy; renderHijri(); hm.value = o.hm; renderHijri(); hd.value = o.hd; refreshDate();
      }
    } else {
      // first visit: if they already typed their number to open the price list, reuse it
      var p = null; try { p = sessionStorage.getItem('plPhone'); } catch (e) {}
      if (p && !form.elements.phone.value) form.elements.phone.value = p;
    }
  }
  form.addEventListener('input', saveDraft);
  form.addEventListener('change', saveDraft);

  cal.addEventListener('change', setCal);
  dateIn.addEventListener('change', refreshDate);
  hy.addEventListener('change', function () { renderHijri(); refreshDate(); });
  hm.addEventListener('change', function () { renderHijri(); refreshDate(); });
  hd.addEventListener('change', refreshDate);
  btn.addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar'); });


  // ---------- Check your booking (by mobile number) ----------
  var trackForm = document.getElementById('trackForm'), trackOut = document.getElementById('trackOut'),
      trackMsg = document.getElementById('trackMsg'), trackBtn = document.getElementById('trackBtn'),
      trackData = null;
  var TYPE_KEY = { Wedding: 'wedding', Birthday: 'birthday', Family: 'family', Iftar: 'iftar', Corporate: 'corporate', Other: 'other' };
  var MENU_KEY = { Rice: 'rice', Grill: 'grill', Both: 'both' };
  function tel(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // ---------- Agreement (needs phone + booking number + Saudi ID) ----------
  var lastPhone = '', agCtx = {};
  function rpcPost(name, body) {
    var cfg = window.SUPABASE_CONFIG || {};
    var headers = { 'Content-Type': 'application/json', apikey: cfg.key };
    if (cfg.key.indexOf('eyJ') === 0) headers.Authorization = 'Bearer ' + cfg.key;
    return fetch(cfg.url + '/rest/v1/rpc/' + name, { method: 'POST', headers: headers, body: JSON.stringify(body) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  // Called from the agreement page when the customer presses "Save signature"
  window.__customerSign = function (ref, dataUrl) {
    var c = agCtx[ref];
    if (!c) return Promise.resolve({ ok: false, error: 'no_context' });
    return rpcPost('catering_customer_sign', { p_phone: c.phone, p_reference: ref, p_national_id: c.id, p_signature: dataUrl }).then(function (res) {
      if (res && res.ok && trackData) {
        trackData.forEach(function (b) { if (b.reference === ref) b.agreement_signed = true; });
        trackShow();
      }
      return res;
    });
  };
  function agreementForm(b) {
    var form = tel('form', 'tk-verify'); form.hidden = true; form.setAttribute('novalidate', '');
    form.appendChild(tel('p', 'tk-why', t('agWhy')));
    var lab = tel('label', null), sp = tel('span', null, t('idno'));
    var inp = document.createElement('input');
    inp.type = 'text'; inp.inputMode = 'numeric'; inp.maxLength = 10; inp.dir = 'ltr'; inp.autocomplete = 'off'; inp.placeholder = '1XXXXXXXXX';
    lab.appendChild(sp); lab.appendChild(inp); form.appendChild(lab);
    var msg = tel('p', 'trackmsg bad'); msg.hidden = true; form.appendChild(msg);
    var go = tel('button', 'go', t('agOpen')); go.type = 'submit'; form.appendChild(go);
    function say(k) { msg.textContent = t(k); msg.hidden = false; }
    form.addEventListener('submit', function (e) {
      e.preventDefault(); msg.hidden = true;
      var id = inp.value.replace(/\D/g, '');
      if (!/^[12][0-9]{9}$/.test(id)) { say('agBadId'); return; }
      var w = window.open('', '_blank');                       // opened inside the tap so phones allow it
      if (!w) { say('agPopup'); return; }
      w.document.open();
      w.document.write('<!DOCTYPE html><meta charset="utf-8"><title>…</title><p style="font:18px sans-serif;padding:2rem;text-align:center">' + esc2(t('agOpening')) + '</p>');
      w.document.close();
      go.disabled = true;
      rpcPost('catering_customer_agreement', { p_phone: lastPhone, p_reference: b.reference, p_national_id: id }).then(function (res) {
        if (!res || !res.ok) {
          w.close();
          say(res && res.error === 'too_many' ? 'agMany' : (res && res.error === 'not_ready' ? 'agNotReady' : 'agMismatch'));
          return;
        }
        agCtx[b.reference] = { phone: lastPhone, id: id };
        w.document.open(); w.document.write(window.CustomerAgreement.html(res.data)); w.document.close();
        inp.value = ''; form.hidden = true;
      }).catch(function () { w.close(); say('trackErr'); })
        .then(function () { go.disabled = false; });
    });
    return form;
  }
  function esc2(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function trackSay(key, bad) { trackMsg.textContent = t(key); trackMsg.className = 'trackmsg' + (bad ? ' bad' : ''); trackMsg.hidden = false; }

  function trackShow() {
    trackOut.innerHTML = '';
    if (!trackData) return;
    if (!trackData.length) { trackSay('trackNone', false); return; }
    trackMsg.textContent = t('trackCount') + trackData.length; trackMsg.className = 'trackmsg'; trackMsg.hidden = false;
    trackData.forEach(function (b) {
      var card = tel('article', 'tk'); card.setAttribute('data-status', b.status);
      var head = tel('div', 'tk-head'), ref = tel('span', 'tk-ref', b.reference); ref.dir = 'ltr';
      head.appendChild(ref); head.appendChild(tel('span', 'tk-st', t('st_' + b.status) || b.status)); card.appendChild(head);

      var d = new Date(b.event_date + 'T12:00:00');
      var tm = new Date('2000-01-01T' + b.event_time).toLocaleTimeString(lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-GB', { hour: 'numeric', minute: '2-digit' });
      var when = tel('div', 'tk-when', fmt(d, 'gregory') + ' · ' + tm);
      when.appendChild(tel('small', null, fmt(d, HIJRI)));
      card.appendChild(when);

      var dl = tel('dl');
      function row(k, v) { dl.appendChild(tel('dt', null, k)); dl.appendChild(tel('dd', null, v)); }
      row(t('tkEvent'), (t(TYPE_KEY[b.event_type]) || b.event_type) + ' · ' + b.guests + ' ' + t('guestsWord'));
      row(t('tkMenu'), t(MENU_KEY[b.menu]) || b.menu);
      row(t('tkPlace'), [b.district, b.city].filter(Boolean).join(lang === 'ar' ? '، ' : ', '));
      card.appendChild(dl);
      if (t('sm_' + b.status)) card.appendChild(tel('p', 'tk-note', t('sm_' + b.status)));
      if (b.agreement_signed) card.appendChild(tel('p', 'tk-signed', '\u2714 ' + t('agSigned')));
      if (b.agreement_ready) {
        var form = agreementForm(b), ab = tel('button', 'tk-ag', b.agreement_signed ? t('agBtnView') : t('agBtnSign'));
        ab.type = 'button';
        ab.addEventListener('click', function () { form.hidden = !form.hidden; if (!form.hidden) form.querySelector('input').focus(); });
        card.appendChild(ab); card.appendChild(form);
      }
      trackOut.appendChild(card);
    });
  }

  trackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    trackOut.innerHTML = ''; trackData = null;
    var raw = document.getElementById('trackPhone').value, digits = raw.replace(/\D/g, '');
    lastPhone = raw;
    if (!/^(00966|966|0)?5[0-9]{8}$/.test(digits)) { trackSay('trackBad', true); return; }
    var cfg = window.SUPABASE_CONFIG || {};
    if (!cfg.url || !cfg.key) { trackSay('trackErr', true); return; }
    var headers = { 'Content-Type': 'application/json', apikey: cfg.key };
    if (cfg.key.indexOf('eyJ') === 0) headers.Authorization = 'Bearer ' + cfg.key;
    trackBtn.disabled = true; trackSay('trackWorking', false);
    fetch(cfg.url + '/rest/v1/rpc/catering_track_bookings', { method: 'POST', headers: headers, body: JSON.stringify({ p_phone: raw }) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (res) {
        if (!res.ok) { trackSay(res.error === 'too_many' ? 'trackMany' : 'trackBad', true); return; }
        trackData = res.data || []; trackShow();
      })
      .catch(function () { trackSay('trackErr', true); })
      .then(function () { trackBtn.disabled = false; });
  });

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  setCal();
  buildPkg();
  restoreDraft();
  var fromUrl = (location.search.match(/[?&]lang=(ar|en)/) || [])[1];
  setLang(fromUrl || saved || ((navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en'));
})();
