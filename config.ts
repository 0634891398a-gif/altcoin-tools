// Interface for configuration options
interface ConfigOptions {
    settingA?: string;
    settingB?: number;
    settingC?: boolean;
}

// Default configuration values
const defaultConfig: ConfigOptions = {
    settingA: 'defaultA',
    settingB: 10,
    settingC: true
};

// Function to load configuration with defaults
function loadConfig(userConfig: ConfigOptions): ConfigOptions {
    return {...defaultConfig, ...userConfig};
}

// Example of usage: loading user's custom config
const userConfig: ConfigOptions = {
    settingA: 'customA',
};
const finalConfig = loadConfig(userConfig);

console.log(finalConfig); // { settingA: 'customA', settingB: 10, settingC: true }
