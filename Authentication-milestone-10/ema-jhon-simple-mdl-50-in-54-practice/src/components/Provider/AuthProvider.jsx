import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser} from "firebase/auth"
import app from '../../firebse.config';
import { useLocation } from 'react-router-dom';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // const location = useLocation()
    // console.log(location)

    const [loading, setLoading] = useState(true)
    console.log(loading)

    const [user, setUser] = useState(null)
    console.log(user)


    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    
    }

    const signIn=(password, email)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, password, email)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, CurrentUser=>{
            setUser(CurrentUser)
            setLoading(false)
        })

        // stop observe
        return ()=>{
            return unSubscribe()
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;