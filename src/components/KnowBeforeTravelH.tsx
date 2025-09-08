export default function KnowBeforeTravel() {
  return (
    <div className="w-full min-h-screen font-inter relative">
      {/* SECTION: CONTENT */}
      <div className="bg-[#F2F2F2] w-full min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-10 lg:py-16">
        <div className="max-w-[1512px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* OUTER FLEX */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            
            {/* LEFT IMAGES (will appear at the top on mobile, on the left on desktop) */}
            <div className="relative flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-1">
              <img
                src="/webp.webp"
                alt="Back"
                className="w-[200px] xs:w-[220px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[380px] h-auto object-cover rounded-[100px] xs:rounded-[110px] sm:rounded-[125px] md:rounded-[150px] lg:rounded-[160px] xl:rounded-[220px] shadow-2xl"
              />
              <img
                src="/front.jpg"
                alt="Front"
                className="w-[140px] xs:w-[150px] sm:w-[180px] md:w-[220px] lg:w-[240px] xl:w-[280px] h-auto object-cover rounded-[100px] xs:rounded-[110px] sm:rounded-[125px] md:rounded-[150px] lg:rounded-[160px] xl:rounded-[220px] border-[3px] xs:border-[4px] sm:border-[4px] md:border-[6px] lg:border-[6px] xl:border-[8px] border-white absolute bottom-0 right-0 translate-x-3 xs:translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-12 xl:translate-x-16 translate-y-3 xs:translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10 xl:translate-y-12 shadow-2xl"
              />
            </div>
            
            {/* RIGHT SIDE CONTENT (Text and cards will appear below on mobile, on the right on desktop) */}
            <div className="flex-1 flex flex-col items-center lg:items-center ml-0 lg:ml-2 justify-center gap-6 sm:gap-8 md:gap-10 order-2 lg:order-2">
              
              {/* Title and Description */}
              <div className="text-center lg:text-center lg:max-w-[900px] mx-auto w-full">
                <h1 className="text-[#112B3C] text-left text-[22px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] l:text-[60px] leading-tight font-bold">
                  Turn Back And Discover
                </h1>
                <div className="mt-3 sm:mt-4 md:mt-6">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-black text-left sm:text-center lg:text-left px-2 sm:px-4 md:px-6 lg:px-0 ml-0 xs:ml-4 sm:ml-8 md:ml-12 lg:ml-2 max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-none mx-auto lg:mx-0">
                    At TalesByDora, we handle essential travel planning and details behind the scenes—so you can relax and focus on discovery, authentic experiences, and unforgettable memories.
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
                  
                  {/* CARD 1 */}
                  <div className="flex items-start gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 p-2 sm:p-0">
                    <div
                      className="w-[60px] xs:w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[130px] h-[40px] xs:h-[45px] sm:h-[50px] md:h-[65px] lg:h-[80px] xl:h-[85px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(38, 58, 72, 1)" }}
                    >
                      <img src="/image1.png" alt="icon1" className="w-5 xs:w-6 sm:w-7 md:w-9 lg:w-10 xl:w-12 h-5 xs:h-6 sm:h-7 md:h-9 lg:h-10 xl:h-12 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#151515] text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold uppercase leading-tight mb-1 sm:mb-2">
                        Visa Assistance
                      </h3>
                      <p className="text-[#112B3C] text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base font-medium uppercase leading-relaxed">
                        Complete visa processing support with expert guidance through documentation and application procedures.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="flex items-start gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 p-2 sm:p-0">
                    <div
                      className="w-[60px] xs:w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[130px] h-[40px] xs:h-[45px] sm:h-[50px] md:h-[65px] lg:h-[80px] xl:h-[85px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(38, 58, 72, 1)" }}
                    >
                      <img src="/image2.png" alt="icon2" className="w-5 xs:w-6 sm:w-7 md:w-9 lg:w-10 xl:w-12 h-5 xs:h-6 sm:h-7 md:h-9 lg:h-10 xl:h-12 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#151515] text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold uppercase leading-tight mb-1 sm:mb-2">
                        Forex Assistance
                      </h3>
                      <p className="text-[#112B3C] text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base font-medium uppercase leading-relaxed">
                        Competitive currency exchange rates and hassle-free forex services for your international travels.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="flex items-start gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 p-2 sm:p-0">
                    <div
                      className="w-[60px] xs:w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[130px] h-[40px] xs:h-[45px] sm:h-[50px] md:h-[65px] lg:h-[80px] xl:h-[85px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(38, 58, 72, 1)" }}
                    >
                      <img src="/image3.png" alt="icon3" className="w-5 xs:w-6 sm:w-7 md:w-9 lg:w-10 xl:w-12 h-5 xs:h-6 sm:h-7 md:h-9 lg:h-10 xl:h-12 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#151515] text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold uppercase leading-tight mb-1 sm:mb-2">
                        Flight Bookings
                      </h3>
                      <p className="text-[#112B3C] text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base font-medium uppercase leading-relaxed">
                        Best deals on domestic and international flights with flexible booking options and 24/7 support.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}