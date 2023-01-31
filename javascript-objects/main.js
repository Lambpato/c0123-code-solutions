var student = {
  firstName: 'Lamberto',
  lastName: 'Martinez',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Walmart Overnight Stocking';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Sera',
  year: 1993
};

vehicle['color'] = 'Midnight Blue';
vehicle['isConvertable'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicel["isConvertable"]:', vehicle['isConvertable']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Sabo',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('velue of pet:', pet);
