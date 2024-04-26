import React, { useState } from 'react';
import img from "../Assets/9 Gifts Every Book Nerd Wants Their Boyfriend To Get Them In Lieu Of Flowers This Valentine's Day.jpeg";
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Components/Header';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch('http://localhost:3003/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
          address: formData.address
        })
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      console.log("Registration is successful:", data);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <Header/>
      <div className='s-f'>
        <section className='signin'>
          <div className='signin-l'>
            <img src={img} alt="" />
          </div>
          <div className='signin-r'>
            <h3>Create Account</h3>
            <form className='sign' onSubmit={handleSubmit}>
              <label htmlFor="fullname">
                <input type="text" placeholder='Full Name' onChange={handleChange} name="fullName" />
              </label>
              <label htmlFor="email">
                <input type="email" placeholder='Email Address' onChange={handleChange} name="email" />
              </label>
              <label htmlFor="phone number">
                <input type="tel" placeholder='Phone Number' onChange={handleChange} name="phoneNumber" />
              </label>
              <label htmlFor="Address">
                <input type="text" placeholder='Address' onChange={handleChange} name="address" />
              </label>
              <label htmlFor="password">
                <input type="password" placeholder='Password' onChange={handleChange} name="password" />
              </label>
              <div className="rem">
                <p>Already have an account? <Link to='/login'>Log In</Link></p>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </section>
      </div> 
    </div>
  );
}

export default Signup;

