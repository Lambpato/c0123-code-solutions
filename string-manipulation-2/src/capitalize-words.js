/* exported capitalizeWords */

function capitalizeWords(word) {
  var splitWord = [];
  splitWord = word.split(' ');
  var newWord = [];
  for (var i = 0; i < splitWord.length; i++) {
    newWord.push(splitWord[i][0].toUpperCase() + splitWord[i].slice(1, splitWord[i].length).toLowerCase());
  }
  return newWord.join(' ');
}
