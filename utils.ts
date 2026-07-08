import fs from 'fs';
import path from 'path';
import winston from 'winston';
import { format } from 'winston';

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

const rotateOptions = {
    filename: path.join(logDirectory, 'app-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
};

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new winston.transports.Console({
            format: format.simple(),
        }),
        new winston.transports.File(rotateOptions)
    ],
});

export default logger;
