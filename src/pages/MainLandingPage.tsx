import React, { useRef, useCallback } from 'react';
import PageH1 from '../components/PageH1';
import KnowBeforeTravelH from '../components/KnowBeforeTravelH';
import PageH3 from '../components/PageH3';
import Page4 from '../components/Page4';
import PageH5 from '../components/PageH5';
import PageH6 from '../components/PageH6';
import PageH7 from '../components/PageH7';
import PageH8 from '../components/PageH8';
import PageH9 from '../components/PageH9';
import Links from '../components/Links';
import Page10 from '../components/Page10';
import TestimonialPageH from '../components/TestimonialPageH';

function MainLandingPage() {
    const pageH1Ref = useRef<HTMLDivElement>(null);
    const pageH3Ref = useRef<HTMLDivElement>(null);
    const pageH5Ref = useRef<HTMLDivElement>(null);
    const pageH7Ref = useRef<HTMLDivElement>(null);

    // 1. Memoized the scroll handler to prevent re-creation on re-renders.
    const handleScrollTo = useCallback((ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, []);

    return (
        <div className="min-h-screen relative bg-black">
            <div 
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/mainbg.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="relative z-10">
                <div ref={pageH1Ref}>
                    <PageH1 
                        onHomeClick={() => handleScrollTo(pageH1Ref)}
                        onDestinationsClick={() => handleScrollTo(pageH3Ref)} // 2. Fixed typo from handleScrollto to handleScrollTo
                        onAboutClick={() => handleScrollTo(pageH5Ref)}
                        onDesireClick={() => handleScrollTo(pageH7Ref)}
                    />
                </div>
                <KnowBeforeTravelH />
                <div ref={pageH3Ref}><PageH3 /></div>
                <Page4 />
                <div ref={pageH7Ref}><PageH7 /></div>
                <PageH6 />
                <div ref={pageH5Ref}><PageH5 /></div>
                <PageH8 />
                <TestimonialPageH />
                <PageH9 />
                <Links />
                <Page10 />
            </div>
        </div>
    );
}

export default React.memo(MainLandingPage);