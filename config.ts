import fs from 'fs';
import path from 'path';

interface Config {
    apiUrl: string;
    retryAttempts: number;
    enableLogging: boolean;
}

const defaultConfig: Config = {
    apiUrl: 'https://api.example.com',
    retryAttempts: 3,
    enableLogging: true,
};

const loadConfig = (configPath: string): Config => {
    try {
        const fullPath = path.resolve(configPath);
        const configFile = fs.readFileSync(fullPath, 'utf8');
        const userConfig = JSON.parse(configFile);
        return { ...defaultConfig, ...userConfig };
    } catch (error) {
        console.error('Failed to load config:', error);
        return defaultConfig;
    }
};

export { loadConfig, defaultConfig };