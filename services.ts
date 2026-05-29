// Import necessary types and modules
import { Player } from './types';

/**
 * Represents a service that manages player actions.
 * @class
 */
class PlayerService {
    private players: Map<string, Player>;

    /**
     * Creates an instance of PlayerService.
     * Initializes a player map to track players.
     */
    constructor() {
        this.players = new Map<string, Player>();
    }

    /**
     * Registers a new player with their unique ID.
     * @param id - The unique identifier of the player.
     * @param playerData - The data of the player to register.
     * @throws Will throw an error if the player ID already exists.
     */
    registerPlayer(id: string, playerData: Player): void {
        if (this.players.has(id)) {
            throw new Error('Player ID already exists.');
        }
        this.players.set(id, playerData);
    }

    /**
     * Retrieves a player by ID.
     * @param id - The unique identifier of the player.
     * @returns The player object associated with the ID or undefined if not found.
     */
    getPlayer(id: string): Player | undefined {
        return this.players.get(id);
    }

    /**
     * Removes a player by their unique ID.
     * @param id - The unique identifier of the player to remove.
     * @returns True if the player was removed, otherwise false.
     */
    removePlayer(id: string): boolean {
        return this.players.delete(id);
    }
}

export default PlayerService;