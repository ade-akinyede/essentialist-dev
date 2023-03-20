import fizzBuzz from './fizzbuzz'

describe("fizzbuzz", () => {
    it('should return the word "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(18)).toBe('Fizz')
        expect(fizzBuzz(51)).toBe('Fizz')
        expect(fizzBuzz(99)).toBe('Fizz')
    })

    it('should return the word "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
        expect(fizzBuzz(55)).toBe('Buzz')
        expect(fizzBuzz(85)).toBe('Buzz')
    })

    it('should return the word "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
        expect(fizzBuzz(45)).toBe('FizzBuzz')
        expect(fizzBuzz(90)).toBe('FizzBuzz')
    })

});
