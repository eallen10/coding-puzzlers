import { Solutions } from '../models/Solutions';

function solution(nums: number[]) {
    if(nums.length === 1) {
        return nums[0]
    }
    if(nums[nums.length - 1] > nums[0]) {
        return nums[0];
    }

    let left = 0
    let right = nums.length - 1;

    while(right >= left) {
        const mid = (right + left) / 2;

        if(nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if(nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        if(nums[mid] > nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

export default {
    solution
} as Solutions;