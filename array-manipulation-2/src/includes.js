/* exported includes */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(value) === i) {
      return true;
    }
  }
  return false;
}
