/* exported getWords */

function getWords(string) {
  return string.split(' ').filter(Element => Element);
}

/* use split functon to split on the space then filter() the empty strings  out
*/
