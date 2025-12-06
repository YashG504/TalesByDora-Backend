import React, { useState, useEffect, useMemo } from "react";

// 1. Moved static default data outside the component.
const DEFAULT_CONTENT = {
    mainTitle: "Travel<br />Beyond<br />Dreams",
    mainDescription: "Explore Dubai with us...",
    backgroundUrl: "/page5bg.jpg",
    attractions: {
        "/atlantis.jpg": { title: "Atlantis The Palm", description: "Home to Aquaventure Waterpark..." },
        "/Dubai Mall.jpg": { title: "Dubai Mall", description: "More than just shopping..." },
        "/burj khailfa.jpg": { title: "Burj Khalifa", description: "Marvel at the world’s tallest tower..." },
        "/desert safari.jpg": { title: "Dubai Desert Safari", description: "Experience dune bashing..." },
        "/fountain.jpg": { title: "Dubai Fountain", description: "Watch the world’s largest choreographed fountain..." },
        "/jumeriah beach.jpg": { title: "Jumeirah Beach", description: "Relax on golden sands..." },
        "/dubai creek.jpg": { title: "Dubai Creek", description: "The historic heart of the city..." },
        "/palm jumeriah.jpg": { title: "Palm Jumeirah", description: "A man-made palm island..." },
        "/burj all arab.jpg": { title: "Burj Al Arab", description: "The 7-star hotel shaped like a sail..." },
        "/gold souk.jpg": { title: "Gold Souk", description: "Wander through Dubai’s traditional gold market..." },
        "/marina.jpg": { title: "Dubai Marina", description: "Soak in the vibe with yacht cruises..." },
        "/museum.jpg": { title: "Museum of the Future", description: "Step into tomorrow..." },
    }
};

