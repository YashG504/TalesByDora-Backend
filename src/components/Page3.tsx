import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Page3: React.FC<{ data?: any }> = ({ data }) => {
    const navigate = useNavigate();

    // Default content in case no data is passed as a prop
    const content = data || {
        destinationSlug: "dubai", 
        mainTitle: "HandCrafted For You",
        mainDescription: "Carefully crafted luxury journeys to showcase the best of Dubai",
        backgroundUrl: "/3p.jpg",
        cards: [
            { _id: "68a367f5a93dbb6585a08fe5", id: 1, imgSrc: "/3p2.jpg", cardText: "Ultimate Desert-Sea Thrill Quest", longDescription: "Embark on an adrenaline-fueled journey from majestic desert dunes to the sparkling azure sea." },
            { _id: "ANOTHER_MONGO_ID_HERE", id: 2, imgSrc: "/3p3.jpg", cardText: "Curated Heritage & High-Art Escape", longDescription: "Discover the rich tapestry of culture, from ancient souks to contemporary art galleries." },
            // Add other default cards here if needed
        ]
    };
    
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<any>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(304); 
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const getResponsiveValues = () => {
            if (window.innerWidth < 1024) { 
                const cardW = 256;
                const gap = 16;
                setCardWidth(cardW + gap);
                setVisibleCards(1); 
            } else {
                const cardW = 280;
                const gap = 24;
                setCardWidth(cardW + gap);
                setVisibleCards(3);
            }
        };
        getResponsiveValues();
        window.addEventListener('resize', getResponsiveValues);
        return () => window.removeEventListener('resize', getResponsiveValues);
    }, []);
    
    const scrollToIndex = (newIndex: number) => {
        if (cardRef.current) {
            cardRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (index < content.cards.length - visibleCards) {
            const newIndex = index + 1;
            setIndex(newIndex);
            scrollToIndex(newIndex);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            const newIndex = index - 1;
            setIndex(newIndex);
            scrollToIndex(newIndex);
        }
    };
    
    // Handles navigation to the list of ALL itineraries
    const handleExploreAllClick = () => {
        navigate(`/itineraries/${content.destinationSlug}`);
    };
    
    // Handles navigation to the SINGLE selected itinerary
    const handleExploreSelectedClick = () => {
        if (selected && selected._id) {
            // This passes the selected card's data to the next page, preventing errors on navigation
            navigate(`/itinerary/${selected._id}`, { state: { itinerary: selected } });
        } else {
            console.error("Navigation failed: No item selected or selected item has no ._id");
        }
    };
    
    return (
        <div className="h-screen w-full bg-cover bg-center flex flex-col lg:flex-row relative overflow-hidden font-inter text-white">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <AnimatePresence>
                <motion.div
                    key={selected?.imgSrc || content.backgroundUrl}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
                    style={{ backgroundImage: `url(${selected?.imgSrc || content.backgroundUrl})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            </AnimatePresence>
            
            <div className="relative z-10 w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:pl-20">
                <motion.div key={selected?.id || 'intro'} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6 }} className="max-w-md lg:max-w-xl space-y-4 lg:space-y-6">
                    {!selected ? (
                        <>
                            <h1 className="text-5xl md:text-6xl lg:text-[80px] leading-none font-Bebas-Neue">{content.mainTitle}</h1>
                            <p className="text-lg md:text-xl lg:text-[24px] font-light">{content.mainDescription}</p>
                            
                            <div className="pt-2">
                                <motion.button 
                                    onClick={handleExploreAllClick}
                                    whileHover={{ scale: 1.05 }} 
                                    className="hidden lg:inline-block bg-white/30 text-white text-base lg:text-[18px] px-6 py-2 rounded-full backdrop-blur-sm"
                                >
                                    Explore all itineraries
                                </motion.button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-tight font-Bebas-Neue">{selected.cardText}</h1>
                            <p className="text-base md:text-lg lg:text-[20px] font-light">{selected.longDescription}</p>
                        </>
                    )}
                </motion.div>

                <div className="mt-6 lg:mt-8 flex items-center gap-4">
                    {selected && (
                        <>
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                onClick={handleExploreAllClick}
                                className="bg-white/30 text-white text-base lg:text-[18px] px-6 py-2 rounded-full backdrop-blur-sm"
                            >
                                Explore all itineraries
                            </motion.button>
                            
                            <motion.button 
                                onClick={handleExploreSelectedClick}
                                whileHover={{ scale: 1.05 }} 
                                className="bg-white/30 text-white text-base lg:text-[18px] px-6 py-2 rounded-full backdrop-blur-sm"
                            >
                                Explore Itinerary
                            </motion.button>
                        </>
                    )}
                </div>
            </div>
            
            <div className="relative z-10 w-full h-[450px] lg:absolute lg:w-[900px] lg:h-auto lg:bottom-10 lg:right-[-50px] lg:left-auto flex flex-col justify-center px-6 lg:p-0">
                <div className="flex items-center gap-4 lg:gap-6 mb-4">
                    <button 
                        onClick={handlePrevious} 
                        disabled={index <= 0} 
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition disabled:opacity-50 backdrop-blur-sm"
                    >
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                            <ChevronLeft size={20} />
                        </div>
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={index >= content.cards.length - visibleCards} 
                        className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition disabled:opacity-50 backdrop-blur-sm"
                    >
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                            <ChevronRight size={20} />
                        </div>
                    </button>
                </div>
                <div ref={cardRef} className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar">
                    {content.cards.map((item: any) => (
                        <motion.div 
                            key={item.id} 
                            onClick={() => setSelected(item)} 
                            whileHover={{ scale: 1.05 }} 
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="min-w-[256px] lg:min-w-[280px] h-[360px] lg:h-[400px] rounded-2xl overflow-hidden relative shadow-xl cursor-pointer bg-white/10"
                        >
                            <img src={item.imgSrc} alt={item.cardText} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                                <h2 className="text-lg font-bold">{item.cardText}</h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page3;