//*****************************************************************************//
//************************************ SCRIPT *********************************//
//*****************************************************************************//
// var c = document.getElementById("mon_canvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();      // Début du chemin
// ctx.moveTo(400,200);    // Le tracé part du point 400,200
// ctx.lineTo(400,600);  // Un segment est ajouté vers 400,600
// ctx.lineTo(200,400);   // Puis on saute jusqu'à 200,400
// ctx.closePath();      // Fermeture du chemin (facultative)
// ctx.fillStyle = "orange"; // Définition de la couleur de remplissage
// ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();

// ctx.beginPath();      // Début du chemin
// ctx.moveTo(400,200);    // Le tracé part du point 400,200
// ctx.lineTo(600,400);  // Un segment est ajouté vers 600,400
// ctx.lineTo(400,600);   // Puis on saute jusqu'à 400,600
// ctx.closePath();      // Fermeture du chemin (facultative)
// ctx.fillStyle = "green"; // Définition de la couleur de remplissage
// ctx.fill();
// ctx.strokeStyle = "black";
// ctx.stroke();
/*
retrouver sur le site de Jquery : 
la fonction quand le clic est appuyé, 
la fonction quand le clic est enfoncé,
la fonction quand le clic est relaché
la fonction qui recupere la position de la souris
*/

var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var dom = $("#mon_canvas");
var isDrawing = false;
ctx.strokeStyle = "black";
var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];
var isFullGay = false;

function debug(type, message)
{
  $("pre#debug").append("[" + type.toUpperCase()  + "] " + message+ "\n");
  $('pre#debug').animate( { scrollTop: $("pre#debug").offset().top }, 750 )
}

$('canvas').on('color', function(e, rgba)
{
  if(isFullGay)
    {
      ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length) + 1];  
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length) + 1];  
    }
    else
    {
      ctx.strokeStyle = 'rgba('+rgba+')';
      ctx.fillStyle = 'rgba('+rgba+')';
    }
  
});

dom.mousedown(function(event) {
    debug("info", "begin drawing");
    isDrawing = true;
  	ctx.beginPath();
  	ctx.moveTo(event.pageX, event.pageY);  
});

dom.mousemove(function(event)
{
  if(isDrawing)
  {
    ctx.lineTo(event.pageX, event.pageY);
    ctx.stroke();
  }
});

dom.mouseup(function(event)
{
  isDrawing = false; 
  debug("info","relache souris");
  ctx.closePath();
});

$("#fullgay").click(function() {
	if(isFullGay)
	{
		debug("info", "Fullgay off");
		isFullGay = false;
		$(this).find("span").html("OFF");
	}
	else
	{
		debug("info", "Fullgay on");
		isFullGay = true;
		$(this).find("span").html("ON");
	}
});