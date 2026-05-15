type Game = { id: number; name: string; score: number; };

type Player = { id: number; name: string; balance: number; };

const games: Game[] = [];
const players: Player[] = [];

function addGame(game: Game): void {
    games.push(game);
}

function addPlayer(player: Player): void {
    players.push(player);
}

function updateScore(gameId: number, newScore: number): string {
    const game = games.find(g => g.id === gameId);
    if (!game) return 'Game not found';
    game.score = newScore;
    return `Score updated for ${game.name}`;
}

function getPlayerBalance(playerId: number): number | string {
    const player = players.find(p => p.id === playerId);
    return player ? player.balance : 'Player not found';
}

function transferFunds(fromId: number, toId: number, amount: number): string {
    const sender = players.find(p => p.id === fromId);
    const receiver = players.find(p => p.id === toId);
    if (!sender) return 'Sender not found';
    if (!receiver) return 'Receiver not found';
    if (sender.balance < amount) return 'Insufficient funds';
    sender.balance -= amount;
    receiver.balance += amount;
    return `Transferred ${amount} from ${sender.name} to ${receiver.name}`;
}

export { addGame, addPlayer, updateScore, getPlayerBalance, transferFunds };