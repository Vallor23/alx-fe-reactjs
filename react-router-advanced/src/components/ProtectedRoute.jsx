import { Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useAuth = () => {
    const token = localStorage.getItem('authToken');
    return token !== null;
}

//Custom route that checks for authentication
const ProtectedRoute = ({element}) => {
    const isAuthenticated = useAuth();
    console.log('User is authenticated:',isAuthenticated);//debug

    return isAuthenticated ? element : <Navigate to="/login" replace/>
}

// PropTypes validation
ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
};

export default ProtectedRoute;