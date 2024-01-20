import { createContext, useEffect, useState} from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export  const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=> {
        return signOut(auth)
        
        
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);
    const authInfo = {
        user,
        loading,
        createUser,
        setUser,
        logIn,
        logOut,
        setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;