/*    <!---------------------------------------------------/
        CONSIGNE : 
        1. Créer un Formulaire HTML permettant le 
        remplissage d'une Fiche de Contact : Nom, Prénom,
        Email et le Téléphone.
        
        2. Après vérification des informations, vous
        ajouterez le nouveau contact dans un tableau de 
        contacts.
        
        3. Vous afficherez ensuite l'ensemble des contacts
        du tableau sur votre page HTML à la suite de votre
        formulaire. (Vous utiliserez une <table>)
        
        4. BONUS : Utilisation de Notification, Local Storage et Bootstrap.
    \-------------------------------------------------------->
*/

$(function() {

    // -- Déclaration de Variables
    var Contacts = [];

    // -- DECLARATION DES FONCTIONS

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, 
    // mettre à jour le tableau HTML, réintialiser  le formulaire et afficher une notification. 
    function ajouterContact(Contact) {
        Contacts.push(Contact);
        
    }
    
    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0!
    function reinitialisationDuFormulaire(){
        $("#contact")[0].reset();
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts 
    function estCeQunContactEstPresent(Contact) {}

    // -- Vérification de la validité d'un Email
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

/***********************TRAITEMENT DU FORMULAIRE**********************/

$("#contact").on("submit", function(event) {

event.preventDefault(); 

    $('#contact .has-error').removeClass('has-error'); 
    $('#contact .text-danger').remove();
    $('#contact .alert-danger').remove();
    $('#contact .alert-success').remove();

    var nom    = $("#nom"); 
    var prenom = $("#prenom"); 
    var email  = $("#email"); 
    var tel    = $("#tel"); 

    if(nom.val().length == 0){
    nom.parent().addClass("has-error");
    $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
    }

    if(prenom.val().length == ""){
    prenom.parent().addClass("has-error");
    $("<p class='text-danger'>N'oubliez pas de saisir votre prénom</p>").appendTo(prenom.parent());
    }

    if(!validateEmail(email.val())){
    email.parent().addClass("has-error");
    $("<p class='text-danger'>Vérifier votre email</p>").appendTo(email.parent());
    }

    if(tel.val().length == 0 || $.isNumeric(tel.val()) == false){
    tel.parent().addClass('has-error');
    $("<p class='text-danger'>N'oubliez pas de saisir votre tel</p>").appendTo(tel.parent());
    }
    
    if($(this).find('.has-error').length == 0){
        $(this).prepend('<div class="alert alert-success">Votre demande a bien été envoyé ! Nous vous répondrons dans les meilleurs délais.</div>');
        var Contact = {
            "nom"    : nom.val(), 
            "prenom" : prenom.val(), 
            "email"  : email.val(), 
            "tel"    :  tel.val() 
        }
    ajouterContact(Contact);
    console.log(Contacts);    
    reinitialisationDuFormulaire();
    }

    else{
    $(this).prepend('<div class="alert alert-danger">Nous navons pas été en mesure de valider votre demande. Vérifier vos informations.</div>');
    }

});

});