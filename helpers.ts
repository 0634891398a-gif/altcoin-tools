import * as fs from 'fs';
import * as path from 'path';
import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';

const logDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = new (transports.DailyRotateFile)({
    filename: path.join(logDir, '%DATE%-results.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'info'
});

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        transport,
        new transports.Console({
            format: format.simple()
        })
    ]
});

export default logger;
