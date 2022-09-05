import solutions from './solutions';

describe.each(Object.keys(solutions))('best-time-to-buy-and-sell-stock', (n) => {
    it(`${n} returns 5 when passed [7,1,5,3,6,4]`, () => {
        expect(solutions[n]([7,1,5,3,6,4])).toEqual(5);
    });

    it(`${n} returns 0 when passed [7,6,4,3,1]`, () => {
        expect(solutions[n]([7,6,4,3,1])).toEqual(0);
    });
});