        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */


$("#MonFormulaire").on("submit", function(event){

    event.preventDefault();

    $("#MonFormulaire").replaceWith(
        ("<p>Bonjour <strong>" + $("#fullname").val() + "</strong>!</p>") 
      + ("<p>Votre email : " + $("#email").val() + "</p>")
      + ("<p>Votre téléphone : " + $("#tel").val() + "</p>")
      + ("<p>Votre sujet : " + $("#sujet").val() + "</p>")
      + ("<p>Votre message : " + $("#message").val() + "</p>")
      );
});


