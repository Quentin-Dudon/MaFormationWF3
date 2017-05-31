/* -------------------------------- Disponibilité du DOM ---------------------------------------

A partir de mon DOM, c'est a dire l'ensemble de l'arborescence de ma page est chargée, je peux
commencer à utiliser Jquery.
Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelé AUTOMATIQUEMENT
par Jquery lorsque le DOM sera entièrement défini.

3 Façons de faire : 

*/ 

// 1 -- Possibilité 1
jQuery(document).ready(function(){
    // -- Ici , mon DOM est chargé, je peux procéder à mon code JS.

});

// 2 -- Possibilité 2
$(document).ready(function(){

});

// 3 -- Possibilité 3 
$(function(){
    // -- Je peux désormais accéder à mon code JS.
    alert("Hello World !");

// -- En JS :
document.getElementById("TexteEnJQuery").innerHTML = "Mon Texte en JS";

// -- En Jquery : Les selecteurs sont les mêmes qu'en CSS

$("#TexteEnJQuery").html("Mon Texte en JQuery");

});



