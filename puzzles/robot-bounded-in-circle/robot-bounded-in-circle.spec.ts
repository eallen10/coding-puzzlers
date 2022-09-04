import solutions from './solutions';

describe.each(Object.keys(solutions))('robot-bounded-in-circle', (n) => {
    it(`${n} returns true empty input`, () => {
        expect(solutions.solution('GGLLGG')).toBe(true);
    });

    it(`${n} returns false when passed G`, () => {
        expect(solutions.solution('G')).toBe(false);
    });

    it(`${n} returns false when passed GLLGRRLG`, () => {
        expect(solutions.solution('G')).toBe(false);
    });

    it(`${n} returns true when passed GGLLGG`, () => {
        expect(solutions.solution('GGLLGG')).toBe(true);
    });

    it(`${n} returns true when passed GGLLGGRRRRGGRRGG`, () => {
        expect(solutions.solution('GGLLGGRRRRGGRRGG')).toBe(true);
    });

    it(`${n} returns true when passed LLLLLLL`, () => {
        expect(solutions.solution('LLLLLLL')).toBe(true);
    });

    it(`${n} returns true when passed LRLRLRRRLLRL`, () => {
        expect(solutions.solution('LRLRLRRRLLRL')).toBe(true);
    });
});