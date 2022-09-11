import { Solutions } from '../models/Solutions';

function trivialSolution(nums: number[]) {
    let maxProduct = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < nums.length; i++) {
        let runningProduct = 1;

        for(let j = i; j < nums.length; j++) {
            runningProduct *= nums[j];
            if(runningProduct > maxProduct) maxProduct = runningProduct;
        }
    }

    return maxProduct;
}

function optimalSolution(nums: number[]) {
    let result = nums[0];
    let maxSoFar = nums[0];
    let minSoFar = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const maxsfTimesCurrent = maxSoFar * nums[i];
        const minsfTimesCurrent = minSoFar * nums[i];

        maxSoFar = Math.max(nums[i], maxsfTimesCurrent, minsfTimesCurrent);
        minSoFar = Math.min(nums[i], maxsfTimesCurrent, minsfTimesCurrent);

        result = Math.max(maxSoFar, result);
    }

    return result;
}

export default {
    trivialSolution,
    optimalSolution
} as Solutions;