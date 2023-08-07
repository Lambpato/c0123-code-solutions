/* exported unique */

const unique = array => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.includes(array[i]) === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
