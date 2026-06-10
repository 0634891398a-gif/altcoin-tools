import { GameInput } from './types';

const VALID_INPUT_KEYS = ['move', 'attack', 'defend'];

function isValidInput(input: GameInput): boolean {
    return typeof input === 'object' && 
           input !== null && 
           VALID_INPUT_KEYS.includes(input.action) && 
           typeof input.value === 'number';
}

function processGameInputs(inputs: GameInput[]): void {
    inputs.forEach(input => {
        if (!isValidInput(input)) {
            console.error('Invalid input:', input);
            return;
        }
        handleInput(input);
    });
}

function handleInput(input: GameInput): void {
    switch (input.action) {
        case 'move':
            console.log(`Moving to position: ${input.value}`);
            break;
        case 'attack':
            console.log(`Attacking with strength: ${input.value}`);
            break;
        case 'defend':
            console.log(`Defending with power: ${input.value}`);
            break;
    }
}

export { processGameInputs };