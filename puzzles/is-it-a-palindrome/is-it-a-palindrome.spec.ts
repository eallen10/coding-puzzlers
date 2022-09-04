import { solution } from './solution';

describe('is it a palindrome', () => {
    it('returns true when given [1,2,2,1]', () => {
        expect(solution([1,2,2,1])).toBe(true);
    });

    it('returns true when given [1,2,3,2,1]', () => {
        expect(solution([1,2,3,2,1])).toBe(true);
    });

    it('returns false when given [0,1]', () => {
        expect(solution([0,1])).toBe(false);
    });

    it('returns false when given [0,1,1]', () => {
        expect(solution([0,1])).toBe(false);
    });
});