const Page5: React.FC<{ data?: any }> = ({ data }) => {
    const content = data || DEFAULT_CONTENT;

    // 2. Memoized attractionsList to prevent recalculation on every render.
    const attractionsList = useMemo(() => {
        if (content.PlacesToExplore) return content.PlacesToExplore;
        return Object.keys(content.attractions).map(key => ({
            name: content.attractions[key].title,
            description: content.attractions[key].description,
            imageUrl: key
        }));
    }, [content]);

    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        if (attractionsList.length === 0) return;
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % attractionsList.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [attractionsList.length]);

    useEffect(() => {
        if (currentIndex >= 0 && attractionsList[currentIndex]) {
            setSelectedItem(attractionsList[currentIndex]);
        }
    }, [currentIndex, attractionsList]);

    // 3. Memoized derived data to improve performance.
    const { mainAttractions, allBottomIcons } = useMemo(() => {
        const main = {
            outerOrbit: attractionsList.length > 0 ? attractionsList[0] : null,
            innerOrbit: attractionsList.length > 1 ? attractionsList[1] : null,
            centerpiece: attractionsList.length > 2 ? attractionsList[2] : null,
        };
        const bottom = attractionsList.slice(3);
        return { mainAttractions: main, allBottomIcons: bottom };
    }, [attractionsList]);
    
    const { currentImage, currentContent } = useMemo(() => {
        const image = selectedItem ? selectedItem.imageUrl : content.backgroundUrl;
        const text = selectedItem ? { title: selectedItem.name, description: selectedItem.description } : { title: content.mainTitle, description: content.mainDescription };
        return { currentImage: image, currentContent: text };
    }, [selectedItem, content]);

    return (
        <div className="w-full min-h-screen lg:h-screen relative overflow-x-hidden" >
            {/* Styles are kept as is */}
            <style>{`
                @keyframes rotate-clockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes rotate-counter-clockwise { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                .atlantis-orbit-wrapper { position: absolute; width: 1px; height: 1px; top: 309.5px; left: 277.5px; animation: rotate-clockwise 30s linear infinite; }
                .dubaimall-orbit-wrapper { position: absolute; width: 1px; height: 1px; top: 325px; left: 282px; animation: rotate-counter-clockwise 22s linear infinite; }
                .orbiting-icon { position: absolute; transform: translate(-50%, -50%); }
                @media (max-width: 1024px) {
                  .page5-main-container { flex-direction: column !important; height: auto !important; padding: 80px 20px 20px 20px !important; transform: none !important; gap: 2rem !important; }
                  .page5-left-column { position: relative !important; width: 100% !important; height: auto !important; display: flex !important; flex-direction: column !important; align-items: center !important; gap: 2rem !important; order: 1; }
                  .page5-text-content { position: relative !important; width: 100% !important; left: auto !important; top: auto !important; text-align: center !important; }
                  .page5-text-content h1 { font-size: 48px !important; line-height: 1.2 !important; }
                  .page5-text-content p { font-size: 16px !important; line-height: 1.5 !important; }
                  .page5-right-column { order: 2; position: relative !important; width: 100% !important; height: 400px !important; top: 0 !important; left: 40% !important; transform: translateX(-50%) scale(0.6) !important; transform-origin: top center !important; }
                  .page5-bottom-icons { order: 3; position: relative !important; width: 100% !important; top: auto !important; left: auto !important; display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; }
                }
            `}</style>

            <div className="absolute top-0 left-0 w-full h-full z-0 transition-all duration-500 ease-in-out" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${currentImage}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            
            <div className="page5-main-container relative z-10 w-full max-w-[1512px] h-screen mx-auto flex">
                <div className="page5-left-column" style={{ width: '610px', height: '100%', position: 'relative'}}>
                    <div className="page5-text-content" style={{position: 'absolute', left: "101px", top: "90px", width: "398px", display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h1 style={{ fontFamily: "sans-serif", fontSize: "70px", lineHeight: "80px", color: "#FFFFFF" }} dangerouslySetInnerHTML={{ __html: currentContent.title }} />
                        <p style={{ fontFamily: "sans-serif", fontSize: "22px", lineHeight: "36px", color: "#FFFFFF" }}>{currentContent.description}</p>
                    </div>
                </div>
                
                <div className="page5-right-column" style={{ width: "755px", height: "787px", position: 'absolute', left: "710px", top: "125px" }}>
                    <div className="absolute rounded-full" style={{ width: "555px", height: "555px", left: "0px", top: "32px", border: "1px solid #A5A5A5" }} />
                    <div className="absolute rounded-full" style={{ width: "280px", height: "280px", left: "142px", top: "185px", border: "1px solid #A5A5A5" }} />
                    
                    {mainAttractions.outerOrbit && <div className="atlantis-orbit-wrapper"><div onClick={() => setSelectedItem(mainAttractions.outerOrbit)} className="orbiting-icon rounded-full border-2 cursor-pointer" style={{ top: '-277.5px', width: "64px", height: "64px", backgroundImage: `url('${mainAttractions.outerOrbit.imageUrl}')`, backgroundSize: "cover", borderColor: "#FFFFFF" }} /></div>}
                    {mainAttractions.innerOrbit && <div className="dubaimall-orbit-wrapper"><div onClick={() => setSelectedItem(mainAttractions.innerOrbit)} className="orbiting-icon rounded-full border-2 cursor-pointer" style={{ top: '-140px', width: "75px", height: "75px", backgroundImage: `url('${mainAttractions.innerOrbit.imageUrl}')`, backgroundSize: "cover", backgroundPosition: "center 15%", borderColor: "#FFFFFF" }} /></div>}
                    {mainAttractions.centerpiece && <div onClick={() => setSelectedItem(mainAttractions.centerpiece)} className="rounded-full border-2 cursor-pointer" style={{ position: 'absolute', width: "134px", height: "134px", top: '270px', left: '220px', backgroundImage: `url('${mainAttractions.centerpiece.imageUrl}')`, backgroundSize: "cover", borderColor: "#FFFFFF", zIndex: 10 }} />}

                    <div className="absolute flex justify-center items-center" style={{ width: "197px", height: "36px", left: "70px", top: "310px" }}><span style={{ fontFamily: "sans-serif", fontSize: "15px", lineHeight: "49px", color: "#FFFFFF" }}>DISCOVER</span></div>
                    <div className="absolute" style={{ width: "79px", height: "0px", left: "145px", top: "350px", borderTop: "4px solid #FFFFFF" }} />
                </div>
                
                <div className="page5-bottom-icons" style={{ position: 'absolute', left: "101px", top: "610px", width: 'auto'}}>
                    {allBottomIcons.map((item: any, index: number) => ( <div key={index} onClick={() => setSelectedItem(item)} className="rounded-full border-2 cursor-pointer hover:scale-110" style={{ width: "54px", height: "54px", backgroundImage: `url("${item.imageUrl}")`, backgroundSize: "cover", borderColor: "#FFFFFF", flexShrink: 0, display: 'inline-block', margin: '7px' }} /> ))}
                </div>
            </div>
            {selectedItem && ( <button onClick={() => { setSelectedItem(null); setCurrentIndex(-1); }} className="absolute bottom-4 left-4 px-6 py-2 bg-white text-black rounded-lg shadow-lg z-20 font-semibold">Back</button> )}
        </div>
    );
};

export default Page5;