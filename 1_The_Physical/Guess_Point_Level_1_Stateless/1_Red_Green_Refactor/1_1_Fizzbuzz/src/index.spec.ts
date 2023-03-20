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

    it('should return the string for numbers that are neither multiples of 3 nor 5', () => {
        expect(fizzBuzz(1)).toBe('1')
        expect(fizzBuzz(11)).toBe('11')
        expect(fizzBuzz(52)).toBe('52')
        expect(fizzBuzz(98)).toBe('98')
    })

});
