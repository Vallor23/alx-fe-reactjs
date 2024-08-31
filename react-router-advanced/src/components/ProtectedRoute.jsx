import { Navigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Home from '../Home';
import Login from './Login';

// function that checks if user is authenticated
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(token !== null);
    }, []);

    return isAuthenticated;
}

//Custom route that checks for authentication
const ProtectedRoute = ({element}) => {
    const isAuthenticated = useAuth();
  return isAuthenticated() ? element : <Navigate to="/login" replace/>
}

// PropTypes validation
ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public route to login component */}
            <Route path="/login" element={<Login />}/>
            {/* ProtectedRoute to Profile component */}
            <Route 
                path="/Profile" 
                element= {<ProtectedRoute element={<Profile />} />}
            />
            {/* Default route to Home component */}
            <Route path="/" element= {<Home />} />
        </Routes>
    )
}
export default AppRoutes;