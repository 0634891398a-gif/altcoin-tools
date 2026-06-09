export interface GameConfig {
    gameName: string;
    maxPlayers: number;
    initialResources: ResourceConfig;
    rules: GameRules;
}

export interface ResourceConfig {
    gold: number;
    silver: number;
    gems: number;
}

export interface GameRules {
    timeLimit: number;
    pointsToWin: number;
}

export const defaultConfig: GameConfig = {
    gameName: 'CryptoQuest',
    maxPlayers: 10,
    initialResources: {
        gold: 100,
        silver: 50,
        gems: 10
    },
    rules: {
        timeLimit: 3600,
        pointsToWin: 100
    }
};

export function getConfig(): GameConfig {
    return { ...defaultConfig };
}

export function updateConfig(newConfig: Partial<GameConfig>): GameConfig {
    return { ...defaultConfig, ...newConfig };
}
