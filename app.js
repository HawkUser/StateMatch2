// ===== STATE DATA =====
const STATES = [
  { state: "Alabama", capital: "Montgomery", abbr: "AL", region: "southeast" },
  { state: "Alaska", capital: "Juneau", abbr: "AK", region: "west" },
  { state: "Arizona", capital: "Phoenix", abbr: "AZ", region: "southwest" },
  { state: "Arkansas", capital: "Little Rock", abbr: "AR", region: "southeast" },
  { state: "California", capital: "Sacramento", abbr: "CA", region: "west" },
  { state: "Colorado", capital: "Denver", abbr: "CO", region: "west" },
  { state: "Connecticut", capital: "Hartford", abbr: "CT", region: "northeast" },
  { state: "Delaware", capital: "Dover", abbr: "DE", region: "northeast" },
  { state: "Florida", capital: "Tallahassee", abbr: "FL", region: "southeast" },
  { state: "Georgia", capital: "Atlanta", abbr: "GA", region: "southeast" },
  { state: "Hawaii", capital: "Honolulu", abbr: "HI", region: "west" },
  { state: "Idaho", capital: "Boise", abbr: "ID", region: "west" },
  { state: "Illinois", capital: "Springfield", abbr: "IL", region: "midwest" },
  { state: "Indiana", capital: "Indianapolis", abbr: "IN", region: "midwest" },
  { state: "Iowa", capital: "Des Moines", abbr: "IA", region: "midwest" },
  { state: "Kansas", capital: "Topeka", abbr: "KS", region: "midwest" },
  { state: "Kentucky", capital: "Frankfort", abbr: "KY", region: "southeast" },
  { state: "Louisiana", capital: "Baton Rouge", abbr: "LA", region: "southeast" },
  { state: "Maine", capital: "Augusta", abbr: "ME", region: "northeast" },
  { state: "Maryland", capital: "Annapolis", abbr: "MD", region: "northeast" },
  { state: "Massachusetts", capital: "Boston", abbr: "MA", region: "northeast" },
  { state: "Michigan", capital: "Lansing", abbr: "MI", region: "midwest" },
  { state: "Minnesota", capital: "Saint Paul", abbr: "MN", region: "midwest" },
  { state: "Mississippi", capital: "Jackson", abbr: "MS", region: "southeast" },
  { state: "Missouri", capital: "Jefferson City", abbr: "MO", region: "midwest" },
  { state: "Montana", capital: "Helena", abbr: "MT", region: "west" },
  { state: "Nebraska", capital: "Lincoln", abbr: "NE", region: "midwest" },
  { state: "Nevada", capital: "Carson City", abbr: "NV", region: "west" },
  { state: "New Hampshire", capital: "Concord", abbr: "NH", region: "northeast" },
  { state: "New Jersey", capital: "Trenton", abbr: "NJ", region: "northeast" },
  { state: "New Mexico", capital: "Santa Fe", abbr: "NM", region: "southwest" },
  { state: "New York", capital: "Albany", abbr: "NY", region: "northeast" },
  { state: "North Carolina", capital: "Raleigh", abbr: "NC", region: "southeast" },
  { state: "North Dakota", capital: "Bismarck", abbr: "ND", region: "midwest" },
  { state: "Ohio", capital: "Columbus", abbr: "OH", region: "midwest" },
  { state: "Oklahoma", capital: "Oklahoma City", abbr: "OK", region: "southwest" },
  { state: "Oregon", capital: "Salem", abbr: "OR", region: "west" },
  { state: "Pennsylvania", capital: "Harrisburg", abbr: "PA", region: "northeast" },
  { state: "Rhode Island", capital: "Providence", abbr: "RI", region: "northeast" },
  { state: "South Carolina", capital: "Columbia", abbr: "SC", region: "southeast" },
  { state: "South Dakota", capital: "Pierre", abbr: "SD", region: "midwest" },
  { state: "Tennessee", capital: "Nashville", abbr: "TN", region: "southeast" },
  { state: "Texas", capital: "Austin", abbr: "TX", region: "southwest" },
  { state: "Utah", capital: "Salt Lake City", abbr: "UT", region: "west" },
  { state: "Vermont", capital: "Montpelier", abbr: "VT", region: "northeast" },
  { state: "Virginia", capital: "Richmond", abbr: "VA", region: "southeast" },
  { state: "Washington", capital: "Olympia", abbr: "WA", region: "west" },
  { state: "West Virginia", capital: "Charleston", abbr: "WV", region: "southeast" },
  { state: "Wisconsin", capital: "Madison", abbr: "WI", region: "midwest" },
  { state: "Wyoming", capital: "Cheyenne", abbr: "WY", region: "west" }
];

