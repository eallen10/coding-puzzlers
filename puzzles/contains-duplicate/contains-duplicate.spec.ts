import solutions from './solutions';

describe.each(Object.keys(solutions))('contains-duplicate', (n) => {
    it(`${n} returns true when passed [1,2,3,1]`, () => {
        expect(solutions[n]([1,2,3,1])).toBeTruthy();
    });

    it(`${n} returns false when passed [1,2,3,4]`, () => {
        expect(solutions[n]([1,2,3,4])).toBeFalsy();
    });

    it(`${n} returns true when passed [1,1,1,3,3,4,3,2,4,2]`, () => {
        expect(solutions[n]([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
    });
});