import { solution } from './solution';

describe('bounded robot in circle', () => {
    it('returns true empty input', () => {
        expect(solution('GGLLGG')).toBe(true);
    });

    it('returns true when passed GGLLGG', () => {
        expect(solution('GGLLGG')).toBe(true);
    });

    it('returns true when passed GGLLGGRRRRGGRRGG', () => {
        expect(solution('GGLLGGRRRRGGRRGG')).toBe(true);
    });
});