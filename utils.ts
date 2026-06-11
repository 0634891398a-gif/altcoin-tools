/**
 * Generates a random game item ID.
 * @returns {string} A unique item ID in the format 'ITEM-{number}'.
 */
function generateItemId(): string {
    return `ITEM-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Calculates the player score based on their performance in a game.
 * @param {number} kills - The number of kills the player has.
 * @param {number} deaths - The number of deaths the player has.
 * @param {number} assists - The number of assists the player has.
 * @returns {number} The calculated score.
 */
function calculatePlayerScore(kills: number, deaths: number, assists: number): number {
    return (kills * 3) + (assists * 2) - (deaths * 1);
}

/**
 * Formats a player's name for display in the game.
 * @param {string} name - The player's name.
 * @returns {string} The formatted name.
 */
function formatPlayerName(name: string): string {
    return name.trim().toUpperCase();
}

export { generateItemId, calculatePlayerScore, formatPlayerName };