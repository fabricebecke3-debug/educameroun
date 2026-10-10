# ÉduCameroun — Mise en ligne

## Contenu du dossier
- index.html : page principale
- app.js : logique (menu, leçons, QCM, recherche, tuteur IA, favoris)
- data.js : bibliothèque des cours (à compléter)
- sw.js : fonctionnement hors-ligne
- manifest.json : installation sur téléphone
- icon.png / icon-192.png : icônes
- verifier-contenu.js : contrôle de la couverture du programme

## 1. Vérifier le contenu
    node verifier-contenu.js
Le script liste les matières sans leçons et les leçons incomplètes.

## 2. Mettre en ligne (gratuit, HTTPS obligatoire)
- Netlify Drop : glisse le dossier sur app.netlify.com/drop
- ou GitHub Pages, ou Vercel

## 3. Installer sur téléphone
- Android (Chrome) : menu ⋮ → « Ajouter à l'écran d'accueil »
- iPhone (Safari) : Partager → « Sur l'écran d'accueil »

## 4. Activer l'IA en direct (optionnel)
Une clé API ne doit jamais être mise dans le code public. Il faut un petit serveur
qui reçoit { question, system } et répond { answer }. Mets son adresse dans
AI_ENDPOINT au début de app.js. Sans serveur, le tuteur hors-ligne cherche dans les cours.

## 5. Ajouter un cours
Dans data.js, ajoute un objet dans COURS['classe']['matière'] avec :
id, titre, duree, contenu (HTML), exercices [{q, r}], qcm [{q, options, correct, exp}].
Puis relance node verifier-contenu.js.

## IA en direct (Netlify)
1. Dans Netlify : Site settings → Environment variables → ajoute ANTHROPIC_API_KEY (ta clé API Anthropic).
2. Déploie le dossier avec netlify.toml et netlify/functions (plutôt via GitHub ou la CLI Netlify que par Drop).
3. Sans clé ou sans serveur, l'application passe automatiquement en tuteur hors-ligne.

## IMPORTER DU CONTENU (sans toucher au code)

1. Mets tes fichiers dans le dossier **contenu/** (pas dans contenu/modeles, qui sert d'exemple).
2. Lance : `node importer.js` (Node.js requis, gratuit sur nodejs.org).
3. Lis le rapport affiché et **rapport-import.txt** : il indique les erreurs à corriger.
4. Relance l'application : les nouvelles leçons apparaissent dans leur classe et leur matière.

### Format 1 : JSON (un fichier par matière)
Voir contenu/modeles/lecon.json. Champs : classe, matiere, id, titre, duree, contenu (HTML), exercices [{q, r, indice}], qcm [{q, options, correct, exp}]. `correct` commence à 0.

### Format 2 : Markdown (le plus simple à écrire)
Voir contenu/modeles/lecon.md.
- Titre : une ligne `# Titre`, puis `classe:`, `matiere:`, `id:`, `duree:`.
- `## Cours` : le texte ; une ligne vide sépare deux paragraphes ; `**mot**` met en gras.
- `## Exercices` : `Q:` la question, `R:` la réponse, `Indice:` une piste.
- `## QCM` : `Q:` la question, puis les options en `- `. La bonne réponse finit par `*`. Puis `Explication:`.

### Format 3 : CSV (Excel ou LibreOffice)
Trois fichiers liés par la colonne `id` :
- **lecons*.csv** : classe ; matiere ; id ; titre ; duree ; contenu
- **exercices*.csv** : id ; question ; reponse ; indice
- **qcm*.csv** : id ; question ; option_1 ; option_2 ; option_3 ; option_4 ; bonne_reponse (1 à 4) ; explication

Le séparateur est le point-virgule `;`. Enregistre depuis Excel avec « CSV (séparateur : point-virgule) ».

### Règles de validation
- classe et matière doivent figurer dans la liste officielle (6ème à Terminale ; matières de l'application).
- Chaque leçon a un id unique. Un id déjà utilisé est ignoré.
- Chaque QCM doit avoir 2 à 5 options, une bonne réponse et une explication.
- Un exercice sans indice donne seulement un avertissement.
