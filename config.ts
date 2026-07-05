export interface GameConfig {  title: string;  maxPlayers: number;  hasInAppPurchases: boolean;  serverIp: string;}

export class ConfigValidator {  static validate(config: GameConfig): boolean {    if (!config.title || config.title.length < 3) {      console.error('Invalid title: must be at least 3 characters.');      return false;    }
    if (config.maxPlayers < 1 || config.maxPlayers > 100) {      console.error('Invalid maxPlayers: must be between 1 and 100.');      return false;    }
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;    if (!ipPattern.test(config.serverIp)) {      console.error('Invalid server IP format.');      return false;    }
    return true;  }}

const gameConfig: GameConfig = {  title: 'Epic Quest',  maxPlayers: 10,  hasInAppPurchases: true,  serverIp: '192.168.1.1'};

if (ConfigValidator.validate(gameConfig)) {  console.log('Game configuration is valid.');} else {  console.error('Game configuration is invalid.');}