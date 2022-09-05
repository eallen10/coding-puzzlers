import { Solutions } from '../models/Solutions';

function solution(input: string) {
    let revString = '';

    for(let i = input.length - 1; i >= 0; i--) {
        revString = revString + input[i];
    }

    return revString;
}

export default {
    solution
} as Solutions;