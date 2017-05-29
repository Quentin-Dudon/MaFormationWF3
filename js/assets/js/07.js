/*
Votre mission: 

Réaliser une fonction permettant à un  internaute de : 
    - Saisir son Prénom dans un prompt
    - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu? 
    - Saisir son Age
    - Retourner à l'utilsateur : Tu es donc né en [ANNEE DE NAISSANCE]
    - Afficher ensuite un récapitulatif dans la page. 
    Bonjour [PRENOM], tu as [AGE]!

*/

// 1 -- Initialisation des variables 

var AnneeActuelle = new Date();

// 2 -- Création de ma fonction

function Hello(){

    // 2a. -- Je demande à l'utilisateur son Prénom
    let prenom = prompt("Hello ! What is your name ?", "<saisir votre prenom>");
    console.log(prenom);
    console.log(typeof prenom);

    // 2b. -- Je lui demande son age
    let age = parseInt(prompt("Hello " + prenom + " <saisir votre age>"));
    console.log(age);
    console.log(typeof age);

    // 2c. -- J'affiche une alert avec son année de naissance!
    alert("Amazing ! You were born in " + (AnneeActuelle.getFullYear() - age ) + "!");

    // 2d. -- Affichage dans ma page HTML
    document.write("Hello " + prenom + "!" + " It's amazing! You're " + age + " years old!")

}

// 3 -- Execution de ma Fonction 
Hello();
