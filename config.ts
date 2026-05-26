export interface GameConfig {  maxPlayers: number;  gameName: string;  enableChat: boolean;  gameMode: 'casual' | 'competitive';}

export class ConfigValidator {  constructor(private config: GameConfig) {}  validate(): boolean {    if (this.config.maxPlayers < 2 || this.config.maxPlayers > 100) {      throw new Error('maxPlayers must be between 2 and 100');    }
    if (!this.config.gameName || this.config.gameName.length === 0) {      throw new Error('gameName cannot be empty');    }
    if (typeof this.config.enableChat !== 'boolean') {      throw new Error('enableChat must be a boolean');    }
    if (!['casual', 'competitive'].includes(this.config.gameMode)) {      throw new Error('gameMode must be either casual or competitive');    }
    return true;  }}

export const setupGame = (config: GameConfig) => {  const validator = new ConfigValidator(config);  try {    validator.validate();    console.log('Game configuration is valid.');  } catch (error) {    console.error('Configuration error:', error.message);  }}