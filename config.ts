import fs from 'fs';
import path from 'path';

interface Config {
  apiUrl: string;
  port: number;
  debug: boolean;
}

const defaultConfig: Config = {
  apiUrl: 'http://localhost:3000',
  port: 3000,
  debug: false,
};

const loadConfig = (filename: string): Config => {
  const configPath = path.resolve(__dirname, filename);
  if (!fs.existsSync(configPath)) {
    return defaultConfig;
  }
  const fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  return { ...defaultConfig, ...fileConfig };
};

export const config = loadConfig('config.json');
