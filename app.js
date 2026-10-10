// ===== CONFIG =====
// Adresse de ton serveur IA (voir README). Vide = tuteur hors-ligne.
const AI_ENDPOINT = '/.netlify/functions/ask-ai';

const KEYS = { progress: 'edu_progress', favs: 'edu_favs' };
const CLASSES = [
  { k: '6eme', l: '6ème' }, { k: '5eme', l: '5ème' }, { k: '4eme', l: '4ème' },
  { k: '3eme', l: '3ème' }, { k: '2nde', l: '2nde' }, { k: '1ere', l: '1ère' },
  { k: 'terminale', l: 'Terminale' }
];
const MATIERES = ['Français', 'Anglais', 'Mathématiques', 'SVT', 'Physique-Chimie',
  'Histoire', 'Géographie', 'ECM', 'EPS', 'Informatique', 'Philosophie'];

let progress = loadJSON(KEYS.progress, {});
let favorites = loadJSON(KEYS.favs, []);

// ===== OUTILS =====
function loadJSON(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }
function persist() {
  localStorage.setItem(KEYS.progress, JSON.stringify(progress));
  localStorage.setItem(KEYS.favs, JSON.stringify(favorites));
}
const $ = id => document.getElementById(id);
const app = $('app'), nav = $('nav');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const plain = html => html.replace(/<[^>]+>/g, ' ').toLowerCase();
const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const matieresFor = k => MATIERES.filter(m => m !== 'Philosophie' || ['1ere', 'terminale'].includes(k));
const lessonsList = () => Object.entries(COURS).flatMap(([c, ms]) =>
  Object.entries(ms).flatMap(([m, ls]) => ls.map(l => ({ ...l, classe: c, matiere: m }))));
const findLesson = id => lessonsList().find(l => l.id === id);
const labelOf = k => (CLASSES.find(c => c.k === k) || { l: k }).l;
const setNav = html => { stopTimer(); nav.innerHTML = html; };

// ===== ACCUEIL =====
const ICONS = { 'Français': '📝', 'Anglais': '🇬🇧', 'Mathématiques': '📐', 'SVT': '🌿', 'Physique-Chimie': '⚗️',
  'Histoire': '🏛️', 'Géographie': '🌍', 'ECM': '🤝', 'EPS': '⚽', 'Informatique': '💻', 'Philosophie': '🧠' };
const COULEURS = { '6eme': '#2e7d32', '5eme': '#00897b', '4eme': '#1565c0', '3eme': '#ef6c00',
  '2nde': '#6a1b9a', '1ere': '#ad1457', 'terminale': '#c62828' };
const countLessons = k => COURS[k] ? Object.values(COURS[k]).reduce((s, ls) => s + ls.length, 0) : 0;

