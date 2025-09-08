import React, { useEffect } from 'react';
import Page10 from '../components/Page10';
// Placeholder for the Page10 component to resolve potential import errors.


const TermsAndConditions = () => {
  // This useEffect hook runs once when the component mounts, scrolling to the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures it only runs once.

  const sections = [
    {
      id: 1,
      title: "INTRODUCTION & LEGAL RECOGNITION",
      content: "These Terms & Conditions (\"Terms\") govern your use of the services and products provided by Reverra By TBD LLP, operating under the brand name TalesByDora (\"we\", \"us\", \"our\"). This electronic record is issued in accordance with the Information Technology Act, 2000 and related rules, and does not require physical or digital signatures."
    },
    {
      id: 2,
      title: "APPLICABILITY",
      content: "If you visit our platform (website or mobile app), engage with our services, or make a booking through us, you agree to be bound by these Terms. Please do not use our services if you disagree with any part of these Terms."
    },
    {
      id: 3,
      title: "OUR ROLE",
      content: "We act as a facilitator—connecting you with travel-related service providers (hotels, tour operators, etc.). The contractual relationship for services lies directly between you and the respective provider. We offer a limited, personal, non-transferable right to use our platform as expressly permitted under these Terms."
    },
    {
      id: 4,
      title: "ELIGIBILITY",
      content: "You must be at least 18 years old and legally competent under Indian law to use our services. If you're below 18, please ask a parent or legal guardian to act on your behalf. Travel agents may use our platform only if registered and authorized by us. We reserve the right to restrict access if eligibility requirements are not met."
    },
    {
      id: 5,
      title: "COMMUNICATIONS",
      content: "By using our services, you consent to receive transactional and marketing communications from us via email, SMS, WhatsApp, or calls. These communications may override national customer preference registers, and are considered relevant to your transaction or inquiry. We ask that you refrain from sending communications that are abusive, defamatory, illegal, or infringing on others' rights."
    },
    {
      id: 6,
      title: "USER CONTENT & ACCOUNT SECURITY",
      content: "The content on our platform (text, images, etc.) is owned by us and protected by intellectual property laws. Usage is limited to personal, non-commercial purposes. Your account credentials are your responsibility. Do not share sensitive information such as passwords, OTPs, or payment details with anyone. We will never ask for them via unsolicited contact. If you suspect unauthorized access or misuse, notify us immediately at security@talesbydora.com."
    },
    {
      id: 7,
      title: "LIMITATION OF LIABILITY",
      content: "Bookings may be cancelled or modified by the service provider; such liability is not ours. We are not liable for third-party content, external links, or system disruptions. Our platform and services are provided \"as is,\" with no promises of fitness for any particular use. Our total liability in any booking scenario is limited to the amount you have paid for that booking."
    },
    {
      id: 8,
      title: "FEES & PAYMENTS",
      content: "We may charge convenience or service fees in addition to provider costs. All applicable fees will be displayed before payment. You are responsible for any shortfalls in payment, and failure to resolve these may result in cancellation of bookings. Price changes due to tax revisions or other regulatory changes are your responsibility, even if applied retrospectively."
    },
    {
      id: 9,
      title: "CANCELLATIONS & REFUNDS",
      content: "Refunds are governed by the policies of each service provider. If a provider becomes insolvent, we are not liable for refunds. We may refuse or cancel bookings at our discretion, including in cases of suspected fraud or misinformation."
    },
    {
      id: 10,
      title: "FORCE MAJEURE",
      content: "We and our service providers are not liable for failures resulting from extraordinary events beyond our control, like natural disasters, political unrest, or pandemics. In such cases, our obligation is limited to returning any amount received—usually credited to your account or wallet—provided we receive the equivalent refund from the provider."
    },
    {
      id: 11,
      title: "INDEMNITY",
      content: "You agree to indemnify and hold harmless TalesByDora (including its officers, employees, and agents) from any claims, losses, or expenses arising from your use of our services, violation of these Terms, or misrepresentation of information provided to us."
    },
    {
      id: 12,
      title: "MISCELLANEOUS",
      content: "Severability: If any part is unenforceable, the rest remains valid. Waiver: Failure to enforce any clause doesn't constitute a waiver of rights. Entire Agreement: These Terms, along with our Privacy Policy, constitute the complete agreement. Changes: We may modify these Terms at any time; changes will be posted with a new \"Last Updated\" date. Dispute Resolution: In case of disputes, mediation via an online platform is required before resorting to litigation. Indian law applies, and courts in Ghaziabad (or applicable jurisdiction in Uttar Pradesh) will have exclusive jurisdiction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center">
          Terms & Conditions
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

        {/* Contact Information */}
        <div className="mt-12 bg-slate-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Questions?</h3>
          <p className="text-gray-600 text-sm">
            If you have any questions about these Terms & Conditions, please contact us at{' '}
            <a href="mailto:info@talesbydora.com" className="text-slate-700 hover:underline">
              info@talesbydora.com
            </a>
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

export default TermsAndConditions;
