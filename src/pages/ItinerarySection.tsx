import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import HeroHH from '../components/HeroHH';
import ItineraryList from '../components/ItineraryList';
import Page10 from '../components/Page10';

const ItinerarySection: React.FC = () => {
    const { destination } = useParams<{ destination: string }>();

    // 1. Memoized heroContent to prevent recalculation on every render.
    const heroContent = useMemo(() => {
        const formattedDestination = destination
            ? destination.charAt(0).toUpperCase() + destination.slice(1)
            : 'Our';
        return {
            title: `${formattedDestination} Itineraries`,
            description: `Carefully crafted luxury journeys to showcase the very best of ${formattedDestination}.`,
            backgroundImage: '/Itinarieshero.jpg'
        };
    }, [destination]);

    return (
        <div>
            <HeroHH
                title={heroContent.title}
                description={heroContent.description}
                backgroundImage={heroContent.backgroundImage}
            />
            <ItineraryList />
            <Page10 />
        </div>
    );
};

// 2. Wrapped component in React.memo for performance.
export default React.memo(ItinerarySection);