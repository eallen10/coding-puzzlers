import solutions from './solutions';

describe.each(Object.keys(solutions))('robot-bounded-in-circle', (n) => {
    it(`${n} returns true empty input`, () => {
        expect(solutions.solution('GGLLGG')).toEqual(true);
    });

    it(`${n} returns false when passed G`, () => {
        expect(solutions.solution('G')).toEqual(false);
    });

    it(`${n} returns false when passed GLLGRRLG`, () => {
        expect(solutions.solution('G')).toEqual(false);
    });

    it(`${n} returns true when passed GGLLGG`, () => {
        expect(solutions.solution('GGLLGG')).toEqual(true);
    });

    it(`${n} returns true when passed GGLLGGRRRRGGRRGG`, () => {
        expect(solutions.solution('GGLLGGRRRRGGRRGG')).toEqual(true);
    });

    it(`${n} returns true when passed LLLLLLL`, () => {
        expect(solutions.solution('LLLLLLL')).toEqual(true);
    });

    it(`${n} returns true when passed LRLRLRRRLLRL`, () => {
        expect(solutions.solution('LRLRLRRRLLRL')).toEqual(true);
    });
});