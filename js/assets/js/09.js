/***********************************LES BOUCLES********************************/

// -- La Boucle FOR

// -- Pour i = 1 ; tant que i <= (strictement inférieur ou égale) 10 ; alors, j'incrémente
for(var i = 1 ; i <= 10 ; i++ ){
    document.write("<p> Instruction executée : <strong>" + i + "</strong></p>");
} 

document.write("<hr>");

// -- La Boucle WHILE : Tant que 

var j = 1;
while(j <= 10){
    document.write("<p> Instruction executée : <strong>" + j + "</strong></p>");
    j++;
}

/*
Exercice: 
*/

// -- Supposons, le tableau suivant: 
var Prenoms = ["Hugo", "Jean", "Matthieu", "Luc", "Pierre", "Marc"]; 

/*
Consigne : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant
dans la console ou sur votre page. 
*/ 

document.write("<hr>");

for(var x = 0 ; x <=Prenoms.length-1 ; x++ ){
     document.write("<p> <strong>" + Prenoms[x] + "</strong></p>");
}

var input =  ()