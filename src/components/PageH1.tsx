import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, AnimationPlaybackControls, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface PageH1Props {
  onHomeClick: () => void;
  onDestinationsClick: () => void;
  onAboutClick: () => void;
  onDesireClick: () => void;
}

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

const PageH1: React.FC<PageH1Props> = ({ onHomeClick, onDestinationsClick, onAboutClick, onDesireClick }) => {
  const navigate = useNavigate();
  
  // We use a motion value for the x-position to control it imperatively
  const xTranslation = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cardWidth, setCardWidth] = useState(200);
  const [gap, setGap] = useState(24);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Duplicate data to create the seamless infinite loop effect
  const marqueeData = [...cardData, ...cardData];

  const navItems = [
    { label: 'Home', handler: onHomeClick },
    { label: 'About us', handler: onAboutClick },
    { label: 'Desire', handler: onDesireClick },
  ];

  const handleEnquireClick = () => navigate('/enquire');

  // 1. Calculate Dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const small = width < 768;
      setIsSmallScreen(small);
      if (width >= 1024) {
        setCardWidth(174); setGap(24);
      } else if (width >= 768) {
        setCardWidth(164); setGap(20);
      } else {
        setCardWidth(154); setGap(16);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 2. Continuous Animation Logic
  useEffect(() => {
    const itemWidth = cardWidth + gap;
    // Calculate the total width of one complete set of cards
    const finalPosition = -cardData.length * itemWidth;

    // UPDATE: Set duration based on screen size (Lower number = Faster)
    const duration = isSmallScreen ? 20 : 30;

    // Start the animation
    const controls = animate(xTranslation, finalPosition, {
      ease: "linear",
      duration: duration, 
      repeat: Infinity,
      repeatType: "loop", 
      repeatDelay: 0,
    });

    animationRef.current = controls;

    // Cleanup on unmount
    return () => controls.stop();
  }, [cardWidth, gap, xTranslation, isSmallScreen]); // Added isSmallScreen to dependencies

  // Pause on hover
  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.play();

  const mainContentContainerStyle: React.CSSProperties = isSmallScreen 
    ? { position: 'absolute', bottom: 30, left: 20, right: 20, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 20 }
    : { };

  const textContentStyle: React.CSSProperties = isSmallScreen 
    ? { fontFamily: "'Cormorant Garamond', serif", color: '#FFF', textAlign: 'center' }
    : { position: 'absolute', width: 'clamp(280px, 25vw, 384px)', left: '5vw', bottom: '8vh', zIndex: 2, fontFamily: "'Cormorant Garamond', serif", color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '20px' };

  const sliderContainerStyle: React.CSSProperties = isSmallScreen
    ? { display: 'flex', flexDirection: 'column', gap: 10 }
    : { position: 'absolute', bottom: 30, right: 20, width: 'clamp(300px, 40vw, 655px)', zIndex: 20, overflow: 'hidden' };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ position: 'absolute', top: 10, left: 20, right: 20, height: 106, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }} onClick={onHomeClick}>
          <div style={{ width: 38, height: 38, background: "url('/logo.jpg') center / cover no-repeat", borderRadius: '50%' }} />
          <span style={{ fontFamily: "sans-serif", fontWeight: 600, fontSize: 'clamp(18px, 3vw, 30px)', color: '#FFF' }}>TalesByDora</span>
        </div>
        {isSmallScreen ? (
          <div style={{ position: 'relative' }}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 30 }} aria-label="Toggle navigation menu"><svg width="30" height="30" viewBox="0 0 19 19" fill="white"><path d="M4 6h16M4 12h16m-7 6h7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.9, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: -20 }} transition={{ duration: 0.2 }}
                  style={{ position: 'absolute', top: '40px', right: '0px', backgroundColor: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(1px)', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[...navItems, { label: 'Enquire Now', handler: handleEnquireClick }].map(item => (
                    <motion.button key={item.label} onClick={() => { item.handler(); setIsMenuOpen(false); }} whileHover={{ y: -1, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      style={{ background: 'none', border: 'none', fontSize: '16px', fontWeight: 400, color: '#FFF', cursor: 'pointer', padding: '5px 10px', whiteSpace: 'nowrap', textAlign: 'left' }}>
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {navItems.map(item => (<span key={item.label} onClick={item.handler} style={{ fontSize: 'clamp(14px, 2vw, 21px)', fontWeight: 500, color: '#FFF', cursor: 'pointer' }}>{item.label}</span>))}
            <div onClick={onDestinationsClick} style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.16)', boxShadow: '0px 4px 4px rgba(0,0,0,0.25)', backdropFilter: 'blur(34.5px)', borderRadius: 25, padding: '8px 12px', gap: 8, cursor: 'pointer' }}>
              <span style={{ color: '#FFF', fontSize: 'clamp(14px, 1.5vw, 19px)', fontWeight: 500 }}>Destination</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" viewBox="0 0 24 24"><path d="M21.53 20.47l-5.74-5.74A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.73-1.21l5.74 5.74a.75.75 0 101.06-1.06zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" /></svg>
            </div>
          </div>
        )}
      </div>

      {/* Unified Content Area */}
      <div style={mainContentContainerStyle}>
        {/* Text Block */}
        <div style={textContentStyle}>
          <div style={{ fontSize: isSmallScreen ? 'clamp(30px, 8vw, 60px)' : 'clamp(50px, 8vw, 110px)', lineHeight: isSmallScreen ? '160%' : '100%' }}>
            Travel Beyond Dreams
          </div>
          <p style={{ fontFamily: "sans-serif", fontSize: 'clamp(12px, 4vw, 14px)', lineHeight: '160%', marginTop: isSmallScreen ? '10px' : '24px' }}>
            At Tales By Dora, we don’t just plan trips—we script tales{!isSmallScreen && <br />} you will tell forever.
          </p>
          {!isSmallScreen && (
            <motion.button onClick={handleEnquireClick} whileHover={{ y: -1, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              style={{ fontFamily: "sans-serif", fontWeight: 390, fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#FFF', cursor: 'pointer', padding: '12px 24px', background: 'rgba(255,255,255,0.11)', backdropFilter: 'blur(34.5px)', border: 'none', borderRadius: '25px', marginTop: '20px', alignSelf: 'flex-start' }}>
              Enquire Now
            </motion.button>
          )}
        </div>

        {/* Slider Block (Marquee) */}
        <div style={sliderContainerStyle}>
          {!isSmallScreen && <h1 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 500, marginBottom: 10, color: '#FFF' }}>Top Destinations</h1>}
          
          <div 
            className="no-scrollbar" 
            style={{ paddingBottom: 8, whiteSpace: 'nowrap', overflow: 'hidden' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
                style={{ x: xTranslation, display: 'inline-flex', gap: `${gap}px` }}
            >
              {/* We map over the duplicated marqueeData to create the infinite loop */}
              {marqueeData.map((item, idx) => (
                <Link to={`/destinations/${item.slug}`} key={`${item.id}-${idx}`}>
                  <motion.div whileHover={{ scale: 1.05 }} style={{ width: cardWidth, height: 200, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', position: 'relative' }}>
                    <img draggable="false" loading="lazy" src={item.imgSrc} alt={item.altText} style={{ width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' }} />
                    <h2 style={{ fontSize: 'clamp(14px, 2vw, 21px)', fontWeight: 500, position: 'absolute', bottom: 10, right: 20, color: '#FFF', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
                      {item.cardText}
                    </h2>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
          {/* Note: Manual buttons and dots are removed as they are not standard for continuous marquees */}
        </div>
      </div>
    </div>
  );
};

export default PageH1;