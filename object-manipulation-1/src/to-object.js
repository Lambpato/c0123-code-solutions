/* exported toObject */

function toObject(keyValuePair) {
  var obj = {};
  for (var i = 0; i < keyValuePair.length; i++) {
    obj.push(keyValuePair[i]);
  }
}
