import { fizzBuzz, FizzBuzzRange } from './fizzbuzz'

describe("fizzbuzz", () => {
    const inputRange: Array<number> = [...Array(100)].map((_,i) => i+1)

    it('should return the word "Fizz" for multiples of 3', () => {
        inputRange.forEach(input => {
            if (input % 3 === 0 && input % 5 !== 0) {
                expect(fizzBuzz(input as FizzBuzzRange)).toBe('Fizz')
            }
        })
    })

    it('should return the word "Buzz" for multiples of 5', () => {
        inputRange.forEach(input => {
            if (input % 5 === 0 && input % 3 !== 0) {
                expect(fizzBuzz(input as FizzBuzzRange)).toBe('Buzz')
            }
        })
    })

    it('should return the word "FizzBuzz" for multiples of 3 and 5', () => {
        inputRange.forEach(input => {
            if (input % 5 === 0 && input % 3 === 0) {
                expect(fizzBuzz(input as FizzBuzzRange)).toBe('FizzBuzz')
            }
        })
    })

    it('should return stringified numbers that are neither multiples of 3 nor 5', () => {
        inputRange.forEach(input => {
            if (input % 5 !== 0 && input % 3 !== 0) {
                expect(fizzBuzz(input as FizzBuzzRange)).toBe(input.toString())
            }
        })
    })
});
