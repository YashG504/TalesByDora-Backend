import React, { useEffect } from 'react';
import Page10 from '../components/Page10'; // --- 1. IMPORT the real footer component ---

// --- 2. DELETE the placeholder version of Page10 that was here ---

const PrivacyPolicy = () => {
  // This useEffect hook runs once when the component mounts, scrolling to the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures it only runs once.

  const sections = [
    {
      id: 1,
      title: "INTRODUCTION",
      content: `Reverra By TBD LLP ("we", "us", "our"), operating under the brand name TalesByDora, is committed to protecting the privacy and personal data of users ("you", "your") who interact with our website www.talesbydora.com ("Website") and related services.

This Privacy Policy (“Policy”) outlines how we collect, use, store, share, and protect your personal information when you use our Website or services. By accessing or using our Website, you agree to the practices described in this Policy. If you do not agree, please do not use our services.`
    },
    {
      id: 2,
      title: "CONTACT INFORMATION",
      content: `If you have any questions, concerns, or requests regarding this Policy, you can reach our support team at:
📧 info@talesbydora.com`
    },
    {
      id: 3,
      title: "GDPR COMPLIANCE (FOR EU RESIDENTS)",
      content: `If you are a resident of the European Union (EU), the General Data Protection Regulation (GDPR) grants you specific rights regarding your personal data. Under GDPR, Reverra By TBD LLP is the data controller for your data.

Your Rights under GDPR:
• Right to access your personal data
• Right to rectification of inaccurate or incomplete data
• Right to erasure (“Right to be forgotten”)
• Right to restrict processing
• Right to data portability
• Right to object to processing
• Right to lodge a complaint with a supervisory authority

To exercise any of these rights, contact our data protection officer at 📧 info@talesbydora.com`
    },
    {
      id: 4,
      title: "INFORMATION WE COLLECT",
      content: `We may collect the following types of personal data:
• Name
• Email address
• Phone number
• Location (city/country)
• Travel preferences and inquiries
• IP address
• Browser type and version
• Website usage data (via analytics tools)

We collect this information when:
• You fill out contact/inquiry forms
• You book or request travel services
• You subscribe to our newsletter
• You browse or interact with our Website`
    },
    {
      id: 5,
      title: "HOW WE USE YOUR INFORMATION",
      content: `We use your personal data to:
• Provide travel consultation and services
• Respond to inquiries and support requests
• Improve and personalize your website experience
• Send updates, offers, and promotional content (only if you opt-in)
• Comply with legal obligations

We do not sell or rent your personal information to third parties.`
    },
    {
      id: 6,
      title: "INFORMATION SHARING",
      content: `We may share your information with trusted third-party partners or service providers solely for fulfilling travel bookings and delivering services. These may include:
• Hotels, tour operators, airlines
• Payment gateways/processors
• Customer service platforms
• Analytics tools (e.g., Google Analytics)

All partners are obligated to use your data only for intended purposes and comply with data protection laws.

We may also disclose personal data if legally required (e.g., court orders or regulatory requests).`
    },
    {
      id: 7,
      title: "LOG DATA",
      content: `When you use our Website, we automatically collect:
• IP address
• Browser type and settings
• Device information
• Pages visited & time spent
• Referring website

This data helps improve performance and user experience.`
    },
    {
      id: 8,
      title: "COOKIES",
      content: `We use cookies and similar tracking technologies to enhance browsing and analyze usage. You may disable cookies in your browser, but this may affect certain site features.`
    },
    {
      id: 9,
      title: "THIRD-PARTY SERVICES",
      content: `We work with trusted providers (e.g., payment gateways, analytics, email tools) who may process data on our behalf. They are obligated to protect your data and use it only for specified purposes.`
    },
    {
      id: 10,
      title: "DATA SECURITY",
      content: `We implement safeguards to protect your data. However, no online platform can guarantee 100% security. Please take precautions when browsing online.`
    },
    {
      id: 11,
      title: "EXTERNAL LINKS",
      content: `Our Website may link to third-party sites. We are not responsible for their content or privacy practices. Review their policies before interacting.`
    },
    {
      id: 12,
      title: "CHILDREN’S PRIVACY",
      content: `Our services are not directed to children under 13. We do not knowingly collect personal data from minors. If you believe a child has shared data, contact us to remove it.`
    },
    {
      id: 13,
      title: "CHANGES TO THIS POLICY",
      content: `We may update this Privacy Policy at any time. Updates will appear on this page with a new effective date. Continued use means you accept changes.

Effective Date: 17th August 2025`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">
          Privacy Policy
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

        {/* Contact Info */}
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Us</h3>
          <p className="text-gray-600 text-sm">
            If you have questions about this Privacy Policy, contact us at{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">
              info@talesbydora.com
            </a>.
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

export default PrivacyPolicy;