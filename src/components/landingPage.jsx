import React, { useState } from 'react';
import Modal from './modal';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login({ setLoginPopUp, setForgotPass, setSignUpPopUp, setLoginUser }) {
    const navigate = useNavigate();

    function handleSignUp() {
        setSignUpPopUp(true);
        setLoginPopUp(false);
    }

    function handleForgotPass() {
        setForgotPass(true);
        setLoginPopUp(false);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        remember: Yup.boolean(),
    });

    const [passwordError, setPasswordError] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setErrors }) => {
            try {
                const object = {
                    email: values.email,
                    password: values.password,
                };
                console.log(object);
                const res = await axios.post("http://localhost:5000/api/users/login", object);
                console.log(res.data.data);
                if (res.data.data) {
                    setLoginUser(res.data.data); // Assuming you have a method to set the logged-in user
                    navigate("/");
                    setLoginPopUp(false);
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    const { errors } = error.response.data; // Assuming server returns { errors: { field: "error message" } }
                    setPasswordError('Please Enter Right Password')
                    if (errors) {
                        setErrors(errors); // Set form errors for Formik to display
                    } else {
                        console.log("Error:", error.response.data.message || error.message);
                    }
                } else {
                    console.log("Failed to submit:", error.message);
                }
            }
        },
    });

    return (
        <Modal onClose={() => setLoginPopUp(false)}>
            <div className='bg-[#131620] mx-auto p-4 md:p-5'>
                <div className='flex flex-col md:flex-row justify-end items-center md:items-start gap-4 md:gap-8 md:mx-6 mt-4 w-[700px] mx-auto'>
                    <div className='w-full max-w-[250px] md:max-w-[370px] hidden md:block absolute -left-2 top-5 lg:-left-16 lg:top-4'>
                        <img className='object-cover' src="/dice.png" alt="Dice" />
                    </div>

                    <div className='w-full max-w-xs sm:max-w-sm md:max-w-sm relative'>
                        <button
                            onClick={() => setLoginPopUp(false)}
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
                            <div className="w-20 md:w-36 h-[2px] bg-grad"></div>
                            <p>OR</p>
                            <div className="w-20 md:w-36 h-[2px] bg-grad"></div>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className='w-[50vw] mx-auto md:w-full'>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='text-[#818E9D] text-sm'>Email</label>
                                    <input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className={`w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] placeholder-gray-500 text-xs md:text-sm outline-none text-white ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                        type="email"
                                        name='email'
                                        id='email'
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <div className='mb-3'>
                                    <label htmlFor="password" className='text-[#818E9D] text-sm'>Password</label>
                                    <input
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        className={`w-full mt-1 px-3 py-2 rounded-md font-medium bg-[#22232F] placeholder-gray-500 text-xs md:text-sm outline-none text-white ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                                        type="password"
                                        name='password'
                                        id='password'
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                                    ) : null}
                                    <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                                    <button onClick={() => handleForgotPass()} className='text-white text-xs md:text-sm mt-2'>Forgot your Password?</button>
                                </div>

                                <div className='mt-3'>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            value={formik.values.remember}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="checkbox"
                                            className="form-checkbox rounded-lg h-4 w-4 md:h-5 md:w-5 text-blue-600 bg-[#22232F] border-gray-300 focus:ring-blue-500 focus:ring-2"
                                            name='remember'
                                        />
                                        <p id='remember' className='text-xs md:text-sm text-[#818E9D]'>Remember Me</p>
                                    </label>
                                </div>

                                <button type="submit" className='bg-[#FFC701] mt-6 mb-4 text-center w-full py-2 md:py-2.5 rounded-md text-sm md:text-base font-semibold'>
                                    Log In
                                </button>
                                <p className='text-center text-xs md:text-sm text-[#818E9D]'>
                                    Don't have an account? <button className='text-white' onClick={() => handleSignUp()}>Sign Up</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Login;