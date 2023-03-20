import { writeFile, readFile } from 'node:fs/promises';

const create = async () => {
  const json = JSON.parse(await readFile('data.json'));
  if (process.argv[4] !== undefined) {
    json.notes[process.argv[3]] = process.argv[4];
  } else {
    console.error('Note is empty, please update with a valid note');
    process.exit(1);
  }
  await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
};

export default create;