function showMenu() {
  setNav('');
  const all = lessonsList();
  const done = all.filter(l => progress[l.id]).length;
  const pct = all.length ? Math.round(done / all.length * 100) : 0;
  const lastL = localStorage.getItem('edu_last') && findLesson(localStorage.getItem('edu_last'));
  app.innerHTML = `
    <section class="hero">
      <h2>Bienvenue, élève ! 👋</h2>
      <p>Apprends seul, à ton rythme, avec le programme camerounais.<br>Prépare le <b>BEPC</b>, le <b>Probatoire</b> et le <b>BAC</b> 🎓</p>
      <button class="btn gold big" onclick="showClasse('6eme')">🚀 Commencer</button>
    </section>
    <div class="stats">
      <div class="stat"><div class="num">📚 ${all.length}</div><div class="label">Leçons</div></div>
      <div class="stat"><div class="num">✅ ${done}</div><div class="label">Lues</div></div>
      <div class="stat"><div class="num">⭐ ${favorites.length}</div><div class="label">Favoris</div></div>
    </div>
    <div class="card"><h2>📊 Ma progression : ${pct}%</h2>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div></div>
    <div class="card"><h2>🎒 Choisis ta classe</h2><div class="classes" id="classes"></div></div>
    <div class="card"><h2>🧭 Comment ça marche ?</h2>
      <div class="steps">
        <div class="step"><span>1️⃣</span><b>Choisis ta classe</b><p>puis ta matière</p></div>
        <div class="step"><span>2️⃣</span><b>Lis et écoute</b><p>la leçon 🔊</p></div>
        <div class="step"><span>3️⃣</span><b>Entraîne-toi</b><p>avec les exercices et les QCM ✏️</p></div>
      </div></div>
    ${lastL ? `<div class="card resume"><b>▶️ Reprendre où tu t'es arrêté</b><p>${esc(lastL.titre)}</p><button class="btn gold" onclick="showLecon('${lastL.id}')">Continuer</button></div>` : ''}
    <div class="card"><h2>🧭 Rubriques</h2><div class="rubriques">${RUBRIQUES.map(r => `<button class="rub" style="background:${r.c}" onclick="goRubrique('${r.id}')"><span class="rub-ico">${r.ico}</span><b>${r.t}</b><small>${r.d}</small></button>`).join('')}</div></div>
    <p class="footer">🎓 Fait pour les élèves du Cameroun · Bon courage, tu peux réussir !<br><b>Version 14</b></p>`;
  CLASSES.forEach(c => {
    const b = document.createElement('button');
    b.className = 'classe-tile';
    b.style.background = COULEURS[c.k];
    b.innerHTML = `<span class="ct-name">${c.l}</span><span class="ct-n">${countLessons(c.k)} leçon(s)</span>`;
    b.onclick = () => showClasse(c.k);
    $('classes').appendChild(b);
  });
}

// ===== PARCOURS : CLASSE → MATIÈRE → COURS =====
function stepper(n, k, m) {
  const labels = ['Classe', 'Matière', 'Cours'];
  const parts = labels.map((l, i) => `<span class="st ${i + 1 <= n ? 'on' : ''}">${i + 1}. ${l}</span>`).join('<span class="sarrow">›</span>');
  const trail = [k && labelOf(k), m].filter(Boolean).join(' › ');
  return `<div class="stepper">${parts}</div>${trail ? `<p class="trail">${esc(trail)}</p>` : ''}`;
}

function showClasse(k) {
  setNav(`<button class="btn" onclick="showMenu()">🏠 Accueil</button>`);
  app.innerHTML = stepper(1, k) +
    `<div class="card head" style="background:${COULEURS[k]}"><h2>Étape 1 : choisis ta matière</h2><p>${labelOf(k)}</p></div><div id="soonmsg"></div><div class="subjects" id="mats"></div>`;
  matieresFor(k).forEach(m => {
    const n = (COURS[k] && COURS[k][m]) ? COURS[k][m].length : 0;
    const b = document.createElement('button');
    b.className = 'subject-tile' + (n ? '' : ' soon');
    b.innerHTML = `<span class="sj-ico">${ICONS[m] || '📘'}</span><span class="sj-name">${m}</span><span class="sj-n">${n ? n + ' cours' : 'Bientôt disponible'}</span>`;
    b.onclick = () => n ? showMatiere(k, m) : showSoon(k, m);
    $('mats').appendChild(b);
  });
}

function showSoon(k, m) {
  $('soonmsg').innerHTML = `<div class="card soon-box"><b>⏳ ${m} en ${labelOf(k)} arrive bientôt.</b><p>En attendant, pose ta question au 🤖 Tuteur ou choisis une autre matière disponible (fond coloré).</p></div>`;
}

function showMatiere(k, m) {
  setNav(`<button class="btn" onclick="showClasse('${k}')">← Matières</button>`);
  const ls = COURS[k][m];
  let html = stepper(2, k, m) +
    `<div class="card head" style="background:${COULEURS[k]}"><h2>Étape 2 : choisis ton cours</h2><p>${ICONS[m] || ''} ${m} · ${ls.length} cours</p></div>`;
  ls.forEach((l, i) => {
    const done = progress[l.id] ? '<span class="badge ok">✓ Lu</span>' : '';
    html += `<div class="lesson-card" onclick="showLecon('${l.id}')">
      <div class="num">${i + 1}</div>
      <div class="lc-body"><h3>${esc(l.titre)} ${done}</h3>
        <p class="lc-meta">⏱️ ${esc(l.duree || '30 min')}</p>
        <div class="chips"><span>📖 Cours</span><span>✏️ ${(l.exercices || []).length} exercices</span><span>🎯 ${(l.qcm || []).length} QCM</span></div>
      </div>
      <div class="go">➜</div></div>`;
  });
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showLecon(id, tab = 'cours') {
  const l = findLesson(id);
  if (!l) return;
  localStorage.setItem('edu_last', id);
  setNav(`<button class="btn" onclick="showMatiere('${l.classe}','${l.matiere}')">← Liste des cours</button>`);
  const isFav = favorites.includes(id);
  const isDone = !!progress[id];
  const nEx = (l.exercices || []).length, nQ = (l.qcm || []).length;
  const tabs = [['cours', '📖 Cours'], ['exercices', `✏️ Exercices (${nEx})`], ['qcm', `🎯 QCM (${nQ})`]];

  let html = stepper(3, l.classe, l.matiere) + `<div class="card">
    <h2>${esc(l.titre)}</h2>
    <p class="lc-meta">⏱️ ${esc(l.duree || '30 min')}</p>
    <div class="tabs">${tabs.map(([t, lab]) => `<button class="tab ${tab === t ? 'active' : ''}" onclick="showLecon('${id}','${t}')">${lab}</button>`).join('')}</div>`;

  if (tab === 'cours') {
    html += `<div class="tools">
        <button class="audio-btn" onclick="speakLesson(this, '${id}')">🔊 Écouter</button>
        <button class="fav-btn" onclick="toggleFav('${id}', this)">${isFav ? '⭐ Favori' : '☆ Ajouter aux favoris'}</button>
        <button class="btn secondary" onclick="toggleRead('${id}','cours')">${isDone ? '✓ Lu (annuler)' : 'Marquer comme lu'}</button>
      </div>
      <div class="lesson-content">${l.contenu}</div>
      <div class="next"><button class="btn gold" onclick="showLecon('${id}','exercices')">Suivant : exercices ➜</button></div>`;
  } else if (tab === 'exercices') {
    if (!nEx) html += `<p>Pas encore d'exercices pour ce cours.</p>`;
    (l.exercices || []).forEach((ex, i) => {
      html += `<div class="ex"><p><b>Exercice ${i + 1}.</b> ${ex.q}</p>
        ${ex.indice ? `<details><summary>💡 Indice</summary><div class="astuce">${ex.indice}</div></details>` : ''}
        <details><summary>👀 Voir la correction</summary><div class="exemple">${ex.r}</div></details></div>`;
    });
    html += `<div class="next"><button class="btn gold" onclick="showLecon('${id}','qcm')">Suivant : QCM ➜</button></div>`;
  } else {
    if (!nQ) html += `<p>Pas encore de QCM pour ce cours.</p>`;
    html += `<div class="qcm">`;
    (l.qcm || []).forEach((q, i) => {
      html += `<p><b>${i + 1}. ${q.q}</b></p><div>`;
      q.options.forEach((opt, j) => {
        html += `<button onclick="checkQCM(this, ${j === q.correct}, '${id}', ${i}, ${q.correct})">${esc(opt)}</button>`;
      });
      html += `</div><div id="exp-${id}-${i}" style="display:none;font-size:0.9rem;color:#444;margin-bottom:0.6rem"></div>`;
    });
    html += `</div>`;
  }
  html += `</div>`;
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function toggleRead(id, tab) {
  if (progress[id]) delete progress[id];
  else progress[id] = { date: new Date().toISOString() };
  persist();
  showLecon(id, tab || 'cours');
}

