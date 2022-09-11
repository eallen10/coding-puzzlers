import solutions from './solutions';

describe.each(Object.keys(solutions))('find-minimum-in-rotated-sorted-array', (n) => {
    it(`${n} returns 1 when passed [3,4,5,1,2]`, () => {
        expect(solutions[n]([3,4,5,1,2])).toEqual(1);
    });

    it(`${n} returns 0 when passed [4,5,6,7,0,1,2]`, () => {
        expect(solutions[n]([4,5,6,7,0,1,2])).toEqual(0);
    });

    it(`${n} returns 11 when passed [11,13,15,17]`, () => {
        expect(solutions[n]([11,13,15,17])).toEqual(11);
    });
});