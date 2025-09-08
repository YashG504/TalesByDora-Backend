// In: src/pages/DeepDivePage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

// Import your reusable components
import HeroHH from '../components/HeroHH';
import DubaiDeepDive from '../components/DubaiDeepDive';
import ThailandDeepDive from '../components/ThailandDeepDive';
import BaliDeepDive from '../components/BaliDeepDive';
import MauritiusDeepDive from '../components/MauritiusDeepDive';
import AndamanDeepDive from '../components/AndamanDeepDive';
import MaldivesDeepDive from '../components/MaldivesDeepDive';
import Page10 from '../components/Page10';

const DeepDivePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const formattedDestination = slug
        ? slug.charAt(0).toUpperCase() + slug.slice(1)
        : 'Our';

    // --- THIS IS THE FIX ---
    // The hero content now uses your itinerary image for the background
    const heroContent = {
        title: `A Deep Dive into ${formattedDestination}`,
        description: `Explore the unique culture, history, and hidden gems that make ${formattedDestination} truly special.`,
        backgroundImage: '/Itinarieshero.jpg' // Correct image path
    };
 
    // This function decides which component to render
    const renderDeepDiveContent = () => {
        if (slug === 'dubai') {
            return <DubaiDeepDive />;
        }
        if (slug === 'thailand') {
            return <ThailandDeepDive />;
        }
        if (slug === 'bali') {
            return <BaliDeepDive />;
        }
        if (slug === 'mauritius') {
            return <MauritiusDeepDive />;
        }
        if (slug === 'maldives') {
            return <MaldivesDeepDive />;
        }
        if (slug === 'andaman') {
            return <AndamanDeepDive />;
        }
        return <div className="text-center py-20">The page went on vacation before you — we’ll bring it back soon</div>;
    };

    return (
        <div>
            <HeroHH 
                title={heroContent.title} 
                description={heroContent.description} 
                backgroundImage={heroContent.backgroundImage}
            />
            {renderDeepDiveContent()}
            <Page10 />
        </div>
    );
};

export default DeepDivePage;
