export interface PasswordRules {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasDigit: boolean;
  hasSpecialChar: boolean;
}

export const getPasswordRules = (password: string): PasswordRules => ({
  minLength: password.length >= 8,
  hasUppercase: /[A-Z]/.test(password),
  hasLowercase: /[a-z]/.test(password),
  hasDigit: /[0-9]/.test(password),
  hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
});

export const isPasswordValid = (password: string): boolean => {
  const rules = getPasswordRules(password);
  return Object.values(rules).every(Boolean);
};
