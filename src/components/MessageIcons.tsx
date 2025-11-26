"use client";

import React from "react";
import Image from "next/image";

interface MessageIconsProps {
  className?: string;
}

const icons = [
  { src: "/icons/whatsapp.svg", alt: "WhatsApp" },
  { src: "/icons/facebook.png", alt: "Facebook" },
  { src: "/icons/instagram logo.svg", alt: "Instagram" },
  { src: "/icons/Calendly.svg", alt: "Calendly" },
  { src: "/icons/msg.png", alt: "Msg" },
  { src: "/icons/Z.svg", alt: "Z" },
  { src: "/icons/Slack logo.svg", alt: "Slack" },
  { src: "/icons/paypal.svg", alt: "Paypal" },
  { src: "/icons/super.svg", alt: "Signal" },
];

const MessageIcons: React.FC<MessageIconsProps> = ({ className }) => {
  return (
    <div className={`overflow-hidden w-full ${className ?? ""}`}>
      <div className="flex animate-scroll whitespace-nowrap">
        {icons.concat(icons).map((icon, idx) => (
          <Image
            key={idx}
            src={icon.src}
            alt={icon.alt}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 inline-block object-contain mx-0"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MessageIcons;
