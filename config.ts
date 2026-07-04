import * as fs from 'fs';
import * as path from 'path';

interface Config {
    apiUrl: string;
    port: number;
    enableLogging: boolean;
}

const defaultConfig: Config = {
    apiUrl: 'https://api.defaultaltcoin.com',
    port: 3000,
    enableLogging: true,
};

const loadConfig = (filePath: string): Config => {
    try {
        const resolvedPath = path.resolve(__dirname, filePath);
        const configFile = fs.readFileSync(resolvedPath, 'utf-8');
        const userConfig: Partial<Config> = JSON.parse(configFile);
        return { ...defaultConfig, ...userConfig };
    } catch (error) {
        console.warn('Could not load config, using defaults.');
        return defaultConfig;
    }
};

const config = loadConfig('./config.json');
export default config;
