/**
 * Generates a random game ID.
 * @returns {string} A unique identifier for the game.
 */
function generateGameId(): string {
    return 'game-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Formats a score for display.
 * @param {number} score - The raw score to format.
 * @returns {string} The formatted score with commas.
 */
function formatScore(score: number): string {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Calculates the win rate based on wins and total matches.
 * @param {number} wins - The number of wins.
 * @param {number} totalMatches - The total number of matches played.
 * @returns {number} The win rate as a percentage.
 */
function calculateWinRate(wins: number, totalMatches: number): number {
    if (totalMatches === 0) return 0;
    return Math.round((wins / totalMatches) * 100);
}

/**
 * Checks if a player qualifies for a bonus.
 * @param {number} score - The player's score.
 * @returns {boolean} True if qualified for a bonus, false otherwise.
 */
function qualifiesForBonus(score: number): boolean {
    return score > 1000;
}

export { generateGameId, formatScore, calculateWinRate, qualifiesForBonus };