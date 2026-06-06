const MAX_RETRIES = 3;
const BACKOFF_MULTIPLIER = 300;

async function fetchWithRetry(url: string, options: RequestInit = {}): Promise<Response> {
    let attempts = 0;
    while (attempts < MAX_RETRIES) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Network error: ${response.status}`);
            }
            return response;
        } catch (error) {
            attempts++;
            if (attempts < MAX_RETRIES) {
                const backoffTime = BACKOFF_MULTIPLIER * Math.pow(2, attempts);
                console.log(`Retrying... Attempt ${attempts}. Waiting ${backoffTime} ms`);
                await new Promise(resolve => setTimeout(resolve, backoffTime));
            } else {
                console.error('Max retry attempts reached', error);
                throw error;
            }
        }
    }
}

export { fetchWithRetry };