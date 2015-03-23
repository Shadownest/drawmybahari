function changeSize(size)
{
	if (size < 81)
	{
		$('.circle').css('height', size);
		$('.circle').css('width', size);
		$('.circle').css('margin', (80 - size) / 2);
	}
}
function changeColor(source)
{
	color = source.toRgb();
	var rgba = color.r+','+color.g+','+color.b+','+color.a;
	$('#color').css('background-color', 'rgba('+rgba+')');
	$('.circle').css('background-color', 'rgba('+rgba+')');
}
function draw(x1, x2, y1, y2, size, color)
{
	
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