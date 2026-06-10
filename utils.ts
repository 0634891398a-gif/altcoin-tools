export async function retry<T>(operation: () => Promise<T>, attempts: number, delay: number): Promise<T> {
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            if (i < attempts - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    throw lastError;
}

export function fetchWithRetry(url: string, options: RequestInit, attempts = 3, delay = 1000): Promise<Response> {
    return retry(() => fetch(url, options), attempts, delay);
}