"use client";
import { useState, useEffect, useMemo } from 'react';

// --- Interfaces for Type Safety ---
interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Slide {
  id: number;
  heading: string;
  description: string;
  testimonial: Testimonial;
  icon: string;
}

// --- Carousel Slide Data ---
const slides: Slide[] = [
  {
    id: 1,
    heading:
      'Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.',
    description:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      quote:
        "UnifiedBeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
      name: 'Ariana Grande',
      title: 'Visual Designer, Google',
    },
    icon: '/images/left-first.png',
  },
  {
    id: 2,
    heading:
      'Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.',
    description:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      quote:
        "UnifiedBeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
      name: 'Ariana Grande',
      title: 'Visual Designer, Google',
    },
    icon: '/images/left-second.png',
  },
  {
    id: 3,
    heading:
      'Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.',
    description:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      quote:
        "UnifiedBeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
      name: 'Ariana Grande',
      title: 'Visual Designer, Google',
    },
    icon: '/images/left-third.png',
  },
  {
    id: 4,
    heading:
      'Supercharge your business communication & connect with customers using AI, automation, & multi-channel messaging.',
    description:
      "UnifiedBeez is designed to help any business simplify and supercharge customer communication through AI, automation, and multi-channel messaging. Think of it as your business's AI-powered communication hub.",
    testimonial: {
      quote:
        "UnifiedBeez has transformed the way our team communicates. The sheer range of components and the seamless integration of the communication channels into our workflow have been game-changers. It's like having a toolkit filled with magic that accelerates our communications without compromising on quality.",
      name: 'Ariana Grande',
      title: 'Visual Designer, Google',
    },
    icon: '/images/left-fourth.png',
  },
];

// --- Single Slide Component ---
interface CarouselSlideProps extends Slide {}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  heading,
  description,
  testimonial,
  id,
}) => (
  <div className="flex flex-col h-full justify-between p-12 flex-shrink-0 w-full">
    {/* Top Content */}
    <div>
      <h1 className="text-white mb-6 text-5xl font-medium leading-none tracking-tight">
        {heading.split(' ').map((word, index) => {
          if (index === 0 && id === 1) {
            return (
              <span key={index} className="inline-block">
                <span>S</span>
                {word.substring(1)}
              </span>
            );
          }
          return <span key={index}> {word}</span>;
        })}
      </h1>
      <p className="text-base text-white mb-10 max-w-xl font-medium">{description}</p>
    </div>

    {/* Bottom Testimonial */}
    <div className="mt-8 pt-4 border-white border-opacity-30">
      <div className="bg-white p-5 rounded-xl text-gray-700">
        <p className="text-md mb-4">{testimonial.quote}</p>
        <div className="flex items-center mt-4 space-x-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#ffe7cc] overflow-hidden shadow-md">
            <img
              src="/images/avatar.png"
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[#0f442f]">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Carousel Component ---
const LeftSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const transformStyle = useMemo(
    () => ({ transform: `translateX(-${activeIndex * 100}%)` }),
    [activeIndex]
  );

  return (
    <div
      className="left-section hidden lg:flex flex-col w-full h-full text-white overflow-hidden relative shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #1E463E 0%, #9E7E0D 100%)',
        minHeight: '600px',
      }}
    >
      {/* Main background image BEHIND gradient */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/left-main.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Center icon behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img src={slides[activeIndex].icon} alt="" className="opacity-40" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4 p-4 pt-10 z-10 w-full px-12">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`grow h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeIndex ? 'bg-white' : 'bg-white opacity-20'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Slide Track */}
      <div
        className="flex pt-20 h-full transition-transform duration-700 ease-in-out relative z-10"
        style={transformStyle}
      >
        {slides.map((slide) => (
          <CarouselSlide key={slide.id} {...slide} />
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
