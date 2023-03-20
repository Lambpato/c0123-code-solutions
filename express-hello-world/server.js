import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  res.send('FART');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
