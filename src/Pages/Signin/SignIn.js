import React, { useContext, useState } from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import '../AddServices/Addservices.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import { setAuthToken } from '../../Api/Auth';
import useTitle from '../../Hook/useTitle';

const SignIn = () => {
    useTitle("Sign in")
    const [errors, setError] = useState('')
    const { signInUser, googleLogin } = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location?.state?.from?.pathname || '/'
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setAuthToken(user)

                form.reset()
                setError('')
                toast.success('Successfully Sign In!', {
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


    const handleGoogleSignin = () => {
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
        <div>

            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className=" w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/3 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">

                        <p className="mt-4 text-7xl font-bold text-gray-400">
                            Sign In
                        </p>
                    </div>

                    <form onSubmit={handleSignIn} className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label type="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    name='email'
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"

                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
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

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account ?
                                <Link to='/signup' className="underline text-slate-50"> Sign up</Link>
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
                                    Sign In
                                </span>
                            </button>
                        </div>
                    </form>
                    <p className='text-red-500'>{errors}</p>
                    <hr className='w-96 mx-auto my-4' />
                    <div>
                        <button
                            onClick={handleGoogleSignin}
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

                <div className="background-image relative hidden lg:block md:hdden h-64 w-full sm:h-96 lg:h-full lg:w-2/3" >
                    <div className=" map-container absolute md:top-56 md:left-52 lg:top-56 lg:left-72">
                        <iframe background="transparent" speed="1" style={{ width: '500px', height: '500px' }} src="https://embed.lottiefiles.com/animation/92809"></iframe>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default SignIn;