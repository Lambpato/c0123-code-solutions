import express from 'express';

import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const json = JSON.parse(await readFile('data.json'));
  try {
    res.status(200).json(Object.values(json.notes));
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const json = JSON.parse(await readFile('data.json'));
  let message = {};
  try {
    if (json.notes[req.params.id]) {
      res.json(json.notes[req.params.id]);
    } else if (req.params.id < 0) {
      message = { error: 'id must be a positive integer' };
      res.status(400).send(message);
    } else if (isNaN(Number(req.params.id))) {
      message = { error: 'id must be a numeric value' };
      res.status(400).send(message);
    } else {
      message = { error: `cannot find not with id ${req.params.id}` };
      res.status(404).send(message);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.post('/api/notes', async (req, res) => {
  const json = JSON.parse(await readFile('data.json'));
  let message = {};
  try {
    if ('content' in req.body) {
      json.notes[json.nextId] = req.body;
      json.notes[json.nextId].id = Number(json.nextId);
      json.nextId++;
      res.status(201).send(req.body);
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
    } else {
      message = { error: 'content is a required field' };
      res.status(400).send(message);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const json = JSON.parse(await readFile('data.json'));
  let message = {};
  try {
    if (json.notes[req.params.id]) {
      delete json.notes[req.params.id];
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
      res.sendStatus(204);
    } else if (req.params.id < 0) {
      message = { error: 'id must be a positive integer' };
      res.status(400).send(message);
    } else if (isNaN(Number(req.params.id))) {
      message = { error: 'id must be a numeric value' };
      res.status(400).send(message);
    } else {
      message = { error: `cannot find not with id ${req.params.id}` };
      res.status(404).send(message);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const json = JSON.parse(await readFile('data.json'));
  let message = {};
  try {
    if (json.notes[req.params.id] && Object.keys(req.body).includes('content')) {
      json.notes[req.params.id] = req.body;
      json.notes[req.params.id].id = Number(req.params.id);
      res.status(201).send(req.body);
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
    } else if (req.params.id < 0) {
      message = { error: 'id must be a positive integer' };
      res.status(400).send(message);
    } else if (isNaN(Number(req.params.id))) {
      message = { error: 'id must be a numeric value' };
      res.status(400).send(message);
    } else if (!json.notes[req.params.id]) {
      message = { error: `cannot find not with id ${req.params.id}` };
      res.status(404).send(message);
    } else {
      message = { error: 'content is a required field' };
      res.status(400).send(message);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
