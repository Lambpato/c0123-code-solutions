import { writeFile, readFile } from 'node:fs/promises';

readFile(process.argv[2], { encoding: 'utf8' })
  .then(contents => writeFile(`${process.argv[3]}`, contents))
  .catch(err => console.error(err));
