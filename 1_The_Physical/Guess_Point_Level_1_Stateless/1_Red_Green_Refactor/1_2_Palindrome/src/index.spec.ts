import { isAPalindrome } from './index'

describe('palindrome checker', () => {
    it('should detect that "mom" is a palindrome', () => {
        expect(isAPalindrome('mom')).toBeTruthy()
    })

    it('should detect that "mother" is not a palindrome', () => {
        expect(isAPalindrome('mother')).toBeFalsy()
    })
})