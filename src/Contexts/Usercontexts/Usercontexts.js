import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';

export const Authcontext = createContext()
const auth = getAuth(app)

const Usercontexts = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const info = {
        user,
        register,
        updateUserProfile,
        googleLogin,
        signInUser,
        logout,
        loading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)

            setLoading(false)

        })
        return () => { unsubscribe() }
    }, [])

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    );
};

export default Usercontexts;