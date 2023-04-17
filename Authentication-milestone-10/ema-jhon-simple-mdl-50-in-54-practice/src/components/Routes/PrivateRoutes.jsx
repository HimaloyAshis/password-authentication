import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { faCropSimple } from '@fortawesome/free-solid-svg-icons';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log({user})

    const location = useLocation()
    console.log(location)

    if(loading){
        return <div>Loading .....</div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location }} replace></Navigate>

   
};

export default PrivateRoutes;