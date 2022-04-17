import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();



    if (loading) {
        return <LoadingSpinner></LoadingSpinner> ;
    }



    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace />
    }


    return (children);
};

export default RequireAuth;