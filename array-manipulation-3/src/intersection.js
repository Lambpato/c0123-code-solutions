/* exported intersection */

const intersection = (first, second) => {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    for (let o = 0; o < second.length; o++) {
      if (second[o] === first[i]) {
        newArr.push(second[o]);
      }
    }
  }
  return newArr;
};
