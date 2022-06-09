import React from 'react';

const Project = ({project}) => {
    return (
        <div class="card bg-base-100 shadow-xl border">
            <figure><img src={project.img} alt="service" className='h-80' /></figure>
            <div class="card-body">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 class="card-title">
                            {project.name}
                        </h2>
                    </div>
                    <div>
                        <a href={project.liveLink} className="bg-blue-200 text-center rounded text-primary font-semibold mt-5 px-3 py-1 border-primary" target="_blank" rel="noreferrer">Live Link</a>
                    </div>
                </div>
                <p>{project.description}</p>
                <div class="card-actions justify-center">
                    {
                        project.technology.map((tech, index) => <div key={index} class="badge badge-outline">{tech}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;