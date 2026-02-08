// Multi-language translations

const translations = {
    en: {
        // Header
        headerTitle: "My Life Planner - AI Assistant",
        headerSubtitle: "Plan your Islamic life with purpose and track your spiritual journey",
        
        // Navigation
        navHome: "Home",
        navQuran: "Quran",
        navSalawat: "Salawat",
        navPrayer: "Prayer",
        navCalendar: "Calendar",
        navSettings: "Settings",
        
        // Home Page
        welcomeTitle: "Welcome to My Life Planner",
        welcomeText: "This planner helps you organize your Islamic life across all 12 Hijri months. Track your prayers, Quran reading, salawat, and achieve your spiritual goals.",
        todayPrayersLabel: "Today's Prayers",
        todayQuranLabel: "Pages Read Today",
        todaySalawatLabel: "Salawat Today",
        quickActionsTitle: "Quick Actions",
        btnLogPrayer: "Log Prayer",
        btnReadQuran: "Read Quran",
        btnCountSalawat: "Count Salawat",
        
        // Quran Page
        quranTitle: "Quran Tracker",
        quranGoalLabel: "Set Your Goal:",
        quranCompletedLabel: "Completed",
        quranRemainingLabel: "Remaining",
        addProgressLabel: "Add Today's Progress:",
        btnAddQuran: "Add Progress",
        btnResetQuran: "Reset Progress",
        
        // Salawat Page
        salawatTitle: "Salawat Counter",
        salawatTodayLabel: "Today's Count",
        salawatWeekLabel: "This Week",
        salawatMonthLabel: "This Month",
        salawatTotalLabel: "Total Lifetime",
        salawatGoalLabel: "Daily Goal:",
        btnSetGoal: "Set Goal",
        btnAdd1: "+1",
        btnAdd10: "+10",
        btnAdd100: "+100",
        btnAdd1000: "+1000",
        btnResetToday: "Reset Today",
        
        // Prayer Page
        prayerTitle: "Prayer Tracker",
        fajrLabel: "Fajr",
        dhuhrLabel: "Dhuhr",
        asrLabel: "Asr",
        maghribLabel: "Maghrib",
        ishaLabel: "Isha",
        prayerStreakLabel: "Day Streak",
        prayerWeekLabel: "This Week",
        
        // Calendar Page
        calendarTitle: "Islamic Calendar - Monthly Plans",
        month1: "Muharram",
        month2: "Safar",
        month3: "Rabi al-Awwal",
        month4: "Rabi al-Thani",
        month5: "Jumada al-Awwal",
        month6: "Jumada al-Thani",
        month7: "Rajab",
        month8: "Sha'ban",
        month9: "Ramadan",
        month10: "Shawwal",
        month11: "Dhul Qadah",
        month12: "Dhul Hijjah",
        
        // Settings Page
        settingsTitle: "Settings & Backup",
        backupTitle: "Backup Your Data",
        backupDesc: "Export all your progress to keep it safe. You can restore it anytime on any device.",
        btnExport: "📥 Export Backup",
        btnImport: "📤 Import Backup",
        dangerZoneTitle: "Danger Zone",
        dangerZoneDesc: "Warning: This will delete all your data permanently!",
        btnResetAll: "Reset All Data",
        aboutTitle: "About",
        aboutText: "My Life Planner - AI Assistant is a free tool to help Muslims organize their spiritual life. May Allah accept all our good deeds. Ameen.",
        sadaqahText: "Built as Sadaqah Jariyah for the Ummah",
        
        // Footer
        footerText: "May Allah accept your efforts and make this a means of guidance. Ameen 🤲"
    },
    
    ar: {
        // Header
        headerTitle: "مخطط حياتي - مساعد الذكاء الاصطناعي",
        headerSubtitle: "خطط لحياتك الإسلامية بهدف وتتبع رحلتك الروحية",
        
        // Navigation
        navHome: "الرئيسية",
        navQuran: "القرآن",
        navSalawat: "الصلوات",
        navPrayer: "الصلاة",
        navCalendar: "التقويم",
        navSettings: "الإعدادات",
        
        // Home Page
        welcomeTitle: "مرحباً بك في مخطط حياتي",
        welcomeText: "يساعدك هذا المخطط على تنظيم حياتك الإسلامية عبر جميع الأشهر الهجرية الـ 12. تتبع صلواتك وقراءة القرآن والصلوات وحقق أهدافك الروحية.",
        todayPrayersLabel: "صلوات اليوم",
        todayQuranLabel: "الصفحات المقروءة اليوم",
        todaySalawatLabel: "الصلوات اليوم",
        quickActionsTitle: "إجراءات سريعة",
        btnLogPrayer: "تسجيل الصلاة",
        btnReadQuran: "قراءة القرآن",
        btnCountSalawat: "عد الصلوات",
        
        // Quran Page
        quranTitle: "متتبع القرآن",
        quranGoalLabel: "حدد هدفك:",
        quranCompletedLabel: "مكتمل",
        quranRemainingLabel: "متبقي",
        addProgressLabel: "أضف تقدم اليوم:",
        btnAddQuran: "إضافة تقدم",
        btnResetQuran: "إعادة تعيين التقدم",
        
        // Salawat Page
        salawatTitle: "عداد الصلوات",
        salawatTodayLabel: "عدد اليوم",
        salawatWeekLabel: "هذا الأسبوع",
        salawatMonthLabel: "هذا الشهر",
        salawatTotalLabel: "المجموع الكلي",
        salawatGoalLabel: "الهدف اليومي:",
        btnSetGoal: "تحديد الهدف",
        btnAdd1: "+١",
        btnAdd10: "+١٠",
        btnAdd100: "+١٠٠",
        btnAdd1000: "+١٠٠٠",
        btnResetToday: "إعادة تعيين اليوم",
        
        // Prayer Page
        prayerTitle: "متتبع الصلاة",
        fajrLabel: "الفجر",
        dhuhrLabel: "الظهر",
        asrLabel: "العصر",
        maghribLabel: "المغرب",
        ishaLabel: "العشاء",
        prayerStreakLabel: "سلسلة الأيام",
        prayerWeekLabel: "هذا الأسبوع",
        
        // Calendar Page
        calendarTitle: "التقويم الإسلامي - الخطط الشهرية",
        month1: "محرم",
        month2: "صفر",
        month3: "ربيع الأول",
        month4: "ربيع الثاني",
        month5: "جمادى الأولى",
        month6: "جمادى الثانية",
        month7: "رجب",
        month8: "شعبان",
        month9: "رمضان",
        month10: "شوال",
        month11: "ذو القعدة",
        month12: "ذو الحجة",
        
        // Settings Page
        settingsTitle: "الإعدادات والنسخ الاحتياطي",
        backupTitle: "نسخ احتياطي لبياناتك",
        backupDesc: "قم بتصدير جميع تقدمك للحفاظ عليه آمناً. يمكنك استعادته في أي وقت على أي جهاز.",
        btnExport: "📥 تصدير نسخة احتياطية",
        btnImport: "📤 استيراد نسخة احتياطية",
        dangerZoneTitle: "منطقة الخطر",
        dangerZoneDesc: "تحذير: سيؤدي هذا إلى حذف جميع بياناتك نهائياً!",
        btnResetAll: "إعادة تعيين جميع البيانات",
        aboutTitle: "حول",
        aboutText: "مخطط حياتي - مساعد الذكاء الاصطناعي هو أداة مجانية لمساعدة المسلمين على تنظيم حياتهم الروحية. تقبل الله جميع أعمالنا الصالحة. آمين.",
        sadaqahText: "بُني كصدقة جارية للأمة",
        
        // Footer
        footerText: "تقبل الله جهودك واجعل هذا وسيلة للهداية. آمين 🤲"
    },
    
    ml: {
        // Header
        headerTitle: "എന്റെ ജീവിത ആസൂത്രണം - AI സഹായി",
        headerSubtitle: "നിങ്ങളുടെ ഇസ്‌ലാമിക ജീവിതം ആസൂത്രണം ചെയ്യുകയും ആത്മീയ യാത്ര ട്രാക്ക് ചെയ്യുകയും ചെയ്യുക",
        
        // Navigation
        navHome: "ഹോം",
        navQuran: "ഖുർആൻ",
        navSalawat: "സലവാത്ത്",
        navPrayer: "നമസ്കാരം",
        navCalendar: "കലണ്ടർ",
        navSettings: "ക്രമീകരണങ്ങൾ",
        
        // Home Page
        welcomeTitle: "എന്റെ ജീവിത ആസൂത്രണത്തിലേക്ക് സ്വാഗതം",
        welcomeText: "ഈ പ്ലാനർ 12 ഹിജ്‌റി മാസങ്ങളിലുടനീളം നിങ്ങളുടെ ഇസ്‌ലാമിക ജീവിതം ക്രമീകരിക്കാൻ സഹായിക്കുന്നു. നിങ്ങളുടെ നമസ്കാരങ്ങൾ, ഖുർആൻ വായന, സലവാത്ത് എന്നിവ ട്രാക്ക് ചെയ്യുകയും ആത്മീയ ലക്ഷ്യങ്ങൾ നേടുകയും ചെയ്യുക.",
        todayPrayersLabel: "ഇന്നത്തെ നമസ്കാരങ്ങൾ",
        todayQuranLabel: "ഇന്ന് വായിച്ച താളുകൾ",
        todaySalawatLabel: "ഇന്നത്തെ സലവാത്ത്",
        quickActionsTitle: "വേഗത്തിലുള്ള പ്രവർത്തനങ്ങൾ",
        btnLogPrayer: "നമസ്കാരം രേഖപ്പെടുത്തുക",
        btnReadQuran: "ഖുർആൻ വായിക്കുക",
        btnCountSalawat: "സലവാത്ത് എണ്ണുക",
        
        // Quran Page
        quranTitle: "ഖുർആൻ ട്രാക്കർ",
        quranGoalLabel: "നിങ്ങളുടെ ലക്ഷ്യം സജ്ജമാക്കുക:",
        quranCompletedLabel: "പൂർത്തിയായി",
        quranRemainingLabel: "ശേഷിക്കുന്നത്",
        addProgressLabel: "ഇന്നത്തെ പുരോഗതി ചേർക്കുക:",
        btnAddQuran: "പുരോഗതി ചേർക്കുക",
        btnResetQuran: "പുരോഗതി പുനഃസജ്ജമാക്കുക",
        
        // Salawat Page
        salawatTitle: "സലവാത്ത് കൗണ്ടർ",
        salawatTodayLabel: "ഇന്നത്തെ എണ്ണം",
        salawatWeekLabel: "ഈ ആഴ്ച",
        salawatMonthLabel: "ഈ മാസം",
        salawatTotalLabel: "ആകെ ആയുസ്സ്",
        salawatGoalLabel: "പ്രതിദിന ലക്ഷ്യം:",
        btnSetGoal: "ലക്ഷ്യം സജ്ജമാക്കുക",
        btnAdd1: "+1",
        btnAdd10: "+10",
        btnAdd100: "+100",
        btnAdd1000: "+1000",
        btnResetToday: "ഇന്ന് പുനഃസജ്ജമാക്കുക",
        
        // Prayer Page
        prayerTitle: "നമസ്കാര ട്രാക്കർ",
        fajrLabel: "ഫജർ",
        dhuhrLabel: "ദുഹർ",
        asrLabel: "അസർ",
        maghribLabel: "മഗ്രിബ്",
        ishaLabel: "ഇഷാ",
        prayerStreakLabel: "ദിവസ പരമ്പര",
        prayerWeekLabel: "ഈ ആഴ്ച",
        
        // Calendar Page
        calendarTitle: "ഇസ്‌ലാമിക കലണ്ടർ - പ്രതിമാസ പദ്ധതികൾ",
        month1: "മുഹറം",
        month2: "സഫർ",
        month3: "റബീഉൽ അവ്വൽ",
        month4: "റബീഉൽ ആഖിർ",
        month5: "ജമാദുൽ അവ്വൽ",
        month6: "ജമാദുൽ ആഖിർ",
        month7: "റജബ്",
        month8: "ഷഅ്ബാൻ",
        month9: "റമദാൻ",
        month10: "ഷവ്വാൽ",
        month11: "ദുൽഖഅ്ദ",
        month12: "ദുൽഹിജ്ജ",
        
        // Settings Page
        settingsTitle: "ക്രമീകരണങ്ങളും ബാക്കപ്പും",
        backupTitle: "നിങ്ങളുടെ ഡാറ്റ ബാക്കപ്പ് ചെയ്യുക",
        backupDesc: "നിങ്ങളുടെ മുഴുവൻ പുരോഗതിയും സുരക്ഷിതമായി സൂക്ഷിക്കാൻ എക്‌സ്‌പോർട്ട് ചെയ്യുക. ഏത് ഉപകരണത്തിലും എപ്പോൾ വേണമെങ്കിലും നിങ്ങൾക്ക് ഇത് പുനഃസ്ഥാപിക്കാൻ കഴിയും.",
        btnExport: "📥 ബാക്കപ്പ് എക്‌സ്‌പോർട്ട് ചെയ്യുക",
        btnImport: "📤 ബാക്കപ്പ് ഇമ്പോർട്ട് ചെയ്യുക",
        dangerZoneTitle: "അപകട മേഖല",
        dangerZoneDesc: "മുന്നറിയിപ്പ്: ഇത് നിങ്ങളുടെ എല്ലാ ഡാറ്റയും ശാശ്വതമായി ഇല്ലാതാക്കും!",
        btnResetAll: "എല്ലാ ഡാറ്റയും പുനഃസജ്ജമാക്കുക",
        aboutTitle: "കുറിച്ച്",
        aboutText: "എന്റെ ജീവിത ആസൂത്രണം - AI സഹായി മുസ്‌ലിംകളെ അവരുടെ ആത്മീയ ജീവിതം ക്രമീകരിക്കാൻ സഹായിക്കുന്ന സൗജന്യ ഉപകരണമാണ്. അല്ലാഹു നമ്മുടെ എല്ലാ നല്ല പ്രവൃത്തികളും സ്വീകരിക്കട്ടെ. ആമീൻ.",
        sadaqahText: "ഉമ്മത്തിന് സദഖ ജാരിയയായി നിർമ്മിച്ചത്",
        
        // Footer
        footerText: "അല്ലാഹു നിങ്ങളുടെ പരിശ്രമങ്ങൾ സ്വീകരിക്കുകയും ഇത് മാർഗനിർദേശത്തിനുള്ള ഒരു മാർഗമാക്കുകയും ചെയ്യട്ടെ. ആമീൻ 🤲"
    }
};

