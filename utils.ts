function isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

function handleError(error: Error): void {
    console.error(`Error encountered: ${error.message}`);
}

function safeDivide(a: number, b: number): number | null {
    try {
        if (!isValidNumber(a) || !isValidNumber(b)) {
            throw new Error('Invalid input: Inputs must be numbers.');
        }
        if (b === 0) {
            throw new Error('Division by zero error.');
        }
        return a / b;
    } catch (error) {
        handleError(error);
        return null;
    }
}

function processTransaction(amount: number): void {
    try {
        if (!isValidNumber(amount)) {
            throw new Error('Invalid transaction amount.');
        }
        // Process transaction logic here, e.g., updating balance
        console.log(`Processed transaction of: ${amount}`);
    } catch (error) {
        handleError(error);
    }
}

export { safeDivide, processTransaction };