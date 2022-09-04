import { Solutions } from '../models/Solutions';

function trivialSolution(nums: number[]) {
    let biggestGains = 0;

    for(let i = 0; i < nums.length; i++) {
        let biggestGainsForIndex = 0;

        for(let j = i + 1; j < nums.length; j++) {
            const currentGains = nums[j] - nums[i];
            if(currentGains > biggestGainsForIndex) biggestGainsForIndex = currentGains;
        }

        if(biggestGainsForIndex > biggestGains) biggestGains = biggestGainsForIndex;
    }

    return biggestGains;
}

function onePassSolution(nums: number[]) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < minPrice) {
            minPrice = nums[i];
        } else if(maxProfit < nums[i] - minPrice) {
            maxProfit = nums[i] - minPrice;
        }
    }

    return maxProfit;
}

export default {
    trivialSolution,
    onePassSolution
} as Solutions;