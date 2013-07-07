var validator = function(alertController) {
	if (typeof alertController == 'undefinded') {
		this.ac = new alertController();
	}
	else {
		this.ac = alertController;
	}
};

validator.prototype.checkInput = function(input) {
	if (input == '') {
		this.ac.showAlert("Input can't be empty");
		return false;
	}
	return true;
}

if (typeof exports !== 'undefined')
	exports.validator = validator;

