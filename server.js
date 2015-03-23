var io = require('socket.io').listen(5555);
var Canvas = require('canvas');

io.sockets.on('connection', function(socket)
{
	socket.emit('connected');
	socket.on('draw', function(draw)
	{
		io.emit('draw',{'d': draw});
	});
});