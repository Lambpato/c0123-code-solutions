import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const param1 = process.argv[2];
const param2 = process.argv[4];

if (process.argv[3] === 'plus') {
  console.log(add(param1, param2));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(param1, param2));
} else if (process.argv[3] === 'over') {
  console.log(divide(param1, param2));
} else if (process.argv[3] === 'times') {
  console.log(multiply(param1, param2));
}
