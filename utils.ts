async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) {
                throw error; // Rethrow last error
            }
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

async function fetchWithRetry(url: string): Promise<Response> {
    return await retry(() => fetch(url));
}

export { retry, fetchWithRetry };