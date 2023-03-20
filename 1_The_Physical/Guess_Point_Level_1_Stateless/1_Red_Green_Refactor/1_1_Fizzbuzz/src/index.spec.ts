import fizzBuzz from './fizzbuzz'

describe("fizzbuzz", () => {
    it('should return the word "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(15)).toBe('Fizz')
        expect(fizzBuzz(51)).toBe('Fizz')
        expect(fizzBuzz(99)).toBe('Fizz')
    })

    it('should return the word "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
        expect(fizzBuzz(55)).toBe('Buzz')
        expect(fizzBuzz(85)).toBe('Buzz')
    })

});
