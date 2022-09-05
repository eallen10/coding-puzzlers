import { Solutions } from '../models/Solutions';

function trivialSolution(nums: number[]) {
    let result = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++) {
        let totalFromI = 0;

        for(let j = i; j < nums.length; j++) {
            totalFromI += nums[j];
            if(totalFromI > result) result = totalFromI;
        }
    }

    return result;
}

function optimalSolution(nums: number[]) {
    let maxSubArray = Number.NEGATIVE_INFINITY;
    let currentSubarray = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSubarray += nums[i];
        if(currentSubarray < 0) {
            currentSubarray = 0;
        } else if(currentSubarray > maxSubArray) {
            maxSubArray = currentSubarray;
        }
    }

    return maxSubArray;
}

export default {
    trivialSolution,
    optimalSolution
} as Solutions;