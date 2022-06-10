import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import TopHero from './TopHero/TopHero';

const Home = () => {

    return (
        <div>
            <TopHero></TopHero>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;