import { readFile } from 'node:fs/promises';

readFile('./dijkstra.txt', { encoding: 'utf8' })
  .then(contents => console.log(contents))
  .catch(error => console.log(error.message));
