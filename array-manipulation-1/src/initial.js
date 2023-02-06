/* exported initial */

function initial(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  var newReveresed = [];
  for (var y = 1; y < reversed.length; y++) {
    newReveresed.push(reversed[y]);
  }
  var newArray = [];
  for (var x = newReveresed.length - 1; x >= 0; x--) {
    newArray.push(newReveresed[x]);
  }
  return newArray;
}

/*
code some over complicated shit
*/
