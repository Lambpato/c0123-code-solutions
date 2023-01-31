var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('value of colors:', colors);

var students = ['Bishan', 'Brenda', 'Colin', 'Cynthia', 'Devan', 'Evan', 'Henry', 'Justin', 'Kevin', 'Kristian', 'Lamberto', 'Tim'];
var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class');

var lastIndex = students[students.length - 1];
var lastStudent = lastIndex;

console.log('The last student in the array is ' + lastStudent + '.');
console.log('value of students:', students);