function checkQCM(btn, isCorrect, id, i, correctIdx) {
  const group = btn.parentElement;
  if (group.dataset.done) return;               // une seule réponse par question
  group.dataset.done = '1';
  group.querySelectorAll('button')[correctIdx].classList.add('correct');
  if (!isCorrect) btn.classList.add('wrong');
  const exp = $(`exp-${id}-${i}`);
  exp.style.display = 'block';
  exp.textContent = (isCorrect ? '✅ Bravo ! ' : '❌ Pas tout à fait. ') + (findLesson(id).qcm[i].exp || '');
}

function toggleFav(id, btn) {
  const idx = favorites.indexOf(id);
  if (idx >= 0) { favorites.splice(idx, 1); btn.textContent = '☆ Ajouter'; }
  else { favorites.push(id); btn.textContent = '⭐ Favori'; }
  persist();
}

function showFavorites() {
  setNav(`<button class="btn" onclick="showMenu()">← Accueil</button>`);
  app.innerHTML = `<div class="card"><h2>⭐ Mes favoris</h2></div>`;
  const list = favorites.map(findLesson).filter(Boolean);
  if (!list.length) {
    app.innerHTML += `<div class="card"><p>Aucun favori. Ajoute des cours avec ☆ dans une leçon.</p></div>`;
    return;
  }
  list.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.cursor = 'pointer';
    card.innerHTML = `<h2>${esc(l.titre)}</h2><p style="color:#666;font-size:0.85rem">${labelOf(l.classe)} — ${l.matiere}</p>`;
    card.onclick = () => showLecon(l.id);
    app.appendChild(card);
  });
}

