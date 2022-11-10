import React, { useContext, useState } from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import '../AddServices/Addservices.css'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import { setAuthToken } from '../../Api/Auth';

const Signup = () => {
    const [error, setError] = useState('')
    const { register, updateUserProfile, googleLogin } = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const from = location?.state?.from?.pathname || '/'
        register(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                handleupdateUser(name, photo)
                form.reset()
                setError('')
                setAuthToken(user)
                toast.success('Successfully Sign Up!', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
                navigate(from, { replace: true } || '/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleupdateUser = (name, picture) => {
        const profile = {
            displayName: name,
            photoURL: picture
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handleGoogleLogin = () => {
        const from = location?.state?.from?.pathname || '/'
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                setAuthToken(user)
                navigate(from, { replace: true } || '/')
                toast.success('Login Successful')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div >
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/3 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">

                        <p className="mt-4 text-7xl font-bold text-gray-400">
                            Sign Up
                        </p>
                    </div>

                    <form
                        onSubmit={handleSignUp}
                        className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label type="name" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    name='name'
                                    type="name"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label type="photo" className="sr-only">Photo URL</label>
                            <div className="relative">
                                <input
                                    name='photo'
                                    type="photo"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter Photo URL"
                                />
                            </div>
                        </div>
                        <div>
                            <label type="Email" className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    name='email'
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div>
                            <label type="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    name='password'
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Allready have account ?
                                <Link to='/signin' className="underline text-gray-50"> Sign In</Link>
                            </p>

                            <button
                                type='submit'
                                className="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                            >
                                <span
                                    className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:ml-4">
                                    Sign up
                                </span>
                            </button>
                        </div>
                    </form>
                    <p className='text-red-500'>{error}</p>
                    <hr className='w-96 mx-auto my-4' />
                    <div>
                        <button
                            onClick={handleGoogleLogin}
                            className="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                        >
                            <span
                                className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                            >
                                <SlSocialGoogle></SlSocialGoogle>
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:ml-4">
                                Sign In Google
                            </span>
                        </button>
                    </div>
                </div>

                <div className="background-image relative hidden lg:block md:hdden h-64 w-full sm:h-96 lg:h-full lg:w-2/3">
                    <div className=" map-container absolute md:top-56 md:left-52 lg:top-56 lg:left-72">
                        <iframe background="transparent" speed="1" style={{ width: '500px', height: '500px' }} src="https://embed.lottiefiles.com/animation/92809"></iframe>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Signup;