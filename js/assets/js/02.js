// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray    = new Array; 

// -- Affecter des valeurs à un Tableau Numérique
monTableau[0] = "Hugo";
monTableau[1] = "Tanguy";
monTableau[2] = "Gérladine";

// -- Afficher le contenu de mon Tableau Numérique dans la console.
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[2]); // -- Géraldine
console.log(monTableau); // -- Affiche toutes les données. 

// -- Déclarer et Affecter des Valeurs à un Tableau Numérique 
var NosPrenoms = ["Ymin", "Alex", "Cristian", "Tristan"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un Objet. (Pas de Tableau Associatif en JS)
var Coordonnee = {
    "prenom"   :     "Hugo",
     "nom"     :     "LIEGEARD",
     "age"     :      27
}

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Comment créer et affecter des valeurs à un Tableau 2 Dimensions.
var listeDePrenoms = ["Hugo", "Rodrigue", "Kristie"];
var listeDeNoms    = ["LIEGARD", "NOUEL", "SOUKAI"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaus précédents. 
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher un Nom et un Prénom sur ma Page HTML!
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

/* 

Exercice: Créez un tableau à 2 dimensions appelé "AnnuairedesStagiares" qui contiendra 
toutes les coordoonées pour chaque stagiare. Noms, Prénom, Tel.

*/

var listeDePrenoms = ["Gab", "Chris", "Quent", "Kat", "Joe"]; 
var listeDeNoms    = ["Malherbe", "Defusco", "Dudon", "Mintz", "Pantoliano"];
var listeDeNumeros = ["01567891", "02254875", "03364875", "04125485", "05012471"];

var AnnuaireDesStagiaires = [listeDePrenoms, listeDeNoms, listeDeNumeros]; 
console.log(AnnuaireDesStagiaires); 

document.write(AnnuaireDesStagiaires[0][0]);
document.write(" ");
document.write(AnnuaireDesStagiaires[1][0]);
document.write(" ");
document.write(AnnuaireDesStagiaires[2][0]);

/*
Correction
 */

var AnnuaireDesStagiaires = [
    {"prenom"  :  "Hugo",    "nom" : "LIEGARD",   "tel"  : "0783 97 15 15"},
    {"prenom"  :  "Tanguy",  "nom" : "MANAS",     "tel"  : "xxxx xx xx xx"},
    {"prenom"  :  "Yimin",   "nom" : "Ji",        "tel"  : "xxxx xx xx xx"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0].nom); // LIEGARD
console.log(AnnuaireDesStagiaires[1].nom); // MANAS

var Couleurs = ["Rouge", "Jaune", "Vert"];

// -- Si je souhaite ajouter un élement dans mon tableau.
// -- Je fais appel à la fonction push() qui me renvoie le nombre d'élements de mon tableau.

var nombreElementDansMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementDansMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs élements en début de tableau.

/***************RECUPERER ET SORTIR LE DERNIER ELEMENT****************/

// -- La fonction pop() me permet de supprimer le dernier élement de mon tableau et d'en récupérer
// -- la valeur. 
// -- Je peux accessoirement récupérer cette valeur dans une variable.

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

// -- La même chose est possible avec le premier élement en utilisant la fonction shift();

// -- NB : La fonction splice() vous permet de faire sortir un ou plusieurs de votre tableau.
