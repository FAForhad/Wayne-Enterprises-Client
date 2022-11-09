import React from 'react';
import { Link } from 'react-router-dom';

const DescriptionContent = () => {
    return (
        <div style={{ backgroundColor: 'hsla(181, 100%, 7%, 1)' }}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="p-8 rounded bg-black shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-start text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl sm:leading-none">
                                Mentored Practical Experience
                                <br className="hidden md:block" />
                                Designed to help strengthen your
                                <span className="inline-block text-teal-400">
                                    professional judgement
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-300">
                                This Mentored Practical Experience module is delivered in the CA Program's accredited Graduate Diploma of Chartered Accounting course which is currently in teach out.
                            </p>
                            <Link
                                to='/services'
                                className="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-8 py-3 focus:outline-none focus:ring"

                            >
                                <span
                                    className="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500"
                                ></span>

                                <span
                                    className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                                >
                                    Learn Account's
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionContent;