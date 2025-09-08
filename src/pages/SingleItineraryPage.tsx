import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { X } from 'lucide-react'; // For the modal's close button
import './SingleItineraryStyles.css';
import Page10 from '../components/Page10';

// --- Reusable Booking Form Modal Component ---
// This contains the logic for your booking form popup.
const BookingFormModal = ({ isOpen, onClose, itineraryName, price }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        travelers: '',
        travelDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsAppNumber = "918001888847"; // Your WhatsApp number
        const message = `Hello, I'd like to plan a trip for the "${itineraryName}" itinerary.\n\nName: ${formData.name}\nWhatsApp No: ${formData.phone}\nNo. of Travellers: ${formData.travelers}\nDates of Travel: ${formData.travelDate}`;
        const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappUrl;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 font-sans">
             <div className="new-booking-card bg-white relative w-full max-w-sm">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"><X size={24} /></button>
                <div className="expert-header"><h3>Customise your trip with an expert</h3></div>
                <form className="expert-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full name" className="form-input" value={formData.name} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="WhatsApp Phone no." className="form-input" value={formData.phone} onChange={handleChange} required />
                    <input type="number" name="travelers" placeholder="No. of travellers" className="form-input" min="1" value={formData.travelers} onChange={handleChange} required />
                    <input type="text" name="travelDate" placeholder="Dates of travel (e.g., Oct 2025)" className="form-input" value={formData.travelDate} onChange={handleChange} required />
                    <div className="price-section">
                        <span className="price-label">Starting from</span>
                        <span className="price-amount">RS. {price}/- <span className="price-per">per person</span></span>
                    </div>
                    <button type="submit" className="plan-button">PLAN WITH AN EXPERT</button>
                </form>
            </div>
        </div>
    );
};


// --- Main Itinerary Page Component ---

interface Itinerary {
    _id: string;
    name: string;
    description: string;
    images: string[];
    rating: number;
    numberOfRating: string;
    time: string;
    price: string;
    daywise: { [key: string]: { title: string; description: string; icon?: string } };
    highlights: string[];
}

