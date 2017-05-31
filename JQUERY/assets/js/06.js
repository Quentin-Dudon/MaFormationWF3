/* --------------------- Les Selecteurs d'Enfants en jQuery --------------------------*/

// -- Initialisation du Dom

$(function () {
    // -- ici commence mon code jQuery 
    // -- LesFlemards.js
    function l(e) {
        console.log(e);
    }
    // -- Je souhaite sélectionner toutes mes divs:
    l($("div"));

    // -- Je souhaite sélectionner mon header:
    l($("header"));

    // -- Je souhaite sélectionner tous les élements (descendants direct (enfants)
    // -- qui sont dans "header": 
    l($("header").children());

    // -- Je souhaite parmi mes descendants directs, uniquement les élements "ul"
    l($("header").children("ul"));

    // -- Je souhaite récupérer tous les élements "li" de mon "ul"
    l($("header").children("ul").find("li"));   

    // -- Je souhaite récupérer uniquement le 2ème éléments de mes "li"
    l($("header").find("li").eq(1));

    // -- Je souhaite connaitre le voisin immédiat de mon "header"?
    l($("header").next());
    l($("header").next().next()); // -- Le voisin de mon voisin

    // -- Les Parents
    l($("header").parent());

});