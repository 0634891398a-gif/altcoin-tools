function isNumeric(value: any): value is number {
    return !isNaN(value) && typeof value === 'number';
}

function randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function debounce<F extends (...args: any[]) => void>(func: F, delay: number): (...args: Parameters<F>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<F>): void => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

function getRandomElement<T>(array: T[]): T | undefined {
    return array[randomInteger(0, array.length - 1)];
}

export { isNumeric, randomInteger, shuffleArray, debounce, getRandomElement };