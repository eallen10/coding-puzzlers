import { Solutions } from '../models/Solutions';

function trivialSolution(nums: number[], target: number) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
}

function mapSolution(nums: number[], target: number) {
    const numsMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        const foundComplimentIndex = numsMap.get(compliment);
        if(foundComplimentIndex && foundComplimentIndex !== i) return [i, foundComplimentIndex];
    }
}

function efficientMapSolution(nums: number[], target: number) {
    const numsMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]; // 7, 2
        const foundComplimentIndex = numsMap.get(compliment); // -, 0
        if(Number.isInteger(foundComplimentIndex)) return [foundComplimentIndex, i];

        numsMap.set(nums[i], i);
    }
}

export default {
    trivialSolution,
    mapSolution,
    efficientMapSolution
} as Solutions;