var Chopper = function() {}

Chopper.prototype = {

	chop: function(inputArray, integerN) {

		outputArray = [];

		for(i = 0; i < integerN; i++) {
			outputArray.push(inputArray[i]);
		}


		return outputArray;
	}

}


module.exports = Chopper;