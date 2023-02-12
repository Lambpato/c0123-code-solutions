/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  while (count > 0) {
    newArray.push(array[array.length - count]);
    count--;
    if (count >= array.length) {
      return array;
    }
  }

  return newArray;
}
