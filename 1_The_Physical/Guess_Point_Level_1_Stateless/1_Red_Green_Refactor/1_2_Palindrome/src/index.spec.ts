import { isAPalindrome } from './index'

describe('palindrome checker', () => {
    it('should detect that "mom" is a palindrome', () => {
        expect(isAPalindrome('mom')).toBeTruthy()
    })

    it('should detect palindrome regardless of casing', () => {
        expect(isAPalindrome('kAYaK')).toBeTruthy()
    })

    it('should detect that "bill" is not a palindrome', () => {
        expect(isAPalindrome('bill')).toBeFalsy()
    })

    it('should detect phrase "Was It A Rat I Saw" is a palindrome', () => {
        expect(isAPalindrome('Was It A Rat I Saw')).toBeTruthy()
    })
})