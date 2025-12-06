import React, { useEffect } from 'react';
import Page10 from '../components/Page10';

// 1. Moved static data outside the component to create it only once.
const sections = [
  { id: 1, title: "GENERAL CANCELLATION TIMELINE", content: `Cancellation fees vary depending on the type of service and the timing of your request:\n\n✨ Consultation & Planning Services\n• More than 24 hours before appointment: ✅ Full refund\n• Less than 24 hours before appointment: ❌ 50% cancellation fee\n• No-show or missed session: 🚫 No refund\n\n✈️ Travel Bookings (Packages, Accommodations, Experiences)\n• 60+ days before departure: 90% refund (10% cancellation fee)\n• 30–59 days before departure: 75% refund (25% cancellation fee)\n• 15–29 days before departure: 50% refund (50% cancellation fee)\n• Less than 15 days: 25% refund (75% cancellation fee)\n• 7 days or less: 🚫 No refund (non-refundable)\n\nNote: These policies apply unless otherwise specified in your custom itinerary or communicated in writing.` },
  { id: 2, title: "REFUND TIMELINE & METHOD", content: `• Refund initiation: Within 7–10 business days of confirmed cancellation\n• Refund method: Original payment method only (credit card, UPI, bank transfer, etc.)\n• Third-party charges: Non-refundable (e.g., flight cancellation fees, visa processing)\n• Processing/service fees: Non-refundable under all circumstances` },
  { id: 3, title: "NON-REFUNDABLE ITEMS", content: `Some bookings are considered non-refundable regardless of timing:\n\n• Visa services\n• Travel insurance premiums\n• Custom add-ons marked “non-refundable” at the time of booking\n• Activities booked through third-party suppliers with strict cancellation terms` },
  { id: 4, title: "EXCEPTIONAL CIRCUMSTANCES", content: `In rare situations, we may offer partial or full refunds even outside the standard policy. These require documentary proof:\n\n• Verified medical emergencies\n• Natural disasters affecting destination\n• Government-imposed travel bans or border closures\n• Death of an immediate family member\n\nTo request an exception, email 📧 info@talesbydora.com` },
  { id: 5, title: "TRAVEL INSURANCE RECOMMENDATION", content: `We strongly advise purchasing comprehensive travel insurance to safeguard your booking against emergencies, cancellations, or disruptions. Insurance may cover expenses outside of our refund policy.` },
  { id: 6, title: "HOW TO CANCEL", content: `To initiate a cancellation:\n\n1. Email 📧 info@talesbydora.com with your booking reference number\n2. Clearly state your reason for cancellation\n3. Our team will confirm your request, applicable fees, and begin the refund process` },
  { id: 7, title: "FLIGHT & CRUISE BOOKINGS", content: `Flight and cruise cancellations are governed by the airline or cruise operator's policies. We will assist with the cancellation, but refunds are subject to those third-party terms.` },
  { id: 8, title: "IMPORTANT NOTES", content: `• Refunds are issued only after the provider confirms cancellation and shares the refundable amount\n• Bookings made using promotional credits, gift cards, or coupons may not be fully refundable\n• Wallet credits (if applicable) are valid for 12 months from issue and non-transferable` },
  { id: 9, title: "CHANGES TO THIS POLICY", content: `TalesByDora reserves the right to update or amend this Cancellation & Refund Policy at any time without prior notice. The latest version will always be available on our website.\n\nLast Updated: 17th August 2025` }
];

const CancellationRefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">
          Cancellation & Refund Policy
        </h1>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
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
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Need Help?</h3>
          <p className="text-gray-600 text-sm">
            If you have any questions about your booking or refund eligibility, contact us at{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">
              info@talesbydora.com
            </a>.
          </p>
        </div>
      </main>
      <div>
        <Page10 />
      </div>
    </div>
  );
};

// 2. Wrapped component in React.memo to prevent unnecessary re-renders.
export default React.memo(CancellationRefundPolicy);