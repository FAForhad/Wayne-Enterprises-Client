import React from 'react';
import toast from 'react-hot-toast';
import { SlChart } from "react-icons/sl";
import useTitle from '../../Hook/useTitle';
import './Addservices.css'

const Addservices = () => {
    useTitle('Add service')
    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const picture = form.picture.value;
        const rating = form.rating.value;
        const price = form.price.value
        const name = form.name.value;
        const description = form.description.value;

        const service = {
            picture: picture,
            rating: rating,
            price: price,
            name: name,
            description: description,
            time: Date.now()
        }

        fetch('https://wayne-enterprises-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added successfully')
                    form.reset();
                }
            })
            .catch(err => console.err(err))

    }

    return (
        <div>
            <section className="">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        className="background-image relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >


                        <div className="hidden lg:relative lg:block lg:p-12">

                            <h2 className="mt-6 text-2xl font-bold text-start my-5 text-teal-400 sm:text-3xl md:text-4xl lg:text-7xl">
                                <SlChart></SlChart>Welcome <br /> To Our Service
                            </h2>

                            <p className="mt-4 leading-relaxed text-white/90">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                dolorum aliquam, quibusdam aperiam voluptatum.
                            </p>
                        </div>
                    </section>

                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className="relative -mt-16 block lg:hidden">
                                <h1
                                    className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Welcome to Squid 🦑
                                </h1>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                    nam dolorum aliquam, quibusdam aperiam voluptatum.
                                </p>
                            </div>

                            <div className="mx-auto max-w-lg">

                                <p className="mt-4 text-start text-7xl font-bold text-teal-500">
                                    Place Your Service
                                </p>
                            </div>

                            <form
                                onSubmit={handleAddService}
                                className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                                <div>
                                    <label type="name" className="sr-only">Service Name</label>

                                    <div className="relative">
                                        <input
                                            name='name'
                                            type="name"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter Service name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label type="picture" className="sr-only">Photo URL</label>
                                    <div className="relative">
                                        <input
                                            name='picture'
                                            type="picture"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Enter Service Photo URL"
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div>
                                        <label type="rating" className="sr-only">Service Rating</label>
                                        <div className="relative">
                                            <input
                                                name='rating'
                                                type="rating"
                                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                placeholder="Service Rating"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label type="price" className="sr-only">Service Price</label>
                                        <div className="relative">
                                            <input
                                                name='price'
                                                type="price"
                                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                placeholder="Service Price"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label type="description" className="sr-only">Description</label>
                                    <div className="relative">
                                        <textarea
                                            name='description'
                                            type="description"
                                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                            placeholder="Service Description"
                                        />
                                    </div>
                                </div>

                                <div>

                                    <button
                                        type='submit'
                                        className="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-8 py-3 focus:outline-none focus:ring"

                                    >
                                        <span
                                            className="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500"
                                        ></span>

                                        <span
                                            className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                                        >
                                            Place Your Service
                                        </span>
                                    </button>
                                </div>
                            </form>
                            <hr className='w-96 mx-auto my-4' />
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
};

export default Addservices;