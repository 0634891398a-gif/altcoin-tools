// Utility types for possible errors in our application
export type ErrorCode = 'NOT_FOUND' | 'INVALID_INPUT' | 'UNAUTHORIZED' | 'SERVER_ERROR';

export interface CustomError {
    code: ErrorCode;
    message: string;
}

export function handleError(error: unknown): CustomError {
    if (error instanceof Error) {
        const statusCode = determineStatusCode(error);
        const errorCode = mapStatusCodeToErrorCode(statusCode);
        return {
            code: errorCode,
            message: error.message,
        };
    }
    return {
        code: 'SERVER_ERROR',
        message: 'An unknown error occurred',
    };
}

function determineStatusCode(error: Error): number {
    // Implement logic to determine status code
    if (error.message.includes('not found')) return 404;
    if (error.message.includes('unauthorized')) return 401;
    return 500;
}

function mapStatusCodeToErrorCode(statusCode: number): ErrorCode {
    switch (statusCode) {
        case 404:
            return 'NOT_FOUND';
        case 401:
            return 'UNAUTHORIZED';
        default:
            return 'SERVER_ERROR';
    }
}