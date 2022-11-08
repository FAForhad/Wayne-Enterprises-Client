import React from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>

            <section class="relative flex flex-wrap lg:h-screen lg:items-center">
                <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/3 lg:px-8 lg:py-24">
                    <div class="mx-auto max-w-lg text-center">

                        <p class="mt-4 text-7xl font-bold text-gray-400">
                            Sign In
                        </p>
                    </div>

                    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="email" class="sr-only">Email</label>

                            <div class="relative">
                                <input
                                    type="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <div class="relative">
                                <input
                                    type="password"
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                No account ?
                                <Link to='/signup' class="underline text-slate-50"> Sign up</Link>
                            </p>

                            <button
                                class="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                            >
                                <span
                                    class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                                >
                                    <svg
                                        class="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:ml-4">
                                    Sign In
                                </span>
                            </button>
                        </div>
                    </form>
                    <hr className='w-96 mx-auto my-4' />
                    <div>
                        <button
                            class="group relative inline-flex items-center overflow-hidden rounded border border-current my-1 px-8 py-3 text-teal-600 focus:outline-none focus:ring active:text-teal-500"

                        >
                            <span
                                class="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                            >
                                <SlSocialGoogle></SlSocialGoogle>
                            </span>

                            <span class="text-sm font-medium transition-all group-hover:ml-4">
                                Sign In Google
                            </span>
                        </button>
                    </div>
                </div>

                <div class="relative hidden lg:block md:hdden h-64 w-full sm:h-96 lg:h-full lg:w-2/3" style={{ backgroundColor: 'hsla(181, 100%, 7%, 1)', zIndex: '10' }}>
                    <div className=" map-container absolute md:top-56 md:left-52 lg:top-56 lg:left-72">
                        <iframe background="transparent" speed="1" style={{ width: '500px', height: '500px' }} src="https://embed.lottiefiles.com/animation/92809"></iframe>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default SignIn;