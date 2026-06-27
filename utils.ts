type GameData = { id: string; name: string; genre: string; rating: number; };

type FilterCriteria = { genre?: string; minRating?: number; };

function filterGames(games: GameData[], criteria: FilterCriteria): GameData[] {
    return games.filter(game => {
        const genreMatch = criteria.genre ? game.genre === criteria.genre : true;
        const ratingMatch = criteria.minRating ? game.rating >= criteria.minRating : true;
        return genreMatch && ratingMatch;
    });
}

function sortGames(games: GameData[], key: keyof GameData, ascending: boolean = true): GameData[] {
    return games.sort((a, b) => {
        if (a[key] < b[key]) return ascending ? -1 : 1;
        if (a[key] > b[key]) return ascending ? 1 : -1;
        return 0;
    });
}

function uniqueGenres(games: GameData[]): string[] {
    return Array.from(new Set(games.map(game => game.genre)));
}

export { GameData, FilterCriteria, filterGames, sortGames, uniqueGenres };