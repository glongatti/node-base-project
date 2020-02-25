import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from '../../config/config';
import { databaseLogger } from '../../config/winston';

const sequelize = new Sequelize({
  ...config.database,
  logging: databaseLogger,
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

const dir = path.join(__dirname, 'models');
fs.readdirSync(dir).forEach((file) => {
  const modelDir = path.join(dir, file);
  try {
    const model = sequelize.import(modelDir);
    db.models[model.name] = model;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    throw err;
  }
});

Object.keys(db.models).forEach((modelName) => {
  try {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    throw err;
  }
});

(async () => {
  try {
    await db.sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Database connection has been established successfully.');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Unable to connect to the database: ${err}`);
  }
})();

module.exports = db;
