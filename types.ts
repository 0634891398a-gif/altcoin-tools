export interface GameItem {
  id: string;
  name: string;
  type: string;
  attributes: Record<string, any>;
}

export interface Player {
  id: string;
  walletAddress: string;
  inventory: GameItem[];
  level: number;
  experience: number;
}

export type GameState = 'START' | 'IN_PROGRESS' | 'ENDED';

export interface GameSession {
  players: Player[];
  state: GameState;
  currentTurn: number;
  startTime: Date;
  endTime?: Date;
}

export const createPlayer = (id: string, walletAddress: string): Player => ({
  id,
  walletAddress,
  inventory: [],
  level: 1,
  experience: 0,
});

export const addItemToInventory = (player: Player, item: GameItem): Player => {
  const newInventory = [...player.inventory, item];
  return { ...player, inventory: newInventory };
};

export const calculatePlayerLevel = (experience: number): number => {
  return Math.floor(experience / 100); // Level for every 100 experience points
};