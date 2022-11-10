import React, { useContext, useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import GridLoader from "react-spinners/GridLoader";
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import useTitle from '../../Hook/useTitle';

const Allservices = () => {
    useTitle('All services')
    const { loading, setLoading } = useContext(Authcontext)
    const [allServices, setAllServices] = useState([])


    // Showing All the services
    useEffect(() => {
        fetch('https://wayne-enterprises-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setAllServices(data)
            }, 3000)
    }, [])
    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-12 text-teal-500">Build a Business Foundation for  <br /><span className='lg:text-5xl text-3xl md:text-4xl text-gray-500'>Good Initial Planning</span></h2>

                <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12">
                    {
                        allServices.length < 1 || loading ? <GridLoader
                            color="#36d7b7"
                            className='mx-auto'
                            size={30}
                            speedMultiplier={.5}

                        />
                            :
                            <>
                                {
                                    allServices.map(service => <Service key={service._id} service={service}></Service>)
                                }
                            </>


                    }
                </div>
            </section>


        </div>
    );
};

export default Allservices;