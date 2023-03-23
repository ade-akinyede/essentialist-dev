import { PasswordValidator } from "./index"

describe('password validator', () => {
    const passwordValidator = new PasswordValidator()

    it('returns object with boolean result and errors key', () => {
        expect(passwordValidator.validate("")).toStrictEqual({
            result: false,
            error: "Not yet implemented"
        })
    })
})

