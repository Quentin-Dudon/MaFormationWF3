/*----------------------- Le chainage de méthode en Jquery --------------------------------------                           

 */

$(function() {

    // Je souhaite cacher toutes les divs de ma page HTML
    $("div").hide("slow", function() {

    // Une fois que la méthode hide() est terminée, mon alerte peut s'éxecuter
    alert("Fin du hide");

    //Nb La fonction s'éxécutera pour l'ensemble des élements du sélecteur
    
    // En CSS :
    $("div").css("background","yellow");
    $("div").css("color", "red");

    //Je fais réapparaitre mes divs
    $("div").show();

    }); // -- Fin Fonction Anonyme

    // -- En utilisant le chainage de methode, vous pouvez faire s'enchainer plusieurs
    // fonction les unes après les autres...

    $("p").hide(1000).css("color","blue").css("font-size","20px").delay(2000).show(500); 

    // -- MAIS C'EST ENCORE TROP LONG!!!

    $("p").hide().css({"color":"blue","font-size":"20px"}).delay(2000).show(); 

});

