
import React from 'react';
import { Lightbulb } from 'lucide-react'; 

const MessageInControl: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
    
      <div 
        className="
          flex items-center space-x-2 
          bg-white text-gray-400 text-xs
          p-2 rounded-lg shadow-sm 
          border border-gray-200
        "
      >
        <Lightbulb size={32} className="text-gray-400 flex-shrink-0" /> 
        
        <span className="leading-5" >
          You're in control. All settings can be  <br></br> changed anytime in your dashboard.
        </span>
      </div>
    </div>
  );
};

export default MessageInControl;