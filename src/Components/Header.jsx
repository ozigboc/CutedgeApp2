import React from 'react'
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [activeNav, setActiveNav] = useState('/')

  
  return (
    <div className='header shadow-lg'>
                       
        
      <nav>

        <Link to={'/'}> <h6 className='sharon'>TechHub</h6></Link>

        <div className='bars' onClick={handleClick}> 
        </div>

        <ul  className={click ? 'menu active' : 'menu'}>

          
            <NavLink to="/events" className='tab'  activeclassName = 'active'><li><FaShoppingCart /></li></NavLink>

            <NavLink to="/contact" className='tab btn'  ><li>Contact</li></NavLink>   
            <NavLink to="/login" className='tab btn btn1'><li>Login</li></NavLink>   

        </ul>

    </nav>
    
    <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Header


