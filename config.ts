import { validateInput } from './utils';

export class GameConfig {
    private gameName: string;
    private maxPlayers: number;
    private gameDuration: number;

    constructor(gameName: string, maxPlayers: number, gameDuration: number) {
        if (!this.validateGameConfig(gameName, maxPlayers, gameDuration)) {
            throw new Error('Invalid game configuration.');
        }
        this.gameName = gameName;
        this.maxPlayers = maxPlayers;
        this.gameDuration = gameDuration;
    }

    private validateGameConfig(gameName: string, maxPlayers: number, gameDuration: number): boolean {
        return validateInput(gameName, maxPlayers, gameDuration);
    }

    public getConfig(): object {
        return { gameName: this.gameName, maxPlayers: this.maxPlayers, gameDuration: this.gameDuration };
    }
}

export const createGame = (gameName: string, maxPlayers: number, gameDuration: number): GameConfig => {
    return new GameConfig(gameName, maxPlayers, gameDuration);
};