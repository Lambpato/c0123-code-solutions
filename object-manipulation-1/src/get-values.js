/* exported getValues */

function getValues(object) {
  var values = [];
  for (var prop in object) {
    values.push(object[prop]);
  }
  return values;
}
