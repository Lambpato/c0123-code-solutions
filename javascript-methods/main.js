var num1 = 420;
var num2 = 70;
var num3 = 419;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

var heroes = ['luffy', 'ace', 'sabo', 'uta'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHeroe = heroes[randomIndex];

console.log('randomHeroe:', randomHeroe);

var library = [
  {
    title: 'One Piece',
    author: 'Eiichiro ods'
  },

  {
    title: 'Jojos Bizzare Adventures',
    author: 'Hirojiko Araki'
  },

  {
    title: 'Sakamoto Days',
    author: 'Yuto Suzuki'
  }

];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libray:', library);

var fullName = 'Lamberto Martinez';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