// ===== AUDIO =====
function speakLesson(btn, id) {
  if (!('speechSynthesis' in window)) { alert('Audio non disponible sur ce navigateur'); return; }
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); btn.textContent = '🔊 Écouter'; return; }
  const u = new SpeechSynthesisUtterance(plain(findLesson(id).contenu));
  u.lang = 'fr-FR'; u.rate = 0.95;
  u.onend = () => btn.textContent = '🔊 Écouter';
  btn.textContent = '⏸️ Arrêter';
  speechSynthesis.speak(u);
}

// ===== RECHERCHE =====
function search(q) {
  q = norm(q.trim());
  if (!q) { showMenu(); return; }
  setNav(`<button class="btn" onclick="$('search').value='';showMenu()">← Effacer</button>`);
  app.innerHTML = `<div class="card"><h2>🔍 Résultats pour « ${esc(q)} »</h2></div>`;
  const hits = lessonsList().filter(l => norm(l.titre).includes(q) || norm(plain(l.contenu)).includes(q));
  if (!hits.length) { app.innerHTML += `<div class="card"><p>Aucun résultat. Pose ta question au 🤖 Tuteur IA !</p></div>`; return; }
  hits.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card'; card.style.cursor = 'pointer';
    card.innerHTML = `<h2>${esc(l.titre)}</h2><p style="color:#666;font-size:0.85rem">${labelOf(l.classe)} — ${l.matiere}</p>`;
    card.onclick = () => showLecon(l.id);
    app.appendChild(card);
  });
}

// ===== TUTEUR IA =====
function showIA() {
  setNav(`<button class="btn" onclick="showMenu()">← Accueil</button>`);
  app.innerHTML = `
    <div class="card">
      <h2>🤖 Tuteur IA — Ton prof personnel</h2>
      <p style="font-size:0.9rem;color:#666">Exemples : « Explique-moi la force en 3ème », « Comment simplifier une fraction ? », « Donne-moi un sujet de philo sur la conscience ».</p>
      <div id="chat"></div>
      <textarea id="userInput" rows="2" placeholder="Écris ta question ici..."></textarea>
      <button class="btn" onclick="askIA()" style="margin-top:0.5rem">📤 Envoyer</button>
    </div>`;
  $('userInput').addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askIA(); } });
  addMsg("Bonjour ! Pose ta question sur n'importe quelle matière. 📚", 'ai');
}

function addMsg(text, who) {
  const d = document.createElement('div');
  d.className = who === 'user' ? 'msg-user' : 'msg-ai';
  d.textContent = text;
  $('chat').appendChild(d);
  $('chat').scrollTop = $('chat').scrollHeight;
  return d;
}

async function askIA() {
  const input = $('userInput');
  const q = input.value.trim();
  if (!q) return;
  addMsg(q, 'user');
  input.value = '';
  const wait = addMsg('🤔 Réflexion en cours...', 'ai');

  if (AI_ENDPOINT) {
    try {
      const res = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          system: "Tu es un professeur expert du secondaire camerounais (programme MINESEC). Explique clairement, étape par étape, avec un exemple du contexte camerounais, puis un mini-exercice. Réponds en français."
        })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      wait.textContent = data.answer;
      return;
    } catch (e) { /* bascule sur le tuteur hors-ligne */ }
  }
  const r = tutorLocal(q);
  wait.textContent = r.text;
  r.links.forEach(l => {
    const b = document.createElement('button');
    b.className = 'btn secondary'; b.style.margin = '0.3rem 0.3rem 0 0';
    b.textContent = '📖 ' + l.titre;
    b.onclick = () => showLecon(l.id);
    wait.appendChild(b);
  });
}

