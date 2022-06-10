import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../../Shared/Footer/Footer';
import Header from '../../../../Shared/Header/Header';

const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const {id} = useParams();

    useEffect( () => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => {
            const item = data.find(p => p._id == id);
            setProject(item);
        });
    }, [id]);

    return (
        <div className='h-[40vh] bg-secondary'>
            <Header></Header>
            <div className='container mx-auto px-4'>
                <div className='h-[40vh] flex justify-center items-center pt-8'>
                    <h3 className='text-3xl text-white'>Project Details of {project.name}</h3>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 mt-16 gap-8 min-h-[350px]'>
                    <div className='col-span-2'>
                        <img src={project.img} className='h-full w-full rounded-xl border' alt="" />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <img src={project.img2} className='h-full w-full rounded-xl border' alt="" />
                        </div>
                        <div>
                            <img src={project.img3} className='h-full w-full rounded-xl border' alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <h1>Project Name: {project.name}</h1>
                    <p>Description: {project.description}</p>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetail;