import { trivialSolution } from './solution';

describe('longest increasing subsequence', () => {
    it('returns 4 when given [10,9,2,5,3,7,101,18]', () => {
        expect(trivialSolution([10,9,2,5,3,7,101,18])).toBe(4);
    });

    it('returns 4 when given [0,1,0,3,2,3]', () => {
        expect(trivialSolution([0,1,0,3,2,3])).toBe(4);
    });

    it('returns 1 when given [7,7,7,7,7,7,7]', () => {
        expect(trivialSolution([7,7,7,7,7,7,7])).toBe(1);
    });

    it('returns 5 when given [10,9,10,11,1,2,3,4,5]', () => {
        expect(trivialSolution([10,9,2,5,3,7,101,18])).toBe(5);
    });
});