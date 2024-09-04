import React, { useState } from 'react';
import Modal from './modal';
import { RxCross2 } from 'react-icons/rx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp({ setSignUpPopUp, setLoginPopUp }) {
    const navigate = useNavigate();

    function handleLogin() {
        setSignUpPopUp(false);
        setLoginPopUp(true);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string().required('Password is required'),
        check: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    });

    const [errorUserExist, setErrorUserExist] = useState('')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            check: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const object = {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                };
                console.log(object);
                const res = await axios.post("https://roulette-backend-pearl.vercel.app/api/users/signup", object);
                console.log(res.data.data);
                if (res.data.data.user) {
                    setLoginPopUp(true);
                    setSignUpPopUp(false);
                }
            } catch (error) {
                console.log(error)
                setErrorUserExist(error.response.data.err)
                console.log(
                    "Failed to submit project:",
                    error.response ? error.response.data : error.message
                );
            }
        },
    });

    return (
        <Modal onClose={() => setSignUpPopUp(false)}>
            <div className='flex flex-col md:flex-row justify-end items-center gap-4 md:gap-8 mx-4 md:mx-6 mt-4 w-[700px]'>
                <div className='w-full max-w-[250px] md:max-w-[390px] hidden md:block absolute -left-16 top-6'>
                    <img className='object-cover' src="/dice.png" alt="Dice" />
                </div>

                <div className='w-full max-w-xs sm:max-w-sm md:max-w-sm relative'>
                    <button
                        onClick={() => setSignUpPopUp(false)}
                        className="absolute top-0 right-7 md:-top-4 md:-right-5 text-white text-2xl md:text-4xl font-light bg-[#22232F] p-2 md:p-3 rounded-full"
                    >
                        <RxCross2 size={24} />
                    </button>
                    <div className='flex flex-col items-center'>
                        <div>
                            <img src="/logo.svg" alt="" className='w-20 md:w-24' />
                        </div>
                        <p className='text-white mt-2 text-sm md:text-base'>Create New Account</p>
                        <div className='mt-3 cursor-pointer'>
                            <img src="/signUp/google.svg" alt="" className='w-7 md:w-9' />
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-4 mb-2 text-[#818E9D]">
                        <div className="w-20 md:w-36 h-[2px] bg-grad"></div>
                        <p>OR</p>
                        <div className="w-20 md:w-36 h-[2px] bg-grad"></div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='w-[50vw] mx-auto md:w-full'>
                            <p className='text-red-500 text-sm'>{errorUserExist}</p>
                            <div className='mb-3'>
                                <label htmlFor="name" className='text-[#818E9D] text-sm'>Username</label>
                                <input
                                    className={`w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] borderplaceholder-gray-500 text-xs md:text-sm outline-none text-white ${formik.errors.name && formik.touched.name ? 'border-red-500' : ''}`}
                                    {...formik.getFieldProps('name')}
                                    type="text"
                                    id='name'
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email" className='text-[#818E9D] text-sm'>Email</label>
                                <input
                                    className={`w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] borderplaceholder-gray-500 text-xs md:text-sm outline-none text-white ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''}`}
                                    {...formik.getFieldProps('email')}
                                    type="email"
                                    id='email'
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="password" className='text-[#818E9D] text-sm'>Password</label>
                                <input
                                    className={`w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] borderplaceholder-gray-500 text-xs md:text-sm outline-none text-white ${formik.errors.password && formik.touched.password ? 'border-red-500' : ''}`}
                                    {...formik.getFieldProps('password')}
                                    type="password"
                                    id='password'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                                ) : null}
                            </div>

                            <div className='mt-3'>
                                <label className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox rounded-lg h-4 w-4 md:h-5 md:w-5 text-blue-600 bg-[#22232F] border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        {...formik.getFieldProps('check')}
                                    />
                                    <p id='check' className='text-xs md:text-sm text-[#818E9D]'>I certify that I am at least 18 years of age and I agree to the <span className='text-white'>Terms of Service</span></p>
                                </label>
                                {formik.touched.check && formik.errors.check ? (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.check}</div>
                                ) : null}
                            </div>

                            <div className='mt-3'>
                                <label className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox rounded-lg h-4 w-4 md:h-5 md:w-5 text-blue-600 bg-[#22232F] border-gray-300 focus:ring-blue-500 focus:ring-2"
                                    />
                                    <p id='check' className='text-xs md:text-sm text-[#818E9D]'>I want to receive <span className='text-white'>News and Offers</span></p>
                                </label>
                            </div>

                            <button type="submit" className='bg-[#FFC701] mt-4 mb-2 text-center w-full py-2 md:py-2.5 rounded-md text-sm md:text-base'>Start Playing</button>
                            <p className='text-center text-xs md:text-sm text-[#818E9D]'>Already have an account? <button className='text-white' onClick={() => handleLogin()}>Login</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default SignUp;