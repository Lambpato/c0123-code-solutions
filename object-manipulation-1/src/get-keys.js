/* exported getKeys */

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}
