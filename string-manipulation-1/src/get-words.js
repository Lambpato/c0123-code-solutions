/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
