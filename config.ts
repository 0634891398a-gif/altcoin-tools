import fs from 'fs';
import path from 'path';

interface Config {
    apiBaseUrl: string;
    port: number;
    enableLogging: boolean;
}

const defaultConfig: Config = {
    apiBaseUrl: 'http://localhost:3000',
    port: 3000,
    enableLogging: true,
};

function loadConfig(configFileName: string): Config {
    const fullPath = path.resolve(__dirname, configFileName);
    let userConfig: Partial<Config> = {};

    if (fs.existsSync(fullPath)) {
        try {
            const rawData = fs.readFileSync(fullPath, 'utf-8');
            userConfig = JSON.parse(rawData);
        } catch (error) {
            console.error('Error parsing config file:', error);
        }
    }

    return { ...defaultConfig, ...userConfig };
}

export default loadConfig;
