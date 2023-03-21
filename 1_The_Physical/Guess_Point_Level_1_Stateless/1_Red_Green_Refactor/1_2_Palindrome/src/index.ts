export const isAPalindrome = (word: string) => {
    const normalisedWord = word.trim().toLocaleLowerCase()
    const reversed = Array.from(normalisedWord).reverse().join('')
    return normalisedWord === reversed
}