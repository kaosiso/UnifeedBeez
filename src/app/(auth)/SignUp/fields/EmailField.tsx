"use client";
import React, { ChangeEvent } from "react";
import { FormState } from "../Input";

interface EmailFieldProps {
  email: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailField: React.FC<EmailFieldProps> = ({ email, onChange }) => {
  const inputClassName = `
    w-full px-2 pt-3 py-2 border-2 border-gray-300 rounded-lg
    hover:border-[#b9cebc] hover:shadow-[0_0_0_4px_#b9cebc]
    focus:outline-none focus:border-[#1e503d] focus:shadow-[0_0_0_4px_#b9cebc]
    transition-colors transition-shadow
  `;

  return (
    <div>
      <label className="block pl-1 text-[16px] font-[600] mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="brian@unifiedbeez.com"
        className={inputClassName}
      />
      <p className="text-sm pl-2 font-light text-gray-400 mt-2">
        Please enter your email address
      </p>
    </div>
  );
};

export default EmailField;
