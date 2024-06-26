import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import img from "../Assets/9 Gifts Every Book Nerd Wants Their Boyfriend To Get Them In Lieu Of Flowers This Valentine's Day.jpeg"
import Header from '../Components/Header';


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Fetch user data from the JSON URL
            const response = await fetch('http://localhost:3003/users');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
    
            // Find the user with the provided email in the fetched user data
            const user = userData.find(user => user.email === formData.email);
    
            if (!user) {
                throw new Error('User not found');
            }
    
            // Compare the password
            if (user.password === formData.password) {
                // If the password matches, navigate to the dashboard
                navigate('/dashboard');
            } else {
                // If the password doesn't match, throw an error
                throw new Error('Incorrect password');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle error (e.g., show error message to the user)
        }
    };
    

    return (
        <div>
            <Header />
            <div className='s-f'>
                <section className='signin'>
                    <div className='signin-l'>
                        <img src={img} alt="" />
                    </div>
                    <div className='signin-r'>
                        <h3>Log In</h3>
                        <form className='sign' onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                <input type="email"  placeholder='Email Address' name="email" onChange={handleChange} />
                            </label>
                            <label htmlFor="password">
                                <input  type="password" placeholder='Password'  name="password"  onChange={handleChange}   />
                            </label>
                            <div className="rem">
                                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                            </div>
                            <button type="submit">Log In</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;







 