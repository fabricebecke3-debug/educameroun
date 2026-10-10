#!/usr/bin/env node
// =====================================================================
// IMPORT DE CONTENU — ÉduCameroun
// Usage : node importer.js
// Lit les fichiers du dossier "contenu/" (sous-dossier "modeles" ignoré),
// les vérifie, et génère "data-import.js" que l'application charge automatiquement.
// Formats acceptés : .json  |  .csv (lecons + exercices + qcm)  |  .md (texte structuré)
// =====================================================================
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIR = path.join(ROOT, 'contenu');
const CLASSES = ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', 'terminale'];
const MATIERES = ['Français', 'Anglais', 'Mathématiques', 'SVT', 'Physique-Chimie', 'Histoire', 'Géographie',
  'ECM', 'EPS', 'Informatique', 'Philosophie'];
const erreurs = [];
const avertissements = [];

// ---------- Lecteurs de formats ----------
function parseCSV(text) {
  const premiere = text.split(/\r?\n/)[0];
  const sep = premiere.includes(';') ? ';' : ',';
  const rows = []; let row = []; let cell = ''; let entre = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (entre) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') entre = false;
      else cell += c;
    } else if (c === '"') entre = true;
    else if (c === sep) { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const lignes = rows.filter(r => r.some(x => x.trim()));
  if (!lignes.length) return [];
  const [entete, ...corps] = lignes;
  const cles = entete.map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
  return corps.map(r => Object.fromEntries(cles.map((k, i) => [k, (r[i] || '').trim()])));
}

