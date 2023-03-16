import { readFile } from 'node:fs/promises';

const target = process.argv.slice(2);

const result = target.map(x => readFile(x, { encoding: 'utf8' }));

Promise.all(result).then(contents => console.log(contents.toString()))
  .catch(error => console.log(error.message));
