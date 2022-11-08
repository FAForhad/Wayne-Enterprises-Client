import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailspage = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            oaky
        </div>
    );
};

export default Detailspage;