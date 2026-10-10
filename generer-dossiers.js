// Usage : node generer-dossiers.js
// Crée un dossier HTML imprimable par classe et par matière, dans le dossier "dossiers/".
// Pour un PDF : ouvre le fichier dans le navigateur → Imprimer → Enregistrer au format PDF.
const fs = require('fs');
const path = require('path');
const COURS = new Function(fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8') + '; return COURS;')();
const out = path.join(__dirname, 'dossiers');
fs.mkdirSync(out, { recursive: true });

const style = `body{font-family:'Segoe UI',Arial,sans-serif;max-width:800px;margin:auto;padding:1.5rem;line-height:1.6;color:#222}
h1{color:#006A4E;border-bottom:3px solid #FFD100}h2{color:#CE1126;margin-top:2rem}
.definition,.exemple,.astuce{padding:.6rem;margin:.6rem 0;border-left:4px solid #006A4E;background:#f2f8f5}
.astuce{border-color:#FF9800;background:#fff3e0}.definition{border-color:#FFD100;background:#fff8dc}
.qcm p{margin:.3rem 0}@media print{h2{page-break-after:avoid}.lecon{page-break-inside:avoid}}`;

let index = '<ul>';
for (const [classe, matieres] of Object.entries(COURS)) {
  fs.mkdirSync(path.join(out, classe), { recursive: true });
  for (const [matiere, lecons] of Object.entries(matieres)) {
    let html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>${matiere} — ${classe}</title><style>${style}</style></head><body>`;
    html += `<h1>${matiere} — ${classe}</h1>`;
    lecons.forEach((l, i) => {
      html += `<div class="lecon"><h2>${i + 1}. ${l.titre}</h2>${l.contenu}`;
      if (l.exercices && l.exercices.length) {
        html += `<h3>Exercices d'application</h3>`;
        l.exercices.forEach((e, j) => html += `<p><b>Q${j + 1}.</b> ${e.q}</p><p><i>Correction :</i> ${e.r}</p>`);
      }
      if (l.qcm && l.qcm.length) {
        html += `<h3>QCM</h3><div class="qcm">`;
        l.qcm.forEach((q, j) => html += `<p><b>${j + 1}. ${q.q}</b><br>${q.options.map((o, k) => String.fromCharCode(65 + k) + ') ' + o).join(' · ')}<br><i>Réponse : ${String.fromCharCode(65 + q.correct)} — ${q.exp || ''}</i></p>`);
        html += `</div>`;
      }
      html += `</div>`;
    });
    html += `</body></html>`;
    const file = path.join(out, classe, matiere.replace(/[^\wÀ-ÿ-]+/g, '_') + '.html');
    fs.writeFileSync(file, html, 'utf8');
    index += `<li>${classe} / ${matiere} (${lecons.length} leçon(s))</li>`;
  }
}
fs.writeFileSync(path.join(out, 'LISTE.txt'), index.replace(/<[^>]+>/g, '\n').replace(/\n+/g, '\n').trim() + '\n', 'utf8');
console.log('Dossiers générés dans ./dossiers');
