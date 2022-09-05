import solutions from './solutions';

describe.each(Object.keys(solutions))('maximum-subarray', (n) => {
    it(`${n} returns 6 when passed [-2,1,-3,4,-1,2,1,-5,4]`, () => {
        expect(solutions[n]([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });

    it(`${n} returns 1 when passed [1]`, () => {
        expect(solutions[n]([1])).toEqual(1);
    });

    it(`${n} returns 23 when passed [5,4,-1,7,8]`, () => {
        expect(solutions[n]([5,4,-1,7,8])).toEqual(23);
    });
});