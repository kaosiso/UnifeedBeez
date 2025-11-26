'use client';
import React from 'react';
import { X, Minus } from 'lucide-react';

export interface BreadcrumbItem {
    id: string;
    label: string;
    isActive?: boolean;
    isComplete?: boolean;
}

interface CopilotHeaderProps {
    breadcrumbs: BreadcrumbItem[];
    onExit: () => void;
}

const CopilotHeader: React.FC<CopilotHeaderProps> = ({ breadcrumbs, onExit }) => {
    return (
        <div className="flex justify-between items-center px-6 py-6 bg-white ">
            
            {/* Exit button (left side) */}
            <div className="flex items-center space-x-2">
                <button
                    onClick={onExit}
                    className="flex items-center text-red-600 border rounded-lg px-2 py-2 border-red-500 hover:text-red-600 transition text-lg font-semibold"
                >
                    <X size={30} /> Exit
                </button>
            </div>

            {/* Breadcrumbs (right side, 80% width) */}
            <div className="flex items-center overflow-x-auto w-4/5 justify-evenly">
                {breadcrumbs.map((item, index) => (
                    <div 
                        key={item.id} 
                        className="flex items-center text-sm whitespace-nowrap flex-shrink-0"
                    >
                       <div className='flex items-center ' >
                         {index > 0 && (
                            <Minus
                                size={50}             
                                strokeWidth={1}      
                                className={`text-[#053d27]  pr-0 -mr-3
                                `}
                            />
                        )}

                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 border-[1.5px] text-base font-medium 
                                ${item.isActive
                                    ? 'bg-[#053d27] text-white border-[#4B843E]'
                                    : 'bg-[#e9f7f2] text-[#053d27] border-[#053d27]'
                                }`}
                        >
                            {index + 1}
                        </div>
                       </div>

                        {/* Label */}
                        <span className={`${item.isActive ? 'font-bold text-sm text-[#053d27]' : 'text-gray-500 text-sm'}`}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CopilotHeader;
