import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card bg-base-100 shadow-xl border">
            <figure><img src={service.img} alt="service" className='h-60 w-full' /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {service.name}
                </h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;