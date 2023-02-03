/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var wordly = [];
  for (var i = 0; i < words.length; i++) {
    wordly.push(words[i] + suffix);
  }
  return wordly;
}
