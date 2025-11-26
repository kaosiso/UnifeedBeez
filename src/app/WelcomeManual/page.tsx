'use client';

import MessageIcons from "@/components/MessageIcons";
import React, { FC } from "react";
import { useRouter } from 'next/navigation';

const WelcomeManual: FC = () => {
    const router = useRouter();

    const handleStartSetup = () => {
        router.push('/setup');
    };

    const handleSkipDashboard = () => {
        router.push('/dashboard');
    };

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fffffe] via-[#fef9eb] to-[#fdf5de] p-6 relative">

            {/* Full page shadow overlay*/}
            <div className="fixed inset-0 bg-black/30 pointer-events-none z-10"></div>

            {/* Content wrapper with higher z-index */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center mt-28 mb-10">
                <div className="bg-white rounded-3xl p-10 max-w-3xl w-full text-center shadow-lg border border-gray-200">

                    {/* Logo and heading */}
                    <div className="flex flex-col items-center mb-12">
                        {/* Logo */}
                        <div className="border-2 border-gray-300 rounded-xl p-4 flex items-center justify-center mb-6 w-max h-max">
                            <img
                                src="icons/logo-bee.svg"
                                alt="Bee Logo"
                                className="w-20 h-20"
                            />
                        </div>


                        <h1 className="text-4xl font-semibold text-[#0b1012] mt-2">
                            Welcome to UnifiedBeez
                        </h1>
                        <p className="text-gray7600 mt-4 text-base max-w-lg">
                            Welcome to UnifiedBeez. Let's get your AI assistant and communication channels set up. It only takes a few minutes
                        </p>
                    </div>

                    {/* Buttons */}
                    <div>
                        <div className="mx-6">
                            <button
                                onClick={handleStartSetup}
                                className="w-full bg-[#053d27] text-white pb-2 pt-3 rounded-lg text-base font-medium hover:opacity-90 transition"
                            >
                                Start Setup
                            </button>

                            <button
                                onClick={handleSkipDashboard}
                                className="w-full bg-[#fff8e6] text-[#053d27] pb-2 pt-3 rounded-lg text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition mt-4"
                            >
                                <span>Skip & Explore Dashboard</span>
                                <img
                                    src="icons/chevron-right.svg"
                                    alt="Bee Logo"
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                        <button
                            onClick={handleGoBack}
                            className="w-full bg-white border-2 border-gray-300 text-gray-700 pb-2 pt-3 rounded-lg font-semibold hover:bg-gray-50 transition mt-12"
                        >
                            Go back
                        </button>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="w-full mt-6 relative z-0">
                <MessageIcons />
            </div>

        </div>
    );
};

export default WelcomeManual;