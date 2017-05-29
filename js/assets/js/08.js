/***************************LES CONDITIONS***********************/

/*
var MajoriteLegaleFR = 18; 

if (16< MajoriteLegaleFR){
    alert("Bienvenu!");
}else {
    alert("Google...");
}
*/

/*
Exercice: 

Créer une fonction permettant de vérifier l'age d'un visiteur (prompt). 
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis. 
*/

/*
function legalage()
{
    var legalage = prompt("What is your age ?", "<saisir votre age>");

    if (18<= legalage){
    alert("Bienvenu!");
    }

    else {
    alert("Google...");
    }
}

legalage();
*/
/*
// 1 -- Déclarer la Majorité Légale

var MajoriteLegaleFR = 18; 

// 2 -- Créer une fonction pour demander son age

function verifierage()
    {
    // -- Demande l'age de mon visiteur puis je le retourne
    return parseInt(prompt("Bonjour, Quel age avez-vous?", "Saisissez votre Age"));
    }    

// 3 -- Une condition pour vérifier si l'age de l'utilisateur est supérieur à la MajoriteLegaleFR
    if(verifierage()>= MajoriteLegaleFR){
    // -- J'affiche un Message de bienvenu
    alert('Bienvenu sur mon site internet pour les majeurs...');
    }
    else {
    // -- J'affiche une Alerte
    alert("Attention! Vous devez être majeur pour accéder à ce site!");

    // -- Je redirige vers Google
    document.location.href = "https://www.google.fr"
    }
*/

/*******************************LES OPERATEURS DE COMPARAISON *********************************/

// -- L'Opérateur de Comparaison "==" signifie : Egale à ...
// Il permet de vérifier que deux variables sont identiques. 

// -- L'Opérateur de Comparaison "===" signifie : Strictement Egale à ...
// Il va comparer la valeur et aussi le type de donnée. 

// -- L'Opérateur de Comparaison "!=" signifie : Différent de ...

// -- L'Opérateur de Comparaison "!==" signifie : Strictement Différent de ...

/*
Exercice: 

J'arrive sur un Espace sécurisé au moyen d'un email et d'un mot de passe. 
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site. 
En cas d'échec une alerte m'informe du problème. 
Si tous se passe bien, un message de bienvenue m'acceuille. 
*/

// -- BASE DE DONNEES
/*
// -- Mon exercice

var email, mdp; 

email = "wf3@h1-media.fr"; 
mdp   = "wf3"; 

function securite ()
{
    var email = prompt("Quel est votre email", "<saisissez votre email>");
    if (email === "wf3@h1-media.fr"){
    alert('Bienvenu');
}
    else {
    alert("Mauvais email");
    return;
}
    var mdp = prompt("Quel est votre mdp", "<saisissez votre mdp>");
    if (mdp === "wf3"){
    alert('Bienvenu');
}
    else {
    alert("Mauvais mdp");
}
}

securite();
*/

// -- Correction: 

var email, mdp; 

email = "wf3@h1-media.fr"; 
mdp   = "wf3"; 

// 1 -- Demander son Email à l'utilisateur avec un prompt
var emaillogin = prompt("Bonjour, Quel est votre email?","<Saisissez votre email>"); 

// 2 -- Je vérifie si l'email saisie (emaillogin) correspond à celui en BDD (email)
if(emaillogin === email)
{

    // 2a. Si tout est ok, je continue la vérification avec le mot de passe
    // 2a1. Demande à mon utilisateur son mot de passe via un prompt
    var mdplogin = prompt("votre mot de passe?","<Saisissez votre Mot de Passe>"); 
    if(mdplogin === mdp){
    alert("Bienvenue utilisateur");
    }
    else {
    alert("Attention, mdp incorrect");
    }    
}
    else{
    alert("Attention mauvaise adresse email");
    }

/*******************************LES OPERATEURS DE LOGIQUE *********************************/

// voir cours. 

// -- L'opérateur "!" : qui signifie le CONTRAIRE de, ou encore NOT

var siMonUtilisateurEstApprouve = true; 
if (!siMonUtilisateurEstApprouve) {// Si l'utilisateur n'est pas approuvé.}