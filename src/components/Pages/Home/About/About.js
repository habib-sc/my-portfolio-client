import React from 'react';
import aboutImg from '../../../../assets/images/about-me.png';

const About = () => {

    return (
        <div className='container mx-auto px-4 mt-10'>
            <div className='flex flex-wrap justify-between items-center w-full'>
                <div class="order-last md:order-first flex-1">
                    <img src={aboutImg} class="lg:max-w-lg md:max-w-md sm:max-w-sm" alt='' />
                </div>
                <div className='order-first md:order-last flex-1'>
                    <h1 className='text-4xl font-semibold mb-2'>About Me</h1>
                    <p className='text-2xl'>I am a web developer experties in React.js, Tailwindcss, Bootstrap, Daisy UI, HTML, CSS and comfortable in Node.js, Express.js, MongoDB, javascript. I am familiar with Python, Django.</p>
                </div>
            </div>
        </div>
    );
};

export default About;