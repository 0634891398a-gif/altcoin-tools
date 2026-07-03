import fs from 'fs';
import path from 'path';

interface Config {
    apiUrl: string;
    timeout: number;
    enableLogging: boolean;
}

const defaultConfig: Config = {
    apiUrl: 'https://default.api.com/',
    timeout: 5000,
    enableLogging: false,
};

export function loadConfig(customPath: string): Config {
    const configPath = path.resolve(customPath);
    if (fs.existsSync(configPath)) {
        const configFile = fs.readFileSync(configPath, 'utf-8');
        try {
            const customConfig = JSON.parse(configFile);
            return { ...defaultConfig, ...customConfig };
        } catch (error) {
            console.error('Failed to parse config file:', error);
        }
    }
    return defaultConfig;
}