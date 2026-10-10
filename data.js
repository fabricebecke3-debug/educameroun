// Structure : COURS[classe][matière] = [leçon, ...]
// Leçon : id, titre, duree, contenu (HTML), exercices [{q, r}], qcm [{q, options, correct, exp}]
const COURS = {
  '4eme': {
    'Mathématiques': [{
      id: 'm4-pythagore',
      titre: 'Le théorème de Pythagore',
      duree: '35 min',
      contenu: `<div class="definition"><b>Théorème de Pythagore :</b> dans un triangle rectangle, le carré de l'hypoténuse (le côté opposé à l'angle droit, le plus long) est égal à la somme des carrés des deux autres côtés : <b>a² = b² + c²</b>.</div><p>Pour trouver l'hypoténuse : on calcule b² + c², puis on prend la racine carrée.</p><p>Pour trouver un côté : on calcule a² - b², puis la racine carrée.</p><div class="exemple"><b>Exemple :</b> un triangle rectangle a des côtés de 3 m et 4 m. L'hypoténuse vaut √(3² + 4²) = √25 = <b>5 m</b>.</div><div class="astuce">💡 Le triplet 3, 4, 5 revient souvent : il permet de vérifier rapidement un résultat.</div>`,
      exercices: [
        { q: "Calcule l'hypoténuse d'un triangle rectangle de côtés 6 et 8.", r: '√(6² + 8²) = √100 = <b>10</b>.' },
        { q: "Un triangle rectangle a une hypoténuse de 13 et un côté de 5. Calcule l'autre côté.", r: '√(13² - 5²) = √144 = <b>12</b>.' },
        { q: 'Un triangle a des côtés 5, 12 et 13. Est-il rectangle ?', r: '5² + 12² = 25 + 144 = 169 = 13². Oui, il est <b>rectangle</b>.' }
      ],
      qcm: [
        { q: "Dans un triangle rectangle, l'hypoténuse est :", options: ['le plus petit côté', "le côté opposé à l'angle droit", 'la hauteur', 'le côté du milieu'], correct: 1, exp: "C'est le côté le plus long." },
        { q: 'La formule de Pythagore est :', options: ['a = b + c', 'a² = b² + c²', 'a² = b × c', 'a = b² + c²'], correct: 1, exp: "Le carré de l'hypoténuse est la somme des carrés." },
        { q: "Si les côtés de l'angle droit valent 3 et 4, l'hypoténuse vaut :", options: ['7', '5', '12', '25'], correct: 1, exp: '√(9 + 16) = √25 = 5.' },
        { q: "Pour calculer un côté de l'angle droit, on fait :", options: ['a² + b²', 'a² - b²', 'a × b', 'a / b'], correct: 1, exp: "On soustrait le carré du côté connu au carré de l'hypoténuse." },
        { q: 'Le triplet 3, 4, 5 est :', options: ['un triangle non rectangle', 'un triangle rectangle', 'un carré', 'un cercle'], correct: 1, exp: '3² + 4² = 5²: il forme un triangle rectangle.' }
      ]
    }],
  'SVT': [{
      id: 'm4-svt-fleurs-fruits',
      titre: 'La reproduction des plantes à fleurs',
      duree: '30 min',
      contenu: `<div class="definition"><b>Reproduction sexuée :</b> création d'un nouvel être vivant à partir de la rencontre de deux cellules sexuelles (gamètes) : le pollen et l'ovule.</div><p><b>Les parties de la fleur :</b> les étamines produisent le pollen ; le pistil contient les ovules.</p><p><b>La pollinisation :</b> le transport du pollen vers le pistil, par le vent, les insectes ou les oiseaux.</p><p><b>La fécondation :</b> la rencontre du pollen et de l'ovule. L'ovule devient une graine, et l'ovaire devient le fruit.</p><div class="exemple"><b>Exemple camerounais :</b> les abeilles visitent les fleurs de papayer ; en transportant le pollen, elles permettent la formation des fruits.</div><div class="astuce">💡 Retiens : pollen → pistil (pollinisation), puis ovule → graine et ovaire → fruit (fécondation).</div>`,
      exercices: [
        { q: 'Quelle partie de la fleur produit le pollen ?', r: 'Les <b>étamines</b>.' },
        { q: "Qu'est-ce que la pollinisation ?", r: 'Le <b>transport du pollen</b> vers le pistil.' },
        { q: "Que devient l'ovule après fécondation ?", r: 'Il devient la <b>graine</b>.' }
      ],
      qcm: [
        { q: 'Le pistil contient :', options: ['le pollen', 'les ovules', 'les pétales seulement', 'les feuilles'], correct: 1, exp: 'Les ovules se trouvent dans le pistil.' },
        { q: 'La pollinisation est réalisée par :', options: ['la pluie seule', 'le vent ou les insectes', 'les racines', 'le sol'], correct: 1, exp: 'Le vent et les insectes transportent le pollen.' },
        { q: "L'ovaire devient :", options: ['la graine', 'le fruit', 'la feuille', 'la racine'], correct: 1, exp: "Après fécondation, l'ovaire devient le fruit." },
        { q: 'La reproduction sexuée repose sur :', options: ['une seule cellule', 'la rencontre de deux gamètes', 'la division de la tige', 'le bouturage seul'], correct: 1, exp: 'Elle exige la rencontre de deux gamètes.' },
        { q: 'Les étamines sont :', options: ['les parties qui produisent le pollen', 'les racines', 'les graines', 'les fruits'], correct: 0, exp: 'Elles fabriquent le pollen.' }
      ]
    }],
  'Français': [{
      id: 'm4-fr-passe-compose',
      titre: 'Le passé composé',
      duree: '30 min',
      contenu: `<div class="definition"><b>Passé composé :</b> temps du passé formé de l'auxiliaire <i>avoir</i> ou <i>être</i> au présent, suivi du participe passé.</div><p>Avec <i>avoir</i> : j'<b>ai mangé</b>, tu <b>as fini</b>, nous <b>avons lu</b>.</p><p>Avec <i>être</i> (verbes de mouvement comme aller, venir, partir, naître) : elle <b>est partie</b>, ils <b>sont venus</b>. Le participe s'accorde avec le sujet.</p><div class="exemple"><b>Exemple :</b> « Hier, nous sommes allés au marché de Mokolo. » Le verbe aller prend être : le participe « allés » s'accorde avec « nous ».</div><div class="astuce">💡 Pour les verbes du 1er groupe, le participe passé se termine par -é : chanté, marché, parlé.</div>`,
      exercices: [
        { q: 'Conjugue « manger » au passé composé avec « je ».', r: "<b>J'ai mangé</b>." },
        { q: 'Conjugue « aller » au passé composé avec « elle ».', r: '<b>Elle est allée</b>.' },
        { q: 'Mets au passé composé : « Ils finissent leur travail. »', r: '<b>Ils ont fini</b> leur travail.' }
      ],
      qcm: [
        { q: 'Le passé composé se forme avec :', options: ['le futur et le présent', 'un auxiliaire avoir ou être et un participe passé', 'seulement le participe', "l'infinitif"], correct: 1, exp: 'Il combine auxiliaire et participe passé.' },
        { q: '« Ils ___ partis hier. » Quel auxiliaire ?', options: ['ont', 'sont', 'avons', 'êtes'], correct: 1, exp: 'Partir se conjugue avec être.' },
        { q: 'Le participe passé de « finir » est :', options: ['fini', 'finis', 'finit', 'finir'], correct: 0, exp: 'Le participe de finir est « fini ».' },
        { q: "Dans « Elle est partie », le participe s'accorde :", options: ['avec le sujet elle', 'avec rien', 'avec le verbe', 'avec le complément'], correct: 0, exp: "Avec être, le participe s'accorde avec le sujet." },
        { q: 'Quelle phrase est au passé composé ?', options: ['Je mange du riz.', "J'ai mangé du riz.", 'Je mangerai du riz.', 'Je mangeais du riz.'], correct: 1, exp: "« J'ai mangé » est au passé composé." }
      ]
    }],
  'Histoire': [{
      id: 'm4-hist-guerre-cameroun',
      titre: 'La Première Guerre mondiale au Cameroun',
      duree: '35 min',
      contenu: `<div class="definition"><b>Première Guerre mondiale (1914-1918) :</b> conflit mondial opposant notamment la France, le Royaume-Uni et leurs alliés à l'Allemagne.</div><p>Au Cameroun, l'Allemagne est attaquée dès 1914 par les forces françaises et britanniques. Les combats dans la colonie se terminent en 1916 par la défaite allemande.</p><p><b>Les conséquences :</b> le territoire est partagé entre la France et le Royaume-Uni. Des milliers de soldats africains, appelés tirailleurs, participent aux combats, et les populations subissent les réquisitions et les travaux forcés.</p><div class="exemple"><b>Exemple :</b> des tirailleurs camerounais ont combattu aux côtés des troupes françaises et britanniques pendant la guerre.</div><div class="astuce">💡 Retiens la date clé : 1916, fin des combats au Cameroun et partage du territoire.</div>`,
      exercices: [
        { q: 'En quelle année les combats au Cameroun se terminent-ils ?', r: 'En <b>1916</b>.' },
        { q: "Quelles puissances attaquent l'Allemagne au Cameroun en 1914 ?", r: 'La <b>France</b> et le <b>Royaume-Uni</b>.' },
        { q: 'Qui sont les tirailleurs ?', r: "Des <b>soldats africains</b> enrôlés dans l'armée coloniale." }
      ],
      qcm: [
        { q: 'La Première Guerre mondiale commence en :', options: ['1914', '1939', '1960', '1884'], correct: 0, exp: 'Elle commence en 1914.' },
        { q: 'La guerre au Cameroun se termine par :', options: ['la victoire allemande', 'la défaite allemande', 'un accord de paix sans combat', "l'indépendance"], correct: 1, exp: "L'Allemagne est vaincue en 1916." },
        { q: 'Après la guerre, le Cameroun est :', options: ["unifié sous l'Allemagne", 'partagé entre la France et le Royaume-Uni', 'indépendant', "rattaché à l'Espagne"], correct: 1, exp: 'Le territoire est partagé.' },
        { q: 'Les tirailleurs sont :', options: ['des marins européens', 'des soldats africains enrôlés', 'des commerçants', 'des prêtres'], correct: 1, exp: 'Ce sont des soldats africains.' },
        { q: 'Pendant la guerre, les populations subissent :', options: ["l'enseignement gratuit", 'les réquisitions et les travaux forcés', 'la paix totale', 'le tourisme'], correct: 1, exp: 'Elles subissent de lourdes contraintes.' }
      ]
    }],
  'Anglais': [{
      id: 'm4-en-past-simple',
      titre: 'The past simple (Le prétérit)',
      duree: '30 min',
      contenu: `<div class="definition"><b>Past simple :</b> sert à parler d'actions terminées dans le passé.</div><p><b>Verbes réguliers :</b> on ajoute -ed (walk → walked, play → played).</p><p><b>Verbes irréguliers :</b> il faut les apprendre (go → went, see → saw, have → had, eat → ate).</p><p><b>Négation :</b> did not (didn't) + verbe à l'infinitif : <i>I didn't go.</i></p><div class="exemple"><b>Exemple camerounais :</b> <i>Yesterday, I went to Douala. I saw my cousin and we played football.</i> (Hier, je suis allé à Douala. J'ai vu mon cousin et nous avons joué au football.)</div><div class="astuce">💡 Avec un verbe irrégulier, ne mets pas -ed : on dit <i>went</i>, pas <i>goed</i>.</div>`,
      exercices: [
        { q: 'Mets au past simple : « I play. » (hier)', r: '<i>I played.</i>' },
        { q: 'Traduis : « Il a vu le lion. »', r: '<i>He saw the lion.</i>' },
        { q: 'Mets à la forme négative : « She went to school. »', r: "<i>She did not (didn't) go to school.</i>" }
      ],
      qcm: [
        { q: 'Le past simple de « walk » est :', options: ['walk', 'walked', 'walking', 'walks'], correct: 1, exp: 'Verbe régulier : on ajoute -ed.' },
        { q: 'Le past simple de « go » est :', options: ['goed', 'gone', 'went', 'going'], correct: 2, exp: 'Go est irrégulier : went.' },
        { q: 'Pour la négation au past simple, on utilise :', options: ['did not', 'does not', 'is not', 'has not'], correct: 0, exp: 'On utilise « did not » au passé.' },
        { q: '« Yesterday » indique :', options: ['le futur', 'le passé', 'le présent', 'une habitude'], correct: 1, exp: 'Yesterday = hier.' },
        { q: 'Quelle phrase est au past simple ?', options: ['I eat rice.', 'I ate rice.', 'I will eat rice.', 'I am eating rice.'], correct: 1, exp: '« Ate » est le past simple de eat.' }
      ]
    }],
    'Physique-Chimie': [{
      id: 'm4-pc-circuits',
      titre: 'Les circuits électriques en série et en dérivation',
      duree: '35 min',
      contenu: `<div class="definition"><b>Circuit en série :</b> les dipôles sont branchés les uns à la suite des autres ; le courant a un seul chemin.<br><b>Circuit en dérivation :</b> le courant se divise entre plusieurs branches parallèles.</div><p><b>En série :</b> l'intensité est la même partout dans le circuit ; si un dipôle est coupé, tout s'arrête.</p><p><b>En dérivation :</b> l'intensité totale est la somme des intensités dans chaque branche ; si une branche est coupée, les autres continuent à fonctionner.</p><div class="exemple"><b>Exemple camerounais :</b> les lampes d'une maison sont branchées en dérivation : si une lampe grille, les autres restent allumées.</div><div class="astuce">💡 Retiens : série = un seul chemin ; dérivation = plusieurs chemins.</div>`,
      exercices: [
        { q: "Dans un circuit en série, l'intensité est-elle la même partout ?", r: 'Oui, elle est la <b>même</b> dans tout le circuit.' },
        { q: "Pourquoi les lampes d'une maison sont-elles en dérivation ?", r: "Pour qu'une lampe <b>grillée</b> n'éteigne pas les autres." },
        { q: "Dans un circuit en dérivation, comment se calcule l'intensité totale ?", r: "C'est la <b>somme</b> des intensités des branches." }
      ],
      qcm: [
        { q: 'Dans un circuit en série, le courant :', options: ['a plusieurs chemins', 'a un seul chemin', 'ne circule pas', 'change de sens'], correct: 1, exp: "Il n'a qu'un seul chemin." },
        { q: 'En dérivation, si une branche est coupée :', options: ["tout s'arrête", 'les autres branches continuent', 'le générateur explose', 'le courant augmente seulement'], correct: 1, exp: 'Les autres branches restent alimentées.' },
        { q: "Dans un circuit en série, l'intensité :", options: ["varie d'un dipôle à l'autre", 'est la même partout', 'est nulle', 'double à chaque lampe'], correct: 1, exp: 'Elle est identique dans toutes les parties.' },
        { q: "L'intensité totale en dérivation est :", options: ['la différence des branches', 'la somme des branches', 'la moyenne seulement', 'toujours nulle'], correct: 1, exp: 'On additionne les intensités des branches.' },
        { q: 'Un interrupteur sert à :', options: ['produire du courant', 'ouvrir ou fermer le circuit', 'mesurer la tension', 'éclairer'], correct: 1, exp: 'Il ouvre ou ferme le circuit.' }
      ]
    }],
    'Géographie': [{
      id: 'm4-geo-cameroun-population',
      titre: 'La population et les villes du Cameroun',
      duree: '30 min',
      contenu: `<div class="definition"><b>Population :</b> ensemble des habitants d'un territoire. <b>Densité :</b> nombre d'habitants par km².</div><p>Le Cameroun compte plus de 25 millions d'habitants. La population est inégalement répartie : les régions du littoral et de l'Ouest sont plus peuplées que l'Est ou le Nord.</p><p><b>Les grandes villes :</b> Yaoundé, capitale politique et administrative ; Douala, principal port et capitale économique.</p><div class="exemple"><b>Exemple :</b> Douala attire de nombreux travailleurs venus de tout le pays, car son port et ses entreprises offrent beaucoup d'emplois.</div><div class="astuce">💡 Une ville capitale n'est pas toujours la plus grande : à Douala, l'activité économique est plus forte qu'à Yaoundé.</div>`,
      exercices: [
        { q: 'Quelle est la capitale politique du Cameroun ?', r: '<b>Yaoundé</b>.' },
        { q: 'Quelle ville est le principal port du pays ?', r: '<b>Douala</b>.' },
        { q: 'Pourquoi Douala attire-t-elle des habitants ?', r: "Parce que son port et ses entreprises offrent beaucoup d'<b>emplois</b>." }
      ],
      qcm: [
        { q: 'La densité de population se mesure en :', options: ['habitants par km²', 'km par habitant', 'kg par habitant', 'litres par km²'], correct: 0, exp: "C'est le nombre d'habitants par km²." },
        { q: 'La capitale politique du Cameroun est :', options: ['Douala', 'Yaoundé', 'Garoua', 'Bafoussam'], correct: 1, exp: "C'est Yaoundé." },
        { q: 'La capitale économique du Cameroun est :', options: ['Douala', 'Yaoundé', 'Maroua', 'Kribi'], correct: 0, exp: 'Douala est le centre économique.' },
        { q: 'La population camerounaise est :', options: ['répartie uniformément', 'inégalement répartie', 'absente du littoral', 'concentrée au nord seulement'], correct: 1, exp: 'Elle est inégalement répartie.' },
        { q: 'Les régions les plus peuplées sont souvent :', options: ["le littoral et l'Ouest", 'les déserts', 'les montagnes isolées', 'les lacs'], correct: 0, exp: "Le littoral et l'Ouest sont plus peuplés." }
      ]
    }],
    'ECM': [{
      id: 'm4-ecm-droits-homme',
      titre: "Les droits de l'homme",
      duree: '30 min',
      contenu: `<div class="definition"><b>Droits de l'homme :</b> droits fondamentaux reconnus à tout être humain, sans distinction de race, de sexe, de religion ou d'origine.</div><p>La <b>Déclaration universelle des droits de l'homme</b> a été adoptée par l'ONU en 1948.</p><p>• <b>Droits civils et politiques</b> : droit à la vie, à la liberté, à l'égalité devant la loi, à la liberté d'expression.</p><p>• <b>Droits économiques et sociaux</b> : droit à l'éducation, à la santé, au travail, à un niveau de vie décent.</p><div class="exemple"><b>Exemple :</b> le droit à l'éducation permet à chaque enfant camerounais d'aller à l'école, quels que soient ses moyens.</div><div class="astuce">💡 Un droit de l'homme appartient à chacun dès la naissance : il ne se mérite pas.</div>`,
      exercices: [
        { q: "En quelle année la Déclaration universelle des droits de l'homme a-t-elle été adoptée ?", r: 'En <b>1948</b>.' },
        { q: 'Cite un droit civil et politique.', r: "Le droit à la liberté d'expression (ou à la vie, à l'égalité)." },
        { q: 'Cite un droit économique et social.', r: "Le droit à l'éducation (ou à la santé, au travail)." }
      ],
      qcm: [
        { q: "La Déclaration universelle des droits de l'homme est adoptée par :", options: ["l'UA", "l'ONU", 'la France seule', 'le Cameroun'], correct: 1, exp: "C'est l'ONU, en 1948." },
        { q: "Le droit à la liberté d'expression est :", options: ['un droit économique', 'un droit civil et politique', 'un devoir scolaire', 'une taxe'], correct: 1, exp: "C'est un droit civil et politique." },
        { q: "Les droits de l'homme s'appliquent :", options: ['aux adultes seulement', 'à tout être humain', 'aux citoyens riches seulement', 'aux hommes seulement'], correct: 1, exp: 'Ils concernent chaque être humain.' },
        { q: "Le droit à l'éducation fait partie des droits :", options: ['civils et politiques', 'économiques et sociaux', 'militaires', 'commerciaux'], correct: 1, exp: "C'est un droit économique et social." },
        { q: "Les droits de l'homme sont fondés sur :", options: ['la richesse', 'la dignité humaine', 'la force', 'la naissance seulement'], correct: 1, exp: 'La dignité humaine en est le fondement.' }
      ]
    }],
    'EPS': [{
      id: 'm4-eps-athletisme',
      titre: "L'athlétisme : sauts et lancers",
      duree: '30 min',
      contenu: `<div class="definition"><b>Athlétisme :</b> ensemble d'épreuves de course, de sauts et de lancers, qui développent vitesse, force et coordination.</div><p><b>Le saut en longueur :</b> une course d'élan, un appel (impulsion) avec un pied, puis une réception les jambes fléchies.</p><p><b>Le lancer du poids ou du disque :</b> l'élan, la rotation du corps et l'effort final du bras et de la jambe.</p><div class="exemple"><b>Exemple :</b> à l'école, on mesure la distance du saut depuis la planche d'appel jusqu'à la marque laissée dans le sable.</div><div class="astuce">💡 La sécurité d'abord : ne saute jamais sans que l'espace de réception soit libre.</div>`,
      exercices: [
        { q: 'Quelles sont les trois phases du saut en longueur ?', r: "L'élan, l'impulsion (appel) et la réception." },
        { q: 'Quelle qualité est sollicitée par le lancer ?', r: 'La <b>force</b> (et la coordination).' },
        { q: "Pourquoi vérifier l'espace de réception ?", r: 'Pour éviter les <b>blessures</b> pendant la chute.' }
      ],
      qcm: [
        { q: "L'impulsion dans le saut en longueur se fait avec :", options: ['les mains', 'un pied', 'la tête', 'les épaules seulement'], correct: 1, exp: "L'appel se fait avec un pied." },
        { q: "L'athlétisme regroupe :", options: ['courses, sauts et lancers', 'seulement les jeux de ballon', 'la natation', 'la gymnastique seule'], correct: 0, exp: "Il comprend ces trois familles d'épreuves." },
        { q: "La réception d'un saut se fait :", options: ['les jambes tendues', 'les jambes fléchies', 'sur la tête', 'sur le dos'], correct: 1, exp: 'Les jambes fléchies amortissent le choc.' },
        { q: 'Le lancer du disque sollicite surtout :', options: ['la mémoire', 'la force et la rotation', 'la vue', "l'audition"], correct: 1, exp: "C'est une épreuve de force et de rotation." },
        { q: "Avant une épreuve d'athlétisme, il faut :", options: ['ne rien faire', "s'échauffer", "boire beaucoup d'alcool", 'courir sans règles'], correct: 1, exp: "L'échauffement prépare le corps." }
      ]
    }],
    'Informatique': [{
      id: 'm4-info-internet-recherche',
      titre: "Internet et la recherche d'information",
      duree: '30 min',
      contenu: `<div class="definition"><b>Moteur de recherche :</b> outil qui affiche des pages web correspondant à des mots-clés. <b>Source fiable :</b> site dont l'auteur et la date sont connus, et qui cite ses informations.</div><p><b>Chercher efficacement :</b> utiliser des mots-clés précis, par exemple « pluviométrie Douala 2025 ».</p><p><b>Vérifier une information :</b> comparer plusieurs sources, regarder l'auteur, la date et le site.</p><p><b>Citer ses sources :</b> indiquer d'où vient l'information, pour respecter le travail des auteurs.</p><div class="exemple"><b>Exemple :</b> pour un exposé sur le relief du Cameroun, un élève compare un site officiel et un article de presse, puis note ses sources.</div><div class="astuce">💡 Une information trouvée sur Internet n'est pas forcément vraie : vérifie toujours.</div>`,
      exercices: [
        { q: 'À quoi sert un moteur de recherche ?', r: 'À afficher des pages web qui correspondent à des <b>mots-clés</b>.' },
        { q: 'Cite un critère de source fiable.', r: "L'<b>auteur</b> et la <b>date</b> sont connus (ou : elle cite ses sources)." },
        { q: 'Pourquoi citer ses sources ?', r: "Pour indiquer d'où vient l'information et respecter le travail des auteurs." }
      ],
      qcm: [
        { q: 'Un bon mot-clé pour une recherche est :', options: ['un mot très vague', 'un mot précis', 'une phrase de 50 mots', 'un symbole seul'], correct: 1, exp: 'Un mot précis donne des résultats pertinents.' },
        { q: 'Pour vérifier une information, il faut :', options: ['la croire directement', 'comparer plusieurs sources', 'copier-coller sans lire', 'ignorer la date'], correct: 1, exp: 'Comparer les sources aide à vérifier.' },
        { q: 'Une source fiable indique souvent :', options: ['rien', 'son auteur et sa date', 'uniquement des publicités', 'des fautes'], correct: 1, exp: "L'auteur et la date sont des critères de fiabilité." },
        { q: 'Citer ses sources sert à :', options: ['cacher son travail', "indiquer l'origine de l'information", 'allonger le texte', 'tricher'], correct: 1, exp: "C'est la règle de l'honnêteté intellectuelle." },
        { q: 'Un moteur de recherche est :', options: ['un logiciel de dessin', 'un outil qui trouve des pages web', 'un câble', 'un écran'], correct: 1, exp: 'Il trouve des pages web.' }
      ]
    }]
  },
  '5eme': {
    'Mathématiques': [{
      id: 'm5-nombres-relatifs-addition',
      titre: 'Les nombres relatifs : l\'addition',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Nombre relatif :</b> nombre précédé d'un signe + (positif) ou - (négatif). Exemples : +5, -3.</div>
        <p><b>Même signe :</b> on additionne les distances à zéro (les valeurs absolues) et on garde le signe commun.<br>Exemple : (-4) + (-6) = -10.</p>
        <p><b>Signes différents :</b> on soustrait les distances à zéro et on garde le signe du nombre qui est le plus éloigné de zéro.<br>Exemple : (-7) + 3 = -4 ; (+8) + (-5) = +3.</p>
        <div class="exemple"><b>Exemple camerounais :</b> un commerçant de Bafoussam a une dette de 5 000 F (–5 000) et il encaisse une vente de 8 000 F (+8 000). Son solde est : –5 000 + 8 000 = <b>+3 000 F</b>.</div>
        <div class="astuce">💡 Avant de calculer, regarde les signes : même signe = on additionne ; signes différents = on soustrait.</div>`,
      exercices: [
        { q: 'Calcule (-4) + (-6).', r: '<b>-10</b> (même signe).' },
        { q: 'Calcule (-7) + 3.', r: '<b>-4</b> (7 - 3 = 4, et le signe est celui de -7).' },
        { q: 'Calcule 6 + (-9).', r: '<b>-3</b> (9 - 6 = 3, et le signe est celui de -9).' }
      ],
      qcm: [
        { q: 'Combien font (+5) + (+2) ?', options: ['-7', '7', '3', '-3'], correct: 1, exp: 'Même signe positif : 5 + 2 = 7.' },
        { q: 'Combien font (-8) + (-1) ?', options: ['7', '-7', '-9', '9'], correct: 2, exp: 'Même signe négatif : 8 + 1 = 9, donc -9.' },
        { q: 'Combien font (-5) + 9 ?', options: ['-14', '4', '-4', '14'], correct: 1, exp: '9 - 5 = 4, signe positif car 9 est le plus loin de zéro.' },
        { q: 'Combien font (+3) + (-3) ?', options: ['6', '0', '-6', '3'], correct: 1, exp: 'Deux nombres opposés s\'annulent.' },
        { q: 'Quel est le signe de (-2) + 7 ?', options: ['négatif', 'positif', 'nul', 'impossible à dire'], correct: 1, exp: '7 est plus éloigné de zéro que -2, donc le résultat est positif.' }
      ]
    }],
    'SVT': [{
      id: 'm5-svt-digestion',
      titre: 'La digestion chez l\'homme',
      duree: '35 min',
      contenu: `
        <div class="definition"><b>Digestion :</b> transformation des aliments en nutriments simples, que le sang peut transporter vers les cellules.</div>
        <p><b>Le trajet des aliments :</b> bouche (mastication, salive qui commence à digérer l'amidon) → œsophage → estomac (digestion des protéines grâce au suc gastrique) → intestin grêle (fin de la digestion et absorption des nutriments) → gros intestin (absorption de l'eau) → anus (élimination des résidus).</p>
        <p><b>L'absorption :</b> les nutriments traversent la paroi de l'intestin grêle et passent dans le sang.</p>
        <div class="exemple"><b>Exemple :</b> un plat de foufou mange une bouillie d'amidon. La salive commence à le transformer en sucres simples dans la bouche ; la digestion se termine dans l'intestin grêle.</div>
        <div class="astuce">💡 Retiens l'ordre du trajet : bouche, œsophage, estomac, intestin grêle, gros intestin, anus.</div>`,
      exercices: [
        { q: 'Quel organe absorbe les nutriments dans le sang ?', r: "L'<b>intestin grêle</b>." },
        { q: 'Quel est le rôle de la salive ?', r: "Elle commence la digestion de l'amidon (transformation en sucres simples) et humidifie les aliments." },
        { q: 'Quel organe est le premier à recevoir les aliments après la bouche ?', r: "L'<b>œsophage</b>, qui conduit les aliments jusqu'à l'estomac." }
      ],
      qcm: [
        { q: 'La digestion commence dans :', options: ['l\'estomac', 'la bouche', 'l\'anus', 'le gros intestin'], correct: 1, exp: 'La digestion débute dans la bouche avec la salive.' },
        { q: 'L\'absorption des nutriments a lieu surtout dans :', options: ['la bouche', 'l\'œsophage', 'l\'intestin grêle', 'l\'anus'], correct: 2, exp: 'L\'intestin grêle absorbe les nutriments.' },
        { q: 'L\'eau est absorbée surtout dans :', options: ['le gros intestin', 'la bouche', 'l\'œsophage', 'l\'anus'], correct: 0, exp: 'Le gros intestin absorbe l\'eau.' },
        { q: 'Le suc gastrique est produit par :', options: ['la bouche', 'l\'estomac', 'l\'anus', 'le cœur'], correct: 1, exp: 'Le suc gastrique est sécrété par l\'estomac.' },
        { q: 'L\'ordre correct du trajet est :', options: ['estomac, bouche, anus', 'bouche, œsophage, estomac, intestin grêle', 'intestin grêle, bouche, estomac', 'anus, estomac, bouche'], correct: 1, exp: 'Les aliments suivent cet ordre.' }
      ]
    }],
    'Français': [{
      id: 'm5-fr-cod',
      titre: 'Le complément d\'objet direct (COD)',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Complément d'objet direct (COD) :</b> mot ou groupe de mots qui complète directement un verbe sans préposition. On le trouve en posant la question <i>qui ?</i> ou <i>quoi ?</i> après le verbe.</div>
        <p>Exemple : « Le maître corrige <b>les cahiers</b>. » → Corrige quoi ? → les cahiers : c'est le COD.</p>
        <p><b>Remplacement par un pronom :</b> le, la, l', les (ou me, te, nous, vous selon la personne).<br>« Le maître corrige les cahiers » → « Le maître <b>les</b> corrige. »</p>
        <div class="exemple"><b>Exemple camerounais :</b> « Maman prépare le ndolé. » Le COD est « le ndolé » (prépare quoi ?). On peut dire : « Maman <b>le</b> prépare. »</div>
        <div class="astuce">💡 Ne confonds pas le COD (sans préposition) et le COI, qui est introduit par « à » ou « de » : « Il pense à son frère » (COI).</div>`,
      exercices: [
        { q: 'Trouve le COD : « Les élèves lisent un livre. »', r: 'COD : <b>un livre</b> (lisent quoi ?).' },
        { q: 'Remplace le COD par un pronom : « J\'achète les mangues. »', r: '« Je <b>les</b> achète. »' },
        { q: 'Trouve le COD : « Nous aimons notre école. »', r: 'COD : <b>notre école</b> (aimons quoi ?).' }
      ],
      qcm: [
        { q: 'Dans « Il mange du riz », le COD est :', options: ['Il', 'mange', 'du riz', 'riz seul'], correct: 2, exp: '« Du riz » répond à la question « mange quoi ? ».' },
        { q: 'Pour trouver le COD, on pose la question :', options: ['où ?', 'quand ?', 'qui ? ou quoi ?', 'pourquoi ?'], correct: 2, exp: 'Le COD répond à « qui ? » ou « quoi ? ».' },
        { q: 'Le pronom qui remplace « les livres » est :', options: ['le', 'la', 'les', 'lui'], correct: 2, exp: '« Les » remplace un COD pluriel.' },
        { q: 'Dans « Il pense à son frère », « à son frère » est :', options: ['un COD', 'un COI', 'un sujet', 'un attribut'], correct: 1, exp: 'Il est introduit par « à » : c\'est un COI.' },
        { q: 'Dans « Elle prépare la sauce », le COD est :', options: ['elle', 'prépare', 'la sauce', 'la'], correct: 2, exp: '« La sauce » répond à « prépare quoi ? ».' }
      ]
    }],
    'Histoire': [{
      id: 'm5-hist-empires-afrique',
      titre: 'Les grands empires d\'Afrique de l\'Ouest',
      duree: '35 min',
      contenu: `
        <div class="definition"><b>Empire :</b> grand État qui réunit plusieurs peuples sous l'autorité d'un souverain, grâce à une armée, un commerce et une administration.</div>
        <p>Trois grands empires ont marqué l'Afrique de l'Ouest :</p>
        <p>• <b>L'empire du Ghana</b> (vers le IVe-XIIIe siècle) : contrôlait le commerce de l'or et du sel entre le Sahara et la savane.</p>
        <p>• <b>L'empire du Mali</b> (XIIIe-XVe siècle) : fondé par Soundiata Keïta, il est connu pour la Charte du Mandé et la richesse de Tombouctou.</p>
        <p>• <b>L'empire songhaï</b> (XVe-XVIe siècle) : centré sur Gao, il devint l'un des plus grands États d'Afrique avant l'arrivée des armées marocaines en 1591.</p>
        <div class="exemple"><b>Exemple :</b> les caravanes de sel venant du Sahara échangeaient leur sel contre l'or de la savane. C'est ce commerce qui a fait la richesse de ces empires.</div>
        <div class="astuce">💡 Retiens l'ordre chronologique : Ghana, puis Mali, puis Songhaï ; chaque empire succède au précédent dans la même région.</div>`,
      exercices: [
        { q: 'Quelle richesse contrôlait l\'empire du Ghana ?', r: 'Le commerce de l\'<b>or</b> et du <b>sel</b>.' },
        { q: 'Qui a fondé l\'empire du Mali ?', r: '<b>Soundiata Keïta</b>.' },
        { q: 'Quelle ville était centre de l\'empire songhaï ?', r: '<b>Gao</b>.' }
      ],
      qcm: [
        { q: 'Un empire désigne :', options: ['une petite ville', 'un grand État réunissant plusieurs peuples', 'une école', 'un marché local'], correct: 1, exp: 'Un empire rassemble plusieurs peuples sous un souverain.' },
        { q: 'L\'empire du Ghana contrôlait surtout :', options: ['le pétrole', 'l\'or et le sel', 'le café', 'le fer seulement'], correct: 1, exp: 'Il contrôlait le commerce de l\'or et du sel.' },
        { q: 'Le fondateur de l\'empire du Mali est :', options: ['Askia Mohammed', 'Soundiata Keïta', 'Samory Touré', 'Ousmane dan Fodio'], correct: 1, exp: 'C\'est Soundiata Keïta.' },
        { q: 'Tombouctou est associée à :', options: ['l\'empire du Mali', 'l\'Égypte', 'le royaume bamoun', 'la Rome antique'], correct: 0, exp: 'Tombouctou était une grande ville de l\'empire du Mali.' },
        { q: 'L\'ordre chronologique correct est :', options: ['Mali, Ghana, Songhaï', 'Songhaï, Mali, Ghana', 'Ghana, Mali, Songhaï', 'Ghana, Songhaï, Mali'], correct: 2, exp: 'Le Ghana précède le Mali, puis vient le Songhaï.' }
      ]
    }],
    'Anglais': [{
      id: 'm5-en-routine',
      titre: 'Daily routine (La routine quotidienne)',
      duree: '25 min',
      contenu: `<div class="definition"><b>Present simple :</b> on l'utilise pour les habitudes et les faits réguliers. À la 3e personne du singulier (he, she, it), on ajoute un -s au verbe.</div><p>I <b>get</b> up at six. (Je me lève à six heures.)</p><p>She <b>goes</b> to school by bus. (Elle va à l'école en bus.)</p><p>Questions et négations : <i>Do you play football?</i> / <i>He does not (doesn't) play.</i></p><div class="exemple"><b>Exemple camerounais :</b> <i>My father works in Douala. He leaves home at seven.</i> (Mon père travaille à Douala. Il quitte la maison à sept heures.)</div><div class="astuce">💡 Ne mets pas de -s après « I », « you », « we », « they » : seulement après « he », « she », « it ».</div>`,
      exercices: [
        { q: 'Conjugue « play » avec « she ».', r: '<i>She plays.</i>' },
        { q: 'Traduis : « Il étudie à Yaoundé. »', r: '<i>He studies in Yaoundé.</i>' },
        { q: 'Mets à la forme négative : « I like rice. »', r: "<i>I do not (don't) like rice.</i>" }
      ],
      qcm: [
        { q: 'Quelle forme est correcte ?', options: ['He go to school.', 'He goes to school.', 'He going to school.', 'He gos to school.'], correct: 1, exp: 'À la 3e personne, on ajoute -s.' },
        { q: '« Do you play? » est :', options: ['une affirmation', 'une question', 'un ordre', 'une exclamation'], correct: 1, exp: "C'est une question au present simple." },
        { q: 'La forme négative de « I work » est :', options: ['I not work.', 'I do not work.', 'I no work.', 'I does not work.'], correct: 1, exp: 'On utilise « do not » avec I.' },
        { q: 'Traduis « Elle mange du riz. »', options: ['She eat rice.', 'She eats rice.', 'She eating rice.', 'She is eat rice.'], correct: 1, exp: 'Avec « she », on met -s : eats.' },
        { q: '« Every day » signifie :', options: ['hier', 'chaque jour', 'demain', 'jamais'], correct: 1, exp: '« Every day » = chaque jour.' }
      ]
    }],
    'Physique-Chimie': [{
      id: 'm5-pc-solutions',
      titre: 'Les solutions : soluté et solvant',
      duree: '30 min',
      contenu: `<div class="definition"><b>Solution :</b> mélange homogène obtenu quand une substance (le <b>soluté</b>) se dissout dans un liquide (le <b>solvant</b>).</div><p>Exemple : du sel (soluté) dissous dans de l'eau (solvant) donne de l'eau salée.</p><p><b>Solubilité :</b> capacité d'un soluté à se dissoudre. Le sucre se dissout bien dans l'eau chaude, mieux que dans l'eau froide.</p><div class="exemple"><b>Exemple camerounais :</b> le jus de bissap est une solution : les arômes et les colorants de la fleur d'hibiscus se dissolvent dans l'eau, et le liquide reste homogène.</div><div class="astuce">💡 Une solution est homogène : on ne voit pas les particules du soluté, même si elles sont bien présentes.</div>`,
      exercices: [
        { q: "Dans de l'eau sucrée, quel est le soluté ?", r: 'Le <b>sucre</b>.' },
        { q: "Dans l'eau salée, quel est le solvant ?", r: "L'<b>eau</b>." },
        { q: 'Une solution est-elle un mélange homogène ou hétérogène ?', r: 'Un mélange <b>homogène</b>.' }
      ],
      qcm: [
        { q: 'Le soluté est :', options: ['le liquide qui dissout', 'la substance qui se dissout', 'le récipient', 'le gaz'], correct: 1, exp: 'Le soluté se dissout dans le solvant.' },
        { q: 'Le solvant est généralement :', options: ['le sel', 'le liquide qui dissout', 'le sucre', 'le fer'], correct: 1, exp: "C'est le liquide dans lequel on dissout." },
        { q: 'Un mélange homogène a :', options: ['plusieurs aspects visibles', 'un seul aspect', 'des couches séparées', 'des solides visibles'], correct: 1, exp: 'Une solution a un aspect uniforme.' },
        { q: 'Le sucre se dissout mieux dans :', options: ["l'eau froide", "l'eau chaude", "l'huile", "l'air"], correct: 1, exp: 'La chaleur augmente la solubilité du sucre.' },
        { q: 'Le bissap, une fois préparé, est :', options: ['un corps pur', 'une solution', 'un gaz', 'un solide'], correct: 1, exp: "C'est une solution où les arômes sont dissous." }
      ]
    }],
    'Géographie': [{
      id: 'm5-geo-relief-afrique',
      titre: "Le relief et le climat de l'Afrique",
      duree: '30 min',
      contenu: `<div class="definition"><b>Continent africain :</b> deuxième plus grand continent du monde, traversé par l'équateur.</div><p><b>Le relief :</b> de vastes plateaux dominent l'Afrique. Les plus hautes montagnes sont le Kilimandjaro (environ 5 895 m) et le mont Kenya.</p><p><b>Le désert :</b> le Sahara est le plus grand désert chaud du monde. Il occupe le nord du continent.</p><p><b>Le fleuve :</b> le Nil est l'un des plus longs fleuves du monde ; il traverse le désert égyptien.</p><div class="exemple"><b>Exemple :</b> le Cameroun se situe en Afrique centrale, au bord du golfe de Guinée, et le Sahara est au-delà de sa partie nord.</div><div class="astuce">💡 Pour situer un pays, cherche son continent, puis sa position par rapport à l'équateur et aux grands ensembles de relief.</div>`,
      exercices: [
        { q: 'Quel est le plus grand désert chaud du monde ?', r: 'Le <b>Sahara</b>.' },
        { q: "Quelle est la plus haute montagne d'Afrique ?", r: 'Le <b>Kilimandjaro</b> (environ 5 895 m).' },
        { q: "Quel fleuve traverse l'Égypte ?", r: 'Le <b>Nil</b>.' }
      ],
      qcm: [
        { q: "L'Afrique est traversée par :", options: ['le tropique du Cancer seul', "l'équateur", 'le cercle polaire', 'le méridien de Greenwich seul'], correct: 1, exp: "L'équateur traverse le continent." },
        { q: 'Le Sahara se trouve :', options: ['au sud', 'au nord', "à l'est seulement", 'sur la côte ouest seulement'], correct: 1, exp: 'Il occupe la partie nord du continent.' },
        { q: 'Le Kilimandjaro est :', options: ['un fleuve', 'une montagne', 'un désert', 'un lac'], correct: 1, exp: "C'est une montagne." },
        { q: 'Le Nil traverse :', options: ['le Cameroun', "l'Égypte", 'le Maroc seulement', 'la Chine'], correct: 1, exp: "Il traverse l'Égypte." },
        { q: 'Le continent africain est :', options: ['le plus petit', 'le deuxième plus grand', 'le plus froid', 'une île'], correct: 1, exp: "C'est le deuxième plus grand continent." }
      ]
    }],
    'ECM': [{
      id: 'm5-ecm-institutions',
      titre: 'La Constitution et les pouvoirs publics',
      duree: '30 min',
      contenu: `<div class="definition"><b>Constitution :</b> loi fondamentale d'un pays. Elle définit l'organisation de l'État et les droits des citoyens.</div><p><b>La séparation des pouvoirs :</b> trois pouvoirs distincts assurent l'équilibre de l'État.</p><p>• <b>Le pouvoir exécutif</b> : fait appliquer les lois (président, gouvernement).</p><p>• <b>Le pouvoir législatif</b> : fait les lois (Assemblée nationale, Sénat).</p><p>• <b>Le pouvoir judiciaire</b> : rend la justice (tribunaux).</p><div class="exemple"><b>Exemple :</b> si un juge rend une décision, il applique la loi votée par les parlementaires ; c'est le pouvoir judiciaire qui agit, pas le gouvernement.</div><div class="astuce">💡 Retiens : exécuter (gouvernement), voter les lois (parlement), juger (tribunaux).</div>`,
      exercices: [
        { q: "Qu'est-ce que la Constitution ?", r: "La <b>loi fondamentale</b> d'un pays." },
        { q: 'Qui fait les lois ?', r: 'Le <b>pouvoir législatif</b> (parlement).' },
        { q: 'Qui rend la justice ?', r: 'Le <b>pouvoir judiciaire</b> (tribunaux).' }
      ],
      qcm: [
        { q: 'La Constitution est :', options: ['une loi ordinaire', 'la loi fondamentale du pays', 'un règlement scolaire', 'un journal'], correct: 1, exp: 'Elle est la loi la plus importante.' },
        { q: 'Le pouvoir qui fait les lois est :', options: ['exécutif', 'législatif', 'judiciaire', 'religieux'], correct: 1, exp: "C'est le pouvoir législatif." },
        { q: 'Le pouvoir qui rend la justice est :', options: ['exécutif', 'législatif', 'judiciaire', 'militaire'], correct: 2, exp: "C'est le pouvoir judiciaire." },
        { q: 'La séparation des pouvoirs permet :', options: ['de concentrer le pouvoir', 'un équilibre entre les pouvoirs', 'de supprimer les lois', 'de nommer les juges sans règle'], correct: 1, exp: "Elle évite qu'un seul pouvoir domine." },
        { q: 'Le gouvernement appartient au pouvoir :', options: ['judiciaire', 'exécutif', 'législatif', 'scolaire'], correct: 1, exp: 'Il fait appliquer les lois.' }
      ]
    }],
    'EPS': [{
      id: 'm5-eps-regles-collectif',
      titre: 'Les règles des jeux collectifs',
      duree: '25 min',
      contenu: `<div class="definition"><b>Jeu collectif :</b> activité sportive pratiquée en équipe, avec des règles communes, un terrain et un objectif (marquer des points ou des buts).</div><p><b>Les règles essentielles :</b> respecter l'arbitre, ne pas faire de faute volontaire, respecter les adversaires et le fair-play.</p><p><b>Le fair-play :</b> jouer loyalement, accepter la décision de l'arbitre et féliciter l'adversaire, qu'on gagne ou qu'on perde.</p><div class="exemple"><b>Exemple :</b> au football scolaire, un joueur qui reconnaît une faute de main ou qui sort du terrain pour soigner un adversaire blessé applique le fair-play.</div><div class="astuce">💡 Un bon sportif respecte les règles même quand personne ne le voit.</div>`,
      exercices: [
        { q: "Cite deux règles importantes d'un jeu collectif.", r: "Respecter l'arbitre et ne pas faire de faute volontaire (ou respecter les adversaires)." },
        { q: "Qu'est-ce que le fair-play ?", r: 'Jouer loyalement et respecter les règles et les adversaires.' },
        { q: "Pourquoi respecter l'arbitre ?", r: "Parce qu'il fait appliquer les règles et assure le bon déroulement du jeu." }
      ],
      qcm: [
        { q: 'Un jeu collectif se pratique :', options: ['seul', 'en équipe', 'avec un chronomètre seulement', 'sans règles'], correct: 1, exp: 'Il se joue en équipe.' },
        { q: 'Le fair-play consiste à :', options: ['tricher pour gagner', 'jouer loyalement', "insulter l'arbitre", 'quitter le jeu'], correct: 1, exp: "C'est jouer dans le respect des règles." },
        { q: "L'arbitre sert à :", options: ['jouer à la place des joueurs', 'faire appliquer les règles', 'marquer les buts seul', 'choisir le terrain seulement'], correct: 1, exp: 'Il veille au respect des règles.' },
        { q: 'Une faute volontaire est :', options: ['une règle du jeu', 'une infraction', 'un but', 'un temps mort'], correct: 1, exp: "C'est une infraction aux règles." },
        { q: 'Après un match, il faut :', options: ["insulter l'équipe adverse", "féliciter l'adversaire", 'partir sans saluer', 'frapper le ballon'], correct: 1, exp: "Le respect et le fair-play demandent de saluer l'adversaire." }
      ]
    }],
    'Informatique': [{
      id: 'm5-info-mise-en-forme',
      titre: 'Le traitement de texte : mise en forme',
      duree: '30 min',
      contenu: `<div class="definition"><b>Mise en forme :</b> ensemble des réglages qui rendent un texte plus lisible : taille, police, gras, italique, alignement.</div><p><b>Les outils courants :</b> G (gras), I (italique), S (souligné), la taille de police, l'alignement (gauche, centre, droite, justifié).</p><p><b>Les listes :</b> les puces et les numéros rendent une liste claire.</p><div class="exemple"><b>Exemple :</b> pour un titre de devoir, on le met en gras, en taille 16 et centré. Le reste du texte reste en taille 12, justifié.</div><div class="astuce">💡 Ne mets pas trop de couleurs ni de polices différentes : la lisibilité passe avant la décoration.</div>`,
      exercices: [
        { q: 'Quel raccourci permet de mettre en gras ?', r: '<b>Ctrl+G</b>, ou le bouton G.' },
        { q: 'Quel bouton centre un texte ?', r: "Le bouton d'<b>alignement centré</b>." },
        { q: 'Pourquoi utiliser une mise en forme ?', r: 'Pour rendre le texte <b>plus lisible</b> et mieux organisé.' }
      ],
      qcm: [
        { q: 'Le bouton I sert à :', options: ['mettre en gras', 'mettre en italique', 'souligner', 'centrer'], correct: 1, exp: 'I signifie italique.' },
        { q: 'Pour un titre, on utilise souvent :', options: ['une petite taille illisible', 'une taille plus grande et du gras', 'aucune mise en forme', 'une couleur seule'], correct: 1, exp: 'Un titre est mis en valeur.' },
        { q: 'Le bouton S signifie :', options: ['souligner', 'supprimer', 'sauvegarder', 'sélectionner'], correct: 0, exp: 'S désigne le souligné.' },
        { q: "L'alignement justifié :", options: ['centre le texte', 'aligne les deux bords du texte', 'supprime les espaces', 'efface le texte'], correct: 1, exp: 'Le texte est aligné à gauche et à droite.' },
        { q: 'Les puces servent à :', options: ['décorer', 'présenter une liste claire', 'cacher le texte', 'imprimer'], correct: 1, exp: 'Elles rendent une liste lisible.' }
      ]
    }]
  },
  '6eme': {
    'Mathématiques': [{
      id: 'm6-fractions',
      titre: 'Les fractions : simplifier et additionner',
      duree: '25 min',
      contenu: `
        <div class="definition"><b>Définition :</b> une fraction a/b a un numérateur (a) et un dénominateur (b, non nul).
        Elle représente une part d'un tout partagé en b parts égales.</div>
        <p><b>1. Simplifier.</b> On divise le numérateur et le dénominateur par un même nombre (un diviseur commun).</p>
        <p>Exemple : 12/18 = 6/9 = <b>2/3</b> (on divise par 6).</p>
        <div class="exemple"><b>Exemple camerounais :</b> une maman a 12 bananes sur un régime de 18 bananes. Elle a donc 12/18 du régime, soit <b>2/3</b> après simplification.</div>
        <p><b>2. Additionner.</b> Avec le même dénominateur, on additionne les numérateurs.</p>
        <p>Exemple : 1/4 + 2/4 = 3/4.</p>
        <p>Avec des dénominateurs différents, on les met d'abord au même dénominateur.</p>
        <p>Exemple : 1/2 + 1/3 = 3/6 + 2/6 = <b>5/6</b>.</p>
        <div class="astuce">💡 Simplifie toujours ta fraction finale.</div>`,
      exercices: [
        { q: 'Simplifie 12/18.', r: '12/18 = <b>2/3</b> (divisé par 6).' },
        { q: 'Calcule 2/5 + 1/5.', r: '2/5 + 1/5 = <b>3/5</b> (même dénominateur).' },
        { q: 'Calcule 1/2 + 1/4.', r: '1/2 = 2/4, donc 2/4 + 1/4 = <b>3/4</b>.' }
      ],
      qcm: [
        { q: 'Quelle est la forme simplifiée de 6/8 ?', options: ['6/4', '3/4', '2/3', '3/8'], correct: 1, exp: '6 et 8 sont divisibles par 2 : 6/8 = 3/4.' },
        { q: 'Combien font 1/3 + 1/3 ?', options: ['2/6', '2/3', '1/6', '1/9'], correct: 1, exp: 'Même dénominateur : 1 + 1 = 2, donc 2/3.' }
      ]
    }, {
      id: 'm6-math-decimaux',
      titre: 'Les nombres décimaux',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Nombre décimal :</b> nombre qui s'écrit avec une partie entière et une partie décimale séparées par une virgule, par exemple 3,45.</div>
        <p><b>Valeur de position :</b> dans 3,45 : 3 = unités, 4 = dixièmes (4/10), 5 = centièmes (5/100).</p>
        <p><b>Comparer :</b> on compare d'abord la partie entière, puis les dixièmes, puis les centièmes. Exemple : 2,7 &gt; 2,58 car 7 dixièmes &gt; 5 dixièmes.</p>
        <p><b>Additionner :</b> on aligne les virgules. Exemple : 12,5 + 3,25 = 15,75.</p>
        <div class="exemple"><b>Exemple camerounais :</b> un commerçant achète 2,5 kg de tomates à 300 F le kg ? Pour calculer le prix, on fait 2,5 × 300 = 750 F.</div>
        <div class="astuce">💡 Pour multiplier par 10, déplace la virgule d'un rang vers la droite : 2,5 × 10 = 25.</div>`,
      exercices: [
        { q: 'Compare 4,3 et 4,28.', r: '4,3 &gt; 4,28 car 3 dixièmes est plus grand que 2 dixièmes (4,30 &gt; 4,28).' },
        { q: 'Calcule 7,4 + 2,65.', r: '7,40 + 2,65 = <b>10,05</b>.' },
        { q: 'Calcule 0,5 × 10.', r: '0,5 × 10 = <b>5</b>.' }
      ],
      qcm: [
        { q: 'Dans 6,73, le chiffre 7 représente :', options: ['des unités', 'des dixièmes', 'des centièmes', 'des milliers'], correct: 1, exp: '7 est au rang des dixièmes (7/10).' },
        { q: 'Quel nombre est le plus grand ?', options: ['3,5', '3,45', '3,054', '3,4'], correct: 0, exp: '3,5 = 3,50 est plus grand que 3,45.' },
        { q: 'Combien font 1,2 + 0,8 ?', options: ['1,10', '2,0', '2,00', '0,2'], correct: 1, exp: '1,2 + 0,8 = 2,0.' },
        { q: 'Combien font 0,3 × 10 ?', options: ['0,03', '3', '30', '0,30'], correct: 1, exp: 'Multiplier par 10 déplace la virgule : 3.' },
        { q: 'La partie décimale de 12,75 est :', options: ['12', '75', '7', '0,75'], correct: 1, exp: 'La partie décimale est ce qui suit la virgule : 75.' }
      ]
    }],
    'Français': [{
      id: 'm6-fr-nom-determinant',
      titre: 'Le nom et le déterminant',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Nom commun :</b> mot qui désigne une personne, un animal, une chose ou une idée. Il est précédé d'un déterminant.</div>
        <p><b>Les déterminants</b> accompagnent le nom et indiquent son genre (masculin ou féminin) et son nombre (singulier ou pluriel) :</p>
        <p>• Articles définis : <b>le, la, l', les</b> (le maïs, la mangue, l'école, les élèves).</p>
        <p>• Articles indéfinis : <b>un, une, des</b> (un cahier, une règle, des stylos).</p>
        <p>• Déterminants possessifs : <b>mon, ma, mes, ton, ta, tes…</b> (mon cartable, ta maison).</p>
        <div class="exemple"><b>Exemple camerounais :</b> « Le marché de Mokolo est animé. » Le nom est « marché » (masculin, singulier) ; « le » est son déterminant.</div>
        <div class="astuce">💡 Pour trouver le genre d'un nom, mets un déterminant devant : « le » = masculin, « la » = féminin.</div>`,
      exercices: [
        { q: 'Recopie le nom et son déterminant : « une maison ».', r: 'Déterminant : <b>une</b> ; nom : <b>maison</b> (féminin singulier).' },
        { q: "Complète avec le déterminant qui convient : ___ élèves (pluriel, défini).", r: '<b>Les</b> élèves.' },
        { q: "Mets au pluriel : « le cahier ».", r: '<b>Les cahiers</b>.' }
      ],
      qcm: [
        { q: 'Dans « la table », le déterminant est :', options: ['table', 'la', 'le', 'une'], correct: 1, exp: '« La » accompagne le nom féminin « table ».' },
        { q: 'Quel est le déterminant indéfini ?', options: ['le', 'mon', 'des', 'la'], correct: 2, exp: '« Des » est un article indéfini pluriel.' },
        { q: 'Quel mot est un nom commun ?', options: ['rapidement', 'Douala', 'cahier', 'et'], correct: 2, exp: '« Cahier » désigne une chose.' },
        { q: 'Le pluriel de « un élève » est :', options: ['un élèves', 'des élèves', 'les élève', 'élèves'], correct: 1, exp: 'Au pluriel, l\'indéfini « un » devient « des ».' },
        { q: 'Le possessif « ma » accompagne :', options: ['un nom masculin singulier', 'un nom féminin singulier', 'un nom pluriel', 'un verbe'], correct: 1, exp: '« Ma » est un possessif féminin singulier.' }
      ]
    }, {
      id: 'm6-fr-verbe-present',
      titre: 'Le verbe au présent de l\'indicatif',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Verbe :</b> mot qui exprime une action ou un état et qui se conjugue selon la personne et le temps.</div>
        <p><b>Les verbes du 1er groupe</b> (en -er, comme <i>chanter</i>) se conjuguent ainsi au présent : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent.</p>
        <p><b>Être et avoir</b> sont irréguliers : je suis / tu es / il est ; j'ai / tu as / il a.</p>
        <div class="exemple"><b>Exemple :</b> « Nous étudions à Douala. » Le verbe est « étudier » ; il est au présent, à la première personne du pluriel (nous).</div>
        <div class="astuce">💡 Pour trouver le sujet, pose la question « qui ? » ou « quoi ? » avant le verbe.</div>`,
      exercices: [
        { q: 'Conjugue « manger » au présent avec « ils ».', r: '<b>ils mangent</b>.' },
        { q: 'Conjugue « être » avec « tu ».', r: '<b>tu es</b>.' },
        { q: 'Complète : « Nous ___ (jouer) au ballon. »', r: '<b>jouons</b>.' }
      ],
      qcm: [
        { q: 'Quel est le verbe ? « Les élèves lisent. »', options: ['élèves', 'lisent', 'Les', 'élève'], correct: 1, exp: '« Lisent » est le verbe lire au présent.' },
        { q: 'Je ___ (chanter) au présent :', options: ['chante', 'chantes', 'chantent', 'chanté'], correct: 0, exp: 'Avec « je », le verbe en -er prend un -e.' },
        { q: 'Avec « vous », « parler » donne :', options: ['parlons', 'parlez', 'parle', 'parlent'], correct: 1, exp: 'Vous parlez.' },
        { q: 'Le verbe « avoir » avec « il » donne :', options: ['il a', 'il as', 'il ai', 'il avons'], correct: 0, exp: 'Il a.' },
        { q: 'Quelle phrase est au présent ?', options: ['Il a mangé hier.', 'Nous mangeons maintenant.', 'Ils mangeront demain.', 'Vous mangiez souvent.'], correct: 1, exp: '« Mangeons » est au présent.' }
      ]
    }],
    'Physique-Chimie': [{
      id: 'm6-pc-etats-matiere',
      titre: 'Les états de la matière',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Matière :</b> tout ce qui a une masse et occupe un volume. Elle existe sous trois états : solide, liquide, gaz.</div>
        <p>• <b>Solide</b> : forme et volume propres (une pierre, un morceau de bois).</p>
        <p>• <b>Liquide</b> : volume propre mais pas de forme propre (l'eau prend la forme du récipient).</p>
        <p>• <b>Gaz</b> : ni forme ni volume propres (l'air occupe tout l'espace disponible).</p>
        <p><b>Changements d'état :</b> fusion (solide → liquide), solidification (liquide → solide), vaporisation (liquide → gaz), liquéfaction (gaz → liquide).</p>
        <div class="exemple"><b>Exemple :</b> à Douala, la glace d'un congélateur fond en eau liquide (fusion) ; l'eau d'une casserole qui bout se transforme en vapeur (vaporisation).</div>
        <div class="astuce">💡 Un changement d'état ne change pas la nature du corps : l'eau reste de l'eau, qu'elle soit glace, liquide ou vapeur.</div>`,
      exercices: [
        { q: "Quel est l'état de l'eau qui bout dans une casserole ?", r: "Elle passe à l'état gazeux (vapeur d'eau) : c'est une vaporisation." },
        { q: 'Pourquoi peut-on dire que le gaz n\'a ni forme ni volume propres ?', r: "Parce qu'un gaz s'étend pour remplir tout le récipient qui le contient." },
        { q: 'Nomme le changement d\'état : de l\'eau liquide qui devient de la glace.', r: 'La solidification.' }
      ],
      qcm: [
        { q: 'Un solide a :', options: ['ni forme ni volume propres', 'une forme et un volume propres', 'seulement un volume', 'seulement une forme'], correct: 1, exp: 'Le solide garde sa forme et son volume.' },
        { q: 'Le passage de liquide à gaz s\'appelle :', options: ['la fusion', 'la solidification', 'la vaporisation', 'la sublimation'], correct: 2, exp: 'C\'est la vaporisation.' },
        { q: 'Un liquide prend la forme :', options: ['de son propre volume', 'du récipient qui le contient', 'd\'un cube', 'd\'une boule'], correct: 1, exp: 'Un liquide épouse la forme du récipient.' },
        { q: 'La fusion désigne le passage :', options: ['de solide à liquide', 'de liquide à solide', 'de liquide à gaz', 'de gaz à liquide'], correct: 0, exp: 'La fusion transforme un solide en liquide.' },
        { q: 'Un changement d\'état modifie :', options: ['la nature du corps', 'l\'état physique du corps', 'la composition chimique', 'la matière elle-même'], correct: 1, exp: 'Seul l\'état physique change, pas la nature du corps.' }
      ]
    }, {
      id: 'm6-pc-melanges',
      titre: 'Les mélanges et les corps purs',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Corps pur :</b> substance constituée d'une seule espèce de matière (eau distillée, sel pur).<br>
        <b>Mélange :</b> association de plusieurs substances, qu'on peut souvent séparer.</div>
        <p><b>Séparer un mélange :</b> on utilise des méthodes adaptées à chaque cas.</p>
        <p>• <b>Filtration</b> : sépare un solide insoluble d'un liquide (sable et eau).</p>
        <p>• <b>Décantation</b> : sépare deux liquides non miscibles (huile et eau).</p>
        <p>• <b>Évaporation</b> : récupère un solide dissous dans l'eau (eau salée → sel).</p>
        <div class="exemple"><b>Exemple camerounais :</b> l'eau d'un puits contient de la terre en suspension. On la filtre pour la rendre plus claire avant de la boire après l'avoir désinfectée.</div>
        <div class="astuce">💡 Un mélange peut avoir plusieurs aspects, mais un corps pur a une composition fixe.</div>`,
      exercices: [
        { q: 'Quelle méthode utiliser pour séparer du sable et de l\'eau ?', r: 'La <b>filtration</b>.' },
        { q: 'Comment récupérer le sel d\'une eau salée ?', r: "Par <b>évaporation</b> de l'eau : le sel reste au fond du récipient." },
        { q: 'L\'eau distillée est-elle un corps pur ou un mélange ?', r: 'Un <b>corps pur</b>, car elle est constituée d\'une seule substance.' }
      ],
      qcm: [
        { q: 'Un corps pur est constitué :', options: ['de plusieurs substances', 'd\'une seule espèce de matière', 'd\'air seulement', 'd\'eau et de sel'], correct: 1, exp: 'Un corps pur contient une seule substance.' },
        { q: 'Pour séparer huile et eau, on utilise :', options: ['la filtration', 'la décantation', 'l\'évaporation', 'la dissolution'], correct: 1, exp: 'Les deux liquides non miscibles se séparent par décantation.' },
        { q: 'Pour récupérer le sel dissous dans l\'eau, on utilise :', options: ['la filtration', 'la décantation', 'l\'évaporation', 'le tamisage seulement'], correct: 2, exp: 'En évaporant l\'eau, le sel reste.' },
        { q: 'Un mélange de sable et d\'eau est :', options: ['un corps pur', 'un mélange hétérogène', 'un gaz', 'un élément chimique'], correct: 1, exp: 'Les deux substances sont visibles séparément.' },
        { q: 'La filtration sert à séparer :', options: ['deux liquides', 'un solide d\'un liquide', 'deux gaz', 'un solide d\'un gaz'], correct: 1, exp: 'Le filtre retient le solide.' }
      ]
    }],
    'Anglais': [{
      id: 'm6-en-introduction',
      titre: 'Introducing yourself (Se présenter)',
      duree: '25 min',
      contenu: `
        <div class="definition"><b>Pour se présenter</b> en anglais, on utilise surtout : <i>My name is…</i> (Je m'appelle…), <i>I am… years old</i> (J'ai… ans), <i>I am from…</i> (Je viens de…).</div>
        <p><b>Questions utiles :</b> <i>What is your name?</i> (Comment t'appelles-tu ?) — <i>How old are you?</i> (Quel âge as-tu ?) — <i>Where are you from?</i> (D'où viens-tu ?)</p>
        <p><b>Les salutations :</b> <i>Hello</i> / <i>Hi</i> (Bonjour), <i>Good morning</i> (Bonjour, le matin), <i>Good night</i> (Bonne nuit), <i>Goodbye</i> (Au revoir).</p>
        <div class="exemple"><b>Exemple camerounais :</b> <i>Hello! My name is Paul. I am 11 years old. I am from Douala.</i> (Bonjour ! Je m'appelle Paul. J'ai 11 ans. Je viens de Douala.)</div>
        <div class="astuce">💡 Ne dis pas « I am 11 years » mais « I am 11 years old ».</div>`,
      exercices: [
        { q: 'Traduis : « Je m\'appelle Marie. »', r: '<i>My name is Marie.</i>' },
        { q: 'Traduis la question : « Quel âge as-tu ? »', r: '<i>How old are you?</i>' },
        { q: 'Traduis : « Je viens de Yaoundé. »', r: '<i>I am from Yaoundé.</i>' }
      ],
      qcm: [
        { q: 'Comment dit-on « Je m\'appelle » en anglais ?', options: ['I am called', 'My name is', 'I have name', 'Name me'], correct: 1, exp: '« My name is » signifie « Je m\'appelle ».' },
        { q: '« Where are you from? » signifie :', options: ['Où vas-tu ?', 'D\'où viens-tu ?', 'Où habites-tu ?', 'Qui es-tu ?'], correct: 1, exp: 'C\'est la question pour demander d\'où quelqu\'un vient.' },
        { q: 'Comment dit-on « J\'ai 12 ans » ?', options: ['I have 12 years', 'I am 12 years old', 'I am 12 old', 'I has 12'], correct: 1, exp: 'On dit « I am 12 years old ».' },
        { q: '« Good night » est utilisé :', options: ['le matin', 'le soir, avant de dormir', 'à midi', 'pour dire merci'], correct: 1, exp: '« Good night » se dit avant de dormir.' },
        { q: 'Quelle est la traduction de « Au revoir » ?', options: ['Hello', 'Goodbye', 'Thanks', 'Sorry'], correct: 1, exp: '« Goodbye » signifie « Au revoir ».' }
      ]
    }, {
      id: 'm6-en-colours-numbers',
      titre: 'Colours and numbers (Couleurs et nombres)',
      duree: '25 min',
      contenu: `
        <div class="definition"><b>Couleurs :</b> red (rouge), green (vert), yellow (jaune), black (noir), white (blanc), blue (bleu).</div>
        <p><b>Nombres de 1 à 10 :</b> one, two, three, four, five, six, seven, eight, nine, ten.</p>
        <p><b>Question utile :</b> <i>What colour is it?</i> (De quelle couleur est-il ?) — Réponse : <i>It is green.</i> (Il est vert.)</p>
        <div class="exemple"><b>Exemple :</b> <i>I have three books. They are red and blue.</i> (J'ai trois livres. Ils sont rouges et bleus.)</div>
        <div class="astuce">💡 Pour compter les objets, on écrit le nombre avant le nom : <i>three pens</i> (trois stylos).</div>`,
      exercices: [
        { q: 'Traduis : « le drapeau est vert et jaune ».', r: '<i>The flag is green and yellow.</i>' },
        { q: 'Écris en anglais : 7.', r: '<i>Seven</i>.' },
        { q: 'Réponds à la question : <i>What colour is the sky?</i> (exemple : bleu)', r: '<i>The sky is blue.</i>' }
      ],
      qcm: [
        { q: 'Comment dit-on « noir » en anglais ?', options: ['white', 'black', 'green', 'red'], correct: 1, exp: '« Black » signifie noir.' },
        { q: 'Comment s\'écrit « cinq » ?', options: ['four', 'six', 'five', 'nine'], correct: 2, exp: '« Five » signifie cinq.' },
        { q: 'Quelle est la traduction de « yellow » ?', options: ['bleu', 'jaune', 'rouge', 'vert'], correct: 1, exp: '« Yellow » signifie jaune.' },
        { q: '« Nine » signifie :', options: ['huit', 'neuf', 'dix', 'sept'], correct: 1, exp: '« Nine » = neuf.' },
        { q: 'Quelle réponse est correcte à « What colour is it? » ?', options: ['It is three.', 'It is green.', 'It is ten.', 'Yes, it is.'], correct: 1, exp: 'Il faut répondre avec une couleur.' }
      ]
    }],
    'SVT': [{
      id: 'm6-svt-milieu',
      titre: 'Les êtres vivants et leur milieu',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Milieu de vie :</b> ensemble des éléments (air, eau, sol, lumière, température, autres êtres vivants) dans lesquels vit un être vivant.</div>
        <p><b>Besoins des êtres vivants :</b> tous les êtres vivants ont besoin de nourriture, d'eau, d'air (dioxygène) et d'un milieu adapté pour vivre, grandir et se reproduire.</p>
        <p><b>Relations entre êtres vivants :</b> dans un milieu, les êtres vivants dépendent les uns des autres. Une chaîne alimentaire montre qui mange qui : producteur (plante) → consommateur (criquet) → consommateur (lézard).</p>
        <div class="exemple"><b>Exemple camerounais :</b> dans la savane de l'Adamaoua, l'herbe est mangée par les antilopes, qui servent de proies aux lions. Si les herbes disparaissent, les antilopes et les lions diminuent aussi.</div>
        <div class="astuce">💡 Dans une chaîne alimentaire, la flèche va de l'être mangé vers celui qui mange.</div>`,
      exercices: [
        { q: "Cite trois besoins communs à tous les êtres vivants.", r: "Nourriture, eau, air (dioxygène) et un milieu adapté." },
        { q: 'Dans la chaîne « herbe → criquet → poulet », qui est le producteur ?', r: "L'herbe : c'est une plante, elle fabrique sa propre matière organique à partir de la lumière." },
        { q: 'Que se passe-t-il si les criquets disparaissent dans la chaîne « herbe → criquet → poulet » ?', r: "Le poulet n'a plus de nourriture habituelle : sa population diminue, et l'herbe peut se multiplier davantage." }
      ],
      qcm: [
        { q: 'Le milieu de vie comprend :', options: ['seulement l\'eau', 'l\'ensemble des éléments où vit un être vivant', 'uniquement les animaux', 'seulement le sol'], correct: 1, exp: 'Le milieu regroupe les éléments physiques et vivants qui entourent un être vivant.' },
        { q: 'Le producteur d\'une chaîne alimentaire est :', options: ['le lion', 'la plante', 'le criquet', 'l\'homme'], correct: 1, exp: 'Les plantes fabriquent leur matière grâce à la lumière : ce sont des producteurs.' },
        { q: 'Dans une chaîne alimentaire, la flèche indique :', options: ['qui est le plus fort', 'le sens du transfert de matière et d\'énergie', 'la taille de l\'animal', 'le lieu de vie'], correct: 1, exp: 'La flèche va de la proie vers le prédateur.' },
        { q: 'Un besoin commun à tous les êtres vivants est :', options: ['le téléphone', 'l\'eau', 'la télévision', 'l\'électricité'], correct: 1, exp: 'Tout être vivant a besoin d\'eau pour vivre.' },
        { q: 'Un consommateur est un être vivant qui :', options: ['fabrique sa matière à partir de la lumière', 'se nourrit d\'autres êtres vivants ou de matière organique', 'vit dans l\'eau seulement', 'ne mange jamais'], correct: 1, exp: 'Les consommateurs se nourrissent d\'autres êtres vivants.' }
      ]
    }, {
      id: 'm6-svt-photosynthese',
      titre: 'La photosynthèse',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Photosynthèse :</b> processus par lequel les plantes vertes fabriquent leur propre matière organique (sucre) à partir de l'eau, du dioxyde de carbone de l'air et de l'énergie de la lumière, en rejetant du dioxygène.</div>
        <p><b>Ce dont la plante a besoin :</b> lumière, eau (absorbée par les racines), dioxyde de carbone (absorbé par les feuilles), chlorophylle (pigment vert des feuilles).</p>
        <p><b>Ce qu'elle produit :</b> du sucre (matière organique) et du dioxygène, rejeté dans l'air.</p>
        <div class="exemple"><b>Exemple camerounais :</b> un plant de maïs dans un champ de Garoua produit du sucre et du dioxygène grâce à la lumière du soleil ; c'est pourquoi il faut protéger les champs de l'ombre excessive.</div>
        <div class="astuce">💡 Sans lumière, pas de photosynthèse : une plante cachée dans un placard finit par jaunir.</div>`,
      exercices: [
        { q: 'Cite trois éléments nécessaires à la photosynthèse.', r: 'Lumière, eau, dioxyde de carbone (et chlorophylle).' },
        { q: 'Quel gaz la plante rejette-t-elle pendant la photosynthèse ?', r: 'Le dioxygène.' },
        { q: 'Pourquoi une plante privée de lumière jaunit-elle ?', r: "Parce qu'elle ne peut plus fabriquer assez de matière organique ni de chlorophylle." }
      ],
      qcm: [
        { q: 'La photosynthèse a lieu surtout dans :', options: ['les racines', 'les feuilles', 'les fruits', 'la tige seulement'], correct: 1, exp: 'Les feuilles contiennent la chlorophylle.' },
        { q: 'Le pigment vert des plantes est :', options: ['la sève', 'la chlorophylle', 'le sucre', 'l\'eau'], correct: 1, exp: 'La chlorophylle est le pigment vert.' },
        { q: 'Pendant la photosynthèse, la plante rejette :', options: ['du dioxyde de carbone', 'du dioxygène', 'de l\'azote seulement', 'de la vapeur de sucre'], correct: 1, exp: 'Elle rejette du dioxygène.' },
        { q: 'La photosynthèse a besoin de :', options: ['la nuit', 'la lumière', 'le sel', 'le froid'], correct: 1, exp: 'Elle utilise l\'énergie lumineuse.' },
        { q: 'La matière organique fabriquée par la plante est :', options: ['de l\'eau', 'du sucre', 'du sel', 'de l\'air'], correct: 1, exp: 'La plante fabrique du sucre.' }
      ]
    }],
    'ECM': [{
      id: 'm6-ecm-vie-societe',
      titre: 'Vivre ensemble au Cameroun',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Éducation à la citoyenneté :</b> apprendre à vivre avec les autres dans le respect des règles, des droits et des devoirs.</div>
        <p><b>Le respect de l'autre :</b> respecter les différences de langue, de religion, d'origine et de région, c'est la base de la vie en société.</p>
        <p><b>Les droits de l'enfant :</b> droit à l'éducation, à la santé, à un nom, à la protection contre la violence et le travail forcé.</p>
        <p><b>Les symboles de la nation :</b> la devise du Cameroun est « Paix – Travail – Patrie ». Le drapeau est vert, rouge et jaune, avec une étoile d'or au centre.</p>
        <div class="exemple"><b>Exemple :</b> à l'école, respecter le tour de parole, aider un camarade et ne pas se moquer de la langue maternelle d'un autre élève, c'est pratiquer la citoyenneté.</div>
        <div class="astuce">💡 Un droit va toujours avec un devoir : mon droit à l'éducation implique de respecter l'école et mes camarades.</div>`,
      exercices: [
        { q: 'Cite la devise du Cameroun.', r: '« Paix – Travail – Patrie ».' },
        { q: 'Cite deux droits de l\'enfant.', r: "Par exemple : le droit à l'éducation et le droit à la santé (ou à un nom)." },
        { q: 'Donne un exemple de respect de l\'autre à l\'école.', r: "Écouter un camarade sans l'interrompre, ou ne pas se moquer de sa langue ou de son origine." }
      ],
      qcm: [
        { q: 'La devise du Cameroun est :', options: ['Unité – Justice – Liberté', 'Paix – Travail – Patrie', 'Liberté – Égalité – Fraternité', 'Dieu – Patrie – Roi'], correct: 1, exp: 'La devise officielle est « Paix – Travail – Patrie ».' },
        { q: 'Un droit de l\'enfant est :', options: ['travailler dès l\'âge de 6 ans', 'le droit à l\'éducation', 'le droit de ne pas aller à l\'école', 'le droit de frapper ses camarades'], correct: 1, exp: 'L\'enfant a droit à l\'éducation.' },
        { q: 'Le drapeau camerounais comporte :', options: ['du bleu et du blanc', 'du vert, du rouge et du jaune', 'du noir et du rouge seulement', 'du bleu et du jaune'], correct: 1, exp: 'Il est vert, rouge et jaune, avec une étoile d\'or.' },
        { q: 'Respecter les différences entre citoyens c\'est :', options: ['de la faiblesse', 'la base de la vie en société', 'inutile', 'réservé aux adultes'], correct: 1, exp: 'Le respect est la base de la vie commune.' },
        { q: 'À un droit correspond généralement :', options: ['aucune obligation', 'un devoir', 'une punition', 'un privilège'], correct: 1, exp: 'Un droit s\'accompagne d\'un devoir envers les autres.' }
      ]
    }, {
      id: 'm6-ecm-famille-solidarite',
      titre: 'La famille et la solidarité',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Famille :</b> groupe de personnes liées par le mariage ou la filiation, qui s'entraident. <b>Solidarité :</b> aide mutuelle entre les membres d'un groupe.</div>
        <p><b>Le rôle de la famille :</b> élever les enfants, transmettre les valeurs, protéger ses membres et les aider dans les difficultés.</p>
        <p><b>Le respect des aînés :</b> dans la plupart des familles camerounaises, on respecte les parents, les grands-parents et les personnes plus âgées, qui transmettent sagesse et traditions.</p>
        <p><b>La solidarité :</b> entraide dans les moments difficiles, comme la maladie, un deuil ou une récolte perdue ; elle renforce la cohésion sociale.</p>
        <div class="exemple"><b>Exemple :</b> lors d'un deuil dans un quartier de Yaoundé, les voisins et les proches participent aux frais des funérailles : c'est une forme de solidarité.</div>
        <div class="astuce">💡 Solidarité et respect vont ensemble : aider les autres et respecter leurs droits, c'est vivre en citoyen responsable.</div>`,
      exercices: [
        { q: 'Cite deux rôles de la famille.', r: 'Élever les enfants, transmettre les valeurs (ou protéger ses membres).' },
        { q: 'Donne un exemple de solidarité dans ton quartier.', r: "Aider un voisin malade, participer à une collecte pour une famille endeuillée, etc." },
        { q: 'Pourquoi respecte-t-on les aînés ?', r: 'Parce qu\'ils transmettent la sagesse, l\'expérience et les traditions.' }
      ],
      qcm: [
        { q: 'La solidarité désigne :', options: ['la compétition entre voisins', 'l\'aide mutuelle entre les membres d\'un groupe', 'la richesse d\'une famille', 'le sport collectif'], correct: 1, exp: 'La solidarité est l\'entraide.' },
        { q: 'Le rôle principal de la famille est :', options: ['de faire la guerre', 'd\'élever et de protéger ses membres', 'de voter', 'de payer les impôts'], correct: 1, exp: 'Elle éduque et protège ses membres.' },
        { q: 'Dans une famille, respecter les aînés signifie :', options: ['les ignorer', 'les écouter et les honorer', 'leur désobéir', 'les éviter'], correct: 1, exp: 'Le respect passe par l\'écoute et l\'estime.' },
        { q: 'Un exemple de solidarité est :', options: ['voler un voisin', 'aider une famille endeuillée', 'se moquer d\'un camarade', 'refuser de partager'], correct: 1, exp: 'Aider dans les difficultés est un acte de solidarité.' },
        { q: 'La famille est un groupe lié par :', options: ['l\'argent seul', 'le mariage ou la filiation', 'le vote', 'l\'école'], correct: 1, exp: 'La famille repose sur le mariage et la filiation.' }
      ]
    }],
    'EPS': [{
      id: 'm6-eps-echauffement-hygiene',
      titre: 'L\'échauffement et l\'hygiène sportive',
      duree: '25 min',
      contenu: `
        <div class="definition"><b>Échauffement :</b> ensemble d'exercices légers qui préparent le corps à un effort plus intense, en réveillant les muscles et le cœur.</div>
        <p><b>Pourquoi s'échauffer ?</b> Pour éviter les blessures, améliorer les performances et mieux se concentrer.</p>
        <p><b>Structure d'un échauffement :</b> 1) course légère pendant 5 min ; 2) mobilité des articulations (bras, jambes, cou) ; 3) étirements doux.</p>
        <p><b>Hygiène sportive :</b> boire de l'eau avant, pendant et après l'effort ; porter une tenue propre et adaptée ; se laver après le sport.</p>
        <div class="exemple"><b>Exemple :</b> avant un match de football sur le terrain de l'école, les élèves font 5 minutes de course légère, puis des rotations des bras et des chevilles.</div>
        <div class="astuce">💡 Ne saute jamais l'échauffement, même pour un jeu : c'est lui qui protège les muscles.</div>`,
      exercices: [
        { q: 'Pourquoi faut-il s\'échauffer avant le sport ?', r: 'Pour préparer le corps, éviter les blessures et améliorer la performance.' },
        { q: 'Cite deux étapes d\'un échauffement.', r: 'Course légère, mobilité des articulations, étirements doux (deux suffisent).' },
        { q: 'Quand faut-il boire de l\'eau pendant le sport ?', r: 'Avant, pendant et après l\'effort.' }
      ],
      qcm: [
        { q: 'L\'échauffement sert à :', options: ['fatiguer le corps', 'préparer le corps à l\'effort', 'remplacer le repos', 'augmenter le poids'], correct: 1, exp: 'Il prépare le corps à l\'effort.' },
        { q: 'Une étape de l\'échauffement est :', options: ['manger un repas copieux', 'une course légère', 'dormir', 'fumer'], correct: 1, exp: 'La course légère fait partie de l\'échauffement.' },
        { q: 'L\'hygiène sportive comprend :', options: ['ne pas boire d\'eau', 'porter une tenue propre et se laver', 'faire du sport sans échauffement', 'manger avant de courir'], correct: 1, exp: 'Tenue propre et lavage font partie de l\'hygiène.' },
        { q: 'Un échauffement dure en général :', options: ['quelques secondes', 'environ 5 à 10 minutes', 'toute la journée', 'une heure'], correct: 1, exp: 'Quelques minutes suffisent pour bien préparer le corps.' },
        { q: 'S\'échauffer permet surtout :', options: ['de se blesser', 'd\'éviter les blessures', 'd\'arrêter le sport', 'de grossir'], correct: 1, exp: 'Il réduit fortement le risque de blessure.' }
      ]
    }, {
      id: 'm6-eps-qualites-physiques',
      titre: 'Les qualités physiques : vitesse, endurance, souplesse',
      duree: '25 min',
      contenu: `
        <div class="definition"><b>Qualité physique :</b> capacité du corps à réaliser un effort. Les trois principales sont la vitesse, l'endurance et la souplesse.</div>
        <p>• <b>La vitesse</b> : courir vite sur une courte distance (100 m).</p>
        <p>• <b>L'endurance</b> : tenir longtemps un effort modéré (une course de 15 minutes).</p>
        <p>• <b>La souplesse</b> : amplitude des mouvements des articulations (toucher ses orteils sans plier les genoux).</p>
        <div class="exemple"><b>Exemple :</b> au sprint sur la piste de l'école, on développe la vitesse ; un cross sur la route de la forêt développe l'endurance ; les étirements quotidiens améliorent la souplesse.</div>
        <div class="astuce">💡 On améliore une qualité en s'entraînant régulièrement, et pas seulement le jour de la compétition.</div>`,
      exercices: [
        { q: 'Quelle qualité physique est travaillée lors d\'un 100 m ?', r: 'La <b>vitesse</b>.' },
        { q: 'Quelle qualité est sollicitée lors d\'une longue course lente ?', r: "L'<b>endurance</b>." },
        { q: 'Propose un exercice pour améliorer la souplesse.', r: 'Par exemple des étirements doux des jambes et du dos, maintenus 15 à 20 secondes.' }
      ],
      qcm: [
        { q: 'La vitesse désigne :', options: ['tenir longtemps', 'aller vite sur une courte distance', 'être souple', 'soulever des charges'], correct: 1, exp: 'La vitesse est la rapidité de l\'action.' },
        { q: 'L\'endurance est la capacité à :', options: ['courir très vite', 'tenir un effort longtemps', 'se plier beaucoup', 'sauter haut'], correct: 1, exp: 'L\'endurance permet de durer.' },
        { q: 'La souplesse concerne :', options: ['la force des muscles', 'l\'amplitude des mouvements', 'la vitesse de course', 'la mémoire'], correct: 1, exp: 'La souplesse est l\'amplitude articulaire.' },
        { q: 'Pour améliorer une qualité physique, il faut :', options: ['s\'entraîner rarement', 'un entraînement régulier', 'ne jamais s\'entraîner', 'dormir plus'], correct: 1, exp: 'La régularité est la clé du progrès.' },
        { q: 'Un cross de 15 minutes travaille surtout :', options: ['la vitesse', 'l\'endurance', 'la souplesse', 'la force maximale'], correct: 1, exp: 'C\'est un effort long, donc de l\'endurance.' }
      ]
    }],
    'Informatique': [{
      id: 'm6-info-ordinateur',
      titre: 'L\'ordinateur et ses parties',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Ordinateur :</b> machine qui reçoit des informations (entrées), les traite, puis fournit un résultat (sorties).</div>
        <p><b>Les périphériques d'entrée :</b> clavier, souris, scanner, micro. Ils envoient des informations à l'ordinateur.</p>
        <p><b>Les périphériques de sortie :</b> écran, imprimante, haut-parleurs. Ils présentent le résultat.</p>
        <p><b>L'unité centrale :</b> c'est le « cerveau » qui traite les données, avec le processeur et la mémoire.</p>
        <div class="exemple"><b>Exemple :</b> pour imprimer un devoir, je tape le texte au clavier (entrée), l'ordinateur le traite, puis l'imprimante le reproduit sur papier (sortie).</div>
        <div class="astuce">💡 Retiens : entrée = ce que je donne à l'ordinateur ; sortie = ce qu'il me rend.</div>`,
      exercices: [
        { q: 'Donne deux périphériques d\'entrée.', r: 'Clavier et souris (ou scanner, micro).' },
        { q: 'Donne deux périphériques de sortie.', r: 'Écran et imprimante (ou haut-parleurs).' },
        { q: 'Quel élément de l\'ordinateur traite les données ?', r: "L'unité centrale, avec son processeur." }
      ],
      qcm: [
        { q: 'Le clavier est un périphérique :', options: ['de sortie', 'd\'entrée', 'de stockage uniquement', 'inutile'], correct: 1, exp: 'Il permet d\'envoyer des informations à l\'ordinateur.' },
        { q: 'L\'écran est un périphérique :', options: ['d\'entrée', 'de sortie', 'de traitement', 'de connexion'], correct: 1, exp: 'Il affiche le résultat.' },
        { q: 'Le « cerveau » de l\'ordinateur est :', options: ['la souris', 'l\'imprimante', 'l\'unité centrale', 'le câble'], correct: 2, exp: 'L\'unité centrale traite les données.' },
        { q: 'L\'imprimante est un périphérique :', options: ['d\'entrée', 'de sortie', 'de saisie', 'de calcul'], correct: 1, exp: 'Elle produit un résultat sur papier.' },
        { q: 'Le scanner est un périphérique :', options: ['de sortie', 'd\'entrée', 'de traitement', 'd\'affichage'], correct: 1, exp: 'Il envoie une image à l\'ordinateur.' }
      ]
    }, {
      id: 'm6-info-fichiers-dossiers',
      titre: 'Fichiers et dossiers',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Fichier :</b> ensemble d'informations enregistrées sous un nom (texte, image, musique). <b>Dossier :</b> espace qui range des fichiers et d'autres dossiers, comme une armoire.</div>
        <p><b>Créer un dossier :</b> clic droit → Nouveau → Dossier, puis on lui donne un nom clair (ex : « Maths 6ème »).</p>
        <p><b>Copier, déplacer, supprimer :</b> on copie avec Ctrl+C puis on colle avec Ctrl+V. Un fichier supprimé va dans la Corbeille, d'où on peut le restaurer.</p>
        <p><b>Bien nommer :</b> un nom précis (ex : « Devoir_SVT_2026 ») évite de perdre un fichier.</p>
        <div class="exemple"><b>Exemple :</b> un élève range ses cours dans un dossier « Cours » contenant les sous-dossiers « Français », « Maths » et « SVT ».</div>
        <div class="astuce">💡 Enregistre tes travaux régulièrement et range-les dès le début : tu gagneras beaucoup de temps.</div>`,
      exercices: [
        { q: 'Quelle différence y a-t-il entre un fichier et un dossier ?', r: 'Un fichier contient des informations ; un dossier range des fichiers et d\'autres dossiers.' },
        { q: 'Quels raccourcis permettent de copier puis coller ?', r: 'Ctrl+C pour copier, Ctrl+V pour coller.' },
        { q: 'Où va un fichier supprimé par erreur ?', r: "Dans la Corbeille, d'où on peut le restaurer." }
      ],
      qcm: [
        { q: 'Un dossier sert à :', options: ['afficher une image', 'ranger des fichiers', 'imprimer', 'se connecter à Internet'], correct: 1, exp: 'Un dossier range des fichiers.' },
        { q: 'Le raccourci pour coller est :', options: ['Ctrl+C', 'Ctrl+V', 'Ctrl+Z', 'Ctrl+P'], correct: 1, exp: 'Ctrl+V colle.' },
        { q: 'Un fichier supprimé se trouve d\'abord dans :', options: ['le dossier Images', 'la Corbeille', 'l\'imprimante', 'le clavier'], correct: 1, exp: 'La Corbeille permet de le restaurer.' },
        { q: 'Quel nom de fichier est le plus clair ?', options: ['doc1', 'xyz', 'Devoir_SVT_2026', 'fichier final final'], correct: 2, exp: 'Un nom précis facilite le retrouver.' },
        { q: 'Pour créer un dossier, on fait :', options: ['un clic gauche sur l\'écran', 'un clic droit → Nouveau → Dossier', 'un double clic sur la souris seule', 'on éteint l\'ordinateur'], correct: 1, exp: 'Le menu clic droit permet de créer un dossier.' }
      ]
    }],
    'Histoire': [{
      id: 'm6-hist-cameroun-precolonial',
      titre: 'Les sociétés du Cameroun avant la colonisation',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Société traditionnelle :</b> groupe humain organisé autour d'une famille élargie, d'un chef et de règles communes (langue, coutumes, justice, travail).</div>
        <p>Avant la colonisation, le territoire du Cameroun actuel était peuplé de nombreuses sociétés très diverses :</p>
        <p>• <b>Les royaumes des Grassfields</b> (ouest) : Bamoun, Bafoussam, Bandjoun… organisés autour d'un roi appelé fon ou chef, avec des palais et des artisans spécialisés.</p>
        <p>• <b>Les peuples du Nord</b> (Foulbé, Kanuri…) : sociétés organisées autour des émirats et de l'élevage.</p>
        <p>• <b>Les peuples du Sud et du littoral</b> (Douala, Bassa, Ewondo, Bulu…) : sociétés d'agriculteurs, de pêcheurs et de commerçants, liées à la côte et aux échanges.</p>
        <div class="exemple"><b>Exemple :</b> le royaume bamoun, à l'ouest, est connu pour son écriture (le système d'écriture bamoun) et ses objets d'art, comme les statues et les trônes sculptés.</div>
        <div class="astuce">💡 Retiens : avant la colonisation, le Cameroun n'était pas un seul État, mais une mosaïque de sociétés et de royaumes.</div>`,
      exercices: [
        { q: 'Quelle différence principale existait entre les sociétés de l\'ouest et celles du nord ?', r: "Les sociétés de l'ouest (Grassfields) étaient organisées autour de royaumes avec un roi, tandis que celles du nord étaient organisées autour d'émirats et de l'élevage." },
        { q: 'Pourquoi peut-on dire qu\'avant la colonisation le Cameroun n\'était pas un seul État ?', r: "Parce qu'il existait de nombreuses sociétés et royaumes indépendants, avec leurs propres chefs, langues et coutumes." },
        { q: 'Donne un exemple d\'héritage culturel d\'un royaume de l\'ouest.', r: "Le système d'écriture bamoun, ou les statues et trônes sculptés du royaume bamoun." }
      ],
      qcm: [
        { q: 'Le chef d\'un royaume des Grassfields est appelé :', options: ['émir', 'fon', 'président', 'griot'], correct: 1, exp: 'Dans les Grassfields, le chef est souvent appelé fon.' },
        { q: 'Le royaume connu pour son écriture propre est :', options: ['le royaume bamoun', 'le royaume kanuri', 'l\'émirat de Yola', 'le royaume zoulou'], correct: 0, exp: 'Le royaume bamoun a créé son propre système d\'écriture.' },
        { q: 'Les peuples du nord du Cameroun étaient souvent organisés autour :', options: ['des émirats et de l\'élevage', 'de la pêche industrielle', 'des villes modernes', 'de la monnaie européenne'], correct: 0, exp: 'Les sociétés du nord étaient organisées en émirats, avec un important élevage.' },
        { q: 'Avant la colonisation, le Cameroun était :', options: ['un seul État unifié', 'une mosaïque de sociétés et de royaumes', 'une colonie anglaise', 'un désert'], correct: 1, exp: 'Il existait de nombreuses sociétés et royaumes distincts.' },
        { q: 'Les peuples du littoral (Douala, Bassa) vivaient surtout de :', options: ['l\'élevage de chameaux', 'l\'agriculture, la pêche et le commerce', 'l\'exploitation minière', 'l\'industrie'], correct: 1, exp: 'Ils étaient agriculteurs, pêcheurs et commerçants, grâce à la côte.' }
      ]
    }, {
      id: 'm6-hist-colonisation-cameroun',
      titre: 'La colonisation du Cameroun',
      duree: '35 min',
      contenu: `
        <div class="definition"><b>Colonisation :</b> domination d'un pays par une puissance étrangère, qui contrôle son administration, son économie et souvent sa culture.</div>
        <p><b>Le Cameroun allemand (1884-1916) :</b> en 1884, l'Allemagne impose un protectorat sur la côte, notamment à Douala, puis étend son contrôle au reste du territoire.</p>
        <p><b>Le partage (1916-1919) :</b> après la défaite allemande de la Première Guerre mondiale, le territoire est partagé entre la France et le Royaume-Uni, sous mandat de la Société des Nations.</p>
        <p><b>L'indépendance :</b> la partie française devient indépendante le <b>1er janvier 1960</b>. En 1961, la partie méridionale de la zone britannique rejoint le Cameroun.</p>
        <div class="exemple"><b>Exemple :</b> le travail forcé et les plantations imposés pendant la période allemande ont profondément marqué la vie des populations de la côte.</div>
        <div class="astuce">💡 Retiens les dates : 1884 (Allemagne), 1916 (défaite allemande), 1960 (indépendance française), 1961 (réunification).</div>`,
      exercices: [
        { q: 'En quelle année l\'Allemagne impose-t-elle son protectorat au Cameroun ?', r: '<b>1884</b>.' },
        { q: 'Quelle est la date de l\'indépendance de la partie française du Cameroun ?', r: '<b>1er janvier 1960</b>.' },
        { q: 'Pourquoi le territoire camerounais a-t-il été partagé après 1916 ?', r: "Après la défaite allemande de la Première Guerre mondiale, la France et le Royaume-Uni se sont partagé le territoire." }
      ],
      qcm: [
        { q: 'La colonisation allemande du Cameroun commence en :', options: ['1860', '1884', '1916', '1960'], correct: 1, exp: 'L\'Allemagne impose son protectorat en 1884.' },
        { q: 'La partie française devient indépendante en :', options: ['1945', '1958', '1960', '1961'], correct: 2, exp: 'Le 1er janvier 1960.' },
        { q: 'Qui se partage le Cameroun après la Première Guerre mondiale ?', options: ['l\'Espagne et le Portugal', 'la France et le Royaume-Uni', 'la Chine et le Japon', 'l\'Italie et l\'Allemagne'], correct: 1, exp: 'La France et le Royaume-Uni se partagent le territoire.' },
        { q: 'Une colonisation désigne :', options: ['un échange commercial libre', 'la domination d\'un pays par une puissance étrangère', 'une fête nationale', 'une élection'], correct: 1, exp: 'La colonisation est une domination étrangère.' },
        { q: 'La réunification de la partie méridionale de la zone britannique date de :', options: ['1960', '1961', '1916', '1884'], correct: 1, exp: 'Elle rejoint le Cameroun en 1961.' }
      ]
    }],
    'Géographie': [{
      id: 'm6-geo-relief-cameroun',
      titre: 'Le relief du Cameroun',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Relief :</b> ensemble des formes de la surface terrestre : montagnes, plateaux, plaines, vallées.</div>
        <p>Le Cameroun présente des reliefs très variés, souvent résumés en trois ensembles :</p>
        <p>• <b>Les montagnes</b> : le mont Cameroun (environ 4 100 m), point culminant du pays et volcan actif près de l'océan Atlantique.</p>
        <p>• <b>Les plateaux</b> : l'Adamaoua au centre, les hauts plateaux de l'Ouest (Grassfields) et le plateau de Mbam.</p>
        <p>• <b>Les plaines</b> : la plaine côtière du littoral et la cuvette tchadienne au nord, plus sèche.</p>
        <div class="exemple"><b>Exemple :</b> le plateau de l'Adamaoua est une zone d'élevage, à cause de son climat plus frais et de ses pâturages.</div>
        <div class="astuce">💡 Pour un croquis, place toujours le mont Cameroun au sud-ouest, près de la côte.</div>`,
      exercices: [
        { q: 'Quel est le point culminant du Cameroun ?', r: 'Le mont Cameroun, d\'environ 4 100 m.' },
        { q: 'Cite deux grands ensembles de relief du Cameroun.', r: 'Les montagnes, les plateaux et les plaines (deux suffisent).' },
        { q: 'Pourquoi l\'Adamaoua est-il une zone d\'élevage ?', r: "Parce que son climat est plus frais et qu'il a de bons pâturages." }
      ],
      qcm: [
        { q: 'Le mont Cameroun est :', options: ['une plaine', 'un volcan actif', 'un fleuve', 'un désert'], correct: 1, exp: 'C\'est un volcan actif, point culminant du pays.' },
        { q: 'Le plateau de l\'Adamaoua se situe :', options: ['au nord', 'au centre', 'à l\'est uniquement', 'sur la côte'], correct: 1, exp: 'L\'Adamaoua est situé au centre du pays.' },
        { q: 'La zone la plus sèche du pays est :', options: ['le littoral', 'la cuvette tchadienne au nord', 'le mont Cameroun', 'les Grassfields'], correct: 1, exp: 'Le nord, avec la cuvette tchadienne, est la zone la plus sèche.' },
        { q: 'Une plaine est :', options: ['une zone élevée et pointue', 'une zone plate et peu élevée', 'une île', 'un lac'], correct: 1, exp: 'Une plaine est une vaste étendue plate.' },
        { q: 'Le relief désigne :', options: ['la population', 'les formes de la surface terrestre', 'le climat seul', 'les routes'], correct: 1, exp: 'Le relief est l\'ensemble des formes du sol.' }
      ]
    }, {
      id: 'm6-geo-climat-vegetation',
      titre: 'Le climat et la végétation du Cameroun',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Climat :</b> ensemble des conditions de température et de pluie observées pendant longtemps dans un lieu. <b>Végétation :</b> ensemble des plantes qui poussent naturellement dans une région.</div>
        <p>Le Cameroun présente plusieurs grands types de climats, du sud au nord :</p>
        <p>• <b>Climat équatorial</b> (sud) : chaud et très pluvieux, avec une forêt dense.</p>
        <p>• <b>Climat tropical</b> (centre et nord-ouest) : deux saisons, une saison des pluies et une saison sèche, avec une savane.</p>
        <p>• <b>Climat sec</b> (extrême nord) : peu de pluie, végétation de steppe et de savane arbustive.</p>
        <div class="exemple"><b>Exemple :</b> à Ebolowa, au sud, il pleut presque toute l'année et la forêt est dense ; à Maroua, au nord, la saison sèche est longue et la végétation est plus rare.</div>
        <div class="astuce">💡 Plus on va vers le nord, moins il pleut et plus la végétation devient clairsemée.</div>`,
      exercices: [
        { q: 'Quel type de végétation trouve-t-on dans le sud du Cameroun ?', r: 'Une <b>forêt dense</b>.' },
        { q: 'Quelle est la caractéristique du climat de l\'extrême nord ?', r: 'Il est <b>sec</b>, avec peu de pluie.' },
        { q: 'Décris la différence entre le sud et le nord du pays.', r: 'Le sud est chaud et très pluvieux (forêt), le nord est plus sec (savane, steppe).' }
      ],
      qcm: [
        { q: 'Le climat équatorial se trouve :', options: ['au sud', 'à l\'extrême nord', 'sur l\'Adamaoua seulement', 'nulle part'], correct: 0, exp: 'Le climat équatorial est au sud.' },
        { q: 'La végétation la plus dense se trouve :', options: ['au nord', 'au sud', 'dans le désert', 'sur les plateaux seulement'], correct: 1, exp: 'La forêt dense est au sud.' },
        { q: 'Le climat de l\'extrême nord est :', options: ['équatorial', 'sec', 'polaire', 'océanique'], correct: 1, exp: 'Il est sec, avec peu de pluies.' },
        { q: 'La savane est une végétation typique :', options: ['de la forêt dense', 'du climat tropical', 'des montagnes enneigées', 'des mers'], correct: 1, exp: 'Elle caractérise le climat tropical.' },
        { q: 'Le climat tropical du centre comporte :', options: ['une seule saison', 'deux saisons (pluies et sèche)', 'aucune pluie', 'de la neige'], correct: 1, exp: 'Il alterne saison des pluies et saison sèche.' }
      ]
    }]
  },
  '3eme': {
    'Physique-Chimie': [{
      id: 'pc3-force-poids',
      titre: 'La force et le poids',
      duree: '30 min',
      contenu: `
        <div class="definition"><b>Masse (m)</b> : quantité de matière d'un corps, en kg. Elle ne change pas.<br>
        <b>Poids (P)</b> : force d'attraction de la Terre sur un corps, en newton (N).</div>
        <p>Formule : <b>P = m × g</b> avec g ≈ 9,8 N/kg (10 N/kg pour un calcul rapide).</p>
        <div class="exemple">Exemple : un sac de maïs de 50 kg → P = 50 × 9,8 = <b>490 N</b> (≈ 500 N avec g = 10).</div>
        <div class="astuce">💡 Ne confonds pas masse (kg, balance) et poids (N, dynamomètre).</div>`,
      exercices: [
        { q: "Calcule le poids d'un élève de 40 kg (g = 10 N/kg).", r: 'P = 40 × 10 = <b>400 N</b>.' },
        { q: 'Un corps a un poids de 98 N. Quelle est sa masse (g = 9,8 N/kg) ?', r: 'm = P / g = 98 / 9,8 = <b>10 kg</b>.' }
      ],
      qcm: [
        { q: "L'unité du poids est :", options: ['le kilogramme', 'le newton', 'le mètre', 'le joule'], correct: 1, exp: 'Le poids est une force : son unité est le newton (N).' }
      ]
    }],
    'Mathématiques': [{
      id: 'm3-identites',
      titre: 'Les identités remarquables',
      duree: '35 min',
      contenu: `<div class="definition"><b>Identités remarquables</b> (a et b sont des nombres ou des expressions) :<br>(a + b)² = a² + 2ab + b²<br>(a − b)² = a² − 2ab + b²<br>(a + b)(a − b) = a² − b²</div><p>On les utilise pour développer une expression ou calculer rapidement un carré.</p><div class="exemple"><b>Exemple :</b> pour calculer 99², on écrit 99 = 100 − 1 : (100 − 1)² = 10 000 − 200 + 1 = <b>9 801</b>.</div><p>Exemple de développement : (x + 3)² = x² + 6x + 9.</p><div class="astuce">💡 Le double produit 2ab est souvent oublié : vérifie-le toujours.</div>`,
      exercices: [
        { q: 'Développe (x + 2)².', r: 'x² + 4x + 4.' },
        { q: 'Calcule 98² en utilisant (100 − 2)².', r: '10 000 − 400 + 4 = <b>9 604</b>.' },
        { q: 'Développe (y + 5)(y − 5).', r: 'y² − 25.' }
      ],
      qcm: [
        { q: '(a + b)² est égal à :', options: ['a² + b²', 'a² + 2ab + b²', 'a² + ab + b²', '2a + 2b'], correct: 1, exp: "C'est l'identité du carré d'une somme." },
        { q: '(a + b)(a − b) est égal à :', options: ['a² − b²', 'a² + b²', '2ab', 'a − b'], correct: 0, exp: "C'est la différence de deux carrés." },
        { q: '(x − 1)² est égal à :', options: ['x² − 1', 'x² − 2x + 1', 'x² + 1', 'x² − 2x − 1'], correct: 1, exp: 'On applique (a − b)² avec b = 1.' },
        { q: 'Pour calculer 101², on écrit :', options: ['(100 + 1)²', '(10 + 1)²', '101 × 1', '100² + 1'], correct: 0, exp: '(100 + 1)² = 10 201.' },
        { q: '(2x)² est égal à :', options: ['2x²', '4x²', '4x', 'x²'], correct: 1, exp: '(2x)² = 4x².' }
      ]
    }],
    'Français': [{
      id: 'm3-fr-cause-consequence',
      titre: 'La cause et la conséquence',
      duree: '30 min',
      contenu: `<div class="definition"><b>Cause :</b> ce qui explique un fait. <b>Conséquence :</b> ce qui en résulte.</div><p><b>Connecteurs de cause :</b> parce que, car, puisque, comme, grâce à, à cause de.</p><p><b>Connecteurs de conséquence :</b> donc, alors, par conséquent, c'est pourquoi, si bien que.</p><div class="exemple"><b>Exemple :</b> « Il a plu toute la nuit, donc la route est boueuse. » La pluie est la cause ; la boue est la conséquence.</div><div class="astuce">💡 « Parce que » répond à la question « pourquoi ? », alors que « donc » introduit ce qui découle du fait.</div>`,
      exercices: [
        { q: 'Relie par un connecteur de cause : « Il est absent ___ il est malade. »', r: "« parce qu' » ou « car » : <b>il est absent parce qu'il est malade</b>." },
        { q: 'Relie par un connecteur de conséquence : « Il pleut, ___ nous restons à la maison. »', r: "« donc » ou « c'est pourquoi »." },
        { q: 'Identifie la cause : « Grâce à la pluie, les champs sont verts. »', r: 'La <b>pluie</b>.' }
      ],
      qcm: [
        { q: 'Lequel est un connecteur de cause ?', options: ['donc', 'parce que', 'alors', "c'est pourquoi"], correct: 1, exp: '« Parce que » introduit la cause.' },
        { q: 'Lequel est un connecteur de conséquence ?', options: ['car', 'puisque', 'donc', 'grâce à'], correct: 2, exp: '« Donc » introduit la conséquence.' },
        { q: 'Dans « Il a étudié, donc il a réussi », la conséquence est :', options: ['il a étudié', 'il a réussi', 'donc', 'étudier'], correct: 1, exp: "Réussir est la conséquence de l'étude." },
        { q: '« À cause de » introduit :', options: ['une conséquence', 'une cause', 'une comparaison', 'une question'], correct: 1, exp: "C'est un connecteur de cause." },
        { q: '« Par conséquent » introduit :', options: ['une cause', 'une conséquence', 'une énumération', 'une exclamation'], correct: 1, exp: "C'est un connecteur de conséquence." }
      ]
    }],
    'Histoire': [{
      id: 'm3-hist-independance',
      titre: "La décolonisation et l'indépendance du Cameroun",
      duree: '35 min',
      contenu: `<div class="definition"><b>Décolonisation :</b> processus par lequel les peuples colonisés obtiennent leur indépendance.</div><p>Après la Seconde Guerre mondiale, les mouvements nationalistes se développent. Au Cameroun français, l'Union des populations du Cameroun (UPC) réclame l'indépendance dès 1948 ; la révolte qui suit en 1955 est sévèrement réprimée.</p><p>En 1957, un statut d'autonomie interne est accordé. Le <b>1er janvier 1960</b>, le Cameroun français devient indépendant, sous la présidence d'Ahmadou Ahidjo.</p><div class="exemple"><b>Exemple :</b> la fête nationale du 20 mai rappelle la proclamation de la République du Cameroun en 1960 (réunification d'un État unifié en 1972).</div><div class="astuce">💡 Retiens : 1948 (UPC), 1957 (autonomie), 1960 (indépendance).</div>`,
      exercices: [
        { q: 'En quelle année le Cameroun français devient-il indépendant ?', r: 'Le <b>1er janvier 1960</b>.' },
        { q: "Quel mouvement réclame l'indépendance dès 1948 ?", r: "L'<b>UPC</b> (Union des populations du Cameroun)." },
        { q: 'Qui est le premier président du Cameroun indépendant ?', r: '<b>Ahmadou Ahidjo</b>.' }
      ],
      qcm: [
        { q: 'La décolonisation désigne :', options: ["la conquête d'un pays", "l'accès à l'indépendance d'un peuple colonisé", 'une guerre mondiale', 'une élection'], correct: 1, exp: "C'est l'obtention de l'indépendance." },
        { q: "L'UPC est :", options: ['un parti colonial', 'un mouvement nationaliste', 'une armée allemande', 'une école'], correct: 1, exp: "L'UPC réclame l'indépendance." },
        { q: "L'indépendance du Cameroun français date de :", options: ['1945', '1957', '1960', '1972'], correct: 2, exp: 'Le 1er janvier 1960.' },
        { q: 'Le premier président du Cameroun indépendant est :', options: ['Ruben Um Nyobè', 'Ahmadou Ahidjo', 'Paul Biya', "Samuel Eto'o"], correct: 1, exp: "C'est Ahmadou Ahidjo." },
        { q: 'En 1957, le Cameroun obtient :', options: ["l'indépendance totale", "un statut d'autonomie interne", 'la colonisation allemande', 'rien'], correct: 1, exp: "Un statut d'autonomie interne est accordé." }
      ]
    }],
    'Anglais': [{
      id: 'm3-en-comparatives',
      titre: 'Comparatives and superlatives (Comparatifs et superlatifs)',
      duree: '30 min',
      contenu: `<div class="definition"><b>Comparatif :</b> compare deux éléments. Adjectif court : tall → <b>taller than</b> (plus grand que). Adjectif long : expensive → <b>more expensive than</b> (plus cher que).</div><p><b>Superlatif :</b> désigne le plus haut degré. Adjectif court : tall → <b>the tallest</b> (le plus grand). Adjectif long : <b>the most expensive</b> (le plus cher).</p><div class="exemple"><b>Exemple camerounais :</b> <i>Mount Cameroon is higher than the Mbam hills. It is the highest mountain in the country.</i> (Le mont Cameroun est plus haut que les collines. C'est la montagne la plus haute du pays.)</div><div class="astuce">💡 Pour les adjectifs courts, on ajoute -er ou -est ; pour les longs, on utilise more ou most.</div>`,
      exercices: [
        { q: 'Écris le comparatif de « big ».', r: '<i>bigger</i> (than).' },
        { q: 'Écris le superlatif de « beautiful ».', r: '<i>the most beautiful</i>.' },
        { q: 'Traduis : « Douala est plus grande que Bafoussam. »', r: '<i>Douala is bigger than Bafoussam.</i>' }
      ],
      qcm: [
        { q: 'Le comparatif de « tall » est :', options: ['tallest', 'taller', 'more tall', 'tall than'], correct: 1, exp: 'Adjectif court : taller.' },
        { q: 'Le superlatif de « expensive » est :', options: ['the most expensive', 'the expensiver', 'the more expensive', 'expensivest'], correct: 0, exp: 'Adjectif long : the most.' },
        { q: 'Pour comparer deux éléments, on utilise :', options: ['as', 'than', 'the', 'most'], correct: 1, exp: 'On dit « bigger than ».' },
        { q: '« The highest » signifie :', options: ['le plus haut', 'plus haut', 'haut', 'très haut'], correct: 0, exp: "C'est le superlatif de high." },
        { q: 'La bonne phrase est :', options: ['He is more tall than me.', 'He is taller than me.', 'He is tallest than me.', 'He is tall than me.'], correct: 1, exp: 'Adjectif court : taller than.' }
      ]
    }],
    'SVT': [{
      id: 'm3-svt-immunite',
      titre: 'Le système immunitaire et les microbes',
      duree: '35 min',
      contenu: `<div class="definition"><b>Microbe pathogène :</b> micro-organisme (bactérie, virus, champignon) qui peut provoquer une maladie.</div><p><b>Le système immunitaire :</b> ensemble de défenses du corps. Les globules blancs repèrent et détruisent les microbes ; les anticorps neutralisent certains d'entre eux.</p><p><b>La vaccination :</b> on introduit un microbe affaibli ou inactif, pour que le corps fabrique des anticorps et reconnaisse le microbe en cas d'infection réelle.</p><div class="exemple"><b>Exemple :</b> le vaccin contre la fièvre jaune protège contre un virus ; la vaccination est une prévention efficace.</div><div class="astuce">💡 Un antibiotique agit contre les bactéries, pas contre les virus.</div>`,
      exercices: [
        { q: 'Que font les globules blancs ?', r: 'Ils repèrent et <b>détruisent les microbes</b>.' },
        { q: "Qu'est-ce qu'un anticorps ?", r: 'Une protéine qui <b>neutralise</b> certains microbes.' },
        { q: 'À quoi sert la vaccination ?', r: 'À préparer le corps à <b>reconnaître</b> un microbe et à produire des anticorps.' }
      ],
      qcm: [
        { q: 'Un microbe pathogène est :', options: ['utile', 'capable de provoquer une maladie', 'une plante', 'un minéral'], correct: 1, exp: 'Il peut rendre malade.' },
        { q: 'Les globules blancs ont pour rôle :', options: ["transporter l'oxygène", 'détruire les microbes', 'digérer les aliments', 'produire la salive'], correct: 1, exp: "Ils défendent l'organisme." },
        { q: 'La vaccination permet :', options: ['de tomber malade', "de produire des anticorps à l'avance", 'de supprimer le système immunitaire', "de boire moins d'eau"], correct: 1, exp: 'Elle prépare le corps à se défendre.' },
        { q: 'Un antibiotique agit contre :', options: ['les bactéries', 'les virus', 'les plantes', 'les os'], correct: 0, exp: 'Les antibiotiques agissent sur les bactéries.' },
        { q: 'Les anticorps sont produits par :', options: ['le cerveau', 'le système immunitaire', 'les muscles', 'le foie seul'], correct: 1, exp: 'Ils sont produits par le système immunitaire.' }
      ]
    }],
    'Géographie': [{
      id: 'm3-geo-economie',
      titre: "L'économie et les ressources du Cameroun",
      duree: '35 min',
      contenu: `<div class="definition"><b>Ressource naturelle :</b> élément de la nature utilisé par l'homme (sol, forêt, eau, sous-sol). <b>Activité économique :</b> production, transformation ou échange de biens et de services.</div><p><b>L'agriculture</b> occupe une grande part de la population active. Les grandes cultures d'exportation sont le cacao, le café et la banane.</p><p><b>La forêt</b> fournit du bois. <b>Le sous-sol</b> contient du pétrole, exploité au sud-ouest et en mer.</p><p><b>L'énergie hydroélectrique</b> est produite grâce aux barrages, comme celui d'Édéa sur le Wouri.</p><div class="exemple"><b>Exemple :</b> le cacao récolté dans le Centre et le Sud est exporté par le port de Douala, qui concentre une grande partie du commerce extérieur.</div><div class="astuce">💡 Une ressource est une richesse seulement si l'homme sait l'exploiter durablement.</div>`,
      exercices: [
        { q: "Cite deux cultures d'exportation du Cameroun.", r: 'Le <b>cacao</b> et le <b>café</b> (ou la banane).' },
        { q: 'Quelle ressource du sous-sol est exploitée au Cameroun ?', r: 'Le <b>pétrole</b>.' },
        { q: 'Par quel port passe une grande partie du commerce extérieur ?', r: 'Le port de <b>Douala</b>.' }
      ],
      qcm: [
        { q: 'Une ressource naturelle est :', options: ['un produit fabriqué', "un élément de la nature utilisé par l'homme", 'un habitant', 'une route'], correct: 1, exp: 'Elle vient de la nature.' },
        { q: 'Le cacao est :', options: ["une culture d'exportation", 'un minerai', 'une énergie', 'un fleuve'], correct: 0, exp: "C'est une culture d'exportation." },
        { q: "L'énergie hydroélectrique provient :", options: ['du pétrole', "de l'eau des barrages", 'du soleil seulement', 'du bois'], correct: 1, exp: "Elle utilise la force de l'eau." },
        { q: 'La principale activité économique est souvent :', options: ["l'agriculture", 'le tourisme seul', 'la mode', 'le sport'], correct: 0, exp: "L'agriculture occupe beaucoup de travailleurs." },
        { q: 'Le port principal du Cameroun est :', options: ['Yaoundé', 'Douala', 'Garoua', 'Maroua'], correct: 1, exp: 'Douala est le principal port.' }
      ]
    }],
    'ECM': [{
      id: 'm3-ecm-citoyennete',
      titre: 'La citoyenneté et le vote',
      duree: '30 min',
      contenu: `<div class="definition"><b>Citoyenneté :</b> appartenance à une nation, avec des droits et des devoirs. <b>Suffrage universel :</b> système où tous les citoyens remplissant les conditions légales peuvent voter.</div><p><b>Les devoirs du citoyen :</b> respecter la loi, payer ses impôts, participer à la vie de la cité, défendre la patrie.</p><p><b>Le vote :</b> il permet de choisir ses représentants. Voter est un droit et une responsabilité ; il se fait au secret de l'isoloir.</p><div class="exemple"><b>Exemple :</b> lors d'une élection municipale, les électeurs choisissent les conseillers qui géreront la commune pendant plusieurs années.</div><div class="astuce">💡 Un droit s'accompagne toujours d'un devoir : voter est à la fois un droit et un acte de responsabilité.</div>`,
      exercices: [
        { q: "Qu'est-ce que le suffrage universel ?", r: 'Un système où <b>tous les citoyens</b> remplissant les conditions peuvent voter.' },
        { q: 'Cite un devoir du citoyen.', r: 'Respecter la loi (ou payer ses impôts, défendre la patrie).' },
        { q: 'Pourquoi vote-t-on ?', r: 'Pour <b>choisir ses représentants</b>.' }
      ],
      qcm: [
        { q: 'La citoyenneté donne :', options: ['seulement des devoirs', 'des droits et des devoirs', 'aucune obligation', 'des privilèges seuls'], correct: 1, exp: 'Elle implique droits et devoirs.' },
        { q: 'Le vote au secret se fait :', options: ['en public', "à l'isoloir", 'par téléphone seulement', 'sans bulletin'], correct: 1, exp: "Le secret est garanti par l'isoloir." },
        { q: 'Payer ses impôts est :', options: ['un droit seulement', 'un devoir du citoyen', 'une faute', 'facultatif pour tous'], correct: 1, exp: "C'est un devoir." },
        { q: 'Un conseiller municipal est choisi :', options: ['par tirage au sort', 'par les électeurs', 'par le roi', "par l'armée"], correct: 1, exp: 'Il est élu par les électeurs.' },
        { q: 'Le suffrage universel signifie :', options: ['que seuls les riches votent', 'que tous les citoyens concernés peuvent voter', 'que personne ne vote', 'que le président seul vote'], correct: 1, exp: "C'est le vote de tous les citoyens remplissant les conditions." }
      ]
    }],
    'EPS': [{
      id: 'm3-eps-basket',
      titre: 'Le basket-ball : dribble et passe',
      duree: '30 min',
      contenu: `<div class="definition"><b>Dribble :</b> faire rebondir le ballon au sol avec une main, sans marcher avec le ballon. <b>Passe :</b> envoyer le ballon à un partenaire.</div><p><b>Le dribble :</b> garder le ballon bas, la main en contact avec lui, et le regard vers le terrain pour voir les partenaires.</p><p><b>La passe à deux mains :</b> le ballon part de la poitrine, les coudes sont écartés et les bras tendus.</p><div class="exemple"><b>Exemple :</b> pendant un match scolaire, un joueur dribble vers le panier puis fait une passe à son partenaire démarqué.</div><div class="astuce">💡 Regarde le terrain, pas le ballon : tu vois mieux tes partenaires.</div>`,
      exercices: [
        { q: "Qu'est-ce que le dribble ?", r: 'Faire rebondir le ballon au sol avec une main.' },
        { q: "Quel est le geste d'une passe à deux mains ?", r: 'Le ballon part de la poitrine, les bras tendus et les coudes écartés.' },
        { q: 'Pourquoi regarder le terrain en dribblant ?', r: 'Pour voir les <b>partenaires</b> démarqués.' }
      ],
      qcm: [
        { q: 'Le dribble consiste à :', options: ['porter le ballon', 'faire rebondir le ballon au sol', 'lancer le ballon dans les tribunes', 'le cacher'], correct: 1, exp: "C'est le rebond contrôlé." },
        { q: 'Une passe est :', options: ['un tir au panier', "l'envoi du ballon à un partenaire", 'une faute', 'un temps mort'], correct: 1, exp: "C'est un envoi vers un coéquipier." },
        { q: 'En dribblant, il faut regarder :', options: ['ses pieds', 'le terrain', 'le ballon uniquement', 'le sol'], correct: 1, exp: 'Le terrain permet de voir les partenaires.' },
        { q: 'Marcher avec le ballon sans dribbler est :', options: ['autorisé', 'une faute', 'un point', 'obligatoire'], correct: 1, exp: "C'est une faute (marcher)." },
        { q: 'Une passe à deux mains part :', options: ['des pieds', 'de la poitrine', 'de la tête', 'du genou'], correct: 1, exp: 'Elle part de la poitrine.' }
      ]
    }],
    'Informatique': [{
      id: 'm3-info-tableur-formules',
      titre: 'Le tableur : formules simples',
      duree: '35 min',
      contenu: `<div class="definition"><b>Tableur :</b> logiciel qui organise des données en lignes et en colonnes, et qui calcule grâce aux formules. Chaque case s'appelle une cellule (ex : A1).</div><p><b>Une formule commence par le signe égal</b> : <code>=A1+B1</code> additionne les cellules A1 et B1.</p><p><b>La fonction SOMME :</b> <code>=SOMME(A1:A5)</code> additionne les valeurs de A1 à A5.</p><p><b>Recopier une formule :</b> la formule s'adapte aux cellules voisines (poignée de recopie).</p><div class="exemple"><b>Exemple :</b> dans une liste de notes de la classe de 3ème, la formule =MOYENNE(B2:B20) calcule la moyenne des notes.</div><div class="astuce">💡 Une formule commence toujours par le signe égal, sinon le tableur affiche le texte tel quel.</div>`,
      exercices: [
        { q: 'Quelle formule additionne les cellules de A1 à A5 ?', r: '<code>=SOMME(A1:A5)</code>.' },
        { q: 'Quel signe doit commencer une formule ?', r: 'Le signe <b>=</b>.' },
        { q: 'Comment nomme-t-on la case située en colonne B, ligne 3 ?', r: 'La cellule <b>B3</b>.' }
      ],
      qcm: [
        { q: 'Une cellule est identifiée par :', options: ['un nombre seul', 'sa colonne et sa ligne (ex : B3)', 'un dessin', 'un mot-clé'], correct: 1, exp: "C'est sa colonne suivie de sa ligne." },
        { q: 'Une formule commence par :', options: ['une lettre', 'le signe =', 'un espace', 'le signe +'], correct: 1, exp: 'Le signe = indique une formule.' },
        { q: 'La formule =MOYENNE(A1:A4) calcule :', options: ['la somme', 'la moyenne', 'le plus grand nombre', 'le nombre de cellules'], correct: 1, exp: 'MOYENNE calcule la moyenne.' },
        { q: 'Quelle formule additionne A1 et B1 ?', options: ['=A1*B1', '=A1+B1', '=A1-B1', '=A1/B1'], correct: 1, exp: "L'addition se fait avec +." },
        { q: 'La poignée de recopie permet de :', options: ['supprimer une cellule', 'recopier une formule vers les cellules voisines', 'imprimer', 'fermer le logiciel'], correct: 1, exp: "Elle recopie la formule en l'adaptant." }
      ]
    }]
  },
  'terminale': {
    'Philosophie': [{
      id: 'phi-tle-conscience',
      titre: 'La conscience',
      duree: '35 min',
      contenu: `
        <div class="definition"><b>Conscience :</b> connaissance que l'homme a de lui-même, de ses actes et du monde qui l'entoure.</div>
        <p>• <b>Descartes</b> : « Je pense, donc je suis » : la conscience est la première certitude.</p>
        <p>• <b>Freud</b> : une grande part de la vie psychique est inconsciente.</p>
        <p>• <b>Sartre</b> : la conscience est liberté ; l'homme est responsable de ce qu'il fait.</p>
        <div class="astuce">💡 Méthode : problématique → thèse → antithèse → synthèse. Fais dialoguer les auteurs au lieu de les réciter.</div>`,
      exercices: [
        { q: "Sujet : « La conscience est-elle le fondement de la liberté ? » Dégage la problématique.", r: "Problématique : la conscience suffit-elle à fonder la liberté, ou la liberté suppose-t-elle des conditions qui échappent à la conscience ?" }
      ],
      qcm: [
        { q: 'Qui énonce « Je pense, donc je suis » ?', options: ['Freud', 'Descartes', 'Sartre', 'Marx'], correct: 1, exp: "C'est le cogito de Descartes." }
      ]
    }, {
      id: 'phi-tle-liberte',
      titre: 'La liberté',
      duree: '40 min',
      contenu: `
        <div class="definition"><b>Liberté :</b> capacité de se déterminer soi-même, sans contrainte extérieure, en assumant ses choix.</div>
        <p>On distingue souvent trois sens :</p>
        <p>• <b>La liberté comme absence de contrainte</b> : être libre, c'est pouvoir agir sans être empêché. Un élève qui peut choisir sa série au BAC est libre en ce sens.</p>
        <p>• <b>La liberté comme autonomie</b> (Kant) : être libre, c'est obéir à la loi qu'on se donne par la raison, non à ses désirs.</p>
        <p>• <b>La liberté comme engagement</b> (Sartre) : l'homme est « condamné à être libre » : il ne peut pas ne pas choisir, et il est responsable de ses choix.</p>
        <div class="exemple"><b>Exemple camerounais :</b> une jeune fille qui choisit une filière scientifique parce que sa famille le lui impose n'agit pas librement au sens de l'autonomie, même si personne ne l'empêche de choisir autrement.</div>
        <div class="astuce">💡 Pour une dissertation, distingue toujours liberté physique (pouvoir agir) et liberté morale (vouloir agir par soi-même).</div>`,
      exercices: [
        { q: 'Sujet : « Suis-je libre quand je fais ce que je veux ? » Dégage la problématique.', r: "Problématique : faire ce que l'on veut suffit-il à être libre, ou la liberté exige-t-elle de vouloir par soi-même, sans être esclave de ses désirs ou de ses préjugés ?" },
        { q: "Distingue la liberté d'action et la liberté morale.", r: "La liberté d'action est le pouvoir de faire ce qu'on veut sans contrainte extérieure. La liberté morale est la capacité de se donner sa propre loi et de choisir par raison." },
        { q: 'Explique en quoi Sartre dit que « l\'homme est condamné à être libre ».', r: "Même lorsqu'il refuse de choisir, l'homme choisit de ne pas choisir. Il ne peut donc pas échapper à sa liberté, et il en porte la responsabilité entière." }
      ],
      qcm: [
        { q: 'Pour Kant, être libre c\'est :', options: ['faire ce qu\'on désire', 'obéir à la loi qu\'on se donne par la raison', 'ne subir aucune loi', 'suivre la majorité'], correct: 1, exp: 'Pour Kant, l\'autonomie consiste à se soumettre à une loi que la raison se donne à elle-même.' },
        { q: 'Quelle formule est associée à Sartre ?', options: ['« Je pense, donc je suis »', '« L\'homme est condamné à être libre »', '« Connais-toi toi-même »', '« Le moi est haïssable »'], correct: 1, exp: 'Sartre affirme que l\'homme ne peut pas échapper à la liberté, qui entraîne sa responsabilité.' },
        { q: 'La liberté physique désigne :', options: ['le pouvoir de vouloir par soi-même', 'l\'absence d\'obstacle à l\'action', 'la conscience morale', 'le libre arbitre divin'], correct: 1, exp: 'La liberté physique est le pouvoir d\'agir sans être empêché par une contrainte extérieure.' },
        { q: 'Un élève obligé par ses parents de choisir une série précise est :', options: ['totalement libre', 'libre seulement en apparence au sens de l\'autonomie', 'libre au sens moral', 'indifférent à sa liberté'], correct: 1, exp: 'Il n\'est pas autonome, car son choix ne vient pas de sa propre raison.' },
        { q: 'La responsabilité découle selon Sartre :', options: ['de la nature humaine', 'de la liberté de choisir', 'des lois divines', 'de la société seule'], correct: 1, exp: 'Puisque l\'homme choisit toujours, il est responsable de ses choix.' }
      ]
    }, {
      id: 'phi-tle-verite',
      titre: 'La vérité',
      duree: '40 min',
      contenu: `
        <div class="definition"><b>Vérité :</b> accord de la pensée avec la réalité (conception classique), ou ce qui résiste à l'épreuve de la critique et de l'expérience.</div>
        <p>Trois approches à connaître :</p>
        <p>• <b>La vérité comme correspondance</b> : une proposition est vraie si elle correspond aux faits. « Il pleut » est vrai s'il pleut réellement.</p>
        <p>• <b>Le doute méthodique</b> (Descartes) : pour atteindre une vérité certaine, il faut rejeter tout ce qui peut être mis en doute. Le « je pense » résiste au doute.</p>
        <p>• <b>La vérité comme construction</b> : les savoirs évoluent avec l'expérience et la critique (Popper : une théorie est scientifique si elle peut être réfutée).</p>
        <div class="exemple"><b>Exemple :</b> la croyance que la terre ne tourne pas autour du soleil a été réfutée par les observations. La vérité scientifique progresse ainsi par la critique.</div>
        <div class="astuce">💡 Ne confonds pas vérité et opinion : une opinion se défend, une vérité se démontre ou s'établit par les faits.</div>`,
      exercices: [
        { q: 'Sujet : « Peut-on connaître la vérité sans la chercher ? » Dégage la problématique.', r: "Problématique : la vérité est-elle un trésor qui s'offre à celui qui ne la cherche pas, ou exige-t-elle un effort méthodique de la pensée ?" },
        { q: 'Explique le principe du doute méthodique de Descartes.', r: "Il faut mettre en doute toute connaissance susceptible d'erreur, pour ne retenir que ce qui résiste au doute, comme l'existence de la pensée qui doute." },
        { q: 'Pourquoi une théorie scientifique doit-elle pouvoir être réfutée ?', r: "Parce qu'une théorie qui ne peut jamais être contredite par l'expérience n'apporte aucune information sur le réel (critère de réfutabilité de Popper)." }
      ],
      qcm: [
        { q: 'Selon la conception classique, une proposition est vraie si :', options: ['elle est largement admise', 'elle correspond aux faits', 'elle est utile', 'elle vient d\'un savant'], correct: 1, exp: 'La vérité est l\'accord de la pensée avec la réalité.' },
        { q: 'Le doute méthodique est associé à :', options: ['Freud', 'Marx', 'Descartes', 'Kant'], correct: 2, exp: 'Descartes propose de douter de tout ce qui peut être mis en doute pour atteindre une certitude.' },
        { q: 'Selon Popper, une théorie est scientifique si :', options: ['elle est enseignée', 'elle est réfutable', 'elle est ancienne', 'elle est approuvée par tous'], correct: 1, exp: 'La réfutabilité est le critère de scientificité de Popper.' },
        { q: 'Une opinion se distingue d\'une vérité en ce que :', options: ['elle est toujours fausse', 'elle n\'est pas fondée sur des faits établis', 'elle est scientifique', 'elle est partagée par la majorité'], correct: 1, exp: 'Une vérité repose sur des faits ou une démonstration ; une opinion peut ne pas l\'être.' },
        { q: 'Le « je pense » de Descartes résiste au doute parce que :', options: ['il est partagé par tous', 'douter de sa propre pensée prouve qu\'elle existe', 'il vient de Dieu', 'il est scientifique'], correct: 1, exp: 'Pour douter, il faut penser : le doute lui-même atteste l\'existence de la pensée.' }
      ]
    }],
    'Mathématiques': [{
      id: 'tle-maths-proba-cond',
      titre: 'Probabilités conditionnelles',
      duree: '40 min',
      contenu: `
        <div class="definition"><b>Probabilité conditionnelle :</b> la probabilité de A sachant que B est réalisé est <b>P_B(A) = P(A ∩ B) / P(B)</b>, avec P(B) ≠ 0.</div>
        <p>On la lit « probabilité de A sachant B ». On restreint l'univers à l'événement B.</p>
        <div class="exemple"><b>Exemple camerounais :</b> dans une classe de Terminale de 60 élèves, 36 suivent la série C et 24 la série D. Parmi les élèves de la série C, 18 sont des filles. On tire un élève au hasard : quelle est la probabilité qu'il soit une fille sachant qu'il est en série C ? Réponse : P = 18/36 = <b>1/2</b>.</div>
        <p><b>Arbre pondéré :</b> sur chaque branche on écrit la probabilité conditionnelle ; la probabilité d'un chemin est le produit des probabilités le long du chemin.</p>
        <p><b>Formule des probabilités totales :</b> si B et son contraire B̄ forment une partition, P(A) = P(A ∩ B) + P(A ∩ B̄) = P(B)·P_B(A) + P(B̄)·P_B̄(A).</p>
        <div class="astuce">💡 Pour un exercice, dessine toujours un arbre : la plupart des erreurs viennent d'une confusion entre P(A ∩ B) et P_B(A).</div>`,
      exercices: [
        { q: 'On donne P(B) = 0,4 et P(A ∩ B) = 0,1. Calcule P_B(A).', r: 'P_B(A) = 0,1 / 0,4 = <b>0,25</b>.' },
        { q: 'P(A) = 0,3 ; P_A(B) = 0,5 ; P_Ā(B) = 0,2. Calcule P(B).', r: 'P(B) = P(A)·P_A(B) + P(Ā)·P_Ā(B) = 0,3×0,5 + 0,7×0,2 = 0,15 + 0,14 = <b>0,29</b>.' },
        { q: 'Dans une urne, 3 boules rouges et 2 boules noires. On tire 2 boules sans remise. Quelle est la probabilité que la 2e soit rouge sachant que la 1re est rouge ?', r: 'Il reste 2 rouges sur 4 boules : P = <b>2/4 = 1/2</b>.' }
      ],
      qcm: [
        { q: 'La formule de la probabilité conditionnelle est :', options: ['P(A) × P(B)', 'P(A ∩ B) / P(B)', 'P(A ∪ B) / P(B)', 'P(B) / P(A)'], correct: 1, exp: 'P_B(A) = P(A ∩ B) / P(B).' },
        { q: 'Si A et B sont indépendants, alors :', options: ['P_B(A) = 0', 'P_B(A) = P(A)', 'P(A ∩ B) = 0', 'P(A) = 1'], correct: 1, exp: 'Indépendance : connaître B ne change pas la probabilité de A.' },
        { q: 'Une probabilité conditionnelle est toujours comprise entre :', options: ['-1 et 1', '0 et 1', '0 et 100', '1 et 2'], correct: 1, exp: 'C\'est une probabilité, donc un nombre entre 0 et 1.' },
        { q: 'Dans un arbre pondéré, la probabilité d\'un chemin est :', options: ['la somme des branches', 'le produit des branches', 'la moyenne des branches', 'toujours 1/2'], correct: 1, exp: 'On multiplie les probabilités le long du chemin.' },
        { q: 'P(A) = 0,6 ; P_A(B) = 0,5. Alors P(A ∩ B) vaut :', options: ['0,1', '0,3', '1,1', '0,5'], correct: 1, exp: 'P(A ∩ B) = P(A) × P_A(B) = 0,6 × 0,5 = 0,3.' }
      ]
    }, {
      id: 'tle-maths-exponentielle',
      titre: 'La fonction exponentielle',
      duree: '40 min',
      contenu: `
        <div class="definition"><b>Fonction exponentielle :</b> notée exp, elle est définie et dérivable sur ℝ, égale à sa propre dérivée (exp' = exp), et vérifie exp(0) = 1 et exp(a + b) = exp(a) × exp(b).</div>
        <p><b>Propriétés essentielles :</b></p>
        <p>• exp(x) &gt; 0 pour tout réel x.</p>
        <p>• exp est strictement croissante sur ℝ, donc exp(a) = exp(b) ⇔ a = b, et exp(a) &lt; exp(b) ⇔ a &lt; b.</p>
        <p>• lim exp(x) = +∞ quand x → +∞ et lim exp(x) = 0 quand x → -∞.</p>
        <div class="exemple"><b>Exemple :</b> une somme placée à intérêts continus croît selon une fonction exponentielle : la croissance s'accélère car la dérivée est égale à la valeur elle-même.</div>
        <div class="astuce">💡 Pour résoudre une équation, passe toujours par la stricte croissance : exp(2x) = exp(5) donne 2x = 5.</div>`,
      exercices: [
        { q: 'Résous exp(2x) = exp(5) sur ℝ.', r: 'Par stricte croissance : 2x = 5, donc <b>x = 2,5</b>.' },
        { q: 'Simplifie exp(3) × exp(-1).', r: 'exp(3) × exp(-1) = exp(3 - 1) = <b>exp(2)</b>.' },
        { q: 'Étudie le signe de exp(x) - 1.', r: 'exp(x) - 1 &gt; 0 ⇔ exp(x) &gt; exp(0) ⇔ x &gt; 0. Donc exp(x) - 1 est négatif pour x &lt; 0, positif pour x &gt; 0, et nul en 0.' }
      ],
      qcm: [
        { q: 'exp(0) vaut :', options: ['0', '1', 'e', 'indéfini'], correct: 1, exp: 'Pour toute exponentielle de base e, exp(0) = 1.' },
        { q: 'exp(a) × exp(b) est égal à :', options: ['exp(a × b)', 'exp(a + b)', 'exp(a - b)', 'exp(a) + exp(b)'], correct: 1, exp: 'Propriété fondamentale de l\'exponentielle.' },
        { q: 'La dérivée de exp est :', options: ['x exp(x)', '1', 'exp(x)', 'ln(x)'], correct: 2, exp: 'La fonction exponentielle est égale à sa propre dérivée.' },
        { q: 'Pour tout réel x, exp(x) est :', options: ['strictement positif', 'négatif', 'nul parfois', 'toujours entier'], correct: 0, exp: 'L\'exponentielle est strictement positive sur ℝ.' },
        { q: 'lim exp(x) quand x tend vers -∞ vaut :', options: ['+∞', '1', '0', '-∞'], correct: 2, exp: 'L\'exponentielle tend vers 0 en -∞.' }
      ]
    }]
  }
};

