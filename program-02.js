function repeat(operation, num) {
  if(num > 0) {
	operation()
	return repeat(operation, num - 1)
  } else
	return 
}

module.exports = repeat