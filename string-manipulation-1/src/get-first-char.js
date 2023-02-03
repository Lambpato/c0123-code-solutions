/* exported getFirstChar */

function getFirstChar(string) {
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      return string[i];
    }
  }
}

// declare a function names getFirstClass with the parameter of string
// create a for loop that iterates through the length of string
// create a if statement that says if index i is equal to zero it will return i
