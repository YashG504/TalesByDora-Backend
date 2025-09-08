import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLandingPage from './pages/MainLandingPage';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import ItinerarySection from './pages/ItinerarySection';
import DeepDivePage from './pages/DeepDivePage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import Page4 from './components/Page4';
import SingleItineraryPage from './pages/SingleItineraryPage';

// Imports for footer links
import Page6 from './components/PageH6'; // For your About Us page
import TestimonialPage from './components/TestimonialPageH'; // For your Testimonials page

// --- THIS IS THE NEW IMPORT YOU NEED TO ADD ---
import SingleBlogPage from './pages/SingleBlogPage';
import HomePageBlog from './pages/HomePageBlog.tsx';


function App() {
  return (
    <div>
      <Routes>
        {/* --- Core App Routes --- */}
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/destinations/:slug" element={<DestinationPage />} />
        <Route path="/itineraries/:destination" element={<ItinerarySection />} />
        <Route path="/destinations/:slug/deep-dive" element={<DeepDivePage />} />
        <Route path="/itinerary/:id" element={<SingleItineraryPage />} />
        <Route path="/enquire" element={<Page4 />} />

        {/* --- Blog Route --- */}
        {/* --- THIS IS THE NEW ROUTE YOU NEED TO ADD --- */}
        <Route path="/blog/:blogId" element={<SingleBlogPage />} />
         <Route path="/home-blog/:blogSlug" element={<HomePageBlog />} />
        {/* --- Footer & Policy Routes --- */}
        <Route path="/about-us" element={<Page6 />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationRefundPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
