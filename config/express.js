import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';

import winstonInstance from './winston';
import routes from '../server/routes/index';
import config from './config';
import APIError from '../server/helpers/error';

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/', routes);


// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (!(err instanceof APIError)) {
    if (err.inner && err.inner instanceof APIError) err = err.inner;
    else if (err.name && err.name === 'SequelizeDatabaseError') err = new APIError('DATABASE_ERROR', err);
    else if (err.name && (err.name === 'invalid_client' || err.name === 'invalid_grant'
      || err.name === 'invalid_token')) err = new APIError('UNAUTHORIZED', err);
    else err = new APIError('UNKNOWN_ERROR', err, err.status, err.isPublic);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('NOT_FOUND');
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  winstonInstance.error(`Code ${err.code} - ${err.details} `, err);
  res.status(err.status).json({
    success: false,
    error: {
      code: err.code,
      message: err.message,
      details: config.env === 'development' ? err.details : undefined,
      stack: config.env === 'development' ? err.stack : undefined,
    },
  });
});

export default app;
