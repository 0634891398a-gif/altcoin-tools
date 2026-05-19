export function calculateWinRate(wins: number, totalGames: number): number {
    if (totalGames === 0) return 0;
    return (wins / totalGames) * 100;
}

export function getRandomElement<T>(array: T[]): T | undefined {
    return array[Math.floor(Math.random() * array.length)];
}

export function formatCurrency(amount: number): string {
    return '$' + amount.toFixed(2);
}

export function generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function isEqual<T>(a: T, b: T): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}