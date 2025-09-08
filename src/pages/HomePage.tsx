import React from 'react';
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
import Links from '../components/Links';
import Page10 from '../components/Page10';

function HomePage() {
  return (
    <div className="relative z-10">
        <Hero/>
        <Page1/>
        <KnowBeforeTravel />
        <Page3/>
        <Page4 />
        <Page5 />
        <Page6 />
        <TestimonialPage />
        <Page7 />
        <Page8 />
        <Page9 />
        <Links />
        <Page10 />
    </div>
  );
}

export default HomePage;