import { solution } from './solution';

describe('bounded robot in circle', () => {
    it('returns true empty input', () => {
        expect(solution('GGLLGG')).toBe(true);
    });

    it('returns false when passed G', () => {
        expect(solution('G')).toBe(false);
    });

    it('returns false when passed GLLGRRLG', () => {
        expect(solution('G')).toBe(false);
    });

    it('returns true when passed GGLLGG', () => {
        expect(solution('GGLLGG')).toBe(true);
    });

    it('returns true when passed GGLLGGRRRRGGRRGG', () => {
        expect(solution('GGLLGGRRRRGGRRGG')).toBe(true);
    });

    it('returns true when passed LLLLLLL', () => {
        expect(solution('LLLLLLL')).toBe(true);
    });

    it('returns true when passed LRLRLRRRLLRL', () => {
        expect(solution('LRLRLRRRLLRL')).toBe(true);
    });
});