import { readFile } from 'node:fs/promises';

readFile(process.argv[2], { encoding: 'utf8' })
  .then(contents => console.log(contents))
  .catch(error => console.log(error.message));
