import React, { ChangeEvent } from "react";
import PasswordInput from "../ui/PasswordInput";

interface ConfirmPasswordFieldProps {
  value: string;
  show: boolean;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string; // for matching validation
}

const inputClassName = `
  w-full px-2 pt-3 py-2 border-2 border-gray-300 rounded-lg
  hover:border-[#b9cebc] hover:shadow-[0_0_0_4px_#b9cebc]
  focus:outline-none focus:border-[#1e503d] focus:shadow-[0_0_0_4px_#b9cebc]
  transition-colors transition-shadow
`;

const ConfirmPasswordField: React.FC<ConfirmPasswordFieldProps> = ({
  value,
  show,
  toggleShow,
  onChange,
  password,
}) => {
  return (
    <div>
      <label className="block pl-1 text-[16px] font-[600] mb-1">Confirm Password</label>
      <PasswordInput
        name="confirmPassword"
        value={value}
        placeholder="Confirm your password"
        showState={show}
        toggleState={toggleShow}
        onChange={onChange}
        className={inputClassName}
      />
      {value && value !== password && (
        <p className="text-xs text-red-500">Passwords do not match.</p>
      )}
      <p className="text-sm pl-2 font-light text-gray-400 mt-2">Re-Enter a strong password</p>
    </div>
  );
};

export default ConfirmPasswordField;
