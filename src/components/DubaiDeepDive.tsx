// In: src/components/DubaiDeepDive.tsx

import React from 'react';

const DubaiDeepDive = () => {
  const sections = [
    {
      id: 1,
      title: "Where Luxury Meets Tradition and Innovation",
      content: "Dubai seamlessly blends modern luxury with timeless tradition, making it a premier global destination. From towering skyscrapers like the Burj Khalifa to luxurious estates and vibrant shopping districts, the city is a hub of culture, business, and innovation, offering an unforgettable mix of ancient Arabian charm and futuristic development."
    },
    {
      id: 2,
      title: "A Glimpse into Dubai’s Glorious History",
      content: "Dubai’s transformation began in the mid-1800s when the Bani Yas tribe settled there in 1833. Initially a simple land of water and desert, Dubai grew as a vital port by 1900, thriving on fishing, pearling, and sea-related trades. The bustling Deira markets fueled population growth. By the 1960s, oil revenues and cargo shipping propelled Dubai’s rapid development. In 1971, under the visionary leadership of Sheikh Zayed bin Sultan Al Nahyan, Dubai emerged among the world’s wealthiest cities. By the late 1990s, Dubai became a global tourist hotspot, known for its luxury, entertainment, excellent accommodations, and a safe, welcoming environment."
    },
    ,
    {
      id: 3,
      title: "Dubai Climate Breakdown: Peak, Shoulder & Off Season",
      content: "Dubai enjoys sunshine throughout the year, but the ideal time to explore the city is between November and March. During these months, the average temperature stays around 30°C, and the city comes alive with vibrant festivals, events, and outdoor experiences."
    },
    {
      id: 4,
      title: "How to Reach Dubai",
      content: "Dubai International Airport is one of the biggest and busiest airports in the world with frequent flights from most countries and their respective airlines. Dubai’s official airline is the Emirates which offers flights to about 100 destinations around the world, seconded by Flydubai and Etihad. Flights from India to Dubai take off from Delhi, Chennai, Hyderabad, Bangalore and other major cities as there are frequent travellers from the country. If not travelling to Dubai Airport, Travellers can also land at the Sharjah International Airport which operates Air Arabia primarily."
    },
    {
      id: 5,
      title: "Preparation",
      content: "Planning a trip to Dubai? Here are the essential travel tips you need to know – from currency and visa requirements to local etiquette – for a smooth and memorable journey",
      bulletPoints: [
        "Visa Essentials : Apply online for a Dubai e-visa. Keep your passport, photo, and bookings ready. E-visas arrive by email—don’t forget a printout while flying.",
        "Currency : AED is the official currency. Exchange in India for better rates. Carry some cash and a forex or international card for ease.",
        "Travel Etiquettes : Dress modestly in public. Avoid PDA. During Ramadan, don’t eat or drink publicly. Always ask before taking photos of people or religious sites."
      ]
    },
    {
      id: 6,
      title: "Apps And Maps",
      content: "From Rides to Restaurants: Essential Dubai Apps You Can’t Miss",
      bulletPoints: [
        "Wojhati : Official RTA app for tracking Dubai’s public transport – buses, metro, tram & more.",
        "BonApp : Find top-rated restaurants with deals up to 50% and support food donation from surplus.",
        "Talabat : Popular food delivery app offering local dishes from top restaurants with flexible payment options.",
        "Careem : Ride-hailing app like Uber with options for shared or taxi rides across Dubai."
      ]
    },
    {
      id: 7,
      title: "Dubai Cuisine Guide: From Street Food to Fine Dining",
      content: "Discover the ultimate Dubai Cuisine Guide, featuring everything from traditional Emirati street food to world-class fine dining experiences",
      bulletPoints: [
       "Margoog: A hearty Emirati stew with chicken, vegetables, tomatoes, and spices, traditionally served during Ramadan, best tried at Aseelah.",
       "Majboos: Fragrant rice dish with meat, baharat spices, and loomi, popular in Dubai, especially at Al Barza Restaurant & Café.",
       "Al Harees: Slow-cooked wheat and meat porridge, served with ghee, popular during Ramadan, best enjoyed at Al Jawaher Traditional Restaurant.",
       "Tabbouleh: Refreshing Middle Eastern salad with tomatoes, cucumber, parsley, and mint, offering a zesty, vegetarian-friendly option in Emirati cuisine.",
       "Kanafeh: Sweet dessert of semolina pastry, soft cheese, sugar syrup, and pistachios, best served warm and freshly made.",
       "Manousheh: Emirati breakfast flatbread topped with Akkawi cheese, zaatar herbs, and olive oil, often paired with minced lamb or jam."
    ]

    },
    {
      id: 8,
      title: "Dubai Shopping Guide: Best Places to Shop",
      content: "Explore the Dubai Shopping Guide to find the best places to shop, from traditional souks and bustling markets to luxury malls and designer boutiques.",
      bulletPoints: [
       "Dubai Mall: The world’s largest shopping mall with 1200+ stores, plus attractions like Dubai Aquarium, Ice Rink, and Dubai Fountain.",
       "Ibn Battuta Mall: A themed mall inspired by the travels of explorer Ibn Battuta, with country-themed courts and cultural vibes.",
       "Gold Souk: Traditional market in Deira offering stunning gold jewellery at competitive prices — a must-visit for gold lovers.",
       "Spice Souk: Aromatic alleyways filled with exotic spices, herbs, dry fruits, and traditional hookah items — a sensory delight.",
       "Textile Souk: Located in Bur Dubai, this market is a haven for silk, cotton, and embroidered fabrics, perfect for souvenirs.",
       "City Walk: An urban shopping district combining luxury fashion boutiques, street art, and fine dining in an open-air setup."
      ]
    },
    {
      id: 9,
      title: " Tech and Connectivity",
      content: "Dubai is at the forefront of technological innovation and digital infrastructure in the Middle East. With widespread 5G coverage, high-speed internet, and a smart city ecosystem, the city ensures seamless connectivity for residents, businesses, and tourists alike. Government initiatives like Smart Dubai and Dubai Internet City foster a thriving tech ecosystem that supports startups, global IT firms, and AI-driven services. Whether it’s cashless payments, autonomous transport, or IoT integration, Dubai offers a digitally connected experience that reflects its vision of becoming a global tech hub."
    },
    {
      id: 10,
      title: "Sustainable Tourism in Dubai",
      content: "Dubai is embracing sustainable tourism through eco-friendly hotels, green architecture, and responsible travel practices. Many accommodations follow strict environmental standards, focusing on energy efficiency, water conservation, and waste reduction.Attractions like Expo City Dubai and the Museum of the Future reflect the city’s commitment to sustainability. Eco-tourism options, including desert conservation areas and electric transport, offer visitors a greener way to explore the city.Dubai’s vision for sustainable tourism ensures a memorable experience that also protects the environment for future generations."
    },
    {
      id: 11,
      title: "Accomodation in Dubai-Luxury Hotels",
      content: "Experience world-class luxury hotels in Dubai, from iconic 7-star resorts to elegant stays with breathtaking views and unmatched hospitality.",
      bulletPoints: [
        "Atlantis: A stunning resort located on the Palm Jumeirah offering underwater suites, adventure parks, and luxury dining.",
        "Burj Al Arab: Dubai’s most iconic 7-star hotel shaped like a sail, known for ultra-luxury experiences and private butler service.",
        "Armani Hotel: Located in the Burj Khalifa, this hotel reflects elegance and sophistication with Giorgio Armani’s personal touch."
      ]
    },
    {
      id: 12,
      title: "Accomodation in Dubai-Budget Hotels",
      content: "Discover affordable budget hotels in Dubai offering comfort, convenience, and value for money—perfect for families, business travelers, and backpackers",
      bulletPoints:[
       "Rove: A modern, affordable hotel chain with artistic interiors, ideal for young travelers and digital nomads. Located near metro stations and city attractions.",
       "Premier Inn: Reliable and budget-friendly stay with clean rooms, rooftop pool, and airport shuttles — great for families and business travelers.",
       "Ibis: Compact yet comfortable hotel known for consistent service, value-for-money, and proximity to malls, metro, and restaurants."
    ]
    },
    {
      id: 13,
      title: "Best Areas To Stay",
      content: "Explore the best areas to stay in Dubai, from glamorous Downtown and Marina to budget-friendly Deira, tailored for every traveler’s style",
      bulletPoints:[
       "Downtown: Dubai’s most central and glamorous area featuring Burj Khalifa, Dubai Mall, and fountains — ideal for first-time visitors and luxury seekers.",
       "Marina: Trendy and lively waterfront district with yacht views, JBR beach, and vibrant nightlife — perfect for couples and young explorers.",
       "Deira: Historic and budget-friendly area close to the airport, souks, and cultural markets — great for local experiences and low-cost stays."
    ]
    },
    {
      id: 14,
      title: "Tips For Visitors",
      content: "Planning your Dubai trip? Keep these essential Dubai travel tips in mind for a smooth experience. Dress modestly to respect local culture, especially at religious sites and public spaces. Carry some dirhams (AED) for small purchases, although credit cards are widely accepted. Use Dubai Metro, trams, or ride-hailing apps for affordable transport across the city. Follow Dubai etiquette by avoiding public displays of affection and note that alcohol is available only in licensed venues. For the best weather in Dubai, plan your visit between November and March when sightseeing is most enjoyable. Don’t miss the chance to bargain at traditional souks, stay hydrated in the desert heat, and balance your trip between modern attractions and authentic Emirati culture for an unforgettable Dubai experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-start">
                <span className="text-slate-600 mr-3">{section.id}.</span>
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {section.content}
                </p>
              )}
              {section.bulletPoints && (
                <ul className="list-disc list-inside space-y-2">
                  {section.bulletPoints.map((point, index) => (
                    <li key={index} className="text-gray-700 text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Still Confused?</h3>
          <p className="text-gray-600 text-sm">
            Let TalesbyDora plan your perfect Dubai trip with expert guidance and tailor-made experiences.{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">
              info@talesbydora.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default DubaiDeepDive;
