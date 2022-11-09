import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css'


const Review = ({ _id }) => {
    const [reviews, setReviews] = useState([])


    const url = `http://localhost:5000/reviews?serviceId=${_id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    console.log(reviews)


    return (
        <div className='reviwes'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-start font-bold leading-none tracking-tight text-teal-400 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative text-5xl">OVER 10,000 <br /> PEOPLE TRUST ME</span>
                        </span>
                    </h2>
                    <p className=" text-gray-900 font-semibold text-2xl">
                        How to start your adventure with professional teaching and dramatically increase your superpowers
                    </p>
                </div>
                <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Review;



