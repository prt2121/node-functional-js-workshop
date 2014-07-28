function countWords(inputWords) {
  return inputWords.reduce(function(previousValue, currentValue, index, array) {
		if(currentValue in previousValue) {
			previousValue[currentValue] = previousValue[currentValue] + 1;
			return previousValue;
		} else {
			previousValue[currentValue] = 1;
			return previousValue;
		}
	}, {});
}

module.exports = countWords