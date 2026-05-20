async function retryOperation<T>(operation: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let lastError;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await operation();
            return result;
        } catch (error) {
            lastError = error;
            console.error(`Attempt ${attempt} failed:`, error);
            if (attempt < retries) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    throw lastError;
}

export { retryOperation };