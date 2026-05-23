export async function retryNetworkOperation<T>(operation: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let attempts = 0;
    while (attempts < retries) {
        try {
            return await operation();
        } catch (error) {
            attempts++;
            if (attempts === retries) {
                throw error;
            }
            console.warn(`Attempt ${attempts} failed: ${error.message}. Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    throw new Error('Max retries exceeded');
}

export function networkOperationExample(): Promise<string> {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve('Network operation succeeded!');
            } else {
                reject(new Error('Network operation failed!')); 
            }
        }, 500);
    });
}