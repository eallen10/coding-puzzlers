import solutions from './solutions';

describe.each(Object.keys(solutions))('roman-numeral-to-number', (n) => {
    it(`${n} returns 3 when passed III`, () => {
        expect(solutions.solution('III')).toEqual(3);
    });

    it(`${n} returns 58 when passed LVIII`, () => {
        expect(solutions.solution('LVIII')).toEqual(58);
    });

    it(`${n} returns 1994 when passed MCMXCIV`, () => {
        expect(solutions.solution('MCMXCIV')).toEqual(1994);
    });
});