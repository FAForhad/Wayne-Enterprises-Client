import React from 'react';

const Addreview = () => {
    return (
        <div>
            <div className="mx-auto max-w-lg">

                <p className="mt-4 text-start text-7xl font-bold text-teal-500">
                    Place Your Review
                </p>
            </div>

            <form
                onSubmit={'handleAddService'}
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
    );
};

export default Addreview;