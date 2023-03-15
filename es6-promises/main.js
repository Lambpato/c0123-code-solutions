import takeAChance from './take-a-chance.js';

const promi = takeAChance('Lamberto');

promi.then(resolve => {
  console.log(resolve);
});

promi.catch(reject => {
  console.log(reject.message);
});
