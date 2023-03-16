import { writeFile } from 'node:fs';

const data = `${process.argv.splice(2)} \n`;
writeFile('note.txt', data, err => {
  if (err) throw err;
});
