import solutions from './solutions';

describe.each(Object.keys(solutions))('product-of-array-except-self', (n) => {
    it(`${n} returns [24,12,8,6] when passed [1,2,3,4]`, () => {
        expect(solutions[n]([1,2,3,4])).toEqual([24,12,8,6]);
    });

    it(`${n} returns [0,0,9,0,0] when passed [-1,1,0,-3,3]`, () => {
        // Jest does strict compare on signed zeros, so we need to do this to get rid of the -0s
        const result = JSON.parse(JSON.stringify(solutions[n]([-1,1,0,-3,3])));
        expect(result).toEqual([0,0,9,0,0]);
    });
});