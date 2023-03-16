import { readFile } from 'node:fs';

readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
