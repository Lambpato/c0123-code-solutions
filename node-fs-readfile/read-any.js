import { readFile } from 'node:fs';

readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
