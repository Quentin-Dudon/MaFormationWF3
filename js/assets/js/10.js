/*
var francais = [4 , 8, 10.5];
var math     = [8, 18.5, 11];
var physique = [18, 18, 4];
var anglais  = [13];

var moyenneHL = (francais[0] + math [0] + physique [0])/3;
document.write("<p><strong> 1. Hugo Liegeard : </strong>" + "<ul><li> francais : 4 </li>" +  "<li> math : 8 </li>" +
"<li> physique : 18 </li>" +  "<li><strong> Moyenne Générale : " +  moyenneHL +  "</li></ul></strong></p>");

document.write("<hr>");

var moyenneKI = Math.round((francais[1] + math [1] + physique [1] + anglais [0])/4);
document.write("<p><strong> 2. Karim Ihadadene : </strong>" + "<ul><li> francais : 8</li>" +  "<li> math : 18.5</li>"
 + "<li> physique : 18</li>" + "<li> anglais : 13</li>" + "<li><strong> Moyenne Générale : "
 +  moyenneKI +  "</li></ul></strong></p>");

document.write("<hr>");

var moyenneRH = Math.round((francais[2] + math [2] + physique [2])/4);
document.write("<p><strong> 3. Rudy Hericourt : </strong>" + "<ul><li> francais : 10.5</li>" +  "<li> math : 11</li>"
 + "<li> physique : 4</li>" + "<li><strong> Moyenne Générale : " +  moyenneRH +  "</li></ul></strong></p>");

*/
// CORRECTION
/*

 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li)
de sa moyenne à chaque matière, puis sa moyenne générale. 

*/

// Petite fonction de raccourci pour les flemmards

function w(t){
    document.write(t);
}

function l(e){
    console.log(e);
}

// -- 1. Création de notre tableau 3D en JS!

var PremierTrimestre = [
    {
        "nom"     : "LIEGEARD", 
        "prenom"  : "Hugo", 
        "moyenne" : {
                        "francais"  : 4,
                        "math"      : 8,
                        "physique"  : 18,
                    }
    },
    {
        "nom"     : "MANAS", 
        "prenom"  : "Tanguy", 
        "moyenne" : {
                        "francais"  : 6,
                        "math"      : 15,
                        "physique"  : 9,
                        "anglais"   : 15.5,
                    }
    },
    {
        "nom"     : "ARAUJO", 
        "prenom"  : "Tiago", 
        "moyenne" : {
                        "francais"  : 10,
                        "math"      : 15,
                        "physique"  : 6,
                    }
    },

];

l(PremierTrimestre);

w("<ol>");
// Je souhaite aficher la liste de mes étudiants. 

for(i=0 ; i < PremierTrimestre.length ; i++){

    // -- On récupère l'Objet Etudiant de l'itération
    let Etudiant = PremierTrimestre[i]; 

    // -- Aperçu dans la console
    l(Etudiant);

    // -- Je définis NombreDeMatiere et la SommeDesNotes à 0;
    var NombreDeMatiere = 0, SommesDesNotes = 0;

    // -- Afficher le Prénom et le Nom d'un Etudiant
    w("<li>");
        w(Etudiant.prenom + " " + PremierTrimestre[i].nom);
        // -- Afficher la moyenne de l'étudiant aux différentes matières
        w("<ul>")
            for(let matiere in Etudiant.moyenne){
             // l(matiere)
             // l(Etudiant.moyenne[matiere])
             NombreDeMatiere++;
             SommesDesNotes += Etudiant.moyenne[matiere];
             w("<li>");
                w(matiere + " : " + Etudiant.moyenne[matiere]);
             w("</li>");
            } // -- Fin de la boucle matiere

            w("<li>");
                w("<strong>Moyenne Générale :</strong>" + (Math.round(SommesDesNotes/NombreDeMatiere)));
            w("</li>");

        w("</ul>");
    w("</li>");
} // -- Fin de la boucle pour les étudiants
w("</ol>");

