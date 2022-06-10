import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import aboutImg from '../../../../assets/images/habibur-rahman-dev7.png';

const About = () => {

    return (
        <div id='about' className='container mx-auto px-4 pt-24'>
            <div className='flex flex-wrap justify-between items-center w-full'>
                <div class="flex-1">
                    <img src={aboutImg} class="lg:max-w-lg md:max-w-md sm:max-w-sm border shadow-lg rounded-lg" alt='' />
                </div>
                <div className='flex-1'>
                    <h1 className='text-4xl font-semibold mb-3'>About Me</h1>
                    <h2 className='text-3xl font-semibold mb-2 text-secondary'>Frontend Developer</h2>
                    <p className='text-lg lg:max-w-lg'> I am a web developer. I lives in Dhaka, Bangladesh. My experties are React.js, Tailwindcss, Bootstrap, Daisy UI, HTML, CSS and comfortable in Node.js, Express.js, MongoDB, javascript. I am familiar with Python, Django.</p>
                    <p className='text-lg lg:max-w-lg mt-2'>I code and create web elements for amazing people around the world. I like work with new people.</p>

                    <div className='grid grid-cols-2 mt-5 gap-2'>
                        <p className='flex items-center gap-1 font-semibold text-lg'><HiOutlineUser className='text-primary bg-blue-100 p-1 rounded-full text-3xl'></HiOutlineUser>Md. Habibur Rahman</p>
                        <p className='flex items-center gap-1 font-semibold text-lg'><HiOutlineLocationMarker className='text-primary bg-blue-100 p-1 rounded-full text-3xl'></HiOutlineLocationMarker>Dhaka, Bangladesh</p>
                        <p className='flex items-center gap-1 font-semibold text-lg'><HiOutlinePhone className='text-primary bg-blue-100 p-1 rounded-full text-3xl'></HiOutlinePhone>+8801961584280</p>
                        <p className='flex items-center gap-1 font-semibold text-lg'><HiOutlineMail className='text-primary bg-blue-100 p-1 rounded-full text-3xl'></HiOutlineMail>habibur.rahman.cs7@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;