// My Life Planner - Main JavaScript

// Initialize data structure
let appData = {
    salawat: {
        today: 0,
        week: 0,
        month: 0,
        total: 0,
        goal: 7000,
        lastDate: new Date().toDateString()
    },
    quran: {
        goal: 30,
        completed: 0
    },
    prayers: {
        fajr: false,
        dhuhr: false,
        asr: false,
        maghrib: false,
        isha: false,
        streak: 0,
        weekCount: 0,
        lastDate: new Date().toDateString()
    },
    settings: {
        language: 'en'
    }
};

// Load data from localStorage on page load
function loadData() {
    const savedData = localStorage.getItem('myLifePlannerData');
    if (savedData) {
        appData = JSON.parse(savedData);
        checkDateReset();
        updateAllDisplays();
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('myLifePlannerData', JSON.stringify(appData));
}

// Check if date has changed and reset daily counters
function checkDateReset() {
    const today = new Date().toDateString();
    
    // Reset daily salawat
    if (appData.salawat.lastDate !== today) {
        appData.salawat.today = 0;
        appData.salawat.lastDate = today;
    }
    
    // Reset daily prayers
    if (appData.prayers.lastDate !== today) {
        appData.prayers.fajr = false;
        appData.prayers.dhuhr = false;
        appData.prayers.asr = false;
        appData.prayers.maghrib = false;
        appData.prayers.isha = false;
        appData.prayers.lastDate = today;
    }
}

// Update all display elements
function updateAllDisplays() {
    updateHomeStats();
    updateSalawatDisplay();
    updateQuranDisplay();
    updatePrayerDisplay();
}

// Update home page statistics
function updateHomeStats() {
    const prayersCompleted = [
        appData.prayers.fajr,
        appData.prayers.dhuhr,
        appData.prayers.asr,
        appData.prayers.maghrib,
        appData.prayers.isha
    ].filter(p => p).length;
    
    document.getElementById('todayPrayersCount').textContent = prayersCompleted + '/5';
    document.getElementById('todayQuranCount').textContent = '0'; // Can be enhanced
    document.getElementById('todaySalawatCount').textContent = appData.salawat.today.toLocaleString();
}

// SALAWAT FUNCTIONS
function addSalawat(count) {
    appData.salawat.today += count;
    appData.salawat.week += count;
    appData.salawat.month += count;
    appData.salawat.total += count;
    
    saveData();
    updateSalawatDisplay();
    updateHomeStats();
    
    // Visual feedback
    const display = document.getElementById('salawatToday');
    display.style.transform = 'scale(1.1)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
}

function updateSalawatDisplay() {
    document.getElementById('salawatToday').textContent = appData.salawat.today.toLocaleString();
    document.getElementById('salawatWeek').textContent = appData.salawat.week.toLocaleString();
    document.getElementById('salawatMonth').textContent = appData.salawat.month.toLocaleString();
    document.getElementById('salawatTotal').textContent = appData.salawat.total.toLocaleString();
    document.getElementById('salawatGoalInput').value = appData.salawat.goal;
    
    // Update progress bar
    const progress = Math.min((appData.salawat.today / appData.salawat.goal) * 100, 100);
    const progressBar = document.getElementById('salawatProgress');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
}

function setSalawatGoal() {
    const goalInput = document.getElementById('salawatGoalInput');
    appData.salawat.goal = parseInt(goalInput.value) || 7000;
    saveData();
    updateSalawatDisplay();
    alert('Goal updated successfully!');
}

function resetSalawatToday() {
    if (confirm('Are you sure you want to reset today\'s count?')) {
        appData.salawat.today = 0;
        saveData();
        updateSalawatDisplay();
        updateHomeStats();
    }
}

// QURAN FUNCTIONS
function saveQuranGoal() {
    const goalSelect = document.getElementById('quranGoal');
    appData.quran.goal = parseInt(goalSelect.value);
    appData.quran.completed = 0; // Reset progress when goal changes
    saveData();
    updateQuranDisplay();
}

function addQuranProgress() {
    const input = document.getElementById('quranInput');
    const progress = parseInt(input.value) || 0;
    
    if (progress > 0) {
        appData.quran.completed += progress;
        if (appData.quran.completed > appData.quran.goal) {
            appData.quran.completed = appData.quran.goal;
        }
        saveData();
        updateQuranDisplay();
        input.value = '';
        
        // Congratulations if completed
        if (appData.quran.completed === appData.quran.goal) {
            alert('Masha\'Allah! You completed your Quran goal! 🎉');
        }
    }
}

function updateQuranDisplay() {
    const progress = (appData.quran.completed / appData.quran.goal) * 100;
    const remaining = appData.quran.goal - appData.quran.completed;
    
    document.getElementById('quranCompleted').textContent = appData.quran.completed;
    document.getElementById('quranRemaining').textContent = remaining;
    
    const progressBar = document.getElementById('quranProgress');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.round(progress) + '%';
    
    document.getElementById('quranGoal').value = appData.quran.goal;
}

function resetQuran() {
    if (confirm('Are you sure you want to reset Quran progress?')) {
        appData.quran.completed = 0;
        saveData();
        updateQuranDisplay();
    }
}

// PRAYER FUNCTIONS
function savePrayers() {
    appData.prayers.fajr = document.getElementById('prayerFajr').checked;
    appData.prayers.dhuhr = document.getElementById('prayerDhuhr').checked;
    appData.prayers.asr = document.getElementById('prayerAsr').checked;
    appData.prayers.maghrib = document.getElementById('prayerMaghrib').checked;
    appData.prayers.isha = document.getElementById('prayerIsha').checked;
    
    // Update week count
    const prayersToday = [
        appData.prayers.fajr,
        appData.prayers.dhuhr,
        appData.prayers.asr,
        appData.prayers.maghrib,
        appData.prayers.isha
    ].filter(p => p).length;
    
    saveData();
    updatePrayerDisplay();
    updateHomeStats();
}

function updatePrayerDisplay() {
    // Load checkbox states
    document.getElementById('prayerFajr').checked = appData.prayers.fajr;
    document.getElementById('prayerDhuhr').checked = appData.prayers.dhuhr;
    document.getElementById('prayerAsr').checked = appData.prayers.asr;
    document.getElementById('prayerMaghrib').checked = appData.prayers.maghrib;
    document.getElementById('prayerIsha').checked = appData.prayers.isha;
    
    // Update progress
    const prayersCompleted = [
        appData.prayers.fajr,
        appData.prayers.dhuhr,
        appData.prayers.asr,
        appData.prayers.maghrib,
        appData.prayers.isha
    ].filter(p => p).length;
    
    const progress = (prayersCompleted / 5) * 100;
    const progressBar = document.getElementById('prayerProgress');
    progressBar.style.width = progress + '%';
    progressBar.textContent = prayersCompleted + '/5 (' + Math.round(progress) + '%)';
    
    document.getElementById('prayerStreak').textContent = appData.prayers.streak;
    document.getElementById('prayerWeekCount').textContent = appData.prayers.weekCount + '/35';
}

// NAVIGATION
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update nav buttons
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update displays when switching pages
    if (pageId === 'home') updateHomeStats();
    if (pageId === 'salawat') updateSalawatDisplay();
    if (pageId === 'quran') updateQuranDisplay();
    if (pageId === 'prayer') updatePrayerDisplay();
}

