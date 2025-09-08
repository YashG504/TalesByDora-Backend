import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircleMore, Instagram, Linkedin } from 'lucide-react';

const Page1: React.FC<{ data?: any; destinationName?: string }> = ({ data, destinationName }) => {
    const navigate = useNavigate();

    const pageData = data || {
        headline: "The Bold Dubai",
        backgroundImageUrl: "/background.jpg",
        infoCards: [
            { "title": "Explore", "subtitle": "Discover iconic landmarks, hidden gems, and unforgettable experiences across Dubai." },
            { "title": "Itineraries", "subtitle": "Browse expertly curated Dubai itineraries tailored to your travel style and budget." },
            { "title": "Enquire", "subtitle": "Have questions? Get personalized assistance for your perfect Dubai getaway." }
        ]
    };

    const currentDestination = destinationName || "Dubai";

    const handleCardClick = (title: string) => {
        const destinationSlug = currentDestination.toLowerCase();
        const availableDeepDives = ['dubai', 'thailand', 'bali', 'mauritius', 'maldives', 'andaman'];

        if (title === 'Itineraries') {
            navigate(`/itineraries/${destinationSlug}`);
        } else if (title === 'Enquire') {
            navigate('/enquire');
        } else if (title === 'Explore') {
            if (availableDeepDives.includes(destinationSlug)) {
                navigate(`/destinations/${destinationSlug}/deep-dive`);
            } else {
                console.log(`Deep dive page is not available for ${currentDestination}.`);
            }
        }
    };

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navLinks = [
        { name: 'Home', action: () => navigate('/') },
        { name: 'About us', action: () => handleScrollTo('about-us') },
        { name: 'Itineraries', action: () => navigate(`/itineraries/${currentDestination.toLowerCase()}`) }
    ];

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
            
            <style>{`
                .mobile-nav-links { display: none; }
                .social-icons-container { display: flex; } /* Show on desktop */
                @media (max-width: 768px) {
                  .page1-header { flex-wrap: nowrap !important; justify-content: space-between !important; padding: 20px !important; }
                  .desktop-nav-links { display: none !important; }
                  .mobile-nav-links { display: flex !important; justify-content: center; align-items: center; gap: 25px; width: 100%; padding: 15px 0; position: absolute; top: 80px; left: 0; z-index: 2; }
                  .page1-headline { top: 30vh !important; left: 50% !important; transform: translateX(-50%) !important; width: 90% !important; text-align: center !important; }
                  .page1-infocards-container { position: absolute !important; bottom: 8vh !important; left: 50% !important; transform: translateX(-50%) !important; width: 100% !important; flex-direction: row !important; justify-content: center !important; gap: 15px !important; padding: 0 10px !important; top: auto !important; right: auto !important; }
                  .page1-infocard-button { width: auto !important; min-height: unset !important; padding: 12px 22px !important; flex-direction: row !important; gap: 8px !important; }
                  .page1-infocard-button .card-subtitle, .page1-infocard-button .card-divider { display: none !important; }
                  .page1-infocard-button .card-title-container { margin-bottom: 0 !important; font-size: clamp(14px, 4vw, 16px) !important; }
                  .social-icons-container { display: none !important; } /* Hide social icons on mobile */
                }
            `}</style>

            <div style={{ position: 'absolute', width: '100%', height: '100%', background: `url('${pageData.backgroundImageUrl}') center / cover no-repeat`, zIndex: 0 }} />
            <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />
            
            <div className="page1-header" style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '38px 73px', boxSizing: 'border-box', height: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <div style={{ width: 'clamp(30px, 5vw, 38px)', height: 'clamp(30px, 5vw, 38px)', background: "url('/logo.jpg') center / cover no-repeat", borderRadius: '50%' }} />
                    <span style={{ fontFamily: "'Sulphur Point', sans-serif", fontWeight: 600, fontSize: 'clamp(24px, 4vw, 35px)', color: '#FFF' }}>TalesByDora</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className="desktop-nav-links" style={{ display: 'flex', gap: 30 }}>
                        {navLinks.map(item => <span key={item.name} onClick={item.action} style={{ fontSize: 'clamp(16px, 2.5vw, 21px)', fontWeight: 500, color: '#FFF', cursor: 'pointer' }}>{item.name}</span>)}
                    </div>
                    <div onClick={() => handleScrollTo('itineraries')} style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.16)', boxShadow: '0px 4px 4px rgba(0,0,0,0.25)', backdropFilter: 'blur(34.5px)', borderRadius: 25, padding: '8px 16px', height: 40, gap: 8, cursor: 'pointer' }}>
                        <span style={{ color: '#FFF', fontSize: 'clamp(15px, 2.5vw, 19px)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                          Explore {currentDestination}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" viewBox="0 0 24 24">
                          <path d="M21.53 20.47l-5.74-5.74A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.73-1.21l5.74 5.74a.75.75 0 101.06-1.06zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mobile-nav-links">
                {navLinks.map(item => (
                    <span key={item.name} onClick={item.action} style={{ fontSize: '16px', fontWeight: 550, color: '#FFF', cursor: 'pointer' }}>
                        {item.name}
                    </span>
                ))}
            </div>

            <div className="page1-headline" style={{ position: 'absolute', width: 'clamp(280px, 40vw, 382px)', height: 'auto', left: '5%', top: '25vh', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(60px, 12vw, 110px)', lineHeight: '1.1', textTransform: 'capitalize', color: '#FFF', zIndex: 2 }} dangerouslySetInnerHTML={{ __html: pageData.headline }} />
            
            <div className="page1-infocards-container" style={{ position: 'absolute', bottom: '30px', right: '55px', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '23px', maxWidth: 'calc(100% - 110px)', zIndex: 10 }}>
                {pageData.infoCards.map((card: any) => (
                    <div key={card.title} className="page1-infocard-button" onClick={() => handleCardClick(card.title)} style={{ width: '280px', maxWidth: '100%', minHeight: '220px', background: 'rgba(12,36,58,0.34)', borderRadius: 12, backdropFilter: 'blur(5px)', padding: '20px', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', cursor: 'pointer' }}>
                        <div className="card-title-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: '15px', fontSize: 'clamp(18px, 5vw, 30px)' }}>
                            <span>{card.title}</span>
                            <span style={{ fontSize: '1.2em' }}>→</span>
                        </div>
                        <div className="card-divider" style={{ width: '95%', borderTop: '4px solid rgba(227,227,227,0.8)', marginBottom: '15px' }} />
                        <p className="card-subtitle" style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(14px, 4vw, 18px)' }}>{card.subtitle}</p>
                    </div>
                ))}
            </div>

            {/* Social icons (hidden on mobile via CSS) */}
            <div
                className="social-icons-container"
                style={{
                    position: 'absolute',
                    top: '40%',
                    right: '50px',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    zIndex: 10,
                }}
            >
                <a href="https://wa.me/919019748508" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <MessageCircleMore size={24} />
                </a>
                <a href="https://www.instagram.com/talesbydora/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/talesbydora" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={24} />
                </a>
            </div>

            <style>{`
                .social-icon {
                    width: 44px;
                    height: 44px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(5px);
                }
            `}</style>

        </div>
    );
};

export default Page1;
