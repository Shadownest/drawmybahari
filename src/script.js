function changeSize(size)
{
	if (size < 81)
	{
		$('.circle').css('height', size);
		$('.circle').css('width', size);
		$('.circle').css('margin', (80 - size) / 2);
		$('canvas').trigger('size', size);
	}
}
function changeColor(source)
{
	color = source.toRgb();
	var rgba = color.r+','+color.g+','+color.b+','+color.a;
	$('#color').css('background-color', 'rgba('+rgba+')');
	$('.circle').css('background-color', 'rgba('+rgba+')');
	$('canvas').trigger('color', rgba);
}
function draw(x1, x2, y1, y2, size, rgba)
{
	ctx.strokeStyle = 'rgba('+rgba+')';
	ctx.fillStyle = 'rgba('+rgba+')';
	ctx.lineWidth = size;
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
	ctx.closePath();
}
$('document').ready(function()
{
	$("#color").spectrum({
		color: "#000",
		showAlpha: true,
		change: changeColor
	}).css('background-color', '#000');
	var height = $('.wrapper').height();
	$('#mon_canvas').attr('height', height);
	$('#mon_canvas').attr('width', $('.wrapper').width());
	$('.menu').css('height', height - 60);
	$('#size').on('click', function(){changeSize(parseInt(prompt("Size ? (between 1 and 80)")));});
	changeSize(10);
	$('canvas').on('draw', function(options)
	{
		var rgba = options['r']+','+options['g']+','+options['b']+','+options['a'];
		draw(options['x1'], options['x2'], options['y1'], options['y2'], options['size'], rgba);
	});
});