/* exported getWords */

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

/* use split functon to split on the space
*/
