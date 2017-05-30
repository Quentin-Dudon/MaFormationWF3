/*
LES EVENEMENTS : 

Les évènements vont me permettre de déclencher une fonction, c'est à dire : une série d'instruction, 
suite à une action de mon utilisateur. 

OBJECTIF : Etre en mesure de capturer ces évènements, afin d'exectuer une fonction. 

Les évènements : MOUSE(Souris)

    click           : au clic sur un élement 
    mousenter       : la souris passe au dessus de la zone qu'occupe un élement
    mouseleave      : la souris sort de cette zone

Les évènements : KEYBOARD (Clavier)

    keydown         : une touche du clavier est enfoncée
    keyup           : une touche est relachée 

Les évènements : WINDOW (Fenêtre)

    scroll          : defilement de la fenêtre 
    resize          : redimensionnement de la fenêtre 

Les évènements : FORM (Formulaire)

    change          : pour les éléments <input>, <select> et <textarea>
    submit          : à l'envoi (soumission) d'un formulaire 

Les évènements : DOCUMENT

    DOMContentLoaded: Executé lorsque le document HTML est complètement chargé, 
                      sans attendre le CSS et les images. 

LES ECOUTEURS D'EVENEMENTS

Pour attacher un évènement à un élément, ou autrement dit, 
pour déclarer un écouter d'évènement qui se chargera de lancer une action, 
c'est-à-dire une fonction pour évènement donné, je vais utiliser la syntaxe suivante: 

*/

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- Je souhaite que mon pararaphe soit rouge au clic de ma souris. 

    // -- 1 : Je défini une fonction chargée d'éxécuter cette action. 
    function changeColorToRed(){
    p.style.color = "red"; 
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction 
    // au déclenchement de l'évènement. 
    p.addEventListener("click", changeColorToRed);

/*
EXERCICE PRATIQUE: 

A l'aide de javascript, créez un champ "input" type text avec un ID unique. 
Affichez ensuite dans une alerte, la saisie de l'utilisateur. 

*/
/*
var input = document.createElement("Input"); 
input.type = "text"; 
input.id   = "Input"; 

document.body.appendChild(input); 


function fuck (){
    var fuck = document.getElementById("Input").value; 
        alert(fuck); 
}

document.addEventListener("click", fuck); 
*/
// CORRECTION


// -- Création d'un champ input
var input = document.createElement("Input"); 

// -- Attribution d'un Attribut
input.setAttribute("type","text"); 

// -- Attribution d'un ID
input.id = "MonInput"; 

// -- Ajout de l'élément dans la page 
document.body.appendChild(input);

// -- Création d'un écouteur
input.addEventListener("change", voirLaSaisieDeMonInput);

function voirLaSaisieDeMonInput(){
    alert(input.value);
}
