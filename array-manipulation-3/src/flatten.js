/* exported flatten */

const flatten = array => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let o = 0; o < array[i].length; o++) {
        newArray.push(array[i][o]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
