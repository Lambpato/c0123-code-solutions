function convertMinutestoSecond(minutes) {
  var seconds = minutes * 60;
  console.log(seconds);
}
convertMinutestoSecond(5);

function greet(name) {
  console.log('Hey,', name);
}

greet('Lamberto');

function getArea(w, h) {
  console.log(w * h);
}

getArea(420, 70);

function getFirstName(person) {
  person = {
    firstName: 'Lamberto',
    lastName: ''
  };

  console.log(person.firstName);
}

getFirstName({ firstName: 'Lamberto', lastName: 'Martinez' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log(lastElement);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
