// In: src/components/HeroHH.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const HeroHH: React.FC<HeroProps> = ({ title, description, backgroundImage }) => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative w-full h-screen max-w-full overflow-hidden bg-black font-nunito">
            <div
                className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black/5" />

            {/* Header */}
            {/* --- FIX: Increased z-index from z-20 to z-30 to ensure it's on top --- */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between p-4 md:p-8 lg:px-14">
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/logo.jpg')",
                        }}
                    />
                    <span className="font-sulphur-point text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                        TalesByDora
                    </span>
                </div>
                <nav className="flex items-center gap-2 md:gap-4">
                    {['Home'].map((item) => (
                        <span
                            key={item}
                            onClick={() => navigate('/')}
                            className="text-white text-lg md:text-xl font-medium transition-all duration-200 px-6 py-3 rounded-full hover:bg-white/10"
                            style={{ cursor: 'pointer' }}
                        >
                            {item}
                        </span>
                    ))}
                </nav>
            </div>

            {/* Hero Text Section (remains at z-20) */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-cormorant font-light text-white leading-tight mb-4">
                    {title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-xl md:max-w-2xl font-light leading-relaxed mb-8">
                    {description}
                </p>

                <div
                    onClick={handleExploreClick}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 shadow-md backdrop-blur-md cursor-pointer transition-transform duration-200 hover:scale-105"
                >
                    <span className="text-white text-base md:text-lg font-medium">
                        Explore
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M21.53 20.47l-5.74-5.74A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.73-1.21l5.74 5.74a.75.75 0 101.06-1.06zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HeroHH;