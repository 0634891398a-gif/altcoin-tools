import fs from 'fs';
import path from 'path';
import winston from 'winston';
import { format } from 'winston';

const logDirectory = path.join(__dirname, 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const transport = new (winston.transports.File)({
    filename: path.join(logDirectory, 'application-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        transport,
        new winston.transports.Console({
            format: format.simple(),
        }),
    ],
});

export const logInfo = (message: string) => { logger.info(message); };
export const logError = (message: string) => { logger.error(message); };