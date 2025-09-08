import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

const Page7: React.FC<{ faqs?: Faq[] }> = ({ faqs }) => {
  const faqData = faqs || [
    {
      question: "What is the best time to visit Dubai?",
      answer:
        "November to March is best—cooler weather, vibrant festivals, and outdoor activities at their peak.",
    },
    {
      question: "Do I need a visa to travel to Dubai?",
      answer:
        "Yes, Indian citizens require a tourist visa. We handle visa facilitation as part of your package.",
    },
    {
      question: "Is Dubai safe for solo women travellers?",
      answer:
        "Yes, it’s one of the safest global cities. We also provide 24x7 support for added peace of mind.",
    },
    {
      question: "What should I wear in Dubai?",
      answer:
        "Dress modestly in public places. Beachwear is fine at resorts and private beaches.",
    },
    {
      question: "Can I book a custom Dubai itinerary?",
      answer:
        "Absolutely! Our team creates tailor-made plans to match your budget, style, and preferences.",
    },
    {
      question: "Do you offer arrival support and local SIM cards?",
      answer:
        "Yes, we provide airport pickup, SIM cards, and currency exchange assistance upon arrival.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F8F8F8] flex flex-col items-center p-4 lg:p-0 lg:justify-center overflow-x-hidden font-sans">
      {/* Heading */}
      <h1
        className="text-5xl mb-6 text-center lg:absolute lg:left-[8%] lg:top-[12%] lg:text-7xl lg:text-left z-10"
        style={{
          fontFamily: "'Cormorant Garamond', serif", // ✅ same as hero/reference
          fontWeight: 700,
          color: "#333",
        }}
      >
        FAQ'S
      </h1>

      <div className="w-full max-w-7xl lg:relative lg:flex lg:items-start lg:justify-end">
       {/* Answer Box (Desktop Only, consistent font & style) */}
<div className="hidden lg:flex sticky top-[32%] items-center justify-center w-[44%] h-[39vh] bg-white/25 border border-teal-600/25 rounded-2xl backdrop-blur-md shadow-2xl p-8 mr-auto z-30 lg:translate-x-24">
  <AnimatePresence mode="wait">
    <motion.p
      key={activeIndex}
      variants={answerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="text-center text-2xl font-semibold text-gray-700 leading-relaxed max-w-lg font-sans"
    >
      {activeIndex !== null && faqData.length > 0
        ? faqData[activeIndex].answer
        : "Click on a question to see the answer."}
    </motion.p>
  </AnimatePresence>
</div>


        {/* FAQ List */}
        <div className="w-full lg:w-1/2 lg:max-h-[75vh] bg-[#263A48] rounded-2xl shadow-lg overflow-y-auto z-20">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-300/50 last:border-b-0"
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(i)}
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <span className="text-white text-lg lg:text-2xl font-semibold leading-tight w-[90%] font-sans">
                  &nbsp; {faq.question}
                </span>
                {/* Icon only on mobile */}
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.div>
              </div>

              {/* Mobile Accordion Answer */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    className="px-5 pb-5 text-teal-100 text-base block lg:hidden font-sans"
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
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

export default Page7;
