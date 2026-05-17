type ApiResponse<T> = {
    data?: T;
    error?: string;
};

// A generic function to handle API responses
function handleApiResponse<T>(response: ApiResponse<T>): T | never {
    if (response.error) {
        throw new Error(`API Error: ${response.error}`);
    }
    if (!response.data) {
        throw new Error('No data returned');
    }
    return response.data;
}

// Function to fetch game data from a mock API
async function fetchGameData(gameId: string): Promise<{ id: string; name: string; } | never> {
    const response: ApiResponse<{ id: string; name: string; }> = await fetch(`https://api.example.com/games/${gameId}`)
        .then(res => res.json());
    return handleApiResponse(response);
}

// Example usage
fetchGameData('12345')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
