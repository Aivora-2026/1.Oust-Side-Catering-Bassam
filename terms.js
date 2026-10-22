(function () {
  var T = {
    en: {
      title: 'Terms and Conditions – Qalat Al-Shahba Restaurants',
      brand: 'Qalat Al-Shahba Restaurants', langBtn: 'العربية', ariaLang: 'Switch language', back: '\u2190 Back to booking',
      hTerms: 'Terms and conditions to know before booking',
      terms: [
        'The buffet does not include dining tables and chairs. A table set with 6 chairs starts from SAR 115 up to SAR 230 per table.',
        'For large buffets, some dishes may be repeated.',
        'Each buffet has a different heater size, from 4 litres up to 9 litres per heater, depending on the agreed number of guests.',
        'The dishes are international. The dishes are chosen from the menu according to the customer\u2019s preference.',
        'An order is confirmed only by transferring the deposit. Otherwise it is considered cancelled.',
        'Setting up the buffet at the venue takes from one and a half to two hours.',
        'A booking cannot be cancelled after it is confirmed. The customer may postpone it by up to one year at most.',
        'We communicate only with the number registered in the contract, and all arrangements are coordinated with that number.',
        'The minimum number of guests is set according to the area.',
        'The restaurant is not responsible for cleaning the dining hall, either before the buffet is set up or after it ends.'
      ],
      cta: 'Back to the booking form',
      foot: 'Qalat Al-Shahba Restaurants \u00b7 Open daily 9 am to 11 pm \u00b7 Riyadh, Jeddah, Dammam and nearby \u00b7 hello@qalatalshahba.example'
    },
    ar: {
      title: 'الشروط والأحكام – مطاعم قلعة الشهباء',
      brand: 'مطاعم قلعة الشهباء', langBtn: 'English', ariaLang: 'تغيير اللغة', back: 'العودة إلى الحجز \u2192',
      hTerms: 'بنود وشروط يجب معرفتها قبل الحجز',
      terms: [
        'البوفيه لا يشمل طاولات الطعام والكراسي، ويبدأ سعر الطاولة منسقة مع 6 كراسي من 115 ريال إلى 230 ريال للطاولة الواحدة.',
        'إذا كان البوفيه كبيرًا قد تتكرر بعض الأصناف.',
        'لكل بوفيه حجم سخانات مختلف يبدأ من 4 لتر إلى 9 لتر للسخان الواحد، بناءً على عدد الأشخاص المتفق عليه.',
        'الأصناف انترناشونال، ويتم اختيار الأصناف من المنيو حسب رغبة العميل.',
        'اعتماد الطلب يكون بتحويل العربون، خلاف ذلك يُعد لاغيًا.',
        'يستغرق تجهيز البوفيه في الموقع من ساعة ونصف إلى ساعتين.',
        'لا يتم إلغاء الحجز بعد الاعتماد، ويحق للعميل التأجيل إلى حد سنة كحد أقصى.',
        'يكون التواصل مع الرقم المقيد في العقد فقط، وتنسيق جميع الأعمال معه.',
        'يتم تحديد الحد الأدنى للأشخاص حسب المنطقة.',
        'المطعم غير مسؤول عن نظافة قاعة الطعام سواءً قبل تجهيز البوفيه أو بعد انتهائها.'
      ],
      cta: 'العودة إلى نموذج الحجز',
      foot: 'مطاعم قلعة الشهباء \u00b7 نعمل يومياً من 9 صباحاً حتى 11 مساءً \u00b7 الرياض وجدة والدمام وما حولها \u00b7 hello@qalatalshahba.example'
    }
  };

  var lang = 'en';
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function render() {
    var t = T[lang], h = document.documentElement;
    h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
    $('brand').textContent = t.brand;
    $('lang').textContent = t.langBtn; $('lang').setAttribute('aria-label', t.ariaLang);
    $('back').textContent = t.back; $('back').href = 'index.html?lang=' + lang + '#book';
    $('cta').textContent = t.cta; $('cta').href = 'index.html?lang=' + lang + '#book';
    $('foot').textContent = t.foot;
    $('hTerms').textContent = t.hTerms;
    var tl = $('termsList'); while (tl.firstChild) tl.removeChild(tl.firstChild);
    t.terms.forEach(function (x) { var li = document.createElement('li'); li.textContent = x; tl.appendChild(li); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  $('lang').addEventListener('click', function () { lang = lang === 'ar' ? 'en' : 'ar'; render(); });

  var q = (location.search.match(/[?&]lang=(ar|en)/) || [])[1], saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  lang = q || saved || ((navigator.language || '').slice(0, 2) === 'ar' ? 'ar' : 'en');
  render();
})();
