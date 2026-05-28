import { isNumeric, isValidGameId } from './utils';

interface GameData {
    id: string;
    score: number;
}

class GameService {
    private games: GameData[] = [];

    public processGameInput(input: any): void {
        if (!this.validateInput(input)) {
            console.error('Invalid input:', input);
            return;
        }
        const game: GameData = { id: input.id, score: input.score };
        this.games.push(game);
        console.log('Game processed:', game);
    }

    private validateInput(input: any): input is GameData {
        return typeof input === 'object' && 
               isValidGameId(input.id) && 
               isNumeric(input.score);
    }
}

const gameService = new GameService();
gameService.processGameInput({ id: 'game123', score: 150 });
gameService.processGameInput({ id: 'invalid-id', score: 100 });

export default gameService;