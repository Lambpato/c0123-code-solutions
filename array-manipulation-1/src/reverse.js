/* exported reverse */

function reverse(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

/*
declare function
delcare variable that'll store the reverseved elements
declare for loop taht iterates backwards
push the reversed elements to the reversed array
return the reversed array
*/
