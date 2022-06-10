import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import contactImg from '../../../../assets/images/constact.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_8kqxqmf', 'template_9so0sa1', form.current, 'Bep04oFnE0jdPw3HP')
            .then((result) => {
                toast.success("Message Sent Successfuly!")
            }, (error) => {
                toast.error("Opps! something is wrong!")
            });
        e.target.reset();
    };


    return (
        <div id='contact' className='container mx-auto px-4'>
            <div className='border rounded-xl shadow-xl p-4 mt-16'>
                <h2 className='text-4xl font-semibold text-center mt-5 mb-10'>Get In Touch</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <img src={contactImg} alt="" className='max-w-sm lg:max-w-md' />
                    </div>
                    <div>
                        <form
                            onSubmit={sendEmail}
                            ref={form}
                        >
                            <div className='grid grid-cols-1 gap-4'>
                                <input type="text" placeholder="Your Name" name="user_name" class="input input-bordered input-primary w-full" />
                                <input type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full" />
                                <input type="email" placeholder="Your Email" name="user_email" class="input input-bordered input-primary w-full" />
                                <textarea class="textarea textarea-primary" name="message" placeholder="Message"></textarea>
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