// Sujets d'entraînement BEPC (originaux, dans le format de l'examen ; ce ne sont PAS des sujets officiels)
const SUJETS = [
  {
    id: 'bepc-maths-1', matiere: 'Mathématiques', titre: 'Sujet d\'entraînement n°1', duree: '1 h 30',
    exercices: [
      { titre: 'Exercice 1 : calculs (5 points)', consigne: 'Calcule et donne le résultat sous sa forme la plus simple.',
        questions: [
          { q: 'A = 3/4 + 5/6', r: 'A = 9/12 + 10/12 = <b>19/12</b>.' },
          { q: 'B = 2,4 × 3,5', r: 'B = <b>8,4</b>.' },
          { q: 'C = 2 × (−3)² − 5', r: 'C = 2 × 9 − 5 = <b>13</b>.' }
        ] },
      { titre: 'Exercice 2 : équations (5 points)', consigne: 'Résous les équations suivantes.',
        questions: [
          { q: '3x + 7 = 22', r: '3x = 15, donc <b>x = 5</b>.' },
          { q: '2(x − 4) = x + 1', r: '2x − 8 = x + 1, donc x = 9 : <b>x = 9</b>.' }
        ] },
      { titre: 'Exercice 3 : problème (5 points)', consigne: 'Un marché vend 12 sacs de maïs pour 36 000 F. Un article coûte 8 000 F avec une réduction de 15 %.',
        questions: [
          { q: 'Quel est le prix d\'un sac ?', r: '36 000 ÷ 12 = <b>3 000 F</b>.' },
          { q: 'Quel est le prix de 20 sacs ?', r: '3 000 × 20 = <b>60 000 F</b>.' },
          { q: 'Quel est le prix de l\'article après réduction ?', r: 'Réduction : 8 000 × 0,15 = 1 200 F ; prix : 8 000 − 1 200 = <b>6 800 F</b>.' }
        ] },
      { titre: 'Exercice 4 : géométrie (5 points)', consigne: 'ABC est un triangle rectangle en A, avec AB = 6 cm et AC = 8 cm.',
        questions: [
          { q: 'Calcule BC.', r: 'BC² = 6² + 8² = 100, donc <b>BC = 10 cm</b>.' },
          { q: 'Calcule le périmètre.', r: '6 + 8 + 10 = <b>24 cm</b>.' },
          { q: 'Calcule l\'aire.', r: '(6 × 8) ÷ 2 = <b>24 cm²</b>.' }
        ] }
    ]
  },
  {
    id: 'bepc-pc-1', matiere: 'Physique-Chimie', titre: 'Sujet d\'entraînement n°1', duree: '1 h 30',
    exercices: [
      { titre: 'Exercice 1 : force et poids (5 points)', consigne: 'On prend g = 10 N/kg.',
        questions: [
          { q: 'Calcule le poids d\'un élève de masse 45 kg.', r: 'P = m × g = 45 × 10 = <b>450 N</b>.' },
          { q: 'Un sac a un poids de 120 N. Calcule sa masse.', r: 'm = P ÷ g = 120 ÷ 10 = <b>12 kg</b>.' }
        ] },
      { titre: 'Exercice 2 : circuits électriques (5 points)', consigne: 'Réponds en justifiant.',
        questions: [
          { q: 'Deux lampes sont en série. Une est grillée. Que se passe-t-il pour l\'autre ?', r: 'Le circuit est coupé : <b>l\'autre lampe s\'éteint</b>.' },
          { q: 'Deux branches en dérivation ont des intensités I1 = 0,3 A et I2 = 0,2 A. Calcule l\'intensité totale.', r: 'I = I1 + I2 = 0,3 + 0,2 = <b>0,5 A</b>.' }
        ] },
      { titre: 'Exercice 3 : mélanges (5 points)', consigne: 'Réponds à chaque question.',
        questions: [
          { q: 'Quelle méthode sépare le sable de l\'eau ?', r: 'La <b>filtration</b>.' },
          { q: 'Comment récupérer le sel dissous dans l\'eau salée ?', r: 'Par <b>évaporation</b> de l\'eau.' },
          { q: 'L\'eau distillée est-elle un corps pur ou un mélange ?', r: 'Un <b>corps pur</b> : elle ne contient qu\'une seule substance.' }
        ] }
    ]
  },
  {
    id: 'bepc-fr-1', matiere: 'Français', titre: 'Sujet d\'entraînement n°1', duree: '1 h 30',
    exercices: [
      { titre: 'Exercice 1 : grammaire (5 points)', consigne: 'Réponds aux questions sur les phrases suivantes.',
        questions: [
          { q: 'Dans « Le maître corrige les cahiers », donne le COD.', r: '<b>les cahiers</b>.' },
          { q: 'Remplace ce COD par un pronom.', r: '« Le maître <b>les</b> corrige. »' },
          { q: 'Dans « Il pense à son frère », quelle est la nature de « à son frère » ?', r: 'C\'est un <b>complément d\'objet indirect (COI)</b>, introduit par « à ».' }
        ] },
      { titre: 'Exercice 2 : conjugaison (5 points)', consigne: 'Mets les phrases au passé composé.',
        questions: [
          { q: 'Les élèves finissent leur devoir.', r: 'Les élèves <b>ont fini</b> leur devoir.' },
          { q: 'Elle part à Douala.', r: 'Elle <b>est partie</b> à Douala.' },
          { q: 'Nous mangeons du ndolé.', r: 'Nous <b>avons mangé</b> du ndolé.' }
        ] },
      { titre: 'Exercice 3 : expression écrite (10 points)', consigne: 'Rédige un paragraphe de 5 à 8 lignes sur l\'importance de l\'école pour un jeune Camerounais. Utilise au moins un connecteur de cause (parce que, car) et un connecteur de conséquence (donc, alors).',
        questions: [
          { q: 'Critères de correction : idée principale claire, exemple concret, connecteurs bien employés, orthographe et ponctuation soignées.', r: 'Modèle : « L\'école est essentielle pour l\'avenir d\'un jeune Camerounais. <b>Parce qu\'elle</b> donne les connaissances nécessaires, elle ouvre des portes vers un métier. <b>Donc</b> chaque élève doit assister régulièrement aux cours et travailler avec sérieux. »' }
        ] }
    ]
  }
];

