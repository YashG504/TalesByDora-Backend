import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 ADD THIS

interface Card {
  id: number;
  imgSrc: string;
  altText: string;
  cardText: string;
  subtitle: string;
}

const cardData: Card[] = [
  {
    id: 1,
    imgSrc: "/TravelByDesire/Honeymoon.jpg",
    altText: "honeymoon",
    cardText: "Honeymoon",
    subtitle: "Romantic escapes for couples",
  },
  {
    id: 2,
    imgSrc: "/TravelByDesire/Family.jpg",
    altText: "family",
    cardText: "Family",
    subtitle: "Creating memories together",
  },
  {
    id: 3,
    imgSrc: "/TravelByDesire/Culture.jpg",
    altText: "culture",
    cardText: "Culture & Art",
    subtitle: "Heritage & artistic immersion",
  },
  {
    id: 4,
    imgSrc: "/TravelByDesire/Backpack.jpg",
    altText: "backpack",
    cardText: "Backpacker",
    subtitle: "Fun trips for friends & solo travelers",
  },
  {
    id: 5,
    imgSrc: "/TravelByDesire/Adventure.jpg",
    altText: "adventure",
    cardText: "Adventure",
    subtitle: "Thrilling experiences & exploration"
  },
  {
    id: 6,
    imgSrc: "/TravelByDesire/wellness.jpg",
    altText: "wellness",
    cardText: "Wellness",
    subtitle: "Relax, rejuvenate & reset",
  }
];

function Page8(): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<Card | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const visibleCards = 3;
  const navigate = useNavigate(); // 👈 ADD THIS

  const handleNext = () => {
    if (index < cardData.length - visibleCards && cardRef.current) {
      if (index === cardData.length - visibleCards - 1) {
        const lastCard = cardRef.current.children[cardData.length - visibleCards] as HTMLDivElement;
        if (lastCard) {
          cardRef.current.scrollTo({ top: lastCard.offsetTop, behavior: "smooth" });
        }
      } else {
        const nextCard = cardRef.current.children[index + 1] as HTMLDivElement;
        if (nextCard) {
          cardRef.current.scrollTo({ top: nextCard.offsetTop, behavior: "smooth" });
        }
      }
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0 && cardRef.current) {
      if (index === 1) {
        cardRef.current.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const prevCard = cardRef.current.children[index - 1] as HTMLDivElement;
        if (prevCard) {
          cardRef.current.scrollTo({ top: prevCard.offsetTop, behavior: "smooth" });
        }
      }
      setIndex((prev) => prev - 1);
    }
  };

  // 👇 ADD THIS FUNCTION
  const handleExploreClick = (desire: string) => {
    const formattedDesire = desire.split(' ')[0].toLowerCase();
    navigate(`/itineraries/${formattedDesire}`);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-start lg:pl-20 px-4 text-white overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={selected?.imgSrc || 'default-bg'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${selected?.imgSrc || '/desirebg.jpg'})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col gap-5 w-full lg:w-[60%] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected?.id || 'intro'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[600px] h-fit flex flex-col gap-4 "
          >
            {!selected ? (
              <>
                <h1 className="text-6xl md:text-8xl leading-none mt-6 mb-4" >
                  TRAVEL BY<br />DESIRE
                </h1>
                <p className="text-xl md:text-1xl" style={{ fontFamily: 'sans-serif', fontWeight: 200 }}>
                  Choose your perfect travel style and explore curated itineraries.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-6xl md:text-[110px]/[90px] leading-none mb-6" style={{ fontFamily: 'sans-serif', fontWeight: 400 }}>
                  {selected.cardText}
                </h1>
                <p className="text-xl md:text-2xl" style={{ fontFamily: 'sans-serif', fontWeight: 200 }}>
                  {selected.subtitle}
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-[40vw] h-[32vh] gap-5 flex flex-col p-4 rounded-2xl justify-center items-center"
                >
                  {/* 👇 ADD onClick HANDLER HERE */}
                  <button
                    onClick={() => handleExploreClick(selected.cardText)}
                    className="text-white font-medium px-5 py-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition"
                  >
                    🔍 Explore {selected.cardText} Itineraries
                  </button>
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full lg:w-[40%] relative flex flex-col items-end mt-10 lg:mt-0 z-10">
        <div className="flex gap-4 absolute top-1/2 left-2 -translate-y-1/2 rotate-90 lg:right-auto lg:-left-16 z-20">
          <motion.span whileHover={{ scale: 1.1 }} className="cursor-pointer" onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
          <motion.span whileHover={{ scale: 1.1 }} className="cursor-pointer" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-[600px] mt-16 h-[650px] pr-4">
          <div ref={cardRef} className="overflow-hidden space-y-6 scroll-smooth">
            {cardData.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: idx * 0.1 }}
                className="min-h-[200px] w-full h-[187px] rounded-2xl overflow-hidden relative cursor-pointer shadow-xl"
              >
                <img src={item.imgSrc} alt={item.altText} className="w-full h-full object-cover absolute inset-0 rounded-2xl" />
                <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl flex flex-col justify-between p-4">
                  <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-bold text-white">{item.cardText.trim()}</h1>
                    <p className="text-sm md:text-lg mt-1 text-white">{item.subtitle}</p>
                  </div>
                  <p className="text-xs md:text-sm text-white text-right">view more</p>
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