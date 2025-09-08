import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'Vipul Raghav', city: 'Thailand', quote: "Visa, forex, flights — everything was seamless. We were only left to enjoy. Loved the 'Turn Back, Discover' section — it guided us perfectly through each step.", image: '/t2.jpg' },
  { id: 2, name: 'Mrinalini & Kunal', city: 'Europe', quote: "I've traveled before, but this was something else. The personal touch, the curated experiences, and the hidden gems we explored made it unforgettable. TBD, you've set a new standard.", image: '/t4.jpg' },
  { id: 3, name: 'Zigdel with Sherab', city: 'Dubai', quote: 'TBD lived up to its name — we truly traveled beyond dreams. Grateful for the patience, planning, and personalization. Highly recommended!', image: '/t3.jpg' },
  { id: 4, name: 'Kushika and the World', city: 'Solo Trip', quote: 'Tales by Dora turned my solo trip into a soulful journey. I left for new places and ended up finding a new version of me. Safe, seamless, unforgettable.', image: '/t1.jpg' },
  { id: 5, name: 'Harsimran & Co.', city: 'United Tales', quote: "It wasn't just a trip, it was a story — from the warm welcome to the last sunset. Tales by Dora gave us memories we'll cherish forever.", image: '/t5.jpg' },
];

const TestimonialPage: React.FC<{ data?: any }> = ({ data }) => {
  const backgroundImageUrl = data?.mainImageUrl || '/testimonial.jpg';
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentTestimonialIndex];

  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-screen relative flex items-center justify-center overflow-y-auto overflow-x-hidden text-white"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 flex flex-col lg:flex-row w-full max-w-[1400px] h-auto mx-auto p-4 md:p-8">
        
        {/* Left side - Title & intro */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-8 lg:pr-16 lg:pt-4 lg:relative -mt-16">
          <div className="hidden lg:block w-48 md:w-64 h-1 bg-gray-600 rounded-full mb-8 lg:mb-12">
            <motion.div style={{ width: lineWidth }} className="h-full bg-white rounded-full"></motion.div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold leading-tight mb-2 lg:mb-6">
            TALES BY <br className="hidden sm:block" /> DREAMER
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md">
            Real stories from our travelers who experienced the magic firsthand.
          </p>
        </div>

        {/* Right side - Testimonial */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-8 lg:relative lg:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* City */}
              <div className="block lg:hidden text-center text-lg sm:text-xl font-bold mb-2">
                {t.city.toUpperCase()}
              </div>
              <div className="hidden lg:block absolute text-white text-2xl lg:text-3xl font-bold top-[42%] right-[15%] max-w-[600px] text-right">
                {t.city.toUpperCase()}
              </div>

              {/* Image */}
              <div className="relative w-[90%] max-w-sm sm:max-w-md aspect-video mx-auto lg:absolute lg:w-[500px] lg:h-[350px] lg:top-[48%] lg:left-[20%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white bg-opacity-10 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Name + Quote */}
              <div className="relative w-[90%] max-w-sm sm:max-w-md mx-auto mt-3 p-3 sm:p-4 lg:p-6 bg-[#2B4B5B] bg-opacity-80 rounded-lg lg:rounded-tl-lg text-white backdrop-blur-sm lg:absolute lg:w-[400px] lg:bottom-[26%] lg:left-[45%]">
                <p className="text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2">
                  {t.name}
                </p>
                <p className="text-xs sm:text-sm font-light leading-relaxed">
                  {`"${t.quote}"`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 justify-center mt-4 lg:mt-0 lg:absolute lg:bottom-[12%] lg:left-[20%] lg:transform lg:-translate-x-1/2">
            <button
              onClick={handlePrevTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 sm:p-3 transition-all duration-200 focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={handleNextTestimonial}
              className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 sm:p-3 transition-all duration-200 focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center text-white text-sm sm:text-base lg:text-lg font-light z-20 w-full px-4">
        <div className="w-full h-px bg-white mx-2 sm:mx-4"></div>
        <span className="whitespace-nowrap">Testimonials</span>
        <div className="w-full h-px bg-white mx-2 sm:mx-4"></div>
      </div>
    </div>
  );
};

export default TestimonialPage;
