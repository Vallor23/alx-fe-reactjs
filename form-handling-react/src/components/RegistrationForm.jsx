import { useState } from "react";
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Simulate API call
          console.log('Form submitted:', { username, email, password });
          // Clear the form
          setUsername('');
          setEmail('');
          setPassword('');
        }
      };

    const validateForm = () => {
        const newErrors = {};
        // Validation checks with exact variable names
        if (!username) newErrors.username = 'Username is required'; // Check for username
        if (!email) newErrors.email = 'Email is required';         // Check for email
        if (!password) newErrors.password = 'Password is required'; // Check for password
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Register</button>
        </form>
      );
    };

export default RegistrationForm;