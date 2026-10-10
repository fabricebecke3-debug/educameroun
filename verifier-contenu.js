// Usage : node verifier-contenu.js
// Affiche la couverture du programme : quelles classes/matières ont des leçons complètes.
const fs = require('fs');
const src = fs.readFileSync(__dirname + '/data.js', 'utf8');
const COURS = new Function(src + '; return COURS;')();
const CLASSES = ['6eme','5eme','4eme','3eme','2nde','1ere','terminale'];
const MATS = ['Français','Anglais','Mathématiques','SVT','Physique-Chimie','Histoire','Géographie','ECM','EPS','Informatique'];
let total = 0, ok = 0, problems = [];
for (const c of CLASSES) {
  for (const m of MATS.concat(['Philosophie']).filter(x => x !== 'Philosophie' || ['1ere','terminale'].includes(c))) {
    total++;
    const ls = (COURS[c] && COURS[c][m]) || [];
    if (!ls.length) { problems.push(`${c} / ${m} : AUCUNE leçon`); continue; }
    ls.forEach(l => {
      if (!l.contenu || l.contenu.length < 800) problems.push(`${c}/${m}/${l.id} : contenu trop court`);
      if (!l.exercices || l.exercices.length < 3) problems.push(`${c}/${m}/${l.id} : moins de 3 exercices`);
      if (!l.qcm || l.qcm.length < 5) problems.push(`${c}/${m}/${l.id} : moins de 5 QCM`);
    });
    ok++;
  }
}
console.log(`Matières couvertes : ${ok}/${total}`);
console.log(`Problèmes : ${problems.length}`);
problems.forEach(p => console.log(' -', p));
