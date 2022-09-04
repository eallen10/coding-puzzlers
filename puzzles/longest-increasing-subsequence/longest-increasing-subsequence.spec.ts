import solutions from './solutions';

describe.each(Object.keys(solutions))('longest-increasing-subsequence', (n) => {
    it(`${n} returns 4 when given [10,9,2,5,3,7,101,18]`, () => {
        // expect(solutions[n]([10,9,2,5,3,7,101,18])).toBe(4);
    });

    it(`${n} returns 4 when given [0,1,0,3,2,3]`, () => {
        // expect(solutions[n]([0,1,0,3,2,3])).toBe(4);
    });

    it(`${n} returns 1 when given [7,7,7,7,7,7,7]`, () => {
        // expect(solutions[n]([7,7,7,7,7,7,7])).toBe(1);
    });

    it(`${n} returns 5 when given [10,9,10,11,1,2,3,4,5]`, () => {
        // expect(solutions[n]([10,9,10,11,1,2,3,4,5])).toBe(5);
    });
});