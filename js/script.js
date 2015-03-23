//*****************************************************************************//
//************************************ SCRIPT *********************************//
//*****************************************************************************//
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,50);    // Le tracé part du point 50,50
ctx.lineTo(200,200);  // Un segment est ajouté vers 200,200
ctx.moveTo(200,50);   // Puis on saute jusqu'à 200,50
ctx.lineTo(50,200);   // Puis on trace jusqu'à 50,200
ctx.closePath();      // Fermeture du chemin (facultative)