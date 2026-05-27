// Import necessary libraries
import { Game } from './types';

/**
 * Fetches the latest game data from the API.
 *
 * @param gameId - The unique identifier for the game.
 * @returns A promise that resolves to the game data.
 */
export async function fetchGameData(gameId: string): Promise<Game> {
    const response = await fetch(`https://api.example.com/games/${gameId}`);
    if (!response.ok) {
        throw new Error(`Error fetching game data: ${response.statusText}`);
    }
    const gameData: Game = await response.json();
    return gameData;
}

/**
 * Calculates the win rate for a given player.
 *
 * @param wins - The number of games won.
 * @param totalGames - The total number of games played.
 * @returns The win rate as a decimal.
 */
export function calculateWinRate(wins: number, totalGames: number): number {
    if (totalGames === 0) return 0;
    return parseFloat((wins / totalGames).toFixed(2));
}

/**
 * Updates the game status based on the current score.
 *
 * @param currentScore - The current score of the game.
 * @returns The updated game status string.
 */
export function updateGameStatus(currentScore: number): string {
    if (currentScore < 0) return 'Invalid score';
    if (currentScore === 0) return 'Game is starting';
    if (currentScore < 50) return 'Early stage';
    if (currentScore < 100) return 'Mid-game';
    return 'Game over';
}