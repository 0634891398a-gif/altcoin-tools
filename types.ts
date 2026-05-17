/**
 * Represents a player in the game.
 */
interface Player {
    /** Unique identifier for the player */
    id: string;
    /** The player's name */
    name: string;
    /** The current score of the player */
    score: number;
    /** The level the player is currently on */
    level: number;
    /** List of items owned by the player */
    items: Item[];
}

/**
 * Represents an item in the game.
 */
interface Item {
    /** Unique identifier for the item */
    id: string;
    /** The name of the item */
    name: string;
    /** The type of the item (e.g., weapon, armor) */
    type: string;
    /** How much this item boosts the player's stats */
    boost: number;
}

/**
 * Represents a game session.
 */
interface GameSession {
    /** Unique session identifier */
    sessionId: string;
    /** The players involved in this session */
    players: Player[];
    /** The current status of the session */
    status: 'active' | 'completed' | 'pending';
}

/**
 * Represents the configuration for the game.
 */
interface GameConfig {
    /** The maximum number of players allowed */
    maxPlayers: number;
    /** Duration of the game in minutes */
    gameDuration: number;
    /** The initial score for each player */
    initialScore: number;
}