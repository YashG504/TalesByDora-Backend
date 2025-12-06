import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import HeroHH from '../components/HeroHH';
import DubaiDeepDive from '../components/DubaiDeepDive';
import ThailandDeepDive from '../components/ThailandDeepDive';
import BaliDeepDive from '../components/BaliDeepDive';
import MauritiusDeepDive from '../components/MauritiusDeepDive';
import AndamanDeepDive from '../components/AndamanDeepDive';
import MaldivesDeepDive from '../components/MaldivesDeepDive';
import Page10 from '../components/Page10';

// 1. Created a mapping object for cleaner, more performant component selection.
const DEEP_DIVE_COMPONENTS: { [key: string]: JSX.Element } = {
    dubai: <DubaiDeepDive />,
    thailand: <ThailandDeepDive />,
    bali: <BaliDeepDive />,
    mauritius: <MauritiusDeepDive />,
    maldives: <MaldivesDeepDive />,
    andaman: <AndamanDeepDive />,
};

const DeepDivePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // 2. Memoized derived data to prevent recalculation on re-renders.
    const heroContent = useMemo(() => {
        const formattedDestination = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Our';
        return {
            title: `A Deep Dive into ${formattedDestination}`,
            description: `Explore the unique culture, history, and hidden gems that make ${formattedDestination} truly special.`,
            backgroundImage: '/Itinarieshero.jpg'
        };
    }, [slug]);
    
    const DeepDiveComponent = slug ? DEEP_DIVE_COMPONENTS[slug] : null;

    return (
        <div>
            <HeroHH 
                title={heroContent.title} 
                description={heroContent.description} 
                backgroundImage={heroContent.backgroundImage}
            />
            {DeepDiveComponent || <div className="text-center py-20">The page went on vacation before you — we’ll bring it back soon</div>}
            <Page10 />
        </div>
    );
};

export default React.memo(DeepDivePage);