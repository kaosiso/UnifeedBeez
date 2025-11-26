"use client";

import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

interface OTPInputProps {
    length?: number;
    onComplete?: (code: string) => void;
}

export default function OTPInput({ length = 6, onComplete }: OTPInputProps) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        const code = newValues.join("");
        if (!newValues.includes("") && code.length === length) {
            onComplete?.(code);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        const text = e.clipboardData.getData("text").trim();
        if (/^\d+$/.test(text) && text.length === length) {
            const digits = text.split("");
            setValues(digits);
            inputRefs.current[length - 1]?.focus();
            onComplete?.(text);
        }
    };

    return (
        <div
            className="
        flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 justify-center
      "
            onPaste={handlePaste}
        >
            {values.map((val, index) => (
                <input
                    key={index}
                    ref={(ref) => ref && (inputRefs.current[index] = ref)}
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="
            flex-1 min-w-[2.5rem] max-w-[4rem] h-14
            sm:h-16 sm:min-w-[3rem] sm:max-w-[4.5rem]
            text-2xl sm:text-3xl text-center border border-gray-400 rounded-xl
            focus:outline-none focus:border-green-700
          "
                />
            ))}
        </div>
    );
}
