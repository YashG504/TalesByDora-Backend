import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Page8 = () => {
    const navigate = useNavigate();
    const { slug } = useParams();

    // This list now only contains destinations that will be VISIBLE as buttons and circles.
    const visibleDestinations = [
        { name: "Maldives", slug: "maldives", img: "/Destination/maldives.jpg", left: 1174, top: 53, size: 260 },
        { name: "Mauritius", slug: "mauritius", img: "/Destination/mauritius.jpg", left: 855, top: 237, size: 180 },
        { name: "Thailand", slug: "thailand", img: "/Destination/Thailand.jpg", left: 1179, top: 400, size: 330 },
        { name: "Bali", slug: "bali", img: "/Destination/Bali.jpg", left: 855, top: 540, size: 260 },
        { name: "Europe", slug: "europe", img: "/Destination/europe.jpg", left: 480, top: 360, size: 300 },
        { name: "Australia", slug: "australia", img: "/Destination/australia.jpg", left: 310, top: 680, size: 220 },
        { name: "Dubai", slug: "dubai", img: "/dubaiimagelast.jpg", left: 580, top: 680, size: 200 },
    ];

    // This new list is used ONLY for the title logic.
    // It includes all visible destinations PLUS any "hidden" ones like Andaman.
    const allDestinations = [
        ...visibleDestinations,
        { name: "Andaman", slug: "andaman" } // Make sure this slug matches your URL
    ];
    
    // The title logic now uses the complete "allDestinations" list to find the name.
    const currentDestination = allDestinations.find(dest => dest.slug === slug);
    const dynamicTitle = currentDestination
        ? `LIKED ${currentDestination.name.toUpperCase()} ?`
        : "DISCOVER OUR DESTINATIONS";

    const [activeIndex, setActiveIndex] = useState < number | null > (null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const baseWidth = 1300;
            const newScale = Math.min(window.innerWidth / baseWidth, 1);
            setScale(newScale);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleDestinationClick = (slug) => {
        navigate(`/destinations/${slug}`);
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 font-['poppins']">

            {/* --- MOBILE VIEW --- */}
            {/* The map function now uses "visibleDestinations" */}
            <div className="w-full text-center p-4 lg:hidden">
                <h1 className="text-4xl font-bold text-gray-800">{dynamicTitle}</h1>
                <p className="text-md text-gray-600 mt-2 mb-8">Discover more places with US.</p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {visibleDestinations.map((dest) => (
                        <div key={dest.slug} onClick={() => handleDestinationClick(dest.slug)} className="flex flex-col items-center cursor-pointer group">
                            <div className="w-32 h-32 rounded-full bg-cover bg-center shadow-lg transform transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url('${dest.img}')` }} />
                            <p className="mt-2 text-lg font-semibold text-gray-700">{dest.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- DESKTOP VIEW --- */}
            <div className="hidden lg:block">
                <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#F2F2F2" }}>
                    <style>{`
                        .circle-hover { transition: transform 0.3s ease-in-out; cursor: pointer; }
                        .circle-hover:hover { transform: scale(1.05); }
                        .destination-button { transition: all 0.3s ease-in-out; cursor: pointer; color: white; font-size: 22px; font-weight: 600; text-align: center; }
                        .destination-button:hover { background-color: #263a48ff !important; color: #FFFFFF; }
                    `}</style>

                    <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) scale(${scale * 0.95})`,
                        width: 1512,
                        height: 900,
                    }}>
                        <div style={{ position: "absolute", width: 1784.44, height: 2211.93, left: -117.74, top: -86.04, background: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/page5bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
                        
                        <div style={{ position: "absolute", width: 800, height: 128, left: 10, top: 109, fontFamily: "sans-serif", fontWeight: 400, fontSize: 80, lineHeight: "124.5%", color: "#F2F2F2", textAlign: "left", zIndex: 2, transition: "all 0.3s" }}>
                           {/* Simplified title logic here to prevent flicker */}
                           {dynamicTitle}
                        </div>
                        
                        <div style={{ position: "absolute", width: 493, height: 40, left: 20, top: 222, fontFamily: "sans-serif", fontWeight: 300, fontSize: 30, lineHeight: "30px", textAlign: "left", color: "#F2F2F2", zIndex: 2 }}>Discover more places with US.</div>
                        
                        {/* The map function now uses "visibleDestinations" */}
                        <div style={{ position: "absolute", top: 280, left: "calc(50% - 190px/2 - 500px)", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2 }}>
                            {visibleDestinations.map((dest, index) => (
                                <div
                                    key={dest.slug}
                                    className="destination-button"
                                    onClick={() => handleDestinationClick(dest.slug)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                    style={{ width: 160, padding: '10px 0', margin: '6px 0', background: "#263a48ff", boxShadow: "0px 4px 4px rgba(0,0,0,0.25)", borderRadius: 30 }}
                                >
                                    {dest.name}
                                </div>
                            ))}
                        </div>

                        {/* The map function now uses "visibleDestinations" */}
                        {visibleDestinations.map((dest, index) => (
                            <div
                                key={dest.slug}
                                className="circle-hover"
                                onClick={() => handleDestinationClick(dest.slug)}
                                style={{
                                    position: "absolute",
                                    width: activeIndex === index ? dest.size + 30 : dest.size,
                                    height: activeIndex === index ? dest.size + 30 : dest.size,
                                    left: dest.left,
                                    top: dest.top,
                                    backgroundImage: `url('${dest.img}')`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    borderRadius: "50%",
                                    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                                    transition: "all 0.3s ease-in-out",
                                    zIndex: 2,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page8;