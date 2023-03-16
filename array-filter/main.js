const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const overFive = numbers.filter(num => num > 5);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const startWithE = names.filter(word => word.startsWith('E'));

const haveD = names.filter(word => word.includes('d') || word.includes('D'));
