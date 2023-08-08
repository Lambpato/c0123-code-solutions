/* exported union */

const union = (first, second) => {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (let o = 0; o < second.length; o++) {
    if (!newArr.includes(second[o])) {
      newArr.push(second[o]);
    }
  }
  return newArr;
};
