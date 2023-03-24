import express from 'express';
import pg from 'pg';

const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {

    let error = {};
    const keyWords = ['name', 'course', 'score'];
    const input = req.body;
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);

    for (const keys of keyWords) {
      if (!input[keys]) {
        error = { error: `please include key word ${keys}` };
        res.status(400).send(error);
        return;
      } else if (score < 0) {
        error = { error: 'please ensure score is a positive number' };
        res.status(400).send(error);
        return;
      } else if (score > 100) {
        error = { error: 'please ensure score is not over 100' };
        res.status(400).send(error);
        return;
      }
    }
    if (isNaN(score)) {
      error = { error: 'please insert a numeric value for score' };
      res.status(400).send(error);
      return;
    }
    const newGrades = await db.query(
          `insert into grades (name, course, score)
          values ($1, $2, $3)
          returning *`
          ,
          [name, course, score]
    );
    res.status(201).json(newGrades.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {

    let error = {};
    const keyWords = ['name', 'course', 'score'];
    const input = req.body;
    const name = req.body.name;
    const course = req.body.course;
    const score = Number(req.body.score);
    const gradeId = Number(req.params.gradeId);

    for (const keys of keyWords) {
      if (!input[keys]) {
        error = { error: `please include key word ${keys}}` };
        res.status(400).send(error);
        return;
      } else if (score < 0) {
        error = { error: 'please ensure score is a positive number' };
        res.status(400).send(error);
        return;
      } else if (score > 100) {
        error = { error: 'please ensure score is not over 100' };
        res.status(400).send(error);
        return;
      } else if (isNaN(score)) {
        error = { error: 'please insert a numeric value for score' };
        res.status(400).send(error);
        return;
      }
    }

    if (isNaN(gradeId)) {
      error = { error: 'gradeId must be a numeric value' };
      res.status(400).send(error);
      return;
    }

    const updatedRow = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;

    const params = [name, course, score, gradeId];
    const result = await db.query(updatedRow, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      error = { error: `Cannot find grade with gradeId ${gradeId}` };
      res.status(404).json(error);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    let error = {};
    const gradeId = Number(req.params.gradeId);

    if (isNaN(gradeId)) {
      error = { error: 'gradeId must be a numeric value' };
      res.status(400).send(error);
      return;
    }

    const updatedRow = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *;
    `;

    const params = [gradeId];
    const result = await db.query(updatedRow, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(204).json(grade);
    } else {
      error = { error: `Cannot find grade with gradeId ${gradeId}` };
      res.status(404).json(error);
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('listening to port 8080');
});
