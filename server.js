var io = require('socket.io').listen(5555);
var id = 0;

io.sockets.on('connection', function(socket)
{
	socket.id = id++;
	io.emit('newDrawer', {'id': socket.id});
	socket.on('draw', function(x1, x2, y1, y2, color, size)
	{
		//console.log(socket.id + " : ", x1, x2, y1, y2, color, size);
		socket.broadcast.emit('draw', x1, x2, y1, y2, color, size);
	});
	socket.on('color',function(color)
	{
		io.emit('color', {'id':socket.id, 'c': color});
	});
	socket.on('size',function(size)
	{
		io.emit('size', {'id':socket.id, 's': size});	
	});
});