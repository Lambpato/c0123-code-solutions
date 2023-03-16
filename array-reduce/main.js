const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const deposit = account.filter(property => property.type.includes('deposit'));
const withdrawal = account.filter(property => property.type.includes('withdrawal'));
const depositTotal = deposit.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
const withdrawalTotal = withdrawal.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
const balance = depositTotal - withdrawalTotal;

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const composite = traits.reduce((composite, currentValue) => Object.assign(composite, currentValue), {});
