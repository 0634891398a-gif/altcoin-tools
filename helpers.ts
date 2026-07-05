// Utility functions for gaming altcoin tools

/**
 * Calculates the total score based on kills, assists, and deaths.
 * @param kills - The number of kills made by the player.
 * @param assists - The number of assists made by the player.
 * @param deaths - The number of times the player died.
 * @returns The total score calculated as (kills * 2 + assists - deaths).
 */
function calculateScore(kills: number, assists: number, deaths: number): number {
    return (kills * 2) + assists - deaths;
}

/**
 * Gets player rank based on score.
 * @param score - The total score of the player.
 * @returns A string representing the player's rank.
 */
function getPlayerRank(score: number): string {
    if (score >= 20) {
        return 'Legend';
    } else if (score >= 10) {
        return 'Hero';
    } else if (score >= 0) {
        return 'Novice';
    } else {
        return 'Unranked';
    }
}

/**
 * Formats the player's game statistics into a readable string.
 * @param playerName - The name of the player.
 * @param kills - The number of kills.
 * @param assists - The number of assists.
 * @param deaths - The number of deaths.
 * @returns A formatted string containing the player's statistics.
 */
function formatStats(playerName: string, kills: number, assists: number, deaths: number): string {
    const score = calculateScore(kills, assists, deaths);
    const rank = getPlayerRank(score);
    return `${playerName}: Kills: ${kills}, Assists: ${assists}, Deaths: ${deaths}, Score: ${score} - Rank: ${rank}`;
}

export { calculateScore, getPlayerRank, formatStats };