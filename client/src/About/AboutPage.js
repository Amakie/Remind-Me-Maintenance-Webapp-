import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import About from './About';
import Features from './Features';
import Contact from './Contact'

const AboutPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            scroller.scrollTo('about-section', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        } else if (location.pathname === '/features') {
            scroller.scrollTo('features-section', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        } else if (location.pathname === '/contact') {
            scroller.scrollTo('contact-section', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location]);

    return (
        <div className='about-div bg-deepBlue'>
            <Element name="features-section">
                <Features />
            </Element>
            <Element name="about-section">
                <About />
            </Element>
            <Element name="contact-section">
                <Contact />
            </Element>
        </div>
    );
};

export default AboutPage;
