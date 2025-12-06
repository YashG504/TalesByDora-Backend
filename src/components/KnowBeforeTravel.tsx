import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Added Import

const KnowBeforeTravel: React.FC<{ data?: any }> = ({ data }) => {
  const navigate = useNavigate(); // 2. Added Hook

  // Fallback to default Dubai data
  const content = data || {
    mainImage: "/KnowBefore_Back.jpg",
    frontImage: "/KnowBefore_Front.jpg",
    title: "KNOW BEFORE YOUR TRAVEL",
    description: "Dubai, a city of superlatives, where futuristic skyscrapers touch the clouds and golden deserts stretch endlessly. Experience luxury shopping, world-class dining, and architectural marvels in this cosmopolitan oasis.",
    cards: [
      { icon: "/image1.png", title: "Best Time to Visit Dubai", text: "November to March is the most pleasant time to visit Dubai, with cool temperatures perfect for outdoor sightseeing, shopping festivals, and desert adventures." },
      { icon: "/image2.png", title: "How to Travel Within Dubai", text: "Dubai boasts an efficient metro network, abundant taxis, and buses. For flexibility, rent a car or opt for guided tours to explore the city stress-free." },
      { icon: "/image3.png", title: "Famous Food in Dubai", text: "Don't miss local favorites like Shawarma, Machboos, and Al Harees, along with sweet delights like Luqaimat. Head to Al Fahidi Historical District for the most authentic Emirati cuisine." }
    ]
  };

  return (
    <div className="w-full min-h-screen font-inter">
      <div className="bg-[#F2F2F2] w-full min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1512px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col xl:flex-row xl:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            
            <div className="relative flex-shrink-0 mx-auto xl:mx-0 order-1 xl:order-1">
              <img 
                loading="lazy" 
                src={content.mainImage} 
                alt="Destination" 
                className="w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[320px] md:h-[440px] lg:w-[360px] lg:h-[500px] xl:w-[380px] xl:h-[540px] object-cover rounded-[120px] sm:rounded-[150px] md:rounded-[180px] lg:rounded-[200px] xl:rounded-[220px] shadow-xl" 
              />
              <img 
                loading="lazy" 
                src={content.frontImage} 
                alt="Attraction" 
                className="w-[140px] h-[200px] sm:w-[170px] sm:h-[240px] md:w-[200px] md:h-[280px] lg:w-[240px] lg:h-[340px] xl:w-[280px] xl:h-[380px] object-cover rounded-[120px] sm:rounded-[150px] md:rounded-[180px] lg:rounded-[200px] xl:rounded-[220px] border-4 sm:border-[5px] md:border-[6px] lg:border-[7px] xl:border-[8px] border-white absolute bottom-0 right-0 translate-x-6 translate-y-6 sm:translate-x-8 sm:translate-y-8 md:translate-x-10 md:translate-y-10 lg:translate-x-12 lg:translate-y-12 xl:translate-x-16 xl:translate-y-12 shadow-xl" 
              />
            </div>

            <div className="flex-1 flex flex-col items-center xl:items-start justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 order-2 xl:order-2 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-0">
              <div className="text-center xl:text-left xl:max-w-[900px] w-full">
                <h1 className="text-[#112B3C] font-bold text-center text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] l:text-[60px] leading-tight uppercase">
                  {content.title}
                </h1>
                <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-black leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="w-full flex justify-center xl:justify-start">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 max-w-3xl w-full">
                  {content.cards.map((card: any, index: number) => (
                    <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6">
                      <div className="w-[70px] h-[50px] sm:w-[80px] sm:h-[55px] md:w-[90px] md:h-[65px] lg:w-[110px] lg:h-[75px] xl:w-[130px] xl:h-[85px] rounded-full bg-[#263a48ff] flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                        <img 
                          loading="lazy" 
                          src={card.icon || `/image${index+1}.jpg`} 
                          alt={`icon${index+1}`} 
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain" 
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#151515] text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold uppercase leading-snug mb-1 sm:mb-2">
                          {card.title}
                        </h3>
                        <p className="text-[#112B3C] text-xs sm:text-sm md:text-sm lg:text-base xl:text-base font-medium uppercase leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* 3. NEW ENQUIRE BUTTON */}
     {/* 3. RESIZED ATTRACTIVE MOVING BUTTON */}
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          onClick={() => navigate('/enquire')} 
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg animate-bounce hover:animate-none hover:scale-105 transition-all duration-300 font-bold tracking-wide flex items-center gap-1.5"
        >
          <span>Enquire Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default KnowBeforeTravel;