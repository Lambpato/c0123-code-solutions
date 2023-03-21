import express from 'express';

const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