function tutorLocal(q) {
  const words = plain(q).split(/\W+/).filter(w => w.length > 3);
  const hits = lessonsList().filter(l => {
    const t = plain(l.titre + ' ' + l.contenu);
    return words.some(w => t.includes(w));
  }).slice(0, 3);
  if (!hits.length) return {
    text: "Je n'ai pas encore ce cours hors-ligne. Essaie avec un mot-clé (ex : « force », « fraction », « conscience ») ou active le serveur IA (voir README).",
    links: []
  };
  return { text: 'Voici les cours de ta bibliothèque qui correspondent à ta question :', links: hits };
}


// ===== RUBRIQUES =====
const RUBRIQUES = [
  { id: 'cours', ico: '📚', t: 'Mes cours', d: 'Choisir une classe et une matière', c: '#006A4E' },
  { id: 'exos', ico: '✏️', t: 'Exercices', d: 'Pratiquer par classe', c: '#1565c0' },
  { id: 'qcm', ico: '🎯', t: 'QCM rapide', d: '10 questions et ton score', c: '#CE1126' },
  { id: 'examens', ico: '🎓', t: 'Examens', d: 'BEPC, Probatoire, BAC', c: '#6a1b9a' },
  { id: 'dossiers', ico: '📄', t: 'Dossiers PDF', d: 'Fiches à imprimer par matière', c: '#ef6c00' },
  { id: 'erreurs', ico: '❌', t: 'Mes erreurs', d: 'Revoir les QCM ratés', c: '#b71c1c' },
  { id: 'favoris', ico: '⭐', t: 'Mes favoris', d: 'Tes cours enregistrés', c: '#f9a825' },
  { id: 'progres', ico: '📊', t: 'Progression', d: 'Où en es-tu par classe ?', c: '#00838f' },
  { id: 'tuteur', ico: '🤖', t: 'Tuteur', d: 'Pose une question', c: '#455a64' },
  { id: 'aide', ico: '❓', t: 'Aide', d: 'Comprendre l\'application', c: '#5d4037' }
];
const BACK_HOME = `<button class="btn" onclick="showMenu()">🏠 Accueil</button>`;

function goRubrique(id) {
  const go = {
    cours: () => showChoixClasse('cours'), exos: () => showChoixClasse('exos'), qcm: () => showChoixClasse('qcm'),
    examens: showExamens, dossiers: showDossiers, favoris: showFavorites, erreurs: showErreurs,
    progres: showProgression, tuteur: showIA, aide: showAide
  };
  go[id]();
}

function showChoixClasse(action) {
  const titre = { cours: '📚 Mes cours', exos: '✏️ Exercices', qcm: '🎯 QCM rapide' }[action];
  setNav(BACK_HOME);
  app.innerHTML = `<div class="card head" style="background:#006A4E"><h2>${titre}</h2><p>Étape 1 : choisis ta classe</p></div><div class="classes" id="cl"></div>`;
  CLASSES.forEach(c => {
    const b = document.createElement('button');
    b.className = 'classe-tile';
    b.style.background = COULEURS[c.k];
    b.innerHTML = `<span class="ct-name">${c.l}</span><span class="ct-n">${countLessons(c.k)} leçon(s)</span>`;
    b.onclick = () => action === 'cours' ? showClasse(c.k) : action === 'exos' ? showExercices(c.k) : startQCM(c.k);
    $('cl').appendChild(b);
  });
}

