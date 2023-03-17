import { writeFile } from 'node:fs';

const data = `${process.argv[2]} \n`;
writeFile('note.txt', data, err => {
  if (err) throw err;
});
