import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const param1 = Number(process.argv[2]);
const param2 = Number(process.argv[4]);
const math = process.argv[3];

if (math === 'plus') {
  console.log('Result:', add(param1, param2));
} else if (math === 'minus') {
  console.log('Result:', subtract(param1, param2));
} else if (math === 'over') {
  console.log('Result:', divide(param1, param2));
} else if (math === 'times') {
  console.log('Result:', multiply(param1, param2));
} else {
  console.log('Error');
}
