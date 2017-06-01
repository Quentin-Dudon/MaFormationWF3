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
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(Contact) {

        // -- Ajout de "UnContact" dans le tableau "CollectionDeContacts"
        CollectionDeContacts.push(Contact);

        // -- Observez l'ajout des contacts dans la collection
        console.log(CollectionDeContacts);

        // -- On cache la phrase : aucun contact
        $(".aucuncontact").hide();

        // -- Mise à jour du HTML
        $("#LesContacts").find("tbody").append("<tr><td>" + Contact.nom + "</td><td>" + Contact.prenom + "</td><td>" + Contact.email + "</td><td>" + Contact.tel + "</td></tr>");
        reinitialisationDuFormulaire();
    }

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {

        // -- En Javascript 
        // document.getElementById("contact").reset(); 
        // -- En jQuery
        $("#contact").get(0).reset();
    }

    // -- Affichage d'une Notification
    function afficheUneNotification() {
        $(".alert-contact").fadeIn().delay(3000).fadeOut();
    }

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnContact) {

        // -- Booleen qui indique la présence ou pas d'un contact
        var estPresent = false; 

        // -- On parcourt le tableau à la recherche d'un correspodance
        for(var i = 0 ; i < CollectionDeContacts.length ; i ++){

            // -- Vérification pour chaque contact du tableau, s'il y a un correspondance avec mon objet Contact.
            if(UnContact.email === CollectionDeContacts[i].email){

            // -- Si une correspondance est trouvé "estpresent" passe Vrai(true)
            estPresent = true; 

            // -- On, arrête la boucle, plus besoin de poursuivre
            break; 
        }
    }
    // On retourne est présent
    return estPresent;
}

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

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e){

        // -- Voir le contenu de l'événement 
        console.log(e);

        // -- Stopper la redirection de la page 
        e.preventDefault(); 

        // -- Récupération des chamaps à vérifier
        var nom, prenom, email, tel ; 

        nom    = $("#nom"); 
        prenom = $("#prenom"); 
        email  = $("#email"); 
        tel    = $("#tel"); 

        // -- Vérification des informations...
        var mesInformationsSontValides = true;

        // -- Vérification du Nom
        if(nom.val().length == 0){
            mesInformationsSontValides = false; 
        }
         // -- Vérification du Prenom
        if(prenom.val().length == 0){
            mesInformationsSontValides = false; 
        }
         // -- Vérification du Tel
        if(tel.val().length == 0){
            mesInformationsSontValides = false; 
        }
         // -- Vérification du Email
        if(!validateEmail(email.val())){
            mesInformationsSontValides = false; 
        }

        if(mesInformationsSontValides){
            
            // -- Tous est correct, Préparation du contact
            var UnContact = {
                "nom"    : nom.val(),
                "prenom" : prenom.val(),
                "email"  : email.val(),
                "tel"    : tel.val(),            
            };

            // -- Observons dans la console.
            console.log(UnContact); 

            // -- Vérification avec EstCeQunContactEstPresent
            if(!estCeQunContactEstPresent(UnContact)){
                // -- Ajout d'un contact
                ajouterContact(UnContact);
                reinitialisationDuFormulaire();
                afficheUneNotification();
            } else {
                alert("Attention, ce contact est déjà présent");
            }

        } else{
            alert('Attention\Veuillez bien remplir tous les champs.');
        }

    });

 });// -- Fin de jQuery READY !