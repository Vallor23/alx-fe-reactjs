import { useState } from "react";
import './RegisterForm.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData(prevState => ({...prevState, [name]: value}))
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validateForm(formData);
        setErrors(newErrors);
        console.log('New Errors are :', newErrors)//debug

        if(Object.keys(newErrors).length === 0) {
            console.log(formData);
            console.log('Form submitted successfully!');
            
        } else {
            console.log('Form submission failed due to validation errors');
        }
    };

    const validateForm = (data) => {
        const errors = {};
        
        if (!data.username.trim()) {
            errors.username = 'Username is required';
        } else if (data.username.length < 4) {
            errors.username = 'Username must be at least 4 characters';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        return errors;
    };

    return (
        <div className="form-container">
            <h1 className="form-header">Form Validation</h1>
            <form onSubmit={handleSubmit} >
            <div>
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Type your username..."
                />
                {errors.username && (
                    <span className="error-message">
                        {errors.username}
                    </span>
                )}
            </div>
            <div>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Type your email..."
                />
                {errors.email && (
                    <span className="error-message">
                        {errors.email}
                    </span>
                )}
            </div>
            <div>
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your password..."
                />
                {errors.password && (
                    <span className="error-message">
                        {errors.password}
                    </span>
                )}
            </div>        
            <button type="submit" className="submit-btn">Submit</button>
        </form>
        </div>
        
    ) 
}

export default RegisterForm;