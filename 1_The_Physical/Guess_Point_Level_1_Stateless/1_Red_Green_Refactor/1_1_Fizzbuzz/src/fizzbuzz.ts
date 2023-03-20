// See https://stackoverflow.com/a/39495173 for solution used in restricting
// the number range. This provides a statically enforced range so the fizzBuzz method
// doesn't have to guard and throw invalid input.
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type FizzBuzzRange = IntRange<1, 101>

const isMultipleOf = (dividend: number, divisor: number) => dividend % divisor === 0
const isMultipleOfThree = (dividend: number) => isMultipleOf(dividend, 3)
const isMultipleOfFive = (dividend: number) => isMultipleOf(dividend, 5)

/**
 * Takes numbers from 1 to 100 and outputs them as a string, but for multiples of three it returns “Fizz” instead of the number, 
 * and for multiples of five it returns “Buzz.” For numbers that are multiples of both three and five, it returns “FizzBuzz.”
 * 
 * @param {FizzBuzzRange} input - The number between the range of 1 to 100, statically enforced as per the type.
 * @returns {string} "Fizz", "Buzz", "FizzBuzz", or stringified number.
 */
export function fizzBuzz(input: FizzBuzzRange): string {
    const _isMultipleOfThree = isMultipleOfThree(input)
    const _isMultipleOfFive = isMultipleOfFive(input)

    let result: string
    
    if (_isMultipleOfThree && _isMultipleOfFive) result = "FizzBuzz"
    else if (_isMultipleOfThree) result = "Fizz"
    else if (_isMultipleOfFive) result = "Buzz"
    else result = input.toString()

    return result
}