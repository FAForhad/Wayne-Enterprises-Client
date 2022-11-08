import React, { useContext } from 'react';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import BarLoader from "react-spinners/BarLoader";
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation()
    if (loading) {
        return <BarLoader color="#36d7b7" speedMultiplier={0} />
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;


};

export default PrivateRoute;