// ===== LEÇONS SUPPLÉMENTAIRES (3ème) =====
(function () {
  const add = (classe, matiere, lecons) => COURS[classe][matiere].push(...lecons);

  add('3eme', 'Mathématiques', [{
    id: 'm3-equations-1er-degre', titre: 'Les équations du premier degré', duree: '35 min',
    contenu: `
      <div class="definition"><b>Équation :</b> égalité contenant une inconnue (souvent x). <b>Résoudre</b> l'équation, c'est trouver la valeur de x qui rend l'égalité vraie.</div>
      <p><b>Méthode :</b> 1) développer les parenthèses ; 2) regrouper les x d'un côté et les nombres de l'autre ; 3) diviser par le coefficient de x.</p>
      <div class="exemple"><b>Exemple :</b> 2x + 3 = 11 → 2x = 8 → <b>x = 4</b>.<br>Autre exemple : 5(x − 1) = x + 7 → 5x − 5 = x + 7 → 4x = 12 → <b>x = 3</b>.</div>
      <div class="exemple"><b>Contexte camerounais :</b> un commerçant vend x sacs de riz à 2 000 F le sac et ajoute 500 F de frais. Il reçoit 9 500 F : 2 000x + 500 = 9 500, donc x = 4,5 ; il faut vérifier si la situation est possible.</div>
      <div class="astuce">💡 Vérifie toujours ta solution : remplace x par la valeur trouvée dans l'équation de départ.</div>`,
    exercices: [
      { q: 'Résous 4x − 5 = 7.', r: '4x = 12, donc <b>x = 3</b>.' },
      { q: 'Résous 3(x + 2) = 18.', r: '3x + 6 = 18, donc 3x = 12 et <b>x = 4</b>.' },
      { q: 'Résous x/2 + 1 = 5.', r: 'x/2 = 4, donc <b>x = 8</b>.' }
    ],
    qcm: [
      { q: 'La solution de 2x = 10 est :', options: ['2', '5', '20', '8'], correct: 1, exp: 'x = 10 ÷ 2 = 5.' },
      { q: 'La solution de x + 4 = 9 est :', options: ['13', '5', '4', '36'], correct: 1, exp: 'x = 9 − 4 = 5.' },
      { q: 'La solution de 3x − 6 = 0 est :', options: ['−2', '3', '2', '6'], correct: 2, exp: '3x = 6, donc x = 2.' },
      { q: 'Résous 2(x − 1) = 8 :', options: ['3', '5', '4', '6'], correct: 1, exp: '2x − 2 = 8, 2x = 10, x = 5.' },
      { q: 'Pour résoudre une équation, la première étape est souvent :', options: ['diviser par 0', 'développer les parenthèses', 'ajouter une inconnue', 'arrondir'], correct: 1, exp: 'On développe avant de regrouper les termes.' }
    ]
  }]);

  add('3eme', 'Français', [{
    id: 'm3-fr-discours-rapporte', titre: 'Le discours rapporté', duree: '30 min',
    contenu: `
      <div class="definition"><b>Discours direct :</b> on reproduit les paroles exactes, entre guillemets. <b>Discours indirect :</b> on rapporte les paroles avec « que », sans guillemets.</div>
      <p><b>Ce qui change :</b> les pronoms (je → il/elle), les possessifs (mon → son), les repères de temps et de lieu (ici → là, demain → le lendemain).</p>
      <p><b>Le temps :</b> si le verbe introducteur est au présent, le temps ne change pas. Si il est au passé, le présent devient imparfait et le futur devient conditionnel.</p>
      <div class="exemple"><b>Exemple :</b> Il dit : « Je viens demain. » → Il dit qu'il vient le lendemain. Mais : Il a dit : « Je viens demain. » → Il a dit qu'il venait le lendemain.</div>
      <div class="astuce">💡 Pour passer au discours indirect, on supprime les guillemets et on met « que » ; le reste s'adapte.</div>`,
    exercices: [
      { q: 'Transforme : Elle dit : « Je suis fatiguée. »', r: '<b>Elle dit qu\'elle est fatiguée.</b>' },
      { q: 'Transforme : Il a dit : « Je pars demain. »', r: '<b>Il a dit qu\'il partait le lendemain.</b>' },
      { q: 'Transforme : Le maître demande : « Où est votre cahier ? »', r: '<b>Le maître demande où est mon cahier (ou : où est leur cahier, selon le sujet).</b>' }
    ],
    qcm: [
      { q: 'Le discours direct se reconnaît à :', options: ['l\'absence de guillemets', 'les guillemets', 'le mot « que » seul', 'les verbes à l\'infinitif'], correct: 1, exp: 'Les paroles exactes sont entre guillemets.' },
      { q: 'Dans le discours indirect, « je » devient souvent :', options: ['tu', 'nous', 'il ou elle', 'vous'], correct: 2, exp: 'Le pronom s\'adapte au narrateur.' },
      { q: '« Demain » devient souvent :', options: ['hier', 'le lendemain', 'aujourd\'hui', 'jamais'], correct: 1, exp: 'Le repère de temps change.' },
      { q: 'Il a dit : « Je travaille. » devient :', options: ['Il a dit qu\'il travaille.', 'Il a dit qu\'il travaillait.', 'Il a dit travailler.', 'Il dit qu\'il travaillera.'], correct: 1, exp: 'Après un verbe au passé, le présent devient imparfait.' },
      { q: 'Le discours indirect est introduit le plus souvent par :', options: ['que', 'mais', 'donc', 'ici'], correct: 0, exp: 'La conjonction « que » introduit le discours indirect.' }
    ]
  }]);

  add('3eme', 'Histoire', [{
    id: 'm3-hist-seconde-guerre', titre: 'La Seconde Guerre mondiale et le Cameroun', duree: '35 min',
    contenu: `
      <div class="definition"><b>Seconde Guerre mondiale (1939-1945) :</b> conflit mondial opposant les Alliés (dont la France libre) aux puissances de l'Axe (Allemagne, Italie, Japon).</div>
      <p>Lorsque la guerre éclate en 1939, le Cameroun est sous mandat français. En <b>1940</b>, le Cameroun français se rallie à la France libre du général de Gaulle, alors que la France métropolitaine est occupée.</p>
      <p>Pendant la guerre, le territoire fournit des hommes, des ressources et des produits agricoles à l'effort de guerre. Des Camerounais combattent en Europe et en Afrique, et les populations supportent des réquisitions et des travaux forcés.</p>
      <p><b>Les conséquences :</b> l'après-guerre voit grandir les revendications d'égalité et d'autonomie. Elles conduisent, plus tard, à la décolonisation et à l'indépendance.</p>
      <div class="exemple"><b>Exemple :</b> le soutien camerounais à la France libre, puis les revendications des anciens combattants après la guerre, montrent que la période de guerre prépare le chemin vers l'indépendance.</div>
      <div class="astuce">💡 Retiens le lien : guerre → soutien et sacrifices des colonies → revendications → décolonisation.</div>`,
    exercices: [
      { q: 'En quelle année commence la Seconde Guerre mondiale ?', r: '<b>En 1939</b>.' },
      { q: 'En 1940, le Cameroun français se rallie à quel mouvement ?', r: 'À la <b>France libre</b> du général de Gaulle.' },
      { q: 'Cite une conséquence de la guerre pour les colonies.', r: 'Les revendications d\'égalité et d\'autonomie, qui mènent à la décolonisation (ou : les réquisitions et travaux forcés).' }
    ],
    qcm: [
      { q: 'La Seconde Guerre mondiale commence en :', options: ['1914', '1939', '1945', '1960'], correct: 1, exp: 'Elle débute en 1939.' },
      { q: 'La France libre est dirigée par :', options: ['Pétain', 'de Gaulle', 'Hitler', 'Ahidjo'], correct: 1, exp: 'Le général de Gaulle dirige la France libre.' },
      { q: 'La Seconde Guerre mondiale se termine en :', options: ['1918', '1939', '1945', '1960'], correct: 2, exp: 'Elle prend fin en 1945.' },
      { q: 'Pendant la guerre, les colonies fournissent surtout :', options: ['des touristes', 'des hommes et des ressources', 'des navires de luxe', 'aucune aide'], correct: 1, exp: 'Elles participent à l\'effort de guerre.' },
      { q: 'Après la guerre, les colonies revendiquent :', options: ['la fin des écoles', 'l\'égalité et l\'autonomie', 'le retour de l\'Allemagne', 'la suppression des villes'], correct: 1, exp: 'Ces revendications annoncent la décolonisation.' }
    ]
  }]);

  add('3eme', 'SVT', [{
    id: 'm3-svt-vih-prevention', titre: 'Le VIH/sida : transmission et prévention', duree: '35 min',
    contenu: `
      <div class="definition"><b>VIH (virus de l'immunodéficience humaine) :</b> virus qui attaque certaines cellules de défense (les lymphocytes CD4). Affaiblissant le système immunitaire, il peut conduire au <b>sida</b>, stade avancé de l'infection.</div>
      <p><b>Modes de transmission :</b> rapports sexuels non protégés, sang contaminé (seringues ou objets tranchants partagés), et de la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement.</p>
      <p><b>Ce qui ne transmet pas le virus :</b> serrer la main, partager un repas, toucher une personne vivant avec le VIH, ou les piqûres de moustiques.</p>
      <p><b>Prévention :</b> utiliser correctement un préservatif, ne pas partager les objets tranchants, faire le dépistage, et suivre un traitement antirétroviral lorsqu'on est séropositif.</p>
      <div class="exemple"><b>Exemple :</b> une femme séropositive qui suit son traitement pendant la grossesse peut réduire fortement le risque de transmettre le virus à son bébé.</div>
      <div class="astuce">💡 Le dépistage est gratuit et confidentiel dans de nombreux centres de santé ; connaître son statut protège soi-même et les autres.</div>`,
    exercices: [
      { q: 'Quelle cellule de défense le VIH attaque-t-il ?', r: 'Les <b>lymphocytes CD4</b>.' },
      { q: 'Cite deux modes de transmission du VIH.', r: 'Les rapports sexuels non protégés, le sang contaminé (ou la transmission mère-enfant).' },
      { q: 'Cite deux moyens de prévention.', r: 'Le préservatif, le dépistage, ne pas partager les objets tranchants (au choix, deux suffisent).' }
    ],
    qcm: [
      { q: 'Le VIH est :', options: ['une bactérie', 'un virus', 'un champignon', 'un minéral'], correct: 1, exp: 'C\'est un virus.' },
      { q: 'Le VIH se transmet par :', options: ['une poignée de main', 'le partage de seringues', 'un repas partagé', 'une piqûre de moustique'], correct: 1, exp: 'Le sang contaminé transmet le virus.' },
      { q: 'Une bonne prévention consiste à :', options: ['éviter le dépistage', 'utiliser un préservatif', 'partager ses objets tranchants', 'ignorer les risques'], correct: 1, exp: 'Le préservatif protège lors des rapports.' },
      { q: 'Le sida est :', options: ['le début de l\'infection', 'un stade avancé de l\'infection par le VIH', 'une maladie des plantes', 'une vaccination'], correct: 1, exp: 'Le sida est le stade avancé de l\'infection.' },
      { q: 'Serrer la main d\'une personne vivant avec le VIH :', options: ['transmet le virus', 'ne transmet pas le virus', 'est dangereux', 'est interdit'], correct: 1, exp: 'Le VIH ne se transmet pas par contact ordinaire.' }
    ]
  }]);

  add('3eme', 'Anglais', [{
    id: 'm3-en-future', titre: 'Le futur : will et going to', duree: '30 min',
    contenu: `
      <div class="definition"><b>Will :</b> décision spontanée, promesse ou prédiction (ex : <i>I will help you.</i>).<br><b>Going to :</b> projet déjà décidé ou prévision fondée sur une situation présente (ex : <i>I am going to travel.</i>).</div>
      <p><b>Négation :</b> <i>will not</i> (<i>won't</i>) ; <i>am / is / are not going to</i>.</p>
      <p><b>Question :</b> <i>Will you come?</i> / <i>Are you going to study tonight?</i></p>
      <div class="exemple"><b>Exemple camerounais :</b> <i>It is raining, so we are going to stay at home.</i> (Il pleut, donc nous allons rester à la maison.) Mais : <i>The phone is ringing. I will answer it.</i> (Le téléphone sonne. Je vais répondre.)</div>
      <div class="astuce">💡 Si la décision est prise avant de parler, utilise <i>going to</i> ; si elle est prise au moment où tu parles, utilise <i>will</i>.</div>`,
    exercices: [
      { q: 'Traduis : « Je vais voyager à Garoua. » (projet déjà décidé)', r: '<i>I am going to travel to Garoua.</i>' },
      { q: 'Traduis : « Je t\'aiderai demain. » (promesse)', r: '<i>I will help you tomorrow.</i>' },
      { q: 'Mets à la forme négative : « She will come. »', r: '<i>She won\'t come.</i>' }
    ],
    qcm: [
      { q: 'Pour une décision prise au moment où l\'on parle, on utilise :', options: ['going to', 'will', 'did', 'has'], correct: 1, exp: 'Will marque une décision spontanée.' },
      { q: 'La forme négative de « will » est :', options: ['will not ou won\'t', 'doesn\'t', 'not will', 'isn\'t'], correct: 0, exp: 'On dit won\'t ou will not.' },
      { q: 'Pour un projet déjà décidé, on utilise :', options: ['will', 'going to', 'would', 'can'], correct: 1, exp: 'Going to marque un projet décidé.' },
      { q: 'Traduis : « Nous allons manger. »', options: ['We will eat.', 'We are going to eat.', 'We eat.', 'We ate.'], correct: 1, exp: 'Un projet proche se dit avec going to.' },
      { q: 'La question correcte est :', options: ['Will you come?', 'You will come?', 'Do you will come?', 'Are you will come?'], correct: 0, exp: 'Will passe devant le sujet pour une question.' }
    ]
  }]);

  add('3eme', 'Physique-Chimie', [{
    id: 'm3-pc-masse-volumique', titre: 'La masse volumique', duree: '35 min',
    contenu: `
      <div class="definition"><b>Masse volumique (ρ) :</b> masse d'un volume de 1 unité de matière. Formule : <b>ρ = m / V</b>, où m est la masse et V le volume.</div>
      <p><b>Unités :</b> g/cm³ ou kg/m³. Pour l'eau pure, ρ ≈ 1 g/cm³ : 1 cm³ d'eau a une masse d'environ 1 g.</p>
      <p><b>Trouver une masse :</b> m = ρ × V. <b>Trouver un volume :</b> V = m / ρ.</p>
      <div class="exemple"><b>Exemple :</b> un morceau de métal de masse 270 g a un volume de 100 cm³. Sa masse volumique est ρ = 270 / 100 = <b>2,7 g/cm³</b>.</div>
      <div class="astuce">💡 Un corps qui a une grande masse volumique est « plus dense » : à volume égal, il est plus lourd.</div>`,
    exercices: [
      { q: 'Un solide a une masse de 270 g et un volume de 100 cm³. Calcule ρ.', r: 'ρ = 270 / 100 = <b>2,7 g/cm³</b>.' },
      { q: 'Quelle est la masse de 200 cm³ d\'eau (ρ = 1 g/cm³) ?', r: 'm = ρ × V = 1 × 200 = <b>200 g</b>.' },
      { q: 'Quel volume occupent 500 g d\'eau ?', r: 'V = m / ρ = 500 / 1 = <b>500 cm³</b>.' }
    ],
    qcm: [
      { q: 'La formule de la masse volumique est :', options: ['ρ = m × V', 'ρ = m / V', 'ρ = V / m', 'ρ = m + V'], correct: 1, exp: 'ρ = m / V.' },
      { q: 'La masse volumique de l\'eau est d\'environ :', options: ['1 g/cm³', '10 g/cm³', '0,1 g/cm³', '100 g/cm³'], correct: 0, exp: 'L\'eau pure a une masse volumique d\'environ 1 g/cm³.' },
      { q: 'Si m = 50 g et V = 25 cm³, alors ρ vaut :', options: ['2 g/cm³', '1250 g/cm³', '0,5 g/cm³', '75 g/cm³'], correct: 0, exp: '50 / 25 = 2 g/cm³.' },
      { q: 'Pour trouver une masse, on calcule :', options: ['m = ρ × V', 'm = ρ / V', 'm = V / ρ', 'm = ρ + V'], correct: 0, exp: 'm = ρ × V.' },
      { q: 'Un corps « dense » a :', options: ['un petit volume seulement', 'une grande masse volumique', 'une masse nulle', 'une température élevée'], correct: 1, exp: 'Une grande masse volumique signifie qu\'il est plus lourd à volume égal.' }
    ]
  }]);

  // Nombre de leçons par matière (3ème) — vérifié à la compilation
})();