// Set language function
function setLanguage(lang) {
    appData.settings.language = lang;
    saveData();
    
    // Update all text elements
    const t = translations[lang];
    
    // Update header
    document.getElementById('headerTitle').textContent = t.headerTitle;
    document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
    
    // Update navigation
    document.getElementById('navHome').textContent = t.navHome;
    document.getElementById('navQuran').textContent = t.navQuran;
    document.getElementById('navSalawat').textContent = t.navSalawat;
    document.getElementById('navPrayer').textContent = t.navPrayer;
    document.getElementById('navCalendar').textContent = t.navCalendar;
    document.getElementById('navSettings').textContent = t.navSettings;
    
    // Update home page
    document.getElementById('welcomeTitle').textContent = t.welcomeTitle;
    document.getElementById('welcomeText').textContent = t.welcomeText;
    document.getElementById('todayPrayersLabel').textContent = t.todayPrayersLabel;
    document.getElementById('todayQuranLabel').textContent = t.todayQuranLabel;
    document.getElementById('todaySalawatLabel').textContent = t.todaySalawatLabel;
    document.getElementById('quickActionsTitle').textContent = t.quickActionsTitle;
    document.getElementById('btnLogPrayer').textContent = t.btnLogPrayer;
    document.getElementById('btnReadQuran').textContent = t.btnReadQuran;
    document.getElementById('btnCountSalawat').textContent = t.btnCountSalawat;
    
    // Update Quran page
    document.getElementById('quranTitle').textContent = t.quranTitle;
    document.getElementById('quranGoalLabel').textContent = t.quranGoalLabel;
    document.getElementById('quranCompletedLabel').textContent = t.quranCompletedLabel;
    document.getElementById('quranRemainingLabel').textContent = t.quranRemainingLabel;
    document.getElementById('addProgressLabel').textContent = t.addProgressLabel;
    document.getElementById('btnAddQuran').textContent = t.btnAddQuran;
    document.getElementById('btnResetQuran').textContent = t.btnResetQuran;
    
    // Update Salawat page
    document.getElementById('salawatTitle').textContent = t.salawatTitle;
    document.getElementById('salawatTodayLabel').textContent = t.salawatTodayLabel;
    document.getElementById('salawatWeekLabel').textContent = t.salawatWeekLabel;
    document.getElementById('salawatMonthLabel').textContent = t.salawatMonthLabel;
    document.getElementById('salawatTotalLabel').textContent = t.salawatTotalLabel;
    document.getElementById('salawatGoalLabel').textContent = t.salawatGoalLabel;
    document.getElementById('btnSetGoal').textContent = t.btnSetGoal;
    document.getElementById('btnResetToday').textContent = t.btnResetToday;
    
    // Update Prayer page
    document.getElementById('prayerTitle').textContent = t.prayerTitle;
    document.getElementById('fajrLabel').textContent = t.fajrLabel;
    document.getElementById('dhuhrLabel').textContent = t.dhuhrLabel;
    document.getElementById('asrLabel').textContent = t.asrLabel;
    document.getElementById('maghribLabel').textContent = t.maghribLabel;
    document.getElementById('ishaLabel').textContent = t.ishaLabel;
    document.getElementById('prayerStreakLabel').textContent = t.prayerStreakLabel;
    document.getElementById('prayerWeekLabel').textContent = t.prayerWeekLabel;
    
    // Update Calendar page
    document.getElementById('calendarTitle').textContent = t.calendarTitle;
    
    // Update Settings page
    document.getElementById('settingsTitle').textContent = t.settingsTitle;
    document.getElementById('backupTitle').textContent = t.backupTitle;
    document.getElementById('backupDesc').textContent = t.backupDesc;
    document.getElementById('btnExport').textContent = t.btnExport;
    document.getElementById('btnImport').textContent = t.btnImport;
    document.getElementById('dangerZoneTitle').textContent = t.dangerZoneTitle;
    document.getElementById('dangerZoneDesc').textContent = t.dangerZoneDesc;
    document.getElementById('btnResetAll').textContent = t.btnResetAll;
    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('aboutText').textContent = t.aboutText;
    document.getElementById('sadaqahText').textContent = t.sadaqahText;
    
    // Update footer
    document.getElementById('footerText').textContent = t.footerText;
    
    // Update active language button
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes('English') && lang === 'en') btn.classList.add('active');
        if (btn.textContent.includes('العربية') && lang === 'ar') btn.classList.add('active');
        if (btn.textContent.includes('മലയാളം') && lang === 'ml') btn.classList.add('active');
    });
    
    // Set RTL for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = appData.settings.language || 'en';
    setLanguage(savedLang);
});
