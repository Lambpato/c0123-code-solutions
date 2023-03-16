import { writeFile } from 'node:fs/promises';

try {
  const data = `${Math.random()} \n`;
  const promise = writeFile('random.txt', data);
  await promise;
} catch (err) {
  console.error(err);
}
