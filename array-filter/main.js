const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = num => {
  if (num % 2 === 0) {
    console.log(num);
  }
};

const overFive = num => {
  if (num > 5) {
    console.log(num);
  }
};

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

const startWithE = names => {
  if (names.startsWith('E')) {
    console.log(names);
  }
};

const haveD = names => {
  if (names.includes('d') || names.includes('D')) {
    console.log(names);
  }
};
