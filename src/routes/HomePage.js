import React from 'react';
import Hero from '../components/Hero';
import Plan from '../components/Plan';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Plan/>
            <AboutUs/>
            <Contact/>
        </div>
    );
};

export default HomePage;