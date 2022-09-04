import { Solutions } from '../models/Solutions';

function solution(instructions: string) {
    let facing = 0;
    let position = [0, 0];
    const movements = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for(let i = 0; i < instructions.length; i++) {
        const instruction = instructions.charAt(i);

        if(instruction === 'L') {
            facing = facing === 0 ? 3 : facing - 1;
        } else if(instruction === 'R') {
            facing = facing === 3 ? 0 : facing + 1;
        } else {
            const movement = movements[facing];
            const moveX = movement[0];
            const moveY = movement[1];
            position[0] = position[0] + moveX;
            position[1] = position[1] + moveY;
        }
    }

    return position[0] === 0 && position[1] === 0;
}

export default { solution } as Solutions;