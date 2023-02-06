/* exported compact */

function compact(array) {
  var unwanted = ['', null, false, -0, NaN, 0, undefined];
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!unwanted.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/*
declare the function
declare a an array with the list of conditions
declare an empty variable where the wanted elements will be pushed to
declare a for loop that'll iterate through the array parameter
declare a for loop that'll iterate through the list of unwanted elements
declare an if statement thatll compare both arrays to one another
push the wanted elements to an array
return the good array
*/
