import React from 'react';
import About from './About/About';
import Services from './Services/Services';
import TopHero from './TopHero/TopHero';

const Home = () => {

    return (
        <div>
            <TopHero></TopHero>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;