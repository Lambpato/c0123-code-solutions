import express from 'express';

const app = express();

const nextId = 1;

const grades = {};

app.get('/api/grades', (req, res, next) => {
  res.json(Object.values(grades));
  next();
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades);
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
