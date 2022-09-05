import solutions from './solutions';

describe.each(Object.keys(solutions))('is-it-a-palindrome', (n) => {
    it(`${n} returns true when given [1,2,2,1]`, () => {
        expect(solutions[n]([1,2,2,1])).toEqual(true);
    });

    it(`${n} returns true when given [1,2,3,2,1]`, () => {
        expect(solutions[n]([1,2,3,2,1])).toEqual(true);
    });

    it(`${n} returns false when given [0,1]`, () => {
        expect(solutions[n]([0,1])).toEqual(false);
    });

    it(`${n} returns false when given [0,1,1]`, () => {
        expect(solutions[n]([0,1])).toEqual(false);
    });
});