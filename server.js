function randomColor()
{
	return {"r": Math.floor((Math.random() * 255) + 1), "g": Math.floor((Math.random() * 255) + 1), "b": Math.floor((Math.random() * 255) + 1)};
}

var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(req, res)
	{
		res.writeHead(200);
		res.end('cc');
	});

var id = 0;

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket)
	{
		socket.color = randomColor();
		socket.id = id++;
		console.log(socket.id + " user");
		socket.emit('message', 'Coucou fdp');
		socket.emit('connected', {"id": socket.id, "color": socket.color});

		socket.on('draw', function(draw)
			{
				socket.broadcast.emit('draw',
					{'id': socket.id,
					'color': socket.color,
					'drawing': draw});
			});
	});

server.listen(1337);