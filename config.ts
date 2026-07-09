const config = {
    apiUrl: 'https://api.altcoin-tools.com',
    timeout: 5000,
    retryAttempts: 3,
};

function handleError(error: unknown): string {
    if (error instanceof Error) {
        return `Error: ${error.message}`;
    }
    return 'An unknown error occurred';
}

async function fetchData(endpoint: string): Promise<any> {
    let attempts = 0;
    while (attempts < config.retryAttempts) {
        try {
            const response = await fetch(`${config.apiUrl}/${endpoint}`, { method: 'GET', timeout: config.timeout });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            attempts++;
            const errorMessage = handleError(error);
            console.error(`Attempt ${attempts}: ${errorMessage}`);
            if (attempts >= config.retryAttempts) {
                throw new Error('Max retry attempts reached.');
            }
        }
    }
}

export { fetchData, handleError };