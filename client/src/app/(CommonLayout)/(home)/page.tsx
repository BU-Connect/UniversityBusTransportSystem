"use client";

import React from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import HomePage from '../home/page'; // Assuming your dashboard component is here
import { useIntro } from '@/context/IntroContext';

const Home = () => {
    const { isIntroActive } = useIntro(); 

    if (isIntroActive) {
        // If intro is active, render the animation screen
        return <IntroAnimation />;
    }

    // Otherwise, render the main content and the Navbar will be visible
    return <HomePage />;
};

export default Home;
