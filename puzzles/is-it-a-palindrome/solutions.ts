import { Solutions } from '../models/Solutions';

function solution(sequence: number[]) {
    for(let i = 0; i < sequence.length; i++) {
        const mirrorIndex = sequence.length - i - 1;
        if(sequence[i] !== sequence[mirrorIndex]) {
            return false;
        } else if(mirrorIndex - i === 1 || mirrorIndex - i === 2) {
            return true;
        }
    }
}

export default { solution } as Solutions;