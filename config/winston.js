import winston from 'winston';

const fs = require('fs');

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
const getLogger = (level, fileName) => winston.createLogger({
  transports: [
    new winston.transports.File({
      name: '',
      level,
      filename: `./logs/${fileName}.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 10,
      colorize: false,
    }),
  ],
  exitOnError: false,
});
const loggers = {};

export const databaseLogger = (query) => {
  if (!loggers.databaseLogger) {
    loggers.databaseLogger = getLogger('info', 'database');
  }
  loggers.databaseLogger.info(query);
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.errors(),
        winston.format.printf((info) => {
          const {
            timestamp, level, message = '', stack,
          } = info;

          return `${timestamp} ${level}: ${message.trim()} ${stack ? `\n${stack}` : ''}`;
        }),
        winston.format.colorize({ all: true }),
      ),
    }),
  ],
});

export default logger;
