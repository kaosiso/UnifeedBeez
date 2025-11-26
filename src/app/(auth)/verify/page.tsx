"use client";

import Image from "next/image";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

export default function VerifyPage() {
  const [otp, setOtp] = useState("");
  const [isError, setIsError] = useState(false);

  const DUMMY_OTP = "123456"; // dummy correct OTP

  const handleComplete = (code: string) => {
    setOtp(code);

    if (code === DUMMY_OTP) {
      setIsError(false);
      alert("OTP verified successfully!");
    } else {
      setIsError(true);
    }
  };

  const handleResend = () => {
    setOtp("");
    setIsError(false);
    alert("OTP resent! Use 123456 as the dummy OTP.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#fffdf8] to-[#fdf8eb] pt-20 sm:pt-48 p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#e6f7ec] via-[#e6f1df] to-[#e4e6cb] shadow-md rounded-3xl p-[40px] w-full max-w-2xl mx-4 sm:mx-8">
        <div className="text-center space-y-4">
          {/* Icon */}
          <div className="flex justify-center py-4">
            <div className="rounded-xl w-16 h-16 bg-white shadow-lg flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-[#eefdf1]">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#dbf0df]">
                  <Image
                    src="/icons/mail-01.svg"
                    alt="Mail Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-0">
            <h2 className="text-xl sm:text-2xl font-semibold py-2">
              Please check your email.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base py-2">
              We’ve sent a code to brian@unifiedbeez.com
            </p>
          </div>

          {/* OTP Input */}
          <div className="flex justify-center py-2">
            <OTPInput length={6} onComplete={handleComplete} isError={isError} />
          </div>

          {/* Error message */}
          {isError && (
            <p className="text-red-600 text-center mt-2">
              Incorrect OTP, please try again.
            </p>
          )}

          {/* Resend */}
          <p className="text-xs sm:text-sm py-2 text-gray-600">
            Didn’t get a code?{" "}
            <button className="text-[#053d27] underline" onClick={handleResend}>
              Click to resend
            </button>
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 w-full px-8">
            <button className="flex-1 px-6 py-2 rounded-lg border border-gray-200 bg-[#ffffff] font-semibold text-[#1c4f3c] hover:bg-gray-100 text-base sm:text-md">
              Go back
            </button>
            <button className="flex-1 px-6 py-2 rounded-lg font-medium bg-[#1c4f3c] text-white hover:bg-green-800 text-base sm:text-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// OTPInput Component
interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  isError?: boolean; // for wrong OTP styling
}

function OTPInput({ length = 6, onComplete, isError = false }: OTPInputProps) {
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
      className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 justify-center"
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
          className={`
            w-12 h-14 text-2xl
            sm:w-14 sm:h-16 sm:text-3xl
            md:w-14 md:h-16
            lg:w-16 lg:h-20 lg:text-4xl
            xl:w-20 xl:h-24 xl:text-5xl
            text-center rounded-xl
            border-[3px] transition-all duration-200
            ${isError
              ? "border-red-600 text-red-600 focus:border-red-600 focus:ring-red-200"
              : val
              ? "border-[#0b1012] focus:border-[#053d27] focus:ring-2 focus:ring-green-200"
              : "border-gray-400 focus:border-[#053d27] focus:ring-0"
            }
            focus:outline-none
            hover:ring-1 hover:ring-green-100
          `}
        />
      ))}
    </div>
  );
}
