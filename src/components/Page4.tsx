import React, { useState } from 'react';

const Page4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    contact: '',
    email: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('Submitting...');

    try {
      const response = await fetch('http://localhost:5000/api/inquiries/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send inquiry.');
      }

      setStatusMessage(result.message || 'Success! Redirecting to WhatsApp...');

      const whatsAppNumber = "918001888847";
      const message = `Hello, I'm ${formData.name}. I'm interested in a trip around ${formData.date}. You can reach me at ${formData.contact} or ${formData.email}.`;
      const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;

      setFormData({ name: '', date: '', contact: '', email: '' });

      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1000);
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setStatusMessage(errorMessage || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[rgba(248,248,248,0.98)] font-sans flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-Nunito text-gray-900 leading-snug uppercase tracking-tight">
              YOUR TRAVEL STORY <br />
              STARTS WITH A CONVERSATION
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
              <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border-0 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div className="flex justify-center lg:justify-start mt-5">
                <button
                  type="submit"
                  className="bg-[#263A48] hover:bg-[#1e2f3a] text-white font-bold py-3 px-8 sm:px-10 rounded-full text-sm sm:text-base md:text-lg transition duration-200 shadow-lg w-full sm:w-auto"
                >
                  CALL US
                </button>
              </div>

              {statusMessage && (
                <p className="mt-4 text-xs sm:text-sm text-center lg:text-left text-gray-600">{statusMessage}</p>
              )}
            </form>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center w-full">
            <img
              src="/contact.png"
              alt="Travel photographer"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-[590px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page4;
