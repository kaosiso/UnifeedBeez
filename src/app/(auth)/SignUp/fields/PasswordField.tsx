"use client";
import React, { ChangeEvent } from "react";
import PasswordInput from "../ui/PasswordInput"; // Adjusted path assumption

interface PasswordFieldProps {
  password: string;
  showPassword: boolean;
  toggleShow: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name: string; // <-- ADDED: Explicitly define the name prop
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  password,
  showPassword,
  toggleShow,
  onChange,
  label = "Password",
  name, 
}) => {
  const inputClassName = `
    w-full px-2 pt-3 py-2 border-2 border-gray-300 rounded-lg
    hover:border-[#b9cebc] hover:shadow-[0_0_0_4px_#b9cebc]
    focus:outline-none focus:border-[#1e503d] focus:shadow-[0_0_0_4px_#b9cebc]
    transition-colors transition-shadow
  `;

  return (
    <div>
      <label className="block pl-1 text-[16px] text-black font-[600] mb-1">
        {label}
      </label>
      <PasswordInput
        name={name} // <-- FIXED: Use the 'name' prop directly
        value={password}
        placeholder={`Enter your ${label.toLowerCase()}`}
        showState={showPassword}
        toggleState={toggleShow}
        onChange={onChange}
        className={inputClassName}
      />
      <p className="text-sm pl-2 font-light text-gray-400 mt-2">
        {label === "Confirm Password"
          ? "Re-Enter a strong password"
          : "Enter a strong password"}
      </p>
    </div>
  );
};

export default PasswordField;