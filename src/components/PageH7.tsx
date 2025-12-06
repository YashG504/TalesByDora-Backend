import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  imgSrc: string;
  altText: string;
  cardText: string;
  subtitle: string;
  slug: string;
}

const cardData: Card[] = [
  { id: 1, imgSrc: "/TravelByDesire/Honeymoon.jpg", altText: "honeymoon", cardText: "Honeymoon", subtitle: "Romantic escapes for couples", slug: "honeymoon" },
  { id: 2, imgSrc: "/TravelByDesire/Family.jpg", altText: "family", cardText: "Family", subtitle: "Creating memories together", slug: "family" },
  { id: 3, imgSrc: "/TravelByDesire/Culture.jpg", altText: "culture", cardText: "Culture & Art", subtitle: "Heritage & artistic immersion", slug: "culture" },
  { id: 4, imgSrc: "/TravelByDesire/Backpack.jpg", altText: "backpack", cardText: "Backpacker", subtitle: "Fun trips for friends & solo travelers", slug: "backpacker" },
  { id: 5, imgSrc: "/TravelByDesire/Adventure.jpg", altText: "adventure", cardText: "Adventure", subtitle: "Thrilling experiences & exploration", slug: "adventure" },
  { id: 6, imgSrc: "/TravelByDesire/wellness.jpg", altText: "wellness", cardText: "Wellness", subtitle: "Relax, rejuvenate & reset", slug: "wellness" }
];

const ChevronIcon = ({ rotate = false, className = "w-6 h-6" }: { rotate?: boolean, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${rotate ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

function Page8(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<Card | null>(null);
  const [itemHeight, setItemHeight] = useState<number>(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const visibleCards = 3;

  useEffect(() => {
      if (cardContainerRef.current && cardContainerRef.current.children.length > 0) {
          const firstChild = cardContainerRef.current.children[0] as HTMLDivElement;
          const style = window.getComputedStyle(firstChild);
          const marginBottom = parseFloat(style.marginBottom);
          setItemHeight(firstChild.offsetHeight + marginBottom);
      }
  }, []);

  const handleNext = useCallback(() => {
    const newIndex = index + 1;
    if (newIndex <= cardData.length - visibleCards && cardContainerRef.current) {
        cardContainerRef.current.scrollTo({ top: newIndex * itemHeight, behavior: "smooth" });
        setIndex(newIndex);
    }
  }, [index, itemHeight]);

  const handlePrevious = useCallback(() => {
    const newIndex = index - 1;
    if (newIndex >= 0 && cardContainerRef.current) {
        cardContainerRef.current.scrollTo({ top: newIndex * itemHeight, behavior: "smooth" });
        setIndex(newIndex);
    }
  }, [index, itemHeight]);

  const handleExploreClick = useCallback((slug: string) => {
    navigate(`/itineraries/${slug}`);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-start lg:pl-20 px-4 text-white overflow-hidden relative font-sans">
      <AnimatePresence>
        <motion.div
          key={selected?.imgSrc || 'default-bg'}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${selected?.imgSrc || '/desirebg.jpg'})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col gap-5 w-full lg:w-[60%] z-10 pt-20 lg:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected?.id || 'intro'}
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.6 }}
            className="w-full max-w-[600px] h-fit flex flex-col gap-4 "
          >
            {selected ? (
              <>
                <h1 className="text-5xl md:text-[110px]/[90px] leading-none mb-4 md:mb-6 font-medium">{selected.cardText}</h1>
                <p className="text-xl md:text-2xl font-light">{selected.subtitle}</p>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="w-full max-w-[40vw] h-[32vh] gap-5 flex flex-col p-4 rounded-2xl justify-center items-center">
                  <button onClick={() => handleExploreClick(selected.slug)} className="text-white font-medium px-5 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition">
                    🔍 Explore {selected.cardText} Itineraries
                  </button>
                </motion.div>
              </>
            ) : (
              <>
                <h1 className="text-6xl md:text-8xl leading-none mt-6 mb-4">TRAVEL BY<br />DESIRE</h1>
                <p className="text-xl md:text-1xl font-light">Choose your perfect travel style and explore curated itineraries.</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full lg:w-[40%] relative flex flex-col items-end mt-6 lg:mt-0 z-10 pb-10 lg:pb-0">
        
        <div className="hidden lg:flex gap-4 absolute top-1/2 left-0 -translate-y-1/2 rotate-90 lg:right-auto lg:-left-32 z-30">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ChevronIcon rotate={true} className="w-8 h-9 md:w-10 md:h-10 text-white" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ChevronIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.button>
        </div>
        {/* ----------------------------- */}

        <div className="flex flex-col gap-6 w-full max-w-[600px] mt-10 md:mt-16 h-[500px] md:h-[650px] pr-2 md:pr-4 pl-0 md:pl-12 lg:pl-0">
          
          {/* --- MODIFIED: 'overflow-y-auto' for mobile, 'lg:overflow-hidden' for laptop --- */}
          {/* Also added scrollbar hiding classes for a cleaner mobile look */}
          <div ref={cardContainerRef} className="overflow-y-auto lg:overflow-hidden space-y-6 scroll-smooth h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {cardData.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
                className="min-h-[200px] w-full h-[187px] rounded-2xl overflow-hidden relative cursor-pointer shadow-xl group"
              >
                <img loading="lazy" src={item.imgSrc} alt={item.altText} className="w-full h-full object-cover absolute inset-0 rounded-2xl" />
                <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl flex flex-col justify-between p-4">
                  <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold text-white">{item.cardText.trim()}</h1>
                    <p className="text-sm md:text-lg mt-1 text-white">{item.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center justify-end gap-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="text-base md:text-lg font-medium uppercase tracking-wider">View More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page8;