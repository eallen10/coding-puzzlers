import { solution } from './solution';

describe('roman numeral to number', () => {
    it('returns 3 when passed III', () => {
        expect(solution('III')).toBe(3);
    });

    it('returns 58 when passed LVIII', () => {
        expect(solution('LVIII')).toBe(58);
    });

    it('returns 1994 when passed MCMXCIV', () => {
        expect(solution('MCMXCIV')).toBe(1994);
    });
});