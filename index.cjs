'use strict';
function randomItemWithNoRepetition(array) {
  if (!Array.isArray(array) || array.length === 0) return -1;
  var copyOfArray = array.slice();
  return function () {
    copyOfArray.length < 1 && (copyOfArray = array.slice());
    var index = Math.floor(Math.random() * copyOfArray.length),
      item = copyOfArray[index];
    return copyOfArray.splice(index, 1), item;
  };
}

module.exports = randomItemWithNoRepetition;
