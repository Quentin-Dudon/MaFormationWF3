/* ----------------------------------------- Les selecteurs Jquery -----------------------------------------

Format : $ (selecteur Jquery)
En Jquery, tous les selecteurs Css sont disponibles.
*/

// -- DOM ready !

$(function() {

    function l(e) {
        console.log(e);
    }

    // Je veux selectionner les balises <span> : 
    // En JS :
    l("span en JS:")
    l(document.getElementsByTagName("span"))
    // Version Jquery
    l("span en JQ:")
    l($("span"));

     // Je veux selectionner mon menu : 
    // En JS :
    l("ID via JS:")
    l(document.getElementById("menu"))
    // Version Jquery
    l("ID via Jquery:")
    l($("#menu"))

    // Selectionner une classe
    // En JS :
    l("Classe via JS:")
    l(document.getElementsByClassName("Ma classe"))
    // Version Jquery
    l("Classe via Jquery:")
    l($(".MaClasse"))

    //Selectionner un attribut
    l("Par attribut:")
    l($("[href='http://wwww.google.com']"))

});

