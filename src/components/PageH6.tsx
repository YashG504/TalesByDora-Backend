import React from 'react';

const Page6 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:-ml-12">
            <div className="flex items-center space-x-2 text-rgba(38, 58, 72, 1)">
              <span className="text-5xl ">✦</span>
              <span className="text-lg">Travel . Discover</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase">
                WHY CHOOSE US?
              </h1>
            </div>

            <div className="max-w">
              <p className="text-rgba(51, 51, 51, 1)text-lg leading-relaxed">
                From solo explorers to luxury seekers,we craft seamless international journeys filled with curated experiences and unforgettable moments.
              </p>
            </div>

            <div>
              <button
                onClick={() => alert("Explore clicked!")}
                className="rgba(38, 58, 72, 1) hover:rgba(38, 58, 72, 1)text-white font-bold py-4 px-8 rounded-full text-lg 
                  transition-transform duration-200 shadow-lg uppercase 
                  active:scale-95 focus:outline-none focus:ring-4 focus:rgba(38, 58, 72, 1)"
              >
                EXPLORE
              </button>
            </div>
          </div>

        {/* Right Content - Arched Image + Testimonials */}
<div className="relative w-full max-w-[540px] h-[580px] mx-auto translate-x-3 sm:translate-x-4 md:translate-x-0">

  {/* Arched Image */}
  <div className="absolute top-[45px] left-0 p-[0.5cm] border border-black rounded-[280px_280px_0_0/280px_280px_0_0] w-fit mx-auto">
    <div className="w-[260px] sm:w-[320px] md:w-[360px] h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden rounded-t-[180px]">
      <img
        loading="lazy"
        src="/6bj.jpg"
        alt="Dubai aerial view"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Testimonial 1 */}
  <div className="absolute top-[420px] left-[-20px] sm:left-[-40px] md:left-[-95px] w-[280px] sm:w-[320px] md:w-[390px] bg-white/80 border border-black rounded-2xl flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4 shadow-xl">
    <img
      loading="lazy"
      src="/6p1.jpg"
      alt="User"
      className="w-[50px] sm:w-[70px] md:w-[80px] h-[50px] sm:h-[70px] md:h-[80px] rounded-full object-cover"
    />
    <p className="text-[#333] text-sm sm:text-base md:text-lg leading-snug">
      Tailor-made trips that turn world-class destinations into memories.
    </p>
  </div>

  {/* Testimonial 2 */}
<div className="absolute top-[90px] left-[160px] sm:left-[220px] md:left-[320px] lg:left-[280px] w-[250px] sm:w-[300px] md:w-[390px] bg-white/80 border border-black rounded-2xl flex items-center gap-4 px-4 sm:px-6 py-3 sm:py-4 shadow-xl">
  <img
    loading="lazy"
    src="/6p1.jpg"
    alt="User"
    className="w-[50px] sm:w-[70px] md:w-[80px] h-[50px] sm:h-[70px] md:h-[80px] rounded-full object-cover"
  />
  <p className="text-[#333] text-sm sm:text-base md:text-lg leading-snug">
    Exclusive getaways for those who seek more than just a vacation.
  </p>
</div>

  {/* Decorative star */}
  <div className="absolute top-[480px] left-[260px] sm:left-[320px] md:left-[420px] text-[rgba(38, 58, 72, 1)] text-[60px] sm:text-[80px] md:text-[100px] opacity-80 z-10">
    ✦
  </div>
</div>

        </div>

  {/* Bottom Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-w-lg md:max-w-2xl translate-x-[-9px]">
  
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full">
    <div className="space-y-2">
      <div className="text-3xl font-bold text-[#263A48]">4.9★</div>
      <p className="text-[#333] text-sm sm:text-base leading-relaxed">
        Based on 250+ organic reviews across global platforms.
      </p>
    </div>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full">
    <div className="space-y-2">
      <div className="text-3xl font-bold text-[#263A48]">1K+</div>
      <p className="text-[#333] text-sm sm:text-base leading-relaxed">
        Journeys Curated Across Europe, Asia, and the Middle East.
      </p>
    </div>
  </div>
</div>



        {/* Just Testimonials Line */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#333]">
          
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page6;

