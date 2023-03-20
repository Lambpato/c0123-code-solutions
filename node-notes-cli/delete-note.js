import { readFile, writeFile } from 'node:fs/promises';

const eleminate = async () => {
  const json = JSON.parse(await readFile('data.json'));
  const keys = [];
  for (const prop in json.notes) {
    keys.push(prop);
  }
  const target = keys.filter(num => num === process.argv[3]);
  delete json.notes[target];
  await writeFile('data.json', JSON.stringify(json, null, 2));
};

export default eleminate;
