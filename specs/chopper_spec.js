var assert = require('assert');
var Chopper = require('../chopper.js');

describe('Chopper', function() {

	var chopper;

	beforeEach(function() {
		chopper = new Chopper();
	});

	it('returns an array of the required length', function() {
		inputArray = [1,2,3,4,5,6];
		integerN = 3;

		actual = chopper.chop(inputArray, integerN);

		assertEqual(integerN, actual.length);
	});


});