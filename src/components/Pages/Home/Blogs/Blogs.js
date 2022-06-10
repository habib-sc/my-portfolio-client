import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';

const Blogs = () => {
    return (
        <div className='h-[40vh] bg-secondary'>
            <Header></Header>
            <div className='container mx-auto px-4'>
                <div className='h-[40vh] flex justify-center items-center pt-8'>
                    <h3 className='text-3xl text-white'>My Blogs</h3>
                </div>

                <div className='h-[80vh] flex items-center justify-center'>
                    <h1 className='text-center text-3xl font-semibold'>Comming Soon!</h1>
                </div>
                
                
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;