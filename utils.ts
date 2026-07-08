import * as fs from 'fs';

interface Config {
  apiUrl: string;
  timeout: number;
  retryAttempts: number;
}

typedef DefaultConfig = {
  apiUrl: 'https://api.default.com',
  timeout: 5000,
  retryAttempts: 3,
};

function loadConfig(filePath: string): Config {
  let config: Partial<Config> = {};
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    config = JSON.parse(rawData);
  } catch (error) {
    console.error('Could not read config file, using defaults.', error);
  }
  return { ...DefaultConfig, ...config };
}

export { loadConfig, Config };