import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const fetchAndEnrichPageData = async () => {
            if (!slug) return;
            setLoading(true);

            try {
                // --- STEP 1: Fetch the main page data (as before) ---
                const identifier = slug.charAt(0).toUpperCase() + slug.slice(1);
                const pageResponse = await fetch(`/api/page/${identifier}`);
                if (!pageResponse.ok) throw new Error('Destination not found');
                const pageData = await pageResponse.json();

                // --- STEP 2 (NEW): Fetch all itineraries for this destination ---
                // This call gets the full itinerary objects, including the crucial `_id`
                const itinerariesResponse = await fetch(`/api/itineraries/${slug}`);
                if (!itinerariesResponse.ok) throw new Error('Itineraries not found');
                const allItineraries = await itinerariesResponse.json();
                
                // --- STEP 3 (NEW): Create a map for quick lookup by name ---
                const itineraryMap = new Map(allItineraries.map((it: any) => [it.name, it]));

                // --- STEP 4 (NEW): Enrich the Page3 card data with the _id ---
                if (pageData.Page3 && pageData.Page3.cards) {
                    pageData.Page3.cards = pageData.Page3.cards.map((card: any) => {
                        const fullItinerary = itineraryMap.get(card.cardText);
                        if (fullItinerary) {
                            return {
                                ...card,
                                _id: fullItinerary._id // Inject the _id here!
                            };
                        }
                        return card; // Return card as is if no match is found
                    });
                }

                // --- STEP 5 (CHANGED): Set the final, enriched data state ---
                setData(pageData);

            } catch (error) {
                console.error("Failed to fetch and enrich page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndEnrichPageData();
    }, [slug]);

    if (loading) {
        return <div className="w-screen h-screen flex items-center justify-center text-white bg-black text-3xl">Loading Destination...</div>;
    }

    if (!data) {
        return <div className="w-screen h-screen flex items-center justify-center text-white bg-black text-3xl">Destination data could not be found.</div>;
    }

    // --- The rest of your component remains unchanged ---
    return (
        <div>
            {/*data.Hero && <Hero data={data.Hero} destinationName={data.pageIdentifier} />*/}
            {data.pageIdentifier && data.Page1 && <Page1 data={data.Page1} destinationName={data.pageIdentifier} />}
            {data.KnowBeforeTravel && <KnowBeforeTravel data={data.KnowBeforeTravel} />}
            
            <div id="itineraries">
                {/* This now receives the cards with the `_id` included */}
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