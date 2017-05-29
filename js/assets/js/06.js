/*************************************LES FONCTIONS**********************************/

// -- Déclarer une fonction

// -- Cette fonction en retourne aucune valeur
function DitBonjour (){
    // Lors de l'appel de la fonction, les instructions ci-dessous seront exécutées. 
    alert ("Bonjour!");
} 

// -- Je vais appeler ma fonction "DitBonjour" et déclencher ses instructions. 
DitBonjour();

// -- Déclarer une fonction qui prend une variable en paramètre
function Bonjour (Prenom, Nom){
    document.write("<p>Hello <strong>" + Prenom + " " + Nom + "</strong> ! </p>");
}

// -- Appeler / Utiliser une Fonction avec un Paramètre
Bonjour("Quentin","Dudon");

// -- OU

var Prenom = "Yimin";
var Nom    = "Ji";

Bonjour(Prenom, Nom);
Bonjour("Gab", "Malherbe");

/*
Exercice: 
Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.

var nb1 = 1; 
var nb2 = 2; 

function addition(nb1, nb2){
    document.write(nb1 + nb2);
}

addition(nb1, nb2);

*/

/*
Correction
*/

function addition (nb1,nb2){
    // let resultat = nb1 + nb2;
    // -- Le Mot Clé "return" permet de renvoyer une valeur en sortie. 
    return nb1 + nb2; 
}

document.write("<p>" + addition(10, 5) + "</p>");