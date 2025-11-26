"use client";
import React, { ChangeEvent, FormEvent } from "react";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import PasswordValidation from "./ui/PasswordValidation";

// ---------------- Types ----------------
export interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
}

interface InputProps {
  activeTab: "create" | "login";
  form: FormState;
  showPassword: boolean;
  showConfirmPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
}

// ---------------- Component ----------------
const Input: React.FC<InputProps> = ({
  activeTab,
  form,
  showPassword,
  showConfirmPassword,
  setShowPassword,
  setShowConfirmPassword,
  handleInputChange,
  handleSubmit,
  isFormValid,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mb-10 space-y-6">
        {/* Email Field */}
        <EmailField email={form.email} onChange={handleInputChange} />

        {/* Password Field */}
        <PasswordField
          name="password"
          password={form.password}
          showPassword={showPassword}
          toggleShow={() => setShowPassword((prev) => !prev)}
          onChange={handleInputChange}
        />

        {/* Confirm Password (only for create tab) */}
        {activeTab === "create" && (
          <PasswordField
            name="confirmPassword"
            password={form.confirmPassword}
            showPassword={showConfirmPassword}
            toggleShow={() => setShowConfirmPassword((prev) => !prev)}
            onChange={handleInputChange}
            label="Confirm Password"
          />
        )}

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
          {activeTab === "create" ? "Create account" : "Log in"}
        </button>
      </form>

      {/* Password validation hint (only for create tab) */}
      {activeTab === "create" && <PasswordValidation password={form.password} />}
    </>
  );
};

export default Input;
