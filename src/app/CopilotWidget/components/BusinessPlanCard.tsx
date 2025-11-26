import React from 'react';
import { MoreHorizontal, Check } from 'lucide-react'; // For the three-dot menu
import Image from 'next/image';

const BusinessPlanCard: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-[#ffffff] via-[#fffcf5] to-[#fef5e0] shadow-sm rounded-2xl border border-gray-300 p-5 max-w-2xl">
            {/* --- Header Section --- */}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="border-2 rounded-lg h-10 w-10 flex items-center justify-center bg-red-500">
                        <Image src="icons/luggage-02.svg" alt="Bee Logo" className="h-5 w-auto" />
                    </div>

                    <h4 className="font-medium capitalize text-lg text-[#323232]">Business Plan</h4>
                    <span className="text-sm font-medium text-[#053d27] border-2 border-[#053d27] bg-[#f2f4f2] px-2 py-0.5 rounded-3xl">Your Plan</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="bg-[#053d27] hover:bg-[#3E6A34] text-white text-base font-normal py-2 px-4 rounded-lg transition">
                        Upgrade Plan
                    </button>
                    <div className="bg-white rounded-lg border-2 border-gray-300">
                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full transition">
                            <MoreHorizontal size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Price Section --- */}
            <div className="mt-2 flex items-end space-x-2">
                <p className="text-2xl font-medium text-[#053d27] mt-2">£219.2</p>
                <p className="text-base font-medium text-gray-600">/per month</p>
            </div>

            {/* --- Add-ons/Features Section --- */}
            <div className="mt-12">
                <div className="bg-white border border-gray-200 rounded-xl p-2 inline-block">
                    <p className="text-xs text-gray-500 font-semibold m-0">Add-ons</p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs font-medium text-[#4B843E]">
                    <div className="flex items-center space-x-2">
                        <div className="bg-green-600 rounded-full w-4 h-4 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                        </div>
                        <span>3 Extra Seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-green-600 rounded-full w-4 h-4 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                        </div>
                        <span>2 Extra AI Assistant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="bg-green-600 rounded-full w-4 h-4 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                        </div>
                        <span>2 Extra Whatsapp Channel</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPlanCard;
