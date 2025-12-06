import React, { useCallback } from 'react';

// --- Optimizations ---
// 1. Created small, reusable components for the repetitive card elements.
const StatCard = ({ value, text }: { value: string, text: string }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full">
        <div className="space-y-2">
            <div className="text-3xl font-bold text-[#263A48]">{value}</div>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed">{text}</p>
        </div>
    </div>
);

const FloatingCard = ({ img, text, className }: { img: string, text: string, className: string }) => (
    <div className={`absolute bg-white/80 backdrop-blur-sm border border-black rounded-2xl flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4 shadow-xl ${className}`}>
        <img loading="lazy" src={img} alt="Feature icon" className="w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x80/e2e8f0/4a5568?text=:)'; }} />
        <p className="text-[#333] text-base sm:text-[18px] leading-tight sm:leading-[24px] font-normal">{text}</p>
    </div>
);

const Page6: React.FC<{ data?: any }> = ({ data }) => {
    const imageUrl = data?.mainImageUrl || "https://images.unsplash.com/photo-1522895248334-2344473995e6?q=80&w=1887&auto=format&fit=crop";
    const description = data?.description || "Explore Dubai the Dreamers’ Way. We offer more than packages—we offer experiences. From iconic sights to hidden gems, every trip is uniquely yours.";

    // 2. Memoized the click handler.
    const handleExploreClick = useCallback(() => alert("Explore clicked!"), []);

    return (
        <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-12 items-center">
                    <div className="space-y-8 text-center lg:text-left order-last lg:order-first">
                        <div className="flex items-center space-x-2 text-rgba(38, 58, 72, 1)">
                            <span className="text-5xl ">✦</span>
                            <span className="text-lg">Travel . Discover</span>
                        </div>
                        <div>
                            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase">WHY CHOOSE<br />US?</h1>
                        </div>
                        <div className="max-w-md mx-auto lg:mx-0">
                            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
                        </div>
                        <div>
                            <button onClick={handleExploreClick} className="bg-[#263A48] hover:bg-[#1e2f3a] text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-200 shadow-lg uppercase active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#4a7a9c]">
                                EXPLORE
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full max-w-xs mx-auto h-[580px] sm:max-w-sm lg:w-[540px] lg:max-w-none">
                        <div className="absolute top-[45px] left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 p-[0.5cm] border border-black rounded-[280px_280px_0_0/280px_280px_0_0]">
                            <div className="w-[260px] h-[360px] sm:w-[360px] sm:h-[460px] overflow-hidden rounded-t-[130px] sm:rounded-t-[180px]">
                                <img loading="lazy" src={imageUrl} alt="Destination aerial view" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x500/cccccc/ffffff?text=Image'; }} />
                            </div>
                        </div>
                        <FloatingCard img='/6p1.jpg' text="Tailored Itineraries & Expert Guides" className="top-[420px] -left-4 w-64 sm:left-[-95px] sm:w-[320px] lg:top-[420px] lg:left-[-95px]" />
                        <FloatingCard img='/6p1.jpg' text="Exclusive deals with top hotels & vendors" className="top-[90px] -right-4 w-64 sm:right-auto sm:left-[260px] sm:w-[320px] lg:left-[320px]" />
                        <div className="absolute top-[480px] left-[260px] sm:left-[320px] md:left-[420px] text-[rgba(38, 58, 72, 1)] text-[60px] sm:text-[80px] md:text-[100px] opacity-80 z-10">✦</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 lg:mt-0 max-w-lg md:max-w-2xl lg:translate-x-[-9px]">
                    <StatCard value="4.9★" text="Based on 250+ organic reviews across global platforms." />
                    <StatCard value="1K+" text="Journeys Curated Across Europe, Asia, and the Middle East." />
                </div>
            </div>
        </div>
    );
};

// 3. Wrapped component in React.memo for performance, preventing unnecessary re-renders.
export default React.memo(Page6);