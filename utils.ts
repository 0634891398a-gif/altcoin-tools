/* 
 * Utility functions for gaming altcoin tools. 
 * Includes functions for calculating rewards and formatting outputs. 
 */

/** 
 * Calculates the reward based on input parameters. 
 * 
 * @param baseReward - The base reward amount. 
 * @param multiplier - The multiplier for the reward. 
 * @param playerLevel - The level of the player, affecting the reward. 
 * @returns The total calculated reward. 
 */
function calculateReward(baseReward: number, multiplier: number, playerLevel: number): number {
    return baseReward * multiplier * (1 + playerLevel / 10);
}

/** 
 * Formats a number to a fixed decimal string. 
 * 
 * @param value - The number to format. 
 * @param decimals - The number of decimal places. 
 * @returns The formatted string representation of the number. 
 */
function formatNumber(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
}

/** 
 * Generates a unique identifier for a player or item. 
 * 
 * @returns A unique string identifier. 
 */
function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export { calculateReward, formatNumber, generateUniqueId };