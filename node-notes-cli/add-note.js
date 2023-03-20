import { writeFile, readFile } from 'node:fs/promises';

const create = async () => {
  const json = JSON.parse(await readFile('data.json'));
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
};

export default create;
