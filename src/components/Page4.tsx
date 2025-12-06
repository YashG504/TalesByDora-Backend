import React, { useState, useCallback } from 'react';

// --- Optimizations ---
const INITIAL_FORM_STATE = { name: '', date: '', contact: '', email: '' };

const FORM_FIELDS = [
  { name: 'name', type: 'text', placeholder: 'Name' },
  { name: 'date', type: 'date', placeholder: '' },
  { name: 'contact', type: 'tel', placeholder: 'Contact Number' },
  { name: 'email', type: 'email', placeholder: 'Email' },
];

const Page4 = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('Submitting...');
    try {
      const response = await fetch('http://localhost:5000/api/inquiries/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to send inquiry.');

      setStatusMessage(result.message || 'Success! Redirecting to WhatsApp...');
      
      const whatsAppNumber = "918001888847";
      const message = `Hello, I'm ${formData.name}. I'm interested in a trip around ${formData.date}. You can reach me at ${formData.contact} or ${formData.email}.`;
      const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
      
      setFormData(INITIAL_FORM_STATE);
      
      setTimeout(() => { window.location.href = whatsappUrl; }, 1000);

    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setStatusMessage(errorMessage || 'An error occurred. Please try again.');
    }
  }, [formData]);

  const nameDateFields = FORM_FIELDS.slice(0, 2);
  const contactEmailFields = FORM_FIELDS.slice(2, 4);

  return (
    <div className="relative w-full min-h-screen bg-[rgba(248,248,248,0.98)] font-sans flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-Nunito text-gray-900 leading-snug uppercase tracking-tight">
              YOUR TRAVEL STORY <br /> STARTS WITH A CONVERSATION
            </h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
              <div className="mb-4 flex flex-col sm:flex-row gap-4">
                {nameDateFields.map(field => (
                  <input key={field.name} {...field} value={formData[field.name as keyof typeof formData]} onChange={handleChange} required className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400" />
                ))}
              </div>
              {contactEmailFields.map(field => (
                <div key={field.name} className="mb-4">
                  <input {...field} value={formData[field.name as keyof typeof formData]} onChange={handleChange} required className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400" />
                </div>
              ))}
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 gap-5">
                <button type="submit" className="bg-[#263A48] hover:bg-[#1e2f3a] text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base transition duration-200 shadow-lg w-full sm:w-auto uppercase tracking-wide">
                  CONTACT US
                </button>
                
                <div className="flex flex-col items-center sm:items-start">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call us on</span>
                    {/* The href="tel:..." is what triggers the mobile dialer */}
                    <a href="tel:+918001888847" className="text-[#263A48] font-bold text-lg leading-none hover:text-teal-600 transition-colors cursor-pointer">
                        +91 80018 88847
                    </a>
                </div>
              </div>

              {statusMessage && <p className="mt-4 text-xs sm:text-sm text-center lg:text-left text-gray-600">{statusMessage}</p>}
            </form>
          </div>
          <div className="relative flex justify-center items-center w-full">
            <img loading="lazy" src="/contact.png" alt="Travel photographer" className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-[590px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;