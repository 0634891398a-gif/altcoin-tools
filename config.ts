export const CONFIG = {
  MAX_PLAYERS: 100,
  GAME_TIMEOUT: 300,
  SERVER_URL: 'https://api.altcoin-games.com',
  RECONNECT_DELAY: 5000,
  LOG_LEVEL: 'info',
  API_VERSION: 'v1',
};

export const optimizePerformance = (config: typeof CONFIG) => {
  const optimizedConfig = { ...config };

  if (optimizedConfig.MAX_PLAYERS > 50) {
    optimizedConfig.GAME_TIMEOUT = 200;
  }

  return optimizedConfig;
};

const optimizedConfig = optimizePerformance(CONFIG);
console.log('Optimized Configuration:', optimizedConfig);
