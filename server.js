function randomColor()
{
	return {"r": Math.floor((Math.random() * 255) + 1),
	"g": Math.floor((Math.random() * 255) + 1),
	"b": Math.floor((Math.random() * 255) + 1),
	"a": Math.floor((Math.random()))};
}

var id = 0;

var io = require('socket.io').listen(1337);

io.sockets.on('connection', function(socket)
	{
		socket.color = randomColor();
		socket.id = id++;
		console.log(socket.id + " user");

		socket.emit('connected', {"id": socket.id, "color": socket.color});

		socket.on('draw', function(draw)
			{
				socket.broadcast.emit('draw',
					{'id': socket.id,
					'color': socket.color,
					'drawing': draw});
			});
	});