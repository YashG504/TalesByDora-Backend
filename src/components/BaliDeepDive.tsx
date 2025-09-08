// In: src/components/BaliDeepDive.tsx

import React from 'react';

const BaliDeepDive = () => {
  const sections = [
    {
      id: 1,
      title: "In the Heart of the Indonesian Archipelago.....",
      content: "In the heart of the Indonesian archipelago lies a land where sacred temples whisper ancient legends, and terraced rice fields ripple like living paintings. Bali is a destination where spirituality and sophistication blend seamlessly. Here, time-honored rituals unfold beneath fiery sunsets, and artisanal crafts thrive beside vibrant beach clubs. Bali offers a rare harmony — where nature, culture, and contemporary luxury invite travelers into a world both timeless and transformative."
    },
    {
      id: 2,
      title: "A Glimpse into Bali’s Glorious History",
      content: "Bali's story is one of resilience, spirituality, and artistic brilliance. Its history dates back to prehistoric times, with the first inhabitants arriving over 4,000 years ago. By the 9th century, Hinduism and Buddhism had firmly taken root, heavily influencing Balinese art, architecture, and culture. This spiritual foundation was reinforced when Hindu Majapahit nobles fled from Java in the 14th century, bringing classical Javanese culture to Bali — shaping the island’s unique identity that still thrives today. Despite being colonized by the Dutch in the 1900s, Bali maintained much of its cultural independence. Traditional customs, dance, and temple ceremonies continued through foreign rule, World War II, and Indonesia’s fight for independence in 1945."
    },
    {
      id: 3,
      title: "Bali Climate Breakdown: Peak, Shoulder & Off Season",
      content: "Bali experiences a tropical climate with two seasons, wet (November–March) and dry (April–October). The temperature varies between 20°C to 32°C throughout the year, and the humidity remains above 75% at all times. During the wet season, there is occasional heavy rain, mostly in the afternoon, while the dry season is great for travel and outdoor recreation."
    },
    {
      id: 4,
      title: "How to Reach Bali",
      content: "The simplest and most popular way to reach Bali is by air travel, with the island’s main gateway being Ngurah Rai International Airport (DPS), located near Denpasar in southern Bali. As an island, Bali is not accessible by direct road or train, which makes flying the most efficient and convenient option for international and domestic travelers alike. For travelers from India, there are multiple convenient options with one-stop connecting flights from cities like Delhi, Mumbai, Bangalore, Chennai, Kolkata, and Hyderabad. Airlines such as Singapore Airlines, AirAsia, Scoot, Batik Air, Malaysia Airlines, and Thai Airways regularly operate these routes, often offering affordable fares and flexible schedules."
    },
    {
    id: 5,
    title: "Preparation",
    content: "Planning a trip to Bali? Here are the essential travel tips you need to know – from currency and visa requirements to local etiquette – for a smooth and memorable journey",
    bulletPoints: [
    "Visa Essentials : Most travelers, including Indian citizens, can enter Bali easily with a Visa on Arrival (VOA) or e-VOA, valid for 30 days and extendable once. The VOA costs around IDR 500,000 (~₹2,600) and is issued at Denpasar Airport.",
    "Currency : The official currency of Bali is the Indonesian Rupiah (IDR). It’s commonly written as Rp. Notes come in denominations ranging from Rp1,000 to Rp100,000, and coins are also in circulation.",
    "Travel Etiquettes : Bali is deeply spiritual and culturally rich, so respectful behavior goes a long way. Always dress modestly when visiting temples — cover shoulders and knees, and wear a sarong (often provided). Remove shoes before entering homes or sacred places."
    ]
   }
,
  {
  id: 6,
  title: "Apps And Maps",
  content: "From Rides to Restaurants: Essential Bali Apps You Can’t Miss",
  bulletPoints: [
    "Grab & Gojek : Your go-to apps for ride-hailing, food delivery, and even courier services — reliable and budget-friendly.",
    "Google Maps : Excellent for using public transport (buses, MRT, BTS).",
    "Waze : One of Bali’s top food delivery apps, covering most cities.",
    "12Go Asia : Perfect for vegetarians and vegans traveling in Bali."
  ]
}
,
  {
  id: 7,
  title: "Bali Cuisine Guide",
  content: "Discover the ultimate Bali Cuisine Guide.",
  bulletPoints: [
    "Babi Guling : A flavorful roast pig, marinated with traditional Balinese spices and slow-cooked to crispy perfection.",
    "Nasi Campur : A classic mixed rice dish served with assorted meats, vegetables, sambal, and sometimes a boiled egg.",
    "Lawar : A unique Balinese specialty made with spiced coconut, minced meat, and rich local herbs.",
    "Satay Lilit : A twist on satay—minced seafood or meat, wrapped around lemongrass sticks and grilled to smoky goodness.",
    "Nasi Goreng : Indonesia’s iconic fried rice, often topped with egg and served with pickles, chicken, or prawns.",
    "Mie Goreng : Stir-fried Indonesian noodles with vegetables, meat or seafood, and a savory-sweet soy sauce."
  ]
}
,
  {
  id: 8,
  title: "Shopping in Bali",
  content: "Explore the Bali Shopping Guide to find the best places to shop, from traditional markets and floating bazaars to luxury malls and night bazaars.",
  bulletPoints: [
    "Ubud Art Market : A vibrant market in the cultural heart of Bali, known for handcrafted souvenirs, textiles, and paintings.",
    "Sukawati Art Market : A traditional market offering affordable local art, masks, and woodcarvings — perfect for bargain hunters.",
    "Seminyak Village and Boutiques : Trendy streets lined with designer fashion, home décor, and upscale Balinese brands.",
    "Celuk Village : The island’s silver and gold jewelry hub, famous for fine craftsmanship and unique designs.",
    "Tegallalang Handicraft Center : A stretch of shops specializing in furniture, wooden sculptures, and woven crafts.",
    "Kuta & Legian Streets : Bustling lanes packed with budget-friendly beachwear, bags, and tourist souvenirs."
  ]
},
{
  id: 9,
  title: "Tech and Connectivity",
  content: "Bali offers excellent tech and connectivity for travelers. Tourist SIM cards are affordable and easy to find at airports or convenience stores like 7-Eleven, with providers such as AIS, DTAC, and TrueMove H offering unlimited data plans starting from just ₹200. Wi-Fi is widely available and reliable in hotels, cafés, shopping malls, and airports, especially in major cities and tourist areas. Whether you’re uploading travel content or attending Zoom calls from a rice field view, staying online in Bali is smooth and convenient."
},
  {
  id: 10,
  title: "Sustainable Tourism in Bali",
  content: "Bali is increasingly embracing eco-conscious travel, with many businesses adopting sustainable practices to protect the island’s natural beauty and cultural heritage. From eco-resorts made of bamboo to plastic-free initiatives and coral reef restoration programs, sustainability is becoming a core part of the tourism experience. Travelers can visit turtle hatcheries, join beach clean-ups, or stay in eco-lodges that prioritize low-impact living. Visitors are encouraged to minimize plastic use, support local artisans and businesses, and respect natural habitats — especially around marine life and sacred sites. Choosing responsible tourism helps preserve Bali’s environment for generations to come."
  },
  {
  id: 11,
  title: "Accommodation in Bali - Luxury Hotels",
  content: "Bali offers a wide range of accommodation options to suit every type of traveler — whether you're seeking beachfront luxury, peaceful jungle retreats, family-friendly resorts, or backpacker hostels.",
  bulletPoints: [
    "Four Seasons Resort Bali at Sayan (Ubud) : A tranquil jungle escape with riverside villas, award-winning spa, and yoga in nature.",
    "The Mulia (Nusa Dua) : Ultra-luxury beachfront property known for its palatial suites, fine dining, and serene ocean views.",
    "AYANA Resort & Spa (Jimbaran) : Clifftop resort featuring a private beach, 12 pools, and the famous Rock Bar overlooking the sea."
    ]
},
{
  id: 12,
  title: "Accommodation in Bali - Budget Hotels",
  content: "Discover affordable budget hotels in Bali offering comfort, convenience, and great value for backpackers, solo travelers, and families alike.",
  bulletPoints: [
    "The Udaya Resort & Spa (Ubud) : Balinese-styled villas nestled in greenery, offering spa treatments and romantic floating breakfasts.",
    "Bisma Eight (Ubud) : A boutique hotel with modern Japanese-Balinese design, cozy rooms, and a rooftop infinity pool.",
    "The Haven Bali (Seminyak) : Comfortable and stylish hotel near shops and the beach, great for shopping and relaxing."
    ]
},
{
  id: 13,
  title: "Best Areas To Stay in Bali",
  content: "Explore the best areas to stay in Bali.",
  bulletPoints: [
    "Ubud : Located in the lush highlands of Bali, Ubud is the island’s cultural and spiritual heart. It’s surrounded by rice terraces, temples, art galleries, yoga studios, and wellness retreats — ideal for travelers seeking peace, creativity, and nature.",
    "Seminyak : Trendy and upscale, Seminyak is known for its luxury resorts, boutique shopping, chic cafes, and vibrant nightlife. It offers a more polished beach experience with iconic spots like Potato Head and Ku De Ta.",
    "Canggu : A hip, surfer-friendly town with a youthful vibe. Canggu is filled with stylish cafés, beach bars, co-working spaces, and rice field views — perfect for digital nomads, creatives, and laid-back explorers."
  ]
},
{
  id: 14,
  title: "Tips For Visitors",
  content: "Planning your Bali trip? Keep these essential travel tips in mind for a smooth experience. Book early during peak season (June–August & December–January) — popular spots fill up fast. Choose your area wisely based on your travel style. Many mid-range stays offer private pools — compare villa options for great value."
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
            Let TalesbyDora plan your perfect Bali trip with expert guidance and tailor-made experiences.{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">
              info@talesbydora.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default BaliDeepDive;
