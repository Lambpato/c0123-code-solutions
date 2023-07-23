/* exported invert */

function invert(source) {
  const object = {};
  for (const key in source) {
    object[source[key]] = key;
  }
  return object;
}
