import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Authcontext } from '../../../Contexts/Usercontexts/Usercontexts';

const Addreview = ({ details }) => {
    const { user } = useContext(Authcontext)
    const { photoURL } = user;
    const { name, _id } = details

    const handleAddreview = (event) => {
        event.preventDefault()
        const form = event.target;
        const authname = form.name.value;
        const email = form.email.value;
        const ratings = form.ratings.value;
        if (ratings > 5) {
            return toast.error("Rating should 5 or less")
        }
        const description = form.description.value;

        const review = {
            ratings: ratings,
            picture: photoURL,
            name: authname,
            email: email,
            serviceId: _id,
            serviceName: name,
            description: description,
            time: Date.now()
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                if (data.acknowledged) {
                    toast.success('Review Successful!', {
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

                }

            })
    }

    return (
        <div>
            <div className="mx-auto max-w-lg">

                <p className="mt-4 text-start text-7xl font-bold text-teal-500">
                    Place Your Review
                </p>
            </div>

            <form
                onSubmit={handleAddreview}
                className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                <div>
                    <label type="name" className="sr-only">Service Name</label>

                    <div className="relative">
                        <input
                            name='name'
                            type="name"
                            className="w-full rounded-lg text-gray-500 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            value={user?.displayName}
                            readOnly
                        />
                    </div>
                </div>

                <div>
                    <label type="email" className="sr-only">Photo URL</label>
                    <div className="relative">
                        <input
                            name='email'
                            type="email"
                            className="w-full rounded-lg text-gray-500 border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            value={user?.email}
                            readOnly
                        />
                    </div>
                </div>

                <div>
                    <label type="rating" className="sr-only">Service Rating</label>
                    <div className="relative">
                        <input
                            name='ratings'
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Your Rating"

                        />
                    </div>
                </div>
                <div>
                    <label type="description" className="sr-only">Description</label>
                    <div className="relative">
                        <textarea
                            name='description'
                            type="description"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Review Description"
                            required
                        />
                    </div>
                </div>

                <div>

                    <button
                        type='submit'
                        className="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-8 py-3 focus:outline-none focus:ring"

                    >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500 "
                        ></span>

                        <span
                            className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                        >
                            Place Your Review
                        </span>
                    </button>
                </div>
            </form>
            <hr className='w-96 mx-auto my-4' />
        </div>
    );
};

export default Addreview;