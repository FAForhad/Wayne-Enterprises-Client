import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { createContext, useState } from 'react';
import app from '../../Firebase/firebase.config';

export const Authcontext = createContext()
const auth = getAuth(app)

const Usercontexts = ({ children }) => {

    const [user, setUser] = useState(null)

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const info = {
        user,
        register,
        updateUserProfile
    }
    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default Usercontexts;