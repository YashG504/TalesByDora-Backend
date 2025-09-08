import React, { useState } from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedIcon from '@mui/icons-material/Verified';
import { motion } from 'framer-motion';

const Page5 = () => {
  const [select, setSelect] = useState(false);

  return (
    <div className="bg-[url(/moreabout.jpg)] h-[40vh] sm:h-[50vh] lg:h-[40vh] flex items-center justify-center py-8 bg-cover bg-center relative">

      {/* Dark Overlay */}
      <div className="bg-black/50 h-full w-full absolute"></div>

      {select ? (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 1.5 }}
          className="flex flex-col w-[95vw] lg:w-[85vw] max-h-[90vh] rounded-2xl z-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-[#263A48] flex flex-col items-center p-4 sm:p-6 gap-2 sm:gap-4 rounded-t-3xl text-white relative">
            <h1 className="text-xl sm:text-2xl lg:text-[2vw] font-bold">💙 What We Stand For</h1>
            <p className="text-sm sm:text-base lg:text-[1.2vw] text-center max-w-4xl">
              More Than Just Travel — We're Driven by Purpose, Sustainability, and Social Impact
            </p>
            <motion.div
              whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white absolute right-4 top-4 text-black flex justify-center items-center rounded-full text-lg cursor-pointer"
              onClick={() => setSelect(false)}
            >
              X
            </motion.div>
          </div>

          {/* Content */}
          <div className="bg-gray-100 flex flex-col gap-8 p-4 sm:p-8">

            {/* Women Empowerment Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263A48] mb-6 text-center">👥 Empowering Through Employment</h2>
              <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed mb-8">
                We believe talent exists everywhere, but opportunity doesn't. That’s why 90% of our workforce is women — from career returnees to young professionals, we’re building an inclusive and empowering future in travel.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col p-6 bg-gradient-to-br from-[#E8F1EE] to-[#E6F0F2] rounded-xl shadow-md">
                  <h3 className="font-bold text-lg text-[#263A48] mb-3">🌸 Non-Traditional Hiring</h3>
                  <p className="text-sm text-gray-700">
                    We welcome women re-entering the workforce, career changers, and those from diverse educational paths. 
                  </p>
                </div>
                <div className="flex flex-col p-6 bg-gradient-to-br from-[#E8F1EE] to-[#E6F0F2] rounded-xl shadow-md">
                  <h3 className="font-bold text-lg text-[#263A48] mb-3">🏡 Remote-First Culture</h3>
                  <p className="text-sm text-gray-700">
                    Our distributed team proves that great work knows no boundaries — with flexible hours and global collaboration.
                  </p>
                </div>
                <div className="flex flex-col p-6 bg-gradient-to-br from-[#E8F1EE] to-[#E6F0F2] rounded-xl shadow-md">
                  <h3 className="font-bold text-lg text-[#263A48] mb-3">📈 Growth & Leadership</h3>
                  <p className="text-sm text-gray-700">
                    72% of our leadership roles are held by women, supported by mentorship and skill-building programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Green Travel Section */}
            <div className="bg-[#263A48] rounded-2xl flex flex-col overflow-hidden shadow-lg">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#E8F1EE] to-[#E6F0F2]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#263A48]">🌱 Greener Journeys, Deeper Roots</h1>
              </div>
              <div className="p-6 sm:p-8 text-white">
                <p className="text-lg sm:text-xl py-4 text-center font-medium text-[#D3EFE6]">
                  For every booking, we plant 10 trees — ensuring your travel heals the planet and supports local communities.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#1E402C] rounded-lg p-6 text-white">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#D3EFE6]">50,000+</h4>
                    <p className="text-sm">Trees Planted</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#D3EFE6]">25</h4>
                    <p className="text-sm">Countries</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#D3EFE6]">95%</h4>
                    <p className="text-sm">Survival Rate</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#D3EFE6]">1,200</h4>
                    <p className="text-sm">Tons CO2 Absorbed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#263A48] mb-6 text-center">💎 What Makes Us Different</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center bg-[#E6F0F2] p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-[#263A48] mb-2">🎯 Tailor-Made Over Templates</h3>
                  <p className="text-sm text-gray-700">Every trip is custom-designed — no copy-paste itineraries.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-[#E6F0F2] p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-[#263A48] mb-2">🧳 All-in-One Travel Care</h3>
                  <p className="text-sm text-gray-700">Visa, forex, insurance, and bookings — handled under one roof.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-[#E6F0F2] p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-[#263A48] mb-2">🧠 Destination Experts</h3>
                  <p className="text-sm text-gray-700">We experience destinations ourselves before recommending them.</p>
                </div>
                <div className="flex flex-col items-center text-center bg-[#E6F0F2] p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-[#263A48] mb-2">🛟 24x7 Human Support</h3>
                  <p className="text-sm text-gray-700">Always real people on the other side, never bots.</p>
                </div>
              </div>
            </div>

            {/* How We Work */}
            <div className="bg-[#263A48] rounded-2xl p-6 sm:p-8 shadow-lg text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">✈️ How We Work</h2>
              <div className="flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-12">
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="text-3xl mb-2">✍️</div>
                  <p className="text-sm">Fill out our inquiry form or DM us</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="text-3xl mb-2">📞</div>
                  <p className="text-sm">Get a free consultation call with a travel curator</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="text-3xl mb-2">🧭</div>
                  <p className="text-sm">Receive 1–2 curated itinerary options</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="text-3xl mb-2">💳</div>
                  <p className="text-sm">Book securely with transparent pricing</p>
                </div>
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="text-3xl mb-2">✈️</div>
                  <p className="text-sm">Relax — we handle everything else</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#263A48] to-[#1a2832] p-8 sm:p-12 flex flex-col items-center gap-6 rounded-2xl text-white shadow-2xl">
              <h1 className="font-bold text-2xl sm:text-3xl text-center">Ready to Travel with Purpose?</h1>
              <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl leading-relaxed">
                Join our community of conscious travelers and make every journey count. Together, we've planted over 50,000 trees and empowered hundreds of professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button
                  onClick={() => setSelect(false)}
                  className="flex-1 px-6 py-3 rounded-2xl text-lg font-bold bg-[#1E402C] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={() => setSelect(false)}
                  className="flex-1 px-6 py-3 rounded-2xl text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#263A48] transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
              <p className="text-sm text-[#D3EFE6] text-center">
                ✨ Every booking plants 10 trees • 100% carbon-positive travel • Supporting local communities
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 z-10 text-white text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">More Than Just Travel</h1>
          <p className="text-base sm:text-lg lg:text-2xl max-w-4xl">
            At Tales by Dora, we believe in making a difference with every journey
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-[rgba(38,58,72,1)] text-white border border-white/70 backdrop-blur-sm py-3 px-8 sm:px-10 rounded-2xl text-lg sm:text-2xl font-semibold shadow-lg"
            onClick={() => setSelect(true)}
          >
            Discover what we stand for
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Page5;
