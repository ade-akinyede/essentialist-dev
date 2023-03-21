import { isAPalindrome } from './index'

describe('palindrome checker', () => {
    it('should detect that "mom" is a palindrome', () => {
        expect(isAPalindrome('mom')).toBeTruthy()
    })
})