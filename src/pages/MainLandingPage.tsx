import React, { useRef } from 'react';

// Import all the components that make up your main page
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
  // Create refs for the sections you want to scroll to
  const pageH1Ref = useRef<HTMLDivElement>(null);
  const pageH3Ref = useRef<HTMLDivElement>(null); // For Destinations
  const pageH5Ref = useRef<HTMLDivElement>(null); // For About Us
  const pageH7Ref = useRef<HTMLDivElement>(null); // ADDED: Ref for the new "Desire" section

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen relative bg-black">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/mainbg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay */}
      </div>

      {/* The stack of all your 'H' components */}
      <div className="relative z-10">
        <div ref={pageH1Ref}>
          {/* UPDATED: Pass the new onDesireClick prop */}
          <PageH1 
            onHomeClick={() => handleScrollTo(pageH1Ref)}
            onDestinationsClick={() => handleScrollto(pageH3Ref)}
            onAboutClick={() => handleScrollTo(pageH5Ref)}
            onDesireClick={() => handleScrollTo(pageH7Ref)}
          />
        </div>
        <KnowBeforeTravelH />
        <div ref={pageH3Ref}>
          <PageH3 />
        </div>
        <Page4 />
        {/* ADDED: Wrapped PageH7 in a div with the new ref */}
        <div ref={pageH7Ref}>
          <PageH7 />
        </div>
        <PageH6 />
        <div ref={pageH5Ref}>
          <PageH5 />
        </div>
        
        <PageH8 />
        <TestimonialPageH />
        <PageH9 />
        <Links />
        <Page10 />
      </div>
    </div>
  );
}

export default MainLandingPage;
