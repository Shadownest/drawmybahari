//*****************************************************************************//
//************************************ SCRIPT *********************************//
//*****************************************************************************//
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(400,200);    // Le tracé part du point 50,50
ctx.lineTo(400,600);  // Un segment est ajouté vers 200,200
ctx.moveTo(200,400);   // Puis on saute jusqu'à 200,50
ctx.lineTo(600,400);   // Puis on trace jusqu'à 50,200
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle = "orange"; // Définition de la couleur de remplissage
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();      // Début du chemin
ctx.moveTo(400,200);    // Le tracé part du point 50,50
ctx.lineTo(200,400);  // Un segment est ajouté vers 200,200
ctx.moveTo(400,200);   // Puis on saute jusqu'à 200,50
ctx.lineTo(600,400);   // Puis on trace jusqu'à 50,200
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle = "orange"; // Définition de la couleur de remplissage
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

