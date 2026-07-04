// Helper function to generate random in-game currency
export function generateRandomCurrency(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to format in-game currency into a human-readable string
export function formatCurrency(amount: number): string {
    return `💰 ${amount.toFixed(2)}`;
}

// Helper function to decide if a player receives a reward
export function shouldRewardPlayer(probability: number): boolean {
    return Math.random() < probability;
}

// Helper function to calculate experience points after leveling up
export function calculateExperience(points: number, level: number): number {
    return points + (level * 100);
}

// Helper function to determine if an item is mythical based on its rarity
export function isMythicalItem(rarity: string): boolean {
    return rarity.toLowerCase() === 'mythical';
}

// Helper function to generate a unique item ID
export function generateItemId(): string {
    return `item-${Math.random().toString(36).substr(2, 9)}`;
}