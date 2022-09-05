import { Solutions } from '../models/Solutions';

function trivialSolution(nums: number[]) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return true;
        }
    }
}

function sortingSolution(nums: number[]) {
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) return true;
    }
}

function mapLookBehindSolution(nums: number[]) {
    const currentLedger = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(currentLedger.has(nums[i])) return true;
        currentLedger.set(nums[i], i);
    }
}

export default {
    trivialSolution,
    mapLookBehindSolution,
    sortingSolution
} as Solutions;