const BADGES = [
  { id: "first_round", name: "🎯 First Round", desc: "Complete your first round" },
  { id: "perfect_5", name: "💯 Perfect Five", desc: "Get all 5 correct in one round" },
  { id: "streak_3", name: "🔥 3-Day Streak", desc: "Play 3 days in a row" },
  { id: "streak_5", name: "🔥 5-Day Streak", desc: "Play 5 days in a row" },
  { id: "streak_7", name: "🔥 Week Warrior", desc: "Play 7 days in a row" },
  { id: "streak_14", name: "🏆 2-Week Champ", desc: "Play 14 days in a row" },
  { id: "mastered_10", name: "🌱 10 Mastered", desc: "Master 10 states" },
  { id: "mastered_25", name: "🌿 25 Mastered", desc: "Master 25 states" },
  { id: "mastered_50", name: "👑 All 50!", desc: "Master all 50 states" },
  { id: "rounds_5", name: "📚 5 Rounds", desc: "Play 5 rounds total" },
  { id: "rounds_10", name: "📖 10 Rounds", desc: "Play 10 rounds total" },
  { id: "rounds_25", name: "🎓 25 Rounds", desc: "Play 25 rounds total" },
  { id: "comeback", name: "💪 Comeback", desc: "Get a perfect round after a bad one" },
  { id: "speed_learner", name: "⚡ Quick Study", desc: "Master a state in one try" },
  { id: "night_owl", name: "🦉 Night Owl", desc: "Practice after 9 PM" },
  { id: "early_bird", name: "🐦 Early Bird", desc: "Practice before 8 AM" },
];

// ===== STORAGE =====
function getStats() {
  const defaults = {
    streak: 0,
    bestStreak: 0,
    lastActive: null,
    rounds: 0,
    lastScore: null,
    badges: [],
    states: {} // { "Alabama": { correct: 3, wrong: 1 } }
  };
  return { ...defaults, ...JSON.parse(localStorage.getItem('statesQuiz') || '{}') };
}
function saveStats(s) { localStorage.setItem('statesQuiz', JSON.stringify(s)); }

function todayStr() { return new Date().toISOString().split('T')[0]; }

function updateStreak() {
  const stats = getStats();
  const today = todayStr();
  if (stats.lastActive === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().split('T')[0];

  if (stats.lastActive === yStr) {
    stats.streak = (stats.streak || 0) + 1;
  } else if (stats.lastActive !== today) {
    stats.streak = 1;
  }
  stats.lastActive = today;
  if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
  saveStats(stats);
}

function earnBadge(id) {
  const stats = getStats();
  if (!stats.badges.includes(id)) {
    stats.badges.push(id);
    saveStats(stats);
  }
}

function getMasteredCount() {
  const stats = getStats();
  return Object.values(stats.states).filter(s => s.correct >= 3 && s.correct > s.wrong * 2).length;
}

// ===== SETUP SCREEN =====
let selectedPreset = 'all';
let customSelection = new Set(STATES.map(s => s.state));

function getQuizPool() {
  if (selectedPreset === 'custom') {
    return STATES.filter(s => customSelection.has(s.state));
  }
  if (selectedPreset === 'weak') {
    const stats = getStats();
    const missed = stats.states || {};
    const weakStates = Object.entries(missed)
      .filter(([_, r]) => r.wrong >= r.correct)
      .map(([name]) => name);
    if (weakStates.length === 0) return [...STATES]; // fallback to all
    return STATES.filter(s => weakStates.includes(s.state));
  }
  if (selectedPreset === 'all') return [...STATES];
  // Region
  return STATES.filter(s => s.region === selectedPreset);
}

function initSetup() {
  // Preset buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPreset = btn.dataset.preset;
      document.getElementById('custom-picker').hidden = selectedPreset !== 'custom';
    });
  });

  // Custom picker checkboxes
  const cbContainer = document.getElementById('state-checkboxes');
  cbContainer.innerHTML = STATES.map(s =>
    `<label class="state-cb">
      <input type="checkbox" value="${s.state}" checked>
      <span class="cb-abbr">${s.abbr}</span>
      <span>${s.state}</span>
    </label>`
  ).join('');

  cbContainer.addEventListener('change', updateCustomCount);

  document.getElementById('select-all').addEventListener('click', () => {
    cbContainer.querySelectorAll('input').forEach(cb => cb.checked = true);
    updateCustomCount();
  });
  document.getElementById('select-none').addEventListener('click', () => {
    cbContainer.querySelectorAll('input').forEach(cb => cb.checked = false);
    updateCustomCount();
  });

  document.getElementById('start-quiz-btn').addEventListener('click', () => {
    if (selectedPreset === 'custom') {
      customSelection = new Set();
      document.querySelectorAll('#state-checkboxes input:checked').forEach(cb => {
        customSelection.add(cb.value);
      });
      if (customSelection.size < 4) {
        alert('Please select at least 4 states for the quiz.');
        return;
      }
    }
    const pool = getQuizPool();
    if (pool.length < 4) {
      alert('Not enough states in this category. Try a different selection.');
      return;
    }
    startRound();
  });
}

