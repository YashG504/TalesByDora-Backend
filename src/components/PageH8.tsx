import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Optimizations ---
// 1. Moved static data outside the component to prevent re-creation.
const DEFAULT_FAQS = [
  { question: "Can you help with flights and visas too, or just the hotel bookings?", answer: "Yes! We take care of everything—from flights and visa assistance to forex, stays, and curated experiences." },
  { question: "Which destinations do you currently offer?", answer: "We currently curate trips to Dubai, Maldives, Mauritius, Bali, Thailand, Europe, and Australia." },
  { question: "Are your trips fully customizable?", answer: "Absolutely. Whether you're planning a romantic escape, solo trip, or family vacation—we’ll tailor every detail to fit you." },
  { question: "Do you offer budget-friendly packages?", answer: "We focus on premium, value-driven experiences over cheap deals. Our aim is to deliver unforgettable journeys, not just discounts." },
  { question: "What makes your travel company different?", answer: "We’re a women-led brand with a passion for meaningful travel. 90% of our team are women—from college students to moms rejoining the workforce." },
  { question: "Is your brand eco-friendly?", answer: "Yes! For every trip you book with us, we plant one tree, supporting sustainable and mindful travel." },
];

const answerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const mobileAnswerVariants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: { opacity: 1, height: "auto", y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

interface Faq {
  question: string;
  answer: string;
}

const Page7: React.FC<{ faqs?: Faq[] }> = ({ faqs }) => {
  const faqData = faqs || DEFAULT_FAQS;
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // 2. Memoized the toggle function with useCallback.
  const toggleFAQ = useCallback((index: number) => {
    setActiveIndex(current => (index === current ? null : index));
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#F8F8F8] flex flex-col items-center p-4 lg:p-0 lg:justify-center overflow-x-hidden font-sans">
      <h1 className="text-5xl mb-6 text-center lg:absolute lg:left-[8%] lg:top-[12%] lg:text-7xl lg:text-left z-10" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: "#333" }}>
        FAQ'S
      </h1>
      <div className="w-full max-w-7xl lg:relative lg:flex lg:items-start lg:justify-end">
        <div className="hidden lg:flex sticky top-[32%] items-center justify-center w-[44%] h-[39vh] bg-white/25 border border-teal-600/25 rounded-2xl backdrop-blur-md shadow-2xl p-8 mr-auto z-30 lg:translate-x-24">
          <AnimatePresence mode="wait">
            <motion.p key={activeIndex} variants={answerVariants} initial="hidden" animate="visible" exit="hidden" className="text-center text-2xl font-medium text-gray-700 leading-relaxed max-w-lg font-sans">
              {activeIndex !== null && faqData[activeIndex] ? faqData[activeIndex].answer : "Click on a question to see the answer."}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="w-full lg:w-1/2 lg:max-h-[75vh] bg-[#263A48] rounded-2xl shadow-lg overflow-y-auto z-20">
          {faqData.map((faq, i) => (
            <div key={i} className="border-b border-gray-300/50 last:border-b-0">
              <div onClick={() => toggleFAQ(i)} className="flex justify-between items-center p-5 cursor-pointer">
                <span className="text-white text-lg lg:text-2xl font-semibold leading-tight w-[90%] font-sans">&nbsp; {faq.question}</span>
                <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="lg:hidden">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </motion.div>
              </div>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div className="px-5 pb-5 text-teal-100 text-base block lg:hidden font-sans" variants={mobileAnswerVariants} initial="hidden" animate="visible" exit="hidden">
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Wrapped component in React.memo for performance.
export default React.memo(Page7);