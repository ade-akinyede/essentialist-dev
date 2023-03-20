// See https://stackoverflow.com/a/39495173 for solution used in restricting
// the number range.
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type FizzBuzzRange = IntRange<1, 101>

export default function fizzBuzz(input: FizzBuzzRange): String {
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz"
    else if (input % 3 === 0) return "Fizz"
    else if (input % 5 === 0) return "Buzz"
    else return input.toString()
}