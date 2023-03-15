import takeAChance from './take-a-chance.js';

const promi = takeAChance('Lamberto').then(resolve => {
  console.log(resolve);
}).catch(reject => {
  console.log(reject.message);
});
