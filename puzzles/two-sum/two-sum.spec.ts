import solutions from './solutions';

describe.each(Object.keys(solutions))('two-sum', (n) => {
    it(`${n} returns [0,1] when given [2,7,11,15] and 9`, () => {
        expect(solutions[n]([2,7,11,15], 9)).toEqual([0,1]);
    });

    it(`${n} returns [1,2] when given [3,2,4] and 6`, () => {
        expect(solutions[n]([3,2,4], 6)).toEqual([1,2]);
    });

    it(`${n} returns [0,1] when given [3,3] and 6`, () => {
        expect(solutions[n]([3,3], 6)).toEqual([0,1]);
    });

    it(`${n} returns [1,3] when given [1,3,0,3] and 6`, () => {
        expect(solutions[n]([1,3,0,3], 6)).toEqual([1,3]);
    });

    it(`${n} returns undefined when given [1,0,3] and 6`, () => {
        expect(solutions[n]([1,0,3], 6)).toBeUndefined();
    });
});