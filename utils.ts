export async function retry<T>(operation: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    try {
        return await operation();
    } catch (error) {
        if (retries > 0) {
            console.warn(`Operation failed, retrying... Attempts left: ${retries}`);
            await new Promise(res => setTimeout(res, delay));
            return retry(operation, retries - 1, delay);
        }
        throw new Error(`Operation failed after ${3 - retries + 1} attempts: ${error.message}`);
    }
}

export async function fetchData(url: string): Promise<any> {
    return retry(async () => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
}
