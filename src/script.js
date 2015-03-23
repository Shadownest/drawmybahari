$('document').ready(function()
{
	$("#color").spectrum({
		color: "#FFF",
		showAlpha: true,
		change: function(source)
		{
			color = source.toRgb();
			var rgba = color.r+','+color.g+','+color.b+','+color.a;
			$('#color').css('background-color', 'rgba('+rgba+')');
		}
	});
});