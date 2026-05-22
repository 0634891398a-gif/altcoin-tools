/**
 * GameService manages operations related to games.
 */
class GameService {
    private games: Map<string, Game>;

    constructor() {
        this.games = new Map();
    }

    /**
     * Adds a new game to the service.
     * @param gameId - Unique identifier for the game.
     * @param game - Game object to be added.
     */
    addGame(gameId: string, game: Game): void {
        this.games.set(gameId, game);
    }

    /**
     * Retrieves a game by its identifier.
     * @param gameId - Unique identifier for the game.
     * @returns Game | undefined - Returns the game or undefined if not found.
     */
    getGame(gameId: string): Game | undefined {
        return this.games.get(gameId);
    }

    /**
     * Lists all games available in the service.
     * @returns Game[] - Array of all games.
     */
    listGames(): Game[] {
        return Array.from(this.games.values());
    }
}

interface Game {
    name: string;
    genre: string;
    releaseDate: Date;
    developer: string;
}

export default GameService;
