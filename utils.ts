export async function retry<T>(fn: () => Promise<T>, retries: number = 3, interval: number = 1000): Promise<T> {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt < retries) {
                console.warn(`Attempt ${attempt + 1} failed, retrying in ${interval}ms...`);
                await new Promise(res => setTimeout(res, interval));
            } else {
                console.error('Max retries reached.');
                throw error;
            }
        }
    }
}

export const fetchWithRetry = async (url: string, options?: RequestInit) => {
    return retry(() => fetch(url, options));
};