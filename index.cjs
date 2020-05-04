'use strict'
module.exports = function randomItemWithNoRepetition(array) {
  var copy = array.slice()
  return function () {
    copy.length < 1 && (copy = array.slice())
    var index = Math.floor(Math.random() * copy.length),
      item = copy[index]
    return copy.splice(index, 1), item
  }
}
