import solutions from './solutions';

describe.each(Object.keys(solutions))('maximum-product-subarray', (n) => {
    it(`${n} returns 6 when passed [2,3,-2,4]`, () => {
        expect(solutions[n]([2,3,-2,4])).toEqual(6);
    });

    it(`${n} returns 0 when passed [-2,0,-1]`, () => {
        // Jest does strict compare on signed zeros, so we need to do this to get rid of the -0s
        const result = JSON.parse(JSON.stringify(solutions[n]([-2,0,-1])));
        expect(result).toEqual(0);
    });
});