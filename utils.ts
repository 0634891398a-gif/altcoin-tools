export function parseJson<T>(jsonString: string): T | null {
    try {
        return JSON.parse(jsonString) as T;
    } catch (error) {
        console.error('Invalid JSON string:', jsonString);
        return null;
    }
}

export function safeDivide(numerator: number, denominator: number): number | null {
    if (denominator === 0) {
        console.warn('Division by zero attempted');
        return null;
    }
    return numerator / denominator;
}

export function fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);

        fetch(url, options)
            .then(response => {
                clearTimeout(timer);
                if (!response.ok) {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                }
                resolve(response);
            })
            .catch(error => {
                clearTimeout(timer);
                reject(error);
            });
    });
}

export function validateUserInput(input: string, minLength: number): boolean {
    if (input.trim().length < minLength) {
        console.warn(`Input is too short: ${input}`);
        return false;
    }
    return true;
}