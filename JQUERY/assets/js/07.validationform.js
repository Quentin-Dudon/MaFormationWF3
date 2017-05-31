
// -- DECLARATION DE FONCTION
// : https://paulund.co.uk/regular-expression-to-validate-email-address

function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}

// -- Initialisation de jQuery 

$(function(){

    // -- Ecouter à quel moment est soumis mon formulaire. 
    // -- A la soumission de mon formulaire, je vais executer une fonction anonyme. 
    // -- En JS : documentElementById("contact").addEventListener("submit", MaFonctionAExecuter); 

    $("#contact").on("submit", function(event) {
    // -- event : correspond ici à notre évènement "submit"

    // -- Arreter la redirection HTML5
    event.preventDefault(); 

    // -- Suppression des différentes erreurs
    // -- Je cible tout les élements qui contiennent la classe "has-error", puis je supprime ".has-error" pour ces élements. 

    $('#contact .has-error').removeClass('has-error'); 

    // -- Pareil ici

    $('#contact .text-danger').remove();
    $('#contact .alert-danger').remove();

    // -- Déclaration des Variables (Champs à vérifier)
    var nom    = $("#nom"); 
    var prenom = $("#prenom"); 
    var email  = $("#email"); 
    var tel    = $("#tel"); 
    
    // -- Je passe à la vérification de chaque champ...

        // -- 1. Vérification du Nom
        if(nom.val().length == 0){
            nom.parent().addClass("has-error");

        $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());

        }
        // -- 2. Vérification du prenom

        if(prenom.val().length == ""){
            prenom.parent().addClass("has-error");

        $("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());

        }
        // -- 3. Vérification du email

        if(!validateEmail(email.val())){
        email.parent().addClass("has-error");
        $("<p class='text-danger'>Vérifier votre email</p>").appendTo(email.parent());

        }
        // -- 4. Vérification du tel

        if(tel.val().length == 0 || $.isNumeric(tel.val()) == false){
            tel.parent().addClass('has-error');
            $("<p class='text-danger'>N'oubliez pas de saisir votre tel</p>").appendTo(tel.parent());

        }
    
        if($(this).find('.has-error').length == 0){
            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyé ! Nous vous répondrons dans les meilleurs délais.</div>')
        }
        else{
            $(this).prepend('<div class="alert alert-danger">Nous navons pas été en mesure de valider votre demande. Vérifier vos informations.</div>')
        }

    });

}); 