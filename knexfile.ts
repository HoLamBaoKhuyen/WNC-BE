import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_URL, DB_HOST, DB_USER, DB_PASSWORD, DB } = process.env;

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: DB_URL || {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB,
    },
  },
};

export default config;
