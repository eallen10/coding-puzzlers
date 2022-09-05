import { Solutions } from '../models/Solutions';

function solution(nums: number[]) {
    const leftProducts: number[] = [];
    const rightProducts: number[] = [0, 0, 0, 0];
    const result: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            leftProducts.push(1);
        } else {
            leftProducts.push(leftProducts[i - 1] * nums[i - 1]);
        }
    }

    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) {
            rightProducts[nums.length - 1] = 1;
        } else {
            rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            result.push(rightProducts[0]);
        } else if(i === nums.length - 1) {
            result.push(leftProducts[nums.length - 1]);
        } else {
            result.push(leftProducts[i] * rightProducts[i]);
        }
    }

    return result;
}

export default {
    solution
} as Solutions;