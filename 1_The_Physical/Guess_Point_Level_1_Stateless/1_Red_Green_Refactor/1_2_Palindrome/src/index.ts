export const isAPalindrome = (word: string) => {
    const normalisedWord = word.replace(/\s+/g, '').toLocaleLowerCase()
    const reversed = Array.from(normalisedWord).reverse().join('')
    return normalisedWord === reversed
}