function updateCustomCount() {
  const count = document.querySelectorAll('#state-checkboxes input:checked').length;
  document.getElementById('selected-count').textContent = `${count} selected`;
}

// ===== QUIZ LOGIC =====
const QUESTION_COUNT = 5;
let questions = [];
let currentQ = 0;
let score = 0;
let results = [];
let answered = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions() {
  const stats = getStats();
  const pool = getQuizPool();
  // Prioritize weak states (more wrong than correct, or never seen)
  const scored = pool.map(s => {
    const record = stats.states[s.state] || { correct: 0, wrong: 0 };
    const mastery = record.correct - record.wrong * 2;
    return { ...s, priority: mastery - Math.random() * 3 };
  });
  scored.sort((a, b) => a.priority - b.priority);
  return shuffle(scored.slice(0, Math.min(15, scored.length))).slice(0, QUESTION_COUNT);
}

// Question types — always ask for exactly ONE field
function generateQuestion(stateData) {
  const types = [
    { given: ['state', 'abbr'], fill: 'capital' },
    { given: ['capital', 'abbr'], fill: 'state' },
    { given: ['state', 'capital'], fill: 'abbr' },
    { given: ['abbr'], fill: 'capital' },
    { given: ['capital'], fill: 'state' },
    { given: ['state'], fill: 'abbr' },
    { given: ['abbr'], fill: 'state' },
    { given: ['capital'], fill: 'abbr' },
  ];
  const type = types[Math.floor(Math.random() * types.length)];
  return { ...stateData, given: type.given, fill: type.fill };
}

function startRound() {
  questions = pickQuestions().map(generateQuestion);
  currentQ = 0;
  score = 0;
  results = [];
  answered = false;
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  answered = false;

  // Progress dots
  const dotsEl = document.getElementById('progress-dots');
  dotsEl.innerHTML = questions.map((_, i) => {
    let cls = 'dot';
    if (i === currentQ) cls += ' active';
    else if (results[i]?.correct) cls += ' correct';
    else if (results[i] && !results[i].correct) cls += ' wrong';
    return `<div class="${cls}"></div>`;
  }).join('');

  document.getElementById('quiz-counter').textContent = `${currentQ + 1} / ${QUESTION_COUNT}`;

  // Field values
  const abbrEl = document.getElementById('field-abbr');
  const stateEl = document.getElementById('field-state');
  const capitalEl = document.getElementById('field-capital');

  abbrEl.textContent = q.given.includes('abbr') ? q.abbr : '?';
  abbrEl.className = 'field-value ' + (q.given.includes('abbr') ? 'given' : 'blank');
  stateEl.textContent = q.given.includes('state') ? q.state : '?';
  stateEl.className = 'field-value ' + (q.given.includes('state') ? 'given' : 'blank');
  capitalEl.textContent = q.given.includes('capital') ? q.capital : '?';
  capitalEl.className = 'field-value ' + (q.given.includes('capital') ? 'given' : 'blank');

  // Generate multiple choice options
  const correctVal = q[q.fill];
  const allValues = STATES.map(s => s[q.fill]);
  const wrongOptions = shuffle(allValues.filter(v => v !== correctVal)).slice(0, 3);
  const options = shuffle([correctVal, ...wrongOptions]);

  const inputSection = document.getElementById('input-section');
  const label = q.fill === 'abbr' ? 'Abbreviation' : q.fill === 'state' ? 'State Name' : 'Capital';
  inputSection.innerHTML = `
    <p class="pick-label">Pick the ${label}:</p>
    <div class="options-grid">
      ${options.map(opt => `<button class="option-btn" data-value="${opt}">${opt}</button>`).join('')}
    </div>
  `;

  inputSection.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => pickOption(btn, correctVal));
  });

  // Buttons
  document.getElementById('next-btn').hidden = true;
  document.getElementById('quiz-feedback').hidden = true;
}

