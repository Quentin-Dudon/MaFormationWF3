// alert("Wow! tu es sur ma page web!");

//Deux slash pour faire un commentaire uniligne.

/*

Ici, jepux faire un commentaire sur plusieurs lignes. 

Raccourci: CTRL + / 

ou CTRL + SHIFT + / 

*/

// -- 1 : Déclareer une variable en JS
var Prenom;

// -- 2 : Affecter une Valeur
Prenom = "Hugo";

// -- 3 : Afficher la Valeur de ma Variable dans la console.

console.log(Prenom);

/*----------------------- Les types de variables --------------------*/

console.log(typeof Prenom);

// -- Déclaration d'un Nombre
var Age = 40;

// -- Afficher dans la console
console.log(Age);

// -- Connaitre  son Type
console.log(typeof Age);

/*----------------------- La portée des variables --------------------

Les Variables déclarées directement à la racine du fichier JS sont appelées Variables Globales.

Elles sont disponibles dans l'ensemble de vos documents, y compris dans les fonctions. 

###

Les Variables qui sont déclarées à l'intérieur d'une fonction sont appelées Variables LOCALES.

Depuis ECMA 6, vous pouvez déclarer une varibale dans le mot-clé "let". 

Votre variable sera alors accessible uniquement dans le bloc dans lequel elle est contenu cad déclarée.

Si elle déclarée dans une condition, elle sera disponible uniquement dans le bloc de la condition.  

*/

// -- Les Variables FLOAT 
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX)

var unBooleen = false; // -- true
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les Constantes

/*
    La déclaration CONST permet de créer une constante accessible uniquement dans sa lecture. 
    Sa valeur ne pourra pas être modifié par des réaffectations ultérieures. 
    Une constante ne peut pas être déclarée à nouveau. 

*/

// -- Généralement par convention, les constantes sont en majuscules. 

const HOST = "localhost"; 
const USER = "root";
const PASSWORD = "mysql";

// -- Je ne peux pas faire cela:
// -- USER = "HUGO";
// -- Uncaught TypeError: Assignement to constant variable. 

/*----------------------- La minute INFO --------------------

Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend 
la nouvelle valeur et le nouveau type. 

En Javascript (ECMA Script); les variables sont auto-typées.

Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER je peux utiliser les 
fonction natives de javascript. 

*/

var unNombre = "24"; 
console.log(unNombre);
console.log(typeof unNombre);

// -- La fonction parsINT() pour retrouver un Entier à partir de ma chaine de caractère. 
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je ré-affecte une valeur à ma variable 
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// -- La Fonction parseFloat() permet de retrouver un FLOAT sur la base d'un STRING 
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un Nombre en String avec toString()
var unNombreEnString = 10;
var maChaineDeCaractere = unNombreEnString.toString(); 
console.log(unNombreEnString); 
console.log(typeof unNombreEnString);
console.log(typeof maChaineDeCaractere);
