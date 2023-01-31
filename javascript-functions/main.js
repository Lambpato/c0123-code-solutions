function convertMinutestoSecond(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutestoSecondsResult = convertMinutestoSecond(5);

console.log(convertMinutestoSecondsResult);

function greet(name) {
  var greeting = 'Hey,' + name;
  return greeting;
}
var greetResult = greet('Lamberto');

console.log(greetResult);

function getArea(w, h) {
  var area = (w * h);
  return area;
}

var areaResult = getArea(420, 70);

console.log(areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return (firstName);
}

var getFirstNameResult = getFirstName({ firstName: 'Lamberto', lastName: 'Martinez' });

console.log(getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log(getLastElementResult);
