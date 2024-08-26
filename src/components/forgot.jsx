import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import { RxCross2 } from 'react-icons/rx';

function Forgot({ setForgotPass }) {
    return (
        <Modal onClose={() => setForgotPass(false)}>
            <div className='bg-[#131620] mx-auto p-4 md:p-5'>
                <div className='flex flex-col md:flex-row justify-end items-center md:items-start gap-4 md:gap-8 mt-4 w-[700px] mx-auto py-3'>
                    <div className='w-full max-w-[250px] md:max-w-[320px] hidden md:block absolute -left-12 top-5'>
                        <img className='object-cover' src="/dice.png" alt="Dice" />
                    </div>

                    <div className='w-full max-w-xs sm:max-w-sm md:max-w-sm relative'>
                        <button
                            onClick={() => setForgotPass(false)}
                            className="absolute top-0 right-7 md:-top-4 md:-right-5 text-white text-2xl md:text-4xl font-light bg-[#22232F] p-2 md:p-3 rounded-full"
                        >
                            <RxCross2 size={24} />
                        </button>
                        <div className='flex flex-col items-center'>
                            <div>
                                <img src="/logo.svg" alt="" className='w-20 md:w-24' />
                            </div>
                            <p className='text-white mt-2 text-sm md:text-base'>Log Into Your Account</p>
                            <div className='mt-3 cursor-pointer'>
                                <img src="/signUp/google.svg" alt="" className='w-7 md:w-9' />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-4 mb-2 text-[#818E9D]">
                            <div className="w-20 md:w-full h-[2px] bg-grad"></div>
                        </div>

                        <div className='w-[50vw] mx-auto md:w-full'>
                            <div className='mb-3'>
                                <label htmlFor="password" className='text-[#818E9D] text-sm'>Password</label>
                                <input
                                    className="w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] placeholder-gray-500 text-xs md:text-sm outline-none text-white"
                                    type="password" id='password'
                                />
                                <button onClick={() => setForgotPass(true)} className='text-white text-xs md:text-sm mt-2'>Forgot your Password?</button>
                            </div>

                            <div className='mt-3'>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox rounded-lg h-4 w-4 md:h-5 md:w-5 text-blue-600 bg-[#22232F] border-gray-300 focus:ring-blue-500 focus:ring-2" name='check' />
                                    <p id='check' className='text-xs md:text-sm text-[#818E9D]'>Remember Me</p>
                                </label>
                            </div>

                            <button className='bg-[#FFC701] mt-6 mb-4 text-center w-full py-2 md:py-2.5 rounded-md text-sm md:text-base font-semibold'>Send</button>
                            <p className='text-center text-xs md:text-sm text-[#818E9D]'>Don't have an account? <Link className='text-white' to={'/signup'}>SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Forgot;
