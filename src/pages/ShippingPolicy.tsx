import React, { useEffect } from 'react';
import Page10 from '../components/Page10';

// 1. Moved static data outside the component to create it only once.
const sections = [
  { id: 1, title: "DIGITAL DELIVERY", content: `Most of our services are delivered digitally for your convenience:\n• Itineraries and travel plans via email\n• E-tickets and vouchers sent electronically\n• Confirmation documents delivered instantly\n• Travel guides and recommendations in PDF format` },
  { id: 2, title: "PHYSICAL DOCUMENT DELIVERY", content: `When physical documents are required, we offer:\n• Standard Delivery (5-7 business days) – Free for bookings over ₹50,000, ₹500 charge for smaller bookings, available across India\n• Express Delivery (2-3 business days) – ₹1,000 charge for all bookings, available in major cities, tracking provided` },
  { id: 3, title: "DELIVERY LOCATIONS", content: `We deliver to:\n• All addresses within India\n• Hotel addresses for urgent travel documents\n• Office addresses during business hours\n• International delivery available on request` },
  { id: 4, title: "WHAT WE SHIP", content: `Physical airline tickets (when required)\n• Visa documents and applications\n• Travel insurance papers\n• Welcome packages and itinerary folders\n• Emergency travel documents` },
  { id: 5, title: "TRACKING & INSURANCE", content: `• All shipments include tracking numbers\n• Insurance coverage up to ₹10,000 included\n• Signature required for delivery\n• Multiple delivery attempts made` }
];

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">Shipping Policy</h1>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-start">
                <span className="text-slate-600 mr-3">{section.id}.</span>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Shipping Inquiries</h3>
          <p className="text-gray-600 text-sm">
            For shipping inquiries or to track your delivery, contact us at{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">info@talesbydora.com</a>{' '}
            or call <span className="font-medium">+91 80018 88847</span>.
          </p>
        </div>
      </main>
      <div><Page10 /></div>
    </div>
  );
};

// 2. Wrapped component in React.memo to prevent unnecessary re-renders.
export default React.memo(ShippingPolicy);