import axios, { AxiosError } from 'axios';

async function retryRequest<T>(
    requestFunction: () => Promise<T>,
    retries: number = 3,
    delay: number = 1000
): Promise<T> {
    let lastError: AxiosError | null = null;
    for (let i = 0; i < retries; i++) {
        try {
            return await requestFunction();
        } catch (error) {
            lastError = error as AxiosError;
            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; // Exponential backoff
            }
        }
    }
    throw lastError; // throw the last error if all retries fail
}

async function fetchData(url: string): Promise<any> {
    return retryRequest(async () => {
        const response = await axios.get(url);
        return response.data;
    });
}

export { retryRequest, fetchData };