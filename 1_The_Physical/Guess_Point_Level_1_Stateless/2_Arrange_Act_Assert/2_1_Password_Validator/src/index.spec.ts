import { PasswordValidator } from "./index"

describe('password validator', () => {
    const passwordValidator = new PasswordValidator()

    it('invalidates password less than 5 characters long', () => {
        expect(passwordValidator.validate("less")).toStrictEqual({
            result: false,
            error: "Password must be between 5 and 15 characters long"
        })
    })
    
    it('invalidates password more than 15 characters long', () => {
        expect(passwordValidator.validate("kDKSf823lkNmmOS-234")).toStrictEqual({
            result: false,
            error: "Password must be between 5 and 15 characters long"
        })
    })

    it('invalidates password without at least one digit', () => {
        expect(passwordValidator.validate("justntime")).toStrictEqual({
            result: false,
            error: "Password must have at least one digit"
        })
    })

    it('invalidates password without at least one upper case letter', () => {
        expect(passwordValidator.validate('jast1ti')).toStrictEqual({
            result: false,
            error: 'Password must have at least one upper case letter'
        })
    })
})

