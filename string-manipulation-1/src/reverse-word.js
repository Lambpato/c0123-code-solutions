/* exported reverseWord */

function reverseWord(word) {
  var reverse = [];
  for (var i = word.length - 1; i >= 0; i--) {
    reverse.push(word[i]);
  }
  reverse = reverse.toString();
  reverse = reverse.replaceAll(',', '');
  return reverse;
}

/*
 declare function
declare new variable named reverse
declare a for loops that itterates backwards
push each reversed letter to the variable reverse
convert array to string
delete the ','
*/
