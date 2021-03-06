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

		assert.equal(integerN, actual.length);
	});

	it('returns the expected array when integer is even', function() {
		inputArray = [1,2,3,4,5,6];
		integerN = 2;

		expected = [[1,2,3], [4,5,6]];
		actual = chopper.chop(inputArray, integerN);

		assert.deepEqual(expected, actual);
	});

	it('returns the expected array when integer is odd', function() {
		inputArray = [1,2,3,4,5,6];
		integerN = 3;

		expected = [[1,2], [3,4], [5,6]];
		actual = chopper.chop(inputArray, integerN);

		assert.deepEqual(expected, actual);
	})

	it('returns the expected array when there is a remainder', function() {
		inputArray = [1,2,3,4,5];
		integerN = 3;

		expected = [[1,2], [3,4], [5]];
		actual = chopper.chop(inputArray, integerN);

		assert.deepEqual(expected, actual);	
	});

	it('returns an array with empty subArray if integer greater than input array length', function() {
		inputArray = [1,2,3,4,5];
		integerN = 6;

		expected = [[1], [2], [3], [4], [5], []];
		actual = chopper.chop(inputArray, integerN);

		assert.deepEqual(expected, actual);
	});

});