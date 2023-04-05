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
      throw new ClientError(400, 'username and password are required fields');
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

    /* your code starts here */

    /* Query the database to find the "userId" and "hashedPassword" for the "username".
     * If no user is found,
     *   throw a 401: 'invalid login' error.
     * If a user is found,
     *   confirm that the password included in the request body matches the "hashedPassword" with `argon2.verify()`
     *   If the password does not match,
     *     throw a 401: 'invalid login' error.
     *   If the password does match,
     *     Create a payload object containing the user's "userId" and "username".
     *     Create a new signed token with `jwt.sign()`, using the payload and your TOKEN_SECRET
     *     Send the client a 200 response containing the payload and the token.
     */
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
    const isMatching = argon2.verify(user.hashedPassword, password);
    const payload = {
      userId: user.userId,
      username
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    isMatching
      ? res.status(200).json({ user: payload, token })
      : res.status(400).send('username or password not found');
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
