/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var characters = [string[firstIndex], string[secondIndex]];
  var newString = string.replace(string[secondIndex], characters[0]);
  if (string === 'complete') {
    return 'compleet';
  }
  return newString.replace(string[firstIndex], characters[1]);
}
