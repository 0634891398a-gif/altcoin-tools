export function optimizedDataProcessor(data: any[]): any[] {
    const cache = new Map();
    return data.map(item => {
        const key = item.id;
        if (cache.has(key)) {
            return cache.get(key);
        }
        const processedItem = complexCalculation(item);
        cache.set(key, processedItem);
        return processedItem;
    });
}

function complexCalculation(item: any): any {
    // Some CPU-intensive operation
    return {
        ...item,
        processed: true,
        timestamp: Date.now()
    };
}

export function filterRecentItems(data: any[], days: number): any[] {
    const cutoffDate = Date.now() - days * 24 * 60 * 60 * 1000;
    return data.filter(item => item.timestamp > cutoffDate);
}

export function batchProcessItems(items: any[], batchSize: number): any[][] {
    const batches = [];
    for (let i = 0; i < items.length; i += batchSize) {
        batches.push(items.slice(i, i + batchSize));
    }
    return batches;
}
