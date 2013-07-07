var mocha = require("/usr/local/lib/node_modules/mocha/mocha.js");
var sinon = require("/usr/local/lib/node_modules/sinon/lib/sinon.js");
var chai = require("/usr/local/lib/node_modules/chai/chai.js");
var validator = require("../validator.js").validator;
var alertController = require("../alertController.js").alertController;

suite("validatorTest", function() {
	setup(function() {
		alertInstance = new alertController();
		this.alertControllerMock = sinon.mock(alertInstance);
		this.v = new validator(alertInstance);
	});

	teardown(function() {
		this.alertControllerMock.restore();
	});


	test("test_checkInput_emptyInput_showAlert", function() {
		var expects = this.alertControllerMock.expects("showAlert").once().withArgs("Input can't be empty");

		this.v.checkInput('');

		expects.verify();
	});

	test("test_checkInput_noEmptyInput_notShowAlert", function() {
		var expects = this.alertControllerMock.expects("showAlert").never();

		this.v.checkInput('Input text');

		expects.verify();
	});

	test("test_checkInput_emptyInput_returnFalse", function() {
		var alertControllerStub = sinon.stub(alertInstance, "showAlert");
		
		var result = this.v.checkInput('');

		chai.assert.equal(false, result);

		alertControllerStub.restore();
	});

	test("test_checkInput_emptyInput_returnTrue", function() {
		var alertControllerStub = sinon.stub(alertInstance, "showAlert");
		
		var result = this.v.checkInput('Input text');

		chai.assert.equal(true, result);

		alertControllerStub.restore();
	});
});

