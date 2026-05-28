/**
 * Generates a random game id.
 *
 * @returns {string} A unique identifier for the game.
 */
function generateGameId(): string {
    return 'game-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Calculates the score based on player actions.
 *
 * @param {number} baseScore - The initial score to modify.
 * @param {number[]} actions - An array of actions that affect the score.
 * @returns {number} The final calculated score.
 */
function calculateScore(baseScore: number, actions: number[]): number {
    return actions.reduce((score, action) => score + action, baseScore);
}

/**
 * Formats game results into a readable string.
 *
 * @param {string} playerName - The name of the player.
 * @param {number} score - The score achieved by the player.
 * @returns {string} A formatted result string.
 */
function formatGameResult(playerName: string, score: number): string {
    return `${playerName} scored ${score} points!`;
}

export { generateGameId, calculateScore, formatGameResult };