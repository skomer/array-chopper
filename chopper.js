var Chopper = function() {}

Chopper.prototype = {

	chop: function(inputArray, integerN) {
		outputArray = [];
		remainder = inputArray.length % integerN;

		if (remainder === 0) {
			quantityInEachSubArray = inputArray.length / integerN;
			subArrays = this.buildSubArrays(inputArray, integerN, quantityInEachSubArray);

			outputArray = subArrays;
		}
		else if (remainder > 0 && remainder < inputArray.length) {
			quantityInRemainderSubArray = Math.round(remainder / 2);
			quantityInEachSubArray = (inputArray.length - quantityInRemainderSubArray) / (integerN - 1);
			subArrays = this.buildSubArrays(inputArray, (integerN - 1), quantityInEachSubArray);

			remainderSubArray = [];
			for (k = quantityInRemainderSubArray; k > 0; k--) {
				desiredIndex = inputArray.length - k;
				remainderSubArray.push(inputArray[desiredIndex]);
			}

			outputArray = subArrays;
			outputArray.push(remainderSubArray);
		} else {
			for (i = 0; i < inputArray.length; i++) {
				subArray = [inputArray[i]];
				outputArray.push(subArray);
			}

			additionalSubArrays = integerN - inputArray.length;

			for (j = 0; j < additionalSubArrays; j++) {
				outputArray.push([]);
			}
		}

		return outputArray;
	},

	buildSubArrays: function(inputArray, noOfSubArrays, lengthOfSubArrays) {
		subArrays = [];

		for (i = 0; i < noOfSubArrays; i++) {
			subArray = [];

			for (j = 0; j < quantityInEachSubArray; j++) {
				desiredIndex = (quantityInEachSubArray * i) + j;
				subArray.push(inputArray[desiredIndex]);
			}

			subArrays.push(subArray);
		}

		return subArrays;
	}
}

module.exports = Chopper;