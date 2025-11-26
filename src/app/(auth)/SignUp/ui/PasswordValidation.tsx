import React, { useMemo } from 'react';
import { getPasswordRules } from '@/app/(auth)/SignUp/utils/PasswordRules'; // make sure the path and casing match exactly

interface ValidationRule {
    key: string;
    label: string;
    isValid: boolean;
}

interface PasswordValidationProps {
    password: string;
}

const PasswordValidation: React.FC<PasswordValidationProps> = ({ password }) => {
    const rules = useMemo(() => getPasswordRules(password), [password]);

    const validationRules: ValidationRule[] = [
        { key: 'minLength', label: 'At least 8 characters', isValid: rules.minLength },
        { key: 'hasUppercase', label: 'At least one uppercase letter', isValid: rules.hasUppercase },
        { key: 'hasLowercase', label: 'At least one lowercase letter', isValid: rules.hasLowercase },
        { key: 'hasDigit', label: 'At least one digit', isValid: rules.hasDigit },
        { key: 'hasSpecialChar', label: 'At least one special character', isValid: rules.hasSpecialChar },
    ];

    return (
        <ul className="text-sm space-y-1 mt-4">
            {validationRules.map((rule) => (
                <li
                    key={rule.key}
                    className={`flex items-center ${rule.isValid ? 'text-gray-500' : 'text-gray-400'}`}
                >
                    {rule.isValid ? (
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                    {rule.label}
                </li>
            ))}
        </ul>
    );
};

export default PasswordValidation;
