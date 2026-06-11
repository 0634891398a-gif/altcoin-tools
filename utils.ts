import fs from 'fs';
import winston from 'winston';
import { format } from 'winston';
import rotate from 'winston-daily-rotate-file';

const logTransport = new rotate({
  filename: 'logs/%DATE%-results.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  pool: 1000,
  maxSize: '20m',
  maxFiles: '14d',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
});

const logger = winston.createLogger({
  level: 'info',
  transports: [
    logTransport,
    new winston.transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
});

export const logInfo = (message: string) => {
  logger.info(message);
};

export const logError = (message: string) => {
  logger.error(message);
};

export const logDebug = (message: string) => {
  logger.debug(message);
};

export default logger;