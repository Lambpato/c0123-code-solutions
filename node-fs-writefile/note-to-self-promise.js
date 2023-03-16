import { writeFile } from 'node:fs/promises';

try {
  const data = `${process.argv.splice(2)} \n`;
  const promise = writeFile('note.txt', data);
  await promise;
} catch (err) {
  console.error(err);
}
