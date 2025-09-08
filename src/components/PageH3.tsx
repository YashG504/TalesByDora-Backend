import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 1. I've imported the Link component

const cardData = [
  // 👇 2. I've added a 'slug' to each object for the URL path
  {
    id: 1,
    imgSrc: "/h1.jpg",
    altText: "Dubai",
    cardText: "Dubai",
    longDescription: "Where luxury meets tradition in the heart of the Arabian Peninsula.",
    tagline: "Desert Oasis",
    highlights: ["Burj Khalifa", "Desert Safari", "Gold Souk"],
    slug: "dubai",
  },
  {
    id: 2,
    imgSrc: "/h5.jpg",
    altText: "Maldives",
    cardText: "Maldives",
    longDescription: "Overwater villas and crystal-clear lagoons in the Indian Ocean.",
    tagline: "Tropical Paradise",
    highlights: ["Water Villas", "Coral Reefs", "Sunset Cruises"],
    slug: "maldives",
  },
  {
    id: 3,
    imgSrc: "/h2.jpg",
    altText: "Thailand",
    cardText: "Thailand",
    longDescription: "Ancient temples, pristine beaches, and vibrant street life.",
    tagline: "Land of Smiles",
    highlights: ["Temple Tours", "Island Hopping", "Street Food"],
    slug: "thailand",
  },
  {
    id: 4,
    imgSrc: "/h6.jpg",
    altText: "Australia",
    cardText: "Australia",
    longDescription: "Unique wildlife, stunning landscapes, and vibrant cities.",
    tagline: "Land Down Under",
    highlights: ["Great Barrier Reef", "Sydney Opera", "Outback Tours"],
    slug: "australia",
  },
  {
    id: 5,
    imgSrc: "/h4.jpg",
    altText: "Bali",
    cardText: "Bali",
    longDescription: "Spiritual temples, lush rice terraces, and artistic culture.",
    tagline: "Island of Gods",
    highlights: ["Rice Terraces", "Temple Visits", "Volcano Trekking"],
    slug: "bali",
  },
  {
    id: 6,
    imgSrc: "/h7.jpg",
    altText: "Europe",
    cardText: "Europe",
    longDescription: "Historic cities, art galleries, and culinary adventures.",
    tagline: "Timeless Elegance",
    highlights: ["Historic Cities", "Art Museums", "Fine Dining"],
    slug: "europe",
  },
  {
    id: 7,
    imgSrc: "/h3.jpg",
    altText: "Mauritius",
    cardText: "Mauritius",
    longDescription: "Tropical sophistication with pristine beaches and rich culture.",
    tagline: "Paradise Found",
    highlights: ["Beach Resorts", "Cultural Tours", "Water Sports"],
    slug: "mauritius",
  },
  {
  id: 8,
  imgSrc: "https://images.unsplash.com/photo-1621338613872-1cca26107ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwYmVzdHxlbnwwfHwwfHx8MA%3D%3D",
  altText: "Andaman & Nicobar Islands",
  cardText: "Andaman & Nicobar",
  longDescription: "A tropical paradise of turquoise waters, coral reefs, and pristine beaches, blending adventure with tranquility.",
  tagline: "Islands of Serenity",
  highlights: ["Scuba Diving", "Historic Sites", "Island Hopping"],
  slug: "andaman"
}

];

export default function HandCrafted() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<(typeof cardData[0]) | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [gapWidth, setGapWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMeasurements = () => {
      if (cardRef.current && containerRef.current) {
        const containerStyle = window.getComputedStyle(containerRef.current);
        const gap = parseFloat(containerStyle.columnGap) || 0;
        setGapWidth(gap);
        const width = cardRef.current.offsetWidth;
        setCardWidth(width);
        const containerWidth = containerRef.current.offsetWidth;
        const cardsVisible = Math.floor(containerWidth / (width + gap));
        setVisibleCards(cardsVisible);
        setMaxIndex(Math.max(0, cardData.length - cardsVisible));
      }
    };
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  const handleNext = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center flex flex-col lg:flex-row relative overflow-hidden font-inter text-white">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={selected?.imgSrc || "default-bg"}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
          style={{ backgroundImage: `url("/home-handcrafted.jpg")` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* LEFT TEXT SECTION */}
      <div className="z-10 w-full lg:w-1/2 px-6 sm:px-10 lg:pl-20 pt-10 flex flex-col justify-center">
        <motion.div
          key={selected?.id || "intro"}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] space-y-4 sm:space-y-6"
        >
          {!selected ? (
            <>
              <h1 className="text-4xl sm:text-5xl lg:text-[80px] leading-tight font-Bebas-Neue">
                Travel<br />Beyond<br />Destination
              </h1>
              <p className="text-base sm:text-lg lg:text-[21px] font-light">
                Handpicked luxury destinations crafted for the discerning traveler.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl lg:text-[60px] leading-tight font-Bebas-Neue">
                {selected.cardText}
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-[33px] font-Bebas-Neue ">
                {selected.tagline}
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] font-light mt-2">
                {selected.longDescription}
              </p>
              <div className="mt-4">
                <h3 className="text-sm sm:text-base lg:text-[18px] font-semibold mb-1">
                  Top Highlights:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base font-light">
                  {selected.highlights?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </motion.div>

        {/* 👇 3. Wrapped the "Explore" button with the Link component */}
        {selected && (
          <Link to={`/destinations/${selected.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 bg-white/30 text-white text-sm sm:text-base px-4 py-2 rounded-full w-fit"
            >
              🔍 Explore
            </motion.button>
          </Link>
        )}
      </div>

      {/* RIGHT CARD SECTION */}
      <div className="relative w-full lg:max-w-[calc(3*270px+2*24px)] px-4 sm:px-6 md:px-8 lg:px-10 mt-6 md:mt-8 lg:absolute lg:bottom-6 lg:right-0 lg:mt-0 z-10">
        <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
          {/* Prev Button */}
          <button onClick={handlePrevious} disabled={index <= 0} className="p-1.5 sm:p-2 md:p-2.5 bg-white/20 rounded-full hover:bg-white/40 transition disabled:opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Next Button */}
          <button onClick={handleNext} disabled={index >= maxIndex} className="p-1.5 sm:p-2 md:p-2.5 bg-white/20 rounded-full hover:bg-white/40 transition disabled:opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="overflow-hidden w-full pb-4">
          <motion.div
            ref={containerRef}
            animate={{ x: Math.round(-index * (cardWidth + gapWidth)) }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex gap-6"
          >
            {cardData.map((item, idx) => (
              // 👇 4. Wrapped each card with the Link component
              <Link to={`/destinations/${item.slug}`} key={item.id}>
                <motion.div
                  ref={idx === 0 ? cardRef : null}
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] h-[320px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden relative shadow-xl cursor-pointer bg-white/10"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.altText}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                    <h2 className="text-base sm:text-lg font-bold">{item.cardText}</h2>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}