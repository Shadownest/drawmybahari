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
function draw(options)
{
	ctx.strokeStyle = 'rgba('+options['rgba']+')';
	ctx.fillStyle = 'rgba('+options['rgba']+')';
	ctx.lineWidth = options['size'];
	ctx.beginPath();
	ctx.moveTo(options['x1'], options['y1']);
	ctx.lineTo(options['x2'], options['y2']);
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
});