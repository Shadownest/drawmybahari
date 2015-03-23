var io = require('socket.io').listen(5555);

io.sockets.on('connection', function(socket)
{
	socket.emit('connected');
	socket.on('draw', function(draw)
	{
		io.emit('draw',{'c': socket.color,'d': draw});
	});
});