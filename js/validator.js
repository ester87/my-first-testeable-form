var validator = function() {};

validator.prototype.checkInput = function(input) {
	if (input.value == '') {
		alert("Input field can not be empty");
	}
}

