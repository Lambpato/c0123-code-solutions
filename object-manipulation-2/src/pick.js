/* exported pick */

function pick(source, keys) {
  const object = {};
  for (const prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      object[prop] = source[prop];
    }
  }
  return object;
}
