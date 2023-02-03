/* exported countdown */

function countdown(number) {
  var count = [];
  while (number >= 0) {
    count.push(number);
    number--;
  }
  return count;
}
