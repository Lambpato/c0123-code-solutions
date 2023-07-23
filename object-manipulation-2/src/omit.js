/* exported omit */

function omit(source, keys) {
  let object = {};
  object = source;
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      object[prop] = source[prop];
    }
  }
  return object;
}
