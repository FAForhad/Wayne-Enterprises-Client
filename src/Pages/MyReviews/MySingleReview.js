import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const MySingleReview = ({ review }) => {
    const { email, name, serviceName, ratings, picture, description } = review;
    return (
        <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow  dark:text-gray-100" style={{ backgroundColor: 'hsla(181, 100%, 7%, 1)' }}>
                <article>
                    <h2 className="text-xl font-bold">{serviceName}</h2>
                    <p className="mt-4 dark:text-gray-400">{description?.length > 150 ? description.slice(0, 150) + '...' : description}</p>
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center mt-8 space-x-4">
                            <img src={picture} alt={name} className="w-10 h-10 rounded-full dark:bg-gray-500" />
                            <div>
                                <h3 className="text-sm font-medium">{name}</h3>
                                <div className="my-2 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                                    </svg> <AiTwotoneStar></AiTwotoneStar> {ratings}
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='mt-7 '>
                                <button
                                    to='/services'
                                    className="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-5 py-1 focus:outline-none focus:ring"

                                >
                                    <span
                                        className="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500"
                                    ></span>

                                    <span
                                        className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                                    >
                                        Edit
                                    </span>
                                </button>
                            </div>
                            <div className='mt-7'>
                                <button
                                    to='/services'
                                    className="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-3 py-1 focus:outline-none focus:ring"

                                >
                                    <span
                                        className="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500"
                                    ></span>

                                    <span
                                        className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                                    >
                                        Delete
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default MySingleReview;