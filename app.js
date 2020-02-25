// config should be imported before importing any other file
import config from './config/config';
import './setup';
import './server/database/database';

import app from './config/express';
import logger from './config/winston';


async function expressConnect() {
  await app.listen(config.port);
  logger.info(`Server started on port ${config.port} (${config.env})`);
}

export async function start() {
  await expressConnect();
}

export default app;
