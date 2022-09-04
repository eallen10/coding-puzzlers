import solutions from './solutions';

describe.each(Object.keys(solutions))('roman-numeral-to-number', (n) => {
    it(`${n} returns 3 when passed III`, () => {
        expect(solutions.solution('III')).toBe(3);
    });

    it(`${n} returns 58 when passed LVIII`, () => {
        expect(solutions.solution('LVIII')).toBe(58);
    });

    it(`${n} returns 1994 when passed MCMXCIV`, () => {
        expect(solutions.solution('MCMXCIV')).toBe(1994);
    });
});