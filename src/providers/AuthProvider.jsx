import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // update a user 
    const updateUserProfile = (name, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            email: email
        });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);   
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);





    const userInfo = {
        user,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        facebookLogin,
        logOut,
        updateUserProfile
    }

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider;