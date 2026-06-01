import { createLogger, format, transports } from 'winston';
import { printf } from 'winston';

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const transportOptions = {
    filename: 'combined.log',
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
};

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        logFormat
    ),
    transports: [
        new transports.File(transportOptions),
        new transports.Console(),
    ],
});

export default logger;