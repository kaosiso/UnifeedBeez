"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import MessageIcons from "@/components/MessageIcons";

const ForgotPasswordPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`A reset link has been sent to ${email}`);
    setEmail("");
  };

  const handleGoBack = (): void => {
    alert("Go back clicked");
  };

  const handleResend = (): void => {
    alert("Reset link resent to your email");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ffffff] via-[#FEFCF4] to-[#fdf5de] p-4">
      {/* Main content */}
      <div className="flex flex-col items-center justify-start flex-1 mt-24  ">
        <div className="rounded-[40px] p-[24px] sm:p-[40px] w-full max-w-2xl min-h-[520px] bg-gradient-to-b from-[#e6f7ec] via-[#E6EEDB] to-[#E6EAD3] flex flex-col space-y-6">
          {/* Padlock Icon */}
          <div className="flex justify-center">
            {/* Adjusted: Main container is w-16 h-16. */}
            <div className="rounded-xl w-16 h-16 bg-white shadow-lg flex items-center justify-center">
              {/* Outer Circle (Big Circle): Adjusted to w-16 h-16 to completely fill the outer box (removing the space). Updated color to bg-[#eefdf1]. */}
              <div className="flex items-center justify-center rounded-full w-14 h-14 bg-[#eefdf1]">
                {/* Inner Circle: Retained w-8 h-8 and color bg-[#dbf0df]. */}
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#dbf0df]">
                  {/* Icon: Updated to w-20 h-20 (based on user's input). Re-added ml-px for visual centering correction. */}
                  <Image
                    src="/icons/padlock.svg"
                    alt="Padlock Icon"
                    width={20}
                    height={20}
                    // Re-applying ml-px (1 pixel margin-left) for visual correction of the icon's shape.
                    className="ml-px"
                  />
                </div>
              </div>
            </div>



          </div>

          {/* Heading */}
          <div className="text-center space-y-6">
            <h1 className="text-xl sm:text-[26px] font-semibold tracking-tight">
              Reset Password
            </h1>

            <p className="text-gray-600 text-xs sm:text-[16px]">
              We'll email you a link to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
            <div className="relative w-full">
              <label className="block pl-1 text-[16px] font-[600] mb-2">Email</label>

              {/* 👇 NEW WRAPPER with relative positioning */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="brian@unifiedbeez.com"
                  // Added `pl-3 pr-10` to reserve space for the icon.
                  className="w-full px-3 py-2 pr-10 rounded-lg border text-black text-base sm:text-md hover:border-[#b9cebc] hover:border-4
  hover:shadow-[inset_0_0_0_1px_black]
  focus:outline-none focus:border-[#b9cebc] focus:border-4"
                  required
                />
                <img
                  src="/icons/help-circle.svg"
                  alt="Help"
                  // The combination of top-1/2 and -translate-y-1/2 now correctly centers the icon within the input field.
                  className="absolute right-3 top-[50%] -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
              </div>
            </div>


            <p className="text-sm sm:text-sm text-gray-600 text-center">
              Didn’t get a code?{" "}
              <span
                className="text-[#053d27]  underline cursor-pointer"
                onClick={handleResend}
              >
                Click to resend.
              </span>
            </p>

            <div className="flex flex-col pt-4 font-semibold sm:flex-row gap-4">
              <button
                type="button"
                className="w-full bg-white sm:w-1/2 py-2 font-semibold rounded-lg border border-gray-200 text-[#1c4f3c] hover:bg-gray-100 text-base sm:text-md"
                onClick={handleGoBack}
              >
                Go back
              </button>
              <button
                type="submit"
                className="w-full sm:w-1/2 py-2 rounded-lg font-medium bg-[#1c4f3c] text-white hover:bg-green-800 sm:text-md"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer icons */}
      <div className="mt-24 w-full">
        <MessageIcons className="w-full" />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
