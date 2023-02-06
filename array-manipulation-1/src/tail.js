/* exported tail */

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*
declare function
decalare new variable with the new array
loop threw the array but start from the second index
push that to the variable newArray
return array
*/
