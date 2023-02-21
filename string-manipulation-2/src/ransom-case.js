/* exported ransomCase */

function ransomCase(string) {
  var ransom = [];
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom.push(string[i].toLowerCase());
    } else if (i % 2 !== 0) {
      ransom.push(string[i].toUpperCase());
    }
  }
  ransom = ransom.toString();
  return ransom.replaceAll(',', '');

}
