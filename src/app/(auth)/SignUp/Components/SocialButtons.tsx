"use client";
import React from "react";

// Single Social Button
export const SocialButton: React.FC<{ icon?: React.ReactNode; label: string }> = ({ icon, label }) => (
    <button
        type="button"
        className="flex items-center justify-center w-full py-3.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150 shadow-sm"
        onClick={() => console.log(`Signing up with ${label}`)}
    >
        {icon && <span className="text-xl mr-2">{icon}</span>}
        {label}
    </button>
);

// Container for Social Buttons
const SocialButtons: React.FC = () => (
    <div className="mt-6">
        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-[#aaaf9e]"></div>
            <span className="flex-shrink px-2 text-[#050505] text-sm">or sign up with</span>
            <div className="flex-grow border-t border-[#aaaf9e]"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <SocialButton
                icon={<img src="/icons/google.svg" alt="Google" className="w-7 h-7" />}
                label="Google"
            />
            <SocialButton
                icon={<img src="/icons/apple-mac.svg" alt="Apple" className="w-7 h-7" />}
                label="Apple"
            />
            <SocialButton
                icon={<img src="/icons/window.svg" alt="Microsoft" className="w-7 h-7" />}
                label="Microsoft"
            />
        </div>
        <p className="text-[10px] text-center text-gray-500 mt-4 px-4 sm:px-4 md:px-2 py-4 mx-auto max-w-xs">
            By continuing, you agree to UnifiedBeez’s Terms of Service and acknowledge that you've read our Privacy Policy.
        </p>
    </div>
);

export default SocialButtons;
