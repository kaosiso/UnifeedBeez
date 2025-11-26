"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MessageIcons from "@/components/MessageIcons";

export default function WelcomeBeezaro() {
    const router = useRouter();

    const handleStart = () => router.push("/CopilotWidget");
    const handleManual = () => router.push("/WelcomeManual");

    return (
        <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-[#fefefe] via-[#f6f0df] to-[#f2e7cf] relative overflow-hidden p-6">
            <div className="fixed inset-0 bg-black/25 pointer-events-none z-10"></div>


            {/* Center Modal */}
            <div className="relative z-20 flex-1 flex items-center justify-center pt-10 pb-20">
                <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-gray-200 p-10 px-14 text-center mt-28 mb-10">

                    {/* Logo */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="border-2 border-gray-300 rounded-2xl p-4 w-max h-max">
                            <img
                                src="/icons/logo-bee.svg"
                                alt="Bee Logo"
                                className="w-20 h-20"
                            />
                        </div>
                    </div>

                    {/* Heading Text */}
                    <h1 className="text-3xl font-semibold text-[#0b1012]">Hi there! I'm Beezaro</h1>
                    <p className="text-gray-600 mt-3 text-base max-w-xl mx-auto">
                        I’ll set everything up for you in just a few questions. Ready?
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 space-y-4">
                        <button
                            onClick={handleStart}
                            className="w-full bg-[#053d27] text-white pb-2 pt-3 rounded-lg text-base font-medium hover:opacity-90 transition"
                        >
                            Yes, let's go
                        </button>

                        <button
                            onClick={handleManual}
                            className="w-full text-[#545859] pb-2 pt-3 rounded-lg text-base font-medium flex items-center justify-center gap-2 border border-[#d0d5dd] 
               bg-transparent hover:bg-[#053d27]/5 hover:text-[#053d27] transition"
                        >
                            <span>Show me the manual setup instead</span>
                        </button>


                    </div>
                </div>
            </div>

            {/* Footer Icons */}
            <div className="w-full mt-6 relative z-0">
                <MessageIcons />
            </div>
        </div>
    );
}