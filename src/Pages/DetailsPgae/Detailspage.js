import React, { useContext } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import Review from './Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Addreview from './AddReview/Addreview';

const Detailspage = () => {
    const { user } = useContext(Authcontext)
    const details = useLoaderData()
    console.log(details)
    const { _id, description, name, picture, price, rating } = details

    return (
        <div>

            <section className="flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-3/5 lg:px-8" >

                    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                        <div className="mx-auto sm:text-center lg:max-w-2xl">
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <div>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-teal-400 sm:text-6xl md:mx-auto">
                                    <span className="relative inline-block">
                                        <svg
                                            viewBox="0 0 52 24"
                                            fill="currentColor"
                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                        >
                                            <defs>
                                                <pattern
                                                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                                    x="0"
                                                    y="0"
                                                    width=".135"
                                                    height=".30"
                                                >
                                                    <circle cx="1" cy="1" r=".7" />
                                                </pattern>
                                            </defs>
                                            <rect
                                                fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                                width="52"
                                                height="24"
                                            />
                                        </svg>

                                    </span>
                                    {name}
                                </h2>

                            </div>
                            <PhotoProvider speed={() => 800}
                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            >
                                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6 " data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <PhotoView src={picture}>
                                        <img
                                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                                            src={picture}
                                            alt=""
                                        />
                                    </PhotoView>
                                </div>
                            </PhotoProvider>
                            <div className='flex items-center justify-between'>
                                <div className="mb-3 text-red-600 font-medium text-lg flex items-center justify-center lg:justify-start">
                                    <p>Rating : </p>
                                    <svg className="w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z" />
                                    </svg> <AiTwotoneStar></AiTwotoneStar> {rating}
                                </div>
                                <div>
                                    <p className='text-gray-100 font-semibold text-lg' >Price : {price}</p>
                                </div>
                            </div>
                            <p className="max-w-xl mb-4 text-start text-gray-300 sm:mx-auto">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full lg:w-2/5 bg-slate-100" style={{ backgroundColor: 'hsla(181, 100%, 7%, 1)' }}>
                    <div className='my-auto'>
                        <Addreview></Addreview>
                    </div>
                </div>
            </section>
            <section >
                <Review key={_id} _id={_id}></Review>
            </section>

        </div>
    );
};

export default Detailspage;


