import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface PageH1Props {
  onHomeClick: () => void;
  onDestinationsClick: () => void;
  onAboutClick: () => void;
  onDesireClick: () => void; // ADDED: Prop for the new "Desire" link
}

const PageH1: React.FC<PageH1Props> = ({ onHomeClick, onDestinationsClick, onAboutClick, onDesireClick }) => {
  const navigate = useNavigate();

  const cardData = [
    { id: 1, imgSrc: "/Destination/dubai2.jpg", altText: "Dubai", cardText: "Dubai", slug: "dubai" },
    { id: 2, imgSrc: "/Destination/maldives.jpg", altText: "Maldives", cardText: "Maldives", slug: "maldives" },
    { id: 3, imgSrc: "/Destination/Thailand.jpg", altText: "Thailand", cardText: "Thailand", slug: "thailand" },
    { id: 4, imgSrc: "/Destination/australia.jpg", altText: "Australia", cardText: "Australia", slug: "australia" },
    { id: 5, imgSrc: "/Destination/Bali.jpg", altText: "Bali", cardText: "Bali", slug: "bali" },
    { id: 6, imgSrc: "/Destination/europe.jpg", altText: "Europe", cardText: "Europe", slug: "europe" },
    { id: 7, imgSrc: "/Destination/mauritius.jpg", altText: "Mauritius", cardText: "Mauritius", slug: "mauritius" },
    { id: 8, imgSrc: "https://images.unsplash.com/photo-1621338613872-1cca26107ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwYmVzdHxlbnwwfHwwfHx8MA%3D%3D", altText: "Andaman&NicobarIsland", cardText: "Andaman & Ni", slug: "andaman" },
  ];

  // UPDATED: Changed "Itineraries" to "Desire" and linked its handler
  const navItems = [
    { label: 'Home', handler: onHomeClick },
    { label: 'About us', handler: onAboutClick },
    { label: 'Desire', handler: onDesireClick },
  ];

  const [index, setIndex] = useState(0);
  const controls = useAnimationControls();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cardWidth, setCardWidth] = useState(200);
  const [gap, setGap] = useState(24);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  const handleEnquireClick = () => {
    navigate('/enquire');
  };

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardWidth(174);
        setGap(24);
        setVisibleCards(3);
        setIsSmallScreen(false);
      } else if (width >= 768) {
        setCardWidth(164);
        setGap(20);
        setVisibleCards(2);
        setIsSmallScreen(false);
      } else {
        setCardWidth(154);
        setGap(16);
        setVisibleCards(2);
        setIsSmallScreen(true);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const itemWidth = cardWidth + gap;

  const handleNext = () => {
    const maxIndex = cardData.length - visibleCards;
    const newIndex = Math.min(index + 1, maxIndex);
    if (newIndex !== index) {
      setIndex(newIndex);
      controls.start({
        x: -newIndex * itemWidth,
        transition: { type: 'spring', stiffness: 200, damping: 25 },
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(index - 1, 0);
    if (newIndex !== index) {
      setIndex(newIndex);
      controls.start({
        x: -newIndex * itemWidth,
        transition: { type: 'spring', stiffness: 200, damping: 25 },
      });
    }
  };

  const handleDotClick = (dotIndex: number) => {
    if (dotIndex !== index) {
      setIndex(dotIndex);
      controls.start({
        x: -dotIndex * itemWidth,
        transition: { type: 'spring', stiffness: 200, damping: 25 },
      });
    }
  };

  const numPages = cardData.length > visibleCards ? cardData.length - visibleCards + 1 : 0;

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 20,
          right: 20,
          height: 106,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
          padding: '0 10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }} onClick={onHomeClick}>
          <div
            style={{
              width: 38,
              height: 38,
              background: "url('/logo.jpg') center / cover no-repeat",
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(18px, 3vw, 30px)',
              color: '#FFF',
            }}
          >
            TalesByDora
          </span>
        </div>

        {/* Hamburger menu for small screens */}
        {isSmallScreen && (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 30 }}
              aria-label="Toggle navigation menu"
            >
              <svg width="30" height="30" viewBox="0 0 19 19" fill="white">
                <path d="M4 6h16M4 12h16m-7 6h7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '-29px',
                    right: '33px',
                    backgroundColor: 'rgba(255,255,255,0.16)',
                    backdropFilter: 'blur(1px)',
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {navItems.map(item => (
                    <motion.span
                      key={item.label}
                      onClick={() => {
                        item.handler();
                        setIsMenuOpen(false);
                      }}
                      whileHover={{ y: -1, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#FFF',
                        cursor: 'pointer',
                        padding: '5px 10px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.label}
                    </motion.span>
                  ))}
                  <motion.button
                    onClick={handleEnquireClick}
                    whileHover={{ y: -1, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#FFF',
                      cursor: 'pointer',
                      padding: '5px 10px',
                      whiteSpace: 'nowrap',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    Enquire Now
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Regular nav for larger screens */}
        {!isSmallScreen && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
              maxWidth: '60%',
            }}
          >
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {navItems.map(item => (
                <span
                  key={item.label}
                  onClick={item.handler}
                  style={{
                    fontSize: 'clamp(14px, 2vw, 21px)',
                    fontWeight: 500,
                    color: '#FFF',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {item.label}
                </span>
              ))}
            </div>
            
            <div
              onClick={onDestinationsClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.16)',
                boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                backdropFilter: 'blur(34.5px)',
                borderRadius: 25,
                padding: '8px 12px',
                height: 40,
                gap: 8,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  color: '#FFF',
                  fontSize: 'clamp(14px, 1.5vw, 19px)',
                  fontWeight: 500,
                }}
              >
                Destination
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M21.53 20.47l-5.74-5.74A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.73-1.21l5.74 5.74a.75.75 0 101.06-1.06zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {isSmallScreen ? (
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 20,
            left: 20,
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {/* Text block */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#FFF',
              fontSize: 'clamp(30px, 8vw, 60px)',
              lineHeight: '160%',
              textAlign: 'center',
              paddingBottom:'60px',
            }}
          >
            <div>Travel Beyond Dreams</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 'clamp(12px, 4vw, 14px)',
                lineHeight: '160%',
                marginTop: '10px',
              }}
            >
              At Tales By Dora, we don’t just plan trips—we script tales you will tell forever.
            </p>
          </div>

          {/* Cards wrapper */}
          <div
            style={{
              whiteSpace: 'nowrap',
              paddingBottom: 8,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="no-scrollbar"
          >
            <motion.div
              animate={controls}
              style={{
                display: 'inline-flex',
                gap: `${gap}px`,
                cursor: 'grab',
                userSelect: 'none',
              }}
              drag="x"
              dragConstraints={{ left: -(cardData.length * itemWidth - visibleCards * itemWidth), right: 0 }}
              dragElastic={0.1}
              onDragEnd={(event, info) => {
                const newIndex = Math.round(-controls.get().x / itemWidth);
                const clampedIndex = Math.min(Math.max(newIndex, 0), cardData.length - visibleCards);
                setIndex(clampedIndex);
                controls.start({
                  x: -clampedIndex * itemWidth,
                  transition: { type: 'spring', stiffness: 200, damping: 25 },
                });
              }}
            >
              <AnimatePresence>
                {cardData.map((item) => (
                  <Link to={`/destinations/${item.slug}`} key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        width: cardWidth,
                        height: 200,
                        borderRadius: 12,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        position: 'relative',
                        cursor: 'pointer',
                        display: 'inline-block',
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.altText}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <h2
                        style={{
                          fontSize: 'clamp(14px, 2vw, 21px)',
                          fontWeight: 500,
                          position: 'absolute',
                          bottom: 10,
                          right: 20,
                          color: '#FFF',
                          textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.cardText}
                      </h2>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Navigation controls container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            {/* Navigation arrows */}
            <div
              style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
              }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handlePrevious}
                style={{ cursor: 'pointer', border: 'none' }}
                className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-200 focus:outline-none"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleNext}
                style={{ cursor: 'pointer', border: 'none' }}
                className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-200 focus:outline-none"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Indicator Dots for Small Screens */}
            {numPages > 1 && (
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 4 }}>
                {Array.from({ length: numPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      opacity: index === i ? 1 : 0.4,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Large screen layout
        <>
          <div
            style={{
              position: 'absolute',
              width: 'clamp(280px, 25vw, 384px)',
              height: 'clamp(280px, 35vh, 402px)',
              left: '5vw',
              bottom: '8vh',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#FFF',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              paddingBottom: '20px',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(50px, 8vw, 110px)',
                lineHeight: '100%',
                textTransform: 'capitalize',
              }}
            >
              Travel Beyond Dreams
            </div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                lineHeight: '160%',
                marginTop: '24px',
              }}
            >
              At Tales By Dora, we don’t just plan trips—we script tales<br /> you will tell forever.
            </p>
            <motion.button
              onClick={handleEnquireClick}
              whileHover={{ y: -1, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              style={{
                fontFamily: "sans-serif",
                fontWeight: 390,
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#FFF',
                cursor: 'pointer',
                padding: '12px 24px',
                whiteSpace: 'nowrap',
                background: 'rgba(255,255,255,0.11)',
                backdropFilter: 'blur(34.5px)',
                border: 'none',
                borderRadius: '25px',
                textAlign: 'center',
                marginTop: '20px',
                alignSelf: 'flex-start'
              }}
            >
              Enquire Now
            </motion.button>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 30,
              right: 20,
              width: 'clamp(300px, 40vw, 655px)',
              zIndex: 20,
              overflow: 'hidden',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(18px, 3vw, 26px)',
                fontWeight: 500,
                marginBottom: 10,
                color: '#FFF',
              }}
            >
              Top Destinations
            </h1>

            <motion.div
              animate={controls}
              style={{
                display: 'flex',
                gap: `${gap}px`,
                paddingBottom: '8px',
                willChange: 'transform',
                minWidth: `${cardData.length * itemWidth}px`,
              }}
            >
              <AnimatePresence>
                {cardData.map((item) => (
                  <Link to={`/destinations/${item.slug}`} key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        minWidth: cardWidth,
                        height: 200,
                        borderRadius: 12,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        position: 'relative',
                        cursor: 'pointer',
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.altText}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <h2
                        style={{
                          fontSize: 'clamp(14px, 2vw, 21px)',
                          fontWeight: 500,
                          position: 'absolute',
                          bottom: 10,
                          right: 20,
                          color: '#FFF',
                          textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.cardText}
                      </h2>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Navigation controls container */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
              {/* Arrows */}
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  justifyContent: 'flex-start',
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handlePrevious}
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-200 focus:outline-none"
                  aria-label="Previous"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleNext}
                  style={{ cursor: 'pointer', border: 'none' }}
                  className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 transition-all duration-200 focus:outline-none"
                  aria-label="Next"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Indicator Dots for Large Screens */}
              {numPages > 1 && (
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-start', paddingLeft: 4 }}>
                  {Array.from({ length: numPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleDotClick(i)}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        opacity: index === i ? 1 : 0.4,
                        transition: 'opacity 0.2s ease-in-out',
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PageH1;

