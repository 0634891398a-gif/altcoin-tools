import fs from 'fs';
import path from 'path';
import winston from 'winston';
import { format } from 'winston';

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const maxSize = '5m'; // max size for log files
const maxFiles = '10'; // max log files to keep

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
            options: { flags: 'a' },
            maxsize: maxSize,
            maxFiles: maxFiles,
        }),
        new winston.transports.File({
            filename: path.join(logDir, 'combined.log'),
            options: { flags: 'a' },
            maxsize: maxSize,
            maxFiles: maxFiles,
        }),
        new winston.transports.Console({
            format: format.simple(),
        }),
    ],
});

export default logger;