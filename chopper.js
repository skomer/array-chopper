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
			quantityInRemainderSubArray = Math.round(remainder / 2);
			quantityInEachSubArray = (inputArray.length - quantityInRemainderSubArray) / (integerN - 1);

			for (i = 0; i < (integerN - 1); i++) {
				subArray = [];

				for (j = 0; j < quantityInEachSubArray; j++) {
					desiredIndex = (quantityInEachSubArray * i) + j;
					subArray.push(inputArray[desiredIndex]);
				}

				outputArray.push(subArray);
			}

			remainderSubArray = [];

			for (k = quantityInRemainderSubArray; k > 0; k--) {
				desiredIndex = inputArray.length - k;
				remainderSubArray.push(inputArray[desiredIndex]);
			}

			outputArray.push(remainderSubArray);
		}

		return outputArray;
	}

}


module.exports = Chopper;