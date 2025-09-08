import React, { useEffect } from 'react';
import Page10 from '../components/Page10';
// Placeholder for the Page10 component to resolve potential import errors.


const ShippingPolicy = () => {
  // This useEffect hook runs once when the component mounts, scrolling to the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures it only runs once.

  const sections = [
    {
      id: 1,
      title: "DIGITAL DELIVERY",
      content: `Most of our services are delivered digitally for your convenience:
      • Itineraries and travel plans via email
      • E-tickets and vouchers sent electronically
      • Confirmation documents delivered instantly
      • Travel guides and recommendations in PDF format`
    },
    {
      id: 2,
      title: "PHYSICAL DOCUMENT DELIVERY",
      content: `When physical documents are required, we offer:
      • Standard Delivery (5-7 business days) – Free for bookings over ₹50,000, ₹500 charge for smaller bookings, available across India
      • Express Delivery (2-3 business days) – ₹1,000 charge for all bookings, available in major cities, tracking provided`
    },
    {
      id: 3,
      title: "DELIVERY LOCATIONS",
      content: `We deliver to:
      • All addresses within India
      • Hotel addresses for urgent travel documents
      • Office addresses during business hours
      • International delivery available on request`
    },
    {
      id: 4,
      title: "WHAT WE SHIP",
      content: `Physical airline tickets (when required)
      • Visa documents and applications
      • Travel insurance papers
      • Welcome packages and itinerary folders
      • Emergency travel documents`
    },
    {
      id: 5,
      title: "TRACKING & INSURANCE",
      content: `• All shipments include tracking numbers
      • Insurance coverage up to ₹10,000 included
      • Signature required for delivery
      • Multiple delivery attempts made`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">
          Shipping Policy
        </h1>

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
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Shipping Inquiries
          </h3>
          <p className="text-gray-600 text-sm">
            For shipping inquiries or to track your delivery, contact us at{' '}
            <a
              href="mailto:info@talesbydora.com"
              className="text-slate-700 hover:underline"
            >
              info@talesbydora.com
            </a>{' '}
            or call <span className="font-medium">+91 80018 88847</span>.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <div>
        <Page10 />
      </div>
    </div>
  );
};

export default ShippingPolicy;
