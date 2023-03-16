import { writeFile } from 'node:fs';

const data = `${Math.random()} \n`;
writeFile('random.txt', data, err => {
  if (err) throw err;
});
