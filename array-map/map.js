const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const map = (array, transform) => {
  if (transform === 'double') {
    const numbersTime2 = [];
    for (var i = 0; i < array.length; i++) {
      numbersTime2.push(array[i] * 2);
    }
    return numbersTime2;
  } else if (transform === 'prices') {
    const numberToPrice = [];
    for (var l = 0; l < array.length; l++) {
      numberToPrice.push(array[l].toFixed(2));
    }
  }
};
