import { User, Game } from './types';

export class GameService {
    private users: User[] = [];
    
    constructor() {}
    
    public addUser(user: User): void {
        if (!this.isUserExists(user.id)) {
            this.users.push(user);
        }
    }
    
    public removeUser(userId: string): void {
        this.users = this.users.filter(user => user.id !== userId);
    }
    
    public getUser(userId: string): User | undefined {
        return this.users.find(user => user.id === userId);
    }
    
    public getAllUsers(): User[] {
        return this.users;
    }
    
    private isUserExists(userId: string): boolean {
        return this.users.some(user => user.id === userId);
    }
}

const gameService = new GameService();
export default gameService;
