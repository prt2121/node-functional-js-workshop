function reduce(arr, fn, initial) {
  function r(i, acc) {
	if(i > arr.length - 1)
	  return acc
	return r(i+1, fn(acc, arr[i], i, arr)) //function(prev, curr, index, arr)
  }
  return r(0, initial)
}

module.exports = reduce

