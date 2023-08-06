/* exported reverseWords */

function reverseWords(string) {
  const strArr = string.split(' ');
  const reversed = [];
  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    let reversing = '';
    for (let j = word.length - 1; j >= 0; j--) {
      reversing += word[j];
    }
    reversed.push(reversing);
  }
  return reversed.join(' ');
}
