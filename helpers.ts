type CustomError = { message: string; code: number; };

function handleError(error: unknown): CustomError {
    if (error instanceof Error) {
        return { message: error.message, code: 500 };
    } else if (typeof error === 'string') {
        return { message: error, code: 400 };
    }
    return { message: 'An unknown error occurred', code: 500 };
}

function safeExecute<T>(fn: () => T): T | CustomError {
    try {
        return fn();
    } catch (error) {
        return handleError(error);
    }
}

function divide(a: number, b: number): number | CustomError {
    if (b === 0) {
        return handleError('Division by zero');
    }
    return a / b;
}

function processInput(input: unknown): string | CustomError {
    if (typeof input !== 'string') {
        return handleError('Input must be a string');
    }
    return input.trim();
}

export { safeExecute, divide, processInput };