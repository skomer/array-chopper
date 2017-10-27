var Chopper = function() {}

Chopper.prototype = {

	chop: function(inputArray, integerN) {
		outputArray = [];
		remainder = inputArray.length % integerN;

		if (remainder === 0) {
			quantityInEachSubArray = inputArray.length / integerN;

			for (i = 0; i < integerN; i++) {
				subArray = [];

				for (j = 0; j < quantityInEachSubArray; j++) {
					desiredIndex = (quantityInEachSubArray * i) + j;
					subArray.push(inputArray[desiredIndex]);
				}

				outputArray.push(subArray);
			}
		}
		else {
			for(i = 0; i < integerN; i++) {
				outputArray.push(inputArray[i]);
			}
		}

		return outputArray;
	}

}


module.exports = Chopper;