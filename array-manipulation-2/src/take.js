/* exported take */

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
    if (count > array.length) {
      newArray = [];
    }
  }
  return newArray;
}
