import * as fs from 'fs';
import * as path from 'path';
import { createLogger, transports, format } from 'winston';

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const rotateFileTransport = (filename: string) => {
    return new transports.File({
        filename: path.join(logDir, filename),
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        options: { flags: 'a+' },
    });
};

const logger = createLogger({
    level: 'info',
    transports: [
        // Log to console
        new transports.Console({
            format: format.simple(),
        }),
        // Log to file with rotation
        rotateFileTransport('app.log'),
    ],
});

export default logger;