// MONTH PLANS
function showMonthPlan(month) {
    // Update active month card
    const monthCards = document.querySelectorAll('.month-card');
    monthCards.forEach(card => card.classList.remove('active'));
    event.target.closest('.month-card').classList.add('active');
    
    // Load month plan content
    const content = document.getElementById('monthPlanContent');
    const plans = getMonthPlans();
    
    content.innerHTML = `
        <h2>${plans[month].title}</h2>
        <h3>Focus Areas:</h3>
        <ul class="action-list">
            ${plans[month].actions.map(action => `<li>${action}</li>`).join('')}
        </ul>
        <h3>Special Days:</h3>
        <p>${plans[month].specialDays}</p>
        <h3>Recommended Actions:</h3>
        <p>${plans[month].recommendations}</p>
    `;
}

function getMonthPlans() {
    return {
        muharram: {
            title: 'Muharram - The Sacred Month',
            actions: [
                'Fast on the Day of Ashura (10th)',
                'Fast on 9th and 11th (recommended)',
                'Set new Islamic year goals',
                'Increase dhikr and istighfar',
                'Study Islamic history'
            ],
            specialDays: '10th Muharram (Day of Ashura) - Sacred fasting day',
            recommendations: 'Start the year with strong ibadah habits. Make this month about renewal and spiritual goals.'
        },
        safar: {
            title: 'Safar - Building Consistency',
            actions: [
                'Maintain prayer times strictly',
                'Continue Quran daily',
                'Increase charity',
                'Avoid superstitions about this month',
                'Focus on good deeds'
            ],
            specialDays: 'No specific days, focus on consistency',
            recommendations: 'Build strong habits that will carry through the year. Be consistent in your worship.'
        },
        rabiawwal: {
            title: 'Rabi al-Awwal - Month of the Prophet ﷺ',
            actions: [
                'Increase salawat on Prophet ﷺ',
                'Study the Seerah (life of Prophet)',
                'Follow Sunnah practices',
                'Send abundant blessings on Prophet ﷺ',
                'Learn from Prophet\'s character'
            ],
            specialDays: '12th Rabi al-Awwal - Birth of Prophet Muhammad ﷺ',
            recommendations: 'Focus on learning about and following the example of Prophet Muhammad ﷺ. Increase your love through knowledge.'
        },
        rabithani: {
            title: 'Rabi al-Thani - Continue Good Habits',
            actions: [
                'Maintain momentum from previous months',
                'Review and adjust goals',
                'Increase voluntary prayers',
                'Study Islamic knowledge',
                'Help others in community'
            ],
            specialDays: 'No specific days, focus on consistency',
            recommendations: 'Don\'t let your motivation drop. Keep building on the good habits you\'ve established.'
        },
        jumadaawwal: {
            title: 'Jumada al-Awwal - Community Service',
            actions: [
                'Help family and neighbors',
                'Give more charity',
                'Visit the sick',
                'Strengthen family bonds',
                'Serve the community'
            ],
            specialDays: 'No specific days',
            recommendations: 'Focus on serving others and strengthening community ties. Islam is not just personal worship.'
        },
        jumadathani: {
            title: 'Jumada al-Thani - Family Focus',
            actions: [
                'Spend quality time with family',
                'Teach Islamic values at home',
                'Family Quran study sessions',
                'Pray together as family',
                'Strengthen relationships'
            ],
            specialDays: 'No specific days',
            recommendations: 'Your family is your first community. Strengthen these bonds and create an Islamic home environment.'
        },
        rajab: {
            title: 'Rajab - Spiritual Preparation',
            actions: [
                'Increase voluntary fasting',
                'Make more dua',
                'Prepare for Ramadan',
                'Increase night prayers',
                'Seek forgiveness intensely'
            ],
            specialDays: '27th Rajab - Isra and Mi\'raj',
            recommendations: 'Begin preparing your heart for Ramadan. This is the month to build spiritual momentum.'
        },
        shaban: {
            title: 'Sha\'ban - Ramadan Preparation',
            actions: [
                'Increase salawat (Prophet\'s month)',
                'Fast voluntary days (especially 15th)',
                'Practice Ramadan schedule',
                'Increase Quran recitation',
                'Seek forgiveness'
            ],
            specialDays: '15th Sha\'ban - Laylatul Bara\'ah (Night of Freedom)',
            recommendations: 'Final preparation for Ramadan! Build the habits you want to maintain during Ramadan.'
        },
        ramadan: {
            title: 'Ramadan - The Blessed Month',
            actions: [
                'Fast daily from dawn to sunset',
                'Complete 1+ Khatm of Quran',
                'Pray Taraweeh every night',
                'Increase charity and good deeds',
                'Seek Laylatul Qadr (last 10 nights)'
            ],
            specialDays: 'Last 10 nights (especially odd nights 21, 23, 25, 27, 29) - Laylatul Qadr',
            recommendations: 'The most blessed month! Maximize every moment. Focus on Quran, prayers, and seeking Allah\'s mercy.'
        },
        shawwal: {
            title: 'Shawwal - Maintaining Momentum',
            actions: [
                'Fast 6 days of Shawwal',
                'Continue good Ramadan habits',
                'Celebrate Eid al-Fitr',
                'Visit family and friends',
                'Give Zakat al-Fitr'
            ],
            specialDays: '1st Shawwal - Eid al-Fitr',
            recommendations: 'Don\'t let Ramadan momentum die! The 6 fasts of Shawwal are highly recommended.'
        },
        dhulqadah: {
            title: 'Dhul Qadah - Hajj Preparation',
            actions: [
                'Prepare for Hajj if going',
                'Increase worship',
                'Learn about Hajj rituals',
                'Make dua for Hajj acceptance',
                'Help Hajj pilgrims'
            ],
            specialDays: 'Month of preparation for Hajj',
            recommendations: 'Whether going to Hajj or not, this is a sacred month. Support those going and increase your ibadah.'
        },
        dhulhijjah: {
            title: 'Dhul Hijjah - The Sacred Month',
            actions: [
                'Fast first 9 days (especially Day of Arafah)',
                'Increase dhikr and takbeer',
                'Perform Hajj if able',
                'Prepare for Eid al-Adha',
                'Give Qurbani (sacrifice)'
            ],
            specialDays: '9th - Day of Arafah (most sacred day), 10th-13th - Days of Eid and Tashreeq',
            recommendations: 'The most blessed days of the year! Fast on Arafah if not performing Hajj. Maximize good deeds.'
        }
    };
}

// BACKUP AND RESTORE
function exportData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-life-planner-backup-' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
    alert('✅ Backup downloaded successfully!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (confirm('This will replace all your current data. Are you sure?')) {
                appData = importedData;
                saveData();
                updateAllDisplays();
                alert('✅ Data restored successfully!');
                location.reload();
            }
        } catch (error) {
            alert('❌ Error: Invalid backup file!');
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    const confirmation = prompt('Type "DELETE" to confirm resetting all data:');
    if (confirmation === 'DELETE') {
        localStorage.clear();
        location.reload();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    updateAllDisplays();
    
    // Show default month plan (Sha'ban - current month)
    showMonthPlan('shaban');
});

// Auto-save every minute
setInterval(saveData, 60000);
