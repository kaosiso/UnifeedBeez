import React from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <div
      className="w-[300px] rounded-tr-3xl rounded-br-3xl flex-shrink-0 min-h-full"
      style={{
        background: 'linear-gradient(180deg, rgba(3, 40, 20, 1) 0%, rgba(13, 100, 48, 1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Image
          src="/icons/bee-animation.gif" 
          alt="Bee Animation"
          width={200}   // increased size
          height={200}  // increased size
          priority       // ensures GIF loads fast
        />
      </div>
    </div>
  );
};

export default Sidebar;