// Markdown structuré :
// # Titre
// classe: 3eme / matiere: SVT / id: ... / duree: 30 min
// ## Cours            (texte libre ; **gras** accepté ; lignes vides = nouveau paragraphe)
// ## Exercices        (Q: question / R: réponse / Indice: texte)
// ## QCM              (Q: question / - option / - option bonne réponse marquée d'une * / Explication: texte)
function parseMD(text) {
  const lignes = text.split(/\r?\n/);
  const meta = {}; let titre = ''; let section = null;
  const cours = []; const exercices = []; const qcm = [];
  let ex = null, qq = null;
  const pushEx = () => { if (ex) exercices.push(ex); ex = null; };
  const pushQ = () => { if (qq) qcm.push(qq); qq = null; };
  for (const brut of lignes) {
    const l = brut.trim();
    if (l.startsWith('# ') && !titre) { titre = l.slice(2).trim(); continue; }
    if (l.startsWith('## ')) {
      pushEx(); pushQ();
      const t = l.slice(3).toLowerCase();
      section = t.startsWith('cours') ? 'cours' : t.startsWith('exercice') ? 'exercices' : t.startsWith('qcm') ? 'qcm' : null;
      continue;
    }
    if (!section) {
      const m = l.match(/^(classe|matiere|matière|id|duree|durée|titre):\s*(.+)$/i);
      if (m) meta[m[1].toLowerCase().replace('è', 'e').replace('é', 'e')] = m[2].trim();
      continue;
    }
    if (section === 'cours') { cours.push(brut); continue; }
    if (section === 'exercices') {
      if (/^Q:/i.test(l)) { pushEx(); ex = { q: l.slice(2).trim(), r: '', indice: '' }; }
      else if (ex && /^R:/i.test(l)) ex.r = l.slice(2).trim();
      else if (ex && /^Indice:/i.test(l)) ex.indice = l.slice(7).trim();
      continue;
    }
    if (section === 'qcm') {
      if (/^Q:/i.test(l)) { pushQ(); qq = { q: l.slice(2).trim(), options: [], correct: -1, exp: '' }; }
      else if (qq && /^- /.test(l)) {
        let opt = l.slice(2).trim();
        if (opt.endsWith('*')) { qq.correct = qq.options.length; opt = opt.slice(0, -1).trim(); }
        qq.options.push(opt);
      }
      else if (qq && /^Explication:/i.test(l)) qq.exp = l.slice(12).trim();
    }
  }
  pushEx(); pushQ();
  const paragraphes = cours.join('\n').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
    .map(p => '<p>' + p.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>') + '</p>');
  return { ...meta, titre, contenu: paragraphes.join('\n'), exercices, qcm };
}

// ---------- Validation ----------
function valider(l, source) {
  const id = l.id || '(sans id)';
  const where = `${source} → ${id}`;
  if (!CLASSES.includes(l.classe)) erreurs.push(`${where} : classe inconnue « ${l.classe} » (valeurs : ${CLASSES.join(', ')})`);
  if (!MATIERES.includes(l.matiere)) erreurs.push(`${where} : matière inconnue « ${l.matiere} »`);
  if (!l.id) erreurs.push(`${source} : une leçon n'a pas d'identifiant (id)`);
  if (!l.titre) erreurs.push(`${where} : titre manquant`);
  if (!l.contenu || l.contenu.length < 200) avertissements.push(`${where} : contenu court (${(l.contenu || '').length} caractères)`);
  (l.exercices || []).forEach((e, i) => {
    if (!e.q || !e.r) erreurs.push(`${where} : exercice ${i + 1} sans question ou sans réponse`);
    if (!e.indice) avertissements.push(`${where} : exercice ${i + 1} sans indice (recommandé)`);
  });
  (l.qcm || []).forEach((q, i) => {
    if (!q.q) erreurs.push(`${where} : QCM ${i + 1} sans question`);
    if (!q.options || q.options.length < 2 || q.options.length > 5) erreurs.push(`${where} : QCM ${i + 1} doit avoir entre 2 et 5 options`);
    if (q.correct === undefined || q.correct < 0 || q.correct >= (q.options || []).length) erreurs.push(`${where} : QCM ${i + 1} sans bonne réponse valide`);
    if (!q.exp) erreurs.push(`${where} : QCM ${i + 1} sans explication (obligatoire)`);
  });
  return erreurs.length === 0 || !erreurs.some(e => e.startsWith(where));
}

// ---------- Collecte des fichiers ----------
const lecons = [];
function ajouterLecon(l, source) {
  const normalise = {
    classe: (l.classe || '').trim(), matiere: (l.matiere || '').trim(), id: (l.id || '').trim(),
    titre: l.titre || '', duree: l.duree || '30 min', contenu: l.contenu || '',
    exercices: l.exercices || [], qcm: l.qcm || []
  };
  valider(normalise, source);
  lecons.push({ ...normalise, source });
}

function lireJSON(f) {
  const data = JSON.parse(fs.readFileSync(f, 'utf8'));
  (Array.isArray(data) ? data : [data]).forEach(l => ajouterLecon(l, path.basename(f)));
}
function lireMD(f) {
  ajouterLecon(parseMD(fs.readFileSync(f, 'utf8')), path.basename(f));
}
function lireCSVGroupe(fichiers) {
  // Un jeu CSV = lecons*.csv + exercices*.csv + qcm*.csv, liés par la colonne "id"
  const lec = [], exo = {}, qc = {};
  fichiers.forEach(f => {
    const rows = parseCSV(fs.readFileSync(f, 'utf8'));
    const nom = path.basename(f).toLowerCase();
    rows.forEach(r => {
      if (nom.startsWith('lecon')) lec.push(r);
      else if (nom.startsWith('exercice')) (exo[r.id] = exo[r.id] || []).push({ q: r.question, r: r.reponse, indice: r.indice || '' });
      else if (nom.startsWith('qcm')) {
        const options = [r.option_1, r.option_2, r.option_3, r.option_4, r.option_5].filter(Boolean);
        (qc[r.id] = qc[r.id] || []).push({ q: r.question, options, correct: parseInt(r.bonne_reponse, 10) - 1, exp: r.explication || '' });
      }
    });
  });
  lec.forEach(r => ajouterLecon({ ...r, exercices: exo[r.id] || [], qcm: qc[r.id] || [] }, 'CSV leçons'));
}

if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
const fichiers = fs.readdirSync(DIR).filter(f => fs.statSync(path.join(DIR, f)).isFile());
fichiers.filter(f => f.endsWith('.json')).forEach(f => { try { lireJSON(path.join(DIR, f)); } catch (e) { erreurs.push(`${f} : JSON invalide (${e.message})`); } });
fichiers.filter(f => f.endsWith('.md')).forEach(f => lireMD(path.join(DIR, f)));
const csv = fichiers.filter(f => f.endsWith('.csv')).map(f => path.join(DIR, f));
if (csv.length) lireCSVGroupe(csv);

// ---------- Doublons (avec les leçons déjà présentes dans data.js) ----------
const existantes = new Set();
try {
  const base = new Function(fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8') + '; return COURS;')();
  Object.values(base).forEach(m => Object.values(m).forEach(ls => ls.forEach(l => existantes.add(l.id))));
} catch (e) { avertissements.push('data.js illisible : vérification des doublons impossible'); }
const vues = new Set(); const finales = [];
lecons.forEach(l => {
  if (existantes.has(l.id) || vues.has(l.id)) { avertissements.push(`${l.source} → ${l.id} : identifiant déjà utilisé, leçon ignorée`); return; }
  vues.add(l.id); finales.push(l);
});

// ---------- Génération de data-import.js ----------
const groupe = {};
finales.forEach(({ source, ...l }) => {
  if (erreurs.some(e => e.includes(`→ ${l.id}`) && e.includes(source))) return;
  groupe[l.classe] = groupe[l.classe] || {};
  (groupe[l.classe][l.matiere] = groupe[l.classe][l.matiere] || []).push(l);
});
const valides = Object.values(groupe).reduce((s, m) => s + Object.values(m).reduce((t, ls) => t + ls.length, 0), 0);
fs.writeFileSync(path.join(ROOT, 'data-import.js'),
  `// Généré automatiquement par importer.js — ne pas modifier à la main.\n` +
  `(function () {\n  const IMPORT = ${JSON.stringify(groupe, null, 1)};\n` +
  `  Object.keys(IMPORT).forEach(c => Object.keys(IMPORT[c]).forEach(m => {\n` +
  `    COURS[c] = COURS[c] || {};\n    COURS[c][m] = COURS[c][m] || [];\n    COURS[c][m].push(...IMPORT[c][m]);\n  }));\n})();\n`, 'utf8');

// ---------- Rapport ----------
const rapport = [
  `RAPPORT D'IMPORT — ${new Date().toLocaleString('fr-FR')}`,
  `Leçons importées : ${valides}`,
  `Erreurs bloquantes : ${erreurs.length}`, ...erreurs.map(e => '  ✖ ' + e),
  `Avertissements : ${avertissements.length}`, ...avertissements.map(a => '  ⚠ ' + a)
].join('\n');
fs.writeFileSync(path.join(ROOT, 'rapport-import.txt'), rapport + '\n', 'utf8');
console.log(rapport);
console.log(erreurs.length ? '\nDes erreurs empêchent certaines leçons d\'être importées. Voir rapport-import.txt.' : '\nImport terminé ✔');
