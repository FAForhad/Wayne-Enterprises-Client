import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Allservices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllServices(data)
            })
    }, [])
    return (
        <div class="container my-24 px-6 mx-auto">

            <section class="mb-32 text-gray-800 text-center lg:text-left">
                <h2 class="text-7xl font-bold mb-12 text-teal-500">Build a Business Foundation for  <br /><span className='text-5xl text-gray-500'>Good Initial Planning</span></h2>

                <div class="grid lg:grid-cols-3 gap-x-6 gap-y-12">
                    {
                        allServices.map(service => <Service key={service._id} service={service}></Service>)
                    }

                </div>
            </section>


        </div>
    );
};

export default Allservices;