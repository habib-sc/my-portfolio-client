import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project, setProject}) => {

    setProject(project);
    return (
        <div class="card bg-base-100 shadow-xl border">
            <figure className='p-5'><img src={project.img} alt="service" className='rounded-lg border'/></figure>
            <div class="card-body p-5 pt-0">
                <div>
                    <h2 class="card-title">
                        {project.name}
                    </h2>
                </div>
                <p>{project.description}</p>
                <div className='flex items-center gap-4'>
                    <div>
                        <a href={project.liveLink} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">Live Link</a>
                    </div>
                    <div>
                        <Link to={`/project/${project._id}`}><button href={project.liveLink} className="btn btn-secondary btn-sm" target="_blank" rel="noreferrer">View Detail</button></Link>
                    </div>
                </div>
                <div class="card-actions justify-center hidden">
                    {
                        project.technology.map((tech, index) => <div key={index} class="badge badge-outline">{tech}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;