/* exported isVowel */

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}
/*
declare the function isVowel and asign parameter to char
declare a vowels array
declare a for loop that iterates through that array
declare an if statement thatll compare char to the vowels variable
return true if true
else return false
*/
