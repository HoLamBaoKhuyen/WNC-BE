import knex from 'knex';
import * as dotenv from 'dotenv';

import config from '../knexfile';

dotenv.config();

const environment = process.env.ENVIRONMENT || 'development';

export default knex(config[environment]);
