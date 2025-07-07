"use client"
import Image from 'next/image';
import React from 'react';
import TailwindIcon from "@/assets/Icons/tailwindcss-icon.svg"
import NextJSIcon from "@/assets/Icons/nextjs-vector-icon.svg"
import MaterialUIIcon from "@/assets/Icons/icons8-material-ui-480.svg"
import ShadCNIcon from "@/assets/Icons/shadcn-ui-seeklogo.svg"
import GoogleAnalytics from "@/assets/Icons/google_analytics-icon.svg"
import GoogleAdSense from "@/assets/Icons/google_adsense-icon.svg"

const Stack = () => {
  const techStack = [
    { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Next.js', icon: NextJSIcon },
    { name: 'Material UI', icon: MaterialUIIcon },
    { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
    { name: 'Docker', icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Sass', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png' },
    { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
    { name: 'Vs Code', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
    { name: 'Github', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
    { name: 'Shadcn', icon: ShadCNIcon },
    { name: 'Google Analytics', icon: GoogleAnalytics },
    { name: 'GoogleAdSense', icon: GoogleAdSense },
    { name: 'Sales Representative', icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png' },
  ];

  return (
    <div className="py-10 overflow-hidden bg-gray-100" id='techstack'>
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Tech Stack</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-wrapper">
          {[0, 1].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex animate-marquee whitespace-nowrap">
              {techStack.map((tech, index) => (
                <div
                  key={`${tech.name}-${setIndex}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px] mx-4"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="mb-2 cursor-pointer tech-item"
                  />
                  <span className="text-sm text-center text-gray-600">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee-wrapper {
          display: flex;
          width: max-content;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-transform: translate;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .tech-item:hover ~ .animate-marquee,
        .tech-item:hover {
          animation-play-state: paused;
        }
        .animate-marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Stack;