import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);


    return (
        <div className='container mx-auto px-4 mt-20'>
            <h2 className='text-4xl font-semibold mb-2 text-center mb-10'>What I Do</h2>

            <div className='grid grid-cols-1, md:grid-cols-2, lg:grid-cols-3 gap-8'>
                {services &&
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;