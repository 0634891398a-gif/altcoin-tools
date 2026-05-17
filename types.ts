export type Player = {
    id: string;
    name: string;
    score: number;
    inventory: InventoryItem[];
};

export type InventoryItem = {
    itemId: string;
    quantity: number;
};

export type GameSession = {
    sessionId: string;
    players: Player[];
    startedAt: Date;
    endedAt?: Date;
};

export type GameConfig = {
    maxPlayers: number;
    duration: number;
    rules: string[];
};

export type GameResult = {
    winner: Player;
    duration: number;
    scores: Record<string, number>;
};
