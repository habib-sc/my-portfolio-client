import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Services from './Services/Services';
import TopHero from './TopHero/TopHero';

const Home = ({setProject}) => {

    return (
        <div>
            <TopHero></TopHero>
            <About></About>
            <Services></Services>
            <Projects setProject={setProject}></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;