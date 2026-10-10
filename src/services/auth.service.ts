export const validatePassword = (password: string): string[] | false => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
    const errors: string[] = [];

    if (password.length < 8) {
        errors.push("be at least 8 characters");
    }

    if (!hasUppercase) {
        errors.push("contain an uppercase character");
    }

    if (!hasSpecialChar) {
        errors.push("contain a special character");
    }

    return errors.length > 0 ? errors : false;
};