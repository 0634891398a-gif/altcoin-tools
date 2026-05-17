import axios from 'axios';
import { GameData, ApiResponse } from './types';

const API_URL = 'https://api.altcoingaming.com/games';

export class GameService {
  private static cache: Map<string, GameData> = new Map();

  public static async fetchGameData(gameId: string): Promise<GameData> {
    if (this.cache.has(gameId)) {
      return this.cache.get(gameId)!;
    }

    const response: ApiResponse = await axios.get(`${API_URL}/${gameId}`);
    const gameData: GameData = response.data;
    this.cache.set(gameId, gameData);

    return gameData;
  }

  public static clearCache(): void {
    this.cache.clear();
  }
}

export const getGameList = async (): Promise<GameData[]> => {
  const response: ApiResponse = await axios.get(API_URL);
  return response.data;
};