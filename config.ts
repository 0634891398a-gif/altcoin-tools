const performanceConfig = {
    // Cache duration in milliseconds
    cacheDuration: 60000,
    // Maximum number of concurrent requests
    maxConcurrentRequests: 5,
    // Enable detailed logging
    enableLogging: false,
    // Request timeout in milliseconds
    requestTimeout: 10000,
};

export const initializePerformanceSettings = () => {
    if (performanceConfig.enableLogging) {
        console.log('Performance settings initialized:', performanceConfig);
    }
};

export const getCacheDuration = () => performanceConfig.cacheDuration;

export const getMaxConcurrentRequests = () => performanceConfig.maxConcurrentRequests;

export const getRequestTimeout = () => performanceConfig.requestTimeout;

export const setLogging = (isEnabled: boolean) => {
    performanceConfig.enableLogging = isEnabled;
};

initializePerformanceSettings();
