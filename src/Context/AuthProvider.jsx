import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const updateUserProfile = (displayName,photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])
console.log(user);
    const authInfo = {
        googleSignIn,
        createUser,
        loginUser,
        forgotPassword,
        updateUserProfile,
        logOut,
        setLoading,
        user,
        loading
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;