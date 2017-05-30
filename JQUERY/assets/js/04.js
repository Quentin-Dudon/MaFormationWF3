/*
 CONSIGNE : Avec l'aide de jQuery, vous devrez : 

        1. A la soumission du formulaire, cacher le formulaire puis :
        2. Créer un élément <p>
        3. Dans cet élément, afficher : Bonjour <nomcomplet> correspondant
           au nom saisi dans le formulaire. 
*/

$("#MonFormulaire").on("submit", function(event){
    // -- Cette fonction anonyme sera executé à la soumission du formulaire

    // -- Permet d'annuler l'action par défaut de submit du formulaire. 
    event.preventDefault();

    // -- On remplace notre formulaire par le paragraphe ci-dessous. 
    $(this).replaceWith("<p>Bonjour " + $("#nomcomplet").val() + "!</p>");
    //console.log($(this)). Ici, $(this) correspond à form#MonFormulaire
});

