/*

LE DOM : 

Le Dom, est une interface de développement en JS pour HTML. Grâce au DOM, 
je vais être en mesure d'accéder/modifier mon HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu HTML!

Chaque page chargée dans mon navigateur à un objet "document".  

*/

// -- Comment puis-faire pour récupérer les différentes informations de ma page HTML? 

/*
document.getElementById()

document.getElementById() : C'est une fonction qui va permettre de récupérer
un élément HTML à partir de son identifiant unique : ID.

*/

var bonjour= document.getElementById("bonjour"); 
console.log(bonjour); 

/*
document.getElementByClassName

document.getElementByClassName() : C'est une fonction qui va permettre de récupérer 
un ou plusieurs éléments (une liste) HTML à partir de leur classe. 

*/

var contenu = document.getElementsByClassName("contenu"); 
console.log(contenu);

// Me renvoi: Un tableau JS avec mes élements HTML, ou encore autrement dit, 
// une collection d'élements HTML. 

/*
document.getElementByTagName

document.getElementByTagName() : C'est une fonction qui va permettre de récupérer 
un ou plusieurs éléments (une liste) HTML à partir de leur * nom de balise *
*/

var span = document.getElementsByTagName("span"); 
console.log(span); 