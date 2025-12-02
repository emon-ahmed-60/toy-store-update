import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user){
        return children
    } else {
        return <Navigate to="/login" state={location.pathname}/>
    }
};

export default PrivateRoutes;