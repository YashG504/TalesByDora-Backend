import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircleMore, Instagram, Linkedin, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Optimizations ---
// 1. Moved static data outside to create it only once.
const DEFAULT_PAGE_DATA = {
    headline: "The Bold Dubai",
    backgroundImageUrl: "/background.jpg",
    infoCards: [
        { "title": "Explore", "subtitle": "Discover iconic landmarks, hidden gems, and unforgettable experiences across Dubai." },
        { "title": "Itineraries", "subtitle": "Browse expertly curated Dubai itineraries tailored to your travel style and budget." },
        { "title": "Enquire", "subtitle": "Have questions? Get personalized assistance for your perfect Dubai getaway." }
    ]
};

const SOCIAL_LINKS = [
    { href: "https://wa.me/919019748508", icon: <MessageCircleMore size={24} /> },
    { href: "https://www.instagram.com/talesbydora/", icon: <Instagram size={24} /> },
    { href: "https://www.linkedin.com/company/talesbydora", icon: <Linkedin size={24} /> },
];

const Page1: React.FC<{ data?: any; destinationName?: string }> = ({ data, destinationName }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pageData = data || DEFAULT_PAGE_DATA;
    const currentDestination = destinationName || "Dubai";

    // 2. Memoized handler functions with useCallback.
    const handleCardClick = useCallback((title: string) => {
        const destinationSlug = currentDestination.toLowerCase();
        const availableDeepDives = ['dubai', 'thailand', 'bali', 'mauritius', 'maldives', 'andaman'];

        if (title === 'Itineraries') navigate(`/itineraries/${destinationSlug}`);
        else if (title === 'Enquire') navigate('/enquire');
        else if (title === 'Explore' && availableDeepDives.includes(destinationSlug)) {
            navigate(`/destinations/${destinationSlug}/deep-dive`);
        }
    }, [currentDestination, navigate]);

    const handleScrollTo = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
    }, []);

    // 3. Memoized navLinks array with useMemo.
    const navLinks = useMemo(() => [
        { name: 'Home', action: () => { navigate('/'); setIsMenuOpen(false); } },
        { name: 'About us', action: () => handleScrollTo('about-us') },
        { name: 'Itineraries', action: () => { navigate(`/itineraries/${currentDestination.toLowerCase()}`); setIsMenuOpen(false); } }
    ], [navigate, currentDestination, handleScrollTo]);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
            {/* 4. Combined style tags into one. */}
            <style>{`
              .social-icons-container { display: flex; }
              .social-icon { width:44px; height:44px; background-color:rgba(255,255,255,0.1); border-radius:6px; display:flex; align-items:center; justify-content:center; color:white; border:1px solid rgba(255,255,255,0.3); backdrop-filter:blur(5px); }
              @media (max-width: 768px) {
                .page1-headline { top: 30vh !important; left: 50% !important; transform: translateX(-50%) !important; width: 90% !important; text-align: center !important; }
                .page1-infocards-container { position: absolute !important; bottom: 8vh !important; left: 50% !important; transform: translateX(-50%) !important; width: 100% !important; flex-direction: row !important; justify-content: center !important; gap: 15px !important; padding: 0 10px !important; top: auto !important; right: auto !important; }
                .page1-infocard-button { width: auto !important; min-height: unset !important; padding: 12px 22px !important; flex-direction: row !important; gap: 8px !important; }
                .page1-infocard-button .card-subtitle, .page1-infocard-button .card-divider { display: none !important; }
                .page1-infocard-button .card-title-container { margin-bottom: 0 !important; font-size: clamp(14px, 4vw, 16px) !important; }
                .social-icons-container { display: none !important; }
              }
            `}</style>

            <div style={{ position: 'absolute', width: '100%', height: '100%', background: `url('${pageData.backgroundImageUrl}') center / cover no-repeat`, zIndex: 0 }} />
            <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />
            
            <header className="absolute top-0 left-0 w-full p-5 md:py-9 md:px-16 box-border h-auto flex justify-between items-center z-20">
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <div style={{ width: 'clamp(30px, 5vw, 38px)', height: 'clamp(30px, 5vw, 38px)', background: "url('/logo.jpg') center / cover no-repeat", borderRadius: '50%' }} />
                    <span style={{ fontFamily: "'Sulphur Point', sans-serif", fontWeight: 600, fontSize: 'clamp(24px, 4vw, 35px)', color: '#FFF' }}>TalesByDora</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(item => <span key={item.name} onClick={item.action} className="text-lg font-medium text-white cursor-pointer hover:scale-105 transition-transform">{item.name}</span>)}
                    <div onClick={() => handleScrollTo('itineraries')} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 gap-2 cursor-pointer">
                        <span className="text-white text-lg font-medium whitespace-nowrap">Explore {currentDestination}</span>
                        <Search size={19} color="white" />
                    </div>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(true)} className="text-white z-30">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-10">
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-5 text-white"><X size={30} /></button>
                        {navLinks.map(item => <span key={item.name} onClick={item.action} className="text-3xl font-medium text-white cursor-pointer">{item.name}</span>)}
                        <div onClick={() => handleScrollTo('itineraries')} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 gap-3 cursor-pointer">
                            <span className="text-white text-xl font-medium whitespace-nowrap">Explore {currentDestination}</span>
                            <Search size={22} color="white" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="page1-headline" style={{ position: 'absolute', width: 'clamp(280px, 40vw, 382px)', left: '5%', top: '25vh', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(60px, 12vw, 110px)', lineHeight: '1.1', textTransform: 'capitalize', color: '#FFF', zIndex: 2 }} dangerouslySetInnerHTML={{ __html: pageData.headline }} />
            
            <div className="page1-infocards-container" style={{ position: 'absolute', bottom: '30px', right: '55px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '23px', maxWidth: 'calc(100% - 110px)', zIndex: 10 }}>
                {pageData.infoCards.map((card: any) => (
                    <div key={card.title} className="page1-infocard-button" onClick={() => handleCardClick(card.title)} style={{ width: '280px', maxWidth: '100%', minHeight: '220px', background: 'rgba(12,36,58,0.34)', borderRadius: 12, backdropFilter: 'blur(5px)', padding: '20px', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', cursor: 'pointer' }}>
                        <div className="card-title-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: '15px', fontSize: 'clamp(18px, 5vw, 30px)' }}>
                            <span>{card.title}</span><span style={{ fontSize: '1.2em' }}>→</span>
                        </div>
                        <div className="card-divider" style={{ width: '95%', borderTop: '4px solid rgba(227,227,227,0.8)', marginBottom: '15px' }} />
                        <p className="card-subtitle" style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(14px, 4vw, 18px)' }}>{card.subtitle}</p>
                    </div>
                ))}
            </div>

            <div className="social-icons-container" style={{ position: 'absolute', top: '40%', right: '50px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 10 }}>
                {SOCIAL_LINKS.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Page1;