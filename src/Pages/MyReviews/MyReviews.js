import { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import MySingleReview from './MySingleReview';
import GridLoader from "react-spinners/GridLoader";
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const MyReviews = () => {
    useTitle('My reviews')
    const [reviews, setReviews] = useState([])
    const { user, loading, logout } = useContext(Authcontext);


    useEffect(() => {
        fetch(`https://wayne-enterprises-server.vercel.app/myreviews?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('ReviewToken')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })

    }, [user?.email])


    const handleUpdateReview = (id) => {
        const proceed = window.confirm('Do you want to update youe review?')
        if (proceed) {
            const prompt = window.prompt('upadte please')


            fetch(`https://wayne-enterprises-server.vercel.app/myreviews/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: prompt })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id);
                        const approving = reviews.find(review => review._id === id);
                        toast.success('approved successfully')
                        const newReviews = [approving, ...remaining];
                        setReviews(newReviews)
                    }
                })
        }
    }


    const handleDeleteReview = (id) => {
        const confirm = window.confirm('Are you sure, you want to delete this review??')
        if (confirm) {
            fetch(`https://wayne-enterprises-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    }

    return (
        <div>
            <div >
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
                                <span className="relative text-5xl">YOUR REVIEWS</span>
                            </span>
                        </h2>
                        <p className=" text-gray-900 font-semibold text-2xl">

                        </p>
                    </div>
                    <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            loading ? <GridLoader
                                color="#36d7b7"
                                className='mx-auto my-auto min-h-screen'
                                size={30}
                                speedMultiplier={2} />

                                :
                                <>
                                    {
                                        reviews.length < 1 ? <p className='text-teal-300 text-center col-span-3 text-5xl md:text-6xl lg:text-8xl'>NO REVIEW ARE ADDED</p> :
                                            <>
                                                {
                                                    reviews.map(review => <MySingleReview key={review._id} handleDeleteReview={handleDeleteReview} handleUpdateReview={handleUpdateReview} review={review}></MySingleReview>)

                                                }
                                            </>
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>





    );
};

export default MyReviews;