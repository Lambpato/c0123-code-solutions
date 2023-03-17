import { readFile } from 'node:fs/promises';

const readNote = async () => {
  const json = JSON.parse(await readFile('data.json'));
  if (Object.keys(json.notes).length === 0) {
    console.error('Notes are empty please create a new note');
    process.exit(1);
  } else {
    for (const prop in json.notes) {
      console.log(`${prop}: ${json.notes[prop]}`);
    }
  }

};

export default readNote;
