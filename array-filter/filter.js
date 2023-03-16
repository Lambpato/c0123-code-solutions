function filter(array, predicate) {
  const filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === predicate) {
      filteredArray.push(array[i]);
    }
  }
  console.log(filteredArray);
}
