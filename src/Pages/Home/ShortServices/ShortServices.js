import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const ShortServices = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])


    return (
        <div class="container my-24 px-6 mx-auto">

            <section class="mb-32  text-center lg:text-left">
                <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-12 text-teal-500">Build a Business Foundation for  <br /><span className='lg:text-5xl text-3xl md:text-4xl text-gray-500'>Good Initial Planning</span></h2>

                <div class="grid lg:grid-cols-3 gap-x-6">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }

                </div>
            </section>

            <Link
                to='/services'
                class="group relative inline-block overflow-hidden border rounded-sm border-teal-600 px-8 py-3 focus:outline-none focus:ring"

            >
                <span
                    class="absolute inset-y-0 left-0 w-[2px] bg-teal-900 transition-all group-hover:w-full group-active:bg-teal-500"
                ></span>

                <span
                    class="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                >
                    View All
                </span>
            </Link>

        </div>
    );
};

export default ShortServices;