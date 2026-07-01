import fs from 'fs';
import path from 'path';

interface Config {
    dbHost: string;
    dbPort: number;
    apiEndpoint: string;
}

const defaultConfig: Config = {
    dbHost: 'localhost',
    dbPort: 5432,
    apiEndpoint: 'http://localhost:3000/api',
};

const loadConfig = (filePath: string): Config => {
    try {
        const fullPath = path.resolve(filePath);
        const configFile = fs.readFileSync(fullPath, 'utf8');
        const userConfig = JSON.parse(configFile);
        return { ...defaultConfig, ...userConfig };
    } catch (error) {
        console.warn('Could not load config file, using defaults:', error);
        return defaultConfig;
    }
};

export const config = loadConfig('config.json');
