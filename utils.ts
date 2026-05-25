function calculatePlayerScore(games: Array<{ score: number, multiplier: number }>): number {
    return games.reduce((total, game) => total + game.score * game.multiplier, 0);
}

function filterHighScorePlayers(players: Array<{ name: string, score: number }>, threshold: number): Array<{ name: string, score: number }> {
    return players.filter(player => player.score > threshold);
}

function sortPlayersByScore(players: Array<{ name: string, score: number }>): Array<{ name: string, score: number }> {
    return players.sort((a, b) => b.score - a.score);
}

export { calculatePlayerScore, filterHighScorePlayers, sortPlayersByScore };