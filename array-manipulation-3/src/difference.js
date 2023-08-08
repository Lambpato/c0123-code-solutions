/* exported difference */

const difference = (first, second) => {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    }
    newArr.push(first[i]);
  }
  for (let o = 0; o < second.length; o++) {
    if (first.includes(second[o])) {
      continue;
    }
    newArr.push(second[o]);
  }
  return newArr;
};
