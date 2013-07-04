$(function() {
	$('form').submit(function() {
		var v = new validator();
		$(this).children('input[type="text"]').each(function() {
			v.checkInput(this);
		});
	});
});
