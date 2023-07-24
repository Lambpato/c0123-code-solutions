/* exported omit */

function omit(source, keys) {
  const object = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      object[prop] = source[prop];
    }
  }
  return object;
}
