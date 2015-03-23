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


// function draw(options)
// {
//   ctx.strokeStyle = 'rgba('+options['rgba']+')';
//   ctx.fillStyle = 'rgba('+options['rgba']+')';
//   ctx.lineWidth = options['size'];
//   ctx.beginPath();
//   ctx.moveTo(options['x1'], options['y1']);
//   ctx.lineTo(options['x2'], options['y2']);
//   ctx.stroke();
//   ctx.closePath();
// }

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
var drawingtamp = [];
var isDrawing = false;
var delay = 600;
var socket = io('10.32.195.156:5555');

ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 10;
var x1, x2, y1, y2, color, size;
color = '0,0,0,1';


$('canvas').on('color', function(e, rgba)
{
    ctx.strokeStyle = 'rgba('+rgba+')';
    ctx.fillStyle = 'rgba('+rgba+')';
    color = rgba;
});
$('canvas').on('size', function(e, newsize)
{
    ctx.lineWidth = newsize;
    size = newsize;
});

function sendData(x1, y1, color, size)
{
/**
     * save data to server
     */
    drawingtamp.push({
      x: x1,
      y: y1
    });
}

dom.mousedown(function(event) {
    isDrawing = true;
  	ctx.beginPath();
  	ctx.moveTo(event.pageX, event.pageY);
    x1 = event.pageX;
    y1 = event.pageY;  
});

setInterval(function(){
  /**
   * Send json to socket
   */
  socket.emit('draw', drawingtamp, function() {
    var drawingtamp = [];
  });

}, delay);

dom.mousemove(function(event)
{
  if(isDrawing)
  {
    ctx.lineTo(event.pageX, event.pageY);
    x2 = event.pageX;
    y2 = event.pageY;
    ctx.stroke();
    sendData(x1, x2, y1, y2, color, size);
  }
});

dom.mouseup(function(event)
{
  isDrawing = false;
  ctx.closePath();
});

// function sendData(x1, y1, x2, y2, color, size)
// {
//     console.log(x1, y1, x2, y2, color, size);
// }

