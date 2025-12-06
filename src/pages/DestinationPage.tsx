import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Page1 from '../components/Page1';
import KnowBeforeTravel from '../components/KnowBeforeTravel';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6';
import TestimonialPage from '../components/TestimonialPage';
import Page7 from '../components/Page7';
import Page8 from '../components/Page8';
import Page9 from '../components/Page9';
import Page10 from '../components/Page10';

const DestinationPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // 1. Memoized the data fetching function with useCallback.
    const fetchAndEnrichPageData = useCallback(async () => {
        if (!slug) return;
        setLoading(true);
        try {
            const identifier = slug.charAt(0).toUpperCase() + slug.slice(1);
            const pageResponse = await fetch(`/api/page/${identifier}`);
            if (!pageResponse.ok) throw new Error('Destination not found');
            const pageData = await pageResponse.json();

            const itinerariesResponse = await fetch(`/api/itineraries/${slug}`);
            if (!itinerariesResponse.ok) throw new Error('Itineraries not found');
            const allItineraries = await itinerariesResponse.json();
            
            const itineraryMap = new Map(allItineraries.map((it: any) => [it.name, it]));

            if (pageData.Page3?.cards) {
                pageData.Page3.cards = pageData.Page3.cards.map((card: any) => {
                    const fullItinerary = itineraryMap.get(card.cardText);
                    return fullItinerary ? { ...card, _id: fullItinerary._id } : card;
                });
            }
            setData(pageData);
        } catch (error) {
            console.error("Failed to fetch and enrich page data:", error);
        } finally {
            setLoading(false);
        }
    }, [slug]); // Dependency is the slug, so this function is stable unless the URL changes.

    useEffect(() => {
        fetchAndEnrichPageData();
    }, [fetchAndEnrichPageData]);

    if (loading) {
        return <div className="w-screen h-screen flex items-center justify-center text-white bg-black text-3xl">Loading Destination...</div>;
    }

    if (!data) {
        return <div className="w-screen h-screen flex items-center justify-center text-white bg-black text-3xl">Destination data could not be found.</div>;
    }

    return (
        <div>
            {data.pageIdentifier && data.Page1 && <Page1 data={data.Page1} destinationName={data.pageIdentifier} />}
            {data.KnowBeforeTravel && <KnowBeforeTravel data={data.KnowBeforeTravel} />}
            <div id="itineraries">
                {data.Page3 && <Page3 data={data.Page3} />}
            </div>
            <Page4 />
            {data.Page5 && <Page5 data={data.Page5} />}
            <div id="about-us">
                {data.Page6 && <Page6 data={data.Page6} />}
            </div>
            {data.Testimonials && <TestimonialPage data={data.Testimonials} />}
            {data.Page7 && <Page7 faqs={data.Page7.FAQS} />}
            {data.pageIdentifier && <Page8 currentDestination={data.pageIdentifier} />}
            <Page9 destinationSlug={slug} />
            <Page10 />
        </div>
    );
};

export default DestinationPage;