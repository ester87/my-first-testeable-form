var alertController = function() {};

alertController.prototype.showAlert = function(msg) {
	alert(msg);
};

if (typeof exports !== 'undefined')
	exports.alertController = alertController;