import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    // console.log('Location:', location?.state?.from)

    if (user.email) {
        return children;
    }
    else {
        return <Navigate to="/login" state= {{from:location}} replace/>
        /*  <Navigate
            to={{
                pathname: '/login',
                state: { from: location }
            }} /> */
    }
};

export default PrivateRoute;