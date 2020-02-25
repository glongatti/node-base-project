import Joi from 'joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production'])
    .default('development'),
  PORT: Joi.number()
    .default(8080),
  NAME: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_PORT: Joi.number()
    .default('3306'),
  DATABASE_DIALECT: Joi.string()
    .default('mysql'),
  DATABASE_TIMEZONE: Joi.string()
    .default('-03:00'),
  TIMEZONE: Joi.string()
    .default('America/Sao_Paulo'),
  LANGUAGE: Joi.string()
    .default('pt-BR'),
  DEFAULT_CACHE_TTL: Joi.number().default(900),
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.string().default('6379'),
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  name: envVars.NAME,
  timezone: envVars.TIMEZONE,
  language: envVars.LANGUAGE,
  database: {
    host: envVars.DATABASE_HOST,
    database: envVars.DATABASE_NAME,
    username: envVars.DATABASE_USER,
    password: envVars.DATABASE_PASSWORD,
    port: envVars.DATABASE_PORT,
    dialect: envVars.DATABASE_DIALECT,
    pool: {
      max: 50,
      min: 0,
      acquire: 10000,
      idle: 20000,
    },
    timezone: envVars.DATABASE_TIMEZONE,
  },
  defaultTTLcache: envVars.DEFAULT_CACHE_TTL,
  redisHost: envVars.REDIS_HOST,
  redisPort: envVars.REDIS_PORT,
};

export default config;
