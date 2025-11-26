// PasswordInput.tsx
import React, { ChangeEvent } from "react";
import Image from "next/image";

interface PasswordInputProps {
    name: string;
    value: string;
    placeholder: string;
    showState: boolean;
    toggleState: React.Dispatch<React.SetStateAction<boolean>>;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    name,
    value,
    placeholder,
    showState,
    toggleState,
    onChange,
    className = "",
}) => {
    return (
        <div className="relative">
            <input
                type={showState ? "text" : "password"}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />

            <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => toggleState((s) => !s)}
            >
                <Image
                    src={showState ? "/icons/eye-on.svg" : "/icons/eye-off.svg"}
                    alt="toggle password visibility"
                    width={20}
                    height={20}
                />
            </button>
        </div>
    );
};

export default PasswordInput;
