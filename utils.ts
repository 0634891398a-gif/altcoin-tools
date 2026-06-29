export function throttle(fn: Function, wait: number) {
    let lastTime = 0;
    return function(...args: any[]) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            return fn(...args);
        }
    };
}

export function debounce(fn: Function, delay: number) {
    let timeoutId: NodeJS.Timeout | null = null;
    return function(...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

export function memoize(fn: Function) {
    const cache: { [key: string]: any } = {};
    return function(...args: any[]) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

export function batchProcess(items: any[], batchSize: number, processFn: Function) {
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        processFn(batch);
    }
}