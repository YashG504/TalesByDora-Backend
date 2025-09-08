// In: src/components/AndamanDeepDive.tsx

import React from 'react';

const AndamanDeepDive = () => {
  const sections = [
    {
      id: 1,
      title: "Where Serenity Meets Adventure",
      content:
        "The Andaman & Nicobar Islands are a tropical paradise in the Bay of Bengal, known for their crystal-clear waters, lush green forests, and stunning beaches. From snorkeling in coral reefs to exploring colonial history, these islands offer the perfect balance of relaxation and adventure."
    },
    {
      id: 2,
      title: "A Glimpse into Andaman’s History",
      content:
        "The Andaman Islands have been home to indigenous tribes for thousands of years. During colonial times, the British established the infamous Cellular Jail in Port Blair, where freedom fighters were imprisoned. Today, the islands stand as a symbol of natural beauty, cultural diversity, and historical significance."
    },
    {
      id: 3,
      title: "Best Time to Visit Andaman",
      content:
        "The ideal time to visit Andaman is between October and May. The weather stays pleasant, with calm seas perfect for water sports, island hopping, and beach activities. Monsoon season (June–September) sees heavy rains and restricted ferry services, so it’s best avoided."
    },
    {
      id: 4,
      title: "How to Reach Andaman",
      content:
        "Port Blair, the capital of Andaman, is connected by direct flights from major Indian cities like Delhi, Chennai, Kolkata, Hyderabad, and Bangalore. Regular passenger ships also operate from Chennai, Kolkata, and Visakhapatnam, though the journey takes around 3–4 days."
    },
    {
      id: 5,
      title: "Preparation",
      content:
        "Here are a few essentials to keep in mind before heading to the islands:",
      bulletPoints: [
        "Entry Permits: Indian nationals don’t need a visa, but certain restricted areas require special permits (available at Port Blair). Foreigners require a Restricted Area Permit (RAP).",
        "Currency: Indian Rupee (INR) is the official currency. ATMs are available in Port Blair, but carry cash for smaller islands.",
        "Packing Tips: Carry lightweight cotton clothes, waterproof sandals, sunscreen, hats, and insect repellent. Don’t forget snorkeling or diving gear if you own one!"
      ]
    },
    {
      id: 6,
      title: "Must-Try Local Experiences",
      content:
        "The Andaman Islands are rich in culture and natural wonders—don’t miss these unique experiences:",
      bulletPoints: [
        "Light & Sound Show at Cellular Jail: A moving tribute to India’s freedom struggle.",
        "Snorkeling at Elephanta Beach: Vibrant coral reefs and colorful marine life.",
        "Scuba Diving at Havelock: Explore underwater caves, shipwrecks, and exotic fish.",
        "Glass-Bottom Boat Ride at North Bay: Perfect for non-swimmers to see corals.",
        "Sea Walking: Walk on the ocean floor at Neil Island or North Bay.",
        "Trekking to Mount Harriet: A lush green trail with panoramic views."
      ]
    },
    {
      id: 7,
      title: "Andaman Cuisine Guide",
      content:
        "Seafood dominates Andaman cuisine, influenced by Indian, Thai, and Burmese flavors.",
      bulletPoints: [
        "Fish Curry & Rice: Spicy coconut-based curry served with steamed rice.",
        "Lobsters & Crabs: Freshly caught, grilled or cooked in masala blends.",
        "Coconut Prawn Curry: A local favorite with rich flavors of coconut milk.",
        "Cutlets & Pakoras: Popular evening snacks made with fresh fish or vegetables."
      ]
    },
    {
      id: 8,
      title: "Shopping in Andaman",
      content:
        "Shopping in Andaman is limited but great for souvenirs and local handicrafts.",
      bulletPoints: [
        "Wooden Handicrafts: Made from padauk wood, unique to Andaman.",
        "Shell Jewelry: Earrings, necklaces, and decorative items crafted from shells.",
        "Coconut Carvings: Handcrafted bowls, lamps, and decorative pieces.",
        "Spices & Organic Products: Locally grown spices, honey, and essential oils."
      ]
    },
    {
      id: 9,
      title: "Accommodation – Luxury Resorts",
      content:
        "Andaman offers stunning resorts by the sea for a luxurious stay.",
      bulletPoints: [
        "Barefoot at Havelock: Eco-friendly luxury cottages near Radhanagar Beach.",
        "Taj Exotica Resort & Spa: Ultra-luxury resort with world-class amenities.",
        "Munjoh Ocean Resort: Boutique resort with private villas and beach access."
      ]
    },
    {
      id: 10,
      title: "Accommodation – Budget Options",
      content:
        "For budget travelers, Andaman has many cozy hotels and guesthouses.",
      bulletPoints: [
        "Sea Shell Samssara, Neil Island: Affordable yet comfortable beachfront stay.",
        "Green Ocean Guesthouses: Family-run budget stays near Port Blair.",
        "Blue Bird Resort, Havelock: Simple cottages with basic amenities."
      ]
    },
    {
      id: 11,
      title: "Best Areas to Stay",
      content: "Each part of Andaman offers a different vibe. Choose wisely:",
      bulletPoints: [
        "Port Blair: Best for first-time visitors, history buffs, and easy connectivity.",
        "Havelock (Swaraj Dweep): Famous for Radhanagar Beach and adventure sports.",
        "Neil Island (Shaheed Dweep): Perfect for relaxation and scenic views.",
        "North & Middle Andaman: Great for offbeat experiences and tribal culture."
      ]
    },
    {
      id: 12,
      title: "Tips for Visitors",
      content:
        "Plastic is banned on many islands, so carry eco-friendly alternatives. Internet is patchy outside Port Blair—download offline maps. Always follow guidelines when snorkeling or diving to protect coral reefs. Pre-book ferry tickets during peak season. Carry cash for small islands, as cards may not work everywhere."
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
            Let TalesbyDora plan your perfect Andaman trip with expert guidance
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

export default AndamanDeepDive;
