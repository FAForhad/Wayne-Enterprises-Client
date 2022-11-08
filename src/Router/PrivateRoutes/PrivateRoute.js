import React, { useContext } from 'react';
import { Authcontext } from '../../Contexts/Usercontexts/Usercontexts';
import BarLoader from "react-spinners/BarLoader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <BarLoader
            color="#36d7b7"
            speedMultiplier={0}
        />
    }

    if (user) {
        return children;
    }

};

export default PrivateRoute;