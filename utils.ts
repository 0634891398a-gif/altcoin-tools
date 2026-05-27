import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

const logDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, '%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    handleExceptions: true,
    level: 'info',
    maxSize: '20m',
    maxFiles: '14d'
});

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [transport],
    exitOnError: false
});

export default logger;
