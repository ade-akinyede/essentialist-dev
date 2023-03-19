import fizzBuzz from './fizzbuzz'

describe("fizzbuzz", () => {
    it('should return the word "Fizz"', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })

});
