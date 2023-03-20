import Express from 'express';

const app = Express();
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Epress server listening on port 8080');
});
