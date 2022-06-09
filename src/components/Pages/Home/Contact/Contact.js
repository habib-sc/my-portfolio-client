import React from 'react';
import contactImg from '../../../../assets/images/constact.png';

const Contact = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='border rounded-xl shadow-xl p-4 mt-16'>
                <h2 className='text-4xl font-semibold text-center mt-5 mb-10'>Get In Touch</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <img src={contactImg} alt="" className='max-w-sm lg:max-w-md' />
                    </div>
                    <div>
                        <form>
                            <div className='grid grid-cols-1 gap-4'>
                                <input type="text" placeholder="Your Name" class="input input-bordered input-primary w-full" />
                                <input type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full" />
                                <input type="email" placeholder="Your Email" class="input input-bordered input-primary w-full" />
                                <textarea class="textarea textarea-primary" placeholder="Message"></textarea>
                            </div>
                            <button className='btn btn-primary w-full mt-4'>Send Mail</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;