import React, { useEffect } from 'react';
import Page10 from '../components/Page10';

// 1. Moved static data outside the component to create it only once.
const sections = [
    { id: 1, title: "INTRODUCTION", content: `Reverra By TBD LLP ("we", "us", "our"), operating under the brand name TalesByDora, is committed to protecting the privacy and personal data of users ("you", "your") who interact with our website www.talesbydora.com ("Website") and related services.\n\nThis Privacy Policy (“Policy”) outlines how we collect, use, store, share, and protect your personal information when you use our Website or services. By accessing or using our Website, you agree to the practices described in this Policy. If you do not agree, please do not use our services.` },
    { id: 2, title: "CONTACT INFORMATION", content: `If you have any questions, concerns, or requests regarding this Policy, you can reach our support team at:\n📧 info@talesbydora.com` },
    { id: 3, title: "GDPR COMPLIANCE (FOR EU RESIDENTS)", content: `If you are a resident of the European Union (EU), the General Data Protection Regulation (GDPR) grants you specific rights regarding your personal data. Under GDPR, Reverra By TBD LLP is the data controller for your data.\n\nYour Rights under GDPR:\n• Right to access your personal data\n• Right to rectification of inaccurate or incomplete data\n• Right to erasure (“Right to be forgotten”)\n• Right to restrict processing\n• Right to data portability\n• Right to object to processing\n• Right to lodge a complaint with a supervisory authority\n\nTo exercise any of these rights, contact our data protection officer at 📧 info@talesbydora.com` },
    { id: 4, title: "INFORMATION WE COLLECT", content: `We may collect the following types of personal data:\n• Name\n• Email address\n• Phone number\n• Location (city/country)\n• Travel preferences and inquiries\n• IP address\n• Browser type and version\n• Website usage data (via analytics tools)\n\nWe collect this information when:\n• You fill out contact/inquiry forms\n• You book or request travel services\n• You subscribe to our newsletter\n• You browse or interact with our Website` },
    { id: 5, title: "HOW WE USE YOUR INFORMATION", content: `We use your personal data to:\n• Provide travel consultation and services\n• Respond to inquiries and support requests\n• Improve and personalize your website experience\n• Send updates, offers, and promotional content (only if you opt-in)\n• Comply with legal obligations\n\nWe do not sell or rent your personal information to third parties.` },
    { id: 6, title: "INFORMATION SHARING", content: `We may share your information with trusted third-party partners or service providers solely for fulfilling travel bookings and delivering services. These may include:\n• Hotels, tour operators, airlines\n• Payment gateways/processors\n• Customer service platforms\n• Analytics tools (e.g., Google Analytics)\n\nAll partners are obligated to use your data only for intended purposes and comply with data protection laws.\n\nWe may also disclose personal data if legally required (e.g., court orders or regulatory requests).` },
    { id: 7, title: "LOG DATA", content: `When you use our Website, we automatically collect:\n• IP address\n• Browser type and settings\n• Device information\n• Pages visited & time spent\n• Referring website\n\nThis data helps improve performance and user experience.` },
    { id: 8, title: "COOKIES", content: `We use cookies and similar tracking technologies to enhance browsing and analyze usage. You may disable cookies in your browser, but this may affect certain site features.` },
    { id: 9, title: "THIRD-PARTY SERVICES", content: `We work with trusted providers (e.g., payment gateways, analytics, email tools) who may process data on our behalf. They are obligated to protect your data and use it only for specified purposes.` },
    { id: 10, title: "DATA SECURITY", content: `We implement safeguards to protect your data. However, no online platform can guarantee 100% security. Please take precautions when browsing online.` },
    { id: 11, title: "EXTERNAL LINKS", content: `Our Website may link to third-party sites. We are not responsible for their content or privacy practices. Review their policies before interacting.` },
    { id: 12, title: "CHILDREN’S PRIVACY", content: `Our services are not directed to children under 13. We do not knowingly collect personal data from minors. If you believe a child has shared data, contact us to remove it.` },
    { id: 13, title: "CHANGES TO THIS POLICY", content: `We may update this Privacy Policy at any time. Updates will appear on this page with a new effective date. Continued use means you accept changes.\n\nEffective Date: 17th August 2025` }
];

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">Privacy Policy</h1>
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
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Us</h3>
                    <p className="text-gray-600 text-sm">
                        If you have questions about this Privacy Policy, contact us at{' '}
                        <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">info@talesbydora.com</a>.
                    </p>
                </div>
            </main>
            <div><Page10 /></div>
        </div>
    );
};

export default React.memo(PrivacyPolicy);