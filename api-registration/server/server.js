/* eslint-disable no-unused-vars -- REMOVE ME */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const cripPass = await argon2.hash(password);
    const newAcc = await db.query(
          `
          insert into "users" ("username", "hashedPassword")
          values ($1, $2)
          returning "userId", "username", "createdAt"
          `,
          [username, cripPass]
    );
    res.status(201).json(newAcc.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
