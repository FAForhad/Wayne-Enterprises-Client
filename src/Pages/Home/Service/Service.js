import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { _id, name, picture, price, rating, description } = service
    return (
        <>
            <div className="mb-12 lg:mb-0" data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500">

                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 rounded-bl-3xl rounded-tr-3xl"
                        style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <PhotoView src={picture}>
                            <img src={picture} className="w-full h-64" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                <h5 className="text-lg text-teal-500 font-bold mb-3">{name}</h5>
                <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor"
                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                    </svg> <AiTwotoneStar></AiTwotoneStar> {rating}
                </div>
                <p className='font-semibold my-1 text-gray-200'>Price :  {price}</p>
                <p className="text-gray-300">
                    {
                        description.length > 100 ? description.slice(0, 100) + '...' : description
                    }
                </p>
                <Link
                    to={`/services/${_id}`}
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
                        Details
                    </span>
                </Link>
            </div>

        </>);
};

export default Service;