function showExercices(k) {
  setNav(`<button class="btn" onclick="showChoixClasse('exos')">← Classes</button>`);
  let html = `<div class="card head" style="background:${COULEURS[k]}"><h2>✏️ Exercices : ${labelOf(k)}</h2><p>Clique sur un cours pour ouvrir ses exercices corrigés</p></div>`;
  const matieres = Object.entries(COURS[k] || {});
  if (!matieres.length) html += `<div class="card"><p>Pas encore de cours dans cette classe.</p></div>`;
  matieres.forEach(([m, ls]) => {
    html += `<h3 class="grp">${ICONS[m] || '📘'} ${m}</h3>`;
    ls.forEach(l => {
      html += `<div class="lesson-card" onclick="showLecon('${l.id}','exercices')"><div class="num">✏️</div>
        <div class="lc-body"><h3>${esc(l.titre)}</h3><p class="lc-meta">${(l.exercices || []).length} exercice(s) corrigé(s)</p></div><div class="go">➜</div></div>`;
    });
  });
  app.innerHTML = html;
}

// --- QCM rapide, examen blanc chronométré et mes erreurs ---
let quiz = null;
let examTimer = null;
function stopTimer() { if (examTimer) { clearInterval(examTimer); examTimer = null; } }

function startQCM(k, opts = {}) {
  const pool = lessonsList().filter(l => l.classe === k)
    .flatMap(l => (l.qcm || []).map((q, idx) => ({ ...q, lesson: l.titre, key: l.id + '#' + idx })));
  setNav(BACK_HOME);
  if (!pool.length) { app.innerHTML = `<div class="card"><p>Pas encore de QCM pour ${labelOf(k)}.</p></div>`; return; }
  launchQuiz(pool, opts, { restart: () => startQCM(k, opts) });
}
function startExam(k) { startQCM(k, { n: 15, minutes: 20, exam: true }); }
function startErreurs() {
  const pool = Object.values(loadJSON('edu_errors', {}));
  setNav(BACK_HOME);
  launchQuiz(pool, {}, { restart: startErreurs });
}
function launchQuiz(pool, opts, meta) {
  if (!pool.length) { app.innerHTML = `<div class="card"><p>Rien à réviser pour le moment.</p></div>`; return; }
  quiz = { items: [...pool].sort(() => Math.random() - 0.5).slice(0, opts.n || 10), i: 0, score: 0, answered: false, exam: !!opts.exam, meta };
  if (opts.minutes) quiz.endAt = Date.now() + opts.minutes * 60000;
  renderQuiz();
  if (opts.minutes) startTimer();
}
function startTimer() {
  stopTimer();
  examTimer = setInterval(() => {
    const left = Math.max(0, Math.round((quiz.endAt - Date.now()) / 1000));
    const t = $('timer');
    if (t) t.textContent = `⏱️ ${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    if (left <= 0) renderFinQuiz();
  }, 1000);
}
function renderQuiz() {
  const q = quiz.items[quiz.i];
  if (!q) return renderFinQuiz();
  app.innerHTML = `<div class="card">
    <div class="qhead">${quiz.exam ? '🎓 Examen blanc · ' : ''}Question ${quiz.i + 1} / ${quiz.items.length} · Score : ${quiz.score}
      ${quiz.endAt ? '<span id="timer" class="timer"></span>' : ''}</div>
    <div class="progress-bar"><div class="progress-fill" style="width:${quiz.i / quiz.items.length * 100}%"></div></div>
    <p class="lc-meta">${esc(q.lesson)}</p>
    <h3 class="qtitle">${esc(q.q)}</h3>
    <div class="qopts" id="qopts"></div>
    <div id="qexp"></div></div>`;
  q.options.forEach((opt, j) => {
    const b = document.createElement('button');
    b.className = 'qopt';
    b.textContent = opt;
    b.onclick = () => answerQuiz(j);
    $('qopts').appendChild(b);
  });
}
function answerQuiz(j) {
  if (!quiz || quiz.answered || !quiz.items[quiz.i]) return;
  quiz.answered = true;
  const q = quiz.items[quiz.i];
  const ok = j === q.correct;
  if (ok) quiz.score++;
  // Mémorise les erreurs ; une question réussie est retirée de « Mes erreurs »
  const errs = loadJSON('edu_errors', {});
  if (ok) delete errs[q.key];
  else errs[q.key] = { key: q.key, q: q.q, options: q.options, correct: q.correct, exp: q.exp, lesson: q.lesson };
  localStorage.setItem('edu_errors', JSON.stringify(errs));
  const btns = $('qopts').children;
  if (btns[q.correct]) btns[q.correct].classList.add('correct');
  if (!ok && btns[j]) btns[j].classList.add('wrong');
  $('qexp').innerHTML = `<div class="${ok ? 'exemple' : 'astuce'}">${ok ? '✅ Bravo !' : '❌ Pas tout à fait.'} ${q.exp || ''}</div>
    <div class="next"><button class="btn gold" onclick="nextQuiz()">${quiz.i + 1 < quiz.items.length ? 'Question suivante ➜' : 'Voir mon score'}</button></div>`;
}
function nextQuiz() {
  quiz.i++;
  renderQuiz();
}
function renderFinQuiz() {
  stopTimer();
  const pct = Math.round(quiz.score / quiz.items.length * 100);
  const msg = pct >= 80 ? '🏆 Excellent ! Tu maîtrises ces notions.'
    : pct >= 50 ? '👍 Bien. Revois les questions ratées dans « Mes erreurs ».'
    : '💪 Continue : relis le cours puis recommence.';
  app.innerHTML = `<div class="card hero"><h2>${quiz.exam ? '🎓 Examen blanc terminé' : '🎯 Résultat'}</h2>
    <h2>${quiz.score} / ${quiz.items.length} (${pct}%)</h2><p>${msg}</p>
    <div class="quick"><button class="btn gold" onclick="quiz.meta.restart()">🔁 Recommencer</button>${BACK_HOME}</div></div>`;
}

function showErreurs() {
  setNav(BACK_HOME);
  const n = Object.keys(loadJSON('edu_errors', {})).length;
  app.innerHTML = `<div class="card head" style="background:#b71c1c"><h2>❌ Mes erreurs</h2><p>Les QCM que tu as ratés. Ils disparaissent dès que tu les réussis.</p></div>
    <div class="card"><p><b>${n}</b> question(s) à revoir.</p>
    <div class="quick">${n ? `<button class="btn gold" onclick="startErreurs()">🎯 Réviser mes erreurs</button>` : `<p>Aucune erreur enregistrée. Bravo !</p>`}</div></div>`;
}

function showExamens() {
  setNav(BACK_HOME);
  const examens = [
    { t: 'BEPC', s: 'Fin de la 3ème', k: '3eme' },
    { t: 'Probatoire', s: 'Fin de la 1ère', k: '1ere' },
    { t: 'BAC', s: 'Fin de la Terminale', k: 'terminale' }
  ];
  app.innerHTML = `<div class="card head" style="background:#6a1b9a"><h2>🎓 Préparation aux examens</h2><p>Choisis l'examen qui te concerne</p></div>
    <div class="exam-grid">${examens.map(e => `<div class="card exam">
      <h3>${e.t}</h3><p class="lc-meta">${e.s}</p>
      <p>Révise chaque matière de la classe, fais les exercices puis les QCM chronométrés.</p>
      <div class="quick"><button class="btn secondary" onclick="showClasse('${e.k}')">📚 Réviser</button>
      <button class="btn gold" onclick="startExam('${e.k}')">📝 Examen blanc</button></div></div>`).join('')}</div>
    <div class="card"><h2>📝 Sujets d'entraînement BEPC</h2><p>Des sujets originaux dans le format de l'examen, avec correction pour chaque question.</p><div class="quick"><button class="btn secondary" onclick="showSujets()">Ouvrir les sujets</button></div></div>
    <div class="card"><h2>📌 Méthode le jour de l'examen</h2>
      <div class="steps">
        <div class="step"><span>1️⃣</span><b>Lis le sujet</b><p>entièrement avant de répondre</p></div>
        <div class="step"><span>2️⃣</span><b>Gère ton temps</b><p>garde du temps pour relire</p></div>
        <div class="step"><span>3️⃣</span><b>Rédige proprement</b><p>introduction, développement, conclusion</p></div>
      </div></div>`;
}

function showDossiers() {
  setNav(BACK_HOME);
  let html = `<div class="card head" style="background:#ef6c00"><h2>📄 Dossiers à imprimer</h2><p>Une fiche complète par matière</p></div>
    <div class="card"><h2>Comment l'utiliser ?</h2>
      <p>Ouvre la fiche, puis fais <b>Imprimer</b> → <b>Enregistrer au format PDF</b>. Tu auras tes cours et tes exercices sans connexion.</p></div>`;
  CLASSES.forEach(c => {
    const ms = Object.keys(COURS[c.k] || {});
    if (!ms.length) return;
    html += `<div class="card"><h3>${c.l}</h3><div class="chips">` +
      ms.map(m => `<a class="chip-link" href="dossiers/${c.k}/${m.replace(/[^\wÀ-ÿ-]+/g, '_')}.html" target="_blank">${ICONS[m] || '📘'} ${m}</a>`).join('') +
      `</div></div>`;
  });
  app.innerHTML = html;
}

function showProgression() {
  setNav(BACK_HOME);
  let html = `<div class="card head" style="background:#00838f"><h2>📊 Ma progression</h2><p>Leçons lues, par classe</p></div>`;
  CLASSES.forEach(c => {
    const all = lessonsList().filter(l => l.classe === c.k);
    if (!all.length) return;
    const d = all.filter(l => progress[l.id]).length;
    const p = Math.round(d / all.length * 100);
    html += `<div class="card"><h3 style="color:${COULEURS[c.k]}">${c.l} : ${p}%</h3>
      <div class="progress-bar"><div class="progress-fill" style="width:${p}%"></div></div>
      <p class="lc-meta">${d} / ${all.length} leçon(s) lues</p></div>`;
  });
  app.innerHTML = html;
}

function showAide() {
  setNav(BACK_HOME);
  app.innerHTML = `<div class="card head" style="background:#5d4037"><h2>❓ Aide</h2><p>Comprendre l'application en 1 minute</p></div>
    <div class="card"><h2>Le parcours</h2>
      <p><b>1. Classe</b> → <b>2. Matière</b> → <b>3. Cours</b>. Dans un cours, trois onglets : Cours, Exercices, QCM.</p>
      <p>Clique sur <b>Marquer comme lu</b> pour suivre ta progression, et sur <b>⭐</b> pour garder un cours en favori.</p></div>
    <div class="card"><h2>Hors connexion</h2>
      <p>Une fois ouverte, l'application fonctionne sans internet grâce à l'installation sur ton téléphone.</p></div>
    <div class="card"><h2>Installer sur le téléphone</h2>
      <p>Android (Chrome) : menu ⋮ → <b>Ajouter à l'écran d'accueil</b>.<br>iPhone (Safari) : Partager → <b>Sur l'écran d'accueil</b>.</p></div>
    <div class="card"><h2>Le tuteur</h2>
      <p>Il cherche la réponse dans les cours de l'application. Utilise des mots-clés précis comme « fraction », « COD » ou « Ahidjo ».</p></div>`;
}


// ===== SUJETS D'ENTRAÎNEMENT BEPC =====
function showSujets() {
  setNav(BACK_HOME);
  app.innerHTML = `<div class="card head" style="background:#6a1b9a"><h2>📝 Sujets d'entraînement : BEPC</h2><p>Essaie d'abord seul, puis ouvre la correction de chaque question.</p></div>` +
    SUJETS.map(s => `<div class="lesson-card" onclick="showSujet('${s.id}')"><div class="num">📝</div>
      <div class="lc-body"><h3>${esc(s.matiere)} : ${esc(s.titre)}</h3><p class="lc-meta">⏱️ ${esc(s.duree)} · ${s.exercices.length} exercice(s)</p></div><div class="go">➜</div></div>`).join('');
}
function showSujet(id) {
  const s = SUJETS.find(x => x.id === id);
  if (!s) return;
  setNav(`<button class="btn" onclick="showSujets()">← Sujets</button>`);
  let html = `<div class="card head" style="background:#6a1b9a"><h2>${esc(s.matiere)} : ${esc(s.titre)}</h2><p>⏱️ ${esc(s.duree)}</p></div>`;
  s.exercices.forEach(ex => {
    html += `<div class="card"><h3>${esc(ex.titre)}</h3><p>${ex.consigne}</p>`;
    ex.questions.forEach((qq, i) => {
      html += `<div class="ex"><p><b>${String.fromCharCode(97 + i)})</b> ${qq.q}</p>
        <details><summary>👀 Voir la correction</summary><div class="exemple">${qq.r}</div></details></div>`;
    });
    html += `</div>`;
  });
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

showMenu();
