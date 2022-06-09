import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from '../../../Shared/Header/Header';

const TopHero = () => {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <div className='h-[100vh] bg-secondary pt-5'>


            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 150,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "ploygon",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                },
                detectRetina: true,
            }}
            />


            <div className='container mx-auto'>
                <Header></Header>
            </div>
        </div>
    );
};

export default TopHero;