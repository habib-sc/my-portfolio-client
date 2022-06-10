import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const id = useParams();
    
    
    useEffect( () => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    }, []);

    return (
        <div className='container mx-auto px-4'>
            <div>
                <h2 className='text-4xl font-semibold mb-2 text-center mb-10'>Project Detail</h2>

                <div className='grid grid-cols-1, md:grid-cols-2, lg:grid-cols-3 gap-16'>
                    
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;