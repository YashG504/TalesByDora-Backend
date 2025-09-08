// In: src/components/MaldivesDeepDive.tsx

import React from 'react';

const MaldivesDeepDive = () => {
  const sections = [
    {
      id: 1,
      title: "Where Paradise Meets the Ocean",
      content:
        "The Maldives is a tropical paradise made up of 1,200 coral islands scattered across the Indian Ocean. Famous for its turquoise lagoons, white sandy beaches, and luxury water villas, the Maldives is the ultimate escape for honeymooners, couples, and travelers seeking tranquility and natural beauty."
    },
    {
      id: 2,
      title: "A Glimpse into the Maldives’ History",
      content:
        "The Maldives has a rich history influenced by traders from India, Arabia, and Africa. Islam became the official religion in the 12th century, shaping Maldivian culture and traditions. Known historically for cowrie shells (once used as currency), the Maldives has transitioned into a tourism powerhouse, attracting millions of visitors with its unique blend of tradition and modern luxury."
    },
    {
      id: 3,
      title: "Maldives Climate Breakdown: Best Time to Visit",
      content:
        "The Maldives enjoys tropical weather year-round. The best time to visit is between November and April, during the dry season, when skies are clear and seas are calm—perfect for snorkeling, diving, and beach activities. May to October is the monsoon season, with occasional rain showers but also fewer crowds and great deals."
    },
    {
      id: 4,
      title: "How to Reach the Maldives",
      content:
        "Velana International Airport in Malé is the main entry point for international travelers, with direct flights from India, Dubai, Singapore, and major hubs worldwide. From Malé, visitors reach their resorts via scenic seaplane rides or speedboat transfers, offering breathtaking aerial views of the atolls."
    },
    {
      id: 5,
      title: "Preparation",
      content:
        "Planning your Maldives trip? Here are some essentials for a smooth and stress-free journey:",
      bulletPoints: [
        "Visa Essentials: The Maldives offers visa-on-arrival for 30 days to most nationalities. Just carry a valid passport, confirmed hotel booking, and return ticket.",
        "Currency: Maldivian Rufiyaa (MVR) is the local currency, though USD is widely accepted at resorts.",
        "Packing Tips: Light clothes, reef-safe sunscreen, waterproof phone covers, and snorkeling gear are must-haves."
      ]
    },
    {
      id: 6,
      title: "Apps And Maps",
      content: "Stay connected and make your trip smooth with these handy apps:",
      bulletPoints: [
        "Google Maps: Helpful for Malé city exploration and nearby islands.",
        "TripAdvisor: Reviews for resorts, activities, and restaurants.",
        "Speedboat & Seaplane Schedules: Provided by most resorts to keep transfers on time."
      ]
    },
    {
      id: 7,
      title: "Maldives Cuisine Guide: From Local to Luxury",
      content:
        "Taste Maldivian flavors with fresh seafood, coconut-based curries, and international fine dining at world-class resorts.",
      bulletPoints: [
        "Mas Huni: Traditional breakfast of tuna, coconut, onion, and chili served with flatbread.",
        "Garudiya: A comforting fish soup with rice, lime, and chili.",
        "Bis Keemiya: Maldivian pastry stuffed with tuna, onion, and cabbage.",
        "Reef Fish Curry: Rich coconut milk curry, often spicy, with freshly caught fish.",
        "Bondibaiy: Traditional sweet pudding made with rice and coconut."
      ]
    },
    {
      id: 8,
      title: "Maldives Shopping Guide",
      content:
        "Though shopping is limited compared to big cities, the Maldives offers unique souvenirs worth taking home:",
      bulletPoints: [
        "Local Handicrafts: Wooden lacquerware, woven mats, and seashell items.",
        "Coconut Products: Oil, crafts, and skincare items.",
        "Maldivian Sarongs: Colorful wraps perfect for beachwear.",
        "Handmade Jewelry: Coral- and shell-inspired designs."
      ]
    },
    {
      id: 9,
      title: "Tech and Connectivity",
      content:
        "Most resorts offer high-speed Wi-Fi, but connection may be limited on remote islands. Local SIM cards from Dhiraagu or Ooredoo are available at Malé airport for affordable data and calling."
    },
    {
      id: 10,
      title: "Sustainable Tourism in the Maldives",
      content:
        "The Maldives is at the forefront of eco-tourism, with many resorts adopting coral reef conservation, renewable energy, and plastic-free initiatives. Visitors are encouraged to respect marine life, use reef-safe sunscreens, and support eco-friendly activities."
    },
    {
      id: 11,
      title: "Accommodation in the Maldives – Luxury Resorts",
      content:
        "Stay in overwater villas, beachfront suites, or private island resorts with unmatched luxury and privacy.",
      bulletPoints: [
        "Soneva Jani: Iconic overwater villas with slides into the lagoon.",
        "Baros Maldives: Romantic resort with world-class diving experiences.",
        "The St. Regis Maldives Vommuli: Luxurious private villas with butler service."
      ]
    },
    {
      id: 12,
      title: "Accommodation in the Maldives – Budget Options",
      content:
        "Travelers on a budget can opt for local island stays offering authentic Maldivian experiences:",
      bulletPoints: [
        "Maafushi Guesthouses: Affordable stays with access to water sports.",
        "Thulusdhoo: Surfing hub with cozy guesthouses and beachside vibes.",
        "Hulhumalé: Close to the airport, with budget-friendly hotels."
      ]
    },
    {
      id: 13,
      title: "Best Areas to Stay",
      content: "Choose the right island based on your travel style:",
      bulletPoints: [
        "Private Resorts: Perfect for honeymooners seeking luxury and privacy.",
        "Local Islands: Great for budget travelers and cultural immersion.",
        "Malé: Best for short stays, city life, and easy airport access."
      ]
    },
    {
      id: 14,
      title: "Tips for Visitors",
      content:
        "Respect local customs when visiting inhabited islands—dress modestly outside resorts. Alcohol is served only at resorts and licensed venues. Always pre-book transfers, carry reef-safe sunscreen, and pack light cotton clothes. For divers and snorkelers, the dry season offers the clearest waters."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
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
                    <li
                      key={index}
                      className="text-gray-700 text-sm leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Still Confused?
          </h3>
          <p className="text-gray-600 text-sm">
            Let TalesbyDora plan your perfect Maldives trip with expert guidance
            and tailor-made experiences.{" "}
            <a
              href="mailto:info@talesbydora.com"
              className="text-slate-700 hover:underline"
            >
              info@talesbydora.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default MaldivesDeepDive;
