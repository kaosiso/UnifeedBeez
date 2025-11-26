"use client";
import React, { ChangeEvent, FormEvent } from "react";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";

// ---------------- Types ----------------
export interface FormState {
  email: string;
  password: string;
  confirmPassword: string; // optional, not used
}

interface LoginViewProps {
  form: FormState;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
}

// ---------------- Component ----------------
const LoginView: React.FC<LoginViewProps> = ({
  form,
  showPassword,
  setShowPassword,
  handleInputChange,
  handleSubmit,
  isFormValid,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-10 space-y-6">
      {/* Email Field */}
      <EmailField email={form.email} onChange={handleInputChange} />

      {/* Password Field */}
      <PasswordField
        name="password"
        password={form.password}
        showPassword={showPassword}
        toggleShow={() => setShowPassword(prev => !prev)}
        onChange={handleInputChange}
      />

      {/* do it here */}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-semibold ${
          isFormValid
            ? "bg-[#063e28] text-white"
            : "bg-[#063e28] text-white cursor-not-allowed"
        }`}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginView;
