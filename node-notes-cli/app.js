import readNote from './read-note.js';
import create from './add-note.js';
import deleteNote from './delete-note.js';
import updateNote from './update-note.js';

const invalid = () => {
  console.error(`${process.argv[2]} is a invalid perator, please use one of the following [read, create, delete, update]`);
  process.exit(1);
};

try {
  switch (process.argv[2]) {
    case 'read': await readNote();
      break;
    case 'create': await create();
      break;
    case 'delete': await deleteNote();
      break;
    case 'update': await updateNote();
      break;
    default: invalid();
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
