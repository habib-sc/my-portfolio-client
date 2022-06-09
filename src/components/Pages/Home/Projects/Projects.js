import React, { useEffect, useState } from 'react';
import Project from './Project/Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);

    return (
        <div className='container mx-auto px-4 mt-20'>
            <h2 className='text-4xl font-semibold mb-2 text-center mb-10'>Recent Project</h2>

            <div className='grid grid-cols-1, md:grid-cols-2, lg:grid-cols-3 gap-8'>
                {projects &&
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;