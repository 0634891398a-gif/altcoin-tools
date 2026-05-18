export function generateRandomItem(items: string[]): string {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

export function calculateWinProbability(wins: number, totalGames: number): number {
    if (totalGames === 0) return 0;
    return parseFloat(((wins / totalGames) * 100).toFixed(2));
}

export function formatCurrency(amount: number, currencySymbol: string = '$'): string {
    return `${currencySymbol}${amount.toFixed(2)}`;
}

export function isValidAddress(address: string): boolean {
    const addressRegex = /^[a-zA-Z0-9]{34}$/;
    return addressRegex.test(address);
}

export function findPlayerById(players: { id: string; name: string }[], id: string) {
    return players.find(player => player.id === id) || null;
}

export function sortItemsAlphabetically(items: string[]): string[] {
    return items.slice().sort();
}

export function calculateCooldown(startTime: number, cooldownPeriod: number): number {
    const currentTime = Date.now();
    const cooldownEndTime = startTime + cooldownPeriod;
    return Math.max(0, cooldownEndTime - currentTime);
}