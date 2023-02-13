/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (var prop in source) {
    if (prop.includes(keys)) {
      newObject.push(source.keys);
    }
  }
  return newObject;
}
