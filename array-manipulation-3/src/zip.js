/* exported zip */

const zip = (first, second) => {
  const newArray = [];
  if (first.length <= second.length) {
    for (let i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else {
    for (let o = 0; o < second.length; o++) {
      newArray.push([first[o], second[o]]);
    }
  }
  return newArray;
};
