import { createLogger, transport, format } from 'winston';
import 'winston-daily-rotate-file';

const transport = new (require('winston-daily-rotate-file'))({
  filename: 'logs/%DATE%-results.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  )
});

const logger = createLogger({
  level: 'info',
  transports: [
    transport
  ]
});

logger.info('Logger initialized with rotation setup.');

export default logger;