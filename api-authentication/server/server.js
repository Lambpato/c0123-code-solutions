/* eslint-disable no-unused-vars -- Remove me */
import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
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
      throw new ClientError(401, 'Invalid login');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }

    const result = await db.query(
         `
    select "userId", "hashedPassword", "username"
    from "users"
    where "username" = $1
    `,
         [username]
    );

    if (!result) {
      throw new ClientError(401, 'invalid login');
    }

    const [user] = result.rows;
    if (!user) { throw new ClientError(401, 'invalid login'); }

    const { userId, hashedPassword } = user;

    if (!await argon2.verify(hashedPassword, password)) {
      throw new ClientError(401, 'Invalid login');
    }

    const payload = { userId, user };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);

    res.status(200).json({ user: payload, token });
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