function pickOption(btn, correctVal) {
  if (answered) return;
  answered = true;

  const q = questions[currentQ];
  const picked = btn.dataset.value;
  const isCorrect = picked === correctVal;

  // Highlight buttons
  document.querySelectorAll('.option-btn').forEach(b => {
    b.classList.add('disabled');
    if (b.dataset.value === correctVal) b.classList.add('correct');
    if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  // Update display fields — always show all 3 on wrong, show the filled one on correct
  if (isCorrect) {
    if (q.fill === 'abbr') {
      document.getElementById('field-abbr').textContent = q.abbr;
      document.getElementById('field-abbr').className = 'field-value given';
    }
    if (q.fill === 'state') {
      document.getElementById('field-state').textContent = q.state;
      document.getElementById('field-state').className = 'field-value given';
    }
    if (q.fill === 'capital') {
      document.getElementById('field-capital').textContent = q.capital;
      document.getElementById('field-capital').className = 'field-value given';
    }
  } else {
    // Wrong — reveal ALL fields so the kid sees the full picture
    document.getElementById('field-abbr').textContent = q.abbr;
    document.getElementById('field-abbr').className = 'field-value given';
    document.getElementById('field-state').textContent = q.state;
    document.getElementById('field-state').className = 'field-value given';
    document.getElementById('field-capital').textContent = q.capital;
    document.getElementById('field-capital').className = 'field-value given';
  }

  // Feedback
  const feedback = document.getElementById('quiz-feedback');
  feedback.hidden = false;
  if (isCorrect) {
    feedback.className = 'quiz-feedback correct';
    feedback.textContent = '✅ Correct!';
    score++;
  } else {
    feedback.className = 'quiz-feedback wrong';
    feedback.textContent = `❌ The answer is: ${correctVal}`;
  }

  results.push({ state: q.state, abbr: q.abbr, capital: q.capital, correct: isCorrect });

  // Update state stats
  const stats = getStats();
  if (!stats.states[q.state]) stats.states[q.state] = { correct: 0, wrong: 0 };
  if (isCorrect) {
    stats.states[q.state].correct++;
    if (stats.states[q.state].correct === 1 && stats.states[q.state].wrong === 0) {
      earnBadge('speed_learner');
    }
  } else {
    stats.states[q.state].wrong++;
  }
  saveStats(stats);

  // Update dot
  const dots = document.querySelectorAll('.dot');
  dots[currentQ].classList.remove('active');
  dots[currentQ].classList.add(isCorrect ? 'correct' : 'wrong');

  // Show next button
  document.getElementById('next-btn').hidden = false;
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= QUESTION_COUNT) {
    finishRound();
  } else {
    renderQuestion();
  }
}

function finishRound() {
  const stats = getStats();
  stats.rounds++;
  updateStreak();
  saveStats(stats);

  // Check badges
  earnBadge('first_round');
  if (score === 5) earnBadge('perfect_5');
  if (stats.rounds >= 5) earnBadge('rounds_5');
  if (stats.rounds >= 10) earnBadge('rounds_10');
  if (stats.rounds >= 25) earnBadge('rounds_25');

  const streakStats = getStats();
  if (streakStats.streak >= 3) earnBadge('streak_3');
  if (streakStats.streak >= 5) earnBadge('streak_5');
  if (streakStats.streak >= 7) earnBadge('streak_7');
  if (streakStats.streak >= 14) earnBadge('streak_14');

  const mastered = getMasteredCount();
  if (mastered >= 10) earnBadge('mastered_10');
  if (mastered >= 25) earnBadge('mastered_25');
  if (mastered >= 50) earnBadge('mastered_50');

  if (score === 5 && stats.lastScore !== null && stats.lastScore <= 2) earnBadge('comeback');

  const hour = new Date().getHours();
  if (hour >= 21) earnBadge('night_owl');
  if (hour < 8) earnBadge('early_bird');

  stats.lastScore = score;
  saveStats(stats);

  // Show results
  showScreen('results-screen');
  document.getElementById('score-num').textContent = score;

  const messages = [
    score === 5 ? '🎉 Perfect round!' : '',
    score === 4 ? '👏 So close to perfect!' : '',
    score === 3 ? '👍 Good job, keep going!' : '',
    score <= 2 ? '💪 Keep practicing, you\'ll get there!' : ''
  ].find(m => m) || '';
  document.getElementById('results-message').textContent = messages;

  document.getElementById('results-list').innerHTML = results.map(r => {
    return `<div class="result-row ${r.correct ? 'correct' : 'wrong'}">
      <span class="result-icon">${r.correct ? '✅' : '❌'}</span>
      <span class="result-text">${r.abbr} — ${r.state} — ${r.capital}</span>
    </div>`;
  }).join('');

  updateHeader();
}

// ===== STATS SCREEN =====
function showStats() {
  showScreen('stats-screen');
  const stats = getStats();

  document.getElementById('stat-total').textContent = stats.rounds;
  document.getElementById('stat-best-streak').textContent = stats.bestStreak;
  document.getElementById('stat-mastered').textContent = getMasteredCount();

  // Badges
  document.getElementById('badges-list').innerHTML = BADGES.map(b =>
    `<div class="badge-item ${stats.badges.includes(b.id) ? 'earned' : ''}" title="${b.desc}">${b.name}</div>`
  ).join('');

  // States mastery
  renderMastery('all');
}

function renderMastery(filter) {
  const stats = getStats();
  const el = document.getElementById('states-mastery');

  let filtered = STATES.map(s => {
    const record = stats.states[s.state] || { correct: 0, wrong: 0 };
    const isMastered = record.correct >= 3 && record.correct > record.wrong * 2;
    const isWeak = record.wrong > record.correct;
    const status = isMastered ? 'mastered' : isWeak ? 'weak' : 'learning';
    return { ...s, ...record, status };
  });

  if (filter !== 'all') filtered = filtered.filter(s => s.status === filter);

  el.innerHTML = filtered.map(s => {
    const total = Math.min(s.correct + s.wrong, 5);
    const dots = Array.from({ length: 5 }, (_, i) => {
      if (i < s.correct && i < 5) return '<div class="mastery-dot filled"></div>';
      if (i < s.correct + s.wrong && i < 5) return '<div class="mastery-dot missed"></div>';
      return '<div class="mastery-dot"></div>';
    }).join('');
    return `<div class="mastery-row">
      <span class="state-abbr">${s.abbr}</span>
      <span class="state-name">${s.state}</span>
      <span class="state-capital">${s.capital}</span>
      <div class="mastery-dots">${dots}</div>
    </div>`;
  }).join('') || '<p style="color:var(--text-muted);text-align:center;padding:16px;">No states in this category yet.</p>';
}

// ===== NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateHeader() {
  const stats = getStats();
  document.getElementById('streak-display').textContent = `🔥 ${stats.streak || 0} day streak`;
  document.getElementById('badge-count').textContent = `🏆 ${(stats.badges || []).length} badges`;
}

// ===== EVENT LISTENERS =====
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('play-again').addEventListener('click', () => showScreen('setup-screen'));
document.getElementById('show-stats').addEventListener('click', showStats);
document.getElementById('back-to-quiz').addEventListener('click', () => showScreen('setup-screen'));

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMastery(btn.dataset.filter);
  });
});

// ===== INIT =====
if (new URLSearchParams(window.location.search).get('reset') === 'true') {
  localStorage.removeItem('statesQuiz');
  window.history.replaceState({}, '', window.location.pathname);
}

updateHeader();
initSetup();
