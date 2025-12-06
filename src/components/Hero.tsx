import React, { useCallback } from 'react';

// --- Optimizations ---
// 1. Moved static data outside the component to create it only once.
const DEFAULT_HERO_DATA = {
  headline: "The Bold Dubai",
  backgroundImageUrl: "/background.jpg",
  description: "Dubai, a city of superlatives, where futuristic skyscrapers touch the clouds and golden deserts stretch endlessly. Experience luxury shopping, world-class dining, and architectural marvels in this cosmopolitan oasis."
};

// 2. Defined navigation links once to avoid duplication.
const NAV_LINKS = ['Home', 'About us', 'Itineraries'];

const Hero: React.FC<{ data?: any; destinationName?: string }> = ({ data, destinationName }) => {
  const heroData = data || DEFAULT_HERO_DATA;
  const currentDestination = destinationName || "Dubai";

  // 3. Memoized the scroll handler to prevent re-creation on re-renders.
  const handleScrollDown = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div
      onClick={handleScrollDown}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
        fontFamily: "'Nunito', sans-serif",
        cursor: 'pointer',
      }}
    >
      {/* Self-contained CSS for mobile view is kept as is */}
      <style>{`
        .mobile-nav-links { display: none; }
        @media (max-width: 768px) {
          .hero-header { flex-wrap: nowrap !important; justify-content: space-between !important; }
          .desktop-nav-links { display: none !important; }
          .mobile-nav-links { display: flex !important; justify-content: center; align-items: center; gap: 25px; width: 100%; padding: 15px 0; position: absolute; top: 80px; left: 0; z-index: 2; }
          .main-content { top: 55% !important; }
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `url('${heroData.backgroundImageUrl}') center / cover no-repeat`,
          zIndex: 0,
        }}
      />
      <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />
      
      {/* Header */}
      <header className="hero-header" style={{
        position: 'absolute', top: 0, left: 0, padding: '30px 4%', boxSizing: 'border-box',
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '20px', zIndex: 2
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
          <div style={{ width: 'clamp(30px, 6vw, 38px)', height: 'clamp(30px, 6vw, 38px)', background: "url('/logo.jpg') center / cover no-repeat", borderRadius: '50%' }} />
          <span style={{ fontFamily: "'Sulphur Point', sans-serif", fontWeight: 600, fontSize: 'clamp(24px, 4vw, 35px)', color: '#FFF' }}>TalesByDora</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* DESKTOP-ONLY links */}
          <nav className="desktop-nav-links" style={{ display: 'flex', gap: 30 }}>
            {NAV_LINKS.map((item) => ( <span key={item} style={{ fontSize: 'clamp(16px, 2.5vw, 21px)', fontWeight: 550, color: '#FFF', cursor: 'pointer' }}>{item}</span> ))}
          </nav>
          {/* Explore button */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.16)', boxShadow: '0px 4px 4px rgba(0,0,0,0.25)', backdropFilter: 'blur(34.5px)', borderRadius: 25, padding: '8px 16px', height: 40, gap: 8 }}>
            <span style={{ color: '#FFF', fontSize: 'clamp(15px, 2vw, 19px)', fontWeight: 500, whiteSpace: 'nowrap' }}>Explore {currentDestination}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" viewBox="0 0 24 24"><path d="M21.53 20.47l-5.74-5.74A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.73-1.21l5.74 5.74a.75.75 0 101.06-1.06zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" /></svg>
          </div>
        </div>
      </header>

      {/* MOBILE-ONLY NAVIGATION LINKS */}
      <nav className="mobile-nav-links">
        {NAV_LINKS.map((item) => (
          <span key={item} style={{ fontSize: '16px', fontWeight: 550, color: '#FFF', cursor: 'pointer' }}>{item}</span>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main-content" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10,
        position: 'absolute', width: '90%', maxWidth: 884, left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)', zIndex: 2
      }}>
        <h1 style={{ width: '100%', fontFamily: "'Cormorant Garamond', serif", fontWeight: 200, fontSize: 'clamp(48px, 10vw, 122px)', lineHeight: '1.1', textAlign: 'center', textTransform: 'capitalize', color: '#FFFFFF', margin: 0 }}>
          {heroData.headline}
        </h1>
        <p style={{ width: '100%', fontFamily: "'Nunito', sans-serif", fontWeight: 50, fontSize: 'clamp(16px, 2.5vw, 23px)', lineHeight: '1.5', textAlign: 'center', color: '#E4E6E8', margin: 0 }}>
          {heroData.description}
        </p>
      </main>
    </div>
  );
};

export default Hero;