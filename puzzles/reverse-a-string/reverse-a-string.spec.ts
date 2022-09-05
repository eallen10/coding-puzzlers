import solutions from './solutions';

describe.each(Object.keys(solutions))('reverse-a-string', (n) => {
    it(`${n} reverses asdf`, () => {
        expect(solutions[n]('asdf')).toEqual('fdsa');
    });

    it(`${n} reverses asdfg`, () => {
        expect(solutions[n]('asdfg')).toEqual('gfdsa');
    });

    it(`${n} reverses empty string`, () => {
        expect(solutions[n]('')).toEqual('');
    });
});