const SingleItineraryPage: React.FC = () => {
    // 1. GET THE ID FROM THE URL, NOT FROM LOCATION STATE
    const { id } = useParams<{ id: string }>();
    
    // 2. CREATE STATE TO HOLD THE FETCHED DATA
    const [itinerary, setItinerary] = useState<Itinerary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false); // State for the modal

    const [openDayId, setOpenDayId] = useState<string | null>('day1');

    const toggleDay = (dayId: string) => {
        setOpenDayId(prevId => (prevId === dayId ? null : dayId));
    };

    // 3. FETCH DATA WHEN THE COMPONENT LOADS
    useEffect(() => {
        if (id) {
            const fetchItinerary = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:5000/api/itineraries/id/${id}`);
                    setItinerary(response.data);
                    setError(null);
                } catch (err) {
                    console.error("Failed to fetch itinerary:", err);
                    setError("Could not find the requested itinerary.");
                } finally {
                    setLoading(false);
                }
            };
            fetchItinerary();
        }
    }, [id]);

    // Static data for inclusions, exclusions, and optional add-ons
    const inclusions = ["Comfortable 4—5 star stays", "Daily breakfast", "Airport transfers", "Guided city tours", "Entry tickets", "Cultural experiences", "All transfers", "Professional tour manager (8+)", "Welcome kit", "Taxes & service charges", "24/7 emergency support", "Basic travel insurance"];
    const exclusions = ["Flights (can be arranged)", "Visa fees", "TCS", "City/hotel taxes & resort fees", "Meals not mentioned", "Personal expenses", "Tips and gratuities", "Premium travel insurance", "Extra activities", "Room service/mini-bar", "Photography charges", "Services not specified"];
    const optionalAddOns = ["Airline bookings (from ₹5,000)", "Luxury suite upgrades (from ₹8,000/night)", "Private guided tours (from ₹12,000/day)", "Special experiences (on request)", "Visa fast-track (add-on ₹2,000)", "Comprehensive insurance (₹1,500—3,000)", "Forex services", "Occasion planning", "Professional photography", "Airport lounge access", "Extended stays", "Local SIM/WiFi"];
    
    // 4. HANDLE LOADING AND ERROR STATES
    if (loading) {
        return <div className="loading-screen">Loading Your Adventure...</div>;
    }

    if (error || !itinerary) {
        return (
            <div className="error-screen">
                <h2>Oops! This journey seems to be off the map.</h2>
                <p>{error || "Please try another destination."}</p>
                <Link to="/destinations" className="back-button">See All Destinations</Link>
            </div>
        );
    }
    
    const daywiseKeys = Object.keys(itinerary.daywise || {});

    return (
        <>
            <main className="container">
                <section className="hero-section">
                    <div className="desktop-images">
                        <div className="main-image-wrapper">
                            <img src={itinerary.images[0]} alt={itinerary.name} className="main-image" />
                        </div>
                        <div className="grid-images-container">
                            <img src={itinerary.images[1]} alt={itinerary.name} className="grid-image-top" />
                            <div className="grid-images-bottom">
                                <img src={itinerary.images[2]} alt={itinerary.name} className="grid-image-bottom-left" />
                                <img src={itinerary.images[3]} alt={itinerary.name} className="grid-image-bottom-right" />
                            </div>
                        </div>
                    </div>
                    <div className="mobile-tablet-image">
                        <img src={itinerary.images[4] || itinerary.images[0]} alt={itinerary.name} className="single-image" />
                    </div>
                </section>

                <section className="content-booking-grid">
                    <div className="details-column">
                        <h1 className="title">{itinerary.name}</h1>
                        <div className="rating">
                            <span className="rating-text">{itinerary.rating} ({itinerary.numberOfRating})</span>
                        </div>
                        <p className="description">{itinerary.description}</p>
                        
                        <div className="info-grid">
                              <div className="info-item"><span>{itinerary.time}</span></div><br></br>
                              <div className="info-item"><span>RS. {itinerary.price} per person</span></div><br></br>
                        </div>

                        <div className="itinerary-section">
                            <h2 className="section-title">ITINERARY</h2>
                            <div className="itinerary-list">
                                {daywiseKeys.map((dayId, index) => {
                                    const dayData = itinerary.daywise[dayId];
                                    const isActive = openDayId === dayId;
                                    return (
                                        <div key={dayId} className={`itinerary-item ${isActive ? "active" : ""}`}>
                                            <div className="line"></div>
                                            <div className="itinerary-item-content">
                                                <button className="itinerary-icon-wrapper" onClick={() => toggleDay(dayId)} dangerouslySetInnerHTML={{ __html: dayData.icon || '' }} />
                                                <div className="itinerary-text-wrapper">
                                                    <button className="itinerary-title-button" onClick={() => toggleDay(dayId)}>
                                                        Day {index + 1}: {dayData.title}
                                                    </button>
                                                    <div className="itinerary-description">{dayData.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="highlights-section">
                            <h2 className="section-title">HIGHLIGHTS</h2>
                            <ul className="list-items">{itinerary.highlights.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                        {/* Other sections remain the same */}
                         <div className="highlights-section">
                             <h2 className="section-title">INCLUSIONS</h2>
                             <ul className="list-items">{inclusions.map((item, i) => <li key={i}>{item}</li>)}</ul>
                         </div>
                         <div className="highlights-section">
                             <h2 className="section-title">EXCLUSIONS</h2>
                             <ul className="list-items">{exclusions.map((item, i) => <li key={i}>{item}</li>)}</ul>
                         </div>
                         <div className="highlights-section">
                             <h2 className="section-title">OPTIONAL ADD-ONS</h2>
                             <ul className="list-items">{optionalAddOns.map((item, i) => <li key={i}>{item}</li>)}</ul>
                         </div>
                    </div>

                    <div className="booking-column">
                        {/* 5. THIS CARD NOW OPENS THE MODAL */}
                        <div className="new-booking-card">
                            <div className="expert-header"><h3>Customise your trip with an expert</h3></div>
                            <div style={{padding: '0 24px'}}>
                                <div className="price-section" style={{border: 'none', padding: '12px 0'}}>
                                    <span className="price-label">Starting from</span>
                                    <span className="price-amount">RS. {itinerary.price}/- <span className="price-per">per person</span></span>
                                </div>
                            </div>
                           <button 
                                type="button" 
                                className="plan-button" 
                                onClick={() => setIsFormOpen(true)}
                                style={{ 
                                    display: 'block', 
                                    width: '100%', 
                                    textAlign: 'center' 
                                }}
                            >
                                PLAN WITH AN EXPERT
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Page10 />

            {/* The modal is rendered here and controlled by the button above */}
            <BookingFormModal 
                isOpen={isFormOpen} 
                onClose={() => setIsFormOpen(false)} 
                itineraryName={itinerary.name}
                price={itinerary.price}
            />
        </>
    );
};

export default SingleItineraryPage;

