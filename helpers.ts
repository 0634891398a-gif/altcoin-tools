export function safeParseJson<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString) as T;
    } catch (error) {
        console.error('JSON parsing error:', error);
        return null;
    }
}

export function assertDefined<T>(value: T | undefined, message: string): T {
    if (value === undefined) {
        throw new Error(message);
    }
    return value;
}

export function validateNumber(value: any, min: number, max: number): number {
    if (typeof value !== 'number') {
        throw new TypeError(`Expected a number, received ${typeof value}`);
    }
    if (value < min || value > max) {
        throw new RangeError(`Value ${value} out of range (${min}-${max})`);
    }
    return value;
}

export function handleAsyncError<T>(asyncFunc: () => Promise<T>): Promise<T | null> {
    return asyncFunc().catch(error => {
        console.error('Async function error:', error);
        return null;
    });
}

export function retry<T>(func: () => T, retries: number): T | null {
    let attempts = 0;
    while (attempts < retries) {
        try {
            return func();
        } catch (error) {
            attempts++;
            console.warn(`Retrying ${attempts}/${retries} due to error:`, error);
        }
    }
    console.error('Max retries reached');
    return null;
}