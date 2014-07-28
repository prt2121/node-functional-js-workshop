function getShortMessages(messages) {
  function isShort(element) {
    return element.message.length < 50;
  }
  return messages.filter(isShort).map(function(element) {
	return element.message;
  });
}

module.exports = getShortMessages