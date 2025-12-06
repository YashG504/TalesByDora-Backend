import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { X, MapPin, Calendar, Users, Clock, CheckCircle, PlusCircle, Check } from 'lucide-react'; 
import './SingleItineraryStyles.css';
import Page10 from '../components/Page10';

// --- Static Data ---

const INCLUSIONS = [
    "Comfortable 4—5 star stays", 
    "Daily breakfast", 
    "Airport transfers", 
    "Guided city tours", 
    "Entry tickets", 
    "Cultural experiences",
    "All transfers", 
    "Professional tour manager (8+)",
    "Welcome kit",
    "Taxes & service charges",
    "24/7 emergency support",
    "Basic travel insurance"
];

const EXCLUSIONS = [
    "Flights (can be arranged)", 
    "Visa fees & TCS", 
    "City/hotel taxes & resort fees", 
    "Meals not mentioned", 
    "Personal expenses", 
    "Tips and gratuities", 
    "Premium travel insurance", 
    "Extra activities", 
    "Room service/mini-bar", 
    "Photography charges",
    "Services not specified"
];

// Added 'numericPrice' for calculation logic. 
// 0 means "On Request" (won't affect total sum but will be listed)
const OPTIONAL_ADDONS = [
    { title: "Airline bookings", price: "from ₹5,000", numericPrice: 5000 },
    { title: "Luxury suite upgrades", price: "from ₹8,000/night", numericPrice: 8000 },
    { title: "Private guided tours", price: "from ₹12,000/day", numericPrice: 12000 },
    { title: "Special experiences", price: "on request", numericPrice: 0 },
    { title: "Visa fast-track", price: "add-on ₹2,000", numericPrice: 2000 },
    { title: "Comprehensive insurance", price: "₹1,500", numericPrice: 1500 },
    { title: "Professional photography", price: "on request", numericPrice: 0 },
    { title: "Airport lounge access", price: "from ₹2,500", numericPrice: 2500 }
];

const INITIAL_FORM_STATE = { name: '', phone: '', travelers: '', travelDate: '' };

const FORM_INPUTS = [
    { name: 'name', type: 'text', placeholder: 'Full name' },
    { name: 'phone', type: 'tel', placeholder: 'WhatsApp Phone no.' },
    { name: 'travelers', type: 'number', placeholder: 'No. of travellers', min: 1 },
    { name: 'travelDate', type: 'text', placeholder: 'Dates of travel (e.g., Oct 2025)' },
];

// --- Sub-Components ---

// Updated to accept 'calculatedPrice' and 'selectedAddonNames'
const BookingFormModal = React.memo(({ isOpen, onClose, itineraryName, calculatedPrice, selectedAddonNames }: any) => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleChange = useCallback((e: any) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }, []);

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        const whatsAppNumber = "918001888847";
        
        let addonText = "";
        if (selectedAddonNames && selectedAddonNames.length > 0) {
            addonText = `\n\nIncluded Add-ons:\n- ${selectedAddonNames.join('\n- ')}`;
        }

        const message = `Hello, I'd like to plan a trip for "${itineraryName}".
        \nName: ${formData.name}
        \nWhatsApp: ${formData.phone}
        \nTravellers: ${formData.travelers}
        \nDate: ${formData.travelDate}
        \nEstimated Budget: ₹ ${calculatedPrice}${addonText}`;

        window.location.href = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
    }, [formData, itineraryName, calculatedPrice, selectedAddonNames]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="new-booking-card relative w-full max-w-sm bg-white">
                <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-200 z-10"><X size={24} /></button>
                <div className="expert-header"><h3>Customise your trip</h3></div>
                <form className="expert-form" onSubmit={handleSubmit}>
                    {FORM_INPUTS.map(input => (
                        <input key={input.name} {...input} className="form-input" value={formData[input.name as keyof typeof formData]} onChange={handleChange} required />
                    ))}
                    
                    <div className="price-section mt-4 mb-4 text-center">
                        <span className="text-gray-500 text-sm">Estimated Total</span>
                        {/* Display the calculated dynamic price */}
                        <div className="text-xl font-bold text-orange-600">₹ {calculatedPrice}/- <span className="text-xs text-gray-400 font-normal">per person</span></div>
                        {selectedAddonNames.length > 0 && (
                            <div className="text-xs text-green-600 mt-1 font-medium">
                                + {selectedAddonNames.length} Add-ons included
                            </div>
                        )}
                    </div>

                    <button type="submit" className="plan-button">GET QUOTE</button>
                </form>
            </div>
        </div>
    );
});

interface Itinerary {
    _id: string; name: string; description: string; images: string[]; rating: number;
    numberOfRating: string; time: string; price: string;
    daywise: { [key: string]: { title: string; description: string; icon?: string } };
    highlights: string[];
}

const SingleItineraryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [itinerary, setItinerary] = useState<Itinerary | null>(null);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    // 1. STATE FOR SELECTED ADD-ONS (Array of indices)
    const [selectedAddons, setSelectedAddons] = useState<number[]>([]);

    const fetchItinerary = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/itineraries/id/${id}`);
            setItinerary(response.data);
        } catch (err) {
            console.error("Using fallback data due to API error");
            setItinerary({
                _id: "1", name: "Dubai Prestige Escape", description: "Indulge in 5 days of Dubai's finest.",
                images: ["/Destination/dubai2.jpg", "/Destination/dubai2.jpg"], 
                rating: 4.6, numberOfRating: "269", time: "5 Nights 6 Days", price: "40,850",
                daywise: {
                    day1: { title: "Arrival in Dubai & Marina Dhow Cruise", description: "Touch down in Dubai and transfer seamlessly to your 5-star sanctuary. In the evening, enjoy a magical dinner cruise.", icon: "✈️" },
                    day2: { title: "Dubai City Tour & Burj Khalifa", description: "Visit the Museum of the Future and stand atop the world at Burj Khalifa.", icon: "🏙️" },
                    day3: { title: "Desert Safari Adventure", description: "Dune bashing, BBQ dinner, and cultural shows under the stars.", icon: "🐪" },
                    day4: { title: "Abu Dhabi City Tour", description: "Visit the Grand Mosque and Ferrari World.", icon: "🕌" },
                    day5: { title: "Departure", description: "Transfer to airport with sweet memories.", icon: "👋" }
                },
                highlights: ["Stay at 5-star Hotel", "Marina Dhow Cruise", "Burj Khalifa 125th Floor", "Desert Safari BBQ"]
            });
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => { fetchItinerary(); }, [fetchItinerary]);

    // 2. TOGGLE LOGIC
    const toggleAddon = (index: number) => {
        setSelectedAddons(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // Remove if already selected
            } else {
                return [...prev, index]; // Add if not selected
            }
        });
    };

    // 3. PRICE CALCULATION LOGIC
    const finalCalculation = useMemo(() => {
        if (!itinerary) return { price: "0", names: [] };

        // Convert base string price "40,850" to number 40850
        const basePrice = parseInt(itinerary.price.replace(/,/g, ''), 10) || 0;
        
        let addOnTotal = 0;
        const names: string[] = [];

        selectedAddons.forEach(index => {
            addOnTotal += OPTIONAL_ADDONS[index].numericPrice;
            names.push(OPTIONAL_ADDONS[index].title);
        });

        const total = basePrice + addOnTotal;
        
        // Return formatted string with commas (e.g., "45,850") and names
        return { 
            price: total.toLocaleString('en-IN'), 
            names: names 
        };
    }, [itinerary, selectedAddons]);

    const daywiseKeys = useMemo(() => Object.keys(itinerary?.daywise || {}).sort(), [itinerary]);

    if (loading) return <div className="loading-screen">Loading...</div>;
    if (!itinerary) return <div className="error-screen">Itinerary not found</div>;

    return (
        <>
            {/* HERO SECTION */}
            <header className="hero-banner" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${itinerary.images[0]})` }}>
                <div className="hero-content">
                    <span className="hero-subtitle">TRIP TO</span>
                    <h1 className="hero-title">{itinerary.name}</h1>
                    <div className="hero-stats-bar">
                        <div className="stat-item"><Clock size={18} /><div><span className="stat-label">DURATION</span><span className="stat-value">{itinerary.time}</span></div></div>
                        <div className="stat-separator"></div>
                        <div className="stat-item"><Users size={18} /><div><span className="stat-label">TRAVELLERS</span><span className="stat-value">2 Adults</span></div></div>
                         <div className="stat-separator"></div>
                        <div className="stat-item"><MapPin size={18} /><div><span className="stat-label">PLACES</span><span className="stat-value">{itinerary.name.split(' ')[0]}</span></div></div>
                    </div>
                </div>
            </header>

            {/* STICKY NAVIGATION */}
            <nav className="sticky-nav">
                <div className="container nav-container">
                    <a href="#highlights" className="nav-link">Highlights</a>
                    <a href="#itinerary" className="nav-link active">Itinerary</a>
                    <a href="#inclusions" className="nav-link">Inclusions</a>
                    <a href="#exclusions" className="nav-link">Exclusions</a>
                </div>
            </nav>

            <main className="container main-layout">
                <div className="content-column">
                    
                    {/* HIGHLIGHTS */}
                    <section id="highlights" className="section-block">
                        <h2 className="section-heading">Highlights</h2>
                        <ul className="highlights-grid">
                            {itinerary.highlights.map((h, i) => (
                                <li key={i}><CheckCircle size={16} className="text-green-500 inline mr-2"/>{h}</li>
                            ))}
                        </ul>
                    </section>

                    {/* ITINERARY */}
                    <section id="itinerary" className="section-block">
                        <h2 className="section-heading">Day-wise Itinerary</h2>
                        <div className="timeline-container">
                            <div className="timeline-start"><div className="timeline-dot start-dot"></div><div className="timeline-date">Start</div></div>
                            {daywiseKeys.map((dayId, index) => {
                                const dayData = itinerary.daywise[dayId];
                                return (
                                    <div key={dayId} className="timeline-item">
                                        <div className="timeline-left"><div className="day-pill">Day {index + 1}</div><div className="timeline-line"></div></div>
                                        <div className="timeline-content">
                                            <div className="itinerary-card">
                                                <div className="card-header"><h3 className="card-title">{dayData.title}</h3></div>
                                                <div className="card-body always-show">
                                                    <div className="activity-row"><span className="activity-icon">🏨</span><div><strong>Accommodation</strong><p className="text-sm text-gray-500">Included in package</p></div></div>
                                                    <div className="activity-row"><span className="activity-icon">✨</span><p>{dayData.description}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* INCLUSIONS */}
                    <section id="inclusions" className="section-block">
                        <h2 className="section-heading">Inclusions</h2>
                        <div className="inc-grid-full"><ul>{INCLUSIONS.map((item, i) => <li key={i}>✓ {item}</li>)}</ul></div>
                    </section>

                    {/* EXCLUSIONS */}
                    <section id="exclusions" className="section-block">
                        <h2 className="section-heading">Exclusions</h2>
                        <div className="inc-grid-full"><ul>{EXCLUSIONS.map((item, i) => (<li key={i} style={{ color: '#666' }}><X size={16} className="text-red-500 inline mr-2" />{item}</li>))}</ul></div>
                    </section>

                    {/* OPTIONAL ADD-ONS (INTERACTIVE) */}
                    <section id="addons" className="section-block">
                        <h2 className="section-heading">Optional Add-Ons</h2>
                        <p className="text-sm text-gray-500 mb-4">Select items to add them to your estimated quote.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {OPTIONAL_ADDONS.map((addon, i) => {
                                const isSelected = selectedAddons.includes(i);
                                return (
                                    <div 
                                        key={i} 
                                        onClick={() => toggleAddon(i)}
                                        className={`border rounded-xl p-4 flex justify-between items-center transition-all duration-300 cursor-pointer group
                                            ${isSelected ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 bg-white hover:shadow-lg hover:border-orange-300'}
                                        `}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-full transition-colors ${isSelected ? 'bg-green-100 text-green-600' : 'bg-orange-50 text-orange-500 group-hover:bg-orange-100'}`}>
                                                {isSelected ? <Check size={20} /> : <PlusCircle size={20} />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">{addon.title}</h4>
                                                <p className="text-xs text-gray-500 mt-1">Enhance your trip</p>
                                            </div>
                                        </div>
                                        <div className="text-right pl-2">
                                            <span className={`block font-bold text-sm ${isSelected ? 'text-green-700' : 'text-orange-600'}`}>{addon.price}</span>
                                            <button className={`text-[10px] uppercase font-bold tracking-wide mt-1 transition-colors ${isSelected ? 'text-green-600' : 'text-gray-400 group-hover:text-orange-500'}`}>
                                                {isSelected ? 'ADDED' : 'ADD'}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* 3. BOOKING CARD (Sticky Sidebar - Dynamic Price) */}
                <aside className="booking-sidebar">
                    <div className="booking-card">
                        <div className="booking-header">
                            Customise your trip with an expert
                        </div>
                        <div className="booking-body">
                            <div className="price-tag">
                                <span className="label">Estimated Quote</span>
                                {/* DYNAMIC PRICE DISPLAY */}
                                <div className="price transition-all duration-500">
                                    ₹ {finalCalculation.price}/- 
                                    <span className="per-person">per person</span>
                                </div>
                                {selectedAddons.length > 0 && (
                                    <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                        <CheckCircle size={12} /> {selectedAddons.length} Add-ons selected
                                    </div>
                                )}
                            </div>
                            <button className="plan-button" onClick={() => setIsFormOpen(true)}>
                                PLAN WITH AN EXPERT
                            </button>
                        </div>
                    </div>
                </aside>
            </main>

            <Page10 />
            
            {/* Modal now receives the calculated price and selected names */}
            <BookingFormModal 
                isOpen={isFormOpen} 
                onClose={() => setIsFormOpen(false)} 
                itineraryName={itinerary.name} 
                calculatedPrice={finalCalculation.price} 
                selectedAddonNames={finalCalculation.names}
            />

            {/* Floating Enquire Button */}
            <div className="fixed bottom-6 left-6 z-50">
                <button 
                    onClick={() => navigate('/enquire')} 
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg animate-bounce hover:animate-none hover:scale-105 transition-all duration-300 font-bold tracking-wide flex items-center gap-1.5"
                >
                    <span>Enquire Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default React.memo(SingleItineraryPage);