/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen():', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty():', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var repeated = '';
  var count = 1;

  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeatedWord:', repeatWord('bruh', 100));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }

}

console.log('logEachCharacter: ', logEachCharacter('bruh'));

function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll [420, 70, 419]:', doubleAll([420, 70, 419]));

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}

var vehicle = {
  make: 'Toyota',
  model: 'Sera',
  year: 1993
};

console.log('getKeys', getKeys(vehicle));

function getValues(object) {
  var values = [];
  for (var prop in object) {
    values.push(object[prop]);
  }
  return values;
}

console.log('getValues', getValues(vehicle));
