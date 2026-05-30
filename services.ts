import axios from 'axios';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

async function fetchWithRetry(url: string, options?: object): Promise<any> {
    let attempts = 0;
    while (attempts < MAX_RETRIES) {
        try {
            const response = await axios.get(url, options);
            return response.data;
        } catch (error) {
            attempts += 1;
            if (attempts === MAX_RETRIES) {
                throw new Error(`Failed to fetch after ${MAX_RETRIES} attempts: ${error}`);
            }
            console.warn(`Attempt ${attempts} failed. Retrying in ${RETRY_DELAY}ms...`);
            await delay(RETRY_DELAY);
        }
    }
}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export { fetchWithRetry };