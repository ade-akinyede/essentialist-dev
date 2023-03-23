export class PasswordValidator {
    constructor() {}

    validate(password: string): {result: Boolean, error: String} {
        const pwdLength = password.length
        if (pwdLength < 5 || pwdLength > 15) {
            return {
                result: false,
                error: 'Password must be between 5 and 15 characters long'
            }
        }
        return {
            result: true,
            error: 'Not yet implemented'
        }
    }
}