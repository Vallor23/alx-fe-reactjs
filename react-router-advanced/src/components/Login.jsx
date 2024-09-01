import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    //Logic to handle Login, e.g setting authentication token in local storage
    localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    navigate('/profile');//Redirect to the Profile page after the Login
  };

  return <button onClick={handleLogin}>Login</button>
};

export default Login;