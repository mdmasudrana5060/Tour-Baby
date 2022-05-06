import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from '../LogIn/Firebase/Firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');





    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                } else {
                    setUser({})
                }
                setIsLoading(false);
            });
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        })
            .finally(() => setIsLoading(false))
    }





    return {
        user,
        isLoading,
        googleSignIn,
        logOut,
        error, setError
    }
};

export default useFirebase;